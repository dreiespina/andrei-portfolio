import React from "react";

// Example images, place your images in src/assets or public and update the paths accordingly
import facultyImg from "./assets/faculty-eval.jpg";
import locatorImg from "./assets/smart-locator.png";
import apartmentImg from "./assets/apartment-system.png";
// Removed networkImg import since the project was deleted

const projects = [
  {
    type: "CAPSTONE PROJECT",
    title: "Smart Faculty Evaluation System",
    description:
      "A comprehensive system for evaluating faculty performance with advanced analytics and reporting features. Implemented using modern technologies with a focus on user experience and data security.",
    tags: ["React Native", "Node.js", "Mobile App","Firebase"],
    image: facultyImg,
    link: {
      url: "https://dx.doi.org/10.47772/IJRISS.2025.909000434",
      text: "View Publication",
    },
    apk: {
      url: "https://drive.google.com/drive/folders/1j8ujiC_F49Fj4ajh5d5NVS9OeCSPMWyp?usp=sharing",
      text: "Download APK",
    },
  },
  {
    type: "IOT PROJECT",
    title: "Smart Locator Device",
    description:
      "An IoT-based tracking device that uses bluetooth and wireless communication to provide real-time location tracking, and mobile app integration.",
    tags: ["Arduino", "IoT", "Mobile App"],
    image: locatorImg,
    link: {
      url: "https://docs.google.com/document/d/1tKZobsDmAscpfD7e09zwP2VcARwHr39W/edit?usp=sharing",
      text: "View Documentation",
    },
    apk: {
      url: "https://drive.google.com/drive/folders/1oDyv6I1vW2Wz312jDt_5H6OMGLnVMS0e?usp=sharing",
      text: "Download APK",
    },
  },
  {
    type: "WEB DEVELOPMENT PROJECT",
    title: "Web-Based Apartment Management System",
    description:
      "Designed a system for landlords and tenants to manage billing, payments, and communication efficiently.",
    tags: ["PHP", "XAMPP", "MySQL", "Web Development"],
    image: apartmentImg,
    link: {
      url: "https://docs.google.com/document/d/1SbM1cO7qwHIevb7f2nHqFGVqu2fUhFLkwEk3V6MRek4/edit?usp=sharing",
      text: "View Documentation",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section"  style={{ scrollMarginTop: "80px" }}>
      <h2 style={{
        textAlign: "center",
        fontSize: "2.3rem",
        marginBottom: "0.5rem",
        color: "#111",
        fontWeight: "bold",
      }}>
        Projects
      </h2>
      <p style={{
        textAlign: "center",
        marginBottom: ".5rem",
        color: "#111",
        fontSize: ".8rem",
      }}>
        A showcase of my academic and personal projects demonstrating skills in web development,<br />
        IoT, and mobile applications.
      </p>
      <div style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              background: "#ffffffff",
              borderRadius: "1rem",
              boxShadow: "0 15px 50px rgba(0,0,0,0.05)",
              padding: "2rem",
              minWidth: "320px",
              maxWidth: "420px",
              flex: "1 1 320px",
              marginBottom: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "90%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "0.75rem",
                marginBottom: "1rem",
                background: "#f3f4f6",
              }}
            />
            <div style={{
              color: "#2563eb",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              letterSpacing: "1px",
              alignSelf: "flex-start"
            }}>
              {project.type}
            </div>
            <h3 style={{
              margin: "0 0 0.1rem 0",
              alignSelf: "flex-start",
              color: "#111",
              fontWeight: "bold",
              fontSize: ".9rem",
            }}>
              {project.title}
            </h3>
            <p style={{
              color: "#111",
              marginBottom: ".5rem",
              alignSelf: "flex-start",
              fontSize: ".7rem",
            }}>
              {project.description}
            </p>
            <div style={{ marginBottom: "1rem", alignSelf: "flex-start" }}>
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  style={{
                    display: "inline-block",
                    background: "#e7f0fd",
                    color: "#141923ff",
                    borderRadius: "1rem",
                    padding: "0.3rem 1rem",
                    marginRight: "0.5rem",
                    marginBottom: "0.5rem",
                    fontSize: "0.65 rem",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.5rem", alignSelf: "flex-start" }}>
<a
  href={project.link.url}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "10rem",
    padding: "0.5rem 1rem",
    color: "#222",
    fontWeight: "500",
    textDecoration: "none",
    transition: "box-shadow 0.2s",
    boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
    fontSize: "0.7rem",
  }}
>
  {/* Modern link icon */}
  <span>
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 1 7 7l-3 3a5 5 0 0 1-7-7" />
      <path d="M14 11a5 5 0 0 0-7-7l-3 3a5 5 0 0 0 7 7" />
    </svg>
  </span>
  {project.link.text}
</a>
{/* Show APK download if available */}
{project.apk && (
  <a
    href={project.apk.url}
    download
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: "10rem",
      padding: "0.5rem 1rem",
      color: "#2563eb",
      fontWeight: "500",
      textDecoration: "none",
      transition: "box-shadow 0.2s",
      boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
      fontSize: "0.7rem",
    }}
  >
    {/* Modern download icon */}
    <span>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M19 12l-7 7-7-7" />
        <rect x="5" y="19" width="14" height="2" rx="1" />
      </svg>
    </span>
    {project.apk.text}
  </a>
)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}