"use client";

import { useState } from "react";

type ProjectCardProps = {
  title: string;
  category?: string;
  description?: string;
  image?: string;
};

export default function ProjectCard({ title, image }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:border-brand-blue/20 hover:shadow-md">
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-brand-blue/10 via-brand-gray to-brand-wood/20 sm:h-72 md:h-80">
        {image && !imgError ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-brand-blue/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="mt-2 text-xs text-gray-500">Photo coming soon</p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
