import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

const sections = [
  { id: "home", label: "Home" },
   { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [active, setActive] = useState("home");

  function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form[0].value,
      email: form[1].value,
      subject: form[2].value,
      message: form[3].value,
    };

    fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => alert(data.message))
      .catch(() => alert('Failed to send message.'));
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-divider"></div>
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={active === s.id ? "active" : ""}
                  onClick={() => setActive(s.id)}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main>
        <Home />
        <AboutMe />
        <Projects />
        <Contact handleContactSubmit={handleContactSubmit} />
      </main>
       <footer style={{
      textAlign: "center",
      padding: "1.2rem 0",
      color: "#888",
      fontSize: "0.95rem",
      background: "#f7f7f7",
      borderTop: "1px solid #e5e7eb",
      marginTop: "1rem"
    }}>
      © {new Date().getFullYear()} Andrei Espina. All rights reserved.
    </footer>
    </div>
  );
}

