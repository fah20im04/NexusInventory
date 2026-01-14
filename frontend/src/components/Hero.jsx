import React from "react";
import Link from "next/link";
import banner from "../../public/Banner.jpeg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#0f172a] pt-32 pb-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="inline-block px-5 py-2 mb-8 text-sm font-semibold tracking-wide text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
          Next Generation Inventory
        </span>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Manage your inventory with <br />
          <span className="text-blue-500">Precision & Speed</span>
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-lg md:text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
          Nexus Inventory helps you track, organize, and scale your products
          effortlessly. Built with modern technologies for speed, security, and
          reliability.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex items-center justify-center gap-x-6">
          <Link
            href="/items"
            className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
          >
            Browse Catalog
          </Link>

          <Link
            href="/login"
            className="text-lg font-semibold leading-6 text-gray-300 hover:text-white transition"
          >
            Admin Login <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Visual Element */}
        <div className="mt-20 flow-root">
          <div className="relative rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 shadow-2xl">
            <div className="rounded-xl bg-[#020617] relative w-full h-64 md:h-96 overflow-hidden border border-white/20">
              <Image
                src={banner}
                alt="Dashboard Preview"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
