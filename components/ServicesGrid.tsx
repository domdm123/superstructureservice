"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import FadeIn from "@/components/FadeIn";
import type { Service } from "@/lib/services";
export type { Service };

const INITIAL_SHOW = 8;

export default function ServicesGrid({ services }: { services: Service[] }) {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? services : services.slice(0, INITIAL_SHOW);
  const hidden = services.length - INITIAL_SHOW;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {visible.map((s, i) => (
          <FadeIn key={s.slug} delay={i * 60}>
            <ServiceCard service={s} />
          </FadeIn>
        ))}
      </div>

      {!showAll && hidden > 0 && (
        <div className="mt-8 flex justify-center sm:hidden">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 px-6 py-3 bg-[#0d1b2e] text-white font-semibold rounded-xl text-sm active:bg-[#1e3a5f] transition-colors"
          >
            Show {hidden} More Services
            <ChevronDown size={16} />
          </button>
        </div>
      )}
    </>
  );
}
