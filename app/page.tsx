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
      <section className="relative h-[92vh] min-h-[600px] flex items-center overflow-hidden">
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 border border-white/20">
              Canterbury &amp; Kent Builders
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white">
              Trusted Builders for All Your{" "}
              <span className="text-[#4a9ebb]">Construction Needs</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Serving Canterbury and the wider Kent area with premium building services. From kitchen
              installations to complete property refurbishments — quality craftsmanship, every time.
            </p>
            <ul className="flex flex-col gap-2.5 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-gray-200">
                  <CheckCircle size={17} className="text-[#4a9ebb] flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a84c] text-white font-bold rounded-xl hover:bg-[#b8953f] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-base"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-base backdrop-blur-sm"
              >
                <Phone size={18} /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#111111] text-white py-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "10+", label: "Years Experience" },
              { num: "500+", label: "Projects Completed" },
              { num: "22", label: "Areas Covered" },
              { num: "16", label: "Services Offered" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-[#4a9ebb]">{s.num}</div>
                <div className="text-gray-400 text-sm font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Building Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From kitchen installations to solar panels, we offer a comprehensive range of
              high-quality building and trade services across Canterbury and Kent.
            </p>
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a84c] text-white font-bold rounded-xl hover:bg-[#b8953f] transition-all"
              >
                Start Your Project <ArrowRight size={16} />
              </Link>
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
