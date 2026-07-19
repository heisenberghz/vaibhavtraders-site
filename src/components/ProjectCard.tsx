"use client";

import { useState } from "react";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  image?: string;
};

const categoryColors: Record<string, string> = {
  Residential: "bg-blue-100 text-brand-blue",
  Commercial: "bg-orange-100 text-orange-800",
  Office: "bg-purple-100 text-purple-800",
  Roofing: "bg-gray-200 text-gray-800",
  Interior: "bg-amber-100 text-amber-900",
};

export default function ProjectCard({ title, category, description, image }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-brand-blue/10 via-brand-gray to-brand-wood/20">
        {image && !imgError ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-brand-blue/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="mt-2 text-xs text-gray-500">Photo coming soon</p>
          </div>
        )}
      </div>
      <div className="p-5">
        <span
          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            categoryColors[category] ?? "bg-gray-100 text-gray-700"
          }`}
        >
          {category}
        </span>
        <h3 className="mt-2 font-heading text-lg font-semibold text-brand-blue">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </article>
  );
}
