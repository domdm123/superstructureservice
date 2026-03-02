import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { PHONE } from "@/lib/services";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  dark?: boolean;
}

export default function CTASection({
  heading = "Ready to Start Your Project?",
  subheading = "Get a free, no-obligation quote from Canterbury's most trusted builders, serving Kent and surrounding villages. We respond within 24 hours.",
  dark = false,
}: CTASectionProps) {
  return (
    <section className={`py-20 px-4 ${dark ? "bg-[#111111]" : "bg-[#1c1c1c]"} text-white`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-400">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-[#1e3a5f] text-white hover:bg-[#162d4a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get a Free Quote <ArrowRight size={18} />
          </Link>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 border-white/20 text-white hover:bg-white/10 transition-all"
          >
            <Phone size={18} /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
