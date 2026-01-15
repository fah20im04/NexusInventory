"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function AddItemPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // 1. Form State
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "General",
    imageUrl: "",
    stock: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 2. Route Protection
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // 3. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Note: Using a relative path works if your API route is in the same Next.js app
      const response = await fetch(
        "https://nexus-inventory-five.vercel.app/api/items",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            price: parseFloat(formData.price),
            stock: parseInt(formData.stock),
            userId: session?.user?.id, // Link item to the logged-in user
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add item to inventory");
      }

      toast.success("Item added successfully!");
      router.push("/items"); // Redirect to inventory list
      router.refresh(); // Clear cache to show new data
    } catch (err) {
      toast.error("❌ Failed to add item.");
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading")
    return <p className="text-center mt-10">Checking authentication...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-[#111] border border-white/10 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-white">Add New Item</h1>
        <p className="text-gray-400 mb-8">
          Fill in the details below to add a new product to your inventory.
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Item Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Wireless Headphones"
              className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Price ($)
              </label>
              <input
                type="number"
                step="0.01"
                required
                placeholder="0.00"
                className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category
              </label>
              <select
                className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value="General">General</option>
                <option value="Electronics">Electronics</option>
                <option value="Apparel">Apparel</option>
                <option value="Furniture">Furniture</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Provide a detailed description of the item..."
              className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Image URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/image.jpg"
              className="w-full bg-black border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20"
            }`}
          >
            {loading ? "Adding Item..." : "Add to Inventory"}
          </button>
        </form>
      </div>
    </div>
  );
}
