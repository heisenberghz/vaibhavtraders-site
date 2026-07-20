"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Run once on load to verify current scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled || open
        ? scrolled
          ? "border-gray-200 bg-white/90 backdrop-blur-md shadow-md"
          : "border-blue-900/10 bg-brand-blue shadow-md"
        : "border-transparent bg-transparent shadow-none"
      }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="group flex flex-col">
          <span className={`font-heading text-lg font-bold tracking-tight sm:text-xl transition-colors duration-300 ${scrolled ? "text-brand-blue" : "text-white"
            }`}>
            {siteConfig.name}
          </span>
          <span className={`hidden text-xs sm:block transition-colors duration-300 ${scrolled ? "text-gray-500" : "text-blue-100"
            }`}>
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
                className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${active
                    ? scrolled
                      ? "bg-brand-blue text-white"
                      : "bg-white/15 text-white"
                    : scrolled
                      ? "text-gray-600 hover:bg-gray-100 hover:text-brand-blue"
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
          className={`rounded-md p-2 transition-colors duration-300 md:hidden ${scrolled ? "text-brand-blue" : "text-white"
            }`}
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
        <nav className={`border-t px-4 py-3 md:hidden transition-colors duration-300 ${scrolled
            ? "border-gray-100 bg-white"
            : "border-white/10 bg-brand-blue"
          }`}>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2.5 text-base font-medium transition-colors duration-300 ${scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <p className={`mt-2 border-t px-3 pt-3 text-sm font-semibold text-brand-orange transition-colors duration-300 ${scrolled ? "border-gray-100" : "border-white/10"
              }`}>
              {siteConfig.phoneDisplay}
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
