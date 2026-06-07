import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { publicServiceDays, specialSundays } from "../data/schedule";

export default function JoinUs() {
  const [selectedDay, setSelectedDay] = useState<string>("Sunday");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    visit_date: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ first_name: "", last_name: "", email: "", phone: "", visit_date: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>I'm New Here — Alimunze · Kasenge Miracle Centre Church</title>
        <meta name="description" content="I'm New Here — Plan your first visit to Kasenge Miracle Centre Church (Alimunze). Sunday service at 9:00 AM in Kasenge, Wakiso District, Uganda. We've been expecting you." />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero" aria-label="Plan Your Visit" id="join-us-page">
        <div className="page-hero-overlay" aria-hidden="true"></div>
        <div className="page-hero-fade" aria-hidden="true"></div>
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">
            <span></span>
            <p>We've Been Expecting You</p>
          </div>
          <h1>Plan Your<br /><em>First Visit</em></h1>
          <p className="hero-sub">You don't have to have it all together to belong here. Come as you are — there is a seat with your name on it.</p>
        </div>
      </section>

      {/* SERVICE TIMES */}
      <section className="service-section" id="services">
        <div className="service-inner">
          <div className="reveal">
            <p className="sec-label sec-label--dark">Join Us</p>
            <h2 className="service-heading">Come &amp; worship<br />with us <em>in person.</em></h2>
            <p className="service-intro">Three opportunities every week to gather, worship, and grow together in the Word of God. All are welcome — always.</p>
            <div className="sth-accordion">
              {publicServiceDays.map((dayData) => {
                const isOpen = selectedDay === dayData.day;
                return (
                  <div key={dayData.day} className={`sth-accordion-item ${isOpen ? "is-open" : ""}`}>
                    <button
                      type="button"
                      className="sth-accordion-header"
                      onClick={() => setSelectedDay(isOpen ? "" : dayData.day)}
                    >
                      <span className="sth-accordion-day">{dayData.day}</span>
                      <span className="sth-accordion-count">
                        {dayData.items.length} {dayData.items.length === 1 ? "Service" : "Services"}
                      </span>
                    </button>
                    <div className="sth-accordion-content">
                      <div className="sth-accordion-inner">
                        {dayData.items.map((item, idx) => (
                          <div key={idx} className="service-item animate-fade" style={{ borderTop: 'none', borderBottom: '1px solid rgba(0, 0, 0, 0.04)', padding: '1.2rem 0' }}>
                            <div className="si-left">
                              <span className="si-day" style={{ fontSize: '0.72rem', color: 'var(--maroon)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>{item.time}</span>
                              <span className="si-day" style={{ fontSize: '0.95rem', color: 'var(--black)', marginTop: '0.15rem' }}>{item.title}</span>
                              {item.description && (
                                <span className="si-name">{item.description}</span>
                              )}
                            </div>
                            {item.leader && (
                              <span className="si-time" style={{ fontSize: '0.78rem', color: 'var(--grey-mid)', fontWeight: 500, alignSelf: 'center', textAlign: 'right' }}>
                                <i className="fa-solid fa-user-tie" style={{ marginRight: '6px', color: 'var(--accent)' }}></i>
                                {item.leader}
                              </span>
                            )}
                          </div>
                        ))}
                        {dayData.day === "Sunday" && (
                          <div className="sth-special-sundays animate-fade" style={{ marginTop: '1.5rem', padding: '1.2rem', background: 'rgba(107, 26, 42, 0.03)', borderLeft: '3px solid var(--maroon)', borderRadius: '4px' }}>
                            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--maroon)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Special Sunday Services</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', padding: 0, margin: 0 }}>
                              {specialSundays.map((special, idx) => (
                                <li key={idx} style={{ fontSize: '0.8rem', color: 'var(--black)' }}>
                                  <strong style={{ color: 'var(--maroon)' }}>{special.week}:</strong> {special.theme}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p style={{fontSize: '0.8rem', color: 'var(--grey-mid)', marginTop: '1.5rem', fontWeight: 300, lineHeight: 1.7}}>
              Kasenge, Wakiso District, Uganda — along Nakawuka Road
            </p>
          </div>

          <div className="service-image reveal" style={{'--delay': '0.15s'} as any}>
            <img src={`${import.meta.env.BASE_URL}church-building.jpg`} alt="Kasenge Miracle Centre Church building" loading="lazy" />
            <span className="service-image-tag">Kasenge, Wakiso District</span>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT STRIP */}
      <div className="welcome-strip" id="expect">
        <div className="strip-left">
          <p className="sec-label reveal">First Time Here?</p>
          <h2 className="reveal" style={{'--delay': '0.1s'} as any}>Here's what to <span>expect.</span></h2>
          <p className="reveal" style={{'--delay': '0.2s'} as any}>
            We know that walking into a new church for the first time can feel a little overwhelming.
            At Alimunze, we've worked hard to make sure your first experience is warm, genuine, and free
            of any pressure. You belong here — we just want you to feel it from the moment you arrive.
          </p>
          <a href="#contact-form" className="text-link reveal" style={{'--delay': '0.3s'} as any}>
            Let us know you're coming
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="strip-right">
          <div className="strip-card">
            <p className="card-title">Genuine Worship</p>
            <p className="card-desc">Expect powerful, Spirit-led worship led by Pr. Sam Kakembo and the Alimunze worship team — a moment to encounter God, not just sing.</p>
          </div>
          <div className="strip-card">
            <p className="card-title">The Word Alive</p>
            <p className="card-desc">Pr. Robinah brings the Word with clarity and grace. Messages that speak to your real life — practical, faith-filled, and Christ-centred.</p>
          </div>
          <div className="strip-card">
            <p className="card-title">Warm Community</p>
            <p className="card-desc">We are a family. From the moment you walk in, someone will welcome you. No performance required — just come as you are.</p>
          </div>
          <div className="strip-card">
            <p className="card-title">Kids Are Welcome</p>
            <p className="card-desc">We have a Children's Ministry running during the main service so the whole family can encounter God at their own level — safely and joyfully.</p>
          </div>
        </div>
      </div>

      {/* CONTACT / VISIT FORM */}
      <section className="visit-section" id="contact-form">
        <div className="visit-inner">
          <div className="reveal">
            <p className="sec-label sec-label--dark">Get In Touch</p>
            <h2 className="visit-info">Contact the Church</h2>
            <p style={{fontSize: '0.88rem', color: 'var(--grey-mid)', lineHeight: 1.9, fontWeight: 300, marginBottom: '2rem'}}>
              Have a question? Want to let us know you're coming for the first time? We'd love to hear from you. Fill in the form and your message goes straight to our team.
            </p>

            <div className="visit-details-grid">
              <div className="visit-detail-card">
                <div className="visit-detail-header">
                  <div className="visit-detail-icon"><i className="fa-solid fa-map-pin"></i></div>
                  <strong>Address</strong>
                </div>
                <span>Kasenge, along Nakawuka Road<br />Nsagi Sub-county, Wakiso District, Uganda</span>
              </div>
              <div className="visit-detail-card">
                <div className="visit-detail-header">
                  <div className="visit-detail-icon"><i className="fa-solid fa-phone"></i></div>
                  <strong>Phone</strong>
                </div>
                <span>
                  <a href="tel:+256778815396" className="phone-link">+256 778 815 396 (MTN)</a><br />
                  <a href="tel:+256703989948" className="phone-link">+256 703 989 948 (Airtel)</a>
                </span>
              </div>
              <div className="visit-detail-card">
                <div className="visit-detail-header">
                  <div className="visit-detail-icon"><i className="fa-regular fa-envelope"></i></div>
                  <strong>Email</strong>
                </div>
                <span><a href="mailto:info@kasengemiraclecentre.org" className="email-link">info@kasengemiraclecentre.org</a></span>
              </div>
              <div className="visit-detail-card">
                <div className="visit-detail-header">
                  <div className="visit-detail-icon"><i className="fa-solid fa-clock"></i></div>
                  <strong>Service Times</strong>
                </div>
                <span>Sundays 8:00 AM · Midweek Services (see schedule above)</span>
              </div>
            </div>
          </div>

          <form className="contact-form-wrap reveal" style={{'--delay': '0.15s'} as any} onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>
            <p>Your message goes directly to our team. We'll get back to you shortly.</p>

            {submitted ? (
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center', margin: '2rem 0' }}>
                <i className="fa-solid fa-check-circle" style={{fontSize: '3rem', color: 'var(--gold)', marginBottom: '1rem'}}></i>
                <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>Message Sent Successfully</h4>
                <p style={{fontSize: '0.9rem', color: 'var(--grey-mid)'}}>Thank you for reaching out. We will get back to you soon.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="btn-ghost" style={{marginTop: '1.5rem'}}>Send another message</button>
              </div>
            ) : (
              <>
                <div className="cf-row">
                  <div className="cf-field">
                    <label htmlFor="cf-fname">First Name *</label>
                    <input type="text" id="cf-fname" placeholder="John" autoComplete="given-name" required value={formData.first_name} onChange={e => setFormData({...formData, first_name: e.target.value})} />
                  </div>
                  <div className="cf-field">
                    <label htmlFor="cf-lname">Last Name</label>
                    <input type="text" id="cf-lname" placeholder="Mukisa" autoComplete="family-name" value={formData.last_name} onChange={e => setFormData({...formData, last_name: e.target.value})} />
                  </div>
                </div>

                <div className="cf-field">
                  <label htmlFor="cf-email">Email Address *</label>
                  <input type="email" id="cf-email" placeholder="your@email.com" autoComplete="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>

                <div className="cf-field">
                  <label htmlFor="cf-phone">Phone Number</label>
                  <input type="tel" id="cf-phone" placeholder="+256 700 000 000" autoComplete="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>

                <div className="cf-field">
                  <label htmlFor="cf-date">Planned Visit Date (optional)</label>
                  <input type="date" id="cf-date" value={formData.visit_date} onChange={e => setFormData({...formData, visit_date: e.target.value})} />
                </div>

                <div className="cf-field">
                  <label htmlFor="cf-message">Your Message</label>
                  <textarea id="cf-message" placeholder="Hi, I'm planning to visit for the first time this Sunday. I'd love to know what to expect..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>

                <button type="submit" className="cf-submit" id="contact-form-submit" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                  {!submitting && (
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="social-section" id="connect">
        <div className="social-header reveal">
          <p className="sec-label">Stay Connected</p>
          <h2>Follow Us Online</h2>
          <p>The Word has no walls. Join our growing online community and stay connected wherever you are.</p>
        </div>
        <div className="social-grid reveal" style={{'--delay': '0.1s'} as any}>
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

      {/* LOCATION MAP */}
      <section className="map-section">
        <div className="map-header reveal">
          <p className="sec-label sec-label--dark">Find Us</p>
          <h2>How to Get Here</h2>
          <p>We are located in Kasenge along Nakawuka Road, approximately 10 km from Kampala city centre, Wakiso District.</p>
        </div>
        <div className="map-embed reveal" style={{'--delay': '0.15s'} as any}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6!2d32.5167!3d0.2667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMCwwMjY2N8KwMTYnMDAuMSJOIDMywrAzMScwMC4xIkU!5e0!3m2!1sen!2sug!4v1234567890!5m2!1sen!2sug&q=Kasenge+Wakiso+Uganda"
            width="100%" height="420" style={{border: 0}} allowFullScreen={false} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="Kasenge Miracle Centre Church location on Google Maps"
            aria-label="Map showing location of Kasenge Miracle Centre Church in Wakiso District, Uganda">
          </iframe>
          <div className="map-pin-label">
            <i className="fa-solid fa-map-pin"></i>
            <span>Kasenge Miracle Centre Church — along Nakawuka Road, Wakiso District</span>
            <a href="https://maps.google.com/?q=Kasenge+Wakiso+Uganda" target="_blank" rel="noopener noreferrer" className="map-directions-link">
              Get Directions <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
