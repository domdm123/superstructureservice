import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { SERVICES } from "@/lib/services";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-xl">
        <div className="text-8xl font-bold text-gray-100 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Sorry, we couldn&apos;t find the page you were looking for. It may have moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white font-bold rounded-xl hover:bg-[#2a2a2a] transition-all"
          >
            <Home size={18} /> Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-all"
          >
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-4">Looking for a service?</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {SERVICES.slice(0, 8).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.canonicalSlug.replace("services/", "")}`}
                className="text-sm px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-gray-600 hover:text-[#4a9ebb] hover:border-[#4a9ebb] transition-all"
              >
                {s.shortName}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
