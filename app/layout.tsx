import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NightLamp Studios",
  description: "Crafting worlds beyond the light. High-quality game kits and immersive experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#080808" }}>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Cinzel:wght@400;600;900&family=DM+Sans:wght@300;400&display=swap');

          *, *::before, *::after { box-sizing: border-box; }

          .nl-nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 999;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 40px;
            height: 64px;
            background: rgba(8, 8, 8, 0.92);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid #131008;
          }

          .nl-nav-logo {
            font-family: 'Cinzel', serif;
            font-weight: 900;
            font-size: 1.05rem;
            letter-spacing: 0.15em;
            text-decoration: none;
            color: transparent;
            background: linear-gradient(135deg, #f5ede0 0%, #c9a97a 50%, #8a6340 100%);
            -webkit-background-clip: text;
            background-clip: text;
            text-transform: uppercase;
          }

          .nl-nav-links {
            display: flex;
            align-items: center;
            gap: 40px;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .nl-nav-links a {
            font-family: 'DM Sans', sans-serif;
            font-weight: 300;
            font-size: 0.62rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: #5a4a34;
            text-decoration: none;
            position: relative;
            transition: color 0.3s ease;
          }

          .nl-nav-links a::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 1px;
            background: #c9a97a;
            transition: width 0.3s ease;
          }

          .nl-nav-links a:hover {
            color: #c9a97a;
          }

          .nl-nav-links a:hover::after {
            width: 100%;
          }

          .nl-nav-divider {
            width: 1px;
            height: 16px;
            background: #1e1a14;
          }

          /* Push page content below fixed navbar */
          .nl-page-body {
            padding-top: 64px;
          }
        `}</style>

        {/* Navbar */}
        <nav className="nl-nav">

          {/* Logo */}
          <a href="/" className="nl-nav-logo">
            NightLamp Studios
          </a>

          {/* Links */}
          <ul className="nl-nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/game">Games</a></li>
            <div className="nl-nav-divider" />
            <li><a href="/assets">Assets</a></li>
            <div className="nl-nav-divider" />
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

        </nav>

        {/* Page content */}
        <div className="nl-page-body">
          {children}
        </div>

      </body>
    </html>
  );
}