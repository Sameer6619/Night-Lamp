"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import assets from "../../data/assets.json";

export default function AssetDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const asset = assets.find((a) => a.id === id);

  const [activeImage, setActiveImage] = useState(0);

  if (!asset) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white">
        <h1 className="text-3xl">Asset Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-16 py-24">

      <div className="max-w-[1400px] mx-auto space-y-16">

        {/* TITLE */}
        <div>
          <h1 className="text-5xl font-bold mb-4">
            {asset.name.toUpperCase()}
          </h1>
          <p className="text-gray-400 max-w-2xl">
            {asset.description}
          </p>
        </div>

        {/* IMAGE PREVIEW */}
        <div className="space-y-6">

          <div className="aspect-video rounded-2xl overflow-hidden border border-blue-400/30">
            <img
              src={asset.images[activeImage]}
              className="w-full h-full object-cover"
              alt="Asset Preview"
            />
          </div>

          <div className="flex gap-4">
            {asset.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(index)}
                className={`h-20 w-32 cursor-pointer rounded-lg overflow-hidden border ${
                  activeImage === index
                    ? "border-blue-400"
                    : "border-blue-400/20"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="Thumbnail"
                />
              </div>
            ))}
          </div>

        </div>

        {/* DETAILS */}
        <div className="grid md:grid-cols-3 gap-10">

          <div className="border border-blue-400/20 rounded-2xl p-6 bg-black/40">
            <h3 className="text-sm uppercase text-blue-400 mb-4">Engine</h3>
            <p>{asset.engine}</p>
          </div>

          <div className="border border-blue-400/20 rounded-2xl p-6 bg-black/40">
            <h3 className="text-sm uppercase text-blue-400 mb-4">Polygons</h3>
            <p>{asset.polygons}</p>
          </div>

          <div className="border border-blue-400/20 rounded-2xl p-6 bg-black/40">
            <h3 className="text-sm uppercase text-blue-400 mb-4">Textures</h3>
            <p>{asset.textures}</p>
          </div>

        </div>

      </div>
    </main>
  );
}
