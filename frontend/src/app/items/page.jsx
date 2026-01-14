import Link from "next/link";
import React from "react";

// Server Component (Next.js 15)
export default async function ItemsPage() {
  let items = [];

  try {
    const response = await fetch("http://localhost:5000/api/items", {
      cache: "no-store",
    });
    items = await response.json();
  } catch (error) {
    console.error("Failed to fetch items:", error);
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0f172a] to-[#020617] py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Explore <span className="text-blue-500">Inventory</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Browse all items stored securely in our MongoDB-powered inventory
            system.
          </p>
        </div>

        {/* Grid */}
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((item) => (
              <div
                key={item._id}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50"
              >
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

                  <h2 className="text-xl font-bold text-white mb-2">
                    {item.name}
                  </h2>

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
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <p className="text-gray-400 text-lg">
              No items found. Add some products to get started 🚀
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
