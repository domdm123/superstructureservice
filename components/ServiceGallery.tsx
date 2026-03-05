"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { SERVICES } from "@/lib/services";

interface Props {
  serviceSlug: string;
}

export default function ServiceGallery({ serviceSlug }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const canonicalSlug = service?.canonicalSlug.replace("services/", "") ?? serviceSlug;

  const related = PROJECTS.filter(
    (p) =>
      p.serviceSlug === serviceSlug ||
      p.serviceSlug === canonicalSlug ||
      p.serviceSlug === service?.canonicalSlug
  );

  // Fall back to all projects if none match this service
  const source = related.length > 0 ? related : PROJECTS;

  const photos = source.flatMap((p) =>
    p.images.map((src) => ({ src, title: p.title }))
  ).slice(0, 6);

  if (photos.length === 0) return null;

  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % photos.length));

  const Tile = ({
    index,
    className,
    sizes,
    featured = false,
  }: {
    index: number;
    className: string;
    sizes: string;
    featured?: boolean;
  }) => {
    const photo = photos[index];
    if (!photo) return null;
    return (
      <button
        onClick={() => setLightbox(index)}
        className={`${className} relative group overflow-hidden rounded-2xl focus:outline-none`}
      >
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={sizes}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {featured && (
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold mb-1">Featured</span>
            <p className="text-white text-sm font-bold leading-snug">{photo.title}</p>
          </div>
        )}
        {!featured && (
          <span className="absolute bottom-3 left-3 text-white text-xs font-semibold">{photo.title}</span>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="flex items-center gap-1 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-semibold border border-white/20">
            <ZoomIn size={12} />
          </span>
        </div>
      </button>
    );
  };

  return (
    <>
      <div className="mb-8">
        {/* Header */}
        <div className="mb-4">
          <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-1 block">Our Work</span>
          <h3 className="font-furore text-xl text-[#1a2e44]">Recent Projects</h3>
        </div>

        {/* Mobile: 2-col grid */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {photos.slice(0, 4).map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="relative aspect-square overflow-hidden rounded-xl group focus:outline-none"
            >
              <Image src={photo.src} alt={photo.title} fill className="object-cover transition-transform duration-500 group-active:scale-105" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold leading-tight drop-shadow">{photo.title}</span>
            </button>
          ))}
        </div>

        {/* Desktop: bento grid */}
        <div className="hidden md:grid grid-cols-12 gap-2 auto-rows-[140px]">
          <Tile index={0} className="col-span-7 row-span-2" sizes="450px" featured />
          <Tile index={1} className="col-span-5 row-span-1" sizes="300px" />
          <Tile index={2} className="col-span-5 row-span-1" sizes="300px" />
          <Tile index={3} className="col-span-4 row-span-1" sizes="200px" />
          <Tile index={4} className="col-span-4 row-span-1" sizes="200px" />
          <Tile index={5} className="col-span-4 row-span-1" sizes="200px" />
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-3 md:left-6 text-white/70 hover:text-white p-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>
          <div
            className="relative w-[88vw] max-w-3xl"
            style={{ aspectRatio: "4/3" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].title}
              fill
              className="object-contain"
              sizes="88vw"
            />
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center text-white/60 text-sm px-4">
            {photos[lightbox].title} &nbsp;·&nbsp; {lightbox + 1} / {photos.length}
          </p>
          <button
            className="absolute right-3 md:right-6 text-white/70 hover:text-white p-2 transition-colors"
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
