import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      className="group flex flex-col bg-white rounded-xl border border-gray-100 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-0.5"
    >
      <div className="p-6 flex-1">
        <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#111111] transition-colors">
          <span className="text-xl">{service.icon}</span>
        </div>
        <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-[#4a9ebb] transition-colors">
          {service.shortName}
          {location && ` in ${location.charAt(0).toUpperCase() + location.slice(1)}`}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
          {service.tagline}
        </p>
      </div>
      <div className="px-6 pb-5">
        <span className="inline-flex items-center gap-1 text-[#4a9ebb] font-semibold text-sm group-hover:gap-2 transition-all">
          Learn More <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
