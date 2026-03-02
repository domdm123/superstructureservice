import Image from "next/image";
import { Shield, Clock, Users } from "lucide-react";

const accreditations = [
  {
    src: "/images/accreditations/gas-safe.jpg",
    alt: "Gas Safe Certified Plumber in Canterbury Kent",
    label: "Gas Safe Registered",
    desc: "Certified gas & heating engineers",
  },
  {
    src: "/images/accreditations/mcs.webp",
    alt: "MCS Certified Heat Pump and Solar Panel Installer Canterbury Kent",
    label: "MCS Certified",
    desc: "Heat pump & solar panel installers",
  },
  {
    src: "/images/accreditations/niceic.png",
    alt: "NICEIC Certified Electrician in Canterbury Kent",
    label: "NICEIC Approved",
    desc: "Certified electrical contractors",
  },
];

const trustPoints = [
  { icon: Shield, title: "Fully Insured", desc: "Public liability & professional indemnity" },
  { icon: Clock,  title: "Punctual & Reliable", desc: "We respect your time, always" },
  { icon: Users,  title: "Local Canterbury Team", desc: "Based in Kent, serving Kent" },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Fully Accredited. Fully Insured. Fully Local.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Trusted by homeowners and businesses across Canterbury and Kent.
          </p>
        </div>

        {/* Accreditation logos */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {accreditations.map((a) => (
            <div
              key={a.label}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#4a9ebb]/30 hover:shadow-md transition-all"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={140}
                  height={56}
                  className="object-contain max-h-14 w-auto"
                />
              </div>
              <p className="text-gray-500 text-xs leading-snug">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-10" />

        {/* Trust points */}
        <div className="grid grid-cols-3 gap-6">
          {trustPoints.map((t) => (
            <div key={t.title} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-[#0d1b2e] flex items-center justify-center mb-3">
                <t.icon size={18} className="text-[#4a9ebb]" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{t.title}</h3>
              <p className="text-gray-400 text-xs leading-snug">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
