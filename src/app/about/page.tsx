import SectionHeading from "@/components/SectionHeading";
import { siteConfig, timeline } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Trusted Interior Decorators & Plywood Suppliers in Udupi",
  description: `Learn about ${siteConfig.name} — over 23 years of trusted interior decoration, turnkey execution, plywood and hardware supply in Udupi.`,
};

export default function AboutPage() {
  return (
    <>
      <section
        className="relative bg-cover bg-center pt-32 pb-20 text-white sm:pt-40 sm:pb-24"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-brand-blue/40 z-0" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-heading text-3xl font-bold sm:text-4xl">About Us</h1>
          <p className="mt-3 max-w-2xl text-lg text-blue-100">
            Serving Udupi with quality materials and dependable service since {siteConfig.founded}.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading title="Our Story" />
              <p className="mt-6 text-base leading-relaxed text-gray-700">
                {siteConfig.name} has been serving customers across Udupi for more than 23 years,
                delivering premium plywood, hardware and custom aluminium fabrication solutions,
                alongside complete end-to-end interior design and execution works.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                Whether you are a homeowner seeking to design and install a custom modular kitchen and wardrobes,
                or a builder looking for a reliable material supplier, we deliver both top-grade materials
                and the skilled craftsmanship required to bring your vision to life.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-brand-gray p-6 sm:p-8">
              <h3 className="font-heading text-lg font-semibold text-brand-blue">At a Glance</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Established</dt>
                  <dd className="font-heading text-xl font-bold text-brand-blue">{siteConfig.founded}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Location</dt>
                  <dd className="text-base text-gray-700">Udyavara, Udupi, Karnataka</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Google Rating</dt>
                  <dd className="font-heading text-xl font-bold text-brand-orange">
                    {siteConfig.googleRating} ★ ({siteConfig.reviewCount} reviews)
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Phone</dt>
                  <dd className="text-base font-semibold text-gray-800">{siteConfig.phoneDisplay}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading title="Mission, Vision & Values" centered />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-brand-blue">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                To supply premium-quality materials and dependable service that help every customer
                build and finish their projects with confidence.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-brand-blue">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                To be Udupi&apos;s most trusted destination for plywood, hardware,
                custom fabrication and interior solutions.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-brand-blue">Core Values</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Quality materials</li>
                <li>• Honest pricing</li>
                <li>• Timely delivery</li>
                <li>• Customer-first service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading title="Our Journey" subtitle="From a local supplier to a trusted name in Udupi." centered />
          <div className="mt-10 space-y-6">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 sm:gap-6 sm:p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-blue font-heading text-sm font-bold text-white">
                  {item.year}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-brand-blue">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
