import games from "../../../data/games.json";
import GameClient from "./GameClient";
import type { Game } from "../../../types/game";

export default async function GameDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params; // 👈 important

  const game = (games as Game[]).find(
    (g) => g.id === Number(id)
  );

  if (!game) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white">
        <h1 className="text-3xl">Game Not Found</h1>
      </main>
    );
  }

  return <GameClient game={game} />;
}