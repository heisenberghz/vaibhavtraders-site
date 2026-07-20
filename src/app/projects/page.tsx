import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects, siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: `View residential, commercial, office and interior projects supported by ${siteConfig.name} in Udupi.`,
};

export default function ProjectsPage() {
  return (
    <>
      <section
        className="relative bg-cover bg-center pt-32 pb-20 text-white sm:pt-40 sm:pb-24"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-brand-blue/40 z-0" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="font-heading text-3xl font-bold sm:text-4xl">Projects Gallery</h1>
          <p className="mt-3 max-w-2xl text-lg text-blue-100">
            A selection of custom interior works and projects we have executed in Udupi.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Our Work"
            subtitle="Browse photos of our completed interior designs, custom woodwork, and local installations."
            centered
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
