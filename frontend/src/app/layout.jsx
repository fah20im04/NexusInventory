import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
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

              {/* CTA Button */}
              <Link
                href="/login"
                className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
