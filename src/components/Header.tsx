"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-900/10 bg-brand-blue shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="group flex flex-col">
          <span className="font-heading text-lg font-bold tracking-tight text-white sm:text-xl">
            {siteConfig.name}
          </span>
          <span className="hidden text-xs text-blue-100 sm:block">
            Plywood & Interior Solutions · Udupi
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${active
                  ? "bg-white/15 text-white"
                  : "text-blue-100 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${siteConfig.phone}`}
            className="rounded-lg bg-brand-orange px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            📞 Call Us
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-brand-blue px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-white hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <p className="mt-2 border-t border-white/10 px-3 pt-3 text-sm font-semibold text-brand-orange">
              {siteConfig.phoneDisplay}
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
