import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone } from "lucide-react";
import { PHONE, EMAIL } from "@/lib/services";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  badge?: string;
  heroImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  showCTA = true,
  ctaText = "Get a Free Quote",
  ctaHref = `mailto:${EMAIL}?subject=${encodeURIComponent("Free Quote Enquiry - Superstructure Services")}`,
  badge,
  heroImage,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#111111] text-white py-20 md:py-28 overflow-hidden">
      {/* Hero background image */}
      {heroImage && (
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover opacity-75"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/70 via-[#111111]/40 to-[#111111]/60" />
        </div>
      )}
      {/* Gold accent bar */}
      <div className="absolute top-0 left-0 w-1 h-full" style={{ background: "linear-gradient(to bottom, #ffffff, #888888, #111111)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-gray-600" />
                {b.href ? (
                  <Link href={b.href} className="hover:text-white transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-gray-300">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <span className="inline-block bg-white/10 text-gray-300 text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4 border border-white/20">
            {badge}
          </span>
        )}

        <h1 className="font-furore text-3xl sm:text-4xl md:text-5xl leading-tight mb-5 max-w-3xl">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">{subtitle}</p>
        )}

        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {ctaText}
            </a>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              <Phone size={18} /> {PHONE}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
