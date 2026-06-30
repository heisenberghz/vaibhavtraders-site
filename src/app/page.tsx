import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ReviewCard from "@/components/ReviewCard";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import {
  featuredProducts,
  projects,
  reviews,
  services,
  siteConfig,
  whyChooseUs,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Why Choose Us */}
      <section className="bg-brand-gray py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Why Choose Us"
            subtitle="A trusted local partner for homeowners, contractors, builders, and interior professionals in Udupi."
            centered
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-heading text-base font-semibold text-brand-blue">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Our Services"
            subtitle="Everything you need for construction, interiors, and fabrication — under one roof."
            centered
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                short={service.short}
                href="/services"
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-block rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="border-y border-gray-200 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Featured Products"
            subtitle="Popular materials our customers ask for every day."
            centered
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {featuredProducts.map((product) => (
              <span
                key={product}
                className="rounded-full border border-brand-wood/30 bg-brand-wood/10 px-4 py-2 text-sm font-medium text-brand-wood"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="bg-brand-gray py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Recent Projects"
            subtitle="A glimpse of the work we support across residential, commercial, and industrial sites."
            centered
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-block rounded-lg border-2 border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-blue hover:text-white"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="What Our Customers Say"
            subtitle={`Rated ${siteConfig.googleRating} on Google with ${siteConfig.reviewCount} reviews.`}
            centered
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-blue py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Need Quality Plywood & Interior Materials?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-blue-100 sm:text-lg">
            Visit us in Udyavara or get in touch for pricing and availability.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-brand-orange px-8 py-3 text-base font-semibold text-white hover:bg-orange-600"
            >
              Contact Us
            </Link>
            <span className="flex items-center rounded-lg border border-white/30 px-6 py-3 text-base font-semibold">
              {siteConfig.phoneDisplay}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
