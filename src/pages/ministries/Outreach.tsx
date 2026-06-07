import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Outreach() {
  return (
    <>
      <Helmet>
        <title>Community Outreach &amp; Evangelism — Alimunze Church</title>
        <meta name="description" content="Community Outreach &amp; Evangelism at Kasenge Miracle Centre Church (Alimunze). Reaching the lost and serving the community with the love of Christ." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Community Outreach" id="ministries-outreach-page">
        <div className="page-hero-overlay" aria-hidden="true"></div>
        <div className="page-hero-fade" aria-hidden="true"></div>
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">
            <span></span>
            <p>Community Outreach &amp; Evangelism</p>
          </div>
          <h1>Community Outreach &amp;<br /><em>Evangelism</em></h1>
          <p className="hero-sub">Taking the love of God beyond the walls of our building — serving the broken, comforting the needy, and sharing the good news of grace.</p>
        </div>
      </section>

      {/* SCRIPTURE & MISSION STRIP */}
      <section className="mission-section" id="outreach-mission">
        <div className="mission-left reveal">
          <p className="sec-label">Theme Scripture</p>
          <h2>Proclaim the<br /><em>gospel to the<br />whole creation.</em></h2>
        </div>
        <div className="mission-right reveal" style={{ '--delay': '0.15s' } as any}>
          <div className="scripture-block">
            <p>"And he said to them, 'Go into all the world and proclaim the gospel to the whole creation.'"</p>
            <cite>Mark 16:15 (ESV)</cite>
          </div>
          <p className="mission-body">
            Our outreach ministry is the heartbeat of Alimunze. We believe that faith is active, and the gospel belongs to everyone. We regularly go out into Kasenge and neighboring communities to offer practical help, share testimonies, and pray with people right where they are.
          </p>
          <div className="pillars">
            <span className="pillar">Outreach</span>
            <span className="pillar">Compassion</span>
            <span className="pillar">Evangelism</span>
            <span className="pillar">Community</span>
          </div>
        </div>
      </section>

      {/* SCHEDULE & ACTIVITIES */}
      <section className="service-section" id="outreach-schedule">
        <div className="service-inner">
          <div className="reveal">
            <p className="sec-label sec-label--dark">Evangelism Areas</p>
            <h2 className="service-heading">How we <em>reach out.</em></h2>
            <p className="service-intro">We carry out diverse outreach initiatives targeted at bringing the love of Christ to every part of society.</p>
            <div className="service-list">
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">School Evangelism</span>
                  <span className="si-name">Ministering to students in secondary and primary schools</span>
                </div>
              </div>
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">Door-to-door Evangelism</span>
                  <span className="si-name">One-on-one fellowships with households in the community</span>
                </div>
              </div>
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">Street Evangelism</span>
                  <span className="si-name">Reaching out in open markets, trading centres, and streets</span>
                </div>
              </div>
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">Children Evangelism</span>
                  <span className="si-name">Spreading hope and joy to children outside the church walls</span>
                </div>
              </div>
            </div>
          </div>

          <div className="service-image reveal" style={{ '--delay': '0.15s' } as any}>
            <img src={`${import.meta.env.BASE_URL}community.jpg`} alt="Community Outreach at Alimunze" loading="lazy" style={{ borderRadius: '16px' }} />
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="pastor-section" id="outreach-leadership">
        <div className="pastor-image-col reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,169,110,0.15)', minHeight: '350px', borderRadius: '16px' }}>
          <div style={{ textAlign: 'center', color: 'var(--gold)' }}>
            <i className="fa-solid fa-users" style={{ fontSize: '6rem', opacity: 0.8, marginBottom: '1rem' }}></i>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, letterSpacing: '0.1em' }}>MP / NP</div>
          </div>
        </div>
        <div className="pastor-text-col reveal" style={{ '--delay': '0.2s' } as any}>
          <p className="sec-label">Ministry Leadership</p>
          <h2 className="pastor-name">Mr. Mpagi Paul &amp;<br />Ms. Nakigude Prossy</h2>
          <p className="pastor-title-tag">Evangelism Leaders · Kasenge Miracle Centre Church</p>
          <blockquote className="pastor-quote">
            "We are sent to carry the message of hope to every doorstep. Evangelism is not just a program, it is our lifestyle of love."
          </blockquote>
          <p className="pastor-bio">
            Under the active leadership of Mr. Mpagi Paul and Ms. Nakigude Prossy, the evangelism team spearheads our community-facing campaigns. Their work focuses on coordinating school outreaches, door-to-door visits, street ministries, and children fellowships in the Nakawuka Road and Kasenge areas.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-bg" aria-hidden="true"></div>
        <div className="cta-overlay" aria-hidden="true"></div>
        <div className="cta-inner reveal">
          <p className="sec-label">Serve With Us</p>
          <h2>Ready to share the <em>good news?</em></h2>
          <p>Join the team that carries the hope of Jesus beyond the church walls. We would love to have you partner with us in evangelism.</p>
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
