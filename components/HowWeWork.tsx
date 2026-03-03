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
    <section className="py-24 relative overflow-hidden">
      {/* Luxury grey/black/white gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d2d3a] to-[#1a1a2e]" />
      {/* Subtle radial glows - white/grey tones */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gray-400/5 rounded-full blur-3xl" />
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      {/* Top and bottom borders - grey/white */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-white/50 font-semibold text-xs uppercase tracking-[0.25em] mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            How We Work
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg leading-relaxed">
            A refined 4-step approach that delivers every project with precision,
            transparency, and uncompromising quality.
          </p>
        </div>

        {/* Staggered Timeline */}
        <div className="relative">
          {/* Central connecting line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/20 to-white/10 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={step.number} className="relative md:h-48 flex items-center justify-center">
                  
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 border-4 border-white/5 rounded-full items-center justify-center z-10 shadow-lg shadow-black/20">
                    <div className="w-3 h-3 bg-white/60 rounded-full" />
                  </div>

                  <div className={`w-full md:w-[calc(50%-3rem)] flex ${isEven ? 'md:justify-end md:mr-auto' : 'md:justify-start md:ml-auto'}`}>
                    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
                      {/* Decorative background number */}
                      <div className="absolute -top-4 -right-2 text-[6rem] font-black text-white/5 leading-none select-none pointer-events-none group-hover:text-white/10 transition-colors z-0">
                        {step.number}
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-white/60 font-bold text-lg">{step.number}.</span>
                          <h3 className="text-white font-bold text-xl tracking-tight">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
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
