"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-white">
          NEXUS<span className="text-blue-500">INV</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center font-medium">
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
              className="px-6 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500/10 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-5 font-medium">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/items"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Items
            </Link>
            <Link
              href="/add-item"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Add Item
            </Link>

            {session ? (
              <button
                onClick={() => {
                  signOut();
                  setOpen(false);
                }}
                className="w-fit px-6 py-2 rounded-full border border-blue-500 text-blue-500"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="w-fit px-6 py-2 rounded-full bg-blue-600 text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
