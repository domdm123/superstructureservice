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
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.25em] mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            How We Work
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            A refined 4-step approach that delivers every project with precision,
            transparency, and uncompromising quality.
          </p>
        </div>

        {/* Staggered Timeline */}
        <div className="relative">
          {/* Central connecting line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={step.number} className="relative md:h-48 flex items-center justify-center">
                  
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-gray-50 rounded-full items-center justify-center z-10 shadow-sm">
                    <div className="w-3 h-3 bg-[#1e3a5f] rounded-full" />
                  </div>

                  <div className={`w-full md:w-[calc(50%-3rem)] flex ${isEven ? 'md:justify-end md:mr-auto' : 'md:justify-start md:ml-auto'}`}>
                    <div className="group relative bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
                      {/* Decorative background number */}
                      <div className="absolute -top-4 -right-2 text-[6rem] font-black text-gray-50/80 leading-none select-none pointer-events-none group-hover:text-gray-100/50 transition-colors z-0">
                        {step.number}
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-[#4a9ebb] font-bold text-lg">{step.number}.</span>
                          <h3 className="text-gray-900 font-bold text-xl tracking-tight">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
