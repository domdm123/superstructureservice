"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { SERVICES } from "@/lib/services";

interface Props {
  serviceSlug: string;
  projectsPageHref?: string;
}

export default function ServiceGallery({ serviceSlug, projectsPageHref = "/projects" }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const canonicalSlug = service?.canonicalSlug.replace("services/", "") ?? serviceSlug;

  const related = PROJECTS.filter(
    (p) => p.serviceSlug === serviceSlug || p.serviceSlug === canonicalSlug || p.serviceSlug === service?.canonicalSlug
  );
  if (related.length === 0) return null;

  const allImages: { src: string; title: string }[] = related.flatMap((p) =>
    p.images.slice(0, 3).map((src) => ({ src, title: p.title }))
  ).slice(0, 9);

  if (allImages.length === 0) return null;

  const prev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + allImages.length) % allImages.length));
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % allImages.length));

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#1a2e44]">Our Work</h3>
          <Link
            href={projectsPageHref}
            className="text-sm text-[#4a9ebb] font-semibold hover:underline"
          >
            View all projects →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="relative aspect-square overflow-hidden rounded-xl group focus:outline-none"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 200px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:text-gray-300"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 text-white p-2 hover:text-gray-300"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>
          <div
            className="relative w-[90vw] max-w-3xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[lightboxIndex].src}
              alt={allImages[lightboxIndex].title}
              fill
              className="object-contain"
              sizes="90vw"
            />
            <p className="absolute bottom-[-2rem] left-0 right-0 text-center text-gray-300 text-sm">
              {allImages[lightboxIndex].title}
            </p>
          </div>
          <button
            className="absolute right-4 text-white p-2 hover:text-gray-300"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </>
  );
}
