import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { SERVICES } from "@/lib/services";

interface Props {
  serviceSlug: string;
}

export default function ServiceGallery({ serviceSlug }: Props) {
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const canonicalSlug = service?.canonicalSlug.replace("services/", "") ?? serviceSlug;

  const related = PROJECTS.filter(
    (p) =>
      p.serviceSlug === serviceSlug ||
      p.serviceSlug === canonicalSlug ||
      p.serviceSlug === service?.canonicalSlug
  );

  if (related.length === 0) return null;

  const photos = related.flatMap((p) =>
    p.images.slice(0, 3).map((src) => ({ src, title: p.title, slug: p.slug }))
  ).slice(0, 6);

  if (photos.length === 0) return null;

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-1 block">Our Work</span>
          <h3 className="font-furore text-xl text-[#1a2e44]">Recent Projects</h3>
        </div>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e3a5f] hover:text-[#4a9ebb] transition-colors"
        >
          View all <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Mobile: 2-col grid */}
      <div className="grid grid-cols-2 gap-2 md:hidden">
        {photos.slice(0, 4).map((photo, i) => (
          <Link
            key={i}
            href={`/projects/${photo.slug}`}
            className="relative aspect-square overflow-hidden rounded-xl block group"
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              className="object-cover transition-transform duration-500 group-active:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold leading-tight drop-shadow">
              {photo.title}
            </span>
          </Link>
        ))}
      </div>

      {/* Desktop: bento grid */}
      <div className="hidden md:grid grid-cols-12 gap-2 auto-rows-[140px]">

        {/* Large feature — spans 7 cols, 2 rows */}
        <Link
          href={`/projects/${photos[0].slug}`}
          className="col-span-7 row-span-2 relative group overflow-hidden rounded-2xl block"
        >
          <Image
            src={photos[0].src}
            alt={photos[0].title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 60vw, 450px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold mb-1">Featured</span>
            <h4 className="text-white text-base font-bold leading-snug">{photos[0].title}</h4>
          </div>
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="flex items-center gap-1 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-semibold border border-white/20">
              <Eye size={12} /> View
            </span>
          </div>
        </Link>

        {/* Top-right: spans 5 cols, 1 row */}
        {photos[1] && (
          <Link
            href={`/projects/${photos[1].slug}`}
            className="col-span-5 row-span-1 relative group overflow-hidden rounded-2xl block"
          >
            <Image src={photos[1].src} alt={photos[1].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="300px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-xs font-semibold">{photos[1].title}</span>
          </Link>
        )}

        {/* Bottom-right: spans 5 cols, 1 row */}
        {photos[2] && (
          <Link
            href={`/projects/${photos[2].slug}`}
            className="col-span-5 row-span-1 relative group overflow-hidden rounded-2xl block"
          >
            <Image src={photos[2].src} alt={photos[2].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="300px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-xs font-semibold">{photos[2].title}</span>
          </Link>
        )}

        {/* Bottom row: 3 equal cols */}
        {photos[3] && (
          <Link
            href={`/projects/${photos[3].slug}`}
            className="col-span-4 row-span-1 relative group overflow-hidden rounded-2xl block"
          >
            <Image src={photos[3].src} alt={photos[3].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="200px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-xs font-semibold">{photos[3].title}</span>
          </Link>
        )}

        {photos[4] && (
          <Link
            href={`/projects/${photos[4].slug}`}
            className="col-span-4 row-span-1 relative group overflow-hidden rounded-2xl block"
          >
            <Image src={photos[4].src} alt={photos[4].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="200px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-xs font-semibold">{photos[4].title}</span>
          </Link>
        )}

        {photos[5] && (
          <Link
            href={`/projects/${photos[5].slug}`}
            className="col-span-4 row-span-1 relative group overflow-hidden rounded-2xl block"
          >
            <Image src={photos[5].src} alt={photos[5].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="200px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-xs font-semibold">{photos[5].title}</span>
          </Link>
        )}

      </div>
    </div>
  );
}
