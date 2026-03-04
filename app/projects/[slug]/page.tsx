"use client";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, MapPin, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS, getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import { DOMAIN, SERVICES } from "@/lib/services";
import CTASection from "@/components/CTASection";
import { useState } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project, 4);
  const service = SERVICES.find(s => s.slug === project.serviceSlug);
  
  const [heroIndex, setHeroIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  const nextHero = () => setHeroIndex((heroIndex + 1) % project.images.length);
  const prevHero = () => setHeroIndex((heroIndex - 1 + project.images.length) % project.images.length);
  
  const nextCarousel = () => setCarouselIndex((carouselIndex + 1) % Math.max(0, project.images.length - 2));
  const prevCarousel = () => setCarouselIndex((carouselIndex - 1 + Math.max(1, project.images.length - 2)) % Math.max(1, project.images.length - 2));

  return (
    <>
      {/* Hero Carousel */}
      <section className="relative bg-gray-100 h-[60vh] min-h-[400px] max-h-[600px]">
        <div className="absolute inset-0">
          <Image
            src={project.images[heroIndex]}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevHero}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextHero}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin size={14} />
              {project.location}, Kent
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
                    <strong className="text-[#0d1b2e]">Location:</strong> {project.location}, Kent
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

      {/* Image Carousel */}
      {project.images.length > 1 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.images.slice(carouselIndex, carouselIndex + 3).map((img, i) => (
                  <div key={i} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${project.title} - Image ${carouselIndex + i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
              {project.images.length > 3 && (
                <>
                  <button
                    onClick={prevCarousel}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg transition-all"
                    aria-label="Previous images"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextCarousel}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg transition-all"
                    aria-label="Next images"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Category-specific CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12">
            <div className="text-[#1e3a5f] mb-4">
              <Tag size={48} className="mx-auto" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d1b2e] mb-4">
              Need {project.category} Help?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {service ? service.description.substring(0, 150) + '...' : `Discover our expert ${project.category.toLowerCase()} services, transforming homes and businesses in Canterbury and Kent with high-quality, tailored solutions.`}
            </p>
            <Link
              href={service ? `/services/${service.canonicalSlug.replace('services/', '')}` : '/services'}
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold px-8 py-3 rounded-lg transition-all"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery-style Related Projects */}
      {related.length > 0 && (
        <section className="py-16 bg-[#0d1b2e]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/projects/${rel.slug}`}
                  className="group relative h-64 overflow-hidden rounded-lg"
                >
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-xs text-white/70 mb-1">{rel.category}</div>
                    <h3 className="font-bold text-lg leading-tight">{rel.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
