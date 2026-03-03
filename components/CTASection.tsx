import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { PHONE, EMAIL } from "@/lib/services";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  dark?: boolean;
  ctaSubject?: string;
}

export default function CTASection({
  heading = "Ready to Start Your Project?",
  subheading = "Get a free, no-obligation quote from Canterbury's most trusted builders, serving Kent and surrounding villages.",
  dark = false,
  ctaSubject = "Free Quote Enquiry - Superstructure Services",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-24 px-4">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg-bathroom.jpg"
          alt="Bathroom renovation Canterbury Kent"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0d1b2e]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e] via-[#0d1b2e]/50 to-[#0d1b2e]/70" />
      </div>
      
      {/* Subtle top + bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4a9ebb]/40 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4a9ebb]/40 to-transparent z-10" />
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1e3a5f]/30 rounded-full blur-3xl pointer-events-none z-10" />

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <span className="inline-block text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.25em] mb-5">
          Free No-Obligation Quote
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          {heading}
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 text-sm text-gray-400">
          {["Respond within 24 hours", "Fully insured & accredited"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-[#4a9ebb] flex-shrink-0" />
              {t}
            </span>
          ))}
        </div>

        <style jsx>{`
          .btn-fill {
            position: relative;
            overflow: hidden;
            z-index: 1;
          }
          .btn-fill::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: linear-gradient(135deg, #162d4a 0%, #1e3a5f 50%, #4a9ebb 100%);
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: -1;
          }
          .btn-fill:hover::before {
            width: 100%;
          }
          .btn-outline-fill {
            position: relative;
            overflow: hidden;
            z-index: 1;
          }
          .btn-outline-fill::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: rgba(255, 255, 255, 0.15);
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: -1;
          }
          .btn-outline-fill:hover::before {
            width: 100%;
          }
        `}</style>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(ctaSubject)}`}
            className="btn-fill inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1e3a5f] text-white font-bold rounded-xl shadow-lg shadow-[#1e3a5f]/40 hover:shadow-xl hover:shadow-[#1e3a5f]/50 hover:-translate-y-0.5 transition-all text-base border border-[#4a9ebb]/20"
          >
            Get a Free Quote <ArrowRight size={18} />
          </a>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="btn-outline-fill inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-base border-2 border-white/15 text-white hover:border-white/40 transition-all"
          >
            <Phone size={18} /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
