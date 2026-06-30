import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects, siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: `View residential, commercial, office, roofing, and interior projects supported by ${siteConfig.name} in Udupi.`,
};

const categories = ["All", "Residential", "Commercial", "Office", "Roofing", "Interior"];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-brand-blue py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-heading text-3xl font-bold sm:text-4xl">Projects Gallery</h1>
          <p className="mt-3 max-w-2xl text-lg text-blue-100">
            A selection of residential, commercial, and industrial work we&apos;ve supported across Udupi.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Our Work"
            subtitle="Project photos will be added soon. Contact us to see more examples of our completed work."
            centered
          />

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  cat === "All"
                    ? "bg-brand-blue text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have photos of your completed project with us? We&apos;d love to feature them here.
          </p>
        </div>
      </section>
    </>
  );
}
