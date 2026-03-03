"use client";

import assets from "../../data/assets.json";
import Link from "next/link";

export default function AssetsPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-16 py-24">

      <div className="max-w-[1400px] mx-auto space-y-16">

        <div>
          <h1 className="text-5xl font-bold mb-4">Assets</h1>
          <p className="text-gray-400">
            Modular building kits and environment assets by NightLamp Studios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {assets.map((asset) => (
            <Link
              key={asset.id}
              href={`/assets/${asset.id}`}
              className="group border border-blue-400/20 rounded-2xl overflow-hidden hover:border-blue-400 transition"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={asset.images[0]}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  alt={asset.name}
                />
              </div>

              <div className="p-6 bg-black/40">
                <h2 className="text-xl font-semibold mb-2">
                  {asset.name}
                </h2>
                <p className="text-gray-400 text-sm">
                  {asset.description}
                </p>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}