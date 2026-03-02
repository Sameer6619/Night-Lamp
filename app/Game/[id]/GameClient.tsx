"use client";

import { useState, useEffect } from "react";

export default function GameClient({ game }) {
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
    <main className="min-h-screen bg-[#0f0f0f] text-white px-16 py-24">
      <h1 className="text-5xl font-bold mb-6">
        {game.title.toUpperCase()}
      </h1>

      {/* Slider */}
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-blue-400/30">

        <div
          className="flex h-full transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {game.media.map((item, index) => (
            <div key={index} className="min-w-full h-full">
              {item.type === "video" ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  allowFullScreen
                />
              ) : (
                <img
                  src={item.src}
                  className="w-full h-full object-cover"
                  alt="Screenshot"
                />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 px-4 py-2"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 px-4 py-2"
        >
          ▶
        </button>
      </div>

      <p className="text-gray-400 mt-8 max-w-2xl">
        {game.description}
      </p>

      <div className="mt-6">
        <button
          onClick={() => {
            const newState = !wishlisted;
            setWishlisted(newState);
            localStorage.setItem(
              `wishlist-${game.id}`,
              newState.toString()
            );
          }}
          className={`px-6 py-3 rounded-md ${
            wishlisted
              ? "bg-green-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {wishlisted ? "Wishlisted ✓" : "Add to Wishlist"}
        </button>
      </div>
    </main>
  );
}