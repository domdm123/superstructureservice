"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
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

  if (related.length === 0) return null;

  const all = related.flatMap((p) => p.images.map((src) => ({ src, title: p.title })));
  const tiles = all.slice(0, 8);

  if (tiles.length === 0) return null;

  const navigate = useCallback((dir: 1 | -1) => {
    setLightbox((i) => (i === null ? null : (i + dir + all.length) % all.length));
  }, [all.length]);

  const close = useCallback(() => setLightbox(null), []);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") navigate(1);
      else if (e.key === "ArrowLeft") navigate(-1);
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, navigate, close]);

  // Preload gallery tile images on mount for fast grid display
  useEffect(() => {
    tiles.forEach(({ src }) => {
      const img = new window.Image();
      img.src = src;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Preload 2 images ahead and behind current lightbox position
  useEffect(() => {
    if (lightbox === null) return;
    const preload = (src: string) => {
      const img = new window.Image();
      img.src = src;
    };
    [-2, -1, 1, 2].forEach((offset) => {
      preload(all[(lightbox + offset + all.length) % all.length].src);
    });
  }, [lightbox, all]);

  // Lock body scroll when open
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const Tile = ({
    index,
    className,
    sizes,
  }: {
    index: number;
    className: string;
    sizes: string;
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
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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

        {/* Desktop: bento grid */}
        <div className="hidden md:grid grid-cols-12 gap-3 auto-rows-[180px]">
          {tiles.length === 2 ? (
            <>
              <Tile index={0} className="col-span-6 row-span-2" sizes="50vw" />
              <Tile index={1} className="col-span-6 row-span-2" sizes="50vw" />
            </>
          ) : (
            <>
              <Tile index={0} className="col-span-6 row-span-2" sizes="50vw" />
              <Tile index={1} className="col-span-3 row-span-2" sizes="25vw" />
              <Tile index={2} className="col-span-3 row-span-1" sizes="25vw" />
              <Tile index={3} className="col-span-3 row-span-1" sizes="25vw" />
              <Tile index={4} className="col-span-4 row-span-1" sizes="33vw" />
              <Tile index={5} className="col-span-4 row-span-1" sizes="33vw" />
              <Tile index={6} className="col-span-4 row-span-1" sizes="33vw" />
            </>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.96)" }}
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white p-2 transition-colors z-10"
            onClick={close}
            aria-label="Close"
          >
            <X size={30} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-4 transition-colors z-10 rounded-full hover:bg-white/10"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            aria-label="Previous"
          >
            <ChevronLeft size={44} strokeWidth={1.5} />
          </button>

          {/* Image */}
          <div
            className="relative flex items-center justify-center w-full h-full px-16 md:px-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={lightbox}
              src={all[lightbox].src}
              alt={all[lightbox].title}
              fill
              className="object-contain rounded-lg select-none"
              sizes="100vw"
              priority
              draggable={false}
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2 pointer-events-none">
            {all.map((_, i) => (
              <span
                key={i}
                className={`inline-block rounded-full transition-all duration-200 ${
                  i === lightbox
                    ? "w-5 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-4 transition-colors z-10 rounded-full hover:bg-white/10"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            aria-label="Next"
          >
            <ChevronRight size={44} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </>
  );
}
