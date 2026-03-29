import React, { useEffect, useState } from "react";
import avatar from "./assets/avatar.png";

function SocialIcons() {
  return (
    <div className="social-row">
      <a href="https://www.linkedin.com/in/andrei-espina-945b1a340/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://www.tiktok.com/@ndr_spn" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <i className="fab fa-tiktok"></i>
      </a>
      <a href="https://www.instagram.com/drei_espina/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
}

// Typing animation component
function TypingSubtitle({ texts, speed = 80, pause = 1200 }) {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!deleting && charIdx < texts[textIdx].length) {
      timeout = setTimeout(() => setCharIdx(charIdx + 1), speed);
    } else if (!deleting && charIdx === texts[textIdx].length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(charIdx - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setTextIdx((textIdx + 1) % texts.length);
      }, 400);
    }
    setDisplayed(texts[textIdx].slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts, speed, pause]);

  return (
    <span>
      {displayed}
      <span style={{ borderRight: "2px solid #2563eb", marginLeft: 2, animation: "blink 1s steps(1) infinite" }}></span>
      <style>
        {`
          @keyframes blink {
            0%, 100% { border-color: #2563eb; }
            50% { border-color: transparent; }
          }
        `}
      </style>
    </span>
  );
}

export default function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-left">
        <h1>
          <span className="highlight">Hello, I'm</span><br />
          Andrei Espina
        </h1>
        <div className="hero-subtitle" style={{ marginBottom: "1em", minHeight: "1.5em" }}>
          <TypingSubtitle texts={["IT Support Specialist Intern","IT Student", "Content Creator","Aspiring Full Stack Developer"]} />
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5em" }}>
          <a href="#about" className="about-btn"> About Me </a>
          <a
            href="/ANDREI D. ESPINA _ RESUME _Developer.pdf"
            className="about-btn"
            style={{ background: "#fff", color: "#2a2afc", border: "2px solid #2a2afc" }}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
        <SocialIcons />
      </div>
      <div className="hero-right">
        <div className="avatar-circle">
          <img src={avatar} alt="Andrei Espina" />
        </div>
      </div>
      <div className="hero-bg"></div>
    </section>
  );
}