"use client";

import { useState } from "react";

const games = [
  {
    id: 1,
    title: "Echoes in the Static",
    trailer: "vqdY9HxYsns",
    thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "A psychological horror experience set in a mysterious village.",
    min: { os: "Windows 10", ram: "8 GB", gpu: "GTX 1060" },
    rec: { os: "Windows 11", ram: "16 GB", gpu: "RTX 2060+" },
  },
  {
    id: 2,
    title: "Coming Soon Project",
    trailer: "",
    thumbnail: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    description: "Next horror project currently in early development.",
    min: { os: "-", ram: "-", gpu: "-" },
    rec: { os: "-", ram: "-", gpu: "-" },
  },
];

export default function GamePage() {
  const [selected, setSelected] = useState(games[0]);

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">

        {/* Sidebar */}
        <aside className="md:col-span-1 pr-8 border-r border-white/10 space-y-6">
          <h2 className="text-xs uppercase tracking-widest text-gray-500">
            Games
          </h2>

          {games.map((game) => (
  <div
       key={game.id}
       onClick={() => setSelected(game)}
       className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 border ${
       selected.id === game.id
           ? "border-white shadow-[0_0_40px_rgba(255,255,255,0.1)]"
           : "border-white/10 hover:border-white/40"
        }`}
              >
      <div className="h-28 overflow-hidden">
       <img
        src={game.thumbnail}
        alt={game.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
     </div>

     <div className="p-4 bg-black/40">
      <h3 className="text-sm font-medium">{game.title}</h3>
     </div>
      </div>
      ))}
        </aside>

        {/* Main Content */}
        <section
  key={selected.id}
  className="md:col-span-3 space-y-14 transition-opacity duration-500 animate-fade"
>

          {/* Trailer */}
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.05)]">
            {selected.trailer ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selected.trailer}`}
                title="Game Trailer"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                Trailer Coming Soon
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="space-y-4">
  <div className="h-12 w-[2px] bg-white/40"></div>

  <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
    {selected.title.toUpperCase()}
  </h1>

  <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
    In Development
  </p>
</div>

            <p className="text-gray-400 max-w-3xl">
              {selected.description}
            </p>
          </div>

          {/* System Requirements */}
          <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
            <h2 className="text-xl font-semibold mb-8">
              System Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-10 text-sm text-gray-400">
              <div>
                <h3 className="text-white mb-3">Minimum</h3>
                <p>OS: {selected.min.os}</p>
                <p>RAM: {selected.min.ram}</p>
                <p>GPU: {selected.min.gpu}</p>
              </div>

              <div>
                <h3 className="text-white mb-3">Recommended</h3>
                <p>OS: {selected.rec.os}</p>
                <p>RAM: {selected.rec.ram}</p>
                <p>GPU: {selected.rec.gpu}</p>
              </div>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}