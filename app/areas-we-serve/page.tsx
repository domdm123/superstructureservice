import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AREAS } from "@/lib/areas";
import { SERVICES, DOMAIN } from "@/lib/services";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const AREA_PHOTOS: Record<string, { src: string; alt: string }> = {
  "canterbury": { src: "/images/areas/builders-in-canterbury-kent.jpg", alt: "Builders in Canterbury Kent" },
  "harbledown": { src: "/images/areas/builders-in-harbledown-kent.jpg", alt: "Builders in Harbledown Kent" },
  "blean": { src: "/images/areas/builders-in-blean-kent.jpg", alt: "Builders in Blean Kent" },
  "sturry": { src: "/images/areas/builders-in-sturry-kent.jpg", alt: "Builders in Sturry Kent" },
  "bridge": { src: "/images/areas/builders-in-bridge-kent.jpg", alt: "Builders in Bridge Kent" },
  "barham": { src: "/images/areas/builders-in-barham-kent.jpg", alt: "Builders in Barham Kent" },
  "bekesbourne": { src: "/images/areas/builders-in-bekesbourne-kent.jpg", alt: "Builders in Bekesbourne Kent" },
  "wickhambreaux": { src: "/images/areas/builders-in-wickhambreaux-kent.jpg", alt: "Builders in Wickhambreaux Kent" },
  "wingham": { src: "/images/areas/builders-in-wingham-kent.jpg", alt: "Builders in Wingham Kent" },
  "fordwich": { src: "/images/areas/builders-in-fordwich-kent.jpg", alt: "Builders in Fordwich Kent" },
  "chartham": { src: "/images/areas/builders-in-chartham-kent.jpg", alt: "Builders in Chartham Kent" },
  "adisham": { src: "/images/areas/builders-in-adisham-kent.jpg", alt: "Builders in Adisham Kent" },
  "littlebourne": { src: "/images/areas/builders-in-littlebourne-kent.jpg", alt: "Builders in Littlebourne Kent" },
  "ickham": { src: "/images/areas/builders-in-ickham-kent.jpg", alt: "Builders in Ickham Kent" },
  "petham": { src: "/images/areas/builders-in-petham-kent.jpg", alt: "Builders in Petham Kent" },
  "waltham": { src: "/images/areas/builders-in-waltham-kent.jpg", alt: "Builders in Waltham Kent" },
  "whitstable": { src: "/images/areas/builders-in-whitstable-kent.jpg", alt: "Builders in Whitstable Kent" },
  "faversham": { src: "/images/areas/builders-in-faversham-kent.jpg", alt: "Builders in Faversham Kent" },
  "wye": { src: "/images/areas/builders-in-wye-kent.jpg", alt: "Builders in Wye Kent" },
  "sandwich": { src: "/images/areas/builders-in-sandwich-kent.jpg", alt: "Builders in Sandwich Kent" },
  "folkestone": { src: "/images/areas/builders-in-folkestone-kent.jpg", alt: "Builders in Folkestone Kent" },
  "chilham": { src: "/images/areas/builders-in-chilham-kent.jpg", alt: "Builders in Chilham Kent" },
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
            {AREAS.map((area) => {
              const photo = AREA_PHOTOS[area.slug];
              return (
                <Link
                  key={area.slug}
                  href={`/areas-we-serve/${area.slug}`}
                  className="group relative overflow-hidden rounded-2xl h-56 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Background photo */}
                  {photo && (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-50"
                      style={{ backgroundImage: `url('${photo.src}')` }}
                      role="img"
                      aria-label={photo.alt}
                    />
                  )}
                  {/* Base colour so cards without photos look good */}
                  <div className="absolute inset-0 bg-[#1a2e44]" style={{ zIndex: photo ? -1 : 0 }} />
                  {/* Gradient overlay — darkens bottom for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <span className="self-end bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full capitalize border border-white/20">
                      {area.type}
                    </span>
                    <div>
                      <div className="flex items-end justify-between mb-1">
                        <h3 className="font-bold text-white text-xl leading-tight">
                          {area.name}
                        </h3>
                        <ArrowRight size={18} className="text-white/70 group-hover:text-[#4a9ebb] group-hover:translate-x-1 transition-all flex-shrink-0 mb-0.5" />
                      </div>
                      <p className="text-white/70 text-xs mb-3">{area.county}</p>
                      <p className="text-white/60 text-xs leading-relaxed line-clamp-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
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
