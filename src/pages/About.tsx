import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const beliefs = [
  {
    num: "01",
    title: "The Bible",
    content: "We believe the Bible — Old and New Testaments — is the inspired, infallible, and authoritative Word of God, God-breathed and the complete authority for faith and practice.",
    ref: "2 Timothy 3:16–17 · 2 Peter 1:21"
  },
  {
    num: "02",
    title: "God",
    content: "We believe in one God — Creator of all — revealed in three distinct Persons: Father, Son, and Holy Spirit. He is eternal, infinite, sovereign, holy, just, and love.",
    ref: "Deuteronomy 6:4 · 1 John 4:8"
  },
  {
    num: "03",
    title: "Jesus Christ",
    content: "We believe in the deity of Jesus Christ — God incarnate, born of a virgin, fully God and fully man. He died for all, rose bodily, and is now seated at the Father's right hand.",
    ref: "John 1:18 · Matthew 28:6"
  },
  {
    num: "04",
    title: "The Holy Spirit",
    content: "We believe in the deity and personality of the Holy Spirit — who regenerates sinners, indwells believers, and distributes spiritual gifts as He wills.",
    ref: "Acts 5:3–4 · 1 Corinthians 12:11"
  },
  {
    num: "05",
    title: "Salvation by Grace",
    content: "We believe salvation is a gift of God's grace through faith in the finished work of Jesus — by grace alone, through faith alone, in Christ alone. Eternal and secure.",
    ref: "Ephesians 2:8–9 · John 10:28"
  },
  {
    num: "06",
    title: "The Baptism in the Holy Spirit",
    content: "We believe in the baptism in the Holy Spirit as a distinct experience subsequent to salvation — empowering believers for service, often accompanied by speaking in tongues.",
    ref: "Acts 2:4 · Acts 1:8"
  },
  {
    num: "07",
    title: "The Church",
    content: "We believe the Church is the body of Christ, composed of all believers, called to worship God, evangelise the world, and serve one another — empowered by the Holy Spirit.",
    ref: "Matthew 28:19–20 · 1 Corinthians 12:12–27"
  },
  {
    num: "08",
    title: "The Second Coming",
    content: "We believe in the imminent, literal, and visible return of Jesus Christ to gather His Church — bringing final judgment and the fulfilment of all God's promises.",
    ref: "1 Thessalonians 4:16–17 · Revelation 1:7"
  }
];

const team = [
  {
    name: "Pr. Ruth Nantume",
    role: "Resident Pr.",
    desc: "Manages church operations, events, day-to-day administration, and handles mobile communication and online giving (MTN: +256 778 815 396 / Airtel: +256 703 989 948).",
    img: "leader-ruth.jpg"
  },
  {
    name: "Pr. Sam Kakembo",
    role: "Associate & Creative Arts Pr.",
    desc: "Leads worship, production, and the creative ministry that amplifies the message of grace to the world.",
    img: "leader-sam.jpg"
  },
  {
    name: "Dr. Peter Kirabira",
    role: "Youth Pr.",
    desc: "Equips the youth and young adults with the truth of grace, empowering a bold and passionate generation.",
    img: "leader-peter.jpg"
  },
  {
    name: "Dr. Vicky Kirabira",
    role: "Women & Prayer Pr.",
    desc: "Guides the women's ministry and prayer teams, supporting women to grow in faith and stand strong in all seasons.",
    img: "leader-vicky.jpg"
  },
  {
    name: "Dr. Daniel Ntambi",
    role: "Church Elder",
    desc: "Husband to the senior Pr. Robinah Ntambi Namutebi, serving as a church elder to provide spiritual guidance, support, and wisdom to the congregation.",
    img: "leader-dan.jpg"
  },
  {
    name: "Mummy Dorothy Kakembo",
    role: "Children's Pr.",
    desc: "Creates a safe, joyful environment where children encounter the love of Jesus and learn the Word of God.",
    img: "leader-dorothy.jpg"
  },
  {
    name: "Mrs. Ocen Mary Nagawa",
    role: "Church Administrator",
    desc: "Serves as the primary Church Administrator working closely with the Resident Pastor to manage operations and day-to-day coordination, while also overseeing financial administration.",
    img: "leader-mary.jpg"
  },

];

export default function About() {
  const [activeBelief, setActiveBelief] = useState<number | null>(null);
  const [activeLeader, setActiveLeader] = useState<number>(0);

  const toggleBelief = (idx: number) => {
    setActiveBelief((prev) => (prev === idx ? null : idx));
  };

  const nextLeader = () => {
    setActiveLeader((prev) => (prev + 1) % team.length);
  };

  const prevLeader = () => {
    setActiveLeader((prev) => (prev - 1 + team.length) % team.length);
  };
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
            Kasenge Miracle Centre Church — known lovingly as <em>"Alimunze"</em> — was founded by Pastor Robinah Ntambi Namutebi 
            as its Senior Pastor and Founder. The church started in July 1992, first in a small room, which later grew into 
            a 30-seater grass-thatched reed shelter in the village of Kasenge, Wakiso District.
          </p>
          <p className="reveal" style={{'--delay': '0.3s'} as any}>
            What began in humble surroundings has grown into a life-transforming community rooted in the finished work of Christ. 
            Years after the church was fully built, Pastor Robert Kayanja came to officially open the completed church building.
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
          <img src={`${import.meta.env.BASE_URL}pastor-robinah.jpg`}
            alt="Pr. Robinah Ntambi Namutebi — Senior Pr. and Founder, Kasenge Miracle Centre Church"
            loading="lazy" />
        </div>
        <div className="pastor-text-col reveal" style={{'--delay': '0.2s'} as any}>
          <p className="sec-label">The Vision Bearer</p>
          <h2 className="pastor-name">Pr. Robinah<br />Ntambi Namutebi</h2>
          <p className="pastor-title-tag">Senior Pr. &amp; Founder · Kasenge Miracle Centre Church</p>
          <blockquote className="pastor-quote">
            "I heard a voice telling me that I should go to Kasenge to proclaim Jesus. The city of Kasenge was full of darkness, and I needed to take Jesus Christ there and bring light in that community. I obeyed, went to the community, and spoke the word of truth to that community in 1992."
            <span style={{ display: 'block', marginTop: '8px', fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.05em' }}>
              — Matthew 11:28 &amp; Luke 19:9
            </span>
          </blockquote>
          <p className="pastor-bio">
            The church is led by Pr. Robinah Ntambi Namutebi, who is happily married to Dr. Daniel Ntambi. Obeying a vision in 1992 to bring the gospel to a community in darkness, what began in a small room has grown into a beacon of grace in Kasenge, Wakiso District.
          </p>
          <p className="pastor-bio">
            Her ministry is built on the truth of God's grace — that the debt was fully paid, the sentence fully served, and the battle fully won by Jesus Christ. The completed church building was officially opened years later by Pastor Robert Kayanja.
          </p>
        </div>
      </section>

      {/* PASTORAL TEAM CAROUSEL */}
      <section className="team-section" id="team">
        <div className="team-header reveal">
          <p className="sec-label">Our Pastoral Team</p>
          <h2>Meet the Leadership</h2>
        </div>
        
        <div className="team-carousel-wrapper reveal">
          <div className="team-carousel-card">
            <div className="team-carousel-image">
              <img
                src={`${import.meta.env.BASE_URL}${team[activeLeader].img}`}
                alt={team[activeLeader].name}
                key={activeLeader}
              />
            </div>
            
            <div className="team-carousel-info">
              <div className="team-carousel-meta">
                <span className="team-role-badge">{team[activeLeader].role}</span>
                <h3 className="team-leader-name">{team[activeLeader].name}</h3>
              </div>
              <p className="team-leader-desc">{team[activeLeader].desc}</p>
              
              <div className="team-carousel-controls">
                <button 
                  onClick={prevLeader} 
                  className="carousel-btn prev" 
                  aria-label="Previous leader"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="carousel-indicators">
                  {team.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveLeader(idx)}
                      className={`carousel-dot ${activeLeader === idx ? 'active' : ''}`}
                      aria-label={`Go to leader ${idx + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextLeader} 
                  className="carousel-btn next" 
                  aria-label="Next leader"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
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
          {beliefs.map((belief, idx) => (
            <div
              key={belief.num}
              className="reveal"
              style={{ '--delay': `${0.06 * idx}s`, display: 'flex', flexDirection: 'column' } as any}
            >
              <div
                className={`belief-card ${activeBelief === idx ? 'is-active' : ''}`}
                style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <button
                  className="belief-card-toggle"
                  aria-expanded={activeBelief === idx}
                  onClick={() => toggleBelief(idx)}
                >
                  <div className="belief-card-header-left">
                    <div className="belief-num">{belief.num}</div>
                    <h3>{belief.title}</h3>
                  </div>
                  <ChevronDown className="belief-card-arrow" size={18} />
                </button>
                <div className="belief-card-content">
                  <p>{belief.content}</p>
                  <span className="belief-ref">{belief.ref}</span>
                </div>
              </div>
            </div>
          ))}
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
