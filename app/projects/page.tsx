import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { DOMAIN } from "@/lib/services";
import { PROJECTS } from "@/lib/projects";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Projects | Building Work in Canterbury & Kent | Superstructure Services",
  description:
    "Browse our completed building projects across Canterbury and Kent. Kitchens, bathrooms, roofing, refurbishments, carpentry, flooring and more.",
  alternates: { canonical: `${DOMAIN}/projects` },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Browse our completed building and renovation projects across Canterbury and Kent. Every project delivered to the same high standard — click any project to see full details and photos."
        breadcrumbs={[{ label: "Projects" }]}
        badge="Our Portfolio"
      />

      {/* Projects grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#4a9ebb] font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">
              Completed Work
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {PROJECTS.length} Completed Projects
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A selection of our building and renovation work across Canterbury and the wider Kent area.
              Click any project to view full details, description and photos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-semibold text-white bg-[#1e3a5f]/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 mb-2 text-xs text-gray-400">
                    <MapPin size={11} className="text-[#4a9ebb]" />
                    {project.location}, Kent
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#4a9ebb] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4a9ebb] group-hover:gap-2.5 transition-all">
                    View Project <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-6">
              Want to see your project here? We&apos;d love to hear from you.
            </p>
            <a
              href="mailto:enquiries@superstructureservices.co.uk?subject=Project%20Discussion%20-%20Superstructure%20Services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-all shadow-lg"
            >
              Discuss Your Project <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <CTASection
        heading="Start Your Project Today"
        subheading="Join our satisfied clients across Canterbury and Kent. Contact us for a free, no-obligation quote."
      />
    </>
  );
}
