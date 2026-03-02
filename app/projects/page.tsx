import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DOMAIN } from "@/lib/services";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Projects | Building Work in Canterbury & Kent | Superstructure Services",
  description:
    "Browse our completed building projects across Canterbury and Kent. Kitchens, bathrooms, roofing, refurbishments, carpentry, flooring and more.",
  alternates: { canonical: `${DOMAIN}/projects` },
};

const projectCategories = [
  { name: "Kitchen Installation", slug: "kitchen-installation", icon: "🍳", count: 24 },
  { name: "Bathroom Refurbishment", slug: "plumbing-and-drainage", icon: "🛁", count: 18 },
  { name: "Roofing", slug: "roofing", icon: "🏠", count: 31 },
  { name: "Refurbishments & Conversions", slug: "refurbishments-and-conversions", icon: "🔨", count: 22 },
  { name: "Flooring", slug: "flooring", icon: "🪵", count: 15 },
  { name: "Home Office", slug: "home-office", icon: "💼", count: 9 },
  { name: "Carpentry", slug: "carpentry", icon: "🪚", count: 20 },
  { name: "Underfloor Heating", slug: "underfloor-heating", icon: "🌡️", count: 12 },
  { name: "Listed Building Restoration", slug: "listed-property-restoration", icon: "🏛️", count: 7 },
];

const featuredProjects = [
  {
    title: "Roofing in Canterbury",
    category: "Roofing",
    location: "Canterbury",
    description:
      "Complete roof replacement on a period Canterbury property using traditional clay peg tiles, completed to conservation area standards.",
    tags: ["Flat Roofing", "GRP Fibreglass", "Listed Building"],
  },
  {
    title: "Kitchen Installation in Canterbury",
    category: "Kitchen Installation",
    location: "Canterbury",
    description:
      "Full kitchen refit including structural wall removal, bespoke joinery, granite worktops from Global Granite, and integrated appliances.",
    tags: ["Bespoke Design", "Granite Worktops", "Structural Work"],
  },
  {
    title: "Commercial Refurbishment",
    category: "Refurbishments",
    location: "Whitstable",
    description:
      "Complete commercial office refurbishment in Whitstable — stripping back, full rewire, new flooring, plaster, decoration and fit-out.",
    tags: ["Commercial", "Full Refurb", "Electrical"],
  },
  {
    title: "New Bathroom & Plumbing",
    category: "Bathroom",
    location: "Faversham",
    description:
      "Luxury wet room installation with underfloor heating, bespoke tiling, custom shower enclosure and full plumbing by our Gas Safe team.",
    tags: ["Wet Room", "Underfloor Heating", "Gas Safe"],
  },
  {
    title: "Underfloor Heating Installation",
    category: "Flooring",
    location: "Chartham",
    description:
      "Retrofit underfloor heating throughout a Victorian terrace using milled channels in existing screed — no floor level changes required.",
    tags: ["Retrofit UFH", "Victorian Property", "All Rooms"],
  },
  {
    title: "Domestic Refurbishment",
    category: "Refurbishments",
    location: "Bridge",
    description:
      "Full internal and external refurbishment of a 4-bedroom detached property — new kitchen, bathrooms, flooring, rewire and re-plaster.",
    tags: ["Full Property", "Multiple Trades", "Project Management"],
  },
  {
    title: "Home Office Creation",
    category: "Conversion",
    location: "Sturry",
    description:
      "Garage conversion into a bespoke home office with dedicated data cabling, built-in furniture, climate control and a separate entrance.",
    tags: ["Garage Conversion", "Data Cabling", "Bespoke Furniture"],
  },
  {
    title: "Library Renovation",
    category: "Carpentry",
    location: "Canterbury",
    description:
      "Floor-to-ceiling bespoke library installation with solid oak shelving, reading nook, hidden lighting and integrated electrical points.",
    tags: ["Bespoke Joinery", "Solid Oak", "Lighting"],
  },
  {
    title: "Entrance Restoration",
    category: "Carpentry",
    location: "Canterbury",
    description:
      "Full restoration of a Victorian entrance hall in a Canterbury city centre property — original floorboards, cornicing and period-appropriate joinery.",
    tags: ["Heritage", "Period Property", "Restoration"],
  },
  {
    title: "External Refurbishment & Roof Repair",
    category: "Roofing",
    location: "Folkestone",
    description:
      "Full external refurbishment including new rendering, roof repairs with EPDM membrane, and repainting of a 1930s semi-detached home.",
    tags: ["EPDM", "External Works", "Rendering"],
  },
  {
    title: "Listed Building Restoration & Kitchen",
    category: "Listed Building",
    location: "Canterbury",
    description:
      "Sympathetic restoration of a Grade II listed property in Canterbury city centre, including a new kitchen installation designed to complement the historic character.",
    tags: ["Grade II Listed", "Conservation", "Kitchen"],
  },
  {
    title: "Carpentry Hardwood Decking",
    category: "Carpentry",
    location: "Sandwich",
    description:
      "Premium hardwood decking installation in a coastal garden in Sandwich — treated hardwood, stainless steel fixings, built-in seating and planters.",
    tags: ["Hardwood", "Outdoor", "Decking"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Browse a selection of our completed building and renovation projects across Canterbury and Kent. Every project, large or small, delivered to the same high standard."
        breadcrumbs={[{ label: "Projects" }]}
        badge="📸 Our Work"
      />

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a2e44] mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {projectCategories.map((cat) => (
              <div
                key={cat.slug}
                className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#e8a020] transition-all cursor-pointer group"
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-sm font-semibold text-[#1a2e44] group-hover:text-[#e8a020] text-center leading-tight">
                  {cat.name}
                </span>
                <span className="text-xs text-gray-400">{cat.count} projects</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#e8a020] font-semibold text-sm uppercase tracking-widest mb-2 block">
              Our Portfolio
            </span>
            <h2 className="text-3xl font-bold text-[#1a2e44] mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of our recent building and renovation work across Canterbury and the
              wider Kent area. Contact us to discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="h-52 bg-gradient-to-br from-[#1a2e44] to-[#2d4a6e] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-2">
                      {projectCategories.find((c) =>
                        project.category.toLowerCase().includes(c.name.toLowerCase().split(" ")[0].toLowerCase())
                      )?.icon || "🏗️"}
                    </div>
                    <div className="text-sm text-white/60 font-medium">{project.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#e8a020] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400">{project.location}</span>
                  </div>
                  <h3 className="font-bold text-[#1a2e44] text-lg mb-2 group-hover:text-[#e8a020] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-6">
              Want to see your project here? We&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#e8a020] text-white font-bold rounded-xl hover:bg-[#d4911a] transition-all shadow-lg"
            >
              Discuss Your Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Start Your Project Today"
        subheading="Join hundreds of satisfied clients across Canterbury and Kent. Contact us for a free, no-obligation quote."
        dark
      />
    </>
  );
}
