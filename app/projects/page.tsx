"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Eye } from "lucide-react";
import { useState } from "react";
import { DOMAIN } from "@/lib/services";
import { PROJECTS } from "@/lib/projects";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const CATEGORIES = [
  "All",
  "Kitchen Installation",
  "Refurbishments & Conversions", 
  "New Bathrooms",
  "Roofing",
  "Electrical",
  "Flooring & Underfloor Heating",
  "Carpentry",
  "Home Office Conversions",
  "Listed Building Restoration",
  "Plumbing & Drainage",
  "Facilities Management",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);
  return (
    <>
      <PageHero
        title="Completed Projects"
        subtitle="Browse our portfolio of building and renovation work across Canterbury and Kent. Every project showcases our commitment to quality craftsmanship."
        breadcrumbs={[{ label: "Projects" }]}
        badge="Our Portfolio"
      />

      {/* Category Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#1e3a5f] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {filteredProjects.length} {activeCategory !== "All" && activeCategory} Projects
            </h2>
            <p className="text-gray-500">
              Click any project to view full details, specifications and additional photos
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredProjects.map((project, index) => {
              const isLarge = index % 5 === 0;
              
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group block break-inside-avoid"
                >
                  <div className={`relative overflow-hidden rounded-xl bg-gray-100 ${
                    isLarge ? "aspect-[4/3]" : "aspect-square"
                  }`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-semibold text-[#f5c518] uppercase tracking-wider mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-white font-bold text-lg leading-tight mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-white/70 text-xs mb-3">
                        <MapPin size={11} />
                        {project.location}, Kent
                      </div>
                      <p className="text-white/60 text-sm line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-white text-sm font-semibold">
                        <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/30">
                          <Eye size={14} />
                          View Project
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-[#4a9ebb] font-semibold hover:underline"
              >
                View all projects
              </button>
            </div>
          )}

          <div className="text-center mt-16">
            <p className="text-gray-500 mb-6">
              Have a similar project in mind? Let&apos;s discuss how we can help.
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
