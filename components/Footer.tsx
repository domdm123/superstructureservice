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

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-20 lg:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 lg:mb-14">

          {/* About */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="block mb-6 -ml-3">
              <Image
                src="/logo-light.png"
                alt="Superstructure Services"
                width={280}
                height={70}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Quality property builders offering a range of services in refurbishment, renovation and maintenance in Canterbury, Kent.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Comprising of highly skilled and qualified tradesmen, your dreams will be brought to reality in an up to date modern approach – sympathetic to the aesthetics that is your home or workplace.
            </p>
            <div className="flex flex-col gap-3 text-sm">
            {/* Phone reveal with elegant animation */}
            <div className="relative h-10 overflow-hidden">
              <div 
                className={`absolute inset-0 flex items-center transition-all duration-500 ease-out transform ${
                  phoneRevealed ? "opacity-0 -translate-x-4 pointer-events-none" : "opacity-100 translate-x-0"
                }`}
              >
                <button
                  onClick={() => setPhoneRevealed(true)}
                  className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#162d4a] text-white font-semibold text-sm px-4 py-2 rounded transition-all hover:shadow-lg hover:shadow-[#1e3a5f]/30 w-fit"
                >
                  <Phone size={15} />
                  Show Phone Number
                </button>
              </div>
              <div 
                className={`absolute inset-0 flex items-center transition-all duration-500 ease-out transform ${
                  phoneRevealed ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
                }`}
              >
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-[#f5c518] text-black font-bold px-4 py-2 rounded text-sm w-fit"
                >
                  <Phone size={15} />
                  {PHONE}
                </a>
              </div>
            </div>
              <ObfuscatedEmail
                className="flex items-center gap-2 text-gray-300 hover:text-[#4a9ebb] transition-colors"
                showIcon={true}
              />
              <span className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin size={15} className="text-white flex-shrink-0" />
                Serving Canterbury, Kent &amp; Surrounding Villages
              </span>
              <a
                href="https://www.instagram.com/superstructureservices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-[#4a9ebb] transition-colors text-sm w-fit"
              >
                <Instagram size={18} className="text-white" />
                Follow us on Instagram
              </a>
              <a
                href="https://maps.app.goo.gl/F2hE8LhvAQoVUkYs7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View us on Google"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-[#4a9ebb] transition-colors text-sm w-fit"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] flex-shrink-0" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                View us on Google
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="font-bold text-xs uppercase tracking-[0.15em] mb-5 text-[#4a9ebb]">Our Services</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-4">
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
            </ul>
            <Link
              href="/services"
              className="inline-block mt-1 text-[#4a9ebb] hover:text-sky-300 text-sm font-semibold transition-colors"
            >
              View All Services →
            </Link>
          </div>

          {/* Areas */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="font-bold text-xs uppercase tracking-[0.15em] mb-5 text-[#4a9ebb]">Areas We Serve</h3>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 gap-y-2.5">
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
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <div className="text-center sm:text-left">
            © {year} Superstructure Services Ltd · Co. Reg: 4775585
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/services" className="hover:text-gray-300 transition-colors">Services</Link>
            <Link href="/projects" className="hover:text-gray-300 transition-colors">Projects</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
