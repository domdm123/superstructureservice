import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { SERVICES, PHONE, DOMAIN } from "@/lib/services";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import ServiceGallery from "@/components/ServiceGallery";

export const metadata: Metadata = {
  title: "Listed Building Restoration in Canterbury & Kent | Superstructure Services",
  description:
    "Specialist listed building restoration in Canterbury, Kent. Sympathetic renovation of Grade I and Grade II listed properties by experienced local builders.",
  alternates: { canonical: `${DOMAIN}/services/listed-building-restoration-canterbury` },
};

export default function ListedBuildingRestorationPage() {
  return (
    <>
      <PageHero
        title="Listed Building Restoration in Canterbury & Kent"
        subtitle="Specialist restoration and renovation services for Grade I and Grade II listed properties across Canterbury and the wider Kent area."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Listed Building Restoration" },
        ]}
        badge="🏛️ Heritage Specialists"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e44] mb-6">
                Listed Building Restoration Specialists in Canterbury
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Canterbury and the wider Kent area is home to a remarkable number of historic
                and listed buildings — from medieval city centre properties to Georgian farmhouses
                and Victorian villas. Superstructure Services has extensive experience working on
                Grade I and Grade II listed properties, carrying out sympathetic restorations that
                preserve the character and integrity of these irreplaceable buildings.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                We work closely with conservation officers, local planning authorities and
                specialist material suppliers to ensure all works are carried out in strict
                accordance with listed building consent requirements. Our experienced tradespeople
                use period-appropriate materials and techniques wherever required.
              </p>

              <h3 className="text-xl font-bold text-[#1a2e44] mb-5">
                Our Listed Building Services
              </h3>
              <ul className="flex flex-col gap-4 mb-10">
                {[
                  "Grade I and Grade II listed building restoration",
                  "Liaison with conservation officers and local planning authorities",
                  "Period-appropriate roofing — clay peg tiles, slate, lime mortar",
                  "Traditional masonry, brickwork and stonework repairs",
                  "Lime plastering and specialist decorative finishes",
                  "Bespoke timber joinery and carpentry to match originals",
                  "Sympathetic kitchen and bathroom installations",
                  "Structural repairs and underpinning",
                  "Energy efficiency improvements within conservation guidelines",
                  "Full project management from consent to completion",
                ].map((f) => (
                  <li key={f} className="flex gap-3">
                    <CheckCircle size={20} className="text-[#1e3a5f] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <ServiceGallery serviceSlug="listed-building-restoration" />
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 flex flex-col gap-6">
                <div className="bg-[#1a2e44] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Listed Building Enquiry</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    Working on a listed building in Canterbury or Kent? Contact our heritage
                    specialists for expert advice and a free quote.
                  </p>
                  <a
                    href="mailto:enquiries@superstructureservices.co.uk?subject=Listed%20Building%20Restoration%20Enquiry%20-%20Superstructure%20Services"
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
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#1a2e44] mb-4">Related Services</h4>
                  <ul className="flex flex-col gap-2">
                    {SERVICES.slice(0, 8).map((s) => (
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
        heading="Listed Building Specialists in Canterbury & Kent"
        subheading="Contact our experienced team for sensitive, compliant restoration of your historic or listed property."
      />
    </>
  );
}
