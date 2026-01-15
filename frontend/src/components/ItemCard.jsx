"use client"; // important! this makes it a Client Component

import Link from "next/link";

export default function ItemCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl" />
      </div>

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.imageUrl || "https://via.placeholder.com/600x400"}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <span className="inline-block text-xs font-semibold tracking-widest text-blue-500 uppercase mb-2">
          {item.category || "General"}
        </span>

        <h2 className="text-xl font-bold text-white mb-2">{item.name}</h2>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-extrabold text-white">
            ${item.price}
          </span>

          <Link
            href={`/items/${item._id}`}
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
