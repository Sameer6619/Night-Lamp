"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#0b0f17] text-white">

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Image */}
        <img
          src="/images/game1-1.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero Background"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-7xl font-bold mb-6">
            NightLamp Studios
          </h1>

          <p className="text-gray-300 max-w-xl text-lg mb-10">
            Atmospheric worlds. Cinematic storytelling.  
            Built with Unreal Engine.
          </p>

          <div className="flex gap-6">
            <Link
              href="/game"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition"
            >
              Explore Game
            </Link>

            <Link
              href="/assets"
              className="px-8 py-3 border border-white/30 hover:border-white rounded-md transition"
            >
              Browse Assets
            </Link>
          </div>
        </div>
      </section>

      {/* FLOATING PROJECT PANELS */}
      <section className="relative -mt-32 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Game Panel */}
        <div className="bg-[#0f172a] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400 transition">

          <img
            src="/images/game1-2.jpg"
            className="w-full h-60 object-cover"
            alt="Game"
          />

          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">
              Upcoming Horror Game
            </h2>

            <p className="text-gray-400 text-sm">
              A psychological horror experience set in a mysterious village.
              Atmospheric storytelling and immersive tension.
            </p>

            <Link
              href="/game"
              className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded"
            >
              View Game
            </Link>
          </div>
        </div>

        {/* Assets Panel */}
        <div className="bg-[#0f172a] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400 transition">

          <img
            src="/images/game2-1.jpg"
            className="w-full h-60 object-cover"
            alt="Assets"
          />

          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">
              Modular Building Kits
            </h2>

            <p className="text-gray-400 text-sm">
              High quality modular environment kits for Unreal Engine.
              Optimized, scalable and production ready.
            </p>

            <Link
              href="/assets"
              className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded"
            >
              View Assets
            </Link>
          </div>
        </div>

      </section>

      {/* STUDIO SECTION */}
      <section className="py-32 px-8 text-center max-w-3xl mx-auto">

        <h2 className="text-4xl font-semibold mb-6">
          Crafting Immersive Worlds
        </h2>

        <p className="text-gray-400 leading-relaxed">
          NightLamp Studios focuses on cinematic lighting,
          atmospheric environments and emotionally driven gameplay
          experiences built with Unreal Engine 5.
        </p>

      </section>

    </main>
  );
}