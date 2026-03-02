"use client";

import { Phone, Mail } from "lucide-react";
import { PHONE, EMAIL } from "@/lib/services";

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0d1b2e] border-t border-white/10 flex shadow-2xl">
      <a
        href={`tel:${PHONE.replace(/\s/g, "")}`}
        className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold text-sm border-r border-white/10 active:bg-white/10 transition-colors"
      >
        <Phone size={17} className="text-[#4a9ebb]" />
        Call Us
      </a>
      <a
        href={`mailto:${EMAIL}?subject=${encodeURIComponent("Free Quote Enquiry - Superstructure Services")}`}
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#1e3a5f] text-white font-bold text-sm active:bg-[#162d4a] transition-colors"
      >
        <Mail size={17} />
        Free Quote
      </a>
    </div>
  );
}
