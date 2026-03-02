import games from "@/data/games.json";
import GameClient from "./GameClient";

export default function GameDetailPage({ params }) {
  const id = Number(params.id);
  const game = games.find((g) => g.id === id);

  if (!game) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white">
        <h1 className="text-3xl">Game Not Found</h1>
      </main>
    );
  }

  return <GameClient game={game} />;
}