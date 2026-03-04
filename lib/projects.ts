import { DOMAIN } from "./services";

export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  image: string;
  images: string[];
  description: string;
  longDescription: string;
  tags: string[];
  serviceSlug: string;
  metaTitle: string;
  metaDescription: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "external-property-maintenance-and-repairs",
    title: "External Property Maintenance and Repairs",
    category: "Refurbishments and Conversions",
    location: "Canterbury",
    image: "/images/Property-maintanence-in-Canterbury-Kent.jpg",
    images: [
      "/images/Property-maintanence-in-Canterbury-Kent.jpg",
      "/images/Property-Refurbishment-in-Canterbury.jpg",
      "/images/Professional-roofing-service-in-Canterbury-Kent.jpg",
    ],
    description: "Full external maintenance and repair programme on a Canterbury period property, covering carpentry, roofing and structural repairs.",
    longDescription: "This project involved a comprehensive external maintenance and repair programme for a period property in Canterbury. Works included structural carpentry repairs to fascias, soffits and bargeboards, chimney repointing, roof tile replacement, external render repairs, and full redecoration to weatherproof the building envelope. Our multi-trade team coordinated all works efficiently to minimise disruption to the client, delivering a fully weathertight and restored exterior.",
    tags: ["Carpentry", "Roofing", "Structural Repairs", "External Maintenance"],
    serviceSlug: "property-refurbishment",
    metaTitle: "External Property Maintenance and Repairs in Canterbury | Superstructure Services",
    metaDescription: "Full external maintenance and repair project in Canterbury, Kent. Structural carpentry, roofing and render repairs by Superstructure Services.",
  },
  {
    slug: "electrician-rewiring-service-canterbury",
    title: "Full Electrical Re-Wiring",
    category: "Electrical works",
    location: "Canterbury",
    image: "/images/home-electrician-in-canterbury-rewiring-fuse-metering.jpg",
    images: [
      "/images/home-electrician-in-canterbury-rewiring-fuse-metering.jpg",
      "/images/electrician.jpg",
    ],
    description: "Complete domestic electrical re-wiring of a Canterbury property, including new consumer unit, all circuits and full certification.",
    longDescription: "A complete rewire of a 4-bedroom Canterbury property carried out by our NICEIC-approved electricians. The project included removal of all existing wiring, installation of a new 18-way consumer unit with RCD protection, rewiring of all lighting and power circuits, installation of new sockets, switches and light fittings throughout, and full testing and certification to BS 7671. An Electrical Installation Condition Report (EICR) was produced on completion. Works were phased to allow the client to remain in the property throughout.",
    tags: ["Full Rewire", "NICEIC Approved", "Consumer Unit", "EICR", "BS 7671"],
    serviceSlug: "electrician-canterbury",
    metaTitle: "Full Electrical Rewiring in Canterbury | Superstructure Services",
    metaDescription: "Complete domestic electrical rewiring in Canterbury, Kent. NICEIC-approved electricians, new consumer unit, full certification. Superstructure Services.",
  },
  {
    slug: "bathroom-installation-canterbury-plumber",
    title: "New Bathroom and Plumbing Maintenance",
    category: "Plumbing and Drainage",
    location: "Canterbury",
    image: "/images/classic-modern-bathroom-refurbishment-service-canterbury.jpg",
    images: [
      "/images/classic-modern-bathroom-refurbishment-service-canterbury.jpg",
      "/images/Bathrooms-in-Canterbury.jpg",
      "/images/bathroom.jpg",
    ],
    description: "New bathroom installation and plumbing maintenance works in Canterbury, including full suite replacement, tiling and plumbing upgrades.",
    longDescription: "This project covered the full replacement of a dated bathroom suite in a Canterbury home, along with associated plumbing maintenance works throughout the property. The new bathroom features a walk-in shower enclosure with large-format wall tiles, a freestanding bath, wall-hung vanity unit and concealed cistern WC. All plumbing was upgraded to modern standards, including new isolation valves, chrome fittings and silicone finishing. Our Gas Safe registered plumbers also serviced the boiler and replaced a leaking radiator valve as part of the same visit.",
    tags: ["Bathroom Installation", "Tiling", "Gas Safe", "Plumbing", "Walk-in Shower"],
    serviceSlug: "new-bathroom-fitter-canterbury",
    metaTitle: "New Bathroom Installation in Canterbury | Superstructure Services",
    metaDescription: "New bathroom installation and plumbing maintenance in Canterbury, Kent. Full suite, tiling and plumbing by Superstructure Services.",
  },
  {
    slug: "property-maintenance-canterbury",
    title: "Full Property Refurbishment & Maintenance",
    category: "Refurbishments and Conversions",
    location: "Canterbury",
    image: "/images/Property-Refurbishment-in-Canterbury.jpg",
    images: [
      "/images/Property-Refurbishment-in-Canterbury.jpg",
      "/images/Property-maintanence-in-Canterbury.jpg",
      "/images/Property-maintanence-in-Canterbury-Kent.jpg",
    ],
    description: "Comprehensive full property refurbishment and ongoing maintenance contract for a Canterbury residential property.",
    longDescription: "A full internal refurbishment of a Canterbury terrace property commissioned by a private landlord. Works included full replastering throughout, new flooring on all levels, kitchen and bathroom refurbishment, complete redecoration, carpentry repairs to doors, frames and skirting, and electrical testing and remedial works. On completion we agreed an ongoing maintenance contract to provide responsive repairs and planned maintenance, ensuring the property remains in lettable condition year-round. This is typical of our facilities management offering for Canterbury landlords.",
    tags: ["Full Refurbishment", "Landlord Services", "Multi-Trade", "Carpentry", "Flooring"],
    serviceSlug: "property-refurbishment",
    metaTitle: "Full Property Refurbishment in Canterbury | Superstructure Services",
    metaDescription: "Complete property refurbishment and maintenance in Canterbury, Kent. Multi-trade project management by Superstructure Services.",
  },
  {
    slug: "carpentry-hardwood-decking",
    title: "Carpentry & Hardwood Decking",
    category: "Carpentry",
    location: "Canterbury",
    image: "/images/Carpenter-in-Canterbury.jpg",
    images: [
      "/images/Carpenter-in-Canterbury.jpg",
      "/images/carpentry.jpg",
    ],
    description: "Bespoke hardwood decking installation and carpentry works for a Canterbury garden, using sustainably sourced hardwood timber.",
    longDescription: "Our carpentry team designed and installed a large bespoke hardwood decking area for a Canterbury homeowner, transforming an overgrown garden into an attractive outdoor entertaining space. The decking was constructed from sustainably sourced hardwood with a hidden fixing system for a clean finish, integrated LED lighting, built-in seating with storage, and a matching pergola structure. Associated joinery works included new garden gate, post and rail fencing, and bespoke raised planter beds to complement the design. All timber was treated and oiled on completion.",
    tags: ["Hardwood Decking", "Bespoke Joinery", "Outdoor Lighting", "Pergola", "Garden Carpentry"],
    serviceSlug: "carpenter-in-canterbury",
    metaTitle: "Bespoke Hardwood Decking & Carpentry in Canterbury | Superstructure Services",
    metaDescription: "Bespoke hardwood decking installation and garden carpentry in Canterbury, Kent. Expert carpenters by Superstructure Services.",
  },
  {
    slug: "listed-building-refurb-canterbury",
    title: "Listed Building Restoration & Kitchen Installation",
    category: "Listed Building Restoration",
    location: "Canterbury",
    image: "/images/canterbury-listed-building-refurbishment.jpg",
    images: [
      "/images/canterbury-listed-building-refurbishment.jpg",
      "/images/Kitchen-Installation-in-Canterbury.jpg",
      "/images/Kitchen-Installation-in-Canterbury-2.jpg",
    ],
    description: "Sympathetic restoration of a Grade II listed Canterbury property combined with a bespoke kitchen installation designed around the historic character.",
    longDescription: "This was one of our most complex and rewarding projects — a Grade II listed building in Canterbury city centre requiring sympathetic restoration throughout alongside a full kitchen installation. Working closely with Canterbury City Council conservation officers, we restored original lime plasterwork, repaired and draught-proofed original sash windows, restored period cornicing and reinstated period-appropriate joinery. The new kitchen was designed specifically to complement the historic character of the property, using shaker-style cabinetry in a period-appropriate palette with solid marble worktops and traditional brass fittings. All works were carried out in strict compliance with listed building consent conditions.",
    tags: ["Grade II Listed", "Conservation Area", "Lime Plaster", "Sash Windows", "Bespoke Kitchen"],
    serviceSlug: "listed-building-restoration-canterbury",
    metaTitle: "Listed Building Restoration & Kitchen in Canterbury | Superstructure Services",
    metaDescription: "Grade II listed building restoration and kitchen installation in Canterbury. Expert conservation work by Superstructure Services.",
  },
  {
    slug: "roof-repair-canterbury",
    title: "External Refurbishment and Roof Repair",
    category: "Roofing",
    location: "Canterbury",
    image: "/images/Professional-roofing-service-in-Canterbury-Kent.jpg",
    images: [
      "/images/Professional-roofing-service-in-Canterbury-Kent.jpg",
      "/images/Property-maintanence-in-Canterbury-Kent.jpg",
    ],
    description: "Full external refurbishment and emergency roof repair on a Canterbury property, including chimney works and external redecoration.",
    longDescription: "Following storm damage, this Canterbury property required urgent roof repairs alongside a planned external refurbishment programme. Roofing works included emergency tarpaulin installation, replacement of storm-damaged clay plain tiles with matching reclaimed tiles, full chimney stack repointing with lime mortar, lead flashing replacement and soaker installation. The external refurbishment programme covered masonry repairs, full repointing of external brickwork, repairs to render, replacement of all external joinery, and full external redecoration to a high specification. The project was delivered within 6 weeks from instruction.",
    tags: ["Emergency Roof Repair", "Clay Tiles", "Chimney Repointing", "Lead Flashing", "External Redecoration"],
    serviceSlug: "new-roof-installation-repairs",
    metaTitle: "External Refurbishment & Roof Repair in Canterbury | Superstructure Services",
    metaDescription: "External refurbishment and emergency roof repair in Canterbury, Kent. Chimney works, clay tiles and full redecoration by Superstructure Services.",
  },
  {
    slug: "entrance-restoration-canterbury",
    title: "Entrance Restoration in Canterbury",
    category: "Refurbishments and Conversions",
    location: "Canterbury",
    image: "/images/Property-Refurbishment-in-Canterbury.jpg",
    images: [
      "/images/Property-Refurbishment-in-Canterbury.jpg",
      "/images/Carpenter-in-Canterbury.jpg",
    ],
    description: "Full restoration of a period entrance hallway and front elevation in Canterbury, combining structural repairs with bespoke joinery.",
    longDescription: "This entrance restoration project involved the full renovation of the front entrance hall and external elevation of a period Canterbury property. Works included restoration of the original Victorian tiled hallway floor, stripping and repairing original stripped pine floorboards on the staircase, replacing a damaged original front door with a bespoke hardwood door to match the period character, and full decorative restoration of the entrance hall. Externally, the front elevation was repointed, the boundary wall repaired and a new front path laid in traditional Yorkshire stone. The finished result significantly improved both the property's kerb appeal and its resale value.",
    tags: ["Period Restoration", "Victorian Tiles", "Bespoke Front Door", "External Repointing", "Hallway Renovation"],
    serviceSlug: "property-refurbishment",
    metaTitle: "Entrance Restoration in Canterbury | Superstructure Services",
    metaDescription: "Period entrance restoration in Canterbury, Kent. Bespoke joinery, Victorian tiles and external works by Superstructure Services.",
  },
  {
    slug: "library-renovation-ashford",
    title: "Library Renovation",
    category: "Refurbishments and Conversions",
    location: "Ashford",
    image: "/images/Carpenter-in-Canterbury.jpg",
    images: [
      "/images/Carpenter-in-Canterbury.jpg",
      "/images/carpentry.jpg",
      "/images/home-office.jpg",
    ],
    description: "Full renovation of a commercial library space in Ashford, including bespoke shelving, flooring, electrical upgrade and full redecoration.",
    longDescription: "A full renovation of a library and reading room in Ashford, commissioned by a private client. The project involved stripping the space back to shell and rebuilding it as a premium reading and reference library. Bespoke floor-to-ceiling shelving was designed and built by our carpentry team in solid oak with integrated LED strip lighting, a rolling library ladder system, and a reading nook with integrated seating and storage. Flooring was replaced with solid oak boards to match the shelving, all electrical was upgraded with a new dedicated circuit and data points, and the room was fully replastered and decorated. The result is a truly stunning bespoke space.",
    tags: ["Bespoke Shelving", "Solid Oak", "Library Ladder", "LED Lighting", "Joinery"],
    serviceSlug: "carpenter-in-canterbury",
    metaTitle: "Library Renovation in Ashford, Kent | Superstructure Services",
    metaDescription: "Bespoke library renovation in Ashford, Kent. Solid oak shelving, LED lighting and full refurbishment by Superstructure Services.",
  },
  {
    slug: "home-office-creation-in-canterbury",
    title: "Home Office Creation",
    category: "Home Office",
    location: "Sturry",
    image: "/images/Home-office-creation-Canterbury-Kent.jpg",
    images: [
      "/images/Home-office-creation-Canterbury-Kent.jpg",
      "/images/home-office.jpg",
      "/images/Garage-Conversion-in-Canterbury.jpg",
    ],
    description: "Garage conversion into a bespoke home office with dedicated data cabling, built-in furniture, climate control and separate entrance.",
    longDescription: "This garage conversion project in Sturry transformed an underused double garage into a high-spec home office suite. The conversion included full insulation to walls, floor and ceiling, installation of a mini-split air conditioning unit for year-round climate control, full electrical rewire with a dedicated consumer unit, data cabling with Cat6 throughout and a network rack, bespoke built-in desk and shelving units, and a new external door with separate access from the garden. The space was plastered, carpeted and decorated to a professional standard. A fully equipped workstation with dual monitors was also supplied and configured by our IT partner.",
    tags: ["Garage Conversion", "Home Office", "Data Cabling", "Air Conditioning", "Bespoke Furniture"],
    serviceSlug: "office-conversion",
    metaTitle: "Home Office Creation in Canterbury | Superstructure Services",
    metaDescription: "Garage to home office conversion in Sturry, Canterbury. Data cabling, climate control and bespoke furniture by Superstructure Services.",
  },
  {
    slug: "domestic-refurbishment-in-canterbury",
    title: "Domestic Refurbishment",
    category: "Refurbishments and Conversions",
    location: "Bridge",
    image: "/images/Property-maintanence-in-Canterbury.jpg",
    images: [
      "/images/Property-maintanence-in-Canterbury.jpg",
      "/images/Property-Refurbishment-in-Canterbury.jpg",
      "/images/Kitchen-Installation-in-Canterbury-3.jpg",
    ],
    description: "Full internal and external refurbishment of a 4-bedroom detached property in Bridge, Kent — new kitchen, bathrooms, flooring, rewire and re-plaster.",
    longDescription: "A comprehensive full-property refurbishment of a 4-bedroom detached house in Bridge, near Canterbury. The project was managed by Superstructure Services from inception to completion, coordinating all trades on behalf of the client. Works included full internal replastering, complete electrical rewire with new consumer unit, installation of a new gas central heating system with underfloor heating to the ground floor, a new bespoke kitchen, two new bathrooms, engineered oak flooring throughout the ground floor, carpeting upstairs, full internal and external redecoration, and new uPVC windows and doors. The project took 12 weeks and was delivered on time and on budget.",
    tags: ["Full Refurbishment", "Multi-Trade", "Project Management", "New Kitchen", "Rewire"],
    serviceSlug: "property-refurbishment",
    metaTitle: "Full Domestic Refurbishment in Canterbury | Superstructure Services",
    metaDescription: "Complete 4-bedroom property refurbishment in Bridge, Kent. Full project management by Superstructure Services. Kitchen, bathrooms, rewire and more.",
  },
  {
    slug: "underfloor-heating-in-canterbury",
    title: "Underfloor Heating Installation",
    category: "Underfloor heating",
    location: "Chartham",
    image: "/images/Underfloor-Heating-in-Canterbury.jpg",
    images: [
      "/images/Underfloor-Heating-in-Canterbury.jpg",
    ],
    description: "Retrofit underfloor heating throughout a Victorian terrace in Chartham using milled channel technique — no floor level changes required.",
    longDescription: "This underfloor heating installation in a Victorian terrace in Chartham showcases our specialist retrofit technique. Rather than lifting floors or raising levels, we milled channels directly into the existing screed using specialist equipment, allowing the heating pipes to sit flush below the finished floor level. This means no disruption to door frames, skirtings or existing finishes. The system was installed on the full ground floor — kitchen, dining room and living room — connected to the existing combi boiler with a smart thermostat control. The client reported a dramatic improvement in comfort and a reduction in heating bills within the first winter.",
    tags: ["Retrofit UFH", "Milled Channel", "Victorian Property", "Smart Thermostat", "No Floor Raise"],
    serviceSlug: "underfloor-heating-installation",
    metaTitle: "Underfloor Heating Installation in Canterbury | Superstructure Services",
    metaDescription: "Retrofit underfloor heating in Chartham, Canterbury. Milled channel technique, no floor raise needed. Superstructure Services, Kent.",
  },
  {
    slug: "plumbing-and-drainage-in-canterbury",
    title: "New Bathroom, Plumbing and Drainage",
    category: "Plumbing and Drainage",
    location: "Faversham",
    image: "/images/Bathrooms-in-Canterbury.jpg",
    images: [
      "/images/Bathrooms-in-Canterbury.jpg",
      "/images/classic-modern-bathroom-refurbishment-service-canterbury.jpg",
    ],
    description: "Luxury wet room installation with underfloor heating, bespoke tiling, custom shower enclosure and full drainage works in Faversham.",
    longDescription: "A luxury bathroom and drainage project in Faversham comprising a full wet room conversion, new drainage system and associated plumbing works. The wet room features large-format Italian porcelain tiles, a bespoke frameless glass shower screen, linear drain with brushed brass grating, electric underfloor heating and a wall-hung vanity unit with integrated LED mirror. All drainage was redesigned and upgraded with new soil stack connections and a linear waste system. Our Gas Safe engineers also replaced the boiler and upgraded the hot water cylinder as part of the same project, giving the client a complete, modern plumbing system.",
    tags: ["Wet Room", "Luxury Bathroom", "Gas Safe", "Linear Drain", "Underfloor Heating"],
    serviceSlug: "plumber-in-canterbury",
    metaTitle: "New Bathroom & Plumbing in Faversham | Superstructure Services",
    metaDescription: "Luxury wet room and plumbing project in Faversham, Kent. Gas Safe, drainage and full installation by Superstructure Services.",
  },
  {
    slug: "commercial-refurbishment-in-canterbury",
    title: "Commercial Refurbishment",
    category: "Refurbishments and Conversions",
    location: "Whitstable",
    image: "/images/Facilities-building-management-firm-in-Canterbury-Kent.jpg",
    images: [
      "/images/Facilities-building-management-firm-in-Canterbury-Kent.jpg",
      "/images/Property-Refurbishment-in-Canterbury.jpg",
    ],
    description: "Complete commercial office refurbishment in Whitstable — full strip-out, rewire, new flooring, plaster, decoration and professional fit-out.",
    longDescription: "A full commercial refurbishment of a 2,500 sq ft office suite in Whitstable, carried out on behalf of a commercial landlord ahead of a new tenancy. Works included complete strip-out of existing fit-out, structural alterations to create an open-plan layout, full electrical rewire and data infrastructure, new suspended ceiling with recessed LED lighting, replacement of all windows, new commercial-grade LVT flooring throughout, full plastering and Category A decoration. The project also included installation of a new air conditioning system, kitchenette fit-out, and accessible toilet installation. Delivered in 8 weeks to meet the client's handover deadline.",
    tags: ["Commercial Refurbishment", "Office Fit-Out", "Category A", "Air Conditioning", "Data Infrastructure"],
    serviceSlug: "facility-building-management",
    metaTitle: "Commercial Refurbishment in Whitstable | Superstructure Services",
    metaDescription: "Full commercial office refurbishment in Whitstable, Kent. Strip-out, rewire, fit-out and decoration by Superstructure Services.",
  },
  {
    slug: "kitchen-installation-in-canterbury-1",
    title: "Kitchen Installation in Canterbury",
    category: "Kitchen Installation",
    location: "Canterbury",
    image: "/images/Kitchen-Installation-in-Canterbury.jpg",
    images: [
      "/images/Kitchen-Installation-in-Canterbury.jpg",
      "/images/Kitchen-Installation-in-Canterbury-2.jpg",
      "/images/Kitchen-Installation-in-Canterbury-3.jpg",
    ],
    description: "Full kitchen refit in Canterbury including structural wall removal, bespoke cabinetry, marble worktops from Global Granite and integrated appliances.",
    longDescription: "A premium kitchen installation in a large Canterbury family home. The project began with structural work — removal of a load-bearing wall between the kitchen and dining room to create an open-plan kitchen/diner. A steel beam was installed to carry the load, and the space was fully replastered. The new kitchen features bespoke handleless cabinetry in a warm white with full-height larder units, a central island with marble worktop from our trade account with Global Granite, and a full suite of integrated Bosch appliances including double oven, induction hob, dishwasher and wine cooler. New porcelain floor tiles, LED under-cabinet lighting and a boiling water tap complete the specification.",
    tags: ["Bespoke Kitchen", "Structural Work", "Marble Worktops", "Integrated Appliances", "Island"],
    serviceSlug: "kitchen-installation-service",
    metaTitle: "Kitchen Installation in Canterbury | Superstructure Services",
    metaDescription: "Bespoke kitchen installation in Canterbury, Kent. Structural work, marble worktops and integrated appliances by Superstructure Services.",
  },
  {
    slug: "roofing-in-canterbury-1",
    title: "Roofing in Canterbury",
    category: "Roofing",
    location: "Canterbury",
    image: "/images/Professional-roofing-service-in-Canterbury-Kent.jpg",
    images: [
      "/images/Professional-roofing-service-in-Canterbury-Kent.jpg",
    ],
    description: "Complete roof replacement on a period Canterbury property using traditional handmade clay peg tiles, completed to conservation area standards.",
    longDescription: "A complete roof replacement on a period terraced property within a Canterbury conservation area. The existing covering of machine-made clay tiles was stripped, all battens replaced, new breathable roofing membrane installed, and the roof recovered with handmade Kent clay peg tiles to match the surrounding conservation area properties. The chimney stacks were repointed with traditional lime mortar and new lead flashings installed. All work was carried out in accordance with Canterbury City Council conservation guidelines. New fascias and soffits were installed in maintenance-free cellular PVC, and the guttering and downpipes were replaced in cast-iron effect to complement the period style.",
    tags: ["Clay Peg Tiles", "Conservation Area", "Lime Mortar", "Lead Flashing", "Period Property"],
    serviceSlug: "new-roof-installation-repairs",
    metaTitle: "Roofing in Canterbury | Superstructure Services",
    metaDescription: "Period roof replacement in Canterbury using handmade clay peg tiles. Conservation area specialists. Superstructure Services, Kent.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getRelatedProjects(project: Project, count = 3): Project[] {
  return PROJECTS.filter(
    (p) => p.slug !== project.slug && p.category === project.category
  )
    .concat(PROJECTS.filter((p) => p.slug !== project.slug && p.category !== project.category))
    .slice(0, count);
}
