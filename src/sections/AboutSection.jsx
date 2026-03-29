export default function AboutSection() {
  return (
    <section
      style={{
        height: "100vh",
        color: "white",
        padding: "50px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.1)",
          padding: "30px",
          borderRadius: "15px",
        }}
      >
        <h1>About Me</h1>

        <p style={{ lineHeight: "1.6" }}>
          I'm a full stack developer who builds modern websites and AI-powered
          applications that help businesses grow and attract more customers
          online.
        </p>

        <p style={{ lineHeight: "1.6" }}>
          I’ve developed real-world projects including inventory systems, chat
          apps, and AI tools that improve efficiency and user experience.
        </p>

        <p style={{ lineHeight: "1.6" }}>
          My focus is on creating fast, scalable, and user-friendly solutions
          tailored to business needs.
        </p>
      </div>
    </section>
  );
}