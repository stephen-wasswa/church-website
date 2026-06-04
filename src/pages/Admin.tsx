import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Sermon, ChurchEvent } from "../types";
import { Trash2, Lock, Pencil, Calendar, Settings, Mail, Video } from "lucide-react";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<'cms' | 'inbox'>('cms');
  const [inboxSubTab, setInboxSubTab] = useState<'messages' | 'prayers'>('messages');

  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [events, setEvents] = useState<ChurchEvent[]>([]);

  const [messages, setMessages] = useState<any[]>([]);
  const [prayers, setPrayers] = useState<any[]>([]);

  // Simple form states (omitting comprehensive validation for brevity)
  const [sermonData, setSermonData] = useState({ title: "", speaker: "Pastor Robinah", date: "", description: "", videoUrl: "" });
  const [eventData, setEventData] = useState({ title: "", date: "", time: "", location: "", description: "" });

  const fetchData = () => {
    fetch("/api/sermons").then(res => res.json()).then(setSermons).catch(() => {});
    fetch("/api/events").then(res => res.json()).then(setEvents).catch(() => {});
    fetch("/api/messages").then(res => res.json()).then(setMessages).catch(() => {});
    fetch("/api/prayers").then(res => res.json()).then(setPrayers).catch(() => {});
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.success) {
        setUserRole(data.role);
        setIsAuthenticated(true);
      } else {
        setLoginError(data.message || "Invalid credentials");
      }
    } catch(err) {
      setLoginError("Login failed");
    }
  };

  const handleSermonSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/sermons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sermonData)
    });
    setSermonData({ title: "", speaker: "Pastor Robinah", date: "", description: "", videoUrl: "" });
    fetchData();
  };

  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData)
    });
    setEventData({ title: "", date: "", time: "", location: "", description: "" });
    fetchData();
  };

  const handleDeleteSermon = async (id: string) => {
    if (!confirm("Delete sermon?")) return;
    await fetch(`/api/sermons/${id}`, { method: "DELETE" });
    fetchData();
  };

  const handleDeleteEvent = async (id: string) => {
    if (!confirm("Delete event?")) return;
    await fetch(`/api/events/${id}`, { method: "DELETE" });
    fetchData();
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-28 md:pt-[140px] pb-16 md:pb-24 text-[var(--cream)] min-h-screen relative p-4 flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--black)' }}>
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--maroon)] opacity-20 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-[var(--gold)] opacity-10 blur-[120px] pointer-events-none"></div>

        <Helmet>
          <title>Admin Login | Alimunze Church</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        
        <div className="p-8 md:p-12 rounded-3xl w-full max-w-md shadow-2xl relative z-10 backdrop-blur-xl border transition-all" style={{background: 'rgba(14, 12, 13, 0.75)', borderColor: 'rgba(201, 169, 110, 0.2)', boxShadow: 'var(--shadow-lg)'}}>
          <div className="text-center flex flex-col items-center" style={{ marginBottom: '2rem' }}>
            <div className="rounded-full flex items-center justify-center mb-6 border" style={{ width: '4rem', height: '4rem', background: 'rgba(201, 169, 110, 0.05)', borderColor: 'rgba(201,169,110,0.15)' }}>
              <Lock className="text-[var(--gold)]" style={{ width: '1.8rem', height: '1.8rem' }} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{fontFamily: 'var(--font-display)', letterSpacing: '-0.02em'}}>Admin Vault</h1>
            <p className="text-[var(--cream-dim)] text-xs uppercase tracking-widest" style={{ color: 'var(--gold-light)' }}>Secure Access Only</p>
          </div>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {loginError && <div className="text-red-400 text-sm text-center bg-red-400/10 p-3 rounded-xl border border-red-400/20">{loginError}</div>}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label className="text-[10px] font-bold tracking-widest uppercase text-center" style={{ color: 'var(--gold)' }}>Username</label>
              <input 
                required 
                type="text" 
                placeholder="admin" 
                className="w-full text-white outline-none transition-all" 
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--gold)';
                  e.target.style.background = 'rgba(201, 169, 110, 0.04)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(201, 169, 110, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.target.style.background = 'rgba(255,255,255,0.02)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label className="text-[10px] font-bold tracking-widest uppercase text-center" style={{ color: 'var(--gold)' }}>Password</label>
              <input 
                required 
                type="password" 
                placeholder="••••••••" 
                className="w-full text-white outline-none transition-all" 
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  fontSize: '1.4rem',
                  letterSpacing: '0.25em',
                  textAlign: 'center'
                }}
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--gold)';
                  e.target.style.background = 'rgba(201, 169, 110, 0.04)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(201, 169, 110, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.target.style.background = 'rgba(255,255,255,0.02)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <button type="submit" className="w-full text-white font-bold transition-all hover:opacity-90 active:scale-95" 
              style={{
                background: 'linear-gradient(135deg, var(--maroon), var(--maroon-deep))', 
                padding: '1rem', 
                borderRadius: '0.75rem', 
                marginTop: '1rem',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                boxShadow: '0 4px 14px rgba(107, 26, 42, 0.3)'
              }}>
              Secure Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="text-[var(--cream)] min-h-screen relative font-sans" style={{ backgroundColor: 'var(--black-soft)', paddingTop: '100px', paddingBottom: '96px' }}>
      <div className="hero-fade-bottom" aria-hidden="true" style={{ position: 'fixed', bottom: 0, height: '30vh', zIndex: 0 }}></div>
      <Helmet>
        <title>Admin Dashboard | Alimunze Church</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b pb-6" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold" style={{fontFamily: 'var(--font-display)', color: 'var(--gold)'}}>Admin Dashboard</h1>
            <p className="mt-2 text-[var(--cream-dim)] text-sm md:text-base">Manage church content, events, and communications.</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-4 items-end md:items-center">
             <div className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest bg-[rgba(201,169,110,0.1)] text-[var(--gold)] border border-[rgba(201,169,110,0.3)] flex gap-2 items-center">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               Live Server
             </div>
             
             {userRole && (
               <div className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/5 text-white/80 border border-white/10">
                 Role: {userRole}
               </div>
             )}
             
             <button onClick={() => {setIsAuthenticated(false); setUsername(''); setPassword(''); setUserRole('');}} className="text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5 ml-2">Logout</button>
          </div>
        </div>

        {/* Primary Dashboard Tabs */}
        <div className="flex gap-6 mb-10 border-b border-white/10 pb-4 relative z-20">
          <button 
            onClick={() => setActiveTab('cms')} 
            className={`text-sm md:text-base font-bold tracking-wider uppercase pb-2 transition-all relative ${activeTab === 'cms' ? 'text-[var(--gold)] font-extrabold' : 'text-[var(--cream-dim)] hover:text-white'}`}
          >
            Content Manager
            {activeTab === 'cms' && <span className="absolute bottom-[-18px] left-0 right-0 h-0.5 bg-[var(--gold)]"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('inbox')} 
            className={`text-sm md:text-base font-bold tracking-wider uppercase pb-2 transition-all relative ${activeTab === 'inbox' ? 'text-[var(--gold)] font-extrabold' : 'text-[var(--cream-dim)] hover:text-white'}`}
          >
            Congregation Inbox
            {activeTab === 'inbox' && <span className="absolute bottom-[-18px] left-0 right-0 h-0.5 bg-[var(--gold)]"></span>}
          </button>
        </div>
        
        {activeTab === 'cms' ? (
          /* CMS TAB CONTENT */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 animate-fade">
            {/* SERMONS CMS */}
            <div className="rounded-3xl shadow-xl flex flex-col" style={{background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem'}}>
              <div className="mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.05)] text-[var(--gold)]">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-widest text-[var(--cream-dim)] font-bold">Content</p>
                  <h2 className="text-2xl font-bold text-white leading-tight" style={{fontFamily: 'var(--font-display)'}}>Manage Sermons</h2>
                </div>
              </div>
              
              <form onSubmit={handleSermonSubmit} className="space-y-4 mb-8">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--cream-dim)', fontSize: '0.65rem' }}>Sermon Title</label>
                  <input required type="text" placeholder="e.g. Grace Is Enough" className="w-full p-4 rounded-lg bg-[var(--black-soft)] text-white border border-white/10 outline-none focus:border-[var(--gold)] transition-colors text-sm" value={sermonData.title} onChange={e => setSermonData({...sermonData, title: e.target.value})} />
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <div className="flex flex-col gap-1" style={{ flex: '1 1 200px' }}>
                    <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--cream-dim)', fontSize: '0.65rem' }}>Speaker</label>
                    <input required type="text" placeholder="Pastor Robinah" className="w-full p-4 rounded-lg bg-[var(--black-soft)] text-white border border-white/10 outline-none focus:border-[var(--gold)] transition-colors text-sm" value={sermonData.speaker} onChange={e => setSermonData({...sermonData, speaker: e.target.value})} />
                  </div>
                  <div className="flex flex-col gap-1" style={{ flex: '1 1 200px' }}>
                    <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--cream-dim)', fontSize: '0.65rem' }}>Series / Date Tag</label>
                    <input required type="text" placeholder="Grace Series" className="w-full p-4 rounded-lg bg-[var(--black-soft)] text-white border border-white/10 outline-none focus:border-[var(--gold)] transition-colors text-sm" value={sermonData.date} onChange={e => setSermonData({...sermonData, date: e.target.value})} />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--cream-dim)', fontSize: '0.65rem' }}>Description</label>
                  <textarea required placeholder="Short summary..." rows={3} className="w-full p-4 rounded-lg bg-[var(--black-soft)] text-white border border-white/10 outline-none focus:border-[var(--gold)] transition-colors text-sm" value={sermonData.description} onChange={e => setSermonData({...sermonData, description: e.target.value})} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--cream-dim)', fontSize: '0.65rem' }}>YouTube URL</label>
                  <input type="url" placeholder="https://youtube.com/..." className="w-full p-4 rounded-lg bg-[var(--black-soft)] text-white border border-white/10 outline-none focus:border-[var(--gold)] transition-colors text-sm" value={sermonData.videoUrl} onChange={e => setSermonData({...sermonData, videoUrl: e.target.value})} />
                </div>
                <button type="submit" className="w-full py-4 mt-4 text-white rounded-xl font-bold transition-all hover:opacity-90 hover:shadow-lg uppercase tracking-wider text-xs" style={{background: 'linear-gradient(135deg, var(--maroon), var(--maroon-deep))'}}>Add Sermon</button>
              </form>

              <div className="space-y-4 mt-6">
                <h3 className="font-bold uppercase tracking-widest text-[0.7rem] border-b border-white/10 pb-2" style={{color: 'var(--gold)'}}>Recent Sermons</h3>
                {sermons.length === 0 ? (
                  <p className="text-sm text-[var(--cream-dim)] p-6 text-center rounded-2xl border border-dashed border-white/10">No sermons published yet.</p>
                ) : sermons.map(sermon => (
                  <div key={sermon.id} className="flex flex-row items-center justify-between p-5 rounded-2xl transition-all hover:bg-white/5 gap-4 group" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.01)'}}>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white text-base truncate group-hover:text-[var(--gold)] transition-colors">{sermon.title}</h4>
                      <p className="text-xs text-[var(--cream-dim)] truncate mt-1">
                        <span className="text-[var(--gold)] mr-2">{sermon.date}</span> • <span className="ml-2">{sermon.speaker}</span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => { setSermonData({title: sermon.title, speaker: sermon.speaker, date: sermon.date, description: sermon.description, videoUrl: sermon.videoUrl || ""}); alert("Sermon data loaded for editing"); }} className="shrink-0 p-2 text-white/40 hover:text-[var(--gold)] hover:bg-[rgba(201,169,110,0.1)] rounded-lg transition-all" aria-label="Edit sermon">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDeleteSermon(sermon.id)} className="shrink-0 p-2 text-white/40 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all" aria-label="Delete sermon">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EVENTS CMS */}
            <div className="rounded-3xl shadow-xl flex flex-col" style={{background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem'}}>
              <div className="mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.05)] text-[var(--gold)]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-widest text-[var(--cream-dim)] font-bold">Schedule</p>
                  <h2 className="text-2xl font-bold text-white leading-tight" style={{fontFamily: 'var(--font-display)'}}>Manage Events</h2>
                </div>
              </div>
              
              <form onSubmit={handleEventSubmit} className="space-y-4 mb-8">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--cream-dim)', fontSize: '0.65rem' }}>Event Title</label>
                  <input required type="text" placeholder="e.g. Midweek Bible Study" className="w-full p-4 rounded-lg bg-[var(--black-soft)] text-white border border-white/10 outline-none focus:border-[var(--gold)] transition-colors text-sm" value={eventData.title} onChange={e => setEventData({...eventData, title: e.target.value})} />
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <div className="flex flex-col gap-1" style={{ flex: '1 1 200px' }}>
                    <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--cream-dim)', fontSize: '0.65rem' }}>Date</label>
                    <input required type="date" className="w-full p-4 rounded-lg bg-[var(--black-soft)] text-white border border-white/10 outline-none focus:border-[var(--gold)] transition-colors text-sm" value={eventData.date} onChange={e => setEventData({...eventData, date: e.target.value})} />
                  </div>
                  <div className="flex flex-col gap-1" style={{ flex: '1 1 200px' }}>
                    <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--cream-dim)', fontSize: '0.65rem' }}>Time</label>
                    <input required type="time" className="w-full p-4 rounded-lg bg-[var(--black-soft)] text-white border border-white/10 outline-none focus:border-[var(--gold)] transition-colors text-sm" value={eventData.time} onChange={e => setEventData({...eventData, time: e.target.value})} />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--cream-dim)', fontSize: '0.65rem' }}>Location</label>
                  <input required type="text" placeholder="e.g. Main Auditorium" className="w-full p-4 rounded-lg bg-[var(--black-soft)] text-white border border-white/10 outline-none focus:border-[var(--gold)] transition-colors text-sm" value={eventData.location} onChange={e => setEventData({...eventData, location: e.target.value})} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--cream-dim)', fontSize: '0.65rem' }}>Description</label>
                  <textarea required placeholder="Event details..." rows={3} className="w-full p-4 rounded-lg bg-[var(--black-soft)] text-white border border-white/10 outline-none focus:border-[var(--gold)] transition-colors text-sm" value={eventData.description} onChange={e => setEventData({...eventData, description: e.target.value})} />
                </div>
                <button type="submit" className="w-full py-4 mt-4 text-white rounded-xl font-bold transition-all hover:opacity-90 hover:shadow-lg uppercase tracking-wider text-xs" style={{background: 'linear-gradient(135deg, var(--maroon), var(--maroon-deep))'}}>Add Event</button>
              </form>

              <div className="space-y-4 mt-6">
                <h3 className="font-bold uppercase tracking-widest text-[0.7rem] border-b border-white/10 pb-2" style={{color: 'var(--gold)'}}>Upcoming Events</h3>
                {events.length === 0 ? (
                  <p className="text-sm text-[var(--cream-dim)] p-6 text-center rounded-2xl border border-dashed border-white/10">No events added yet.</p>
                ) : events.map(event => {
                  const eventDate = new Date(event.date);
                  const isPast = eventDate < new Date();
                  return (
                  <div key={event.id} className="flex flex-row items-center justify-between p-5 rounded-2xl transition-all hover:bg-white/5 gap-4 group" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.01)'}}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-white text-base truncate group-hover:text-[var(--gold)] transition-colors">{event.title}</h4>
                        <span className={`text-[0.55rem] uppercase tracking-widest px-2 py-0.5 rounded-full font-bold ${isPast ? 'bg-white/10 text-white/40' : 'bg-[var(--maroon)] text-white'}`}>
                          {isPast ? 'Passed' : 'Upcoming'}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--cream-dim)] truncate">
                        <span className="text-[var(--gold)] mr-2">{event.date}</span> at {event.time} • {event.location}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => { setEventData({title: event.title, date: event.date, time: event.time, location: event.location, description: event.description}); alert("Event data loaded for editing"); }} className="shrink-0 p-2 text-white/40 hover:text-[var(--gold)] hover:bg-[rgba(201,169,110,0.1)] rounded-lg transition-all" aria-label="Edit event">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDeleteEvent(event.id)} className="shrink-0 p-2 text-white/40 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all" aria-label="Delete event">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )})}
              </div>
            </div>
          </div>
        ) : (
          /* INBOX TAB CONTENT */
          <div className="w-full max-w-4xl mx-auto animate-fade">
            {/* Inbox Sub-Tabs */}
            <div className="flex gap-4 mb-8 border-b border-white/5 pb-2">
              <button 
                onClick={() => setInboxSubTab('messages')} 
                className={`text-xs uppercase tracking-widest font-bold pb-2 transition-all relative ${inboxSubTab === 'messages' ? 'text-[var(--gold)]' : 'text-white/50 hover:text-white'}`}
              >
                General Messages ({messages.length})
                {inboxSubTab === 'messages' && <span className="absolute bottom-[-9px] left-0 right-0 h-0.5 bg-[var(--gold)]"></span>}
              </button>
              <button 
                onClick={() => setInboxSubTab('prayers')} 
                className={`text-xs uppercase tracking-widest font-bold pb-2 transition-all relative ${inboxSubTab === 'prayers' ? 'text-[var(--gold)]' : 'text-white/50 hover:text-white'}`}
              >
                Prayer Requests ({prayers.length})
                {inboxSubTab === 'prayers' && <span className="absolute bottom-[-9px] left-0 right-0 h-0.5 bg-[var(--gold)]"></span>}
              </button>
            </div>

            {inboxSubTab === 'messages' ? (
              /* GENERAL INBOX MESSAGES */
              <div className="space-y-4">
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.05)] text-[var(--gold)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white leading-tight" style={{fontFamily: 'var(--font-display)'}}>Contact Messages</h2>
                    <p className="text-[0.65rem] uppercase tracking-widest text-[var(--cream-dim)] font-bold">General Inquiries</p>
                  </div>
                </div>

                {messages.length === 0 ? (
                  <p className="text-sm text-[var(--cream-dim)] p-12 text-center rounded-3xl border border-dashed border-white/10 bg-[#0d0d0d]">No messages received yet.</p>
                ) : messages.map(msg => (
                  <div key={msg.id} className="p-6 rounded-3xl transition-all hover:bg-white/[0.03] space-y-3 bg-[#0d0d0d]" style={{border: '1px solid rgba(255,255,255,0.06)'}}>
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-bold text-white text-base">{msg.first_name} {msg.last_name}</h4>
                      <span className="text-xs text-[var(--cream-dim)] font-mono shrink-0">{new Date(msg.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className="text-[10px] text-[var(--gold-light)] flex flex-wrap gap-x-4 gap-y-2 uppercase tracking-widest font-semibold">
                      <span><a href={`mailto:${msg.email}`} className="hover:text-white transition-colors">@{msg.email}</a></span>
                      {msg.phone && <span><a href={`tel:${msg.phone}`} className="hover:text-white transition-colors">{msg.phone}</a></span>}
                      {msg.visit_date && <span className="text-white/60">Visit planned: {msg.visit_date}</span>}
                    </div>
                    {msg.message && <p className="text-sm text-white/80 mt-3 pt-3 border-t border-white/5 leading-relaxed">{msg.message}</p>}
                  </div>
                ))}
              </div>
            ) : (
              /* PRAYER REQUESTS */
              <div className="space-y-4">
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(201,169,110,0.1)] text-[var(--gold)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[var(--gold)] leading-tight" style={{fontFamily: 'var(--font-display)'}}>Prayer Requests</h2>
                    <p className="text-[0.65rem] uppercase tracking-widest text-[var(--cream-dim)] font-bold">Intercession &amp; Needs</p>
                  </div>
                </div>

                {prayers.length === 0 ? (
                  <p className="text-sm text-[var(--cream-dim)] p-12 text-center rounded-3xl border border-dashed border-white/10 bg-[#0d0d0d]">No prayer requests received yet.</p>
                ) : prayers.map(prayer => (
                  <div key={prayer.id} className="p-6 rounded-3xl transition-all hover:bg-white/[0.03] space-y-3 bg-[#0d0d0d]" style={{border: '1px solid rgba(201,169,110,0.15)'}}>
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-bold text-white text-base">{prayer.name}</h4>
                      <span className="text-xs text-[var(--cream-dim)] font-mono shrink-0">{new Date(prayer.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className="text-[10px] text-white/50 flex flex-wrap gap-x-4 gap-y-2 uppercase tracking-widest">
                      <span><a href={`mailto:${prayer.email}`} className="hover:text-white transition-colors">@{prayer.email}</a></span>
                      <span><a href={`tel:${prayer.phone}`} className="hover:text-[var(--gold)] transition-colors">{prayer.phone}</a></span>
                    </div>
                    <div className="text-sm text-white/90 mt-3 p-4 rounded-xl leading-relaxed border" style={{background: 'rgba(107,26,42,0.1)', borderColor: 'rgba(107,26,42,0.25)'}}>
                      <span className="text-[0.55rem] uppercase tracking-widest text-[var(--maroon-light)] font-bold block mb-1">Confidential Request</span>
                      {prayer.prayer_request}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
