export default function ContactPage() {
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

        .page-title {
          font-family: 'Cinzel', serif;
          font-weight: 900;
          font-size: clamp(3rem, 8vw, 7rem);
          letter-spacing: 0.08em;
          line-height: 0.92;
          color: transparent;
          background: linear-gradient(160deg, #f5ede0 0%, #c9a97a 40%, #8a6340 80%, #3d2810 100%);
          -webkit-background-clip: text;
          background-clip: text;
          filter: drop-shadow(0 0 60px rgba(201, 169, 122, 0.12));
        }

        .page-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          font-size: 1.2rem;
          color: #6b5a44;
          line-height: 1.7;
          max-width: 520px;
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

        .contact-row {
          display: grid;
          grid-template-columns: 160px 1fr auto;
          align-items: center;
          gap: 32px;
          padding: 28px 0;
          border-bottom: 1px solid #0f0d08;
          text-decoration: none;
          color: inherit;
          position: relative;
        }

        .contact-row:first-child { border-top: 1px solid #0f0d08; }

        .contact-row::before {
          content: '';
          position: absolute;
          left: -40px; right: -40px;
          top: 0; bottom: 0;
          background: rgba(201, 169, 122, 0.02);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-row:hover::before { opacity: 1; }
        .contact-row:hover .contact-arrow { color: #c9a97a; transform: translateX(5px); }
        .contact-row:hover .contact-value { color: #e0d0bc; }

        .contact-platform {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #4a3c28;
        }

        .contact-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 300;
          color: #9a8a74;
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
        }

        .contact-arrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: #3a2e1e;
          transition: color 0.3s ease, transform 0.3s ease;
          display: inline-block;
        }

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

        .tagline-block {
          background: #0d0d0d;
          border: 1px solid #1a1510;
          padding: 40px;
          position: relative;
          overflow: hidden;
        }

        .tagline-block::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, #c9a97a30, transparent);
        }

        .tagline-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(1.1rem, 2vw, 1.45rem);
          font-weight: 300;
          color: #6b5a44;
          line-height: 1.8;
        }

        .tagline-text strong {
          color: #c9a97a;
          font-weight: 400;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-1 { animation: fadeUp 1s ease forwards; }
        .fade-2 { animation: fadeUp 1s ease 0.2s both; }
        .fade-3 { animation: fadeUp 1s ease 0.4s both; }
      `}</style>

      <div className="noise-overlay" />

      {/* Ambient glow */}
      <div style={{
        position: "fixed", top: "-300px", left: "50%", transform: "translateX(-50%)",
        width: "1000px", height: "700px",
        background: "radial-gradient(ellipse, rgba(140, 90, 40, 0.05) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Top nav */}
      <div style={{ borderBottom: "1px solid #131008", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        <a href="/" className="back-link">← &nbsp;NightLamp Studios</a>
        <span className="section-label">Contact</span>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "90px 40px 100px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="fade-1" style={{ marginBottom: "80px" }}>
          <p className="section-label" style={{ marginBottom: "24px" }}>— Get in Touch</p>
          <h1 className="page-title">Let's<br />Talk.</h1>
          <p className="page-sub" style={{ marginTop: "24px" }}>
            Whether it's a collaboration, a question about our assets, or just a hello — we'd love to hear from you.
          </p>
        </div>

        {/* Divider */}
        <div className="fade-2" style={{ marginBottom: "64px" }}>
          <div className="divider-ornament">
            <span style={{ fontSize: "1rem", color: "#3a2e1e" }}>✦</span>
          </div>
        </div>

        {/* Contact rows */}
        <div className="fade-2">
          {[
            { platform: "Email",     value: "your@email.com",                    href: "mailto:your@email.com" },
            { platform: "GitHub",    value: "github.com/yourprofile",             href: "https://github.com/yourprofile" },
            { platform: "ArtStation",value: "artstation.com/yourprofile",         href: "https://artstation.com/yourprofile" },
            { platform: "YouTube",   value: "youtube.com/@nightlampstudios",      href: "https://youtube.com" },
            { platform: "Instagram", value: "@nightlampstudios",                  href: "https://instagram.com" },
          ].map((item) => (
            <a
              key={item.platform}
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="contact-row"
            >
              <span className="contact-platform">{item.platform}</span>
              <span className="contact-value">{item.value}</span>
              <span className="contact-arrow">→</span>
            </a>
          ))}
        </div>

        {/* Quote block */}
        <div className="fade-3" style={{ marginTop: "80px" }}>
          <div className="tagline-block">
            <p className="section-label" style={{ marginBottom: "20px" }}>— A Note From the Studio</p>
            <p className="tagline-text">
              We're a small but passionate team. Every message is read personally.<br />
              <strong>We don't just build assets — we build relationships.</strong>
            </p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #131008", padding: "28px 40px", textAlign: "center" }}>
        <p className="section-label">© 2024 NightLamp Studios &nbsp;·&nbsp; All rights reserved</p>
      </div>

    </main>
  );
}