"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, Instagram, MapPin, Mail } from "lucide-react";
import { SERVICES, PHONE, EMAIL } from "@/lib/services";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100/50" 
        : "bg-white border-b border-gray-100"
    }`}>
      {/* Top bar */}
      <div className="bg-[#111111] text-gray-300 text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="hidden sm:flex items-center gap-1.5 text-gray-300 tracking-wide text-xs uppercase">
              <MapPin size={13} />
              Serving Canterbury, Kent &amp; Surrounding Villages
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors tracking-wide text-xs uppercase"
            >
              <Mail size={13} />
              {EMAIL}
            </a>
            <a
              href="https://www.instagram.com/superstructureservices"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Instagram size={15} />
            </a>
          </div>
          {/* Phone reveal with animation */}
          <div className="relative h-9 overflow-hidden min-w-[180px]">
            <div 
              className={`absolute inset-0 flex items-center justify-end transition-all duration-500 ease-out transform ${
                phoneRevealed ? "opacity-0 translate-x-4 pointer-events-none" : "opacity-100 translate-x-0"
              }`}
            >
              <button
                onClick={() => setPhoneRevealed(true)}
                className="flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#162d4a] text-white font-semibold text-xs px-3 py-1.5 rounded transition-all hover:shadow-lg hover:shadow-[#1e3a5f]/30"
              >
                <Phone size={13} />
                Show Phone Number
              </button>
            </div>
            <div 
              className={`absolute inset-0 flex items-center justify-end transition-all duration-500 ease-out transform ${
                phoneRevealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
              }`}
            >
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-2 bg-[#f5c518] text-black font-bold px-3 py-1.5 rounded text-xs animate-pulse"
              >
                <Phone size={13} />
                {PHONE}
              </a>
            </div>
          </div>
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
              className="group relative px-4 py-2 text-gray-700 font-medium hover:text-[#1e3a5f] transition-colors duration-300 text-sm"
            >
              <span className="relative">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4a9ebb] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="group relative flex items-center gap-1.5 px-4 py-2 text-gray-700 font-medium hover:text-[#1e3a5f] transition-colors duration-300 text-sm">
                <span className="relative">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4a9ebb] transition-all duration-300 group-hover:w-full" />
                </span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
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

            <Link href="/projects" className="group relative px-4 py-2 text-gray-700 font-medium hover:text-[#1e3a5f] transition-colors duration-300 text-sm">
              <span className="relative">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4a9ebb] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
            <Link href="/areas-we-serve" className="group relative px-4 py-2 text-gray-700 font-medium hover:text-[#1e3a5f] transition-colors duration-300 text-sm">
              <span className="relative">
                Areas We Serve
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4a9ebb] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Free Quote Enquiry - Superstructure Services")}`}
              className="ml-3 px-6 py-2.5 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#162d4a] hover:shadow-lg hover:shadow-[#1e3a5f]/20 hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              Free Quote
            </a>
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
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Free Quote Enquiry - Superstructure Services")}`} className="mt-2 px-4 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg text-center hover:bg-[#162d4a]" onClick={() => setMobileOpen(false)}>
              Get a Free Quote
            </a>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Phone size={16} /> {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
