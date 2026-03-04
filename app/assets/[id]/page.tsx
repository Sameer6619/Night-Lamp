"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import assets from "../../../data/assets.json";

export default function AssetDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const asset = assets.find((a) => a.id === id);

  const [activeImage, setActiveImage] = useState(0);

  if (!asset) {
    return (
      <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#080808", color: "#e8e0d4", fontFamily: "'Georgia', serif" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: "3rem", color: "#3a2e1e" }}>404</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "#6b5a44", marginTop: "12px" }}>Asset not found.</p>
        </div>
      </main>
    );
  }

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

        .asset-title {
          font-family: 'Cinzel', serif;
          font-weight: 900;
          font-size: clamp(2.2rem, 5vw, 5rem);
          letter-spacing: 0.08em;
          line-height: 0.95;
          color: transparent;
          background: linear-gradient(160deg, #f5ede0 0%, #c9a97a 40%, #8a6340 80%, #3d2810 100%);
          -webkit-background-clip: text;
          background-clip: text;
          filter: drop-shadow(0 0 40px rgba(201, 169, 122, 0.1));
        }

        .asset-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 300;
          line-height: 1.8;
          color: #7a6a56;
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

        .main-image-wrap {
          position: relative;
          overflow: hidden;
          border: 1px solid #1e1a14;
          background: #0a0a0a;
        }

        .main-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.65) brightness(0.8);
          transition: filter 0.6s ease;
        }

        .main-image-wrap:hover img {
          filter: saturate(0.85) brightness(0.95);
        }

        .thumb {
          cursor: pointer;
          overflow: hidden;
          border: 1px solid #1a1510;
          transition: border-color 0.3s ease, transform 0.3s ease;
          flex-shrink: 0;
        }

        .thumb:hover { transform: translateY(-2px); border-color: #3a2e1e; }
        .thumb.active { border-color: #c9a97a; }

        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.4) brightness(0.6);
          transition: filter 0.4s ease;
        }

        .thumb.active img,
        .thumb:hover img {
          filter: saturate(0.75) brightness(0.85);
        }

        .detail-panel {
          background: #0d0d0d;
          border: 1px solid #1a1510;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
          overflow: hidden;
        }

        .detail-panel::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, #c9a97a30, transparent);
        }

        .detail-panel-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #4a3c28;
        }

        .detail-panel-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 400;
          color: #c9a97a;
          letter-spacing: 0.04em;
        }

        .detail-panel-icon {
          font-size: 1.4rem;
          margin-bottom: 6px;
          opacity: 0.4;
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

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-1 { animation: fadeUp 0.9s ease forwards; }
        .fade-2 { animation: fadeUp 0.9s ease 0.15s both; }
        .fade-3 { animation: fadeUp 0.9s ease 0.3s both; }
        .fade-4 { animation: fadeUp 0.9s ease 0.45s both; }
      `}</style>

      <div className="noise-overlay" />

      {/* Ambient glow */}
      <div style={{
        position: "fixed", top: "-300px", left: "50%", transform: "translateX(-50%)",
        width: "900px", height: "600px",
        background: "radial-gradient(ellipse, rgba(140, 90, 40, 0.05) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Top nav */}
      <div style={{ borderBottom: "1px solid #131008", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        <a href="/assets" className="back-link">← &nbsp;All Assets</a>
        <span className="section-label">NightLamp Studios &nbsp;·&nbsp; Building Kits</span>
      </div>

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "72px 40px 100px", position: "relative", zIndex: 1 }}>

        {/* HEADER */}
        <div className="fade-1" style={{ marginBottom: "56px" }}>
          <p className="section-label" style={{ marginBottom: "20px" }}>— Asset Detail</p>
          <h1 className="asset-title">{asset.name.toUpperCase()}</h1>
          <p className="asset-desc" style={{ marginTop: "20px", maxWidth: "640px" }}>{asset.description}</p>
        </div>

        <div className="fade-2" style={{ marginBottom: "56px" }}>
          <div className="divider-ornament">
            <span style={{ fontSize: "1rem", color: "#3a2e1e" }}>✦</span>
          </div>
        </div>

        {/* MAIN LAYOUT: image left, details right */}
        <div className="fade-3" style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "2px", alignItems: "start" }}>

          {/* Left: image viewer */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>

            {/* Main image */}
            <div className="main-image-wrap" style={{ aspectRatio: "16/9" }}>
              <img src={asset.images[activeImage]} alt="Asset Preview" />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 60%)",
                pointerEvents: "none",
              }} />
              {/* Image counter */}
              <div style={{ position: "absolute", bottom: "16px", right: "20px", zIndex: 5 }}>
                <span className="section-label" style={{ color: "#9c8060" }}>
                  {String(activeImage + 1).padStart(2, "0")} / {String(asset.images.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div style={{ display: "flex", gap: "2px", overflowX: "auto", paddingBottom: "4px" }}>
              {asset.images.map((img, index) => (
                <div
                  key={index}
                  className={`thumb${activeImage === index ? " active" : ""}`}
                  onClick={() => setActiveImage(index)}
                  style={{ width: "110px", height: "68px", flexShrink: 0 }}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>

          </div>

          {/* Right: detail panels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>

            <div className="detail-panel">
              <span className="detail-panel-icon">⬡</span>
              <p className="detail-panel-label">Engine</p>
              <p className="detail-panel-value">{asset.engine}</p>
            </div>

            <div className="detail-panel">
              <span className="detail-panel-icon">◈</span>
              <p className="detail-panel-label">Polygon Count</p>
              <p className="detail-panel-value">{asset.polygons}</p>
            </div>

            <div className="detail-panel">
              <span className="detail-panel-icon">▣</span>
              <p className="detail-panel-label">Textures</p>
              <p className="detail-panel-value">{asset.textures}</p>
            </div>

            <div className="detail-panel" style={{ marginTop: "2px" }}>
              <p className="detail-panel-label" style={{ marginBottom: "4px" }}>Tags</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                {["Modular", "UE5", "Production Ready", "Environment"].map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#6b5a44",
                    border: "1px solid #2a2016",
                    padding: "4px 10px",
                  }}>{tag}</span>
                ))}
              </div>
            </div>

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