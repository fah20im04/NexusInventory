"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-white">
          NEXUS<span className="text-blue-500">INV</span>
        </Link>

        <div className="flex gap-10 items-center font-medium">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/items" className="text-gray-300 hover:text-white">
            Items
          </Link>
          <Link href="/add-item" className="text-gray-300 hover:text-white">
            Add Item
          </Link>

          {session ? (
            <button
              onClick={() => signOut()}
              className="px-6 py-2 rounded-full border border-blue-500 text-blue-500"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="px-6 py-2 rounded-full bg-blue-600 text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
