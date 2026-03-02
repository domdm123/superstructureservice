import { Shield, Star, Clock, Users, Award, CheckCircle } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Fully Insured",
    desc: "Public liability & professional indemnity",
  },
  {
    icon: Award,
    title: "Gas Safe Registered",
    desc: "Certified gas & heating engineers",
  },
  {
    icon: CheckCircle,
    title: "MCS Accredited",
    desc: "Heat pump & solar panel installers",
  },
  {
    icon: Star,
    title: "NICEIC Approved",
    desc: "Certified electrical contractors",
  },
  {
    icon: Clock,
    title: "Punctual & Reliable",
    desc: "We respect your time always",
  },
  {
    icon: Users,
    title: "Local Canterbury Team",
    desc: "Based in Kent, serving Kent",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Why Choose Superstructure Services?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Trusted by homeowners and businesses across Canterbury and Kent for over a decade.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {badges.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-center text-center p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="w-11 h-11 bg-[#111111] rounded-xl flex items-center justify-center mb-3">
                <b.icon className="text-[#c9a84c]" size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{b.title}</h3>
              <p className="text-gray-500 text-xs leading-snug">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
