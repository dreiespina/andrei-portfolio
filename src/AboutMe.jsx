import React, { useState } from "react";

// Import your certificate images
import cert1 from "./assets/cert-bigdata.png";
import cert2 from "./assets/cert-openai.png";
import cert3 from "./assets/cert-shake.jpg";
import cert4 from "./assets/cert-ijriss.png";
import cert5 from "./assets/cert-udm.jpg";
import cert6 from "./assets/cert-trends.png";
import lccmSeal from "./assets/LCCM_Seal.png"; // Add this import at the top
import udmSeal from "./assets/UDM_Seal.webp"; // Add this import at the top
import avatar from "./assets/my-photo.jpg"; // Add this import at the top

export default function AboutMe() {
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Universidad de Manila",
      period: "2025 – 2026",
    },
    {
      degree: "Senior High School – ICT Strand",
      school: "La Consolacion College Manila",
      period: "2021 – 2022",
      description: "Technical-Vocational-Livelihood Track",

    },
  ];

  const workExperience = [
     {
      title: "Admin & IT Operations Support",
      subtitle: "Innovation for Poverty Action Philippines",
      period: "July 2026 to Sept 2026",
      description: "",
    },
    {
      title: "IT Support (On-the Job Training)",
      subtitle: "Concentrix UP Technohub",
      period: "Jan 2026 to April 2026",
      description: "",
    },
   
  ];

  const certificates = [
    {
      image: cert1,
      title: "Big Data and Privacy: Strategic Insights for Balancing Innovations with Data Regulation",
      organization: "Big Data Philippines",
      year: "2024",
    },
    {
      image: cert2,
      title: "Empowering Innovation with Azure OpenAI Assistant – Styava.Dev",
      organization: "Styava.Dev",
      year: "2024",
    },
    {
      image: cert3,
      title: "Project Shake II Participation",
      organization: "Project Shake II",
      year: "2023",
    },
    {
      image: cert4,
      title: "IJRISS Publication – Smart Faculty Evaluation",
      organization: "International Journal of Research and Innovation in Social Science",
      year: "2025",
    },
    {
      image: cert5,
      title: "Certificate of Appreciation – Technical Assistant, Practical Digital Skills Enhancement",
      organization: "Universidad de Manila",
      year: "2025",
    },
    {
      image: cert6,
      title: "Emerging Trends and Technologies: Cutting-edge Strategies and Innovation in Software Development",
      organization: "Universidad de Manila",
      year: "2024",
    },
  ];

  // Slidable certificates logic
  const [current, setCurrent] = useState(0);
  const [modal, setModal] = useState({ open: false, cert: null });
  const [selectedPanel, setSelectedPanel] = useState(null);
  const certificatesPerPage = 4;
  const totalPages = Math.ceil(certificates.length / certificatesPerPage);
  const currentPage = Math.floor(current / certificatesPerPage);

  const getVisibleCertificates = () => {
    const visible = [];
    for (let i = 0; i < certificatesPerPage; i++) {
      visible.push(certificates[(current + i) % certificates.length]);
    }
    return visible;
  };

  const goToSlide = (idx) => setCurrent(idx * certificatesPerPage);

  return (
    <section id="about" className="about-section">
      <div className="about-layout">
        <div className="about-portrait">
          <img src={avatar} alt="Andrei Espina in formal attire" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a BS Information Technology graduate from Universidad de Manila with hands-on experience in IT operations support, web development, system design, and IoT projects. Most recently, I worked as an Admin &amp; IT Operations Support at Innovation for Poverty Action Philippines and completed my IT Operations Support OJT at Concentrix UP Technohub, handling system deployment, hardware/software troubleshooting, ticketing, and operational support. I consider myself adaptable, proactive, and naturally curious when it comes to solving technical problems. I enjoy learning through real-world projects, collaborating with others, and continuously improving my skills as I prepare to grow into an IT career.
          </p>

          <div className="about-panel-buttons">
            <div className="about-info-panel">
              <button
                type="button"
                className={selectedPanel === "work" ? "about-panel-button selected" : "about-panel-button"}
                onClick={() => setSelectedPanel(selectedPanel === "work" ? null : "work")}
                aria-expanded={selectedPanel === "work"}
              >
                Work Experience
              </button>
              {(selectedPanel === null || selectedPanel === "work") && (
                <div className="about-panel-details">
                  {workExperience.map((exp) => (
                    <div key={exp.title}>
                      <strong>{exp.title}</strong>
                      <span>{exp.subtitle}</span>
                      <small>{exp.period}</small>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="about-info-panel">
              <button
                type="button"
                className={selectedPanel === "education" ? "about-panel-button selected" : "about-panel-button"}
                onClick={() => setSelectedPanel(selectedPanel === "education" ? null : "education")}
                aria-expanded={selectedPanel === "education"}
              >
                Education
              </button>
              {(selectedPanel === null || selectedPanel === "education") && (
                <div className="about-panel-details">
                  {education.map((edu) => (
                    <div key={edu.degree}>
                      <strong>{edu.degree}</strong>
                      <span>{edu.school}</span>
                      <small>{edu.period}</small>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Certificates full width */}
      <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto" }}>
        <button
          type="button"
          className="certificates-trigger"
          onClick={() => setModal({ open: true, cert: null })}
          aria-label="Open certificates and seminars"
        >
          Certificates & Seminars Attended
        </button>
        <div style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "2rem",
          transition: "all 0.3s"
        }}>
          {getVisibleCertificates().map((cert, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: "1rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                padding: "1.5rem",
                minWidth: "180px",
                maxWidth: "250px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                transition: "all 0.3s"
              }}
              onClick={() => setModal({ open: true, cert })}
              title="Click to view"
            >
              <img
                src={cert.image}
                alt={cert.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "0.75rem",
                  marginBottom: "1rem",
                  background: "rgba(253, 254, 255, 1)",
                }}
              />
              <div style={{ fontWeight: "500", fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                {cert.title}
              </div>
              <div style={{ color: "#555" }}>{cert.year}</div>
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
<div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1.5rem",
  gap: "1.2rem"
}}>
  {Array.from({ length: totalPages }).map((_, idx) => (
    <span
      key={idx}
      onClick={() => goToSlide(idx * 4)}
      style={{
        display: "inline-block",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: idx === currentPage ? "linear-gradient(90deg, #2563eb 60%, #1e40af 100%)" : "#f5f3f3ff",
        boxShadow: idx === currentPage ? "0 0 0 2px #2563eb55" : "none",
        border: idx === currentPage ? "2px solid #2563eb" : "1px solid #e5e7eb",
        cursor: "pointer",
        transition: "background 0.2s, border 0.2s, box-shadow 0.2s"
      }}
      title={idx === currentPage ? "Current page" : `Go to page ${idx + 1}`}
    />
  ))}
</div>
      </div>

    {/* Modal for certificate cards or an individual certificate */}
{modal.open && (
  <div
    onClick={() => setModal({ open: false, cert: null })}
    style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.75)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "zoom-out",
      transition: "background 0.3s"
    }}
  >
    <div
      onClick={e => e.stopPropagation()}
      style={{
        background: "#fff",
        borderRadius: "1.25rem",
        padding: "2rem 2.5rem 1.5rem 2.5rem",
        maxWidth: "95vw",
        maxHeight: "92vh",
        boxShadow: "0 8px 40px rgba(0,0,0,0.30)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        cursor: "default"
      }}
    >
      {/* Close icon */}
      <button
        onClick={() => setModal({ open: false, cert: null })}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "none",
          border: "none",
          fontSize: "1rem",
          color: "#888",
          cursor: "pointer",
          zIndex: 2,
          transition: "color 0.2s",
          borderRadius: "150%",

        }}
        aria-label="Close"
        title="Close"
        onMouseOver={e => (e.currentTarget.style.color = "#2563eb")}
        onMouseOut={e => (e.currentTarget.style.color = "#888")}
      >
        &times;
      </button>
      {modal.cert ? (
        <>
          <img
            src={modal.cert.image}
            alt={modal.cert.title}
            style={{
              maxWidth: "80vw",
              maxHeight: "60vh",
              borderRadius: "1rem",
              marginBottom: "1.5rem",
              background: "#f3f4f6",
              objectFit: "contain",
              boxShadow: "0 2px 16px rgba(0,0,0,0.10)"
            }}
          />
          <div style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "0.5rem", textAlign: "center", color: "#222" }}>
            {modal.cert.title}
          </div>
          <div style={{ color: "#2563eb", fontWeight: "500", marginBottom: "1.2rem", fontSize: "1rem" }}>
            {modal.cert.organization} | {modal.cert.year}
          </div>
          <a className="certificate-action" href={modal.cert.image} target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </>
      ) : (
        <div className="certificate-modal-content">
          <h2>Certificates &amp; Seminars Attended</h2>
          <div className="certificate-modal-grid">
            {certificates.map((cert) => (
              <article className="certificate-modal-card" key={cert.title}>
                <img src={cert.image} alt={cert.title} />
                <strong>{cert.title}</strong>
                <span>{cert.organization} | {cert.year}</span>
                <div className="certificate-card-actions">
                  <a href={cert.image} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    View
                  </a>
                  <a href={cert.image} download onClick={(e) => e.stopPropagation()}>
                    Download
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
      
    </div>
  </div>
)}
    </section>
  );
}