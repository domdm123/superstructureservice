import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, MapPin, ChevronDown } from "lucide-react";
import { SERVICES, PHONE, EMAIL, DOMAIN } from "@/lib/services";
import { AREAS } from "@/lib/areas";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import TrustBadges from "@/components/TrustBadges";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceGallery from "@/components/ServiceGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({
    slug: s.canonicalSlug.replace("services/", ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find(
    (s) => s.canonicalSlug.replace("services/", "") === slug
  );
  if (!service) return {};
  const canonical = `${DOMAIN}/services/${service.canonicalSlug.replace("services/", "")}`;
  const ogImage = service.heroImage
    ? `${DOMAIN}${service.heroImage}`
    : `${DOMAIN}/images/og-image.jpg`;

  return {
    title: `${service.name} in Canterbury, Kent | Superstructure Services`,
    description: service.metaDescription.replace(/{location}/g, "Canterbury"),
    alternates: { canonical },
    openGraph: {
      title: `${service.name} in Canterbury, Kent | Superstructure Services`,
      description: service.metaDescription.replace(/{location}/g, "Canterbury"),
      url: canonical,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${service.name} in Canterbury, Kent` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} in Canterbury | Superstructure Services`,
      description: service.metaDescription.replace(/{location}/g, "Canterbury"),
      images: [ogImage],
    },
    other: {
      "geo.region": "GB-KEN",
      "geo.placename": "Canterbury",
      "geo.position": "51.2802;1.0780",
      "ICBM": "51.2802, 1.0780",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find(
    (s) => s.canonicalSlug.replace("services/", "") === slug
  );
  if (!service) notFound();

  const serviceCanonical = `${DOMAIN}/services/${service.canonicalSlug.replace("services/", "")}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in Canterbury`,
    description: service.metaDescription.replace(/{location}/g, "Canterbury"),
    url: serviceCanonical,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${DOMAIN}/#organization`,
      name: "Superstructure Services",
      telephone: PHONE,
      email: EMAIL,
      url: DOMAIN,
      address: {
        "@type": "PostalAddress",
        streetAddress: "67 Canterbury Innovation Centre",
        addressLocality: "Canterbury",
        addressRegion: "Kent",
        postalCode: "CT2 7FG",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.2802,
        longitude: 1.078,
      },
    },
    areaServed: [
      { "@type": "City", name: "Canterbury" },
      { "@type": "AdministrativeArea", name: "Kent" },
    ],
    serviceType: service.name,
  };

  const faqSchema = service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Services", item: `${DOMAIN}/services` },
      { "@type": "ListItem", position: 3, name: `${service.shortName} in Canterbury`, item: serviceCanonical },
    ],
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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <PageHero
        title={`${service.name} in Canterbury, Kent`}
        subtitle={service.tagline}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.shortName },
        ]}
        heroImage={service.heroImage}
        ctaHref={`mailto:${EMAIL}?subject=${encodeURIComponent(`${service.name} enquiry - Superstructure Services`)}`}
      />

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e44] mb-6">
                {service.name} Services in Canterbury &amp; Kent
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                {service.description}
              </p>

              <h3 className="text-xl font-bold text-[#1a2e44] mb-5">
                Our {service.shortName} Expertise
              </h3>
              <ul className="flex flex-col gap-4 mb-10">
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

              {/* Service Gallery */}
              <ServiceGallery serviceSlug={service.slug} />

              {/* Areas for this service */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#1a2e44] mb-2 flex items-center gap-2">
                  <MapPin size={20} className="text-[#4a9ebb]" />
                  {service.shortName} Available Across Kent
                </h3>
                <p className="text-gray-600 text-sm mb-5">
                  We provide {service.shortName.toLowerCase()} services throughout Canterbury and
                  the surrounding Kent villages and towns.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/${service.slug}/${area.slug}`}
                      className="px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm text-[#1a2e44] hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] transition-all text-center font-medium"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-[#1a2e44] rounded-2xl p-8 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    Interested in our {service.shortName.toLowerCase()} service? Contact us today
                    for a free, no-obligation quote.
                  </p>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(`${service.name} enquiry - Superstructure Services`)}`}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-all mb-3 w-full"
                  >
                    Request a Quote <ArrowRight size={16} />
                  </a>
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all w-full"
                  >
                    <Phone size={16} /> {PHONE}
                  </a>
                </div>

                {/* Other services */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#1a2e44] mb-4">Other Services</h4>
                  <ul className="flex flex-col gap-2">
                    {SERVICES.filter((s) => s.slug !== service.slug)
                      .slice(0, 8)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.canonicalSlug.replace("services/", "")}`}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#4a9ebb] transition-colors"
                          >
                            <ArrowRight size={13} className="text-[#4a9ebb]" />
                            {s.shortName}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.faqs.length > 0 && (
        <FaqAccordion faqs={service.faqs} heading={`${service.shortName} — Frequently Asked Questions`} />
      )}
      <TrustBadges />
      <CTASection
        heading={`Ready for your ${service.shortName.toLowerCase()} project?`}
        subheading={`Contact our Canterbury-based team today for a free, no-obligation quote on your ${service.shortName.toLowerCase()} project anywhere in Kent.`}
        ctaSubject={`${service.name} enquiry - Superstructure Services`}
        backgroundImage={service.heroImage}
      />
    </>
  );
}
