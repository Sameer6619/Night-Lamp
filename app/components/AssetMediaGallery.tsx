"use client";

import { useState } from "react";

type Props = {
  video?: string | null;
  images?: string[];
};

type MediaItem =
  | { type: "video"; id: string }
  | { type: "image"; src: string };

export default function AssetMediaGallery({ video = null, images = [] }: Props) {

  const [activeIndex, setActiveIndex] = useState(0);

  // Extra safety — guarantee images is always an array no matter what
  const safeImages: string[] = Array.isArray(images) ? images : [];

  const mediaItems: MediaItem[] = [
    ...(video ? [{ type: "video" as const, id: video }] : []),
    ...safeImages.map((src) => ({ type: "image" as const, src })),
  ];

  if (mediaItems.length === 0) {
    return (
      <div style={{
        border: "1px solid #1e1a14",
        background: "#0a0a0a",
        aspectRatio: "16/9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", color: "#3a2e1e", textTransform: "uppercase" }}>
          No media available
        </span>
      </div>
    );
  }

  const safeIndex = Math.min(activeIndex, mediaItems.length - 1);
  const active = mediaItems[safeIndex];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>

      <style>{`
        .gallery-main {
          position: relative;
          overflow: hidden;
          border: 1px solid #1e1a14;
          background: #0a0a0a;
          aspect-ratio: 16 / 9;
          width: 100%;
        }
        .gallery-main img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: saturate(0.65) brightness(0.8);
          transition: filter 0.6s ease;
          display: block;
        }
        .gallery-main:hover img { filter: saturate(0.85) brightness(0.95); }
        .gallery-main iframe {
          width: 100%; height: 100%;
          border: none; display: block;
        }
        .gallery-fade {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 60%);
          pointer-events: none;
        }
        .gallery-counter {
          position: absolute; bottom: 14px; right: 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem; font-weight: 300;
          letter-spacing: 0.3em; color: #9c8060;
          z-index: 5; pointer-events: none;
        }
        .gallery-thumbs {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 2px; margin-top: 2px;
        }
        .gallery-thumb {
          cursor: pointer; overflow: hidden;
          border: 1px solid #1a1510;
          aspect-ratio: 16 / 10;
          position: relative; background: #0a0a0a;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .gallery-thumb:hover { transform: translateY(-2px); border-color: #3a2e1e; }
        .gallery-thumb.g-active { border-color: #c9a97a; }
        .gallery-thumb img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          filter: saturate(0.4) brightness(0.6);
          transition: filter 0.4s ease;
        }
        .gallery-thumb.g-active img,
        .gallery-thumb:hover img { filter: saturate(0.75) brightness(0.85); }
        .gallery-thumb.g-active::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px; background: #c9a97a;
        }
        .play-overlay {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(8,8,8,0.5);
          transition: background 0.3s ease;
        }
        .gallery-thumb:hover .play-overlay,
        .gallery-thumb.g-active .play-overlay { background: rgba(8,8,8,0.3); }
        .play-icon {
          width: 0; height: 0;
          border-top: 7px solid transparent;
          border-bottom: 7px solid transparent;
          border-left: 12px solid #c9a97a;
          opacity: 0.85;
        }
      `}</style>

      {/* Main viewer */}
      <div className="gallery-main">
        {active.type === "video" ? (
          <iframe
            src={`https://www.youtube.com/embed/${active.id}?autoplay=0`}
            allowFullScreen
            title="Asset Video"
          />
        ) : (
          <>
            <img src={active.src} alt="Asset Preview" />
            <div className="gallery-fade" />
          </>
        )}
        <div className="gallery-counter">
          {String(safeIndex + 1).padStart(2, "0")} / {String(mediaItems.length).padStart(2, "0")}
        </div>
      </div>

      {/* Thumbnail grid */}
      <div className="gallery-thumbs">
        {mediaItems.map((item, i) => (
          <div
            key={i}
            className={`gallery-thumb${safeIndex === i ? " g-active" : ""}`}
            onClick={() => setActiveIndex(i)}
          >
            {item.type === "video" ? (
              <>
                <img
                  src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
                  alt="Video thumbnail"
                />
                <div className="play-overlay">
                  <div className="play-icon" />
                </div>
              </>
            ) : (
              <img src={item.src} alt={`Thumbnail ${i + 1}`} />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}