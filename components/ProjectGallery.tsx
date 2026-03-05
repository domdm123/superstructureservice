import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";

const GALLERY_PHOTOS = [
  {
    src: "/images/Kitchen-Installation-in-Canterbury.jpg",
    alt: "Kitchen installation in Canterbury",
    label: "Kitchen Installation",
    slug: "kitchen-installation-in-canterbury-1",
  },
  {
    src: "/images/refurb-adelphi/builder in canterbury, local quality.jpg",
    alt: "Property refurbishment in Canterbury",
    label: "Property Refurbishment",
    slug: "property-maintenance-canterbury",
  },
  {
    src: "/images/listed-building-adelphi/canterbury-listed-building-refurbishment.jpg.jpg",
    alt: "Listed building refurbishment Canterbury",
    label: "Listed Building Restoration",
    slug: "listed-building-refurb-canterbury",
  },
  {
    src: "/images/Kitchen-Installation-in-Canterbury-2.jpg",
    alt: "Kitchen installation Canterbury",
    label: "Bespoke Kitchen",
    slug: "kitchen-installation-in-canterbury-1",
  },
  {
    src: "/images/bathroom-adelphi/new bathroom installation canterbury.jpg",
    alt: "Bathroom renovation Canterbury",
    label: "Bathroom Renovation",
    slug: "bathroom-installation-canterbury-plumber",
  },
  {
    src: "/images/roof-repair-adelphi/canterbury-bespoke-roofing-joinery.jpg.jpg",
    alt: "Roofing service Canterbury Kent",
    label: "Roofing",
    slug: "roof-repair-canterbury",
  },
  {
    src: "/images/Professional-roofing-service-in-Canterbury-Kent.jpg",
    alt: "Professional roofing contractor working on a Canterbury property",
    label: "Roofing in Canterbury",
    slug: "roofing-in-canterbury-1",
  },
  {
    src: "/images/home-office-adelphi/Home office installation in Canterbury.jpg",
    alt: "Home office creation Canterbury",
    label: "Home Office",
    slug: "home-office-creation-in-canterbury",
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
            <h2 className="font-furore text-3xl md:text-4xl text-[#0d1b2e]">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] hover:text-[#4a9ebb] transition-colors shrink-0"
          >
            View All Projects 
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile grid: clean 2-col equal squares */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {GALLERY_PHOTOS.map((photo) => (
            <Link
              key={photo.slug + photo.label}
              href={`/projects/${photo.slug}`}
              className="relative aspect-square overflow-hidden rounded-xl block group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-active:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold leading-tight drop-shadow">
                {photo.label}
              </span>
            </Link>
          ))}
          <Link
            href="/services"
            className="relative aspect-square bg-[#0d1b2e] rounded-xl flex items-center justify-center text-center p-4 active:bg-[#1e3a5f] transition-colors group"
          >
            <div>
              <div className="text-4xl font-black text-white mb-1">16</div>
              <div className="text-[#4a9ebb] text-xs font-semibold uppercase tracking-wider">Services</div>
              <div className="text-white/50 text-xs mt-1">All trades</div>
            </div>
          </Link>
        </div>

        {/* Desktop bento grid - hidden on mobile */}
        <div className="hidden md:grid grid-cols-12 gap-3 auto-rows-[180px]">

          {/* Large feature - Kitchen (spans 6 cols, 2 rows) */}
          <Link href={`/projects/${GALLERY_PHOTOS[0].slug}`} className="col-span-6 row-span-2 relative group overflow-hidden rounded-2xl block">
            <Image src={GALLERY_PHOTOS[0].src} alt={GALLERY_PHOTOS[0].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold mb-2">Featured</span>
              <h3 className="text-white text-xl font-bold">{GALLERY_PHOTOS[0].label}</h3>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="flex items-center gap-1.5 bg-black/80 text-white px-3 py-1.5 rounded-lg text-sm font-semibold border border-white/20"><Eye size={14} />View</span>
            </div>
          </Link>

          <Link href={`/projects/${GALLERY_PHOTOS[1].slug}`} className="col-span-3 row-span-2 relative group overflow-hidden rounded-2xl block">
            <Image src={GALLERY_PHOTOS[1].src} alt={GALLERY_PHOTOS[1].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">{GALLERY_PHOTOS[1].label}</span>
          </Link>

          <Link href={`/projects/${GALLERY_PHOTOS[2].slug}`} className="col-span-3 row-span-1 relative group overflow-hidden rounded-2xl block">
            <Image src={GALLERY_PHOTOS[2].src} alt={GALLERY_PHOTOS[2].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-xs font-semibold">{GALLERY_PHOTOS[2].label}</span>
          </Link>

          <Link href={`/projects/${GALLERY_PHOTOS[3].slug}`} className="col-span-3 row-span-1 relative group overflow-hidden rounded-2xl block">
            <Image src={GALLERY_PHOTOS[3].src} alt={GALLERY_PHOTOS[3].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-xs font-semibold">{GALLERY_PHOTOS[3].label}</span>
          </Link>

          <Link href={`/projects/${GALLERY_PHOTOS[4].slug}`} className="col-span-4 row-span-1 relative group overflow-hidden rounded-2xl block">
            <Image src={GALLERY_PHOTOS[4].src} alt={GALLERY_PHOTOS[4].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-sm font-semibold">{GALLERY_PHOTOS[4].label}</span>
          </Link>

          <Link href={`/projects/${GALLERY_PHOTOS[5].slug}`} className="col-span-4 row-span-1 relative group overflow-hidden rounded-2xl block">
            <Image src={GALLERY_PHOTOS[5].src} alt={GALLERY_PHOTOS[5].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-sm font-semibold">{GALLERY_PHOTOS[5].label}</span>
          </Link>

          <Link href={`/projects/${GALLERY_PHOTOS[6].slug}`} className="col-span-4 row-span-1 relative group overflow-hidden rounded-2xl block">
            <Image src={GALLERY_PHOTOS[6].src} alt={GALLERY_PHOTOS[6].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-sm font-semibold">{GALLERY_PHOTOS[6].label}</span>
          </Link>

          <Link href={`/projects/${GALLERY_PHOTOS[7].slug}`} className="col-span-6 row-span-1 relative group overflow-hidden rounded-2xl block">
            <Image src={GALLERY_PHOTOS[7].src} alt={GALLERY_PHOTOS[7].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">{GALLERY_PHOTOS[7].label}</span>
          </Link>

          <Link href="/services" className="col-span-6 row-span-1 bg-[#0d1b2e] rounded-2xl flex items-center justify-center text-center p-6 hover:bg-[#1e3a5f] transition-colors group">
            <div>
              <div className="text-5xl font-black text-white mb-1 group-hover:scale-110 transition-transform">16</div>
              <div className="text-[#4a9ebb] text-sm font-semibold uppercase tracking-wider">Services</div>
              <div className="text-white/50 text-xs mt-2">All trades under one roof</div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
