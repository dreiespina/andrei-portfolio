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

export default function AboutMe() {
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Universidad de Manila",
      period: "2025 – 2026 (expected)",
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
      title: "Project Assistant",
      subtitle: "Project Shake II",
      period: "2023 - 2024",
      description:
        "Assisted in coordinating and implementing IT-related projects. Collaborated with team members on system documentation and network assessments.",
    },
    {
      title: "Project Assistant (National Service Training Program – NSTP)",
      subtitle:
        "Project Supporting Households and LGU's and Knowledge for Preparedness II (Project Shake II)",
      period: "Feb 2023 - Jun 2023",
      description:
        "Developed an Exposure Database Mapping output, demonstrating proficiency in data organization and reporting. Managed project reporting and documentation flow, enhancing overall team communication and organizational efficiency.",
    },
  ];

  const certificates = [
    {
      image: cert1,
      title: "Big Data and Privacy: Strategic Insights for Balancing Innovations with Data Regulation",
      year: "2024",
    },
    {
      image: cert2,
      title: "Empowering Innovation with Azure OpenAI Assistant – Styava.Dev",
      year: "2024",
    },
    {
      image: cert3,
      title: "Project Shake II Participation",
      year: "2023",
    },
    {
      image: cert4,
      title: "IJRISS Publication – Smart Faculty Evaluation",
      year: "2025",
    },
    {
      image: cert5,
      title: "Certificate of Appreciation – Technical Assistant, Practical Digital Skills Enhancement",
      year: "2025",
    },
    {
      image: cert6,
      title: "Emerging Trends and Technologies: Cutting-edge Strategies and Innovation in Software Development",
      year: "2024",
    },
  ];

  // Slidable certificates logic
  const [current, setCurrent] = useState(0);
  const [modal, setModal] = useState({ open: false, cert: null });
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
    <section id="about" className="about-section" style={{ padding: "2rem 0" }}>
      {/* Top: About Me full width */}
      <div style={{
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto 2rem auto",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.3rem", fontWeight: "bold", marginBottom: "1rem" }}>About Me</h2>
        <p style={{ fontSize: ".9rem", textAlign: "justify" }}>
          I’m a graduating Information Technology student with a strong interest in building practical and user-focused digital solutions. I enjoy working on projects involving web development, system design, and basic IoT concepts, where I can turn ideas into functional applications. I have hands-on experience with HTML, CSS, JavaScript, Firebase, and Visual Studio, and I’m always eager to explore new tools and technologies.

          I consider myself adaptable, proactive, and naturally curious when it comes to solving technical problems. I enjoy learning through real-world projects, collaborating with others, and continuously improving my skills as I prepare to grow into a professional developer.
        </p>
      </div>

      {/* Middle: Two columns */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        maxWidth: "1100px",
        margin: "0 auto 2rem auto"
      }}>
        {/* Left Column: Work Experience */}
        <div style={{
          background: "#ffffffff",
          borderRadius: "1rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          padding: ".5rem",
          display: "flex",
          flexDirection: "column",
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", letterSpacing: "1px" }}>Work Experience</h2>
          <div>
            <div style={{ fontWeight: "bold", fontSize: "1rem" }}>{workExperience[1].title}</div>
            <div style={{ fontSize: ".9rem", marginBottom: "0.5rem" }}>{workExperience[1].subtitle}</div>
            <div style={{ color: "#2563eb", fontWeight: "500", marginBottom: "0.5rem" }}>{workExperience[1].period}</div>
            <div style={{ color: "#444", fontSize: "0.8rem" }}>{workExperience[1].description}</div>
          </div>
        </div>
        {/* Right Column: Education */}
        <div style={{
          background: "#ffffffff",
          borderRadius: "1rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          padding: ".5rem",
          display: "flex",
          flexDirection: "column",
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", letterSpacing: "1px" }}>Education</h2>
         <div style={{ fontWeight: "normal", fontSize: "1rem", marginTop: "0.5rem" }}>
  {education.map((edu, idx) => (
    <div
      key={idx}
      style={{
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "1.5rem",
        justifyContent: "space-between"
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: "bold", fontSize: "1rem" }}>{edu.degree}</div>
        <div style={{ fontSize: ".9rem" }}>{edu.school}</div>
        <div style={{ color: "#2563eb", fontWeight: "500" }}>{edu.period}</div>
        <div style={{ color: "#888", fontSize: "0.9rem" }}>{edu.description}</div>
      </div>
      {/* Show seal for each school, centered vertically */}
      {edu.school === "La Consolacion College Manila" && (
        <img
          src={lccmSeal}
          alt="LCCM Seal"
          style={{
            width: "54px",
            height: "54px",
            objectFit: "contain",
            borderRadius: "0.5rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            background: "#fff",
            display: "block"
          }}
        />
      )}
      {edu.school === "Universidad de Manila" && (
        <img
          src={udmSeal}
          alt="UDM Seal"
          style={{
            width: "54px",
            height: "54px",
            objectFit: "contain",
            borderRadius: "0.5rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            background: "#fff",
            display: "block"
          }}
        />
      )}
    </div>
  ))}
</div>
          </div>
        </div>
      

      {/* Bottom: Certificates full width */}
      <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.35rem", color: "#111", marginBottom: "1.5rem", textAlign: "center" }}>
          Certificates & Seminars Attended
        </div>
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

     {/* Modal for certificate image */}
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
        {modal.cert.year}
      </div>
      
    </div>
  </div>
)}
    </section>
  );
}