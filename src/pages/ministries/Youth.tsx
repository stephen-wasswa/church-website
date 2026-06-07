import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Youth() {
  return (
    <>
      <Helmet>
        <title>Youth on Fire — Alimunze Church</title>
        <meta name="description" content="Youth on Fire Ministry at Kasenge Miracle Centre Church (Alimunze). Empowering a generation bold, passionate, and equipped with the grace of Jesus Christ." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Youth Ministry" id="ministries-youth-page">
        <div className="page-hero-overlay" aria-hidden="true"></div>
        <div className="page-hero-fade" aria-hidden="true"></div>
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">
            <span></span>
            <p>Youth Ministry</p>
          </div>
          <h1>Youth on<br /><em>Fire</em></h1>
          <p className="hero-sub">A generation equipped with the truth of grace — bold, passionate young people who know what Jesus did and live like it's true.</p>
        </div>
      </section>

      {/* SCRIPTURE & MISSION STRIP */}
      <section className="mission-section" id="youth-mission">
        <div className="mission-left reveal">
          <p className="sec-label">Theme Scripture</p>
          <h2>Set the<br /><em>believers an<br />example in faith.</em></h2>
        </div>
        <div className="mission-right reveal" style={{ '--delay': '0.15s' } as any}>
          <div className="scripture-block">
            <p>"Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity."</p>
            <cite>1 Timothy 4:12 (ESV)</cite>
          </div>
          <p className="mission-body">
            Youth on Fire is a movement of young people passionate about Jesus, walking in the freedom of grace, and carrying the light of the gospel to schools, campuses, and communities. We believe in building a generation that is unashamed of the gospel.
          </p>
          <div className="pillars">
            <span className="pillar">Passion</span>
            <span className="pillar">Faith</span>
            <span className="pillar">Example</span>
            <span className="pillar">Purity</span>
          </div>
        </div>
      </section>

      {/* SCHEDULE & ACTIVITIES */}
      <section className="service-section" id="youth-schedule">
        <div className="service-inner">
          <div className="reveal">
            <p className="sec-label sec-label--dark">Youth Schedule</p>
            <h2 className="service-heading">What we <em>do.</em></h2>
            <p className="service-intro">From weekly prayer to dedicated youth takeover Sundays and special annual ministries, there are many ways to get involved.</p>
            <div className="service-list">
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">Every Saturday</span>
                  <span className="si-name">Youth Prayer Groups</span>
                </div>
                <span className="si-time">Weekly</span>
              </div>
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">3rd Sunday of the Month</span>
                  <span className="si-name">Youth-Led Praise &amp; Worship</span>
                </div>
                <span className="si-time">Main Service</span>
              </div>
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">January</span>
                  <span className="si-name">Full Month Youth Ministry &amp; Focus</span>
                </div>
                <span className="si-time">Annual</span>
              </div>
            </div>
          </div>

          <div className="service-image reveal" style={{ '--delay': '0.15s' } as any}>
            <img src={`${import.meta.env.BASE_URL}youth.jpg`} alt="Youth on Fire at Alimunze" loading="lazy" style={{ borderRadius: '16px' }} />
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="pastor-section" id="youth-leadership">
        <div className="pastor-image-col reveal">
          <img src={`${import.meta.env.BASE_URL}leader-peter.jpg`} alt="Dr. Peter Kirabira — Youth Pr." loading="lazy" />
        </div>
        <div className="pastor-text-col reveal" style={{ '--delay': '0.2s' } as any}>
          <p className="sec-label">Ministry Leadership</p>
          <h2 className="pastor-name">Dr. Peter Kirabira</h2>
          <p className="pastor-title-tag">Youth Pr. · Kasenge Miracle Centre Church</p>
          <blockquote className="pastor-quote">
            "We want our youth to be fire-brands for Jesus — established in grace, secure in their identity, and bold in their witness."
          </blockquote>
          <p className="pastor-bio">
            Pr. Peter Kirabira leads Youth on Fire with a strong focus on discipleship, biblical literacy, and leadership training. He believes in empowering young people to make a lasting difference in their generation.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-bg" aria-hidden="true"></div>
        <div className="cta-overlay" aria-hidden="true"></div>
        <div className="cta-inner reveal">
          <p className="sec-label">Get Connected</p>
          <h2>Ready to catch the <em>fire?</em></h2>
          <p>Don't face the challenges of youth alone. Join a community of young people who will encourage you and help you stand strong.</p>
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
