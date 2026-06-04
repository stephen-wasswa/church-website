import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// MySQL connection setup
let pool: mysql.Pool | null = null;
if (process.env.MYSQL_URL || process.env.MYSQL_HOST) {
  try {
    if (process.env.MYSQL_URL) {
      pool = mysql.createPool(process.env.MYSQL_URL);
    } else {
      pool = mysql.createPool({
        host: process.env.MYSQL_HOST || "localhost",
        user: process.env.MYSQL_USER || "root",
        password: process.env.MYSQL_PASSWORD || "",
        database: process.env.MYSQL_DATABASE || "alimunze"
      });
    }
    console.log("MySQL pool created");
  } catch (err) {
    console.error("Failed to create MySQL pool", err);
  }
}

// --- In-Memory Fallback Database ---
export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  description: string;
  videoUrl?: string;
  audioUrl?: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface ContactMessage {
  id: string | number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  visit_date: string;
  message: string;
  created_at: string;
}

export interface PrayerRequest {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  prayer_request: string;
  created_at: string;
}

let sermons: Sermon[] = [];
let events: ChurchEvent[] = [];

let messages: ContactMessage[] = [];
let prayers: PrayerRequest[] = [];

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

async function startServer() {
  const app = express();
  const PORT = 3600;

  app.use(express.json());

  // === API ROUTES ===
  
  // Sermons
  app.get("/api/sermons", (req, res) => {
    res.json(sermons);
  });

  app.post("/api/sermons", (req, res) => {
    const newSermon = { ...req.body, id: generateId() };
    sermons.unshift(newSermon);
    res.json(newSermon);
  });

  app.delete("/api/sermons/:id", (req, res) => {
    sermons = sermons.filter(s => s.id !== req.params.id);
    res.json({ success: true });
  });

  // Events
  app.get("/api/events", (req, res) => {
    res.json(events);
  });

  app.post("/api/events", (req, res) => {
    const newEvent = { ...req.body, id: generateId() };
    events.push(newEvent);
    events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    res.json(newEvent);
  });

  app.delete("/api/events/:id", (req, res) => {
    events = events.filter(e => e.id !== req.params.id);
    res.json({ success: true });
  });

  // Auth API
  app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
    
    if (username === "admin" && password === adminPassword) {
      res.json({ success: true, role: "Super Admin" });
    } else if (username === "editor" && password === "editor123") {
      res.json({ success: true, role: "Content Editor" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });

  // Messages Form Backend
  app.get("/api/messages", async (req, res) => {
    if (pool) {
      try {
        const [rows] = await pool.query("SELECT * FROM messages ORDER BY created_at DESC");
        return res.json(rows);
      } catch (err) {
        console.error("SQL Error", err);
      }
    }
    res.json(messages);
  });

  app.post("/api/messages", async (req, res) => {
    const { first_name, last_name, email, phone, visit_date, message } = req.body;
    
    if (pool) {
      try {
        const [result] = await pool.query(
          "INSERT INTO messages (first_name, last_name, email, phone, visit_date, message) VALUES (?, ?, ?, ?, ?, ?)",
          [first_name, last_name, email, phone, visit_date || null, message]
        );
        return res.json({ success: true, id: (result as any).insertId });
      } catch (err) {
        console.error("SQL Error", err);
        return res.status(500).json({ error: "Database error" });
      }
    }
    
    // In-memory fallback
    const newMessage = {
      id: generateId(),
      first_name,
      last_name,
      email,
      phone,
      visit_date,
      message,
      created_at: new Date().toISOString()
    };
    messages.unshift(newMessage);
    res.json({ success: true, id: newMessage.id });
  });

  // Prayers Form Backend
  app.get("/api/prayers", async (req, res) => {
    if (pool) {
      try {
        const [rows] = await pool.query("SELECT * FROM prayers ORDER BY created_at DESC");
        return res.json(rows);
      } catch (err) {
        console.error("SQL Error", err);
      }
    }
    res.json(prayers);
  });

  app.post("/api/prayers", async (req, res) => {
    const { name, email, phone, prayer_request } = req.body;
    
    if (pool) {
      try {
        const [result] = await pool.query(
          "INSERT INTO prayers (name, email, phone, prayer_request) VALUES (?, ?, ?, ?)",
          [name, email, phone, prayer_request]
        );
        return res.json({ success: true, id: (result as any).insertId });
      } catch (err) {
        console.error("SQL Error", err);
        return res.status(500).json({ error: "Database error" });
      }
    }
    
    // In-memory fallback
    const newPrayer = {
      id: generateId(),
      name,
      email,
      phone,
      prayer_request,
      created_at: new Date().toISOString()
    };
    prayers.unshift(newPrayer);
    res.json({ success: true, id: newPrayer.id });
  });

  // === VITE MIDDLEWARE ===
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
