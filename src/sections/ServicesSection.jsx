export default function ServicesSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        color: "white",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "30px" }}>
        What I Can Do For You
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* SERVICE 1 */}
        <ServiceCard
          title="🌐 Website Development"
          desc="Modern, fast, and responsive websites that attract customers and grow your business."
        />

        {/* SERVICE 2 */}
        <ServiceCard
          title="📊 Business Dashboards"
          desc="Custom dashboards to manage inventory, data, and operations efficiently."
        />

        {/* SERVICE 3 */}
        <ServiceCard
          title="🤖 AI Web Apps"
          desc="Smart applications powered by AI to automate tasks and improve business efficiency."
        />

        {/* SERVICE 4 */}
        <ServiceCard
          title="💬 Real-Time Apps"
          desc="Chat systems and real-time features for better communication and user engagement."
        />
      </div>
    </section>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div
      style={{
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.08)",
        padding: "20px",
        borderRadius: "15px",
        width: "260px",
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.background = "rgba(255,255,255,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>{title}</h2>
      <p style={{ fontSize: "14px" }}>{desc}</p>
    </div>
  );
}