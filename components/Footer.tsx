"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { PHONE, EMAIL, SERVICES } from "@/lib/services";
import { AREAS } from "@/lib/areas";

export default function Footer() {
  const year = new Date().getFullYear();
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="mb-5">
              <Link href="/">
                <Image
                  src="/logo-light.png"
                  alt="Superstructure Services"
                  width={220}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted builders and contractors based in Canterbury, serving clients across Kent and surrounding villages with quality craftsmanship and transparent service.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              {phoneRevealed ? (
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 bg-[#f5c518] text-black font-bold px-3 py-1.5 rounded text-xs transition-all"
                >
                  <Phone size={14} />
                  {PHONE}
                </a>
              ) : (
                <button
                  onClick={() => setPhoneRevealed(true)}
                  className="flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#162d4a] text-white font-semibold text-xs px-3 py-1.5 rounded transition-colors"
                >
                  <Phone size={14} />
                  Show Phone Number
                </button>
              )}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-gray-400 hover:text-[#4a9ebb] transition-colors"
              >
                <Mail size={14} className="flex-shrink-0" />
                <span className="break-all">{EMAIL}</span>
              </a>
              <span className="flex items-center gap-2 text-gray-300">
                <MapPin size={14} />
                Canterbury, Kent
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-gray-400">Our Services</h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.canonicalSlug.replace("services/", "")}`}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#4a9ebb] hover:text-sky-300 text-sm font-semibold transition-colors"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-gray-400">More Services</h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.slice(8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.canonicalSlug.replace("services/", "")}`}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-gray-400">Areas We Serve</h3>
            <ul className="flex flex-col gap-2">
              {AREAS.slice(0, 10).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas-we-serve/${a.slug}`}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas-we-serve"
                  className="text-[#4a9ebb] hover:text-sky-300 text-sm font-semibold transition-colors"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div>
            © {year} Superstructure Services Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/services" className="hover:text-gray-400 transition-colors">Services</Link>
            <Link href="/projects" className="hover:text-gray-400 transition-colors">Projects</Link>
            <a
              href="https://www.instagram.com/superstructureservices"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-500 hover:text-[#4a9ebb] transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
