"use client"; // Required because we are using useSession logic in the nav
import "./globals.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import AuthProvider from "@/components/AuthProvider"; // Ensure this file exists
import Image from "next/image";

function NavbarContent() {
  const { data: session } = useSession();
  console.log("Session Data in Navbar:", session);

  return (
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-extrabold tracking-tight text-white"
      >
        NEXUS<span className="text-blue-500">INV</span>
      </Link>

      {/* Links */}
      <div className="flex gap-10 items-center font-medium">
        <Link
          href="/"
          className="relative group text-gray-300 hover:text-white transition"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          href="/items"
          className="relative group text-gray-300 hover:text-white transition"
        >
          Items
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Dynamic CTA Button: Shows Logout if logged in, Login if not */}
        {session ? (
          <div className="flex items-center gap-4">
            {/* Use session.user.image */}
            {session.user.image && (
              <img
                src={session.user.image}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            )}

            <button
              onClick={() => signOut()}
              className="px-6 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white">
        <AuthProvider>
          {/* Navbar */}
          <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
            <NavbarContent />
          </nav>

          {/* Page Content */}
          <div className="pt-20 min-h-screen flex flex-col">
            <main className="flex-grow">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
