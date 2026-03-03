export const PHONE = "07931 686596";
export const EMAIL = "enquiries@superstructureservices.co.uk";
export const COMPANY = "Superstructure Services";
export const DOMAIN = "https://superstructureservices.co.uk";
export const ADDRESS = "Canterbury, Kent";

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
  canonicalSlug: string; // the existing Canterbury URL slug
  icon: string;
}

export const SERVICES: Service[] = [
  {
    slug: "kitchen-installation",
    name: "Kitchen Installation",
    shortName: "Kitchen Installation",
    tagline: "If you talk about it, it's a dream. If you envision it, it's possible.",
    description:
      "We hold trade accounts with local supply companies and have a dedicated team of installers to give you that professional finish to your kitchen, emphasising on detail and practicality. Bespoke design finalised by the correct electrical and plumbing installations. We also install and fit a wide range of kitchen worktops across Canterbury and the wider Kent area — from laminate to Corian, Solid Wood, Quartz, Granite and Marble.",
    features: [
      "Modernisation – updating outdated kitchens with contemporary designs and modern features",
      "Full fitting of worktops and appliances with seamless, durable results",
      "Structural work including wall removals or reinforcements for the perfect layout",
      "Bespoke service tailored to your exact style and requirements",
      "Trade account access to Global Granite and specialist stone suppliers",
    ],
    metaTitle: "Kitchen Installation in {location} | Superstructure Services",
    metaDescription:
      "Expert kitchen installation in {location}, Kent. Bespoke designs, worktop fitting & full refits by Superstructure Services. Free quote available.",
    canonicalSlug: "services/kitchen-installation-service",
    icon: "",
  },
  {
    slug: "flooring-underfloor-heating",
    name: "Flooring & Underfloor Heating",
    shortName: "Flooring & Underfloor Heating",
    tagline: "Following the rules of your industry will only get you so far.",
    description:
      "From all types of underfloor heating systems to upgrading your floor finish, we have the professionals on hand to install your new floor requirements. Underfloor heating gives a steady ambient temperature that makes everyone feel comfortable — concealed and efficient. From carpet to engineered hardwood, LVT to ceramic tiling, we have the answer to quality floor installation.",
    features: [
      "Wet and electric underfloor heating systems for any room",
      "Retrofit underfloor heating — milling channels in existing screed without excavation",
      "Underfloor heating compatible with wooden floors and upstairs rooms",
      "Full range of flooring: carpet, engineered hardwood, LVT, ceramic tiles",
      "Smart thermostat integration for automated temperature control",
    ],
    metaTitle: "Flooring & Underfloor Heating in {location} | Superstructure Services",
    metaDescription:
      "Flooring installation and underfloor heating in {location}, Kent. All floor types fitted. Retrofit or new installation by Superstructure Services.",
    canonicalSlug: "services/underfloor-heating-installation",
    icon: "",
  },
  {
    slug: "facility-building-management",
    name: "Facilities Building Management",
    shortName: "Facilities Management",
    tagline: "Managing your Kent building like pros.",
    description:
      "Reliable facility building management for commercial and residential properties in Canterbury and Kent. We offer planned and reactive maintenance, covering plumbing and gas, air conditioning, and commercial electrical services — all under one roof with a dedicated team you can trust.",
    features: [
      "Planned preventative maintenance programmes",
      "Reactive maintenance and rapid emergency response",
      "Building maintenance covering all trades",
      "Plumbing, gas and heating systems management",
      "Air conditioning servicing and commercial electrical services",
    ],
    metaTitle: "Facility Building Management in {location} | Superstructure Services",
    metaDescription:
      "Professional facilities building management in {location}, Kent. Planned & reactive maintenance, plumbing, electrical & AC by Superstructure Services.",
    canonicalSlug: "services/facility-building-management",
    icon: "",
  },
  {
    slug: "electrician",
    name: "Electrical",
    shortName: "Electrical",
    tagline: "Energy is a liberated matter, what's the matter with being liberated?",
    description:
      "Our skilled electricians bring expertise and innovation to every project, ensuring safety, efficiency, and personalised solutions for both homes and businesses. From advanced smart home installations to reliable power systems, we're committed to meeting your electrical needs with professionalism and care. NICEIC-approved team serving Canterbury and Kent.",
    features: [
      "EICR for Landlords — Electrical Installation Condition Reports to UK safety standards",
      "Testing and certification for compliance with current safety standards",
      "Commercial and domestic electrical installations and repairs",
      "Network cable installation for offices, homes and smart systems",
      "Smart home systems and EV charger installation",
    ],
    metaTitle: "Electrician in {location} | Superstructure Services",
    metaDescription:
      "NICEIC-approved electricians in {location}, Kent. EICR reports, commercial & domestic electrical work. Free quotes from Superstructure Services.",
    canonicalSlug: "services/electrician-canterbury",
    icon: "",
  },
  {
    slug: "air-source-heat-pump",
    name: "Air Source Heat Pump Installation",
    shortName: "Air Source Heat Pumps",
    tagline: "Modern solutions that may work just for you.",
    description:
      "With the industry's leading suppliers, we are approved air source heat pump installers. Every project adheres to the rigorous standards of the Microgeneration Certification Scheme (MCS). Opting for a heat pump is an eco-conscious choice that lowers both your environmental impact and utility expenses. We provide full home energy assessments, supply, installation and aftercare.",
    features: [
      "MCS registered installers — guaranteed quality and consumer protection",
      "Full home energy assessment and bespoke system design",
      "Complete supply, installation and heating system integration",
      "Commissioning, training and aftercare support",
      "Access to Government funding and Boiler Upgrade Scheme grants",
    ],
    metaTitle: "Air Source Heat Pump Installation in {location} | Superstructure Services",
    metaDescription:
      "MCS-accredited air source heat pump installation in {location}, Kent. Eco-friendly heating with Government grant support. Get a free quote today.",
    canonicalSlug: "services/air-source-heat-pump-installation",
    icon: "",
  },
  {
    slug: "solar-panel-installation",
    name: "Solar Panel Installation",
    shortName: "Solar Panels",
    tagline: "Invest in the future, store your own energy, and be efficient.",
    description:
      "Harness the power of renewable energy with professional solar panel installation across Canterbury and Kent. As MCS accredited and TESLA certified installers, we provide high-quality, efficient, and reliable solar systems. We handle everything from initial consultation to UKPN grid connection, battery storage and EV charger integration.",
    features: [
      "MCS accredited and TESLA certified solar installers",
      "High-efficiency monocrystalline PV solar panels",
      "Solar panel battery storage with lithium-ion technology",
      "EV charger integration for electric vehicle owners",
      "10-year insurance-backed warranty, up to 25 years from some manufacturers",
    ],
    metaTitle: "Solar Panel Installation in {location} | Superstructure Services",
    metaDescription:
      "MCS-accredited solar panel installation in {location}, Kent. Battery storage, EV chargers & expert fitting by Superstructure Services. Free quote.",
    canonicalSlug: "services/solar-panel-installer-canterbury",
    icon: "",
  },
  {
    slug: "air-conditioning",
    name: "Air Conditioning",
    shortName: "Air Conditioning",
    tagline: "Beat the heat with our expert air conditioning services",
    description:
      "Premier air conditioning solutions in Canterbury, Kent. F-Gas certified engineers with over two decades of experience delivering tailored climate control systems for residential and commercial properties. We offer expert installation, maintenance, and repair, leveraging advanced technology and eco-friendly practices to enhance comfort and efficiency year-round.",
    features: [
      "F-Gas certified engineers — fully compliant installations",
      "Residential and commercial AC systems",
      "Discreet ceiling cassette and wall-mounted units",
      "Annual servicing and maintenance contracts",
      "Energy-efficient systems to reduce running costs",
    ],
    metaTitle: "Air Conditioning Installation in {location} | Superstructure Services",
    metaDescription:
      "F-Gas certified air conditioning installation in {location}, Kent. Supply, fit & servicing for homes & businesses. Superstructure Services.",
    canonicalSlug: "services/air-con-service-canterbury",
    icon: "",
  },
  {
    slug: "new-bathroom",
    name: "New Bathroom Installation",
    shortName: "New Bathrooms",
    tagline: "Kent's bathroom maestros make every splash stylish!",
    description:
      "With extensive experience in bathroom transformations, our team at Superstructure Services crafts stunning, functional bathrooms tailored to your vision. Whether it's a modern wet room or a classic suite, we blend expert craftsmanship with high-quality materials to deliver lasting results. We work closely with you to design spaces that suit your style and budget.",
    features: [
      "Full bathroom design, supply and installation",
      "Wet rooms, walk-in showers and luxury suites",
      "Tiling, waterproofing and plastering",
      "Plumbing, waste and heating integration",
      "Compliance with all UK building regulations",
    ],
    metaTitle: "New Bathroom Installation in {location} | Superstructure Services",
    metaDescription:
      "Expert bathroom fitters in {location}, Kent. Full bathroom design, supply and installation. Wet rooms, suites and refurbishments. Free quote.",
    canonicalSlug: "new-bathroom-fitter-canterbury",
    icon: "",
  },
  {
    slug: "property-refurbishment",
    name: "Refurbishments & Renovations",
    shortName: "Refurbishments",
    tagline: "Money may not buy happiness, but it's better to cry in a Lamborghini.",
    description:
      "Whatever is required in the upkeep or modernisation of any type of property in Kent, we can help. Tell us your thoughts and we can make your vision a reality. From minor works to stripping out your whole property and giving it a completely new facelift — we coordinate every trade efficiently to deliver a seamless, future-proof project that adds genuine value.",
    features: [
      "Full property refurbishments from concept to completion",
      "Domestic and commercial renovation works",
      "Home extensions and structural alterations",
      "Listed building renovation and restoration",
      "Design-to-build service for a stress-free project",
    ],
    metaTitle: "Property Refurbishment in {location} | Superstructure Services",
    metaDescription:
      "House refurbishment and renovation in {location}, Kent. Full project management from minor updates to complete transformations. Free quote available.",
    canonicalSlug: "services/property-refurbishment",
    icon: "",
  },
  {
    slug: "plumbing-drainage",
    name: "Plumbing & Drainage",
    shortName: "Plumbing & Drainage",
    tagline: "Not just pipe dreams!",
    description:
      "Let us be your trusted plumber in Canterbury and Kent. From a brand new boiler installation to the bathroom of your dreams, we have the qualified plumbing and heating engineers to fulfil your requirements. Gas Safe, MCS Registered and DDA Compliant — we offer everything from domestic installations to commercial and medical grade installations.",
    features: [
      "Gas Safe registered boiler installations and servicing",
      "Underfloor heating plumbing and pressurised systems",
      "Drainage, blockage clearing and pipe repairs",
      "Bathroom and wet room plumbing",
      "Water softeners, outdoor taps and irrigation systems",
    ],
    metaTitle: "Plumber in {location} | Superstructure Services",
    metaDescription:
      "Gas Safe registered plumbers in {location}, Kent. Boilers, bathrooms, drainage & heating by Superstructure Services. Free no-obligation quotes.",
    canonicalSlug: "services/plumber-in-canterbury",
    icon: "",
  },
  {
    slug: "carpentry",
    name: "Carpentry",
    shortName: "Carpentry",
    tagline: "If opportunity doesn't knock, build a door.",
    description:
      "Elevate your property with expert carpentry services tailored to Canterbury, Kent, and surrounding areas. Our skilled carpenters bring years of experience to every project, delivering precision craftsmanship for both residential and commercial spaces. From bespoke joinery to structural work, we are committed to enhancing your home or business with durable, high-quality solutions.",
    features: [
      "Bespoke joinery — custom doors, windows, staircases and furniture",
      "First and second fix carpentry for new builds and renovations",
      "Listed building and heritage property specialists",
      "Structural carpentry — framing, shuttering and roofing timbers",
      "Sustainable and eco-friendly timber sourcing",
    ],
    metaTitle: "Carpenter in {location} | Superstructure Services",
    metaDescription:
      "Expert carpenters in {location}, Kent. Bespoke joinery, structural carpentry & heritage work. First/second fix by Superstructure Services.",
    canonicalSlug: "services/carpenter-in-canterbury",
    icon: "",
  },
  {
    slug: "garage-workshop-conversion",
    name: "Workshop & Garage Conversions",
    shortName: "Garage Conversions",
    tagline: "Time to make a change?",
    description:
      "Maximise your home's potential with a professionally executed garage or workshop conversion. Our team manages complete transformations — including interior fittings, structural work, insulation, electrics and external finishes — ensuring a cohesive and polished result that adds genuine value to your Canterbury property.",
    features: [
      "Garage conversion to home office, gym, bedroom or playroom",
      "Full structural work, insulation and damp proofing",
      "Plumbing, electrical and heating installation",
      "Internal plastering, flooring and decoration",
      "Increases property value without planning permission in most cases",
    ],
    metaTitle: "Garage Conversion in {location} | Superstructure Services",
    metaDescription:
      "Professional garage conversion in {location}, Kent. Transform your garage into living space. Full build by Superstructure Services. Free quote.",
    canonicalSlug: "services/garage-workshop-conversion",
    icon: "",
  },
  {
    slug: "roofing",
    name: "Roofing",
    shortName: "Roofing",
    tagline: "If you define the problem correctly, you almost have the solution.",
    description:
      "If you require roof works to any type of property we will have the answer. Experienced tradesmen with a wealth of knowledge to remedy or oversee your project. Materials in this industry are ever evolving — we can take a modern approach or more traditional, whatever you require. From repairs to complete re-roofing, we have it covered.",
    features: [
      "New roof installations — pitched and flat roof systems",
      "3-layer felt, GRP fibreglass and EPDM single-ply membranes",
      "Slate, clay, concrete and Kent Peg tile work",
      "Listed building roofing to conservation specifications",
      "Emergency roof repair support across Kent",
    ],
    metaTitle: "Roofing in {location} | Superstructure Services",
    metaDescription:
      "Expert roofing in {location}, Kent. New roofs, repairs, flat roofing & listed building specialists. Superstructure Services. Free quote today.",
    canonicalSlug: "services/new-roof-installation-repairs",
    icon: "",
  },
  {
    slug: "home-office-conversion",
    name: "Home Office Conversions",
    shortName: "Home Office",
    tagline: "If you can work from home then why work from anywhere else?",
    description:
      "Now more of us work from home, why not have a bespoke office set up? We offer full redesign of a room for this purpose — layout, rewire, dedicated data systems, supply of office equipment and furniture, right down to custom-built computers supplied by leading UK companies and set up by a computer technician to your requirements.",
    features: [
      "Full room redesign and structural alterations if required",
      "Dedicated electrical rewire and data network cabling",
      "Custom-built furniture and storage solutions",
      "Supply and installation of office equipment",
      "Climate control and acoustic insulation",
    ],
    metaTitle: "Home Office Conversion in {location} | Superstructure Services",
    metaDescription:
      "Bespoke home office conversion in {location}, Kent. Full design, build, data systems & furniture. Superstructure Services. Get a free quote.",
    canonicalSlug: "services/office-conversion",
    icon: "",
  },
  {
    slug: "cinema-room-installation",
    name: "Cinema Room Installation",
    shortName: "Cinema Rooms",
    tagline: "I'm trying to free your mind, Neo. But I can only show you the door...",
    description:
      "If you're looking for the addition of a home cinema to your property, we have the answer. From dedicated cinema rooms to a family cinema lounge, we can create your dream home entertainment space. All connective cables are managed and hidden into the structure of your building for a truly professional finish — from design to final demonstration.",
    features: [
      "Full room redesign with tiered seating options",
      "Professional AV equipment supply and installation",
      "All cables hidden within the building structure",
      "Sound insulation and acoustic treatment",
      "Wireless and hardwired system options",
    ],
    metaTitle: "Cinema Room Installation in {location} | Superstructure Services",
    metaDescription:
      "Bespoke cinema room installation in {location}, Kent. Full design, AV fitting & sound insulation. Create your dream home cinema. Free quote.",
    canonicalSlug: "services/cinema-room-installation",
    icon: "",
  },
  {
    slug: "driveways-paving",
    name: "Driveways & Paving",
    shortName: "Driveways & Paving",
    tagline: "We lay it down right, for driveways and patios that delight!",
    description:
      "Transform your property with our premier driveways and paving services in Canterbury, Kent. As trusted local specialists, we deliver durable, stylish and professionally crafted surfaces that enhance your home's kerb appeal. Our process begins with complete removal of existing materials, precise ground preparation and expert laying of your chosen paving.",
    features: [
      "Block paving, porcelain, sandstone and tarmacadam",
      "Resin bound and bonded surfaces",
      "Gravel, concrete, shingle and decorative stone",
      "Dropped kerbs, retaining walls and decorative walls",
      "Mains drainage and soakaway installation",
    ],
    metaTitle: "Driveways & Paving in {location} | Superstructure Services",
    metaDescription:
      "Expert driveways and paving in {location}, Kent. Block paving, resin, tarmac, porcelain & more. Superstructure Services. Free quote today.",
    canonicalSlug: "services/driveways-and-paving-canterbury",
    icon: "",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
