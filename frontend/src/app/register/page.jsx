"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // Registration successful! Now log them in automatically or redirect
        alert("Registration successful! Please login.");
        router.push("/login");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to connect to server");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#111] border border-white/10 p-10 rounded-3xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Full Name"
            className="w-full bg-black border border-white/20 rounded-xl p-4 text-white outline-none focus:border-blue-500"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            required
            type="email"
            placeholder="Email Address"
            className="w-full bg-black border border-white/20 rounded-xl p-4 text-white outline-none focus:border-blue-500"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            required
            type="password"
            placeholder="Create Password"
            className="w-full bg-black border border-white/20 rounded-xl p-4 text-white outline-none focus:border-blue-500"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all"
          >
            Sign Up
          </button>
        </form>
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/10"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#111] px-2 text-gray-500">Or use Social</span>
          </div>
        </div>
        <button
          onClick={() => signIn("google", { callbackUrl: "/items" })}
          className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-all"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            className="w-5 h-5"
            alt="Google"
          />
          Sign up with Google
        </button>
        <p className="text-center text-gray-500 mt-8 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>{" "}
      </div>
    </div>
  );
}
