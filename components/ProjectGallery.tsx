import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { playfair } from "@/app/layout";

const GALLERY_PHOTOS = [
  {
    src: "/images/Kitchen-Installation-in-Canterbury.jpg",
    alt: "Kitchen installation in Canterbury",
    label: "Kitchen Installation",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/Property-Refurbishment-in-Canterbury.jpg",
    alt: "Property refurbishment in Canterbury",
    label: "Property Refurbishment",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/canterbury-listed-building-refurbishment.jpg",
    alt: "Listed building refurbishment Canterbury",
    label: "Listed Building Restoration",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/Kitchen-Installation-in-Canterbury-2.jpg",
    alt: "Kitchen installation Canterbury",
    label: "Bespoke Kitchen",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/classic-modern-bathroom-refurbishment-service-canterbury.jpg",
    alt: "Bathroom refurbishment Canterbury",
    label: "Bathroom Renovation",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/Professional-roofing-service-in-Canterbury-Kent.jpg",
    alt: "Roofing service Canterbury Kent",
    label: "Roofing",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/Solar-panel-installer-in-Canterbury-Kent.jpg",
    alt: "Solar panel installation Canterbury Kent",
    label: "Solar Panels",
    span: "col-span-1 row-span-1",
  },
];

export default function ProjectGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
              Our Work
            </span>
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#0d1b2e]`}>
              Recent Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] hover:text-[#4a9ebb] transition-colors shrink-0"
          >
            View All Projects <ArrowRight size={15} />
          </Link>
        </div>

        {/* Collage grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[200px_200px] md:grid-rows-[260px_260px] gap-3">
          {/* Large left tile — spans 2 rows */}
          <div className="relative col-span-1 row-span-2 group overflow-hidden rounded-2xl">
            <Image
              src={GALLERY_PHOTOS[0].src}
              alt={GALLERY_PHOTOS[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">
              {GALLERY_PHOTOS[0].label}
            </span>
          </div>

          {/* Top middle two tiles */}
          {[GALLERY_PHOTOS[1], GALLERY_PHOTOS[2]].map((photo) => (
            <div key={photo.src} className="relative col-span-1 row-span-1 group overflow-hidden rounded-2xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                {photo.label}
              </span>
            </div>
          ))}

          {/* Large right tile — spans 2 rows */}
          <div className="relative col-span-1 row-span-2 group overflow-hidden rounded-2xl">
            <Image
              src={GALLERY_PHOTOS[3].src}
              alt={GALLERY_PHOTOS[3].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">
              {GALLERY_PHOTOS[3].label}
            </span>
          </div>

          {/* Bottom middle two tiles */}
          {[GALLERY_PHOTOS[4], GALLERY_PHOTOS[5]].map((photo) => (
            <div key={photo.src} className="relative col-span-1 row-span-1 group overflow-hidden rounded-2xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                {photo.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
