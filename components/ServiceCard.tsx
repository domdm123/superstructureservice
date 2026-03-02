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
      className="group relative flex flex-col bg-white border border-gray-100 hover:border-[#1e3a5f]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#1e3a5f]/8 hover:-translate-y-1"
    >
      {/* Left accent bar — slides in on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#4a9ebb] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

      <div className="p-7 flex-1">
        {/* Icon */}
        <div className="w-11 h-11 rounded-xl bg-[#0d1b2e] flex items-center justify-center mb-6 group-hover:bg-[#1e3a5f] transition-colors duration-300">
          <span className="text-lg">{service.icon}</span>
        </div>

        <h3 className="font-bold text-[#0d1b2e] text-lg leading-snug mb-3 group-hover:text-[#1e3a5f] transition-colors">
          {service.shortName}
          {location && ` in ${location.charAt(0).toUpperCase() + location.slice(1)}`}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {service.tagline}
        </p>
      </div>

      <div className="px-7 pb-6 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-300 group-hover:text-[#4a9ebb] transition-colors duration-300">
          View Service
        </span>
        <div className="w-8 h-8 rounded-full border border-gray-100 group-hover:border-[#4a9ebb] group-hover:bg-[#4a9ebb]/8 flex items-center justify-center transition-all duration-300">
          <ArrowUpRight size={14} className="text-gray-300 group-hover:text-[#4a9ebb] transition-colors" />
        </div>
      </div>
    </Link>
  );
}
