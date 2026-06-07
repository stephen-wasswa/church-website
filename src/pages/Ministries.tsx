import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Ministries() {
  return (
    <>
      <Helmet>
        <title>Get Involved — Alimunze · Kasenge Miracle Centre Church</title>
        <meta name="description" content="Get Involved — Ministries at Kasenge Miracle Centre Church (Alimunze). Men, Women, Youth, Children, Worship, and Outreach — find your place to grow and serve." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Get Involved" id="ministries-page">
        <div className="page-hero-overlay" aria-hidden="true"></div>
        <div className="page-hero-fade" aria-hidden="true"></div>
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">
            <span></span>
            <p>Community · Ministry · Purpose</p>
          </div>
          <h1>Get <em>Involved</em></h1>
          <p className="hero-sub">Men, women, youth, children — there's a place here for every season of life. Find your community and start serving.</p>
        </div>
      </section>

      {/* INTRO STRIP */}
      <div className="welcome-strip" id="intro">
        <div className="strip-left">
          <p className="sec-label reveal">Ministries</p>
          <h2 className="reveal" style={{'--delay': '0.1s'} as any}>You belong<br /><span>somewhere here.</span></h2>
          <p className="reveal" style={{'--delay': '0.2s'} as any}>
            We are a body that truly serves people. Every thought, intent, action, and behaviour at Kasenge Miracle Centre is aimed at building up — not tearing down. Whether you're brand new or have been here for years, there is a community in this church that is waiting for exactly who you are.
          </p>
          <Link to="/join-us" className="text-link reveal" style={{'--delay': '0.3s'} as any}>
            Plan your first visit
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="strip-right">
          <div className="strip-card has-image">
            <img src={`${import.meta.env.BASE_URL}evangelism.jpg`} alt="Evangelism" className="strip-card-img" loading="lazy" />
            <div className="strip-card-overlay" aria-hidden="true"></div>
            <p className="card-title">Evangelism</p>
            <p className="card-desc">Reaching the world around us with the gospel of Jesus Christ — because the message belongs to everyone.</p>
            <span className="card-link">Matthew 28:19</span>
          </div>
          <div className="strip-card has-image">
            <img src={`${import.meta.env.BASE_URL}congregation-1.jpg`} alt="Discipleship" className="strip-card-img" loading="lazy" />
            <div className="strip-card-overlay" aria-hidden="true"></div>
            <p className="card-title">Discipleship</p>
            <p className="card-desc">Teaching believers to become less self-centred and more like Christ — imitators of His grace and truth.</p>
            <span className="card-link">Ephesians 4:11–12</span>
          </div>
          <div className="strip-card has-image">
            <img src={`${import.meta.env.BASE_URL}congregation-2.jpg`} alt="Fellowship" className="strip-card-img" loading="lazy" />
            <div className="strip-card-overlay" aria-hidden="true"></div>
            <p className="card-title">Fellowship</p>
            <p className="card-desc">Building relationships within the KMC family — creating unity, love, and purpose for every member.</p>
            <span className="card-link">Acts 2:42–47</span>
          </div>
          <div className="strip-card has-image">
            <img src={`${import.meta.env.BASE_URL}worship.jpg`} alt="Worship & Praise" className="strip-card-img" loading="lazy" />
            <div className="strip-card-overlay" aria-hidden="true"></div>
            <p className="card-title">Worship &amp; Praise</p>
            <p className="card-desc">Acknowledging God through song, testimony, obedience, and proclamation — led by Pastor Sam Kakembo.</p>
            <span className="card-link">Psalm 150</span>
          </div>
        </div>
      </div>

      {/* MINISTRY CARDS */}
      <section className="ministries-section" id="ministries">
        <div className="min-header">
          <div>
            <p className="sec-label">Our Ministries</p>
            <h2>Find Your<br />Community</h2>
          </div>
          <p style={{fontSize: '0.86rem', color: 'var(--cream-dim)', maxWidth: '40ch', fontWeight: 300, lineHeight: 1.8}}>
            Each ministry is a community of people growing together. Hover to learn more, then come join us.
          </p>
        </div>

        <div className="min-grid">
          <Link to="/ministries/men" className="min-card reveal">
            <img src={`${import.meta.env.BASE_URL}men.jpg`} alt="Men's Ministry at Alimunze" className="min-card-img" loading="lazy" />
            <div className="min-card-overlay"></div>
            <div className="min-card-body">
              <p className="min-card-num">01 · Ministry</p>
              <h3>Men of Vision &amp; Purpose</h3>
              <p>A community of men committed to becoming servant-leaders — rooted in the Word, strong in faith, and present for their families and the church.</p>
              <span className="min-card-cta">Join the brotherhood <i className="fa-solid fa-arrow-right" style={{fontSize: '0.6rem'}}></i></span>
            </div>
            <div className="min-card-bar"></div>
          </Link>

          <Link to="/ministries/women" className="min-card reveal" style={{'--delay': '0.07s'} as any}>
            <img src={`${import.meta.env.BASE_URL}women.jpg`} alt="Women's Ministry at Alimunze" className="min-card-img" loading="lazy" />
            <div className="min-card-overlay"></div>
            <div className="min-card-body">
              <p className="min-card-num">02 · Ministry</p>
              <h3>Women of Glory</h3>
              <p>A space for women to grow in faith, support one another through every season of life, and discover the fullness of who God says they are.</p>
              <span className="min-card-cta">Join the sisterhood <i className="fa-solid fa-arrow-right" style={{fontSize: '0.6rem'}}></i></span>
            </div>
            <div className="min-card-bar"></div>
          </Link>

          <Link to="/ministries/youth" className="min-card reveal" style={{'--delay': '0.14s'} as any}>
            <img src={`${import.meta.env.BASE_URL}youth.jpg`} alt="Youth Ministry at Alimunze" className="min-card-img" loading="lazy" />
            <div className="min-card-overlay"></div>
            <div className="min-card-body">
              <p className="min-card-num">03 · Ministry</p>
              <h3>Youth on Fire</h3>
              <p>A generation being equipped with the truth of grace — bold, passionate young people who know what Jesus did and live like it's true.</p>
              <span className="min-card-cta">Find your generation <i className="fa-solid fa-arrow-right" style={{fontSize: '0.6rem'}}></i></span>
            </div>
            <div className="min-card-bar"></div>
          </Link>

          <Link to="/ministries/children" className="min-card reveal" style={{'--delay': '0.21s'} as any}>
            <img src={`${import.meta.env.BASE_URL}children.jpg`} alt="Children's Ministry at Alimunze" className="min-card-img" loading="lazy" />
            <div className="min-card-overlay"></div>
            <div className="min-card-body">
              <p className="min-card-num">04 · Ministry</p>
              <h3>Children's Ministry</h3>
              <p>A safe and joyful space where children encounter the love of Jesus — learning the Word in a way that stays with them for life.</p>
              <span className="min-card-cta">Bring your children <i className="fa-solid fa-arrow-right" style={{fontSize: '0.6rem'}}></i></span>
            </div>
            <div className="min-card-bar"></div>
          </Link>

          <Link to="/ministries/worship" className="min-card reveal" style={{'--delay': '0.28s'} as any}>
            <img src={`${import.meta.env.BASE_URL}choir.jpg`} alt="Worship team at Alimunze" className="min-card-img" loading="lazy" />
            <div className="min-card-overlay"></div>
            <div className="min-card-body">
              <p className="min-card-num">05 · Ministry</p>
              <h3>Worship &amp; Creative Arts</h3>
              <p>Led by Pastor Sam Kakembo — a worship community that uses music, media, and creative expression to exalt the name of Jesus.</p>
              <span className="min-card-cta">Join the team <i className="fa-solid fa-arrow-right" style={{fontSize: '0.6rem'}}></i></span>
            </div>
            <div className="min-card-bar"></div>
          </Link>

          <Link to="/ministries/outreach" className="min-card reveal" style={{'--delay': '0.35s'} as any}>
            <img src={`${import.meta.env.BASE_URL}community.jpg`} alt="Community outreach at Alimunze" className="min-card-img" loading="lazy" />
            <div className="min-card-overlay"></div>
            <div className="min-card-body">
              <p className="min-card-num">06 · Ministry</p>
              <h3>Community Outreach</h3>
              <p>Taking the love of God beyond the walls of our building — reaching the incapacitated, the lost, and the forgotten in Kasenge and beyond.</p>
              <span className="min-card-cta">Serve with us <i className="fa-solid fa-arrow-right" style={{fontSize: '0.6rem'}}></i></span>
            </div>
            <div className="min-card-bar"></div>
          </Link>
        </div>

        <div className="min-view-all reveal" style={{'--delay': '0.2s'} as any}>
          <Link to="/join-us" className="btn-primary">
            Connect With a Ministry
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-bg" aria-hidden="true"></div>
        <div className="cta-overlay" aria-hidden="true"></div>
        <div className="cta-inner reveal">
          <p className="sec-label">Your Next Step</p>
          <h2>Ready to experience<br /><em>Alimunze?</em></h2>
          <p>Come as you are. Every Sunday is a fresh start. We have been expecting you — and there is a seat here with your name on it.</p>
          <div className="cta-buttons">
            <Link to="/join-us" className="btn-primary">
              Plan My Visit
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link to="/prayer" className="btn-ghost">Send a Prayer</Link>
          </div>
        </div>
      </section>
    </>
  );
}
