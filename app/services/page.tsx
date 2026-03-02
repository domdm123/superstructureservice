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
  "kitchen-installation": "https://superstructureservices.co.uk/wp-content/uploads/2021/07/Kitchen-Installation-in-Canterbury-1.jpg",
  "flooring-underfloor-heating": "https://superstructureservices.co.uk/wp-content/uploads/2021/07/Underfloor-Heating-in-Canterbury-1.jpg",
  "facility-building-management": "https://superstructureservices.co.uk/wp-content/uploads/2025/07/Facilities-building-management-firm-in-Canterbury-Kent.jpg",
  "electrician": "https://superstructureservices.co.uk/wp-content/uploads/2025/07/home-electrician-in-canterbury-rewiring-fuse-metering-scaled.jpg",
  "air-source-heat-pump": "https://superstructureservices.co.uk/wp-content/uploads/2021/07/Air-source-heat-pumps-and-conditioning.jpg",
  "solar-panel-installation": "https://superstructureservices.co.uk/wp-content/uploads/2025/06/Solar-panel-installer-in-Canterbury-Kent.jpg",
  "air-conditioning": "https://superstructureservices.co.uk/wp-content/uploads/2025/07/air-con-service-installation-company-in-canterbury-scaled.jpg",
  "new-bathroom": "https://superstructureservices.co.uk/wp-content/uploads/2025/07/classic-modern-bathroom-refurbishment-service-canterbury.jpg",
  "property-refurbishment": "https://superstructureservices.co.uk/wp-content/uploads/2021/07/Property-maintanence-in-Canterbury-Kent.jpg",
  "plumbing-drainage": "https://superstructureservices.co.uk/wp-content/uploads/2021/07/Bathrooms-in-Canterbury.jpg",
  "carpentry": "https://superstructureservices.co.uk/wp-content/uploads/2021/07/Carpenter-in-Canterbury.jpeg",
  "garage-workshop-conversion": "https://superstructureservices.co.uk/wp-content/uploads/2021/07/Garage-Conversion-in-Canterbury.jpg",
  "roofing": "https://superstructureservices.co.uk/wp-content/uploads/2021/11/Professional-roofing-service-in-Canterbury-Kent.jpg",
  "home-office-conversion": "https://superstructureservices.co.uk/wp-content/uploads/2021/07/Home-office-creation-Canterbury-Kent-rotated.jpg",
  "cinema-room-installation": "https://superstructureservices.co.uk/wp-content/uploads/2021/07/Cinema-Rooms-in-Kent.jpg",
  "driveways-paving": "https://superstructureservices.co.uk/wp-content/uploads/2021/07/Driveway-paving-in-Canterbury-Kent-1.jpg",
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
