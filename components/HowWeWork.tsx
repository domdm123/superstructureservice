const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Contact us by phone or email and we'll arrange a free, no-obligation consultation at your property. We listen carefully to understand exactly what you need.",
  },
  {
    number: "02",
    title: "Clear, Detailed Quote",
    description:
      "We provide a fully itemised, transparent quote with no hidden costs. You'll know exactly what to expect before any work begins.",
  },
  {
    number: "03",
    title: "Expert Delivery",
    description:
      "Our skilled team gets to work, keeping you updated throughout. We arrive on time, work cleanly and professionally, and respect your home.",
  },
  {
    number: "04",
    title: "Quality Handover",
    description:
      "We complete a thorough quality check before handover and ensure you're completely satisfied with every aspect of the finished work.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative bg-[#0d1b2e] overflow-hidden">
      {/* Diagonal grid texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#4a9ebb,#4a9ebb_1px,transparent_1px,transparent_60px)]" />
      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#4a9ebb] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.3em] mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            How We Work
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#4a9ebb]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#4a9ebb]" />
            <div className="h-px w-12 bg-[#4a9ebb]/40" />
          </div>
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            A refined 4-step approach that delivers every project with precision,
            transparency, and uncompromising quality.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              {/* Vertical separator on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-px bg-white/5" />
              )}

              <div className="px-8 py-10 lg:py-12">
                {/* Step number — large ghost */}
                <div className="relative mb-8">
                  <span className="block text-[5rem] font-black leading-none text-white/5 select-none tracking-tighter">
                    {step.number}
                  </span>
                  <div className="absolute bottom-2 left-0 w-8 h-[2px] bg-[#4a9ebb]" />
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-xl mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector arrow — desktop only */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[4.5rem] right-0 translate-x-1/2 z-10 items-center justify-center w-6 h-6 rounded-full bg-[#1e3a5f] border border-[#4a9ebb]/30">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 4h6M4 1l3 3-3 3" stroke="#4a9ebb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#4a9ebb] to-transparent" />
    </section>
  );
}
