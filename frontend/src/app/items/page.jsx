import React from "react";
import ItemCard from "@/components/ItemCard";

// Server Component
export default async function ItemsPage() {
  let items = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/items`,
      {
        cache: "no-store",
      }
    );
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
              <ItemCard key={item._id} item={item} />
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
