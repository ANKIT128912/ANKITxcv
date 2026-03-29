export default function WhyMeSection() {
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
        Why Choose Me
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <WhyCard
          title="⚡ Fast Delivery"
          desc="I deliver projects quickly without compromising quality."
        />

        <WhyCard
          title="💰 Affordable Pricing"
          desc="High-quality work at budget-friendly pricing for businesses."
        />

        <WhyCard
          title="🎯 Business-Focused"
          desc="I build solutions that help you attract customers and grow."
        />

        <WhyCard
          title="📞 Easy Communication"
          desc="Direct and clear communication throughout the project."
        />

        <WhyCard
          title="🚀 Modern Tech Stack"
          desc="Using React, Next.js, AI tools, and cloud technologies."
        />

        <WhyCard
          title="🔒 Reliable & Scalable"
          desc="Projects built for performance, security, and future growth."
        />
      </div>
    </section>
  );
}

function WhyCard({ title, desc }) {
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