import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Women() {
  return (
    <>
      <Helmet>
        <title>Women of Glory — Alimunze Church</title>
        <meta name="description" content="Women's Ministry at Kasenge Miracle Centre Church (Alimunze). Supporting women to grow in faith, pray together, and walk in strength and dignity." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Women's Ministry" id="ministries-women-page">
        <div className="page-hero-overlay" aria-hidden="true"></div>
        <div className="page-hero-fade" aria-hidden="true"></div>
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">
            <span></span>
            <p>Women's Ministry</p>
          </div>
          <h1>Women of<br /><em>Glory</em></h1>
          <p className="hero-sub">A space for women to grow in faith, support one another through every season of life, and discover the fullness of who God says they are.</p>
        </div>
      </section>

      {/* SCRIPTURE & MISSION STRIP */}
      <section className="mission-section" id="women-mission">
        <div className="mission-left reveal">
          <p className="sec-label">Theme Scripture</p>
          <h2>Strength &amp;<br /><em>Dignity are<br />her clothing.</em></h2>
        </div>
        <div className="mission-right reveal" style={{ '--delay': '0.15s' } as any}>
          <div className="scripture-block">
            <p>"Strength and dignity are her clothing, and she laughs at the time to come."</p>
            <cite>Proverbs 31:25 (ESV)</cite>
          </div>
          <p className="mission-body">
            The Women of Glory ministry brings women together to find encouragement, strength, and purpose in God's grace. We believe in building a vibrant sisterhood where every woman can discover her unique potential, share her testimonies, and lift up others in prayer.
          </p>
          <div className="pillars">
            <span className="pillar">Dignity</span>
            <span className="pillar">Sisterhood</span>
            <span className="pillar">Prayer</span>
            <span className="pillar">Grace</span>
          </div>
        </div>
      </section>

      {/* SCHEDULE & ACTIVITIES */}
      <section className="service-section" id="women-schedule">
        <div className="service-inner">
          <div className="reveal">
            <p className="sec-label sec-label--dark">Gatherings</p>
            <h2 className="service-heading">When we <em>meet.</em></h2>
            <p className="service-intro">We gather weekly for deep prayers, intercession, and fellowship, and celebrate together in our grand annual celebration.</p>
            <div className="service-list">
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">Every Friday</span>
                  <span className="si-name">Prayer &amp; Intercession (Praying for church needs) · Pr. Victoria</span>
                </div>
                <span className="si-time">6:00 PM</span>
              </div>
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">Every Saturday</span>
                  <span className="si-name">Intercessors' Meeting (Intercession) · Pr. Victoria</span>
                </div>
                <span className="si-time">5:00 PM</span>
              </div>
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">4th Sunday of the Month</span>
                  <span className="si-name">Women's Sunday (Praise, worship and the Word)</span>
                </div>
                <span className="si-time">Main Service</span>
              </div>
            </div>
          </div>

          <div className="service-image reveal" style={{ '--delay': '0.15s' } as any}>
            <img src={`${import.meta.env.BASE_URL}women.jpg`} alt="Women's Fellowship at Alimunze" loading="lazy" style={{ borderRadius: '16px' }} />
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="pastor-section" id="women-leadership">
        <div className="pastor-image-col reveal">
          <img src={`${import.meta.env.BASE_URL}leader-vicky.jpg`} alt="Dr. Vicky Kirabira — Women &amp; Prayer Pr." loading="lazy" />
        </div>
        <div className="pastor-text-col reveal" style={{ '--delay': '0.2s' } as any}>
          <p className="sec-label">Ministry Leadership</p>
          <h2 className="pastor-name">Dr. Vicky Kirabira</h2>
          <p className="pastor-title-tag">Women &amp; Prayer Pr. · Kasenge Miracle Centre Church</p>
          <blockquote className="pastor-quote">
            "We are called to stand strong, pray without ceasing, and declare the glory of God in our families, careers, and community."
          </blockquote>
          <p className="pastor-bio">
            Pr. Vicky Kirabira guides the Women's Ministry and prayer groups. She has a deep burden for prayer and raising a generation of women who understand their standing in Christ, walk in authority, and support one another in love.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-bg" aria-hidden="true"></div>
        <div className="cta-overlay" aria-hidden="true"></div>
        <div className="cta-inner reveal">
          <p className="sec-label">Get Connected</p>
          <h2>Ready to join the <em>sisterhood?</em></h2>
          <p>You don't have to carry your burdens alone. Come stand with sisters who will pray with you and cheer you on.</p>
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
