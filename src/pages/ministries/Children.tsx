import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Children() {
  return (
    <>
      <Helmet>
        <title>Children's Ministry — Alimunze Church</title>
        <meta name="description" content="Children's Ministry at Kasenge Miracle Centre Church (Alimunze). Providing a safe, happy, and Spirit-filled space for children to learn and grow in God's love." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Children's Ministry" id="ministries-children-page">
        <div className="page-hero-overlay" aria-hidden="true"></div>
        <div className="page-hero-fade" aria-hidden="true"></div>
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">
            <span></span>
            <p>Children's Ministry</p>
          </div>
          <h1>Children's<br /><em>Ministry</em></h1>
          <p className="hero-sub">A safe, loving, and joyful environment where kids encounter the love of Jesus and learn the Word of God at their level.</p>
        </div>
      </section>

      {/* SCRIPTURE & MISSION STRIP */}
      <section className="mission-section" id="children-mission">
        <div className="mission-left reveal">
          <p className="sec-label">Theme Scripture</p>
          <h2>Train up a child<br /><em>in the way he<br />should go.</em></h2>
        </div>
        <div className="mission-right reveal" style={{ '--delay': '0.15s' } as any}>
          <div className="scripture-block">
            <p>"Train up a child in the way he should go; even when he is old he will not depart from it."</p>
            <cite>Proverbs 22:6 (ESV)</cite>
          </div>
          <p className="mission-body">
            Our Children's Ministry is dedicated to planting seeds of faith in young hearts. We walk children through the bible stories, teaching them the goodness and grace of God. Our classes are interactive, designed to engage kids through songs, plays, and lessons.
          </p>
          <div className="pillars">
            <span className="pillar">Joy</span>
            <span className="pillar">Faith</span>
            <span className="pillar">Growth</span>
            <span className="pillar">Safety</span>
          </div>
        </div>
      </section>

      {/* SCHEDULE & ACTIVITIES */}
      <section className="service-section" id="children-schedule">
        <div className="service-inner">
          <div className="reveal">
            <p className="sec-label sec-label--dark">KMC Kids Schedule</p>
            <h2 className="service-heading">What we <em>offer.</em></h2>
            <p className="service-intro">We provide kids-friendly classes every week during service, as well as fun-filled competitions and activities.</p>
            <div className="service-list">
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">Every Sunday</span>
                  <span className="si-name">Sunday School (during Luganda Service)</span>
                </div>
                <span className="si-time">9:00 AM</span>
              </div>
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">Every Sunday</span>
                  <span className="si-name">Sunday School (during English Service)</span>
                </div>
                <span className="si-time">11:00 AM</span>
              </div>
              <div className="service-item">
                <div className="si-left">
                  <span className="si-day">Special Event</span>
                  <span className="si-name">Children's Bible Quizzes &amp; Drama</span>
                </div>
                <span className="si-time">Periodic</span>
              </div>
            </div>
          </div>

          <div className="service-image reveal" style={{ '--delay': '0.15s' } as any}>
            <img src={`${import.meta.env.BASE_URL}children.jpg`} alt="Children's Ministry at Alimunze" loading="lazy" style={{ borderRadius: '16px' }} />
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="pastor-section" id="children-leadership">
        <div className="pastor-image-col reveal">
          <img src={`${import.meta.env.BASE_URL}leader-dorothy.jpg`} alt="Mummy Dorothy Kakembo — Children's Pr." loading="lazy" />
        </div>
        <div className="pastor-text-col reveal" style={{ '--delay': '0.2s' } as any}>
          <p className="sec-label">Ministry Leadership</p>
          <h2 className="pastor-name">Mummy Dorothy Kakembo</h2>
          <p className="pastor-title-tag">Children's Pr. · Kasenge Miracle Centre Church</p>
          <blockquote className="pastor-quote">
            "Jesus said, 'Let the little children come to me.' We create a space where every child knows they are loved, valued, and welcome."
          </blockquote>
          <p className="pastor-bio">
            Mummy Dorothy Kakembo leads KMC Kids with warmth and devotion. Together with her team of dedicated teachers, she ensures a nurturing and safe environment where children can build lasting friendships and grow to love God's house.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-bg" aria-hidden="true"></div>
        <div className="cta-overlay" aria-hidden="true"></div>
        <div className="cta-inner reveal">
          <p className="sec-label">KMC Kids</p>
          <h2>Bring your <em>children</em> this Sunday!</h2>
          <p>We have specialized classes for different age groups. Rest assured, your children will be safe, happy, and learning the Word.</p>
          <div className="cta-buttons">
            <Link to="/join-us#contact-form" className="btn-primary">
              Plan A Visit
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
