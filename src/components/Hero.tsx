"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const [variant, setVariant] = useState<"A" | "B">("B");

  return (
    <div className="relative">
      {/* Live Interactive Variant Toggle Switch */}
      <div className="absolute top-24 right-4 sm:right-8 z-30 flex items-center gap-1 rounded-full border border-white/30 bg-black/60 backdrop-blur-md p-1.5 text-xs text-white shadow-xl">
        <span className="px-2 font-medium text-blue-200 hidden sm:inline">Preview Layout:</span>
        <button
          onClick={() => setVariant("A")}
          className={`rounded-full px-3 py-1 font-semibold transition-all ${
            variant === "A"
              ? "bg-brand-orange text-white shadow"
              : "text-blue-100 hover:text-white"
          }`}
        >
          Variant A (Full Photo)
        </button>
        <button
          onClick={() => setVariant("B")}
          className={`rounded-full px-3 py-1 font-semibold transition-all ${
            variant === "B"
              ? "bg-brand-orange text-white shadow"
              : "text-blue-100 hover:text-white"
          }`}
        >
          Variant B (Split Photos)
        </button>
      </div>

      {variant === "A" ? (
        /* VARIANT A: Full-Screen Photo Background (Holmac Style) */
        <section
          className="relative overflow-hidden bg-cover bg-center text-white min-h-[85vh] flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')" }}
        >
          {/* Dark Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1430]/95 via-[#0a1430]/80 to-[#0a1430]/50" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1430] to-transparent pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 w-full">
            <div className="max-w-3xl">
              <p className="mb-3 inline-block rounded-full bg-white/10 backdrop-blur-md px-4 py-1 text-sm font-medium text-brand-orange border border-white/20">
                Est. {siteConfig.founded} · Udupi, Karnataka
              </p>
              <h1 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl drop-shadow-md">
                {siteConfig.tagline}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-blue-100 sm:text-xl drop-shadow-sm">
                Premium Plywood & Hardware · Custom Interior Works · Aluminium Fabrication
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3">
                  <p className="text-xs uppercase tracking-wide text-blue-200">Google Rating</p>
                  <p className="font-heading text-2xl font-bold text-brand-orange">
                    {siteConfig.googleRating.toFixed(1)} ★
                  </p>
                  <p className="text-sm text-blue-100">{siteConfig.reviewCount} reviews</p>
                </div>
                <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3">
                  <p className="text-xs uppercase tracking-wide text-blue-200">Experience</p>
                  <p className="font-heading text-2xl font-bold">{siteConfig.experience}</p>
                  <p className="text-sm text-blue-100">Years in business</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-brand-orange px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-orange-600 hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="rounded-lg border-2 border-white/40 bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-semibold text-white transition hover:bg-white/20"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* VARIANT B: Split Layout with Project Photos on the Right (Sairam Style) */
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#2345a5_0%,#142862_50%,#0a1430_100%)] text-white pt-28 pb-16 sm:pt-36 sm:pb-24">
          {/* Subtle Glow Orbs */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-orange/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-brand-wood/30 blur-3xl" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1430] to-transparent pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Headline & Info */}
              <div className="lg:col-span-7">
                <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-brand-orange border border-white/20">
                  Est. {siteConfig.founded} · Udupi, Karnataka
                </p>
                <h1 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  {siteConfig.tagline}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-blue-100 sm:text-xl">
                  Premium Plywood & Hardware · Custom Interior Works · Aluminium Fabrication
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <div className="rounded-xl bg-white/10 border border-white/20 px-5 py-3">
                    <p className="text-xs uppercase tracking-wide text-blue-200">Google Rating</p>
                    <p className="font-heading text-2xl font-bold text-brand-orange">
                      {siteConfig.googleRating.toFixed(1)} ★
                    </p>
                    <p className="text-sm text-blue-100">{siteConfig.reviewCount} reviews</p>
                  </div>
                  <div className="rounded-xl bg-white/10 border border-white/20 px-5 py-3">
                    <p className="text-xs uppercase tracking-wide text-blue-200">Experience</p>
                    <p className="font-heading text-2xl font-bold">{siteConfig.experience}</p>
                    <p className="text-sm text-blue-100">Years in business</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-brand-orange px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-orange-600 hover:scale-105"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                  >
                    Our Services
                  </Link>
                </div>
              </div>

              {/* Right Column: 2 Project Photo Cards */}
              <div className="lg:col-span-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {/* Photo Card 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-brand-orange/50">
                  <div className="h-52 sm:h-60 w-full overflow-hidden">
                    <img
                      src="/projects/project1.jpg"
                      alt="Modular Kitchen & Interior Works"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <div>
                      <span className="inline-block rounded-full bg-brand-orange px-2.5 py-0.5 text-xs font-semibold text-white">
                        Interior Execution
                      </span>
                      <p className="mt-1 font-heading text-sm font-semibold text-white">
                        Modular Kitchens & Custom Woodwork
                      </p>
                    </div>
                  </div>
                </div>

                {/* Photo Card 2 */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-brand-orange/50">
                  <div className="h-52 sm:h-60 w-full overflow-hidden">
                    <img
                      src="/projects/project2.jpg"
                      alt="Aluminium Fabrication & Hardware"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <div>
                      <span className="inline-block rounded-full bg-brand-blue px-2.5 py-0.5 text-xs font-semibold text-white border border-white/30">
                        Craftsmanship
                      </span>
                      <p className="mt-1 font-heading text-sm font-semibold text-white">
                        Premium Hardware & Fabrication
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
