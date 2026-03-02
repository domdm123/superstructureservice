"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SERVICES, PHONE } from "@/lib/services";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-[#111111] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="hidden sm:block text-gray-400 tracking-wide text-xs uppercase">
            Builders &amp; Contractors · Canterbury &amp; Kent
          </span>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-2 hover:text-[#c9a84c] transition-colors font-semibold"
          >
            <Phone size={13} />
            {PHONE}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Superstructure Services"
              width={260}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-gray-700 font-medium hover:text-[#111111] transition-colors text-sm"
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium hover:text-[#111111] transition-colors text-sm">
                Services <ChevronDown size={15} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-2xl rounded-xl border border-gray-100 w-[660px] p-6 grid grid-cols-2 gap-1 z-50">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.canonicalSlug.replace("services/", "")}`}
                      className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#4a9ebb] text-sm text-gray-600 transition-colors block"
                    >
                      {s.shortName}
                    </Link>
                  ))}
                  <div className="col-span-2 border-t border-gray-100 mt-2 pt-3">
                    <Link
                      href="/services"
                      className="block text-center text-sm font-semibold text-[#111111] hover:text-[#4a9ebb] transition-colors"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/projects" className="px-4 py-2 text-gray-700 font-medium hover:text-[#111111] transition-colors text-sm">
              Projects
            </Link>
            <Link href="/areas-we-serve" className="px-4 py-2 text-gray-700 font-medium hover:text-[#111111] transition-colors text-sm">
              Areas We Serve
            </Link>
            <Link
              href="/contact"
              className="ml-3 px-6 py-2.5 bg-[#c9a84c] text-white font-semibold rounded-lg hover:bg-[#b8953f] transition-colors text-sm shadow-sm"
            >
              Free Quote
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link href="/" className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <button
              className="flex items-center justify-between px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50 w-full text-left"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={16} className={servicesOpen ? "rotate-180" : ""} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.canonicalSlug.replace("services/", "")}`}
                    className="px-3 py-2 text-sm text-gray-600 hover:text-[#4a9ebb] rounded-lg hover:bg-gray-50 block"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.shortName}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/projects" className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
              Projects
            </Link>
            <Link href="/areas-we-serve" className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
              Areas We Serve
            </Link>
            <Link href="/contact" className="mt-2 px-4 py-3 bg-[#c9a84c] text-white font-semibold rounded-lg text-center hover:bg-[#b8953f]" onClick={() => setMobileOpen(false)}>
              Get a Free Quote
            </Link>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Phone size={16} /> {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
