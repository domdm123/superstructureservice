import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AREAS } from "@/lib/areas";
import { SERVICES, DOMAIN } from "@/lib/services";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const SERVICE_PHOTOS: Record<string, { src: string; alt: string }> = {
  "kitchen-installation": { src: "/images/Kitchen-Installation-in-Canterbury.jpg", alt: "Kitchen Installation in Canterbury" },
  "flooring-underfloor-heating": { src: "/images/Underfloor-Heating-in-Canterbury.jpg", alt: "Underfloor Heating in Canterbury" },
  "facility-building-management": { src: "/images/Facilities-building-management-firm-in-Canterbury-Kent.jpg", alt: "Facilities Building Management Canterbury" },
  "electrician": { src: "/images/home-electrician-in-canterbury-rewiring-fuse-metering.jpg", alt: "Electrician in Canterbury" },
  "air-source-heat-pump": { src: "/images/Air-source-heat-pumps-and-conditioning.jpg", alt: "Air Source Heat Pumps Canterbury" },
  "solar-panel-installation": { src: "/images/Solar-panel-installer-in-Canterbury-Kent.jpg", alt: "Solar Panel Installer Canterbury" },
  "air-conditioning": { src: "/images/air-con-service-installation-company-in-canterbury.jpg", alt: "Air Conditioning Canterbury" },
  "new-bathroom": { src: "/images/classic-modern-bathroom-refurbishment-service-canterbury.jpg", alt: "New Bathroom Canterbury" },
  "property-refurbishment": { src: "/images/Property-maintanence-in-Canterbury-Kent.jpg", alt: "Property Refurbishment Canterbury" },
  "plumbing-drainage": { src: "/images/Bathrooms-in-Canterbury.jpg", alt: "Plumbing Canterbury" },
  "carpentry": { src: "/images/Carpenter-in-Canterbury.jpg", alt: "Carpentry Canterbury" },
  "garage-workshop-conversion": { src: "/images/Garage-Conversion-in-Canterbury.jpg", alt: "Garage Conversion Canterbury" },
  "roofing": { src: "/images/Professional-roofing-service-in-Canterbury-Kent.jpg", alt: "Roofing Canterbury" },
  "home-office-conversion": { src: "/images/Home-office-creation-Canterbury-Kent.jpg", alt: "Home Office Canterbury" },
  "cinema-room-installation": { src: "/images/Cinema-Rooms-in-Kent.jpg", alt: "Cinema Rooms Kent" },
  "driveways-paving": { src: "/images/Driveway-paving-in-Canterbury-Kent.jpg", alt: "Driveways & Paving Canterbury" },
};


export const metadata: Metadata = {
  title: "Areas We Serve in Kent | Building Services Near You",
  description:
    "Superstructure Services covers Canterbury and 21 towns and villages across Kent. Find building, renovation and trade services in your area.",
  alternates: { canonical: `${DOMAIN}/areas-we-serve` },
  openGraph: {
    title: "Areas We Serve in Kent | Superstructure Services",
    description:
      "Building and trade services across Canterbury and the wider Kent area. Find your local Superstructure Services team.",
    url: `${DOMAIN}/areas-we-serve`,
  },
};

export default function AreasWeServePage() {
  return (
    <>
      <PageHero
        title="Areas We Serve Across Kent"
        subtitle="Based in Canterbury, we deliver professional building and trade services to homes and businesses throughout the surrounding Kent towns and villages."
        breadcrumbs={[{ label: "Areas We Serve" }]}
        badge="Kent Coverage"
      />

      {/* Areas grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Areas We Cover
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Click any area to see all available building and trade services, local information
              and a map. We operate across {AREAS.length} areas in and around Canterbury.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas-we-serve/${area.slug}`}
                className="group relative flex flex-col bg-white border border-gray-100 hover:border-[#1e3a5f]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Area photo */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={`/images/areas/builders-in-${area.slug}-kent.jpg`}
                    alt={`Builders in ${area.name}, Kent`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 right-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/80 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full capitalize">
                    {area.type}
                  </span>
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-bold text-[#0d1b2e] text-lg mb-0.5 group-hover:text-[#1e3a5f] transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs text-[#4a9ebb] font-semibold mb-3">{area.county}</p>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {area.description}
                  </p>
                </div>
                <div className="px-5 pb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-300 group-hover:text-[#4a9ebb] transition-colors duration-300">View Area</span>
                  <div className="w-8 h-8 rounded-full border border-gray-100 group-hover:border-[#4a9ebb] group-hover:bg-[#4a9ebb]/8 flex items-center justify-center transition-all duration-300">
                    <ArrowRight size={14} className="text-gray-300 group-hover:text-[#4a9ebb] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Services Available Across All Areas
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Every service we offer is available across all {AREAS.length} areas we cover.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {SERVICES.map((s) => {
              const photo = SERVICE_PHOTOS[s.slug];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.canonicalSlug.replace("services/", "")}`}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  {photo ? (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#1a2e44]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-white font-semibold text-xs leading-tight line-clamp-2">
                      {s.shortName}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        heading="Can't Find Your Area?"
        subheading="We may still be able to help. Contact us directly and we'll let you know if we can cover your location in Kent."
      />
    </>
  );
}
