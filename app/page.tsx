export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          NightLamp Studios
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
          Crafting Worlds Beyond the Light.
        </p>

        <div className="flex gap-4 pt-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition">
            View Game
          </button>

          <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition">
            View Assets
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="grid md:grid-cols-2 gap-8 py-20 max-w-6xl mx-auto">

        {/* Game Card */}
        <div className="group relative border border-white/10 rounded-xl overflow-hidden 
          hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] 
          transition-all duration-500">
          <div className="h-72 bg-gradient-to-br from-gray-900 via-black to-gray-800 
           group-hover:scale-105 transition-transform duration-700">
            <span className="text-gray-500">Game Thumbnail</span>
          </div>

          <div className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Upcoming Horror Game</h2>
            <p className="text-gray-400 text-sm">
              Psychological horror experience set in a mysterious village.
            </p>
          </div>
        </div>

        {/* Asset Card */}
        <div className="group relative border border-white/10 rounded-xl overflow-hidden 
          hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] 
          transition-all duration-500">
          <div className="h-72 bg-gradient-to-br from-gray-900 via-black to-gray-800 
           group-hover:scale-105 transition-transform duration-700">
            <span className="text-gray-500">Asset Thumbnail</span>
          </div>

          <div className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Modular Building Kit</h2>
            <p className="text-gray-400 text-sm">
              High-quality modular environment system for Unreal Engine.
            </p>
          </div>
        </div>

      </section>

    </main>
  );
}