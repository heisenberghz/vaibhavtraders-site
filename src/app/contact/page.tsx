import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Interior Decorators & Plywood Dealers in Udupi",
  description: `Contact ${siteConfig.name} in Udyavara, Udupi. Phone: ${siteConfig.phoneDisplay}. Expert interior decorators, plywood, hardware, and custom turnkey execution.`,
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteConfig.address.full);

  return (
    <>
      <section
        className="relative bg-cover bg-center pt-32 pb-20 text-white sm:pt-40 sm:pb-24"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-brand-blue/40 z-0" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-heading text-3xl font-bold sm:text-4xl">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-lg text-blue-100">
            Visit our store in Udyavara or reach us by phone for enquiries and pricing.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading title="Get In Touch" />

              <div className="mt-8 space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
                    Address
                  </h3>
                  <address className="mt-2 not-italic text-base leading-relaxed text-gray-700">
                    <strong className="text-brand-blue">{siteConfig.name}</strong>
                    <br />
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                    <br />
                    {siteConfig.address.state}
                  </address>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
                    Phone
                  </h3>
                  <p className="mt-2 font-heading text-2xl font-bold text-brand-blue">
                    {siteConfig.phoneDisplay}
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
                    Business Hours
                  </h3>
                  <p className="mt-2 text-base text-gray-700">{siteConfig.hours}</p>
                </div>

                <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-green-800">
                    WhatsApp Us
                  </h3>
                  <p className="mt-1 text-sm text-green-700">
                    Send us a message and we&apos;ll get back to you shortly.
                  </p>
                  <a
                    href={`https://wa.me/91${siteConfig.phone}?text=${encodeURIComponent("Hello, I'm interested in your plywood and interior services.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.855L.057 23.215a.75.75 0 00.916.916l5.36-1.475A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-4.95-1.355l-.355-.211-3.683 1.013 1.013-3.683-.211-.355A9.71 9.71 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading title="Find Us on Map" />
              <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                <iframe
                  title="Vaibhav Traders location on Google Maps"
                  src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="h-80 w-full sm:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Udyavara, Udupi — Karnataka 574118
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
