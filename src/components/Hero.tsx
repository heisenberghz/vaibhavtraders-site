"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center text-white min-h-[85vh] flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')" }}
    >
      {/* Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1430]/95 via-[#0a1430]/85 to-[#0a1430]/60" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1430] to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="max-w-3xl">
          <p className="mb-3 inline-block rounded-full bg-white/10 backdrop-blur-md px-4 py-1 text-sm font-medium text-brand-orange border border-white/20">
            Est. {siteConfig.founded} · Udupi, Karnataka
          </p>
          <h1 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-md">
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
              className="rounded-lg bg-brand-orange px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-orange-600 hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="rounded-lg border-2 border-white/40 bg-white/10 backdrop-blur-sm px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/20"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
