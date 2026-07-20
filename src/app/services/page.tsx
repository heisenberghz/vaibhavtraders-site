import SectionHeading from "@/components/SectionHeading";
import { services, siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: `Plywood supply, hardware, aluminium fabrication and interior solutions in Udupi — ${siteConfig.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section
        className="relative bg-cover bg-center pt-32 pb-20 text-white sm:pt-40 sm:pb-24"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-brand-blue/40 z-0" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
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

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24 rounded-xl border border-gray-200 border-t-4 border-t-brand-blue bg-gradient-to-br from-white to-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/25 hover:from-blue-50/30 hover:to-gray-50/30 hover:shadow-md sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange font-heading text-base font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-heading text-lg font-bold text-brand-blue sm:text-xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-wood">
                          Products & Materials
                        </h3>
                        <ul className="mt-1.5 space-y-1">
                          {service.products.map((item) => (
                            <li key={item} className="text-xs text-gray-500">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-wood">
                          Common Applications
                        </h3>
                        <ul className="mt-1.5 space-y-1">
                          {service.applications.map((item) => (
                            <li key={item} className="text-xs text-gray-500">
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
