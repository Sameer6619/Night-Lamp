"use client";

import { useState, useEffect } from "react";
import type { Game, MediaItem } from "../../../types/game";

export default function GameClient({ game }: { game: Game }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`wishlist-${game.id}`);
    if (saved === "true") setWishlisted(true);
  }, [game.id]);

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

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-blue-500/10 blur-[200px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-black"></div>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 px-16 py-24">

        {/* LEFT SIDEBAR */}
        <div className="md:col-span-1 space-y-6">
          <h2 className="text-xs uppercase tracking-widest text-gray-500">
            Game Info
          </h2>

          <div className="border border-blue-400/20 rounded-2xl p-6 bg-black/40">
            <p className="text-sm text-gray-400 mb-2">Genre</p>
            <p className="text-white font-medium">Psychological Horror</p>

            <p className="text-sm text-gray-400 mt-6 mb-2">Engine</p>
            <p className="text-white font-medium">Unreal Engine 5</p>
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="md:col-span-3 space-y-10">

          {/* MEDIA SLIDER */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-blue-400/30 shadow-[0_0_120px_rgba(59,130,246,0.2)]">

            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {game.media.map((item: MediaItem, index: number) => (
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

            <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
              {game.description}
            </p>

            <div className="pt-6">
              <button
                onClick={() => {
                  const newState = !wishlisted;
                  setWishlisted(newState);
                  localStorage.setItem(
                    `wishlist-${game.id}`,
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