"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AddItemPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    category: "General",
  });

  // Redirect if not logged in
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Item added successfully!");
        router.push("/items"); // Redirect to the list view
      }
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Failed to connect to backend.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-8 bg-[#111] rounded-2xl border border-white/10 shadow-2xl">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Add New Inventory Item
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Item Name
          </label>
          <input
            required
            type="text"
            className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition"
            placeholder="e.g. Nike Air Max"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Price ($)
            </label>
            <input
              required
              type="number"
              className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition"
              placeholder="99.99"
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Category
            </label>
            <select
              className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option>General</option>
              <option>Electronics</option>
              <option>Sneakers</option>
              <option>Apparel</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Image URL
          </label>
          <input
            type="text"
            className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition"
            placeholder="https://image-link.com/photo.jpg"
            onChange={(e) =>
              setFormData({ ...formData, imageUrl: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Description
          </label>
          <textarea
            rows="4"
            className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition"
            placeholder="Describe the product..."
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all transform hover:scale-[1.02]"
        >
          Add to Inventory
        </button>
      </form>
    </div>
  );
}
