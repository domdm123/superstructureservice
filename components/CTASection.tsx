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
    <section className="relative overflow-hidden py-24 px-4 bg-[#0d1b2e]">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2e] via-[#1e3a5f]/60 to-[#0d1b2e]" />
      {/* Subtle top + bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4a9ebb]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4a9ebb]/40 to-transparent" />
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1e3a5f]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
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
          {["Respond within 24 hours", "Fully insured & accredited", "No hidden costs"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-[#4a9ebb] flex-shrink-0" />
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(ctaSubject)}`}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-all shadow-lg shadow-[#1e3a5f]/40 hover:shadow-xl hover:shadow-[#1e3a5f]/50 hover:-translate-y-0.5 text-base border border-[#4a9ebb]/20"
          >
            Get a Free Quote <ArrowRight size={18} />
          </a>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-base border-2 border-white/15 text-white hover:bg-white/8 hover:border-white/30 transition-all"
          >
            <Phone size={18} /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
