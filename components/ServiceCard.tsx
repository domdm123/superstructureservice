import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
  location?: string;
}

export default function ServiceCard({ service, location }: ServiceCardProps) {
  const href = location
    ? `/${service.slug}/${location}`
    : `/services/${service.canonicalSlug.replace("services/", "")}`;

  return (
    <Link
      href={href}
      className="group relative flex flex-col bg-white border border-gray-100 hover:border-[#1e3a5f]/20 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
    >
      {/* Left accent bar — slides in on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#4a9ebb] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

      <div className="p-5 flex-1">
        <h3 className="font-bold text-[#0d1b2e] text-base leading-snug mb-2 group-hover:text-[#1e3a5f] transition-colors">
          {service.shortName}
          {location && ` in ${location.charAt(0).toUpperCase() + location.slice(1)}`}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {service.tagline}
        </p>
      </div>

      <div className="px-5 pb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-300 group-hover:text-[#4a9ebb] transition-colors duration-300">
          View Service
        </span>
        <ArrowUpRight size={14} className="text-gray-300 group-hover:text-[#4a9ebb] transition-colors" />
      </div>
    </Link>
  );
}
