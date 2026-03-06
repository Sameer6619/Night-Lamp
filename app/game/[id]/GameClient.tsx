"use client";

import { useState } from "react";
import type { Game, MediaItem } from "../../../types/game";

export default function GameClient({ game }: { game: Game }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === game.media.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? game.media.length - 1 : prev - 1));
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "#080808",
      color: "#e8e0d4",
      fontFamily: "'Georgia', serif",
      overflow: "hidden",
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

        .game-title {
          font-family: 'Cinzel', serif;
          font-weight: 900;
          font-size: clamp(2rem, 5vw, 4.5rem);
          letter-spacing: 0.1em;
          line-height: 0.95;
          color: transparent;
          background: linear-gradient(160deg, #f5ede0 0%, #c9a97a 40%, #8a6340 80%, #3d2810 100%);
          -webkit-background-clip: text;
          background-clip: text;
          filter: drop-shadow(0 0 40px rgba(201, 169, 122, 0.1));
        }

        .game-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 300;
          line-height: 1.8;
          color: #7a6a56;
        }

        .info-panel {
          background: #0d0d0d;
          border: 1px solid #1a1510;
          padding: 28px;
        }

        .info-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #4a3c28;
          margin-bottom: 8px;
        }

        .info-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 400;
          color: #c9a97a;
          letter-spacing: 0.03em;
        }

        .slider-wrapper {
          position: relative;
          overflow: hidden;
          border: 1px solid #1e1a14;
          background: #0a0a0a;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(8, 8, 8, 0.75);
          border: 1px solid #2e2416;
          color: #9c8060;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.75rem;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .slider-btn:hover {
          background: rgba(201, 169, 122, 0.1);
          border-color: #c9a97a;
          color: #f0e0c0;
        }

        .dot {
          width: 5px;
          height: 5px;
          border-radius: 0;
          background: #2e2416;
          transition: background 0.3s ease, width 0.3s ease;
          cursor: pointer;
        }

        .dot.active {
          background: #c9a97a;
          width: 18px;
        }

        .store-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 300;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          border: 1px solid #3a2e1e;
          padding: 14px 36px;
          cursor: pointer;
          transition: all 0.4s ease;
          background: transparent;
          color: #c9a97a;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .store-btn:hover {
          background: rgba(201, 169, 122, 0.08);
          border-color: #c9a97a;
          color: #f0e0c0;
          gap: 15px;
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

        .req-divider {
          height: 1px;
          background: linear-gradient(to right, #1e1a14, transparent);
          margin: 20px 0;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-1 { animation: fadeUp 0.9s ease forwards; }
        .fade-2 { animation: fadeUp 0.9s ease 0.15s both; }
        .fade-3 { animation: fadeUp 0.9s ease 0.3s both; }
      `}</style>

      <div className="noise-overlay" />

      {/* Ambient glow */}
      <div style={{
        position: "fixed", top: "-300px", left: "50%", transform: "translateX(-50%)",
        width: "900px", height: "600px",
        background: "radial-gradient(ellipse, rgba(140, 90, 40, 0.06) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Top nav */}
      <div style={{ borderBottom: "1px solid #131008", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        <a href="/game" className="back-link">← &nbsp;All Games</a>
        <span className="section-label">NightLamp Studios</span>
      </div>

      {/* Main layout */}
      <div style={{
        maxWidth: "1500px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "200px 1fr 220px",
        gap: "2px",
        padding: "48px 40px 80px",
        position: "relative",
        zIndex: 1,
      }}>

        {/* LEFT SIDEBAR */}
        <div className="fade-1" style={{ display: "flex", flexDirection: "column", gap: "2px", paddingTop: "4px" }}>

          <div className="info-panel" style={{ flex: 1 }}>
            <p className="section-label" style={{ marginBottom: "24px" }}>— Game Info</p>

            <div style={{ marginBottom: "24px" }}>
              <p className="info-label">Genre</p>
              <p className="info-value">Psychological Horror</p>
            </div>

            <div className="req-divider" />

            <div style={{ marginBottom: "24px" }}>
              <p className="info-label">Engine</p>
              <p className="info-value">Unreal Engine 5</p>
            </div>

            <div className="req-divider" />

            <div>
              <p className="info-label">Status</p>
              <p className="info-value" style={{ color: "#8ab87a" }}>In Development</p>
            </div>
          </div>

        </div>

        {/* CENTER */}
        <div className="fade-2" style={{ display: "flex", flexDirection: "column", gap: "2px" }}>

          {/* Slider */}
          <div className="slider-wrapper" style={{ aspectRatio: "16/9" }}>
            <div
              style={{
                display: "flex",
                height: "100%",
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {game.media.map((item: MediaItem, index: number) => (
                <div key={index} style={{ minWidth: "100%", height: "100%", position: "relative" }}>
                  {item.type === "video" ? (
                    <iframe
                      style={{ width: "100%", height: "100%", border: "none" }}
                      src={`https://www.youtube.com/embed/${item.id}`}
                      allowFullScreen
                      title="Trailer"
                    />
                  ) : (
                    <img
                      src={item.src}
                      style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.7) brightness(0.8)" }}
                      alt="Screenshot"
                    />
                  )}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }} />
                </div>
              ))}
            </div>

            <button className="slider-btn" onClick={prevSlide} style={{ left: "20px" }}>◀</button>
            <button className="slider-btn" onClick={nextSlide} style={{ right: "20px" }}>▶</button>

            {/* Slide counter */}
            <div style={{ position: "absolute", bottom: "16px", right: "20px", zIndex: 5 }}>
              <span className="section-label" style={{ color: "#9c8060" }}>
                {String(activeIndex + 1).padStart(2, "0")} / {String(game.media.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", gap: "6px", alignItems: "center", padding: "16px 0 0" }}>
            {game.media.map((_, i) => (
              <div
                key={i}
                className={`dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          {/* Title & Description */}
          <div style={{ padding: "32px 0 0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <p className="section-label">— {game.title}</p>
            <h1 className="game-title">{game.title.toUpperCase()}</h1>
            <p className="game-desc">{game.description}</p>

            <div style={{ paddingTop: "16px" }}>
              <a
                href={game.store}
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn"
              >
                Get the Game &nbsp;→
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="fade-3" style={{ display: "flex", flexDirection: "column", gap: "2px", paddingTop: "4px" }}>

          <div className="info-panel" style={{ flex: 1 }}>
            <p className="section-label" style={{ marginBottom: "24px" }}>— Requirements</p>

            <div style={{ marginBottom: "4px" }}>
              <p className="info-label" style={{ color: "#6b5a44", marginBottom: "14px" }}>Minimum</p>

              <div style={{ marginBottom: "12px" }}>
                <p className="info-label">OS</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#8a7a66" }}>{game.min.os}</p>
              </div>
              <div style={{ marginBottom: "12px" }}>
                <p className="info-label">RAM</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#8a7a66" }}>{game.min.ram}</p>
              </div>
              <div>
                <p className="info-label">GPU</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#8a7a66" }}>{game.min.gpu}</p>
              </div>
            </div>

            <div className="req-divider" />

            <div>
              <p className="info-label" style={{ color: "#c9a97a", marginBottom: "14px" }}>Recommended</p>

              <div style={{ marginBottom: "12px" }}>
                <p className="info-label">OS</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#8a7a66" }}>{game.rec.os}</p>
              </div>
              <div style={{ marginBottom: "12px" }}>
                <p className="info-label">RAM</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#8a7a66" }}>{game.rec.ram}</p>
              </div>
              <div>
                <p className="info-label">GPU</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#8a7a66" }}>{game.rec.gpu}</p>
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