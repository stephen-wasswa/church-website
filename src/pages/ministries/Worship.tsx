import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Worship() {
  return (
    <>
      <Helmet>
        <title>Worship &amp; Creative Arts — Alimunze Church</title>
        <meta name="description" content="Worship &amp; Creative Arts Ministry at Kasenge Miracle Centre Church (Alimunze). Exalting Jesus through music, media, and creative expression." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Worship Ministry" id="ministries-worship-page">
        <div className="page-hero-overlay" aria-hidden="true"></div>
        <div className="page-hero-fade" aria-hidden="true"></div>
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">
            <span></span>
            <p>Worship Ministry</p>
          </div>
          <h1>Worship &amp;<br /><em>Creative Arts</em></h1>
          <p className="hero-sub">Exalting the name of Jesus and leading the congregation into a place of genuine, spirit-filled worship through music and media.</p>
        </div>
      </section>

      {/* SCRIPTURE & MISSION STRIP */}
      <section className="mission-section" id="worship-mission">
        <div className="mission-left reveal">
          <p className="sec-label">Theme Scripture</p>
          <h2>Praise Him with<br /><em>strings and pipe,<br />sound and song.</em></h2>
        </div>
        <div className="mission-right reveal" style={{ '--delay': '0.15s' } as any}>
          <div className="scripture-block">
            <p>"Praise him with trumpet sound; praise him with lute and harp! Praise him with tambourine and dance; praise him with strings and pipe!"</p>
            <cite>Psalm 150:3–4 (ESV)</cite>
          </div>
          <p className="mission-body">
            We believe that worship is not a performance, but a declaration of the finished work of Jesus. The Worship and Creative Arts ministry uses music, sound, media, and staging to make the gospel clear, powerful, and accessible during every gathering.
          </p>
          <div className="pillars">
            <span className="pillar">Praise</span>
            <span className="pillar">Excellence</span>
            <span className="pillar">Creativity</span>
            <span className="pillar">Service</span>
          </div>
        </div>
      </section>

      {/* SCHEDULE & ACTIVITIES */}
      <section className="service-section" id="worship-schedule">
        <div className="service-inner">
          <div className="reveal">
            <p className="sec-label sec-label--dark">Ministry Schedule</p>
            <h2 className="service-heading">Rehearsal &amp; <em>Practice.</em></h2>
            <p className="service-intro">Our choir and worship team rehearse weekly to prepare for Sunday services and special worship events.</p>
            <div className="service-list">
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">Every Monday</span>
                  <span className="si-name">Choir meeting (Choir practice) · Ms. Nakimera Elizabeth &amp; Mr. Wasswa Stephen</span>
                </div>
                <span className="si-time">5:00 PM</span>
              </div>
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">Every Saturday</span>
                  <span className="si-name">Choir meeting (Choir rehearsals) · Ms. Nakimera Elizabeth &amp; Mr. Wasswa Stephen</span>
                </div>
                <span className="si-time">5:00 PM</span>
              </div>
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">Special Events</span>
                  <span className="si-name">Worship Nights &amp; Concerts</span>
                </div>
                <span className="si-time">Periodic</span>
              </div>
            </div>
          </div>

          <div className="service-image reveal" style={{ '--delay': '0.15s' } as any}>
            <img src={`${import.meta.env.BASE_URL}choir.jpg`} alt="Alimunze Choir in Rehearsal" loading="lazy" style={{ borderRadius: '16px' }} />
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="pastor-section" id="worship-leadership">
        <div className="pastor-image-col reveal">
          <img src={`${import.meta.env.BASE_URL}leader-sam.jpg`} alt="Pr. Sam Kakembo — Associate &amp; Creative Arts Pr." loading="lazy" />
        </div>
        <div className="pastor-text-col reveal" style={{ '--delay': '0.2s' } as any}>
          <p className="sec-label">Ministry Leadership</p>
          <h2 className="pastor-name">Pr. Sam Kakembo</h2>
          <p className="pastor-title-tag">Associate &amp; Creative Arts Pr. · Kasenge Miracle Centre Church</p>
          <blockquote className="pastor-quote">
            "Worship is our response to God's love and grace. We lead the church to see Jesus and exalt His name above all other names."
          </blockquote>
          <p className="pastor-bio">
            Pr. Sam Kakembo leads the worship and creative arts teams with a heart of service and a standard of excellence. He is passionate about mentoring musicians, vocalists, and production crew, and raising a community that worships in spirit and in truth.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-bg" aria-hidden="true"></div>
        <div className="cta-overlay" aria-hidden="true"></div>
        <div className="cta-inner reveal">
          <p className="sec-label">Join the Team</p>
          <h2>Have a passion for <em>worship &amp; arts?</em></h2>
          <p>Whether you sing, play an instrument, or want to help behind the scenes in sound or media production, there is a place for you.</p>
          <div className="cta-buttons">
            <Link to="/join-us#contact-form" className="btn-primary">
              Serve With Us
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link to="/ministries" className="btn-ghost">Back to Ministries</Link>
          </div>
        </div>
      </section>
    </>
  );
}
