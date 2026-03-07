import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, MapPin } from "lucide-react";
import { SERVICES, PHONE, EMAIL, DOMAIN } from "@/lib/services";
import { AREAS } from "@/lib/areas";
import { generateServiceLocationIntro, generateWhyChooseUsLocal, getLocationContext } from "@/lib/location-content";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import MapEmbed from "@/components/MapEmbed";
import ServiceGallery from "@/components/ServiceGallery";

interface Props {
  params: Promise<{ service: string; location: string }>;
}

export async function generateStaticParams() {
  const params: { service: string; location: string }[] = [];
  for (const service of SERVICES) {
    for (const area of AREAS) {
      // Canterbury uses canonical URLs — skip generating dynamic pages for it
      if (area.slug === 'canterbury') continue;
      params.push({ service: service.slug, location: area.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, location: locationSlug } = await params;
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const area = AREAS.find((a) => a.slug === locationSlug);
  if (!service || !area) return {};

  const title = service.metaTitle.replace(/{location}/g, area.name);
  const description = service.metaDescription.replace(/{location}/g, area.name);
  const canonical = `${DOMAIN}/${service.slug}/${area.slug}`;

  const ogImage = service.heroImage
    ? `${DOMAIN}${service.heroImage}`
    : `${DOMAIN}/images/og-image.jpg`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${service.name} in ${area.name}, Kent` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    other: {
      "geo.region": "GB-KEN",
      "geo.placename": area.name,
      "geo.position": `${area.lat};${area.lng}`,
      "ICBM": `${area.lat}, ${area.lng}`,
    },
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const { service: serviceSlug, location: locationSlug } = await params;
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const area = AREAS.find((a) => a.slug === locationSlug);
  if (!service || !area) notFound();

  const pageTitle = `${service.name} in ${area.name}, ${area.county}`;

  const canonical = `${DOMAIN}/${service.slug}/${area.slug}`;
  const locationContext = getLocationContext(area);
  const faqs = [
    {
      q: `Do you provide ${service.shortName.toLowerCase()} services in ${area.name}?`,
      a: `Yes, Superstructure Services provides professional ${service.shortName.toLowerCase()} services throughout ${area.name} and the surrounding ${area.county} area. We are based in Canterbury and regularly work across all of East Kent. Contact us for a free quote.`,
    },
    {
      q: `How much does ${service.shortName.toLowerCase()} cost in ${area.name}?`,
      a: `The cost of ${service.shortName.toLowerCase()} in ${area.name} depends on the scope, size and specification of your project. We provide free, detailed and itemised quotes with no hidden costs. Contact us today to discuss your requirements.`,
    },
    {
      q: `How far is ${area.name} from your base in Canterbury?`,
      a: `Our team is based in Canterbury, ${area.county} and ${area.name} is within our core service area. We cover all areas within and surrounding Canterbury, ensuring prompt response times and local knowledge of your area.`,
    },
    {
      q: `What types of properties do you usually work on in ${area.name}?`,
      a: `We regularly work on ${locationContext.propertyTypes.join(", ")} in ${area.name}. Because the area includes ${locationContext.characteristics.join(", ")}, we tailor each project to the age, construction method and setting of the property rather than taking a one-size-fits-all approach.`,
    },
    {
      q: `Can you adapt your ${service.shortName.toLowerCase()} work to older or period homes in ${area.name}?`,
      a: `Yes. Many homes in ${area.name} are period or character properties, so we plan our ${service.shortName.toLowerCase()} work carefully around existing structure, materials, access and any conservation considerations. That allows us to improve comfort, performance and appearance without compromising the character of the building.`,
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${area.name}`,
    description: service.metaDescription.replace(/{location}/g, area.name),
    url: canonical,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${DOMAIN}/#organization`,
      name: "Superstructure Services",
      telephone: PHONE,
      url: DOMAIN,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Canterbury",
        addressRegion: "Kent",
        postalCode: "CT2 7FG",
        addressCountry: "GB",
      },
    },
    areaServed: {
      "@type": "Place",
      name: area.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: area.lat,
        longitude: area.lng,
      },
      containedInPlace: { "@type": "AdministrativeArea", name: "Kent" },
    },
    serviceType: service.name,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} in ${area.name}`,
      itemListElement: service.features.map((feature, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: feature.split("–")[0].trim(),
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Services", item: `${DOMAIN}/services` },
      { "@type": "ListItem", position: 3, name: service.shortName, item: `${DOMAIN}/services/${service.canonicalSlug.replace("services/", "")}` },
      { "@type": "ListItem", position: 4, name: area.name, item: canonical },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        title={pageTitle}
        subtitle={`${service.tagline} — serving ${area.name} and surrounding ${area.county} villages.`}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          {
            label: service.shortName,
            href: `/services/${service.canonicalSlug.replace("services/", "")}`,
          },
          { label: area.name },
        ]}
        badge={`${service.shortName} · ${area.name}`}
        heroImage={service.heroImage}
      />

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main column */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Intro */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e44] mb-5">
                  {service.shortName} Services in {area.name}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  {service.description}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {generateServiceLocationIntro(service, area)}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {area.description} Our experienced team serves {area.name} with the same commitment to quality and attention to detail that has built our reputation across Kent.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#1a2e44] mb-4">
                  Property Types & Building Character in {area.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {locationContext.propertySummary}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  That is why our work in {area.name} is planned around the actual building type involved — whether that means sensitive upgrades to {locationContext.propertyTypes[0]}, practical improvements in {locationContext.propertyTypes[1] || "family homes"}, or modernisation work in newer residential properties.
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-bold text-[#1a2e44] mb-5">
                  Our {service.shortName} Services in {area.name}
                </h3>
                <ul className="flex flex-col gap-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <CheckCircle
                        size={20}
                        className="text-[#4a9ebb] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Gallery */}
              <h3 className="text-xl font-bold text-[#1a2e44] mb-5">
                Our Related Projects
              </h3>
              <ServiceGallery serviceSlug={service.slug} />

              {/* Why choose us local */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#1a2e44] mb-4">
                  Why customers in {area.name} choose us
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  {generateWhyChooseUsLocal(area)}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Local Canterbury team",
                    "Fully insured & accredited",
                    "Free no-obligation quotes",
                    "All trades under one roof",
                    "Transparent pricing",
                    "Gas Safe & NICEIC approved",
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-[#4a9ebb] flex-shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-xl font-bold text-[#1a2e44] mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-[#4a9ebb]" />
                  Serving {area.name}, {area.county}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Learn more about {area.name} from{" "}
                  <a
                    href={locationContext.externalLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a9ebb] font-medium hover:underline"
                  >
                    {locationContext.externalLink.label}
                  </a>
                  .
                </p>
                <MapEmbed embedUrl={area.mapEmbed} title={area.name} lat={area.lat} lng={area.lng} />
                {area.nearbyAreas.length > 0 && (
                  <p className="mt-4 text-sm text-gray-500">
                    We also cover nearby areas including{" "}
                    {area.nearbyAreas.join(", ")} and the wider Kent region.
                  </p>
                )}
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-xl font-bold text-[#1a2e44] mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="flex flex-col gap-5">
                  {faqs.map((faq) => (
                    <div
                      key={faq.q}
                      className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm"
                    >
                      <h4 className="font-bold text-[#1a2e44] mb-2">{faq.q}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other services in this area */}
              <div>
                <h3 className="text-xl font-bold text-[#1a2e44] mb-4">
                  Other services we offer in {area.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {SERVICES.filter((s) => s.slug !== service.slug).map((s) => {
                    const href = area.slug === 'canterbury'
                      ? `/${s.canonicalSlug}`
                      : `/${s.slug}/${area.slug}`;
                    return (
                      <Link
                        key={s.slug}
                        href={href}
                        className="flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium text-[#1a2e44] hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] transition-all"
                      >
                        <span>{s.icon}</span> {s.shortName}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 flex flex-col gap-6">
                {/* Quote CTA */}
                <div className="bg-[#1a2e44] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {service.shortName} in {area.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6">
                    Get a free, no-obligation quote for your{" "}
                    {service.shortName.toLowerCase()} project in {area.name}.
                  </p>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(`${service.name} in ${area.name} - Superstructure Services`)}`}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-all mb-3 w-full"
                  >
                    Get a Free Quote <ArrowRight size={16} />
                  </a>
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all w-full"
                  >
                    <Phone size={16} /> {PHONE}
                  </a>
                </div>

                {/* Service in other nearby areas */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#1a2e44] mb-1">
                    {service.shortName} Nearby
                  </h4>
                  <p className="text-xs text-gray-500 mb-4">
                    We also offer {service.shortName.toLowerCase()} in nearby areas:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {area.nearbyAreas.map((nearbyName) => {
                      const nearbyArea = AREAS.find(
                        (a) => a.name.toLowerCase() === nearbyName.toLowerCase()
                      );
                      return nearbyArea ? (
                        <li key={nearbyArea.slug}>
                          <Link
                            href={nearbyArea.slug === 'canterbury' ? `/${service.canonicalSlug}` : `/${service.slug}/${nearbyArea.slug}`}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#4a9ebb] transition-colors"
                          >
                            <ArrowRight size={13} className="text-[#4a9ebb]" />
                            {nearbyArea.name}
                          </Link>
                        </li>
                      ) : null;
                    })}
                    <li>
                      <Link
                        href="/areas-we-serve"
                        className="flex items-center gap-2 text-sm text-[#4a9ebb] font-semibold hover:underline"
                      >
                        <ArrowRight size={13} />
                        All areas we cover
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Accreditations */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-[#1a2e44] mb-4">Our Accreditations</h4>
                  <ul className="flex flex-col gap-2 text-sm text-gray-600">
                    {["Gas Safe Registered", "NICEIC Approved", "MCS Accredited", "Fully Insured", "DDA Compliant"].map(
                      (acc) => (
                        <li key={acc} className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-[#4a9ebb]" />
                          {acc}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      <CTASection
        heading={`Start your ${service.shortName.toLowerCase()} project in ${area.name}`}
        subheading={`Contact our Canterbury-based team today for a free, no-obligation quote. We cover ${area.name} and all of ${area.county}.`}
        ctaSubject={`${service.name} in ${area.name} - Superstructure Services`}
        backgroundImage={service.heroImage}
      />
    </>
  );
}
