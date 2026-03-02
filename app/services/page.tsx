import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, DOMAIN } from "@/lib/services";
import { AREAS } from "@/lib/areas";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import ServiceCard from "@/components/ServiceCard";

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

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Building Services in Canterbury & Kent"
        subtitle="We partner with you to be your trusted building service in Canterbury and across Kent. A complete range of building and trade services — all under one roof."
        breadcrumbs={[{ label: "Services" }]}
        badge="🔨 All Trades"
      />

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1a2e44] mb-4">
              All Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From kitchen installations to solar panel fitting, every service we offer is backed
              by qualified professionals, full insurance and our commitment to quality.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Services by area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e44] mb-4">
              Find Services in Your Area
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              All our services are available across Canterbury and the surrounding Kent towns and villages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="font-bold text-[#1a2e44] text-lg">{service.shortName}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {AREAS.slice(0, 8).map((area) => (
                    <Link
                      key={area.slug}
                      href={`/${service.slug}/${area.slug}`}
                      className="text-xs px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-full text-gray-600 hover:bg-[#e8a020] hover:text-white hover:border-[#e8a020] transition-all"
                    >
                      {area.name}
                    </Link>
                  ))}
                  <span className="text-xs px-2.5 py-1 text-gray-400">
                    +{AREAS.length - 8} more
                  </span>
                </div>
                <Link
                  href={`/services/${service.canonicalSlug.replace("services/", "")}`}
                  className="inline-flex items-center gap-1.5 text-sm text-[#e8a020] font-semibold hover:underline"
                >
                  View service details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
