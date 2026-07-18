import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-orange blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-wood blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-brand-orange">
            Est. {siteConfig.founded} · Udupi, Karnataka
          </p>
          <h1 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-blue-100 sm:text-xl">
            Premium Plywood & Hardware · Custom Interior Works · Aluminium Fabrication & Roofing
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="rounded-lg bg-white/10 px-5 py-3">
              <p className="text-xs uppercase tracking-wide text-blue-200">Google Rating</p>
              <p className="font-heading text-2xl font-bold text-brand-orange">
                {siteConfig.googleRating.toFixed(1)} ★
              </p>
              <p className="text-sm text-blue-100">{siteConfig.reviewCount} reviews</p>
            </div>
            <div className="rounded-lg bg-white/10 px-5 py-3">
              <p className="text-xs uppercase tracking-wide text-blue-200">Experience</p>
              <p className="font-heading text-2xl font-bold">{siteConfig.experience}</p>
              <p className="text-sm text-blue-100">Years in business</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-brand-orange px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-orange-600"
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
      </div>
    </section>
  );
}
