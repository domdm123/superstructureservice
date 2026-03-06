import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, MapPin } from "lucide-react";
import { SERVICES, PHONE, DOMAIN } from "@/lib/services";
import { AREAS } from "@/lib/areas";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import ServiceGallery from "@/components/ServiceGallery";

export const metadata: Metadata = {
  title: "New Bathroom Fitter in Canterbury | Bathroom Refurbishment Specialists",
  description:
    "Expert new bathroom fitters in Canterbury, Kent. Full bathroom design, supply and installation. Wet rooms, suites and refurbishments by Superstructure Services. Free quote.",
  alternates: { canonical: `${DOMAIN}/services/new-bathroom-fitter-canterbury` },
  openGraph: {
    title: "New Bathroom Fitter Canterbury | Superstructure Services",
    description:
      "Expert bathroom fitters in Canterbury, Kent. Full bathroom design, supply and installation. Free quote available.",
    url: `${DOMAIN}/services/new-bathroom-fitter-canterbury`,
  },
};

const service = SERVICES.find((s) => s.slug === "new-bathroom")!;

export default function NewBathroomPage() {
  return (
    <>
      <PageHero
        title="New Bathroom Fitter Service in Canterbury"
        subtitle="Expert bathroom fitting and refurbishment services in Canterbury and the wider Kent area. From modern wet rooms to classic suites — quality craftsmanship guaranteed."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "New Bathrooms" },
        ]}
        heroImage="/images/new-bathroom/bathroom-fitters-canterbury-hero.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e44] mb-6">
                Bathroom Fitting &amp; Refurbishment Services in Canterbury, Kent
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                With extensive experience in bathroom transformations, our team at Superstructure
                Services crafts stunning, functional bathrooms tailored to your vision. Whether
                it&apos;s a modern wet room or a classic suite, we blend expert craftsmanship with
                high-quality materials to deliver lasting results. We work closely with you to
                design spaces that suit your style and budget, ensuring compliance with all UK
                building regulations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                From small upgrades to full refurbishments, our bathroom fitters in Canterbury
                maintain your property&apos;s value and comfort. Contact us to future-proof your home
                with a bespoke new bathroom.
              </p>

              <h3 className="text-xl font-bold text-[#1a2e44] mb-5">
                Bathroom Installation Core Services
              </h3>
              <ul className="flex flex-col gap-4 mb-10">
                {[
                  "Full bathroom design, supply and installation",
                  "Wet rooms and walk-in shower enclosures",
                  "Classic and contemporary bathroom suites",
                  "Full tiling, waterproofing and plastering",
                  "Plumbing, waste connections and heating integration",
                  "Underfloor heating installation for bathrooms",
                  "Bespoke vanity units and storage solutions",
                  "Compliance with all UK building regulations",
                ].map((f) => (
                  <li key={f} className="flex gap-3">
                    <CheckCircle size={20} className="text-[#1e3a5f] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>

              <ServiceGallery serviceSlug="new-bathroom" />

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-8">
                <h3 className="text-xl font-bold text-[#1a2e44] mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-[#1e3a5f]" />
                  Available Across Kent
                </h3>
                <p className="text-gray-600 text-sm mb-5">
                  Our bathroom fitting service is available across Canterbury and all surrounding Kent areas.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/new-bathroom/${area.slug}`}
                      className="px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm text-[#1a2e44] hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] transition-all text-center font-medium"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 flex flex-col gap-6">
                <div className="bg-[#1a2e44] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    Interested in a new bathroom? Contact us for a free, no-obligation quote.
                  </p>
                  <a
                    href="mailto:enquiries@superstructureservices.co.uk?subject=New%20Bathroom%20Enquiry%20-%20Superstructure%20Services"
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
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#1a2e44] mb-4">Other Services</h4>
                  <ul className="flex flex-col gap-2">
                    {SERVICES.filter((s) => s.slug !== "new-bathroom")
                      .slice(0, 8)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.canonicalSlug.replace("services/", "")}`}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1e3a5f] transition-colors"
                          >
                            <ArrowRight size={13} className="text-[#1e3a5f]" />
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

      <TrustBadges />
      <CTASection
        heading="Ready for Your New Bathroom?"
        subheading="Contact our Canterbury-based team today for a free, no-obligation bathroom quote anywhere in Kent."
      />
    </>
  );
}
