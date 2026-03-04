"use client";

import assets from "../../data/assets.json";
import Link from "next/link";

export default function AssetsPage() {
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
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
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
          font-size: clamp(2.8rem, 6vw, 6rem);
          letter-spacing: 0.08em;
          line-height: 0.95;
          color: transparent;
          background: linear-gradient(160deg, #f5ede0 0%, #c9a97a 40%, #8a6340 80%, #3d2810 100%);
          -webkit-background-clip: text;
          background-clip: text;
          filter: drop-shadow(0 0 40px rgba(201, 169, 122, 0.1));
        }

        .page-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          font-size: 1.15rem;
          color: #6b5a44;
          letter-spacing: 0.05em;
        }

        .divider-ornament {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .divider-ornament::before,
        .divider-ornament::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, #2e2418);
        }

        .divider-ornament::after {
          background: linear-gradient(to left, transparent, #2e2418);
        }

        .asset-card {
          display: flex;
          flex-direction: column;
          background: #0d0d0d;
          border: 1px solid #1a1510;
          text-decoration: none;
          color: inherit;
          overflow: hidden;
          transition: border-color 0.5s ease, transform 0.5s ease;
          position: relative;
        }

        .asset-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201, 169, 122, 0.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 1;
        }

        .asset-card:hover {
          border-color: #4a3820;
          transform: translateY(-5px);
        }

        .asset-card:hover::after {
          opacity: 1;
        }

        .asset-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.9s ease, filter 0.9s ease;
          filter: saturate(0.5) brightness(0.65);
        }

        .asset-card:hover .asset-card-img {
          transform: scale(1.05);
          filter: saturate(0.8) brightness(0.85);
        }

        .asset-card-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.07em;
          color: #e0d4c0;
          margin-bottom: 10px;
        }

        .asset-card-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.65;
          color: #6a5a46;
        }

        .card-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 300;
          color: #171410;
          line-height: 1;
          position: absolute;
          top: 8px;
          right: 14px;
          z-index: 2;
          pointer-events: none;
          user-select: none;
        }

        .card-tag {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          font-weight: 300;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #6b5a44;
          border: 1px solid #2a2016;
          padding: 4px 10px;
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

        .back-link:hover {
          color: #c9a97a;
          gap: 12px;
        }

        .view-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c9a97a;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: gap 0.3s ease;
        }

        .asset-card:hover .view-label {
          gap: 13px;
        }

        /* Featured first card spans 2 columns */
        .grid-featured {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }

        .card-featured {
          grid-column: span 2;
        }

        @media (max-width: 900px) {
          .grid-featured {
            grid-template-columns: 1fr;
          }
          .card-featured {
            grid-column: span 1;
          }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-1 { animation: fadeUp 0.9s ease forwards; }
        .fade-2 { animation: fadeUp 0.9s ease 0.15s both; }
        .fade-3 { animation: fadeUp 0.9s ease 0.3s both; }
      `}</style>

      <div className="noise-overlay" />

      {/* Ambient warm glow */}
      <div style={{
        position: "fixed", top: "-300px", left: "50%", transform: "translateX(-50%)",
        width: "900px", height: "600px",
        background: "radial-gradient(ellipse, rgba(140, 90, 40, 0.05) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Top nav */}
      <div style={{ borderBottom: "1px solid #131008", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        <a href="/" className="back-link">← &nbsp;NightLamp Studios</a>
        <span className="section-label">Assets</span>
      </div>

      {/* Header */}
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "80px 40px 60px", position: "relative", zIndex: 1 }}>

        <div className="fade-1">
          <p className="section-label" style={{ marginBottom: "20px" }}>— Environment Assets</p>
          <h1 className="page-title">Building<br />Kits</h1>
          <p className="page-sub" style={{ marginTop: "18px" }}>
            Modular environments &amp; architecture assets for Unreal Engine.
          </p>
        </div>

        <div className="fade-2" style={{ marginTop: "48px" }}>
          <div className="divider-ornament">
            <span style={{ fontSize: "1rem", color: "#3a2e1e" }}>✦</span>
          </div>
        </div>

        {/* Grid — first card featured (2-col span), rest normal */}
        <div className="fade-3 grid-featured" style={{ marginTop: "64px" }}>
          {assets.map((asset, i) => (
            <Link
              key={asset.id}
              href={`/assets/${asset.id}`}
              className={`asset-card${i === 0 ? " card-featured" : ""}`}
            >
              {/* Image */}
              <div style={{ aspectRatio: i === 0 ? "21/9" : "16/10", overflow: "hidden", position: "relative" }}>
                <span className="card-number">{String(i + 1).padStart(2, "0")}</span>
                {i === 0 && (
                  <div style={{
                    position: "absolute", top: "20px", left: "20px", zIndex: 3,
                    fontFamily: "'DM Sans', sans-serif", fontSize: "0.55rem",
                    letterSpacing: "0.25em", textTransform: "uppercase",
                    color: "#c9a97a", border: "1px solid #4a3820",
                    padding: "5px 12px", background: "rgba(8,8,8,0.6)",
                    backdropFilter: "blur(4px)",
                  }}>
                    Featured
                  </div>
                )}
                <img
                  src={asset.images[0]}
                  alt={asset.name}
                  className="asset-card-img"
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.1) 55%, transparent 100%)",
                  zIndex: 1,
                }} />
              </div>

              {/* Info */}
              <div style={{ padding: "26px 28px 30px", position: "relative", zIndex: 2 }}>
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                  <span className="card-tag">Unreal Engine 5</span>
                  <span className="card-tag">Modular</span>
                </div>
                <h2 className="asset-card-title">{asset.name}</h2>
                <p className="asset-card-desc">{asset.description}</p>
                <div style={{ marginTop: "20px" }}>
                  <span className="view-label">
                    View Kit <span style={{ fontSize: "0.85rem" }}>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #131008", padding: "28px 40px", marginTop: "60px", textAlign: "center" }}>
        <p className="section-label">© 2024 NightLamp Studios &nbsp;·&nbsp; All rights reserved</p>
      </div>

    </main>
  );
}