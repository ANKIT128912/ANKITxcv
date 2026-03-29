export default function ContactSection() {
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
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.1)",
          padding: "30px",
          borderRadius: "15px",
        }}
      >
        <h1>Let's Work Together</h1>

        <p>Email: ankit121ab@email.com</p>
        <p>WhatsApp: +91 9621498361</p>

        <button
          style={{
            marginTop: "10px",
            padding: "8px 14px",
            border: "none",
            borderRadius: "8px",
            background: "#00adb5",
            color: "white",
            cursor: "pointer",
          }}
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}