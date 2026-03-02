import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { PHONE } from "@/lib/services";

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
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  showCTA = true,
  ctaText = "Get a Free Quote",
  ctaHref = "/contact",
  badge,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#111111] text-white py-20 md:py-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      {/* Gold accent bar */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#4a9ebb]" />

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

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-3xl">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">{subtitle}</p>
        )}

        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {ctaText}
            </Link>
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
