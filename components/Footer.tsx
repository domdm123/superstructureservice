"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Instagram } from "lucide-react";
import { PHONE, SERVICES } from "@/lib/services";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { AREAS } from "@/lib/areas";

export default function Footer() {
  const year = new Date().getFullYear();
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  return (
    <footer className="bg-[#1a1a2e] text-white">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-[#4a9ebb] via-[#1e3a5f] to-[#4a9ebb]" />

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">

          {/* About */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/">
                <Image
                  src="/logo-light.png"
                  alt="Superstructure Services"
                  width={280}
                  height={65}
                  className="h-14 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Quality property builders offering a range of services in refurbishment, renovation and maintenance in Canterbury, Kent.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Comprising of highly skilled and qualified tradesmen, your dreams will be brought to reality in an up to date modern approach – sympathetic to the aesthetics that is your home or workplace.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              {phoneRevealed ? (
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-[#f5c518] text-black font-bold px-4 py-2 rounded text-sm transition-all w-fit"
                >
                  <Phone size={15} />
                  {PHONE}
                </a>
              ) : (
                <button
                  onClick={() => setPhoneRevealed(true)}
                  className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#162d4a] text-white font-semibold text-sm px-4 py-2 rounded transition-colors w-fit"
                >
                  <Phone size={15} />
                  Show Phone Number
                </button>
              )}
              <ObfuscatedEmail
                className="flex items-center gap-2 text-gray-300 hover:text-[#4a9ebb] transition-colors"
                showIcon={true}
              />
              <span className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin size={15} className="text-[#4a9ebb] flex-shrink-0" />
                Serving Canterbury, Kent &amp; Surrounding Villages
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-[0.15em] mb-5 text-[#4a9ebb]">Our Services</h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.canonicalSlug.replace("services/", "")}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
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
            <h3 className="font-bold text-xs uppercase tracking-[0.15em] mb-5 text-[#4a9ebb]">More Services</h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.slice(8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.canonicalSlug.replace("services/", "")}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-[0.15em] mb-5 text-[#4a9ebb]">Areas We Serve</h3>
            <ul className="flex flex-col gap-2.5">
              {AREAS.slice(0, 10).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas-we-serve/${a.slug}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
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
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>
            © {year} Superstructure Services Ltd · Registered: 67 Canterbury Innovation Centre, CT2 7FG · Co. Reg: 4775585
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/services" className="hover:text-gray-300 transition-colors">Services</Link>
            <Link href="/projects" className="hover:text-gray-300 transition-colors">Projects</Link>
            <a
              href="https://www.instagram.com/superstructureservices"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-[#4a9ebb] transition-colors"
            >
              <Instagram size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
