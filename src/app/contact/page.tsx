import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} in Udyavara, Udupi. Phone: ${siteConfig.phoneDisplay}. Plywood, hardware, and interior solutions.`,
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteConfig.address.full);

  return (
    <>
      <section className="bg-brand-blue py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

                <div className="rounded-xl border border-gray-200 bg-brand-gray p-5">
                  <p className="text-sm text-gray-600">
                    Online enquiry forms and WhatsApp integration can be added later. For now,
                    please call or visit us directly.
                  </p>
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
