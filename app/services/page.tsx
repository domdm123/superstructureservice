import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, DOMAIN } from "@/lib/services";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Building Services in Canterbury & Kent | All Services",
  description:
    "Complete building and trade services in Canterbury, Kent. Kitchen installation, roofing, electrical, plumbing, solar panels, bathrooms, carpentry and more from Superstructure Services.",
  alternates: { canonical: `${DOMAIN}/services` },
  openGraph: {
    title: "All Building Services | Superstructure Services Canterbury",
    description:
      "Full range of building and trade services across Canterbury and Kent. All trades under one roof.",
    url: `${DOMAIN}/services`,
  },
};

const SERVICE_PHOTOS: Record<string, { src: string; alt: string }> = {
  "kitchen-installation": { src: "/images/Kitchen-Installation-in-Canterbury.jpg", alt: "Kitchen Installation in Canterbury" },
  "flooring-underfloor-heating": { src: "/images/Underfloor-Heating-in-Canterbury.jpg", alt: "Underfloor Heating in Canterbury" },
  "facility-building-management": { src: "/images/Facilities-building-management-firm-in-Canterbury-Kent.jpg", alt: "Facilities Building Management firm in Canterbury Kent" },
  "electrician": { src: "/images/home-electrician-in-canterbury-rewiring-fuse-metering.jpg", alt: "Home Electrician in Canterbury rewiring fuse metering" },
  "air-source-heat-pump": { src: "/images/Air-source-heat-pumps-and-conditioning.jpg", alt: "Air Source Heat Pumps and Conditioning Canterbury" },
  "solar-panel-installation": { src: "/images/Solar-panel-installer-in-Canterbury-Kent.jpg", alt: "Solar Panel Installer in Canterbury Kent" },
  "air-conditioning": { src: "/images/air-con-service-installation-company-in-canterbury.jpg", alt: "Air Con Service Installation Company in Canterbury" },
  "new-bathroom": { src: "/images/classic-modern-bathroom-refurbishment-service-canterbury.jpg", alt: "Classic Modern Bathroom Refurbishment Service Canterbury" },
  "property-refurbishment": { src: "/images/Property-maintanence-in-Canterbury-Kent.jpg", alt: "Property Maintenance in Canterbury Kent" },
  "plumbing-drainage": { src: "/images/Bathrooms-in-Canterbury.jpg", alt: "Bathrooms and Plumbing in Canterbury" },
  "carpentry": { src: "/images/Carpenter-in-Canterbury.jpg", alt: "Carpenter in Canterbury" },
  "garage-workshop-conversion": { src: "/images/Garage-Conversion-in-Canterbury.jpg", alt: "Garage Conversion in Canterbury" },
  "roofing": { src: "/images/Professional-roofing-service-in-Canterbury-Kent.jpg", alt: "Professional Roofing Service in Canterbury Kent" },
  "home-office-conversion": { src: "/images/Home-office-creation-Canterbury-Kent.jpg", alt: "Home Office Creation Canterbury Kent" },
  "cinema-room-installation": { src: "/images/Cinema-Rooms-in-Kent.jpg", alt: "Cinema Rooms in Kent" },
  "driveways-paving": { src: "/images/Driveway-paving-in-Canterbury-Kent.jpg", alt: "Driveway Paving in Canterbury Kent" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page title — matches old site minimal header */}
      <div className="py-12 text-center bg-white border-b border-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Services</h1>
      </div>

      {/* Photo card grid — 2 columns, large cards with overlay text */}
      <section className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {SERVICES.map((service) => {
            const photo = SERVICE_PHOTOS[service.slug];
            const href = `/services/${service.canonicalSlug.replace("services/", "")}`;
            return (
              <Link
                key={service.slug}
                href={href}
                className="group relative block overflow-hidden aspect-[4/3]"
              >
                {/* Background image */}
                {photo ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${photo.src}')` }}
                    role="img"
                    aria-label={photo.alt}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-700" />
                )}
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
                {/* Text */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h2 className="text-white font-bold text-2xl md:text-3xl leading-tight mb-2">
                    {service.name}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-sm">
                    {service.tagline}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
