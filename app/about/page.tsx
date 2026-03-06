export default function AboutPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080808",
      color: "#e8e0d4",
      fontFamily: "'Georgia', serif",
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600;900&family=DM+Sans:wght@300;400&display=swap');

        .noise-overlay {
          position: fixed; inset: 0; pointer-events: none; z-index: 100;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }

        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.62rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #6b5a44;
        }

        .hero-title {
          font-family: 'Cinzel', serif;
          font-weight: 900;
          font-size: clamp(3rem, 8vw, 7.5rem);
          letter-spacing: 0.08em;
          line-height: 0.92;
          color: transparent;
          background: linear-gradient(160deg, #f5ede0 0%, #c9a97a 40%, #8a6340 80%, #3d2810 100%);
          -webkit-background-clip: text;
          background-clip: text;
          filter: drop-shadow(0 0 60px rgba(201, 169, 122, 0.12));
        }

        .hero-sub {
          font-family: 'Cinzel', serif;
          font-weight: 400;
          font-size: clamp(0.85rem, 2vw, 1.2rem);
          letter-spacing: 0.25em;
          color: #7a6040;
          text-transform: uppercase;
        }

        .hero-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          font-size: clamp(1rem, 2vw, 1.35rem);
          color: #6b5a44;
          line-height: 1.7;
          max-width: 640px;
        }

        .body-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 300;
          line-height: 1.9;
          color: #7a6a56;
        }

        .body-text strong {
          color: #c9a97a;
          font-weight: 400;
        }

        .divider-ornament {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .divider-ornament::before, .divider-ornament::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, #2e2418);
        }
        .divider-ornament::after {
          background: linear-gradient(to left, transparent, #2e2418);
        }

        .why-item {
          display: grid;
          grid-template-columns: 1px 1fr;
          gap: 28px;
          align-items: start;
          padding: 28px 0;
          border-bottom: 1px solid #131008;
        }

        .why-item:first-child { border-top: 1px solid #131008; }

        .why-accent {
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, #c9a97a, transparent);
          min-height: 60px;
        }

        .why-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: #c9a97a;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .why-body {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.7;
          color: #6a5a46;
        }

        .social-card {
          background: #0d0d0d;
          border: 1px solid #1a1510;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.4s ease, transform 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .social-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, #c9a97a30, transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .social-card:hover {
          border-color: #4a3820;
          transform: translateY(-4px);
        }

        .social-card:hover::before { opacity: 1; }

        .social-icon {
          font-size: 1.3rem;
          opacity: 0.5;
        }

        .social-name {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          color: #c9a97a;
          text-transform: uppercase;
        }

        .social-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.95rem;
          font-weight: 300;
          color: #5a4a36;
          line-height: 1.5;
        }

        .social-arrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #4a3820;
          margin-top: 4px;
          transition: color 0.3s ease;
        }

        .social-card:hover .social-arrow { color: #c9a97a; }

        .back-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #5a4a34;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.3s ease, gap 0.3s ease;
        }
        .back-link:hover { color: #c9a97a; gap: 12px; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-1 { animation: fadeUp 1s ease forwards; }
        .fade-2 { animation: fadeUp 1s ease 0.2s both; }
        .fade-3 { animation: fadeUp 1s ease 0.4s both; }
        .fade-4 { animation: fadeUp 1s ease 0.6s both; }
      `}</style>

      <div className="noise-overlay" />

      {/* Ambient glow */}
      <div style={{
        position: "fixed", top: "-300px", left: "50%", transform: "translateX(-50%)",
        width: "1000px", height: "700px",
        background: "radial-gradient(ellipse, rgba(140, 90, 40, 0.06) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Top nav */}
      <div style={{ borderBottom: "1px solid #131008", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        <a href="/" className="back-link">← &nbsp;NightLamp Studios</a>
        <span className="section-label">About</span>
      </div>


      {/* ── SECTION 1: HERO ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 40px 80px", position: "relative", zIndex: 1 }}>

        <div className="fade-1">
          <p className="section-label" style={{ marginBottom: "28px" }}>— Who We Are</p>

          <h1 className="hero-title">
            Night<br />Lamp<br />Studios
          </h1>

          <div style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, #9c8060, transparent)", margin: "32px 0" }} />

          <p className="hero-sub" style={{ marginBottom: "20px" }}>
            Illuminating the Path for Every Creator
          </p>

          <p className="hero-tagline">
            High-quality game kits and immersive experiences, crafted for developers who want to build faster and dream bigger.
          </p>
        </div>

      </section>


      {/* ── SECTION 2: ABOUT TEXT ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px 80px", position: "relative", zIndex: 1 }}>

        <div className="fade-2">
          <div className="divider-ornament" style={{ marginBottom: "64px" }}>
            <span style={{ fontSize: "1rem", color: "#3a2e1e" }}>✦</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

            <div>
              <p className="section-label" style={{ marginBottom: "24px" }}>— Our Mission</p>
              <p className="body-text">
                At Night Lamp Studios, we believe that the gap between <strong>playing a game</strong> and <strong>building one</strong> should be as small as possible. We are a team of developers and artists dedicated to creating professional-grade game kits and modular building tools that empower creators of all skill levels.
              </p>
            </div>

            <div>
              <p className="section-label" style={{ marginBottom: "24px" }}>— Our Promise</p>
              <p className="body-text">
                Whether you're a solo dev looking for the perfect environment assets or a player searching for your next favorite world, we provide the foundation for your imagination. We don't just sell assets — <strong>we provide the spark that brings your ideas to life.</strong>
              </p>
            </div>

          </div>
        </div>

      </section>


      {/* ── SECTION 3: WHY US ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px 100px", position: "relative", zIndex: 1 }}>

        <div className="fade-3">
          <div className="divider-ornament" style={{ marginBottom: "64px" }}>
            <span style={{ fontSize: "1rem", color: "#3a2e1e" }}>✦</span>
          </div>

          <p className="section-label" style={{ marginBottom: "40px" }}>— Why Choose Us</p>

          {[
            {
              title: "Plug-and-Play Efficiency",
              body: "Our kits are designed to work right out of the box with zero friction. Drop them into your project and start building immediately.",
            },
            {
              title: "Optimized for Performance",
              body: "Clean meshes and smart code that won't slow your project down. Every asset is built with production performance in mind.",
            },
            {
              title: "Community Focused",
              body: "Our roadmap is built on your feedback. We listen closely, iterate often, and build exactly what you need.",
            },
            {
              title: "Atmospheric Quality",
              body: "Every kit is polished to a professional standard, ensuring your game looks triple-A from day one.",
            },
          ].map((item) => (
            <div key={item.title} className="why-item">
              <div className="why-accent" />
              <div>
                <p className="why-title">{item.title}</p>
                <p className="why-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* ── SECTION 4: SOCIAL CTA ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px 100px", position: "relative", zIndex: 1 }}>

        <div className="fade-4">
          <div className="divider-ornament" style={{ marginBottom: "64px" }}>
            <span style={{ fontSize: "1rem", color: "#3a2e1e" }}>✦</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }}>

            <div>
              <p className="section-label" style={{ marginBottom: "20px" }}>— Connect</p>
              <h2 style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 600,
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                letterSpacing: "0.08em",
                color: "transparent",
                background: "linear-gradient(160deg, #f5ede0 0%, #c9a97a 60%, #8a6340 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.1,
              }}>
                Join the<br />Studio
              </h2>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "#5a4a36",
                marginTop: "16px",
                lineHeight: 1.7,
              }}>
                Follow our journey, watch our tutorials, and see our latest kits in action.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-card">
                <span className="social-icon">▶</span>
                <p className="social-name">YouTube</p>
                <p className="social-desc">How-to videos, dev logs, and official trailers.</p>
                <p className="social-arrow">Visit →</p>
              </a>

              <a href="https://artstation.com" target="_blank" rel="noopener noreferrer" className="social-card">
                <span className="social-icon">◈</span>
                <p className="social-name">ArtStation</p>
                <p className="social-desc">High-res showcases of every kit and environment.</p>
                <p className="social-arrow">Visit →</p>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-card">
                <span className="social-icon">⬡</span>
                <p className="social-name">Instagram</p>
                <p className="social-desc">Behind-the-scenes updates and quick previews.</p>
                <p className="social-arrow">Visit →</p>
              </a>

            </div>

          </div>
        </div>

      </section>


      {/* Footer */}
      <div style={{ borderTop: "1px solid #131008", padding: "28px 40px", textAlign: "center" }}>
        <p className="section-label">© 2024 NightLamp Studios &nbsp;·&nbsp; All rights reserved</p>
      </div>

    </main>
  );
}