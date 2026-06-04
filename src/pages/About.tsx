import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Our Story — Alimunze · Kasenge Miracle Centre Church</title>
        <meta name="description" content="Our Story — Kasenge Miracle Centre Church (Alimunze). Founded in July 1992 by Pastor Robinah Ntambi Namutebi. Building lives, repairing the broken, and restoring generations since 1992." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Our Story" id="about-page">
        <div className="page-hero-overlay" aria-hidden="true"></div>
        <div className="page-hero-fade" aria-hidden="true"></div>
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">
            <span></span>
            <p>Kasenge · Wakiso · Uganda · Est. 1992</p>
          </div>
          <h1>Our Story &amp;<br /><em>Our Mission</em></h1>
          <p className="hero-sub">From a small room in 1992 to a life-transforming community — this is the story of how God builds a church.</p>
        </div>
      </section>

      {/* MISSION - split panel */}
      <section className="mission-section" id="mission">
        <div className="mission-left reveal">
          <p className="sec-label">Our Mission</p>
          <h2>We exist to<br /><em>build, repair,<br />and restore lives<br />for many Generations.</em></h2>
        </div>
        <div className="mission-right reveal" style={{'--delay': '0.15s'} as any}>
          <div className="scripture-block">
            <p>"You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."</p>
            <cite>Isaiah 58:12 (NIV)</cite>
          </div>
          <p className="mission-body">
            That's not just church language — it's a calling. Wherever you find yourself today, this ministry is designed
            to meet you there. Through reaching out, serving people, and equipping every believer, we build broken lives
            and minds using the Word of God.
          </p>
          <div className="pillars">
            <span className="pillar">Evangelism</span>
            <span className="pillar">Discipleship</span>
            <span className="pillar">Fellowship</span>
            <span className="pillar">Worship</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar" aria-label="Church statistics">
        <div className="stat-item reveal">
          <div className="stat-num">1992</div>
          <div className="stat-label">Year Founded</div>
        </div>
        <div className="stat-item reveal" style={{'--delay': '0.1s'} as any}>
          <div className="stat-num">30+</div>
          <div className="stat-label">Years of Ministry</div>
        </div>
        <div className="stat-item reveal" style={{'--delay': '0.2s'} as any}>
          <div className="stat-num">6+</div>
          <div className="stat-label">Active Ministries</div>
        </div>
        <div className="stat-item reveal" style={{'--delay': '0.3s'} as any}>
          <div className="stat-num">5</div>
          <div className="stat-label">Online Platforms</div>
        </div>
      </div>

      {/* BACKGROUND STORY */}
      <section className="welcome-strip" id="story">
        <div className="strip-left">
          <p className="sec-label reveal">Our Background</p>
          <h2 className="reveal" style={{'--delay': '0.1s'} as any}>From a <span>small room</span><br />to a movement.</h2>
          <p className="reveal" style={{'--delay': '0.2s'} as any}>
            Kasenge Miracle Centre Church — known lovingly as <em>"Alimunze"</em> — was birthed under Rubaga Miracle Centre
            Ministry with Pastor Robinah Ntambi Namutebi as its Senior Pastor and Founder. The church was commissioned by
            Pastor Robert Kayanja of Rubaga Miracle Centre Cathedral in Kampala.
          </p>
          <p className="reveal" style={{'--delay': '0.3s'} as any}>
            The church that we now call home started in July 1992, first in a small room, then a 30-seater grass-thatched
            reed shelter in the far-flung village of Kasenge, Wakiso District. What began in humble surroundings has grown
            into a life-transforming community rooted in the finished work of Christ.
          </p>
        </div>
        <div className="strip-right">
          <div className="strip-card">
            <p className="card-title">Our Vision</p>
            <p className="card-desc">Building a city church in a community — empowering and reaching out to many generations with a message that transforms and restores.</p>
            <span className="card-link">Isaiah 58:12</span>
          </div>
          <div className="strip-card">
            <p className="card-title">Our Assignment</p>
            <p className="card-desc">To lead God's people into an effortless rest — by knowing and believing what Jesus did for them. The debt was fully paid. The battle was fully won.</p>
            <span className="card-link">Matthew 28:12</span>
          </div>
          <div className="strip-card">
            <p className="card-title">Why We Exist</p>
            <p className="card-desc">We are a light shining in the darkness — giving meaning to insignificant lives, driven by understanding through the Word of God.</p>
            <span className="card-link">John 8:12</span>
          </div>
          <div className="strip-card">
            <p className="card-title">Core Values</p>
            <p className="card-desc">Discipline · Sacrifice · Loyalty · Commitment · Passion. We are a body that truly serves — building people up in every thought and action.</p>
            <span className="card-link">1 Corinthians 13</span>
          </div>
        </div>
      </section>

      {/* PASTOR */}
      <section className="pastor-section" id="pastor">
        <div className="pastor-image-col reveal">
          <img src="/pastor-robinah.jpg"
            alt="Pastor Robinah Ntambi Namutebi — Senior Pastor and Founder, Kasenge Miracle Centre Church"
            loading="lazy" />
        </div>
        <div className="pastor-text-col reveal" style={{'--delay': '0.2s'} as any}>
          <p className="sec-label">Our Leadership</p>
          <h2 className="pastor-name">Pastor Robinah<br />Ntambi Namutebi</h2>
          <p className="pastor-title-tag">Senior Pastor &amp; Founder · Kasenge Miracle Centre Church</p>
          <blockquote className="pastor-quote">
            "Our assignment is to lead God's people into an effortless rest — by knowing and believing what Jesus did for
            them instead of struggling in life. If you understand the finished work of Christ, you can enter the effortless
            rest."
          </blockquote>
          <p className="pastor-bio">
            The church is led by Pastor Robinah Ntambi Namutebi, who is happily married to Dr. Ntambi Daniel. Founded in July 1992 under Rubaga Miracle Centre Ministry, what began in a small room has grown into a life-transforming church in Kasenge, Wakiso District.
          </p>
          <p className="pastor-bio">
            Her ministry is built on the truth of God's grace — that the debt was fully paid, the sentence fully served, and the battle fully won by Jesus Christ.
          </p>
        </div>
      </section>

      {/* PASTORAL TEAM */}
      <section className="team-section" id="team">
        <div className="team-header reveal">
          <p className="sec-label">Our Pastoral Team</p>
          <h2>Meet the Leadership</h2>
        </div>
        <div className="team-grid">
          <div className="team-card reveal">
            <h4 className="team-name">Pastor Ruth Nantume</h4>
            <p className="team-role">Resident Pastor</p>
            <p className="team-desc">Handles mobile communication for the church and oversees our online giving platforms (MTN: +256 778 815 396 / Airtel: +256 703 989 948).</p>
          </div>
          <div className="team-card reveal" style={{'--delay': '0.1s'} as any}>
            <h4 className="team-name">Pastor Sam Kakembo</h4>
            <p className="team-role">Associate &amp; Creative Arts Pastor</p>
            <p className="team-desc">Leads worship, production, and the creative ministry that amplifies the message of grace to the world.</p>
          </div>
          <div className="team-card reveal" style={{'--delay': '0.2s'} as any}>
            <h4 className="team-name">Dr. Peter Kirabira</h4>
            <p className="team-role">Youth Pastor</p>
            <p className="team-desc">Equips the youth and young adults with the truth of grace, empowering a bold and passionate generation.</p>
          </div>
          <div className="team-card reveal" style={{'--delay': '0.3s'} as any}>
            <h4 className="team-name">Dr. Vicky Kirabira</h4>
            <p className="team-role">Women &amp; Prayer Pastor</p>
            <p className="team-desc">Guides the women's ministry and prayer teams, supporting women to grow in faith and stand strong in all seasons.</p>
          </div>
          <div className="team-card reveal" style={{'--delay': '0.4s'} as any}>
            <h4 className="team-name">Mummy Dorothy Kakembo</h4>
            <p className="team-role">Children's Ministry Leader</p>
            <p className="team-desc">Creates a safe, joyful environment where children encounter the love of Jesus and learn the Word of God.</p>
          </div>
          <div className="team-card reveal" style={{'--delay': '0.5s'} as any}>
            <h4 className="team-name">Mrs. Ocen Mary Nagawa</h4>
            <p className="team-role">Church Administrator</p>
            <p className="team-desc">Manages church operations, events, and day-to-day administration to keep the ministry running smoothly.</p>
          </div>
        </div>
      </section>

      {/* VISION BANNER */}
      <div className="vision-banner">
        <div className="vision-inner reveal">
          <p className="sec-label">Our Vision</p>
          <blockquote>
            "Building a city church in a community — empowering many generations and reaching out with a message that
            transforms and restores."
          </blockquote>
          <cite>— Kasenge Miracle Centre Church · Alimunze</cite>
        </div>
      </div>

      {/* BELIEFS */}
      <section className="beliefs-section" id="beliefs">
        <div className="beliefs-header reveal">
          <p className="sec-label sec-label--dark">Our Doctrine</p>
          <h2>What We Believe</h2>
          <p>Our faith is grounded in the unchanging truth of Scripture — shaping everything we do and everything we are.</p>
        </div>
        <div className="beliefs-grid">
          <div className="belief-card reveal">
            <div className="belief-num">01</div>
            <h3>The Bible</h3>
            <p>We believe the Bible — Old and New Testaments — is the inspired, infallible, and authoritative Word of God, God-breathed and the complete authority for faith and practice.</p>
            <span className="belief-ref">2 Timothy 3:16–17 · 2 Peter 1:21</span>
          </div>
          <div className="belief-card reveal" style={{'--delay': '0.06s'} as any}>
            <div className="belief-num">02</div>
            <h3>God</h3>
            <p>We believe in one God — Creator of all — revealed in three distinct Persons: Father, Son, and Holy Spirit. He is eternal, infinite, sovereign, holy, just, and love.</p>
            <span className="belief-ref">Deuteronomy 6:4 · 1 John 4:8</span>
          </div>
          <div className="belief-card reveal" style={{'--delay': '0.12s'} as any}>
            <div className="belief-num">03</div>
            <h3>Jesus Christ</h3>
            <p>We believe in the deity of Jesus Christ — God incarnate, born of a virgin, fully God and fully man. He died for all, rose bodily, and is now seated at the Father's right hand.</p>
            <span className="belief-ref">John 1:18 · Matthew 28:6</span>
          </div>
          <div className="belief-card reveal" style={{'--delay': '0.18s'} as any}>
            <div className="belief-num">04</div>
            <h3>The Holy Spirit</h3>
            <p>We believe in the deity and personality of the Holy Spirit — who regenerates sinners, indwells believers, and distributes spiritual gifts as He wills.</p>
            <span className="belief-ref">Acts 5:3–4 · 1 Corinthians 12:11</span>
          </div>
          <div className="belief-card reveal" style={{'--delay': '0.24s'} as any}>
            <div className="belief-num">05</div>
            <h3>Salvation by Grace</h3>
            <p>We believe salvation is a gift of God's grace through faith in the finished work of Jesus — by grace alone, through faith alone, in Christ alone. Eternal and secure.</p>
            <span className="belief-ref">Ephesians 2:8–9 · John 10:28</span>
          </div>
          <div className="belief-card reveal" style={{'--delay': '0.30s'} as any}>
            <div className="belief-num">06</div>
            <h3>The Baptism in the Holy Spirit</h3>
            <p>We believe in the baptism in the Holy Spirit as a distinct experience subsequent to salvation — empowering believers for service, often accompanied by speaking in tongues.</p>
            <span className="belief-ref">Acts 2:4 · Acts 1:8</span>
          </div>
          <div className="belief-card reveal" style={{'--delay': '0.36s'} as any}>
            <div className="belief-num">07</div>
            <h3>The Church</h3>
            <p>We believe the Church is the body of Christ, composed of all believers, called to worship God, evangelise the world, and serve one another — empowered by the Holy Spirit.</p>
            <span className="belief-ref">Matthew 28:19–20 · 1 Corinthians 12:12–27</span>
          </div>
          <div className="belief-card reveal" style={{'--delay': '0.42s'} as any}>
            <div className="belief-num">08</div>
            <h3>The Second Coming</h3>
            <p>We believe in the imminent, literal, and visible return of Jesus Christ to gather His Church — bringing final judgment and the fulfilment of all God's promises.</p>
            <span className="belief-ref">1 Thessalonians 4:16–17 · Revelation 1:7</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-bg" aria-hidden="true"></div>
        <div className="cta-overlay" aria-hidden="true"></div>
        <div className="cta-inner reveal">
          <p className="sec-label">Your Next Step</p>
          <h2>Come experience<br /><em>Alimunze</em> in person.</h2>
          <p>Every Sunday is a fresh start. We have been expecting you — and there is a seat here with your name on it.</p>
          <div className="cta-buttons">
            <Link to="/give" className="btn-primary">
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
