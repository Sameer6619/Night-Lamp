"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0f0f0f] text-white overflow-hidden">

      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1400px] h-[900px] bg-blue-500/10 blur-[220px] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-black"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 text-center">

        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
          NightLamp Studios
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mb-16">
          Crafting Worlds Beyond the Light.
        </p>

        {/* Floating Cards */}
        <div className="relative w-full max-w-6xl grid md:grid-cols-2 gap-12">

          {/* Game Card */}
          <div className="group relative border border-blue-400/20 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-lg shadow-[0_0_120px_rgba(59,130,246,0.15)] hover:scale-[1.02] transition duration-500">

            <div className="aspect-video overflow-hidden">
              <img
                src="/images/game1-1.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                alt="Upcoming Game"
              />
            </div>

            <div className="p-8 text-left space-y-4">
              <h2 className="text-2xl font-semibold">
                Upcoming Horror Game
              </h2>

              <p className="text-gray-400 text-sm">
                Psychological horror experience focused on atmosphere,
                storytelling and immersive tension.
              </p>

              <Link
                href="/game"
                className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md transition"
              >
                View Game
              </Link>
            </div>
          </div>

          {/* Asset Card */}
          <div className="group relative border border-blue-400/20 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-lg shadow-[0_0_120px_rgba(59,130,246,0.15)] hover:scale-[1.02] transition duration-500 md:translate-y-12">

            <div className="aspect-video overflow-hidden">
              <img
                src="/images/game2-1.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                alt="Modular Building Kit"
              />
            </div>

            <div className="p-8 text-left space-y-4">
              <h2 className="text-2xl font-semibold">
                Modular Building Kit
              </h2>

              <p className="text-gray-400 text-sm">
                High-quality modular environment kit built for Unreal Engine.
                Optimized, scalable and production ready.
              </p>

              <Link
                href="/assets"
                className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md transition"
              >
                View Assets
              </Link>
            </div>
          </div>

        </div>

      </section>

      {/* Studio Info Section */}
      <section className="py-32 px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-semibold">
            Environment Design & Atmospheric Storytelling
          </h2>

          <p className="text-gray-400 leading-relaxed">
            NightLamp Studios focuses on immersive environments, cinematic
            lighting and emotionally driven gameplay experiences. Built with
            Unreal Engine and modern production workflows.
          </p>
        </div>
      </section>

    </main>
  );
}