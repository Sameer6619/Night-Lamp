"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{
      background: "#080808",
      fontFamily: "'Georgia', serif",
      color: "#e8e0d4",
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600;900&family=DM+Sans:wght@300;400&display=swap');

        * { box-sizing: border-box; }

        .hero-title {
          font-family: 'Cinzel', serif;
          font-weight: 900;
          font-size: clamp(3rem, 10vw, 9rem);
          letter-spacing: 0.08em;
          line-height: 0.9;
          color: transparent;
          background: linear-gradient(160deg, #f5ede0 0%, #c9a97a 40%, #8a6340 80%, #3d2810 100%);
          -webkit-background-clip: text;
          background-clip: text;
          text-shadow: none;
          filter: drop-shadow(0 0 60px rgba(201, 169, 122, 0.15));
        }

        .hero-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          font-size: clamp(1rem, 2.5vw, 1.5rem);
          letter-spacing: 0.3em;
          color: #9c8060;
          text-transform: uppercase;
        }

        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #6b5a44;
        }

        .card-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: clamp(1.1rem, 2vw, 1.6rem);
          letter-spacing: 0.06em;
          color: #e8ddd0;
        }

        .card-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.7;
          color: #7a6a56;
        }

        .noise-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }

        .hero-line {
          width: 1px;
          background: linear-gradient(to bottom, transparent, #9c8060, transparent);
          height: 80px;
          margin: 0 auto;
        }

        .card-wrapper {
          position: relative;
          background: #0d0d0d;
          border: 1px solid #1e1a14;
          transition: border-color 0.6s ease, transform 0.6s ease;
          overflow: hidden;
        }

        .card-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201, 169, 122, 0.04) 0%, transparent 60%);
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .card-wrapper:hover {
          border-color: #4a3820;
          transform: translateY(-4px);
        }

        .card-wrapper:hover::before {
          opacity: 1;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.9s ease, filter 0.9s ease;
          filter: saturate(0.6) brightness(0.7);
        }

        .card-wrapper:hover .card-img {
          transform: scale(1.04);
          filter: saturate(0.8) brightness(0.85);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 300;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #c9a97a;
          border: 1px solid #3a2e1e;
          padding: 12px 28px;
          transition: all 0.4s ease;
          background: transparent;
          text-decoration: none;
        }

        .btn-primary:hover {
          background: rgba(201, 169, 122, 0.08);
          border-color: #c9a97a;
          color: #f0e0c0;
          gap: 16px;
        }

        .btn-arrow {
          font-size: 0.9rem;
          transition: transform 0.4s ease;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        .divider-ornament {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #3a2e1e;
        }

        .divider-ornament::before,
        .divider-ornament::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, #3a2e1e);
        }

        .divider-ornament::after {
          background: linear-gradient(to left, transparent, #3a2e1e);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-hero { animation: fadeUp 1.2s ease forwards; }
        .animate-hero-2 { animation: fadeUp 1.2s ease 0.3s both; }
        .animate-hero-3 { animation: fadeUp 1.2s ease 0.6s both; }

        .number-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4rem;
          font-weight: 300;
          color: #1e1a14;
          line-height: 1;
          position: absolute;
          top: -10px;
          right: 20px;
          z-index: 2;
          pointer-events: none;
          user-select: none;
        }
      `}</style>

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>

        {/* Hero background */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="/images/hero.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.2) brightness(0.25)" }}
          />
        </div>

        {/* Vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, transparent 20%, rgba(8,8,8,0.6) 60%, rgba(8,8,8,0.95) 100%)"
        }} />

        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
          background: "linear-gradient(to bottom, transparent, #080808)"
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, padding: "0 24px" }}>

          <p className="section-label animate-hero" style={{ marginBottom: "28px" }}>
            Est. 2024 &nbsp;·&nbsp; Independent Studio
          </p>

          <h1 className="hero-title animate-hero-2">
            Night<br />Lamp
          </h1>

          <p
  className="hero-title animate-hero-2"
  style={{
    fontSize: "clamp(1.2rem, 4vw, 3.5rem)",
    fontFamily: "'Cinzel', serif",
    fontWeight: 400,
    letterSpacing: "0.35em",
    color: "#6b5240",
    marginTop: "6px"
  }}
>
  STUDIOS
</p>

          <div className="hero-line animate-hero-3" style={{ marginTop: "36px", marginBottom: "28px" }} />

          <p className="hero-sub animate-hero-3">
            Crafting worlds beyond the light
          </p>

        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span className="section-label">Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #6b5a44, transparent)" }} />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 32px 120px" }}>

        <div style={{ marginBottom: "72px" }}>
          <p className="section-label" style={{ marginBottom: "16px" }}>— Selected Works</p>
          <div className="divider-ornament">
            <span style={{ fontSize: "1.2rem", color: "#3a2e1e" }}>✦</span>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px" }}>

          {/* GAME CARD */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>

            <div className="card-wrapper" style={{ aspectRatio: "16/10", position: "relative" }}>
              <span className="number-label">01</span>
              <img
                src="/images/game1-1.jpg"
                alt="Upcoming Horror Game"
                className="card-img"
              />
              <div style={{
                position: "absolute", inset: 0, zIndex: 2,
                background: "linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.2) 50%, transparent 100%)"
              }} />
            </div>

            <div className="card-wrapper" style={{ padding: "36px 32px 40px", position: "relative", zIndex: 3 }}>
              <p className="section-label" style={{ marginBottom: "14px" }}>Game &nbsp;·&nbsp; Horror</p>
              <h2 className="card-title" style={{ marginBottom: "16px" }}>
                Upcoming Horror<br />Experience
              </h2>
              <p className="card-desc" style={{ marginBottom: "28px" }}>
                A psychological horror experience set in a mysterious village. Atmospheric storytelling woven through immersive tension and silence.
              </p>
              <Link href="/game" className="btn-primary">
                Explore <span className="btn-arrow">→</span>
              </Link>
            </div>

          </div>

          {/* ASSETS CARD */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>

            <div className="card-wrapper" style={{ aspectRatio: "16/10", position: "relative" }}>
              <span className="number-label">02</span>
              <img
                src="/images/assets1-1.jpg"
                alt="Modular Building Kit"
                className="card-img"
              />
              <div style={{
                position: "absolute", inset: 0, zIndex: 2,
                background: "linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.2) 50%, transparent 100%)"
              }} />
            </div>

            <div className="card-wrapper" style={{ padding: "36px 32px 40px", position: "relative", zIndex: 3 }}>
              <p className="section-label" style={{ marginBottom: "14px" }}>Assets &nbsp;·&nbsp; Unreal Engine</p>
              <h2 className="card-title" style={{ marginBottom: "16px" }}>
                Modular<br />Building Kits
              </h2>
              <p className="card-desc" style={{ marginBottom: "28px" }}>
                High-quality modular environment kits built for Unreal Engine. Optimized, scalable, and production-ready for any world.
              </p>
              <Link href="/assets" className="btn-primary">
                Explore <span className="btn-arrow">→</span>
              </Link>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER LINE */}
      <div style={{ borderTop: "1px solid #151210", padding: "32px", textAlign: "center" }}>
        <p className="section-label">© 2024 NightLamp Studios &nbsp;·&nbsp; All rights reserved</p>
      </div>

    </main>
  );
}