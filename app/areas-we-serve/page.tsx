import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
                className="group relative flex flex-col bg-white border border-gray-100 hover:border-[#1e3a5f]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#4a9ebb] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0d1b2e] group-hover:bg-[#1e3a5f] transition-colors flex items-center justify-center">
                      <span className="text-white text-lg">📍</span>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-300 capitalize">{area.type}</span>
                  </div>
                  <h3 className="font-bold text-[#0d1b2e] text-lg mb-1 group-hover:text-[#1e3a5f] transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs text-[#4a9ebb] font-semibold mb-3">{area.county}</p>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {area.description}
                  </p>
                </div>
                <div className="px-6 pb-5 flex items-center justify-between">
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
