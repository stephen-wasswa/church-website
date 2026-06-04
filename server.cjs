var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// server.ts
var server_exports = {};
module.exports = __toCommonJS(server_exports);
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_promise = __toESM(require("mysql2/promise"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var pool = null;
if (process.env.MYSQL_URL || process.env.MYSQL_HOST) {
  try {
    if (process.env.MYSQL_URL) {
      pool = import_promise.default.createPool(process.env.MYSQL_URL);
    } else {
      pool = import_promise.default.createPool({
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
var sermons = [];
var events = [];
var messages = [];
var prayers = [];
function generateId() {
  return Math.random().toString(36).substring(2, 9);
}
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3600;
  app.use(import_express.default.json());
  app.get("/api/sermons", (req, res) => {
    res.json(sermons);
  });
  app.post("/api/sermons", (req, res) => {
    const newSermon = { ...req.body, id: generateId() };
    sermons.unshift(newSermon);
    res.json(newSermon);
  });
  app.delete("/api/sermons/:id", (req, res) => {
    sermons = sermons.filter((s) => s.id !== req.params.id);
    res.json({ success: true });
  });
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
    events = events.filter((e) => e.id !== req.params.id);
    res.json({ success: true });
  });
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
        return res.json({ success: true, id: result.insertId });
      } catch (err) {
        console.error("SQL Error", err);
        return res.status(500).json({ error: "Database error" });
      }
    }
    const newMessage = {
      id: generateId(),
      first_name,
      last_name,
      email,
      phone,
      visit_date,
      message,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    messages.unshift(newMessage);
    res.json({ success: true, id: newMessage.id });
  });
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
        return res.json({ success: true, id: result.insertId });
      } catch (err) {
        console.error("SQL Error", err);
        return res.status(500).json({ error: "Database error" });
      }
    }
    const newPrayer = {
      id: generateId(),
      name,
      email,
      phone,
      prayer_request,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    prayers.unshift(newPrayer);
    res.json({ success: true, id: newPrayer.id });
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
