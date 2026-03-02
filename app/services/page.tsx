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

const SERVICE_PHOTOS: Record<string, string> = {
  "kitchen-installation": "/images/kitchen-installation.jpg",
  "flooring-underfloor-heating": "/images/underfloor-heating.jpg",
  "facility-building-management": "/images/facilities-management.jpg",
  "electrician": "/images/electrician.jpg",
  "air-source-heat-pump": "/images/air-source-heat-pump.jpg",
  "solar-panel-installation": "/images/solar-panels.jpg",
  "air-conditioning": "/images/air-conditioning.jpg",
  "new-bathroom": "/images/bathroom.jpg",
  "property-refurbishment": "/images/property-refurbishment.jpg",
  "plumbing-drainage": "/images/plumbing.jpg",
  "carpentry": "/images/carpentry.jpg",
  "garage-workshop-conversion": "/images/garage-conversion.jpg",
  "roofing": "/images/roofing.jpg",
  "home-office-conversion": "/images/home-office.jpg",
  "cinema-room-installation": "/images/cinema-room.jpg",
  "driveways-paving": "/images/driveways-paving.jpg",
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
                    style={{ backgroundImage: `url('${photo}')` }}
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
