import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, MapPin } from "lucide-react";
import { SERVICES, PHONE, DOMAIN } from "@/lib/services";
import { AREAS } from "@/lib/areas";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Facility Building Management in Canterbury & Kent | Superstructure Services",
  description:
    "Reliable facility building management in Canterbury, Kent. Planned & reactive maintenance, plumbing, gas, air conditioning and commercial electrical services.",
  alternates: { canonical: `${DOMAIN}/services/facility-building-management` },
  openGraph: {
    title: "Facility Building Management Canterbury | Superstructure Services",
    description:
      "Professional facilities building management in Canterbury and Kent. All trades covered under one roof.",
    url: `${DOMAIN}/services/facility-building-management`,
  },
};

const service = SERVICES.find((s) => s.slug === "facility-building-management")!;

const managedServices = [
  {
    title: "Planned Maintenance",
    desc: "Scheduled preventive maintenance programmes to keep your building systems running efficiently and to prevent costly breakdowns.",
  },
  {
    title: "Reactive Maintenance",
    desc: "Fast-response reactive maintenance for unexpected issues. Our team is on hand to resolve problems quickly and minimise disruption.",
  },
  {
    title: "Building Maintenance",
    desc: "Comprehensive building maintenance covering structural repairs, decorating, flooring, roofing and general upkeep.",
  },
  {
    title: "Plumbing & Gas",
    desc: "Gas Safe registered plumbers managing all plumbing, heating and gas systems for commercial and residential properties.",
  },
  {
    title: "Air Conditioning",
    desc: "F-Gas certified engineers for air conditioning servicing, maintenance, repairs and new installations.",
  },
  {
    title: "Commercial Electrical",
    desc: "NICEIC-approved commercial electrical services including testing, certification, repairs and new installations.",
  },
];

export default function FacilityBuildingManagementPage() {
  return (
    <>
      <PageHero
        title="Facility Building Management in Canterbury & Kent"
        subtitle="Comprehensive facility and building management services for commercial and residential properties across Canterbury and Kent — all trades under one roof."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Facility Building Management" },
        ]}
        badge="Facilities Management"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e44] mb-6">
                Facility Building Management Services
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Reliable facility building management for commercial and residential properties
                in Canterbury and Kent. We offer planned and reactive maintenance, covering
                plumbing and gas, air conditioning, and commercial electrical services — all
                under one roof with a dedicated team you can trust.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {managedServices.map((s) => (
                  <div
                    key={s.title}
                    className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                  >
                    <h3 className="font-bold text-[#1a2e44] mb-2">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#1a2e44] mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-[#1e3a5f]" />
                  Available Across Kent
                </h3>
                <p className="text-gray-600 text-sm mb-5">
                  Our facility management service covers Canterbury and all surrounding areas.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/facility-building-management/${area.slug}`}
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
                    Looking for a reliable facilities management partner? Contact us today.
                  </p>
                  <a
                    href="mailto:enquiries@superstructureservices.co.uk?subject=Facilities%20Management%20Enquiry%20-%20Superstructure%20Services"
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
                    {SERVICES.filter((s) => s.slug !== "facility-building-management")
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
        heading="Need a Facilities Management Partner?"
        subheading="Contact our Canterbury-based team for a free consultation on your building management requirements across Kent."
      />
    </>
  );
}
