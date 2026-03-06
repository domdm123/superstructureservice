import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { SERVICES, PHONE, DOMAIN } from "@/lib/services";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import ServiceGallery from "@/components/ServiceGallery";

export const metadata: Metadata = {
  title: "Rental Property Maintenance in Canterbury & Kent | Superstructure Services",
  description:
    "Reliable rental property maintenance in Canterbury, Kent. Landlord EICR reports, boiler servicing, repairs and full property upkeep by Superstructure Services.",
  alternates: { canonical: `${DOMAIN}/services/rental-property-maintenence-canterbury` },
};

export default function RentalPropertyMaintenancePage() {
  return (
    <>
      <PageHero
        title="Rental Property Maintenance in Canterbury & Kent"
        subtitle="Reliable, professional property maintenance for landlords and letting agents across Canterbury and Kent. All trades covered, all compliance handled."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Rental Property Maintenance" },
        ]}
        badge="🏠 Landlord Services"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e44] mb-6">
                Rental Property Maintenance Services in Canterbury
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                As a landlord or letting agent in Canterbury and Kent, keeping your rental
                properties in excellent condition is essential — both for tenant satisfaction and
                legal compliance. Superstructure Services provides a comprehensive property
                maintenance service for rental properties, covering everything from routine
                repairs to full refurbishments between tenancies.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our team is Gas Safe registered, NICEIC approved and fully insured, giving you
                complete confidence that all work meets current safety standards. We&apos;re
                experienced in coordinating works across multiple properties and managing
                timelines to minimise void periods.
              </p>

              <h3 className="text-xl font-bold text-[#1a2e44] mb-5">What We Cover</h3>
              <ul className="flex flex-col gap-4 mb-10">
                {[
                  "EICR (Electrical Installation Condition Reports) for landlords",
                  "Gas safety certificates and boiler servicing",
                  "Plumbing repairs, leaks and drainage clearance",
                  "Decorating and plastering between tenancies",
                  "Kitchen and bathroom refurbishments",
                  "Flooring replacement and repairs",
                  "Roofing repairs and maintenance",
                  "Carpentry, joinery and general repairs",
                  "Full property refurbishments for re-letting",
                  "Multi-property maintenance contracts",
                ].map((f) => (
                  <li key={f} className="flex gap-3">
                    <CheckCircle size={20} className="text-[#1e3a5f] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <ServiceGallery serviceSlug="rental-property-maintenance" />
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 flex flex-col gap-6">
                <div className="bg-[#1a2e44] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Landlord Enquiry</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    Looking for a reliable maintenance partner for your rental properties in
                    Canterbury or Kent?
                  </p>
                  <a
                    href="mailto:enquiries@superstructureservices.co.uk?subject=Rental%20Property%20Maintenance%20Enquiry%20-%20Superstructure%20Services"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-all mb-3 w-full"
                  >
                    Get in Touch <ArrowRight size={16} />
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
        heading="Need a rental property maintained?"
        subheading="Contact our Canterbury-based team for a free consultation on maintaining your rental properties across Kent."
      />
    </>
  );
}
