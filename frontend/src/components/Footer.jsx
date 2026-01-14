import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-white text-2xl font-bold tracking-tighter mb-4">
              NEXUS<span className="text-blue-500">INV</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Providing modern inventory solutions for the next generation of
              businesses. Built with Next.js and MongoDB.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Application</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="hover:text-blue-400 transition">
                  View Catalog
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-blue-400 transition">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {/* Simple Social Icons Placeholder */}
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition">
                T
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition">
                G
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition">
                L
              </div>
            </div>
            <p className="text-xs">support@nexusinventory.com</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs">
          <p>
            © {new Date().getFullYear()} NexusInventory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
