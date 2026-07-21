"use client";

import Link from "next/link";
import { useState, useRef } from "react";
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

function getIcon(iconName: string) {
  switch (iconName) {
    case "award":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    case "tools":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "shield":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "price":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "clock":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "star":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    const scrollLeft = sliderRef.current.scrollLeft;
    const index = Math.round(scrollLeft / width);
    if (index !== activeSlide) {
      setActiveSlide(index);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
    setActiveSlide(index);
  };

  return (
    <>
      <Hero />

      {/* Why Choose Us */}
      <section
        className="relative py-16 sm:py-24 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-brand-blue/40 z-0" />
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0a1430] to-transparent z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/30 to-transparent z-0 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Why Choose Us"
            subtitle="A trusted partner for home interiors, plywood, hardware and custom fabrication in Udupi."
            centered
            light
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100">
                  {item.description}
                </p>
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
            subtitle="Everything you need for home interiors and custom fabrication — all in one place."
            centered
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.id}
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
      <section
        className="relative py-16 sm:py-24 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-brand-blue/40 z-0" />
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-brand-gray/30 to-transparent z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a1430] to-transparent z-0 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="What Our Customers Say"
            subtitle={`Rated ${siteConfig.googleRating} on Google with ${siteConfig.reviewCount} reviews.`}
            centered
            light
          />

          <div className="relative mt-10">
            {/* Horizontal Slider (Mobile) & Grid (Desktop) */}
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-4 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:snap-none"
            >
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="min-w-full snap-center md:min-w-0 md:snap-align-none"
                >
                  <article className="flex h-full flex-col rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-sm">
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-4 flex-1 text-base leading-relaxed text-blue-100">&ldquo;{review.text}&rdquo;</p>
                    <p className="mt-4 border-t border-white/20 pt-4 text-sm font-semibold text-white">— {review.name}</p>
                    <p className="mt-1 text-xs text-blue-200">Google Review</p>
                  </article>
                </div>
              ))}
            </div>

            {/* Bullet Pagination Indicators (Mobile Only) */}
            <div className="mt-4 flex justify-center gap-2 md:hidden">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    idx === activeSlide
                      ? "bg-white w-6"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
