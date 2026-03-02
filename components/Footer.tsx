import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE, EMAIL, SERVICES } from "@/lib/services";
import { AREAS } from "@/lib/areas";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="Superstructure Services"
                width={200}
                height={46}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted builders and contractors based in Canterbury, serving clients
              across Kent with quality craftsmanship and transparent service.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors"
              >
                <Phone size={14} />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors"
              >
                <Mail size={14} />
                {EMAIL}
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
                  className="text-[#c9a84c] hover:text-yellow-300 text-sm font-semibold transition-colors"
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
                  className="text-[#c9a84c] hover:text-yellow-300 text-sm font-semibold transition-colors"
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
          </div>
        </div>
      </div>
    </footer>
  );
}
