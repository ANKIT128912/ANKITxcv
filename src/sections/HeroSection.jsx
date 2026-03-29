import { useEffect } from "react";
import CanvasScene from "../components/CanvasScene";

export default function HeroSection() {

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);

  return (
    <div style={{ color: "white" }}>
      {/* 3D BACKGROUND */}
      <CanvasScene />

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 1, padding: "50px" }}>

        {/* HERO */}
        <section
          className="fade-section"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            opacity: 0,
            transform: "translateY(50px)",
            transition: "all 0.8s ease",
          }}
        >
          <div
            style={{
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.1)",
              padding: "25px",
              borderRadius: "15px",
              width: "420px",
              display: "flex",
              gap: "20px",
              alignItems: "center",
              boxShadow: "0 0 20px rgba(0,173,181,0.3)",
            }}
          >
            <img
              src="/images/me.jpg"
              alt="Ankit"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #00adb5",
                transition: "0.3s",
              }}
            />

            <div>
              <h1 style={{ margin: 0 }}>Ankit</h1>
              <h2 style={{ color: "#00adb5" }}>Full Stack Developer</h2>
              <p>
                I build modern websites and AI-powered web apps that help businesses grow online.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS PREVIEW */}
        <section
          className="fade-section"
          style={{
            height: "100vh",
            opacity: 0,
            transform: "translateY(50px)",
            transition: "all 0.8s ease",
          }}
        >
          <h1>My Work</h1>
          <p>Scroll down to explore my projects 👇</p>
        </section>

      </div>
    </div>
  );
}