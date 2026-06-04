import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Place to Grow.", "Place to Heal.", "Place to Belong.", "Home."];
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 4);
      setWordIndex((prev) => (prev + 1) % 4);
    }, 5500);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    if (wrapRef.current) {
      const children = Array.from(wrapRef.current.children) as HTMLElement[];
      let maxW = 0;
      children.forEach(w => {
        w.style.position = 'static';
        w.style.opacity  = '1';
        const ww = w.offsetWidth;
        if (ww > maxW) maxW = ww;
        w.style.position = '';
        w.style.opacity  = '';
      });
      const available = window.innerWidth - 48; // fallback limit
      wrapRef.current.style.width = Math.min(maxW, available) + 'px';
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Alimunze — Kasenge Miracle Centre Church</title>
        <meta name="description" content="Kasenge Miracle Centre Church — Alimunze. A Christ-centred home where lives are built, purpose is discovered, and destinies are shaped. Located in Kasenge, Wakiso District, Uganda." />
      </Helmet>

      {/* HERO */}
      <section className="hero" aria-label="Welcome to Alimunze">
        <div className="slides" aria-hidden="true">
          {[1, 2, 3, 4].map((i, index) => (
            <div key={i} className={`slide slide-${i} ${slideIndex === index ? 'active' : ''}`}></div>
          ))}
        </div>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-fade-bottom" aria-hidden="true"></div>
        <div className="hero-accent" aria-hidden="true"></div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span className="eyebrow-text">Kasenge · Wakiso · Uganda · Est. 1992</span>
          </div>
          <h1 className="hero-headline">
            This Is Your<br />
            <span className="hero-rotate-wrap" aria-live="polite" aria-label="Place to grow, heal, and belong" id="word-wrap" ref={wrapRef}>
              {words.map((word, i) => {
                let classNames = "hero-rotate-word";
                if (wordIndex === i) {
                  classNames += " active";
                } else if ((wordIndex - 1 + words.length) % words.length === i) {
                  classNames += " exit"; // To transition out properly
                }
                return (
                  <span key={i} className={classNames}>{word}</span>
                );
              })}
            </span>
          </h1>
          <p className="hero-para">
            You don't have to have it all together to belong here. Come as you are —
            discover who you were always meant to be. The finished work of Christ is enough.
            <em>You are enough.</em>
          </p>
          <div className="hero-ctas">
            <Link to="/give" className="btn-primary">
              I'm New — Plan My Visit
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
            </Link>
            <a href="https://youtube.com/@robinahntambiministries" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <i className="fa-brands fa-youtube" aria-hidden="true"></i>
              Watch Online
            </a>
          </div>
        </div>

        <div className="slide-dots" aria-label="Slideshow controls">
          {[0, 1, 2, 3].map((index) => (
            <button 
              key={index} 
              className={`dot ${slideIndex === index ? 'active' : ''}`} 
              onClick={() => setSlideIndex(index)}
              aria-label={`Slide ${index + 1}`}>
            </button>
          ))}
        </div>
        <div className="scroll-hint" aria-hidden="true">
          <div className="scroll-track">
            <div className="scroll-bar"></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>


      {/* WELCOME STRIP */}
      <div className="welcome-strip" id="welcome">
        <div className="strip-left">
          <p className="sec-label reveal">Welcome Home</p>
          <h2 className="reveal" style={{'--delay': '0.1s'} as any}>A church built<br />for <span>real people.</span></h2>
          <p className="reveal" style={{'--delay': '0.2s'} as any}>
            Whatever you're carrying — questions, wounds, dreams, or a fresh start —
            there's a seat here for you. Alimunze isn't a performance. It's a family,
            rooted in the Word and powered by the Spirit.
          </p>
          <Link to="/about" className="text-link reveal" style={{'--delay': '0.3s'} as any}>
            Discover our story
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="strip-right">
          <Link to="/give" className="strip-card">
            <p className="card-title">First Time Here?</p>
            <p className="card-desc">We'd love to welcome you. Here's what to expect on your first Sunday at Alimunze.</p>
            <span className="card-link">Plan your visit <i className="fa-solid fa-arrow-right" style={{fontSize: '0.5rem'}}
                aria-hidden="true"></i></span>
          </Link>
          <Link to="/sermons" className="strip-card">
            <p className="card-title">Watch &amp; Listen</p>
            <p className="card-desc">Catch up on recent teachings from Pastor Robinah — wherever you are, the Word reaches you.
            </p>
            <span className="card-link">Browse sermons <i className="fa-solid fa-arrow-right" style={{fontSize: '0.5rem'}}
                aria-hidden="true"></i></span>
          </Link>
          <Link to="/about" className="strip-card">
            <p className="card-title">Get Involved</p>
            <p className="card-desc">Men, women, youth, children — there's a vibrant community here for every season of life.
            </p>
            <span className="card-link">Explore ministries <i className="fa-solid fa-arrow-right" style={{fontSize: '0.5rem'}}
                aria-hidden="true"></i></span>
          </Link>
          <Link to="/prayer" className="strip-card" id="open-prayer">
            <p className="card-title">Send a Prayer</p>
            <p className="card-desc">We don't just pray for you — we pray with you. Share your need and let us stand with you.
            </p>
            <span className="card-link">Submit request <i className="fa-solid fa-arrow-right" style={{fontSize: '0.5rem'}}
                aria-hidden="true"></i></span>
          </Link>
        </div>
      </div>


      {/* MISSION PULSE */}
      <section className="mission-pulse" aria-label="Our assignment">
        <div className="mp-left reveal">
          <p className="sec-label">Our Assignment</p>
          <h2>The finished work<br />of Christ<br /><em>is enough.</em></h2>
        </div>
        <div className="mp-right reveal" style={{ '--delay': '0.15s' } as any}>
          <blockquote className="mp-quote">
            "Our assignment is to lead God's people into an effortless rest — by knowing and believing what Jesus did for
            them instead of struggling in life."
          </blockquote>
          <p className="mp-body">
            If you understand the finished work of Christ, you can enter the effortless rest. The debt was fully paid,
            the sentence was fully served, and the battle was fully won. This is the message of Alimunze.
          </p>
          <div className="mp-pillars">
            <span className="mp-pill"><i className="fa-solid fa-cross"></i> Grace</span>
            <span className="mp-pill"><i className="fa-solid fa-book-bible"></i> Word</span>
            <span className="mp-pill"><i className="fa-solid fa-fire"></i> Spirit</span>
            <span className="mp-pill"><i className="fa-solid fa-users"></i> Community</span>
          </div>
          <Link to="/about" className="text-link">
            Read our full story
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>


      {/* PHOTO GALLERY */}
      <section className="gallery-strip">
        <div className="gallery-header reveal">
          <p className="sec-label sec-label--dark">Life at Alimunze</p>
          <h2>A Glimpse of Our Community</h2>
          <p>From worship to outreach, from children to elders — this is the family of Kasenge Miracle Centre Church.</p>
        </div>
        <div className="gallery-grid reveal" style={{ '--delay': '0.1s' } as any}>
          <div className="gallery-item tall">
            <img src={`${import.meta.env.BASE_URL}congregation-3.jpg`} alt="KMC congregation gathered in worship" loading="lazy" />
          </div>
          <div className="gallery-item">
            <img src={`${import.meta.env.BASE_URL}choir.jpg`} alt="KMC women's choir in blue" loading="lazy" />
          </div>
          <div className="gallery-item">
            <img src={`${import.meta.env.BASE_URL}youth.jpg`} alt="KMC youth ministry outing" loading="lazy" />
          </div>
          <div className="gallery-item">
            <img src={`${import.meta.env.BASE_URL}worship.jpg`} alt="Men in worship at KMC" loading="lazy" />
          </div>
          <div className="gallery-item">
            <img src={`${import.meta.env.BASE_URL}children.jpg`} alt="KMC children in Bible class" loading="lazy" />
          </div>
        </div>
      </section>


      {/* PASTOR */}
      <section className="pastor-section" id="pastor">
        <div className="pastor-image-col reveal">
          <img src={`${import.meta.env.BASE_URL}pastor-robinah.jpg`}
            alt="Pastor Robinah Ntambi Namutebi — Senior Pastor and Founder of Kasenge Miracle Centre Church"
            loading="lazy" />
        </div>
        <div className="pastor-text-col reveal" style={{ '--delay': '0.2s' } as any}>
          <p className="sec-label">Our Leadership</p>
          <h2 className="pastor-name">Pastor Robinah<br />Ntambi Namutebi</h2>
          <p className="pastor-title-tag">Senior Pastor &amp; Founder · Kasenge Miracle Centre Church</p>
          <blockquote className="pastor-quote">
            "Our assignment is to lead God's people into an effortless rest — by knowing and believing what Jesus did for
            them instead of struggling in life."
          </blockquote>
          <p className="pastor-bio">
            Founded in July 1992 under Rubaga Miracle Centre Ministry and commissioned by Pastor Robert Kayanja,
            what began in a small room has grown into a life-transforming church touching generations in Kasenge,
            Wakiso District and beyond.
          </p>
          <Link to="/about" className="btn-primary">
            Meet Pastor Robinah
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>


      {/* SERVICE TIMES */}
      <section className="service-times-home" aria-label="Service times">
        <div className="sth-inner">
          <div className="sth-label reveal">
            <p className="sec-label sec-label--dark">Join Us This Week</p>
            <h2 className="reveal" style={{ '--delay': '0.08s' } as any}>Every gathering<br /><em>is a fresh start.</em></h2>
            <p className="sth-sub reveal" style={{ '--delay': '0.16s' } as any}>
              Kasenge, along Nakawuka Road<br />Wakiso District, Uganda
            </p>
            <Link to="/give" className="btn-primary reveal" style={{ '--delay': '0.24s' } as any}>
              Plan My Visit
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="sth-times reveal" style={{ '--delay': '0.12s' } as any}>
            <div className="sth-item">
              <div className="sth-day-block">
                <span className="sth-day">Sunday</span>
                <span className="sth-type">Main Service</span>
              </div>
              <span className="sth-time">8:00 <small>AM</small></span>
            </div>
            <div className="sth-item">
              <div className="sth-day-block">
                <span className="sth-day">Wednesday</span>
                <span className="sth-type">Midweek Bible Study</span>
              </div>
              <span className="sth-time">5:00 <small>PM</small></span>
            </div>
            <div className="sth-item">
              <div className="sth-day-block">
                <span className="sth-day">Friday</span>
                <span className="sth-type">Prayer &amp; Intercession</span>
              </div>
              <span className="sth-time">6:00 <small>PM</small></span>
            </div>
            <div className="sth-note">
              <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
              All are welcome. Children's ministry runs during the main service.
            </div>
          </div>
        </div>
      </section>


      {/* SOCIAL MEDIA */}
      <section className="social-section" id="connect">
        <div className="glow-social-ambient" aria-hidden="true"></div>
        <div className="social-header reveal">
          <p className="sec-label">Stay Connected</p>
          <h2>Follow Us Online</h2>
          <p>The Word has no walls. Join our growing online community and stay connected wherever you are in the world.</p>
        </div>
        <div className="social-grid reveal" style={{ '--delay': '0.1s' } as any}>
          <a href="https://youtube.com/@robinahntambiministries" target="_blank" rel="noopener noreferrer" className="social-card yt">
            <i className="fa-brands fa-youtube" aria-hidden="true"></i>
            <span className="soc-platform">YouTube</span>
            <span className="soc-handle">@robinahntambiministries</span>
          </a>
          <a href="https://www.facebook.com/PastorRobinah" target="_blank" rel="noopener noreferrer" className="social-card fb">
            <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
            <span className="soc-platform">Facebook</span>
            <span className="soc-handle">PastorRobinah</span>
          </a>
          <a href="https://www.tiktok.com/@ali_munze" target="_blank" rel="noopener noreferrer" className="social-card tt">
            <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
            <span className="soc-platform">TikTok</span>
            <span className="soc-handle">@ali_munze</span>
          </a>
          <a href="https://www.instagram.com/ali_munze/" target="_blank" rel="noopener noreferrer" className="social-card ig">
            <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            <span className="soc-platform">Instagram</span>
            <span className="soc-handle">@ali_munze</span>
          </a>
          <a href="https://x.com/ali_munze" target="_blank" rel="noopener noreferrer" className="social-card xw">
            <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
            <span className="soc-platform">Twitter / X</span>
            <span className="soc-handle">@ali_munze</span>
          </a>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="final-cta" aria-label="Your next step">
        <div className="cta-bg" aria-hidden="true"></div>
        <div className="cta-overlay" aria-hidden="true"></div>
        <div className="cta-accent-lines" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <div className="cta-inner reveal">
          <p className="sec-label">Your Next Step</p>
          <h2>There is a seat here<br />with <em>your name on it.</em></h2>
          <p>
            Come as you are. Every Sunday is a new beginning — no conditions, no performance required.
            We have been expecting you, and we are ready to walk with you every step of the way.
          </p>
          <div className="cta-action-row">
            <Link to="/give" className="cta-action-card">
              <div className="cac-icon"><i className="fa-solid fa-calendar-check" aria-hidden="true"></i></div>
              <span className="cac-label">Plan My Visit</span>
              <span className="cac-sub">Join us this Sunday</span>
            </Link>
            <Link to="/prayer" className="cta-action-card" id="open-prayer-2">
              <div className="cac-icon"><i className="fa-solid fa-hands-praying" aria-hidden="true"></i></div>
              <span className="cac-label">Send a Prayer</span>
              <span className="cac-sub">We stand with you</span>
            </Link>
            <Link to="/give" className="cta-action-card">
              <div className="cac-icon"><i className="fa-solid fa-heart-circle-bolt" aria-hidden="true"></i></div>
              <span className="cac-label">Give &amp; Partner</span>
              <span className="cac-sub">Sow into the mission</span>
            </Link>
            <Link to="/sermons" className="cta-action-card">
              <div className="cac-icon"><i className="fa-solid fa-circle-play" aria-hidden="true"></i></div>
              <span className="cac-label">Watch a Sermon</span>
              <span className="cac-sub">Start from anywhere</span>
            </Link>
          </div>
          <p className="cta-location-tag">
            <i className="fa-solid fa-map-pin" aria-hidden="true"></i>
            Kasenge, along Nakawuka Road · Wakiso District, Uganda ·
            <a href="tel:+256778815396">+256 778 815 396</a>
          </p>
        </div>
      </section>
    </>
  );
}
