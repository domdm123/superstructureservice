import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { AREAS } from "@/lib/areas";
import { SERVICES, DOMAIN, PHONE } from "@/lib/services";

import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import MapEmbed from "@/components/MapEmbed";
import ServiceCard from "@/components/ServiceCard";

const AREAS_WITH_PHOTOS = new Set([
  "adisham", "barham", "bekesbourne", "blean", "bridge",
  "canterbury", "chartham", "chilham", "faversham", "folkestone",
  "fordwich", "harbledown", "ickham", "littlebourne", "petham",
  "sandwich", "sturry", "waltham", "whitstable", "wickhambreaux",
  "wingham", "wye",
  "maidstone", "deal", "broadstairs", "ramsgate", "ashford",
]);

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `Building Services in ${area.name}, ${area.county} | Superstructure Services`,
    description: `Professional builders and contractors in ${area.name}, Kent. Kitchen fitting, roofing, electrical, plumbing and more. Superstructure Services — local Canterbury team.`,
    alternates: { canonical: `${DOMAIN}/areas-we-serve/${area.slug}` },
    openGraph: {
      title: `Building Services in ${area.name} | Superstructure Services`,
      description: `Expert builders in ${area.name}, Kent. All building and trade services from a local Canterbury team. Free quotes available.`,
      url: `${DOMAIN}/areas-we-serve/${area.slug}`,
      images: [{ url: `${DOMAIN}/images/og-image.jpg`, width: 1200, height: 630, alt: `Builders in ${area.name}, Kent` }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `Building Services in ${area.name} | Superstructure Services`,
      description: `Expert builders in ${area.name}, Kent. Free quotes available.`,
      images: [`${DOMAIN}/images/og-image.jpg`],
    },
    other: {
      "geo.region": "GB-KEN",
      "geo.placename": area.name,
      "geo.position": "51.2802;1.0780",
      "ICBM": "51.2802, 1.0780",
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Superstructure Services",
    description: `Professional builders and contractors serving ${area.name}, ${area.county}`,
    telephone: PHONE,
    url: DOMAIN,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Canterbury",
      addressRegion: "Kent",
      addressCountry: "GB",
    },
    areaServed: [
      { "@type": "City", name: "Canterbury" },
      { "@type": "Place", name: area.name },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <PageHero
        title={`Building Services in ${area.name}, ${area.county}`}
        subtitle={`Professional builders and contractors serving ${area.name} and the surrounding area. Based in Canterbury, our team delivers premium building services across East Kent.`}
        breadcrumbs={[
          { label: "Areas We Serve", href: "/areas-we-serve" },
          { label: area.name },
        ]}
        badge={`${area.name}, ${area.county}`}
        heroImage={AREAS_WITH_PHOTOS.has(area.slug) ? `/images/areas/builders-in-${area.slug}-kent.jpg` : undefined}
      />

      {/* About the area + map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e44] mb-5">
                Builders &amp; Contractors in {area.name}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {area.description}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {area.secondParagraph}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Free no-obligation quotes",
                  "All trades under one roof",
                  "Gas Safe & NICEIC approved",
                  "MCS accredited installers",
                  "Fully insured team",
                  "Local Canterbury-based",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-[#4a9ebb] flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
              {area.nearbyAreas.length > 0 && (
                <p className="text-sm text-gray-500">
                  We also cover nearby areas including{" "}
                  {area.nearbyAreas.map((name, i) => {
                    const nearby = AREAS.find(
                      (a) => a.name.toLowerCase() === name.toLowerCase()
                    );
                    return nearby ? (
                      <span key={name}>
                        <Link
                          href={`/areas-we-serve/${nearby.slug}`}
                          className="text-[#e8a020] hover:underline"
                        >
                          {nearby.name}
                        </Link>
                        {i < area.nearbyAreas.length - 1 ? ", " : ""}
                      </span>
                    ) : (
                      <span key={name}>
                        {name}
                        {i < area.nearbyAreas.length - 1 ? ", " : ""}
                      </span>
                    );
                  })}
                  .
                </p>
              )}
            </div>
            <div>
              <MapEmbed embedUrl={area.mapEmbed} title={area.name} lat={area.lat} lng={area.lng} />
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={14} className="text-[#4a9ebb]" />
                {area.name}, {area.county} — within our Canterbury service area
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
              Available in {area.name}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              All Building Services in {area.name}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every service we offer is available to homeowners and businesses in {area.name}.
              Click any service for more details and a free quote.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} location={area.slug} />
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Other areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Other Areas We Serve in Kent
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {AREAS.filter((a) => a.slug !== area.slug).map((a) => (
              <Link
                key={a.slug}
                href={`/areas-we-serve/${a.slug}`}
                className="flex items-center justify-center px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all text-center"
              >
                {a.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/areas-we-serve"
              className="inline-flex items-center gap-2 text-[#4a9ebb] font-semibold hover:underline text-sm"
            >
              View All Areas <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading={`Get a free quote in ${area.name}`}
        subheading={`Our Canterbury-based team is ready to help with any building project in ${area.name}. Contact us today for a free, no-obligation quote.`}
        ctaSubject={`Building Services enquiry in ${area.name} - Superstructure Services`}
      />
    </>
  );
}
