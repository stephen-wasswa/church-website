import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Give() {
  const [copiedProvider, setCopiedProvider] = useState<string | null>(null);
  const [activeStepTab, setActiveStepTab] = useState<'mtn' | 'airtel'>('mtn');

  const handleCopy = (num: string, provider: string) => {
    navigator.clipboard.writeText(num);
    setCopiedProvider(provider);
    setTimeout(() => setCopiedProvider(null), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Give — Alimunze · Kasenge Miracle Centre Church</title>
        <meta name="description" content="Give — Partner with Kasenge Miracle Centre Church (Alimunze). Support the mission through MTN Mobile Money or Airtel Money. Every gift builds lives." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Give and Partner" id="give-page">
        <div className="page-hero-overlay" aria-hidden="true"></div>
        <div className="page-hero-fade" aria-hidden="true"></div>
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">
            <span></span>
            <p>Your Giving Builds Lives</p>
          </div>
          <h1>Give &amp;<br /><em>Partner With Us</em></h1>
          <p className="hero-sub">Every seed you sow reaches a generation. Your generosity keeps the mission of Kasenge Miracle Centre alive and advancing.</p>
        </div>
      </section>

      {/* VISION BANNER */}
      <div className="vision-banner">
        <div className="vision-inner reveal">
          <p className="sec-label">Why We Give</p>
          <blockquote>"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."</blockquote>
          <cite>— 2 Corinthians 9:7 (NIV)</cite>
        </div>
      </div>

      {/* GIVE SECTION */}
      <section className="give-section" id="give">
        <div className="give-section-header reveal">
          <p className="sec-label">Mobile Money</p>
          <h2>Give via Mobile Money</h2>
          <p>Sow into the mission of Alimunze — reach a community, restore a generation, rebuild a life. Every amount matters and is received with gratitude.</p>
        </div>

        <div className="mobile-money-grid">
          {/* MTN */}
          <div className="provider-card mtn reveal">
            <div className="provider-card-bar"></div>
            <div className="provider-card-body">
              <div className="provider-chip-row">
                <div className="provider-chip"><i className="fa-solid fa-microchip" aria-hidden="true"></i></div>
                <div className="provider-wifi"><i className="fa-solid fa-wifi" style={{ transform: 'rotate(90deg)' }} aria-hidden="true"></i></div>
              </div>
              <div className="provider-logo">
                <div className="provider-badge">MTN</div>
                <div className="provider-name-block">
                  <strong>MTN Mobile Money</strong>
                  <span>Dial *165# to send</span>
                </div>
              </div>
              <p className="provider-number-label">Send To</p>
              <p className="provider-number">0778 815 396</p>
              <button 
                className={`copy-btn ${copiedProvider === 'mtn' ? 'copied' : ''}`} 
                onClick={() => handleCopy('0778815396', 'mtn')}
                aria-label="Copy MTN Mobile Money Number"
              >
                <i className={copiedProvider === 'mtn' ? "fa-solid fa-check" : "fa-regular fa-copy"} aria-hidden="true"></i> 
                {copiedProvider === 'mtn' ? 'Copied!' : 'Copy Number'}
              </button>
            </div>
          </div>

          {/* Airtel */}
          <div className="provider-card airtel reveal" style={{ '--delay': '0.1s' } as any}>
            <div className="provider-card-bar"></div>
            <div className="provider-card-body">
              <div className="provider-chip-row">
                <div className="provider-chip"><i className="fa-solid fa-microchip" aria-hidden="true"></i></div>
                <div className="provider-wifi"><i className="fa-solid fa-wifi" style={{ transform: 'rotate(90deg)' }} aria-hidden="true"></i></div>
              </div>
              <div className="provider-logo">
                <div className="provider-badge">AIR</div>
                <div className="provider-name-block">
                  <strong>Airtel Money</strong>
                  <span>Dial *185# to send</span>
                </div>
              </div>
              <p className="provider-number-label">Send To</p>
              <p className="provider-number">0703 989 948</p>
              <button 
                className={`copy-btn ${copiedProvider === 'airtel' ? 'copied' : ''}`} 
                onClick={() => handleCopy('0703989948', 'airtel')}
                aria-label="Copy Airtel Mobile Money Number"
              >
                <i className={copiedProvider === 'airtel' ? "fa-solid fa-check" : "fa-regular fa-copy"} aria-hidden="true"></i> 
                {copiedProvider === 'airtel' ? 'Copied!' : 'Copy Number'}
              </button>
            </div>
          </div>
        </div>

        {/* How to Give Steps — Interactive Wizard */}
        <div className="give-steps reveal" style={{ '--delay': '0.2s' } as any}>
          <h3>Interactive Giving Guide</h3>
          <p className="give-guide-intro">Select your network to view step-by-step instructions with quick copy actions.</p>
          
          <div className="give-tabs">
            <button 
              className={`give-tab mtn ${activeStepTab === 'mtn' ? 'active' : ''}`}
              onClick={() => setActiveStepTab('mtn')}
              aria-label="Show MTN instructions"
            >
              <span className="tab-indicator"></span>
              MTN Mobile Money
            </button>
            <button 
              className={`give-tab airtel ${activeStepTab === 'airtel' ? 'active' : ''}`}
              onClick={() => setActiveStepTab('airtel')}
              aria-label="Show Airtel instructions"
            >
              <span className="tab-indicator"></span>
              Airtel Money
            </button>
          </div>

          <div className="steps-container">
            {activeStepTab === 'mtn' ? (
              <div className="steps-grid animate-fade">
                <div className="step">
                  <div className="step-num">1</div>
                  <h4>Dial USSD Code</h4>
                  <p>Dial <strong className="highlight">*165#</strong> on your phone.</p>
                  <button className="step-action-btn" onClick={() => {
                    navigator.clipboard.writeText('*165#');
                    alert('USSD Code *165# copied!');
                  }}>Copy Code</button>
                </div>
                <div className="step">
                  <div className="step-num">2</div>
                  <h4>Select Send Money</h4>
                  <p>Choose option <strong>1</strong> (Send Money) then option <strong>1</strong> (Mobile User).</p>
                </div>
                <div className="step">
                  <div className="step-num">3</div>
                  <h4>Enter Number</h4>
                  <p>Enter the church MTN number: <strong className="highlight">0778815396</strong>.</p>
                  <button className="step-action-btn" onClick={() => {
                    navigator.clipboard.writeText('0778815396');
                    alert('MTN number copied!');
                  }}>Copy Number</button>
                </div>
                <div className="step">
                  <div className="step-num">4</div>
                  <h4>Confirm Transaction</h4>
                  <p>Enter your gift amount, enter your Mobile Money PIN, and confirm.</p>
                </div>
              </div>
            ) : (
              <div className="steps-grid animate-fade">
                <div className="step">
                  <div className="step-num">1</div>
                  <h4>Dial USSD Code</h4>
                  <p>Dial <strong className="highlight">*185#</strong> on your phone.</p>
                  <button className="step-action-btn" onClick={() => {
                    navigator.clipboard.writeText('*185#');
                    alert('USSD Code *185# copied!');
                  }}>Copy Code</button>
                </div>
                <div className="step">
                  <div className="step-num">2</div>
                  <h4>Select Send Money</h4>
                  <p>Choose option <strong>1</strong> (Send Money) then option <strong>1</strong> (To Mobile Number).</p>
                </div>
                <div className="step">
                  <div className="step-num">3</div>
                  <h4>Enter Number</h4>
                  <p>Enter the church Airtel number: <strong className="highlight">0703989948</strong>.</p>
                  <button className="step-action-btn" onClick={() => {
                    navigator.clipboard.writeText('0703989948');
                    alert('Airtel number copied!');
                  }}>Copy Number</button>
                </div>
                <div className="step">
                  <div className="step-num">4</div>
                  <h4>Confirm Transaction</h4>
                  <p>Enter your gift amount, enter your Airtel Money PIN, and confirm.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* GIVING STRIPS — Scripture + Promise */}
      <div className="welcome-strip" id="why-give">
        <div className="strip-left">
          <p className="sec-label reveal">A Word on Giving</p>
          <h2 className="reveal" style={{ '--delay': '0.1s' } as any}>Your seed is a <span>statement of faith.</span></h2>
          <p className="reveal" style={{ '--delay': '0.2s' } as any}>
            Giving is not about obligation — it's about partnership with what God is doing.
            When you give to Kasenge Miracle Centre, you're helping us reach the incapacitated,
            equip believers, and broadcast the message of grace to a generation that needs it most.
          </p>
          <p className="reveal" style={{ '--delay': '0.3s' } as any}>
            We are deeply grateful for every gift — whether small or large. God sees the heart,
            and He is a rewarder of those who diligently seek Him.
          </p>
        </div>
        <div className="strip-right">
          <div className="strip-card">
            <p className="card-title">Tithes &amp; Offerings</p>
            <p className="card-desc">Your tithe is an act of trust — declaring that God is your source. Bring your first-fruits and watch Him open the windows of Heaven.</p>
            <span className="card-link">Malachi 3:10</span>
          </div>
          <div className="strip-card">
            <p className="card-title">Outreach Fund</p>
            <p className="card-desc">Help us reach the community around Kasenge — feeding families, visiting the sick, and proclaiming the gospel beyond our walls.</p>
            <span className="card-link">Isaiah 58:7</span>
          </div>
          <div className="strip-card">
            <p className="card-title">Building Fund</p>
            <p className="card-desc">Support the ongoing development of the church — creating a space where generations can encounter God and grow together.</p>
            <span className="card-link">Haggai 1:8</span>
          </div>
          <div className="strip-card">
            <p className="card-title">Media Ministry</p>
            <p className="card-desc">Help us broadcast the Word of God online — funding equipment, production, and the platforms that carry the message to the world.</p>
            <span className="card-link">Mark 16:15</span>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-bg" aria-hidden="true"></div>
        <div className="cta-overlay" aria-hidden="true"></div>
        <div className="cta-inner reveal">
          <p className="sec-label">Give &amp; Partner</p>
          <h2>Every gift reaches<br /><em>a generation.</em></h2>
          <p>Thank you for partnering with Alimunze. Your generosity is not taken lightly — it is sown into lives, families, and destinies.</p>
          <div className="cta-buttons">
            <a href="#give" className="btn-primary">
              Give Now
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <Link to="/prayer" className="btn-ghost">Send a Prayer</Link>
          </div>
        </div>
      </section>
    </>
  );
}
