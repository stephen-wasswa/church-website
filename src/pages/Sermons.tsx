import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Sermon } from "../types";

export default function Sermons() {
  const [sermons, setSermons] = useState<Sermon[]>([
    {
      id: "1",
      title: "How to Renew our Love for God",
      speaker: "Pastor Robinah Ntambi",
      date: "Recent",
      description: "Learn practical steps to strengthen your faith, deepen your relationship with God, and live a life filled with His love and grace.",
      videoUrl: "https://youtu.be/92AtiZXTfzI?si=Y14IoB-z3b-x7-9G",
    },
    {
      id: "2",
      title: "Grace Is Enough",
      speaker: "Pastor Robinah Ntambi",
      date: "Grace Series",
      description: "You don't earn it. You receive it. The grace of God is the greatest reality in the universe.",
      videoUrl: "https://youtube.com/@robinahntambiministries",
    },
    {
      id: "3",
      title: "Believe What He Did",
      speaker: "Pastor Robinah Ntambi",
      date: "Faith Series",
      description: "Faith is not a struggle — it is a rest. Rest in what Jesus has already fully accomplished for you.",
      videoUrl: "https://youtube.com/@robinahntambiministries",
    }
  ]);

  useEffect(() => {
    fetch("/api/sermons")
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setSermons(data);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Helmet>
        <title>Watch &amp; Listen — Alimunze · Kasenge Miracle Centre Church</title>
        <meta name="description" content="Watch &amp; Listen — Sermons from Kasenge Miracle Centre Church (Alimunze). Teachings by Pastor Robinah Ntambi Namutebi available on YouTube and all platforms." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Watch and Listen" id="sermons-page">
        <div className="page-hero-overlay" aria-hidden="true"></div>
        <div className="page-hero-fade" aria-hidden="true"></div>
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">
            <span></span>
            <p>@robinahntambiministries on YouTube</p>
          </div>
          <h1>Watch &amp;<br /><em>Listen</em></h1>
          <p className="hero-sub">The Word has no walls. Catch up on teachings from Pastor Robinah — wherever you are in the world.</p>
        </div>
      </section>

      {/* SERMONS SECTION */}
      <section className="sermons-section" id="sermons">
        <div className="sermons-header reveal">
          <p className="sec-label">Messages</p>
          <h2>Recent Teachings</h2>
          <p>Every sermon is a step into the finished work of Christ. Subscribe on YouTube so the Word always finds you.</p>
        </div>

        {sermons.length > 0 && (
          <div className="sermons-featured reveal" style={{'--delay': '0.1s'} as any}>
            <div className="sermon-featured-img">
              <img src={`${import.meta.env.BASE_URL}pastor.jpg`} alt="Featured sermon" loading="lazy" />
              <span className="sermon-featured-badge">Latest Message</span>
            </div>
            <div className="sermon-featured-body">
              <p className="sermon-series">Featured Sermon</p>
              <h3>{sermons[0].title}</h3>
              <p>{sermons[0].description}</p>
              <div className="sermon-meta">
                <span><i className="fa-regular fa-user"></i> {sermons[0].speaker}</span>
                <span><i className="fa-regular fa-calendar"></i> {sermons[0].date}</span>
              </div>
              {sermons[0].videoUrl && (
                <a href={sermons[0].videoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{width: 'fit-content'}}>
                  Watch on YouTube
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}

        <div className="sermons-grid">
          {sermons.length === 0 ? (
            <div style={{gridColumn: '1 / -1', textAlign: 'center', color: 'var(--cream-dim)'}}>
              No sermons available right now. Check back soon.
            </div>
          ) : (
            sermons.slice(1).map((sermon, idx) => (
              <a key={sermon.id} href={sermon.videoUrl || '#'} target="_blank" rel="noopener noreferrer" className="sermon-card reveal" style={{'--delay': `${0.06 * (idx % 3)}s`} as any}>
                <div className="sermon-thumb">
                   <img src={`${import.meta.env.BASE_URL}pastor.jpg`} alt={sermon.title} loading="lazy" />
                  <div className="sermon-thumb-overlay">
                    <div className="play-btn"><i className="fa-solid fa-play"></i></div>
                  </div>
                </div>
                <div className="sermon-card-body">
                  <p className="sermon-card-series">{sermon.date}</p>
                  <h4>{sermon.title}</h4>
                  <p className="line-clamp-2">{sermon.description}</p>
                  <span className="sermon-card-date">{sermon.speaker}</span>
                </div>
              </a>
            ))
          )}
        </div>

        <div className="min-view-all reveal" style={{'--delay': '0.2s', marginTop: '3rem'} as any}>
          <a href="https://youtube.com/@robinahntambiministries" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View All Sermons on YouTube
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
