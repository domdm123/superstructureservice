import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { AREAS } from "@/lib/areas";
import { SERVICES, DOMAIN } from "@/lib/services";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

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
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#4a9ebb] transition-colors">
                        {area.name}
                      </h3>
                      <span className="text-xs text-gray-400 capitalize">{area.type} · {area.county}</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-[#4a9ebb] transition-colors mt-1" />
                </div>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {area.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {SERVICES.slice(0, 4).map((s) => (
                    <span
                      key={s.slug}
                      className="text-xs bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                    >
                      {s.shortName}
                    </span>
                  ))}
                  <span className="text-xs text-gray-400 font-medium px-2 py-0.5">
                    +{SERVICES.length - 4} more
                  </span>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.canonicalSlug.replace("services/", "")}`}
                className="flex items-center justify-center p-4 bg-white rounded-xl border border-gray-100 hover:border-[#4a9ebb] hover:shadow-sm transition-all text-center group"
              >
                <span className="text-xs font-medium text-gray-600 group-hover:text-[#4a9ebb] leading-tight">
                  {s.shortName}
                </span>
              </Link>
            ))}
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
