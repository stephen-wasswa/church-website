import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Men() {
  return (
    <>
      <Helmet>
        <title>Men of Vision &amp; Purpose — Alimunze Church</title>
        <meta name="description" content="Men's Ministry at Kasenge Miracle Centre Church (Alimunze). Building servant-leaders who are rooted in the Word, strong in faith, and present for their families." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Men's Ministry" id="ministries-men-page">
        <div className="page-hero-overlay" aria-hidden="true"></div>
        <div className="page-hero-fade" aria-hidden="true"></div>
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">
            <span></span>
            <p>Men's Ministry</p>
          </div>
          <h1>Men of Vision &amp;<br /><em>Purpose</em></h1>
          <p className="hero-sub">A community of men committed to becoming servant-leaders — strong in faith, active in community, and present for their families.</p>
        </div>
      </section>

      {/* SCRIPTURE & MISSION STRIP */}
      <section className="mission-section" id="men-mission">
        <div className="mission-left reveal">
          <p className="sec-label">Theme Scripture</p>
          <h2>Where there is<br /><em>no vision,<br />the people perish.</em></h2>
        </div>
        <div className="mission-right reveal" style={{ '--delay': '0.15s' } as any}>
          <div className="scripture-block">
            <p>"Where there is no vision, the people perish: but he that keepeth the law, happy is he."</p>
            <cite>Proverbs 29:18 (KJV)</cite>
          </div>
          <p className="mission-body">
            We believe that every man has a divine calling to lead with integrity, serve with passion, and protect the purpose of his family and community. Our Men's ministry is designed to foster accountability, spiritual growth, and genuine fellowship.
          </p>
          <div className="pillars">
            <span className="pillar">Vision</span>
            <span className="pillar">Leadership</span>
            <span className="pillar">Integrity</span>
            <span className="pillar">Brotherhood</span>
          </div>
        </div>
      </section>

      {/* SCHEDULE & ACTIVITIES */}
      <section className="service-section" id="men-schedule">
        <div className="service-inner">
          <div className="reveal">
            <p className="sec-label sec-label--dark">Gatherings</p>
            <h2 className="service-heading">When we <em>meet.</em></h2>
            <p className="service-intro">We gather regularly to share the Word, build relationships, and sharpen one another. Come join us for our weekly fellowship.</p>
            <div className="service-list">
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">Every Tuesday</span>
                  <span className="si-name">Men's gathering (SACCO and Prayer) · Pr. Sam &amp; Mr. Ian</span>
                </div>
                <span className="si-time">7:00 PM</span>
              </div>
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">4th Sunday of the Month</span>
                  <span className="si-name">Men's Sunday (Praise, worship and the Word)</span>
                </div>
                <span className="si-time">Main Service</span>
              </div>
            </div>
          </div>

          <div className="service-image reveal" style={{ '--delay': '0.15s' } as any}>
            <img src={`${import.meta.env.BASE_URL}men.jpg`} alt="Men's Fellowship at Alimunze" loading="lazy" style={{ borderRadius: '16px' }} />
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="pastor-section" id="men-leadership">
        <div className="pastor-image-col reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,169,110,0.15)', minHeight: '350px', borderRadius: '16px' }}>
          <div style={{ textAlign: 'center', color: 'var(--gold)' }}>
            <i className="fa-solid fa-user-tie" style={{ fontSize: '6rem', opacity: 0.8, marginBottom: '1rem' }}></i>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, letterSpacing: '0.1em' }}>IR</div>
          </div>
        </div>
        <div className="pastor-text-col reveal" style={{ '--delay': '0.2s' } as any}>
          <p className="sec-label">Ministry Leadership</p>
          <h2 className="pastor-name">Mr. Ian Rugasira</h2>
          <p className="pastor-title-tag">Men's Ministry Leader · Kasenge Miracle Centre Church</p>
          <blockquote className="pastor-quote">
            "Our vision is to build men who understand their responsibility before God, lead their families with love, and serve the community with humility."
          </blockquote>
          <p className="pastor-bio">
            Under the leadership of Mr. Ian Rugasira, the Men of Vision &amp; Purpose are guided to build a solid foundation in the finished work of Jesus. We help men rise above challenges, support one another through genuine brotherhood, and step into their true identity.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-bg" aria-hidden="true"></div>
        <div className="cta-overlay" aria-hidden="true"></div>
        <div className="cta-inner reveal">
          <p className="sec-label">Get Connected</p>
          <h2>Ready to join the <em>brotherhood?</em></h2>
          <p>Whether you're looking for spiritual growth, mentorship, or authentic community, there is a place for you here.</p>
          <div className="cta-buttons">
            <Link to="/join-us#contact-form" className="btn-primary">
              Contact Us
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
