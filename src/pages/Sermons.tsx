import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Play, User, Calendar, ArrowRight, Youtube } from "lucide-react";
import { Sermon } from "../types";

/* Diverse thumbnails from the church's own photo library */
const THUMBNAILS = [
  'worship.jpg',
  'congregation-1.jpg',
  'congregation-3.jpg',
  'choir.jpg',
  'community.jpg',
  'evangelism.jpg',
  'congregation-5.jpg',
  'youth.jpg',
];

export default function Sermons() {
  const [sermons, setSermons] = useState<Sermon[]>([
    {
      id: "1",
      title: "How to Renew our Love for God",
      speaker: "Pastor Robinah Ntambi",
      date: "May 2026",
      series: "Recent",
      description: "Learn practical steps to strengthen your faith, deepen your relationship with God, and live a life filled with His love and grace.",
      videoUrl: "https://youtu.be/92AtiZXTfzI?si=Y14IoB-z3b-x7-9G",
    },
    {
      id: "2",
      title: "Grace Is Enough",
      speaker: "Pastor Robinah Ntambi",
      date: "Grace Series",
      series: "Grace",
      description: "You don't earn it. You receive it. The grace of God is the greatest reality in the universe.",
      videoUrl: "https://youtube.com/@robinahntambiministries",
    },
    {
      id: "3",
      title: "Believe What He Did",
      speaker: "Pastor Robinah Ntambi",
      date: "Faith Series",
      series: "Faith",
      description: "Faith is not a struggle — it is a rest. Rest in what Jesus has already fully accomplished for you.",
      videoUrl: "https://youtube.com/@robinahntambiministries",
    },
    {
      id: "4",
      title: "The Power of Rest",
      speaker: "Pastor Robinah Ntambi",
      date: "Rest Series",
      series: "Rest",
      description: "Discover how resting in the finished work of Christ unlocks every blessing God has prepared for you.",
      videoUrl: "https://youtube.com/@robinahntambiministries",
    },
    {
      id: "5",
      title: "Walking in the Spirit",
      speaker: "Pastor Robinah Ntambi",
      date: "Spirit Series",
      series: "Spirit",
      description: "The Holy Spirit is your helper, guide, and comforter. Learn to walk in step with Him daily.",
      videoUrl: "https://youtube.com/@robinahntambiministries",
    },
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

  /** Get a unique thumbnail for each sermon based on its index */
  const getThumb = (sermon: Sermon, idx: number) => {
    if (sermon.thumbnailUrl) return sermon.thumbnailUrl;
    return `${import.meta.env.BASE_URL}${THUMBNAILS[idx % THUMBNAILS.length]}`;
  };

  const featured = sermons[0];
  const rest = sermons.slice(1);

  return (
    <>
      <Helmet>
        <title>Watch &amp; Listen — Alimunze · Kasenge Miracle Centre Church</title>
        <meta name="description" content="Watch &amp; Listen — Sermons from Kasenge Miracle Centre Church (Alimunze). Teachings by Pastor Robinah Ntambi Namutebi available on YouTube and all platforms." />
      </Helmet>

      {/* ═══════════════════════════════════════════
          CINEMATIC HERO — Streaming-Platform Style
          ═══════════════════════════════════════════ */}
      <section className="sermons-hero" aria-label="Watch and Listen" id="sermons-page">
        <div className="sermons-hero-bg">
          <img
            src={`${import.meta.env.BASE_URL}pastor-robinah.jpg`}
            alt="Pastor Robinah preaching at Kasenge Miracle Centre Church"
            loading="eager"
          />
        </div>
        <div className="sermons-hero-overlay" aria-hidden="true"></div>
        <div className="sermons-hero-fade" aria-hidden="true"></div>

        <div className="sermons-hero-content">
          <div className="sermons-hero-eyebrow">
            <span aria-hidden="true"></span>
            <p>@robinahntambiministries on YouTube</p>
          </div>
          <h1>Watch &amp;<br /><em>Listen</em></h1>
          <p className="sermons-hero-sub">
            The Word has no walls. Catch up on teachings from Pastor Robinah — wherever you are in the world.
          </p>
          {featured && (
            <div className="sermons-hero-featured">
              <span className="sermons-hero-badge">Latest Message</span>
              <h2>{featured.title}</h2>
              <p>{featured.speaker} · {featured.date}</p>
              <a
                href={featured.videoUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="sermons-play-btn"
              >
                <span className="play-circle">
                  <Play size={22} fill="currentColor" strokeWidth={0} />
                </span>
                Watch Now
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERMON GRID — Netflix-Style Cards
          ═══════════════════════════════════════════ */}
      <section className="sermons-section" id="sermons">
        <div className="sermons-header reveal">
          <p className="sec-label">Messages</p>
          <h2>Recent Teachings</h2>
          <p>Every sermon is a step into the finished work of Christ. Subscribe on YouTube so the Word always finds you.</p>
        </div>

        {sermons.length === 0 ? (
          <div style={{textAlign: 'center', color: 'var(--cream-dim)', padding: '4rem 0'}}>
            No sermons available right now. Check back soon.
          </div>
        ) : (
          <div className="sermons-grid">
            {sermons.map((sermon, idx) => (
              <a
                key={sermon.id}
                href={sermon.videoUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="sermon-card reveal"
                style={{'--delay': `${0.06 * (idx % 4)}s`} as any}
              >
                <div className="sermon-thumb">
                  <img
                    src={getThumb(sermon, idx)}
                    alt={sermon.title}
                    loading="lazy"
                  />
                  <div className="sermon-thumb-overlay">
                    <div className="play-btn">
                      <Play size={18} fill="currentColor" strokeWidth={0} />
                    </div>
                  </div>
                  {idx === 0 && <span className="sermon-live-badge">Latest</span>}
                </div>
                <div className="sermon-card-body">
                  {sermon.series && (
                    <p className="sermon-card-series">{sermon.series}</p>
                  )}
                  <h4>{sermon.title}</h4>
                  <p className="line-clamp-2">{sermon.description}</p>
                  <div className="sermon-card-meta">
                    <span>
                      <User size={12} />
                      {sermon.speaker}
                    </span>
                    <span>
                      <Calendar size={12} />
                      {sermon.date}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="min-view-all reveal" style={{'--delay': '0.2s', marginTop: '3rem'} as any}>
          <a href="https://youtube.com/@robinahntambiministries" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Youtube size={16} />
            View All Sermons on YouTube
            <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
