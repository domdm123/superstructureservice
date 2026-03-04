"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Tag, ChevronLeft, ChevronRight, Hammer, ArrowRight } from "lucide-react";
import { PROJECTS, getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import { SERVICES } from "@/lib/services";
import { useState, useEffect } from "react";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const project = getProjectBySlug(slug);
  
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play gallery with 2-second fade interval
  useEffect(() => {
    if (!project || project.images.length <= 1 || isPaused) return;
    
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % project.images.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [project?.images.length, isPaused]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Project not found</h1>
          <Link href="/projects" className="text-[#1e3a5f] font-semibold hover:underline">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProjects(project, 4);
  const service = SERVICES.find(s => 
    s.slug === project.serviceSlug || 
    s.canonicalSlug.replace('services/', '') === project.serviceSlug ||
    s.canonicalSlug === project.serviceSlug
  );
  
  
  const nextCarousel = () => setCarouselIndex((carouselIndex + 1) % project.images.length);
  const prevCarousel = () => setCarouselIndex((carouselIndex - 1 + project.images.length) % project.images.length);

  return (
    <>
      {/* Hero - single static image */}
      <section className="relative bg-gray-900 h-[65vh] min-h-[450px] max-h-[650px]">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-10">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#f5c518] text-xs font-bold uppercase tracking-widest mb-3">
              <div className="w-6 h-px bg-[#f5c518]" />
              {project.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">{project.title}</h1>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <MapPin size={14} />
              {project.location}{!project.location.includes('Kent') && !project.location.includes('London') ? ', Kent' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Two-column Description & Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0d1b2e] mb-6">Project Description</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                {project.longDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            
            {/* Project Details */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-[#0d1b2e] mb-6">Project Details</h2>
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <strong className="text-[#0d1b2e]">Location:</strong> {project.location}{!project.location.includes('Kent') && !project.location.includes('London') ? ', Kent' : ''}
                  </li>
                  <li>
                    <strong className="text-[#0d1b2e]">Full super service:</strong> {project.category}
                  </li>
                  {project.tags.length > 0 && (
                    <li>
                      <strong className="text-[#0d1b2e]">Services:</strong>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-white border border-gray-300 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World-class Image Gallery - Portrait-friendly */}
      {project.images.length > 1 && (
        <section 
          className="py-0 bg-[#0a0a0a]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main large featured image - portrait optimized */}
          <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
            {project.images.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === carouselIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.title} - Image ${i + 1}`}
                  fill
                  className="object-contain bg-[#0a0a0a]"
                  sizes="100vw"
                />
              </div>
            ))}

            {/* Nav arrows */}
            <button
              onClick={prevCarousel}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-30 group w-14 h-14 flex items-center justify-center rounded-full border border-white/30 bg-black/50 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextCarousel}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-30 group w-14 h-14 flex items-center justify-center rounded-full border border-white/30 bg-black/50 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={24} className="text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Counter */}
            <div className="absolute top-6 right-6 z-30 bg-black/60 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/20">
              {carouselIndex + 1} / {project.images.length}
            </div>
          </div>

          {/* Thumbnail strip - larger for better visibility */}
          <div className="bg-[#0a0a0a] px-4 py-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`relative flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      i === carouselIndex
                        ? "ring-2 ring-[#f5c518] ring-offset-2 ring-offset-[#0a0a0a] opacity-100 scale-105"
                        : "opacity-60 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category-specific CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#1e3a5f] via-[#162d4a] to-[#0d1b2e] rounded-3xl shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4a9ebb]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f5c518]/5 rounded-full blur-3xl" />
            
            <div className="relative px-8 py-16 md:px-16 md:py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left side - Icon and text */}
                <div className="text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f5c518] rounded-2xl mb-6 shadow-lg">
                    <Hammer size={32} className="text-[#0d1b2e]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Need {project.category.toLowerCase()} help?
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    {service ? service.description.substring(0, 180) + '...' : `Discover our expert ${project.category.toLowerCase()} services, transforming homes and businesses in Canterbury and Kent with high-quality, tailored solutions.`}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-white/60">
                    <span className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#f5c518] rounded-full" />
                      Free Consultation
                    </span>
                    <span className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#f5c518] rounded-full" />
                      Expert Craftsmen
                    </span>
                    <span className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#f5c518] rounded-full" />
                      Quality Guaranteed
                    </span>
                  </div>
                </div>

                {/* Right side - CTA buttons */}
                <div className="flex flex-col gap-4">
                  <Link
                    href={service ? `/services/${service.canonicalSlug.replace('services/', '')}` : '/services'}
                    className="group flex items-center justify-between bg-[#f5c518] hover:bg-[#e0b515] text-[#0d1b2e] font-bold px-8 py-5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <span className="text-lg">View Service Details</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={`mailto:enquiries@superstructureservices.co.uk?subject=${encodeURIComponent(`${project.category} Enquiry - Superstructure Services`)}`}
                    className="group flex items-center justify-between bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-5 rounded-xl transition-all border border-white/20 hover:border-white/40"
                  >
                    <span className="text-lg">Get a Free Quote</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery-style Related Projects */}
      {related.length > 0 && (
        <section className="py-20 bg-[#0d1b2e]">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">More Projects</h2>
              <p className="text-white/60 text-lg">Explore our portfolio of completed work across Canterbury and Kent</p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/projects/${rel.slug}`}
                  className="group relative aspect-square overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-xs font-semibold text-[#f5c518] mb-2 uppercase tracking-wider">
                        {rel.category}
                      </div>
                      <h3 className="font-bold text-xl text-white leading-tight mb-3 line-clamp-2">
                        {rel.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>View Project</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#f5c518]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#f5c518] transition-colors group"
              >
                <span className="text-lg">View All Projects</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
