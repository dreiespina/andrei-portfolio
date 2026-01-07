import React from "react";

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: 8, verticalAlign: "middle"}}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: 8, verticalAlign: "middle"}}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.85.37 1.67.72 2.46a2 2 0 0 1-.45 1.61l-1.27 1.27a16 16 0 0 0 7.29 7.29l1.27-1.27a2 2 0 0 1 1.61-.45c.79.35 1.61.59 2.46.72A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: 8, verticalAlign: "middle"}}>
      <path d="M12 21c-4.97-4.97-8-8.03-8-12A8 8 0 1 1 20 9c0 3.97-3.03 7.03-8 12z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  );
}
function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: 6, verticalAlign: "middle"}}>
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );
}

export default function Contact({ handleContactSubmit }) {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        
      </div>
      <div className="contact-main">
        <div className="contact-left">
          <h3>Let's Connect</h3>
          <p>
            I'm actively looking for internship opportunities where I can apply my skills in web development, IoT systems, and network infrastructure. I'm eager to learn and contribute to innovative projects.
          </p>
          <div className="contact-detail">
            <div><MailIcon /> <span>Email</span><br /><span className="contact-detail-value">andreiespina016@gmail.com</span></div>
            <div><PhoneIcon /> <span>Phone</span><br /><span className="contact-detail-value">+63 9304075746</span></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <div className="contact-row">
            <label htmlFor="name"></label>
            <input id="name" type="text" placeholder="Full Name" required />
          </div>
          <div className="contact-row">
            <label htmlFor="email"></label>
            <input id="email" type="email" placeholder="E-mail" required />
          </div>
          <div className="contact-row">
            <label htmlFor="message"></label>
            <textarea
                id="message"
                placeholder="Type your message here.."
                required
                defaultValue="Hi Andrei, I would like to get in touch regarding internship opportunities."
                />
          </div>
          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}