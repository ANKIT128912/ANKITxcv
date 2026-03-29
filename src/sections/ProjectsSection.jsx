export default function ProjectsSection() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        padding: "50px",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "30px" }}>
        My Projects
      </h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        
        {/* PROJECT 1 */}
        <ProjectCard
          title="Cloud Inventory System"
          desc="Helps shops track stock in real-time, reduce losses, and manage inventory efficiently."
          tech="React, Node.js, MySQL"
          link="https://dbms-frontend-umber.vercel.app/"
        />

        {/* PROJECT 2 */}
        <ProjectCard
          title="AI Web App (Ankit Explainify)"
          desc="AI-powered app that generates content and automates tasks using Gemini API."
          tech="React, Next.js, Gemini API"
          link="https://ankit-front-end.vercel.app/"
        />

        {/* PROJECT 3 */}
        <ProjectCard
          title="Real-Time Chat App"
          desc="Real-time messaging platform for instant communication between users."
          tech="Node.js, Socket.io"
          link="YOUR_LINK_HERE"
        />

        {/* PROJECT 4 (OPTIONAL) */}
        <ProjectCard
          title="Spend Tracker"
          desc="Helps users track daily expenses and manage finances easily."
          tech="React"
          link="https://frontened-4zs9.vercel.app/"
        />

      </div>
    </div>
  );
}

function ProjectCard({ title, desc, tech, link }) {
  return (
    <div
      style={{
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.05)",
        padding: "20px",
        borderRadius: "15px",
        width: "260px",
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.background = "rgba(255,255,255,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
      }}
    >
      <h2 style={{ margin: "0 0 10px 0" }}>{title}</h2>

      <p style={{ fontSize: "14px" }}>{desc}</p>

      <p style={{ fontSize: "12px", opacity: 0.7 }}>{tech}</p>

      <a href={link} target="_blank" rel="noreferrer">
        <button
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            border: "none",
            borderRadius: "8px",
            background: "#00adb5",
            color: "white",
            cursor: "pointer",
          }}
        >
          View Project
        </button>
      </a>
    </div>
  );
}