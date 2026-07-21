"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

const heroPhotos = [
  { src: "/projects/project18.jpg", label: "Living Room & Kitchen" },
  { src: "/projects/project16.jpg", label: "Custom Woodwork & Wardrobe" },
  { src: "/projects/project1.jpg", label: "TV Unit & Ceiling Work" },
];

export default function Hero() {
  const [variant, setVariant] = useState<"A" | "B">("B");
  const [activePhoto, setActivePhoto] = useState(0);

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
          Variant B (Split Showcase)
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
        /* VARIANT B: Split Layout with Full Featured Project Photo Frame */
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#2345a5_0%,#142862_50%,#0a1430_100%)] text-white pt-28 pb-16 sm:pt-36 sm:pb-24">
          {/* Subtle Glow Orbs */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-orange/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-brand-wood/30 blur-3xl" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1430] to-transparent pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Headline & Info */}
              <div className="lg:col-span-6">
                <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-brand-orange border border-white/20">
                  Est. {siteConfig.founded} · Udupi, Karnataka
                </p>
                <h1 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl">
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
                    className="rounded-lg bg-brand-orange px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-orange-600 hover:scale-105"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-lg border-2 border-white/30 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
                  >
                    Our Services
                  </Link>
                </div>
              </div>

              {/* Right Column: Larger & Perfectly Aligned Project Showcase Card */}
              <div className="lg:col-span-6">
                <div className="group relative overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-3 sm:p-4 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-brand-orange/50 hover:shadow-brand-orange/20">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black/20">
                    <img
                      src={heroPhotos[activePhoto].src}
                      alt={heroPhotos[activePhoto].label}
                      className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1430]/90 via-transparent to-transparent opacity-90" />
                    
                    {/* Floating Badge & Overlay Label */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div className="space-y-1">
                        <span className="inline-block rounded-full bg-brand-orange px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                          Featured Work
                        </span>
                        <p className="text-base font-semibold text-white drop-shadow-md">
                          {heroPhotos[activePhoto].label}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Larger Interactive Thumbnail Selector */}
                  <div className="mt-3.5 grid grid-cols-3 gap-2.5">
                    {heroPhotos.map((photo, index) => (
                      <button
                        key={photo.src}
                        onClick={() => setActivePhoto(index)}
                        className={`relative h-20 w-full overflow-hidden rounded-xl border-2 transition-all ${
                          activePhoto === index
                            ? "border-brand-orange ring-2 ring-brand-orange/40 opacity-100 scale-[1.02]"
                            : "border-white/20 opacity-60 hover:opacity-100 hover:border-white/40"
                        }`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.label}
                          className="h-full w-full object-cover object-center"
                        />
                      </button>
                    ))}
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
