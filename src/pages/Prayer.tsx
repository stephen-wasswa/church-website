import { Helmet } from "react-helmet-async";
import React, { useState } from "react";

export default function Prayer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    prayer_request: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/prayers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", prayer_request: "" });
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
        <title>Send a Prayer — Alimunze Church</title>
      </Helmet>

      <section className="page-hero" aria-label="Send a Prayer" id="prayer-page">
        <div className="page-hero-overlay" aria-hidden="true"></div>
        <div className="page-hero-fade" aria-hidden="true"></div>
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">
            <span></span>
            <p>Prayer &amp; Intercession</p>
          </div>
          <h1>Submit Your<br /><em>Prayer Request</em></h1>
          <p className="hero-sub">We don't just pray for you — we pray with you. Let us stand together as a family.</p>
        </div>
      </section>
 
      <section className="visit-section">
        <div className="visit-inner" style={{ maxWidth: '720px', margin: '0 auto', gridTemplateColumns: '1fr' }}>
          <form className="contact-form-wrap reveal" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="prayer-success-card animate-fade">
                <div className="success-icon-wrap">
                  <svg className="success-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="success-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                </div>
                <h4>Request Submitted</h4>
                <p>Your request has been received. Our prayer partners and Pr. Robinah will stand in agreement with you. Your request is kept strictly confidential.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="btn-ghost" style={{ marginTop: '1.5rem' }}>Send another request</button>
              </div>
            ) : (
              <>
                <div className="confidential-badge">
                  <i className="fa-solid fa-lock"></i>
                  <span>Strictly Confidential</span>
                </div>
                <h3>How can we pray for you?</h3>
                <p className="cf-sub-tag">Your prayer request is shared only with our intercessory team and senior Pr.</p>
 
                <div className="cf-field">
                  <label htmlFor="pr-name">Your Name *</label>
                  <input type="text" id="pr-name" placeholder="John Mukisa" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
 
                <div className="cf-row">
                  <div className="cf-field">
                    <label htmlFor="pr-email">Email Address *</label>
                    <input type="email" id="pr-email" placeholder="your@email.com" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="cf-field">
                    <label htmlFor="pr-phone">Phone Number *</label>
                    <input type="tel" id="pr-phone" placeholder="+256 700 000 000" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
 
                <div className="cf-field">
                  <label htmlFor="pr-request">Prayer Request *</label>
                  <textarea id="pr-request" required placeholder="Please pray for..." rows={6} value={formData.prayer_request} onChange={e => setFormData({...formData, prayer_request: e.target.value})}></textarea>
                </div>
 
                <button type="submit" className="cf-submit" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit Request'}
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
    </>
  );
}
