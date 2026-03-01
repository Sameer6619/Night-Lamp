export default function GamePage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 py-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Sidebar */}
        <aside className="md:col-span-1 border-r border-white/10 pr-6">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
            Games
          </h2>

          <div className="space-y-4">
            <div className="p-3 border border-white/10 rounded-lg hover:border-white/40 transition cursor-pointer">
              Upcoming Horror Game
            </div>

            <div className="p-3 border border-white/10 rounded-lg text-gray-500">
              Coming Soon
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="md:col-span-3 space-y-12">

          {/* Trailer */}
          <div className="aspect-video bg-black rounded-xl border border-white/10 flex items-center justify-center">
            <span className="text-gray-500">YouTube Trailer Placeholder</span>
          </div>

          {/* Game Title */}
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold">
              Upcoming Horror Game
            </h1>

            <p className="text-gray-400 leading-relaxed max-w-3xl">
              A psychological horror experience set in a mysterious village.
              Atmospheric storytelling, immersive sound design,
              and deeply unsettling environments.
            </p>
          </div>

          {/* Store Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition">
              Steam
            </button>

            <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition">
              Epic Games
            </button>
          </div>

          {/* System Requirements */}
          <div className="border-t border-white/10 pt-10">
            <h2 className="text-xl font-semibold mb-6">System Requirements</h2>

            <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-400">
              <div>
                <h3 className="text-white mb-3">Minimum</h3>
                <p>OS: Windows 10</p>
                <p>RAM: 8 GB</p>
                <p>GPU: GTX 1060</p>
              </div>

              <div>
                <h3 className="text-white mb-3">Recommended</h3>
                <p>OS: Windows 11</p>
                <p>RAM: 16 GB</p>
                <p>GPU: RTX 2060+</p>
              </div>
            </div>
          </div>

        </section>

      </div>

    </main>
  );
}