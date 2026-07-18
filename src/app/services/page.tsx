import SectionHeading from "@/components/SectionHeading";
import { services, siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: `Plywood supply, hardware, aluminium fabrication, roofing, and interior solutions in Udupi — ${siteConfig.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-blue py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-heading text-3xl font-bold sm:text-4xl">Our Services</h1>
          <p className="mt-3 max-w-2xl text-lg text-blue-100">
            Complete solutions for construction, custom interiors and fabrication — from top-tier material supply to professional design and execution.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="What We Offer"
            subtitle="Whether you are sourcing premium materials or looking for professional execution of your interior and fabrication works — we have you covered."
            centered
          />

          <div className="mt-12 space-y-10">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange font-heading text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-heading text-xl font-bold text-brand-blue sm:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-gray-700">
                      {service.description}
                    </p>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-wood">
                          Products / Services
                        </h3>
                        <ul className="mt-2 space-y-1">
                          {service.products.map((item) => (
                            <li key={item} className="text-sm text-gray-600">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-wood">
                          Applications
                        </h3>
                        <ul className="mt-2 space-y-1">
                          {service.applications.map((item) => (
                            <li key={item} className="text-sm text-gray-600">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
