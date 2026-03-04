export const dynamic = "force-dynamic";

import games from "../../data/games.json";
import Link from "next/link";

export default function GamePage() {
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

        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #6b5a44;
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
          color: #3a2e1e;
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

        .game-card {
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

        .game-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201, 169, 122, 0.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 1;
        }

        .game-card:hover {
          border-color: #4a3820;
          transform: translateY(-5px);
        }

        .game-card:hover::before {
          opacity: 1;
        }

        .game-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.9s ease, filter 0.9s ease;
          filter: saturate(0.5) brightness(0.65);
        }

        .game-card:hover .game-card-img {
          transform: scale(1.05);
          filter: saturate(0.75) brightness(0.85);
        }

        .game-card-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 1.05rem;
          letter-spacing: 0.06em;
          color: #e0d4c0;
          margin-bottom: 10px;
        }

        .game-card-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.65;
          color: #6a5a46;
        }

        .card-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
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

        .back-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
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

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-1 { animation: fadeUp 0.9s ease forwards; }
        .fade-2 { animation: fadeUp 0.9s ease 0.15s both; }
        .fade-3 { animation: fadeUp 0.9s ease 0.3s both; }
      `}</style>

      <div className="noise-overlay" />

      {/* Top bar */}
      <div style={{ borderBottom: "1px solid #131008", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" className="back-link">
          ← &nbsp;NightLamp Studios
        </Link>
        <span className="section-label">Games</span>
      </div>

      {/* Header */}
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "80px 40px 60px" }}>

        <div className="fade-1">
          <p className="section-label" style={{ marginBottom: "20px" }}>— Our Projects</p>
          <h1 className="page-title">Games</h1>
          <p className="page-sub" style={{ marginTop: "18px" }}>
            Upcoming and released experiences from the studio.
          </p>
        </div>

        <div className="fade-2" style={{ marginTop: "48px" }}>
          <div className="divider-ornament">
            <span style={{ fontSize: "1rem", color: "#3a2e1e" }}>✦</span>
          </div>
        </div>

        {/* Grid */}
        <div className="fade-3" style={{
          marginTop: "64px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "2px",
        }}>
          {games.map((game, i) => (
            <Link
              key={game.id}
              href={`/game/${game.id}`}
              className="game-card"
            >
              {/* Image */}
              <div style={{ aspectRatio: "16/10", overflow: "hidden", position: "relative" }}>
                <span className="card-number">{String(i + 1).padStart(2, "0")}</span>
                {game.media.find((m) => m.type === "image") && (
                  <img
                    src={game.media.find((m) => m.type === "image")?.src}
                    alt={game.title}
                    className="game-card-img"
                  />
                )}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.1) 60%, transparent 100%)",
                  zIndex: 1
                }} />
              </div>

              {/* Info */}
              <div style={{ padding: "28px 28px 32px", position: "relative", zIndex: 2 }}>
                <p className="section-label" style={{ marginBottom: "10px" }}>NightLamp Studios</p>
                <h2 className="game-card-title">{game.title}</h2>
                <p className="game-card-desc">{game.description}</p>

                <div style={{ marginTop: "22px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#c9a97a",
                  }}>View Game</span>
                  <span style={{ color: "#c9a97a", fontSize: "0.8rem" }}>→</span>
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