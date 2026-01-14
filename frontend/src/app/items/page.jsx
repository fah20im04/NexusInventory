import React from "react";

// This is a Server Component by default in Next.js 15
export default async function ItemsPage() {
  let items = [];

  try {
    // Fetching from your Express server
    const response = await fetch("http://localhost:5000/api/items", {
      cache: "no-store", // This ensures you see new items immediately
    });
    items = await response.json();
  } catch (error) {
    console.error("Failed to fetch items:", error);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Explore Collection</h1>
        <p className="text-gray-600 mt-2">
          Discover our latest inventory items managed via MongoDB.
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            >
              <img
                src={item.imageUrl || "https://via.placeholder.com/400x300"}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  {item.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-1">
                  {item.name}
                </h2>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    ${item.price}
                  </span>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full py-20 text-gray-500">
            No items found. Add some via the API!
          </p>
        )}
      </div>
    </div>
  );
}
