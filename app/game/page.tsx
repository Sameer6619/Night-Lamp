export const dynamic = "force-dynamic";

import games from "../../data/games.json";
import Link from "next/link";

export default function GamePage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-16 py-24">
      <div className="max-w-[1400px] mx-auto space-y-16">

        <div>
          <h1 className="text-5xl font-bold mb-4">Games</h1>
          <p className="text-gray-400">
            Explore our upcoming and released projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {games.map((game) => (
            <Link
              key={game.id}
              href={`/game/${game.id}`}
              className="group border border-blue-400/20 rounded-2xl overflow-hidden hover:border-blue-400 transition"
            >
              <div className="aspect-video overflow-hidden">
                {game.media.find((m) => m.type === "image") && (
                  <img
                    src={game.media.find((m) => m.type === "image")?.src}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    alt={game.title}
                  />
                )}
              </div>

              <div className="p-6 bg-black/40">
                <h2 className="text-xl font-semibold mb-2">
                  {game.title}
                </h2>
                <p className="text-gray-400 text-sm">
                  {game.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}