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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A refined 4-step approach that ensures every project is delivered with
            precision, transparency, and uncompromising quality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent z-0" />
              )}
              <div className="relative z-10 text-center lg:text-left">
                <div className="w-14 h-14 bg-[#111111] rounded-2xl flex items-center justify-center mb-5 mx-auto lg:mx-0 shadow-md">
                  <span className="text-[#c9a84c] font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
