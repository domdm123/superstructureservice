import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James R.",
    location: "Canterbury",
    service: "Kitchen Installation",
    text: "Superstructure Services transformed our kitchen beyond expectations. The attention to detail was incredible — from the worktop fitting to the final electrical connections. Genuinely professional team.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    location: "Whitstable",
    service: "Bathroom Refurbishment",
    text: "From the initial quote to the finished bathroom, everything was handled brilliantly. Clean, tidy workers who kept us informed every step of the way. Would absolutely use them again.",
    rating: 5,
  },
  {
    name: "David T.",
    location: "Faversham",
    service: "Property Refurbishment",
    text: "We had a full house refurbishment done and the results are stunning. Every trade was coordinated perfectly and the quality of workmanship is outstanding. Highly recommended.",
    rating: 5,
  },
  {
    name: "Angela P.",
    location: "Sturry",
    service: "Roofing",
    text: "Our roof replacement was completed on time and on budget. The team was polite, professional and left the site immaculate each evening. Excellent service from start to finish.",
    rating: 5,
  },
  {
    name: "Mark H.",
    location: "Bridge",
    service: "Air Source Heat Pump",
    text: "Fantastic MCS-accredited installation of our air source heat pump. They handled all the paperwork and grant applications too. Our heating bills have dropped significantly.",
    rating: 5,
  },
  {
    name: "Louise K.",
    location: "Chartham",
    service: "Garage Conversion",
    text: "Our garage is now a beautiful home office. The whole team was great — structural work, plastering, electrical and final decoration all done to a very high standard.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#e8a020] text-[#e8a020]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud of the work we do and the relationships we build. Here&apos;s what some of
            our clients across Canterbury and Kent have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <StarRating count={t.rating} />
                <span className="text-xs text-gray-400 bg-white border border-gray-100 px-2 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#111111] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.location}, Kent</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
