"use client";
import React, { useState } from "react";
import Link from "next/link";
import Modal from "@/components/Modal";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div>
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
                  <Link
                    href="/items"
                    className="hover:text-blue-400 transition"
                  >
                    View Catalog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="hover:text-blue-400 transition"
                  >
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
                  <button
                    onClick={() => setOpenModal("help")}
                    className="hover:text-blue-400 transition"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setOpenModal("api")}
                    className="hover:text-blue-400 transition"
                  >
                    API Docs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setOpenModal("privacy")}
                    className="hover:text-blue-400 transition"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <Link
                  href="https://www.linkedin.com/in/fahim-ahmed-ayon/"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://github.com/fah20im04/"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://www.instagram.com/fanion_04/"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition"
                >
                  <FaInstagram />
                </Link>
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

      {/* ================= MODALS ================= */}

      {openModal === "help" && (
        <Modal title="Help Center" onClose={() => setOpenModal(null)}>
          <p>
            Welcome to NexusInventory Help Center. Here you can find guides on
            managing inventory, adding items, user authentication and system
            settings.
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2">
            <li>How to add new items</li>
            <li>Managing categories</li>
            <li>User roles & permissions</li>
            <li>Account & security</li>
          </ul>
        </Modal>
      )}

      {openModal === "api" && (
        <Modal title="API Documentation" onClose={() => setOpenModal(null)}>
          <p className="mb-2 font-semibold">Base URL:</p>
          <code className="block bg-black p-2 rounded mb-4 text-green-400">
            http://localhost:5000/api
          </code>

          <ul className="space-y-2">
            <li>GET /items – Fetch all items</li>
            <li>POST /items – Add new item</li>
            <li>GET /items/:id – Get item by ID</li>
            <li>POST /register – Register user</li>
          </ul>
        </Modal>
      )}

      {openModal === "privacy" && (
        <Modal title="Privacy Policy" onClose={() => setOpenModal(null)}>
          <p>
            NexusInventory respects your privacy. All user data is securely
            stored and never shared with third parties. We use encrypted
            connections and modern authentication standards.
          </p>
          <p className="mt-3">
            By using this application, you agree to our data handling practices.
          </p>
        </Modal>
      )}
    </>
  );
}
