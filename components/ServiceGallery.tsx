"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
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

  const source = related.length > 0 ? related : PROJECTS;

  const all = source.flatMap((p) => p.images.map((src) => ({ src, title: p.title })));
  const tiles = all.slice(0, 8);

  if (tiles.length === 0) return null;

  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + all.length) % all.length));
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % all.length));

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
    const photo = tiles[index];
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {featured && (
          <div className="absolute bottom-5 left-5 right-5">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold mb-2">Featured</span>
          </div>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="flex items-center gap-1.5 bg-black/80 text-white px-3 py-1.5 rounded-lg text-sm font-semibold border border-white/20">
            <Eye size={14} /> View
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
          {tiles.slice(0, 4).map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="relative aspect-square overflow-hidden rounded-xl group focus:outline-none"
            >
              <Image src={photo.src} alt={photo.title} fill className="object-cover transition-transform duration-500 group-active:scale-105" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </button>
          ))}
        </div>

        {/* Desktop: bento grid — matches ProjectGallery style */}
        <div className="hidden md:grid grid-cols-12 gap-3 auto-rows-[180px]">
          <Tile index={0} className="col-span-6 row-span-2" sizes="50vw" featured />
          <Tile index={1} className="col-span-3 row-span-2" sizes="25vw" />
          <Tile index={2} className="col-span-3 row-span-1" sizes="25vw" />
          <Tile index={3} className="col-span-3 row-span-1" sizes="25vw" />
          <Tile index={4} className="col-span-4 row-span-1" sizes="33vw" />
          <Tile index={5} className="col-span-4 row-span-1" sizes="33vw" />
          <Tile index={6} className="col-span-4 row-span-1" sizes="33vw" />
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
            className="absolute left-3 md:left-8 text-white/70 hover:text-white p-3 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>
          <div
            className="relative w-[90vw] max-w-4xl"
            style={{ aspectRatio: "4/3" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={all[lightbox].src}
              alt={all[lightbox].title}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center text-white/50 text-sm px-4">
            {lightbox + 1} / {all.length}
          </p>
          <button
            className="absolute right-3 md:right-8 text-white/70 hover:text-white p-3 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}
