import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-brand-blue text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg font-bold">{siteConfig.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-blue-100">
            Trusted plywood, hardware, aluminium fabrication, roofing, and interior solutions in Udupi since {siteConfig.founded}.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-orange">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-blue-100 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-orange">
            Contact
          </h4>
          <address className="mt-3 space-y-2 not-italic text-sm text-blue-100">
            <p>{siteConfig.address.line1}</p>
            <p>{siteConfig.address.line2}</p>
            <p>{siteConfig.address.state}</p>
            <a href={`tel:${siteConfig.phone}`} className="pt-1 font-semibold text-white hover:text-brand-orange transition-colors">
              {siteConfig.phoneDisplay}
            </a>
            <p>{siteConfig.hours}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-blue-200">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
