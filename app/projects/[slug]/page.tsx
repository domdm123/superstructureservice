import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, MapPin, Tag } from "lucide-react";
import { PROJECTS, getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import { DOMAIN } from "@/lib/services";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: { canonical: `${DOMAIN}/projects/${project.slug}` },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: `${DOMAIN}/projects/${project.slug}`,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project, 3);

  return (
    <>
      <PageHero
        title={project.title}
        subtitle={project.description}
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        badge={project.category}
      />

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main column */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Hero image */}
              <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-[#0d1b2e] mb-5">About This Project</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </div>

              {/* Additional images */}
              {project.images.length > 1 && (
                <div>
                  <h3 className="text-xl font-bold text-[#0d1b2e] mb-5">Project Photos</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.images.slice(1).map((img, i) => (
                      <div key={i} className="relative h-56 rounded-xl overflow-hidden">
                        <Image
                          src={img}
                          alt={`${project.title} — photo ${i + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div>
                <h3 className="text-sm font-bold text-[#0d1b2e] uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                  <Tag size={14} className="text-[#4a9ebb]" /> Works Carried Out
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back to projects */}
              <div>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a9ebb] hover:text-[#1e3a5f] transition-colors"
                >
                  <ArrowLeft size={15} /> Back to All Projects
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 flex flex-col gap-6">

                {/* Project info */}
                <div className="bg-[#0d1b2e] rounded-2xl p-7 text-white">
                  <h3 className="text-lg font-bold mb-5">Project Details</h3>
                  <div className="flex flex-col gap-4 text-sm">
                    <div className="flex items-start gap-3 border-b border-white/10 pb-4">
                      <MapPin size={15} className="text-[#4a9ebb] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Location</div>
                        <div className="text-white font-medium">{project.location}, Kent</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 border-b border-white/10 pb-4">
                      <Tag size={15} className="text-[#4a9ebb] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Category</div>
                        <div className="text-white font-medium">{project.category}</div>
                      </div>
                    </div>
                  </div>
                  <a
                    href={`mailto:enquiries@superstructureservices.co.uk?subject=${encodeURIComponent(`Similar Project to ${project.title} - Superstructure Services`)}`}
                    className="mt-6 flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#1e3a5f] text-white font-bold rounded-xl hover:bg-[#162d4a] transition-all text-sm"
                  >
                    Enquire About a Similar Project <ArrowRight size={14} />
                  </a>
                </div>

                {/* Related projects */}
                {related.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="font-bold text-[#0d1b2e] mb-4 text-sm uppercase tracking-[0.12em]">
                      More Projects
                    </h4>
                    <div className="flex flex-col gap-4">
                      {related.map((rel) => (
                        <Link
                          key={rel.slug}
                          href={`/projects/${rel.slug}`}
                          className="group flex gap-3 items-start"
                        >
                          <div className="relative w-16 h-14 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={rel.image}
                              alt={rel.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="64px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-[#4a9ebb] font-semibold mb-0.5">{rel.category}</div>
                            <div className="text-sm font-semibold text-[#0d1b2e] group-hover:text-[#4a9ebb] transition-colors leading-snug line-clamp-2">
                              {rel.title}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/projects"
                      className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#4a9ebb] hover:underline"
                    >
                      View all projects <ArrowRight size={12} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading={`Start a Similar Project`}
        subheading={`Inspired by our ${project.category.toLowerCase()} work? Get in touch for a free, no-obligation quote from our Canterbury-based team.`}
        ctaSubject={`${project.category} Project Enquiry - Superstructure Services`}
      />
    </>
  );
}
