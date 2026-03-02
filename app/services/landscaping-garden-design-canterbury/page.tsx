import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { SERVICES, PHONE, DOMAIN } from "@/lib/services";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Landscaping & Garden Design in Canterbury & Kent | Superstructure Services",
  description:
    "Expert landscaping and garden design in Canterbury, Kent. Retaining walls, water features, pergolas, patios and full garden redesigns. Free quote available.",
  alternates: { canonical: `${DOMAIN}/services/landscaping-garden-design-canterbury` },
};

export default function LandscapingPage() {
  return (
    <>
      <PageHero
        title="Landscaping & Garden Design in Canterbury & Kent"
        subtitle="Transform your outdoor space with professional landscaping and garden design services from Superstructure Services — serving Canterbury and the wider Kent area."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Landscaping & Garden Design" },
        ]}
        badge="🌿 Landscaping"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e44] mb-6">
                Landscaping and Gardening Services in Canterbury, Kent
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                From complete garden redesigns to individual features, our team delivers
                professional landscaping and garden design services throughout Canterbury and
                Kent. Whether you want a low-maintenance contemporary garden or a traditional
                cottage garden with water features and planting, we bring your vision to life
                with quality materials and expert craftsmanship.
              </p>

              <h3 className="text-xl font-bold text-[#1a2e44] mb-5">Our Landscaping Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { title: "Retaining Walls", desc: "Structural and decorative retaining walls in brick, stone or block." },
                  { title: "Hardscape & Softscape", desc: "Patios, paths, lawns and planting beds designed in harmony." },
                  { title: "Water Features", desc: "Ponds, fountains and water features for a relaxing garden." },
                  { title: "Garden Redesign", desc: "Complete garden redesign from concept to completion." },
                  { title: "Outdoor Areas", desc: "BBQ areas, seating zones and entertainment spaces created." },
                  { title: "Pergolas", desc: "Bespoke timber and metal pergolas for shade and structure." },
                  { title: "Planting", desc: "Expert planting schemes for year-round colour and interest." },
                  { title: "Decorative Walls", desc: "Feature walls in natural stone, brick and block." },
                  { title: "Mains Drainage", desc: "Proper drainage solutions to prevent waterlogging." },
                  { title: "Soakaways", desc: "Soakaway installation for efficient surface water management." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <CheckCircle size={18} className="text-[#e8a020] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#1a2e44] text-sm mb-0.5">{item.title}</div>
                      <div className="text-gray-600 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 flex flex-col gap-6">
                <div className="bg-[#1a2e44] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    Ready to transform your garden? Contact us for a free, no-obligation quote.
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#e8a020] text-white font-bold rounded-xl hover:bg-[#d4911a] transition-all mb-3 w-full"
                  >
                    Request a Quote <ArrowRight size={16} />
                  </Link>
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
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#e8a020] transition-colors"
                        >
                          <ArrowRight size={13} className="text-[#e8a020]" />
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
        heading="Transform Your Garden in Canterbury & Kent"
        subheading="Contact our team today for professional landscaping and garden design. Free, no-obligation quotes for all projects."
      />
    </>
  );
}
