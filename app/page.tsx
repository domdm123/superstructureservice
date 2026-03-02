import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle, Star } from "lucide-react";
import { SERVICES, PHONE, DOMAIN } from "@/lib/services";
import { AREAS } from "@/lib/areas";
import ServiceCard from "@/components/ServiceCard";
import TrustBadges from "@/components/TrustBadges";
import Testimonials from "@/components/Testimonials";
import HowWeWork from "@/components/HowWeWork";
import CTASection from "@/components/CTASection";
import AnimatedService from "@/components/AnimatedService";

export const metadata: Metadata = {
  title: "Builders in Canterbury | House Renovation & Maintenance | Superstructure Services",
  description:
    "Your trusted builders in Canterbury, Kent. From renovations to extensions, our experienced team delivers quality craftsmanship. Kitchen fitting, roofing, electrical, plumbing and more.",
  alternates: { canonical: DOMAIN },
  openGraph: {
    title: "Builders in Canterbury | Superstructure Services",
    description:
      "Trusted builders in Canterbury, Kent. Kitchen fitting, roofing, electrical, plumbing, solar panels, heat pumps and more.",
    url: DOMAIN,
    type: "website",
  },
};

const highlights = [
  "Over a decade of experience in Canterbury & Kent",
  "Gas Safe, NICEIC & MCS accredited professionals",
  "Transparent, itemised quotes with no hidden costs",
  "Full project management from start to completion",
];

export default function HomePage() {
  return (
    <>
      {/* Hero — full screen video */}
      <section className="relative h-[90vh] min-h-[560px] flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/logo-icon.png"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay — matches old site's dark machinery feel */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug mb-4 tracking-tight">
            Modern approach, old fashioned values.
          </h1>
          <p className="text-white/90 text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 leading-snug">
            We can do <AnimatedService />
          </p>
          <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Serving Canterbury, Kent and surrounding villages.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#111111] transition-all"
            >
              View Our Services
            </Link>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#162d4a] transition-all"
            >
              <Phone size={16} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative bg-[#0d1b2e] text-white py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2e] via-[#1e3a5f]/30 to-[#0d1b2e]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4a9ebb]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4a9ebb]/30 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {[
              { num: "30", suffix: "+", label: "Years Experience", sub: "Combined team expertise" },
              { num: "100", suffix: "s", label: "Projects Completed", sub: "Across Kent & Canterbury" },
              { num: "22", suffix: "", label: "Areas Covered", sub: "Throughout East Kent" },
              { num: "16", suffix: "", label: "Services Offered", sub: "All trades under one roof" },
            ].map((s, i) => (
              <div key={s.label} className={`flex flex-col items-center text-center px-6 py-2 ${i % 2 === 0 ? "" : ""}`}>
                <div className="flex items-end gap-0.5 mb-1">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">{s.num}</span>
                  <span className="text-2xl md:text-3xl font-bold text-[#4a9ebb] leading-none mb-0.5">{s.suffix}</span>
                </div>
                <div className="text-sm font-bold text-white/90 uppercase tracking-[0.12em] mt-2 mb-0.5">{s.label}</div>
                <div className="text-xs text-white/35 font-medium">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">
              Based in the Heart of Canterbury, Kent
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Your Local Trusted Builder
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed mb-4">
              Superstructure Services is an independently run, high-quality property restoration,
              conversion, refurbishment &amp; maintenance company — serving Canterbury and the wider Kent area.
            </p>
            <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed mb-8">
              From kitchen installations to solar panels, we offer a comprehensive range of
              building and trade services, all under one roof.
            </p>
            <blockquote className="max-w-2xl mx-auto border-l-2 border-[#4a9ebb] pl-5 text-left">
              <p className="text-gray-400 text-base italic leading-relaxed">
                &ldquo;The secret of change is to focus all of your energy, not on fighting the old, but building from it.&rdquo;
              </p>
            </blockquote>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white font-bold rounded-xl hover:bg-[#2a2a2a] transition-all"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Canterbury&apos;s Most Trusted Building Contractors
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                At Superstructure Services, we are proud to be a leading construction company based
                in Canterbury, serving clients across Kent. With a commitment to excellence, we
                deliver high-quality building services tailored to your unique needs.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  {
                    title: "Experience & Expertise",
                    desc: "Years of experience with skilled builders trained and qualified to deliver exceptional results, from foundations to final finishes.",
                  },
                  {
                    title: "Quality Materials",
                    desc: "We source premium materials from trusted local suppliers, ensuring durability and a polished look for every project.",
                  },
                  {
                    title: "Transparent Quotes",
                    desc: "Our detailed, upfront quotes are clear and honest, so you know exactly what to expect with no surprises.",
                  },
                  {
                    title: "Customer Satisfaction",
                    desc: "Our reputation is built on delivering projects that exceed expectations, creating spaces that enhance your home or business.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-5 h-5 bg-[#4a9ebb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111111] rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Your Bespoke Project, Our Bespoke Service</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                We understand that starting a construction project can feel daunting. Our experienced
                team listens to your goals, offering expert advice to make your project stress-free
                and successful.
              </p>
              <div className="flex flex-col gap-3 text-sm text-gray-400 mb-10">
                {[
                  "Free, no-obligation quotes",
                  "Full project management",
                  "All trades under one roof",
                  "Fully insured & accredited",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Star size={13} className="text-[#4a9ebb] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="mailto:enquiries@superstructureservices.co.uk?subject=New%20Project%20Enquiry%20-%20Superstructure%20Services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-all"
              >
                Start Your Project <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <HowWeWork />
      <Testimonials />

      {/* Areas We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
              Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve Across Kent
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Based in Canterbury, we deliver professional building services to towns and villages
              throughout Kent. Click your area to see all available services near you.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas-we-serve/${area.slug}`}
                className="group flex items-center justify-center px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all text-center"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/areas-we-serve"
              className="inline-flex items-center gap-2 text-[#4a9ebb] font-semibold hover:underline"
            >
              View All Areas &amp; Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
