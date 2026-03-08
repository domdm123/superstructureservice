import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle, Star } from "lucide-react";
import { SERVICES, PHONE, DOMAIN } from "@/lib/services";
import { AREAS } from "@/lib/areas";
import ServiceCard from "@/components/ServiceCard";
import ServicesGrid from "@/components/ServicesGrid";
import TrustBadges from "@/components/TrustBadges";
import HowWeWork from "@/components/HowWeWork";
import CTASection from "@/components/CTASection";
import AnimatedService from "@/components/AnimatedService";
import ProjectGallery from "@/components/ProjectGallery";
import FadeIn from "@/components/FadeIn";
import HeroVideo from "@/components/HeroVideo";
import { playfair } from "@/lib/fonts";

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
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0d1b2e]">
        {/* Video background */}
        <HeroVideo />
        {/* Dark overlay — matches old site's dark machinery feel */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">
          <h1 className="font-furore text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-none mb-4 sm:mb-6 tracking-wide uppercase">
            Modern approach,<br className="hidden sm:block" /> old fashioned values.
          </h1>
          <p className="text-gray-300 text-sm sm:text-lg mb-6 sm:mb-10 max-w-xl mx-auto leading-relaxed">
            Serving Canterbury, Kent and surrounding villages.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-2 sm:px-0">
            <Link
              href="/services"
              className="inline-flex items-center justify-center w-full sm:w-[240px] h-12 sm:h-14 border-2 border-white text-white font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white hover:text-[#111111] transition-all"
            >
              View Our Services
            </Link>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-[240px] h-12 sm:h-14 bg-[#1e3a5f] border-2 border-[#1e3a5f] text-white font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#162d4a] hover:border-[#162d4a] transition-all"
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
          <div className="grid grid-cols-3 divide-x divide-white/8">
            {[
              { num: "30", suffix: "+", label: "Years Experience", sub: "Combined team expertise" },
              { num: "100", suffix: "s", label: "Projects Completed", sub: "Across Kent & Canterbury" },
              { num: null, suffix: "", label: "Canterbury & Surrounding Areas", sub: "" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center px-2 sm:px-6 py-2">
                {s.num !== null ? (
                  <div className="flex items-end gap-0.5 mb-1">
                    <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none">{s.num}</span>
                    <span className="text-lg sm:text-2xl md:text-3xl font-bold text-[#4a9ebb] leading-none mb-0.5">{s.suffix}</span>
                  </div>
                ) : (
                  <div className="mb-1">
                    <span className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-none">Covering Kent</span>
                  </div>
                )}
                <div className="text-[10px] sm:text-sm font-bold text-white/90 uppercase tracking-[0.08em] sm:tracking-[0.12em] mt-1 sm:mt-2 mb-0.5">{s.label}</div>
                <div className="hidden sm:block text-xs text-white/35 font-medium">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 sm:mb-20">
            <div className="text-center mb-12">
              <span className="text-[#1a6e8a] font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">
                Based in the Heart of Canterbury, Kent
              </span>
              <h2 className="font-furore text-3xl md:text-5xl text-gray-900 mb-5 tracking-tight">
                Your Local Trusted Builder
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="text-gray-600 text-lg leading-relaxed">
                <strong className="text-[#1a2e44] font-bold">Superstructure Services</strong> is an independently run, high-quality property restoration, conversion, refurbishment &amp; maintenance company — serving Canterbury and the wider Kent area.
                <br /><br />
                From kitchen installations to solar panels, we offer a comprehensive range of building and trade services, all under one roof.
              </div>
              
              <div className="relative pl-6 md:pl-8 border-l-2 border-[#f5c518]">
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  Paul, the Director of the company, has over 30 years experience in the construction industry. With a wealth of knowledge across all building types — commercial and residential, listed buildings to new builds — our team continually work hard to deliver a high-end finish.
                </p>
              </div>
            </div>
          </div>

          {/* Pull quote — full width world-class */}
          <div className="mt-16 mb-16 relative overflow-hidden bg-[#0d1b2e]" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
            {/* Background texture layers */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#0d1b2e_0%,#1e3a5f_50%,#0d1b2e_100%)]" />
            <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(45deg,#4a9ebb,#4a9ebb_1px,transparent_1px,transparent_60px)]" />
            {/* Top & bottom accent lines */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#4a9ebb] to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#4a9ebb] to-transparent" />
            {/* Giant decorative quotemark */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-[#4a9ebb]/5 text-[28rem] font-serif leading-none select-none pointer-events-none">&ldquo;</div>
            <div className="relative py-20 px-8 md:px-16 lg:px-32 max-w-6xl mx-auto text-center">
              <blockquote>
                <p className={`${playfair.className} text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight`}>
                  <span className="text-[#4a9ebb]">The secret of change</span> is to focus all of your energy, not on fighting the old,{" "}
                  <span className="italic font-light">but building from it.</span>
                </p>
                <div className="mt-10 flex items-center justify-center gap-4">
                  <div className="h-px w-16 bg-[#4a9ebb]/40" />
                  <div className="w-2 h-2 rounded-full bg-[#4a9ebb]/60" />
                  <div className="h-px w-16 bg-[#4a9ebb]/40" />
                </div>
              </blockquote>
            </div>
          </div>

          {/* Our Services Title */}
          <div className="text-center mb-10 mt-10 sm:mt-16">
            <span className="text-[#1a6e8a] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
          </div>

          <ServicesGrid services={SERVICES} />

          {/* Animated service showcase — full width */}
          <div 
            className="mt-16 py-10 sm:py-24 text-center px-4 relative overflow-hidden"
            style={{ 
              marginLeft: 'calc(-50vw + 50%)', 
              marginRight: 'calc(-50vw + 50%)', 
              width: '100vw',
              background: 'linear-gradient(135deg, #0d1b2e 0%, #1e3a5f 50%, #162d4a 100%)'
            }}
          >
            {/* Subtle grid pattern overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(74, 158, 187, 0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(74, 158, 187, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(74,158,187,0.15)_0%,_transparent_70%)]" />
            
            <div className="relative z-10 flex flex-col items-center justify-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4a9ebb]/70 mb-2">Our Services</span>
              <span className="font-furore text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">We can provide</span>
              <div className="font-furore text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#4a9ebb]">
                <AnimatedService />
              </div>
            </div>
            <div className="relative z-10 mt-12">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-[#0d1b2e] font-bold rounded-xl hover:bg-[#4a9ebb] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#4a9ebb]/20 hover:-translate-y-0.5"
              >
                View All Services 
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FadeIn>
        <TrustBadges />
      </FadeIn>

      <FadeIn>
        <ProjectGallery />
      </FadeIn>

      {/* Why Choose Us */}
      <section className="pt-0 pb-0 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="text-[#1a6e8a] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
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
            <div className="relative rounded-none sm:rounded-3xl -mx-4 sm:mx-0 p-8 sm:p-10 text-white overflow-hidden min-h-[400px] sm:min-h-[480px] flex flex-col">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/renovation-canterbury-kent-bg.jpg"
                  alt="Renovation in Canterbury Kent"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e]/90 via-[#0d1b2e]/70 to-[#0d1b2e]/40" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-6">Your Bespoke Project, Our Bespoke Service</h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  We understand that starting a construction project can feel daunting. Our experienced
                  team listens to your goals, offering expert advice to make your project stress-free
                  and successful.
                </p>
                <div className="flex flex-col gap-3 text-sm text-white/70 mb-10">
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-all w-fit"
                >
                  Start Your Project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FadeIn>
        <HowWeWork />
      </FadeIn>

      {/* Areas We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#1a6e8a] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
              Coverage
            </span>
            <h2 className="font-furore text-3xl md:text-4xl text-gray-900 mb-4">
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
                className="group flex items-center justify-center px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] transition-all text-center"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/areas-we-serve"
              className="inline-flex items-center gap-2 text-[#1a6e8a] font-semibold hover:underline"
            >
              View All Areas &amp; Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <FadeIn>
        <CTASection />
      </FadeIn>
    </>
  );
}
