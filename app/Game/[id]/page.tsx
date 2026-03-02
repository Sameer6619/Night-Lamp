"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import games from "../../data/games.json";

export default function GameDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const game = games.find((g) => g.id === id);

  const [activeIndex, setActiveIndex] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`wishlist-${id}`);
    if (saved === "true") setWishlisted(true);
  }, [id]);

  if (!game) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white">
        <h1 className="text-3xl">Game Not Found</h1>
      </main>
    );
  }

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === game.media.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? game.media.length - 1 : prev - 1
    );
  };

  return (
    <main className="relative min-h-screen bg-[#0f0f0f] text-white overflow-hidden">

      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-blue-500/10 blur-[200px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-black"></div>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 px-16 py-24">

        {/* LEFT SIDEBAR */}
        <div className="md:col-span-1 space-y-6">
          <h2 className="text-xs uppercase tracking-widest text-gray-500">
            Games
          </h2>

          {games.map((g) => (
            <a
              key={g.id}
              href={`/game/${g.id}`}
              className={`block rounded-xl overflow-hidden border transition ${
                g.id === id
                  ? "border-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                  : "border-blue-400/20 hover:border-blue-400/50"
              }`}
            >
              <div className="h-24 overflow-hidden">
                {g.media[1]?.type === "image" && (
                  <img
                    src={g.media[1].src}
                    className="w-full h-full object-cover"
                    alt={g.title}
                  />
                )}
              </div>
              <div className="p-3 bg-black/40 text-sm">
                {g.title}
              </div>
            </a>
          ))}
        </div>

        {/* CENTER CONTENT */}
        <div className="md:col-span-3 space-y-10">

          {/* SLIDER */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-blue-400/30 shadow-[0_0_120px_rgba(59,130,246,0.2)]">

            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {game.media.map((item, index) => (
                <div key={index} className="min-w-full h-full relative">
                  {item.type === "video" ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${item.id}`}
                      allowFullScreen
                      title="Trailer"
                    />
                  ) : (
                    <img
                      src={item.src}
                      className="w-full h-full object-cover"
                      alt="Screenshot"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full border border-blue-400/30"
            >
              ◀
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full border border-blue-400/30"
            >
              ▶
            </button>
          </div>

          {/* TITLE + DESCRIPTION */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              {game.title.toUpperCase()}
            </h1>

            <p className="text-gray-400 max-w-3xl text-lg">
              {game.description}
            </p>

            {/* CTA */}
            <div className="flex gap-6 pt-6">
              <button
                onClick={() => {
                  const newState = !wishlisted;
                  setWishlisted(newState);
                  localStorage.setItem(
                    `wishlist-${id}`,
                    newState.toString()
                  );
                }}
                className={`px-8 py-3 rounded-md font-medium transition ${
                  wishlisted
                    ? "bg-green-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {wishlisted ? "Wishlisted ✓" : "Add to Wishlist"}
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="md:col-span-1 space-y-8">

          <div className="border border-blue-400/20 rounded-2xl p-6 bg-black/40">
            <h3 className="text-sm uppercase text-blue-400 mb-6">
              System Requirements
            </h3>

            <div className="space-y-6 text-sm">
              <div>
                <p className="text-gray-500 mb-2">Minimum</p>
                <p>OS: {game.min.os}</p>
                <p>RAM: {game.min.ram}</p>
                <p>GPU: {game.min.gpu}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-2">Recommended</p>
                <p>OS: {game.rec.os}</p>
                <p>RAM: {game.rec.ram}</p>
                <p>GPU: {game.rec.gpu}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}