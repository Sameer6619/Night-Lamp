export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center px-6">
      
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          NightLamp Studios
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Crafting Worlds Beyond the Light.
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition">
            View Game
          </button>

          <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition">
            View Assets
          </button>
        </div>
      </section>

    </main>
  );
}