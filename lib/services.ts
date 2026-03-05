export const PHONE = "07931 686596";
export const EMAIL = "enquiries@superstructureservices.co.uk";
export const COMPANY = "Superstructure Services";
export const DOMAIN = "https://superstructureservices.co.uk";
export const ADDRESS = "Canterbury, Kent";

export interface FAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  features: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
  canonicalSlug: string; // the existing Canterbury URL slug
  icon: string;
  heroImage?: string;
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
      "Trade account access to specialist stone suppliers",
    ],
    faqs: [
      { q: "How long does a kitchen installation take in Canterbury?", a: "Most kitchen installations take between 5 and 14 days depending on the scope. A straightforward swap-out of units and worktops is typically quicker, while a full knock-through with new plumbing, electrics and tiling will take longer. We'll give you a realistic programme before any work starts so you can plan accordingly." },
      { q: "Do I need planning permission for a new kitchen in Kent?", a: "In most cases, no. A kitchen replacement or remodel is considered permitted development. However, if your property is listed or you're planning a structural alteration such as removing a wall, you may need listed building consent or building regulations approval. We advise on this as part of our initial survey." },
      { q: "Can you remove a wall to create an open-plan kitchen diner?", a: "Yes. We handle the full structural process — including an engineer's assessment where required, steel beam installation, building control sign-off and making good. Open-plan kitchen diners are one of the most popular projects we carry out across Canterbury and Kent." },
      { q: "What worktop materials do you install?", a: "We fit the full range — laminate, solid wood, Corian, quartz, granite and marble. Through our trade accounts with specialist stone suppliers, we can access materials not available on the high street and pass on competitive rates to our clients." },
      { q: "Do you handle the electrics and plumbing as part of a kitchen fit?", a: "Yes. Our in-house electricians and Gas Safe registered plumbers are fully integrated into every kitchen project, so you don't need to coordinate separate contractors. This covers new circuits, extraction, appliance connections, boiling water taps, and any drainage or water supply alterations." },
      { q: "How do I get a quote for a new kitchen in Canterbury or Kent?", a: "Contact us with your rough measurements, any inspiration photos you have, and a note of what appliances you're looking to include. We'll arrange a visit, take proper measurements and produce a detailed written quote. There's no charge and no obligation." },
    ],
    metaTitle: "Kitchen Installation in {location} | Superstructure Services",
    metaDescription:
      "Expert kitchen installation in {location}, Kent. Bespoke designs, worktop fitting & full refits by Superstructure Services. Free quote available.",
    canonicalSlug: "services/kitchen-installation-service",
    icon: "",
    heroImage: "/images/services/kitchen-installation.jpg",
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
    faqs: [
      { q: "Can underfloor heating be retrofitted into an existing Kent home?", a: "Yes. We specialise in a dust-free retrofit technique where channels are milled directly into your existing screed. The heating pipes are laid into those channels and the floor is reinstated — meaning no full excavation and minimal disruption compared to a traditional install." },
      { q: "Is underfloor heating compatible with wooden or LVT flooring?", a: "Yes, both engineered hardwood and LVT are fully compatible with underfloor heating provided the correct temperature limits are observed. We specify the right system output and thermostat settings to protect your floor covering." },
      { q: "What types of flooring do you install in Canterbury and Kent?", a: "We install carpet, engineered hardwood, solid wood, LVT, ceramic and porcelain tiles, and specialist finishes. We handle everything from subfloor preparation through to the finished surface." },
      { q: "Does underfloor heating work with a heat pump?", a: "Underfloor heating and air source heat pumps are an ideal combination. Heat pumps operate most efficiently at the lower flow temperatures that UFH requires, which makes the pairing more efficient than radiators." },
      { q: "How long does underfloor heating take to heat a room?", a: "Wet underfloor heating typically takes 2–4 hours to reach the set temperature from cold, though most homeowners keep it on a timed programme so it's always warm when needed. Electric systems warm faster. We help you set up the schedule correctly at handover." },
      { q: "Do you supply and fit the flooring, or just install the heating system?", a: "We do both. Our team can manage the full package — underfloor heating installation, screed or board work, and the finished floor covering of your choice — all under one contract so you have a single point of responsibility." },
    ],
    metaTitle: "Flooring & Underfloor Heating in {location} | Superstructure Services",
    metaDescription:
      "Flooring installation and underfloor heating in {location}, Kent. All floor types fitted. Retrofit or new installation by Superstructure Services.",
    canonicalSlug: "services/underfloor-heating-installation",
    icon: "",
    heroImage: "/images/Underfloor-Heating-in-Canterbury.jpg",
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
    faqs: [
      { q: "What does facilities building management include?", a: "It covers all planned and reactive maintenance for a property — from plumbing and gas to electrical, air conditioning, carpentry and decoration. We act as your single point of contact for everything the building needs, coordinating the right trades at the right time." },
      { q: "Do you offer facilities management for residential as well as commercial properties in Kent?", a: "Yes. We work with landlords, property management companies, estate managers and business owners across Canterbury and Kent. Whether it's a single rental property or a portfolio of commercial units, we tailor a programme to suit." },
      { q: "What is the difference between planned and reactive maintenance?", a: "Planned maintenance involves scheduled inspections and servicing — boiler services, electrical testing, gutter clears — to prevent problems before they occur. Reactive maintenance is our response when something breaks or fails unexpectedly. We offer both as part of a managed contract." },
      { q: "How quickly can you respond to emergency maintenance callouts in Canterbury?", a: "For clients on a managed contract, we prioritise response and aim to attend urgently where there is a risk to the property or occupants. We cover Canterbury and the wider Kent area and keep our schedule flexible to accommodate emergencies." },
      { q: "Can you manage EICR, gas safety and boiler servicing compliance for landlords?", a: "Yes. We can schedule and carry out all statutory compliance works for landlords — EICR electrical testing, gas safety certificates, boiler servicing and legionella risk assessments — and provide the relevant certificates for your records." },
      { q: "Do you provide a schedule of works and reporting for each property?", a: "Yes. We provide written reports, photographic evidence and certification after every visit so you have a clear audit trail. This is particularly important for commercial clients and landlords who need to demonstrate compliance." },
    ],
    metaTitle: "Facility Building Management in {location} | Superstructure Services",
    metaDescription:
      "Professional facilities building management in {location}, Kent. Planned & reactive maintenance, plumbing, electrical & AC by Superstructure Services.",
    canonicalSlug: "services/facility-building-management",
    icon: "",
    heroImage: "/images/facility-management/Facilities-building-management-firm-in-Canterbury-Kent.webp",
  },
  {
    slug: "electrician",
    name: "Electrician",
    shortName: "Electrician",
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
    faqs: [
      { q: "What is an EICR and do I need one as a landlord in Kent?", a: "An EICR (Electrical Installation Condition Report) is a formal assessment of your property's wiring and electrical installation. Since 2020, UK landlords are legally required to have an EICR carried out at least every five years and provide a copy to tenants. Our NICEIC-approved electricians carry these out across Canterbury and Kent." },
      { q: "Do you install EV chargers in Canterbury?", a: "Yes. We install domestic and commercial EV chargers, including smart chargers compatible with solar panel systems. We handle all the wiring, earthing and any consumer unit upgrades needed to safely support the charger." },
      { q: "How do I know if my consumer unit needs replacing?", a: "Older consumer units with rewireable fuses or early MCBs often don't meet current safety standards and can fail an EICR. Signs it may need replacing include frequent tripping, a plastic (rather than metal) enclosure, or a recommendation on a recent inspection report. We assess this as part of any electrical survey." },
      { q: "Can you install smart home systems and lighting control in Kent homes?", a: "Yes. We install smart home systems including smart lighting, heating control, security and whole-home automation. All cabling is run neatly within the building structure for a clean, professional result." },
      { q: "Are your electricians NICEIC approved?", a: "Yes. Our electricians are NICEIC approved, which means all work is inspected and certified to the current edition of BS7671 (the UK wiring regulations). You receive an Electrical Installation Certificate for any notifiable work." },
      { q: "What electrical work requires building regulations notification in Canterbury?", a: "Any new circuit, consumer unit replacement, or electrical work in a kitchen or bathroom is notifiable under Part P of the Building Regulations. As NICEIC members, we self-certify this work and provide you with the relevant certificate and local authority notification automatically." },
    ],
    metaTitle: "Electrician in {location} | Superstructure Services",
    metaDescription:
      "NICEIC-approved electricians in {location}, Kent. EICR reports, commercial & domestic electrical work. Free quotes from Superstructure Services.",
    canonicalSlug: "services/electrician-canterbury",
    icon: "",
    heroImage: "/images/home-electrician-in-canterbury-rewiring-fuse-metering.jpg",
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
    faqs: [
      { q: "Is my Kent home suitable for an air source heat pump?", a: "Most modern and well-insulated properties are suitable. The key factors are adequate insulation (loft and walls), space outside for the unit, and a heating distribution system capable of working at lower flow temperatures. We carry out a full home energy assessment before recommending a system to ensure it's right for your property." },
      { q: "Is the Boiler Upgrade Scheme grant still available in 2025?", a: "The Boiler Upgrade Scheme (BUS) provides a government grant for eligible homeowners replacing fossil fuel heating with a heat pump. Grant amounts are subject to current government policy — we check current eligibility and help you apply as part of our installation process." },
      { q: "How does an air source heat pump compare to a gas boiler?", a: "A heat pump extracts heat from outside air and transfers it into your home, running on electricity rather than gas. Modern heat pumps achieve efficiencies of 300–400% (for every unit of electricity in, you get 3–4 units of heat out). Combined with a good tariff and solar panels, running costs can be significantly lower than gas." },
      { q: "Do you need to replace radiators when fitting a heat pump?", a: "Not always. Heat pumps work at lower flow temperatures than gas boilers, so larger radiators or underfloor heating distribute heat more efficiently. We assess your existing radiators and advise on any upgrades needed to ensure the system performs as expected." },
      { q: "How long does a heat pump installation take?", a: "A typical air source heat pump installation takes 2–3 days for the external unit, pipework, cylinder and controls. Where additional work such as radiator upgrades or underfloor heating is required, the programme is longer. We'll give you a full schedule before work starts." },
      { q: "What maintenance does an air source heat pump need?", a: "Heat pumps are low maintenance by nature. An annual service — checking refrigerant levels, cleaning filters and inspecting the unit — is recommended. We offer aftercare support and can set up a maintenance schedule to keep your system running efficiently and warranty-valid." },
    ],
    metaTitle: "Air Source Heat Pump Installation in {location} | Superstructure Services",
    metaDescription:
      "MCS-accredited air source heat pump installation in {location}, Kent. Eco-friendly heating with Government grant support. Get a free quote today.",
    canonicalSlug: "services/air-source-heat-pump-installation",
    icon: "",
    heroImage: "/images/heat-pumps/air source heat pump installation canterbury.webp",
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
    faqs: [
      { q: "How many solar panels do I need for a typical Kent home?", a: "Most 3–4 bedroom homes in Kent benefit from a 4–6kW system, typically 10–15 panels depending on their wattage. The right size depends on your roof space, orientation, shading and energy consumption. We carry out a full survey and provide a system design before quoting." },
      { q: "Do solar panels work in the UK's climate?", a: "Yes. Solar panels generate electricity from daylight, not just direct sunshine, so they work throughout the year in the UK. Kent actually receives above-average UK sunshine hours, making it one of the better regions for solar generation." },
      { q: "What is battery storage and should I add it to my solar system?", a: "A solar battery stores excess electricity generated during the day for use in the evening or overnight, increasing your self-consumption rate significantly. For most homeowners in Kent, adding storage makes a meaningful difference to how much of your own solar energy you actually use." },
      { q: "Do I need planning permission for solar panels in Canterbury?", a: "In most cases, solar panels on a domestic roof are permitted development and don't require planning permission. Exceptions include listed buildings, conservation areas and some flat roofs. We check planning status as part of our initial survey and advise accordingly." },
      { q: "What warranties come with your solar panel installations?", a: "We offer a 10-year insurance-backed workmanship warranty as standard. The panels themselves typically carry 25-year performance warranties from the manufacturer, and inverters carry product warranties of 5–12 years depending on the brand. All details are provided in your installation documentation." },
      { q: "Can solar panels power an EV charger or air source heat pump?", a: "Yes — solar, battery storage, an EV charger and a heat pump work very well together as an integrated energy system. We can design and install all four as a complete package, with smart controls that optimise how your energy is used and stored across the whole system." },
    ],
    metaTitle: "Solar Panel Installation in {location} | Superstructure Services",
    metaDescription:
      "MCS-accredited solar panel installation in {location}, Kent. Battery storage, EV chargers & expert fitting by Superstructure Services. Free quote.",
    canonicalSlug: "services/solar-panel-installer-canterbury",
    icon: "",
    heroImage: "/images/solar-panels/Solar panel installation canterbury contractor.jpg",
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
    faqs: [
      { q: "Do I need planning permission to install air conditioning in my Kent home?", a: "Most domestic air conditioning installations are permitted development and don't require planning permission. Exceptions apply for listed buildings, properties in conservation areas, and some external units on front-facing walls. We advise on this during the survey stage." },
      { q: "What is an F-Gas certificate and why does it matter?", a: "F-Gas (fluorinated gas) regulations require that anyone installing, servicing or decommissioning refrigerant-containing systems holds a valid F-Gas qualification. All our engineers are F-Gas certified, ensuring your installation is fully compliant and legally carried out." },
      { q: "Can air conditioning also heat a room in winter?", a: "Yes. Modern heat pump air conditioning systems work in reverse during winter, providing efficient heating as well as cooling. This makes them a versatile year-round climate control solution, particularly useful in home offices, conservatories and bedrooms." },
      { q: "What size air conditioning unit do I need for my room?", a: "Sizing is calculated based on the room's volume, insulation, glazing, orientation and heat-generating equipment within the space. We carry out a heat load calculation as part of our survey to specify the correct unit — undersized systems struggle to perform, and oversized units cycle on and off inefficiently." },
      { q: "How often does an air conditioning unit need servicing in Kent?", a: "We recommend a full service annually, including filter cleaning, coil inspection, refrigerant level check and electrical testing. Regular servicing maintains efficiency, extends the unit's lifespan and keeps the manufacturer warranty valid." },
      { q: "Can you install air conditioning in a commercial premises in Canterbury?", a: "Yes. We install a full range of commercial systems — multi-split, VRF/VRV, ceiling cassette and ducted — for offices, retail units, restaurants and other commercial premises across Canterbury and Kent. We manage the project from design and F-Gas compliance through to commissioning." },
    ],
    metaTitle: "Air Conditioning Installation in {location} | Superstructure Services",
    metaDescription:
      "F-Gas certified air conditioning installation in {location}, Kent. Supply, fit & servicing for homes & businesses. Superstructure Services.",
    canonicalSlug: "services/air-con-service-canterbury",
    icon: "",
    heroImage: "/images/services/air-conditioning.webp",
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
    faqs: [
      { q: "How long does a bathroom installation take in Canterbury?", a: "A straightforward bathroom replacement typically takes 5–10 working days. A full wet room or en-suite created from scratch, including tiling, plumbing, electrics and plastering, can take 2–3 weeks. We provide a clear timeline before starting so you can plan the disruption." },
      { q: "Do I need building regulations approval for a new bathroom in Kent?", a: "Not always. A like-for-like bathroom replacement doesn't require building regulations. However, if you're adding a new bathroom to a room that didn't previously have one, or relocating drainage, building control notification may be required. Our plumbers and electricians ensure all notifiable work is correctly certified." },
      { q: "What is the difference between a wet room and a walk-in shower?", a: "A wet room is a fully tanked, level-access shower space where the entire room is waterproofed — no tray or screen is strictly needed. A walk-in shower uses a shower tray with a low-profile or flush threshold and a glass screen. We install both and can advise on which suits your space and budget." },
      { q: "Can you move the location of a toilet or bath during a renovation?", a: "Yes, though moving waste outlets involves extending or re-routing soil pipes, which has some limitations depending on your floor structure and drainage layout. We assess feasibility during the survey and handle all pipework alterations in-house." },
      { q: "What flooring and tiling options do you offer for bathrooms?", a: "We supply and fit a full range of wall and floor tiles — porcelain, ceramic, natural stone and large-format slabs — as well as LVT and other water-resistant flooring. Our tilers work to a high standard on complex patterns, feature walls and shower enclosures." },
      { q: "Do you supply the bathroom suite or do I need to source it myself?", a: "Either works for us. We have trade relationships with quality bathroom suppliers and can source and supply everything, or we're happy to install a suite you've chosen yourself from a showroom or retailer. We advise on dimensions and compatibility before you buy to avoid problems on site." },
    ],
    metaTitle: "New Bathroom Installation in {location} | Superstructure Services",
    metaDescription:
      "Expert bathroom fitters in {location}, Kent. Full bathroom design, supply and installation. Wet rooms, suites and refurbishments. Free quote.",
    canonicalSlug: "new-bathroom-fitter-canterbury",
    icon: "",
    heroImage: "/images/classic-modern-bathroom-refurbishment-service-canterbury.jpg",
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
    faqs: [
      { q: "What does a full property refurbishment involve in Canterbury?", a: "A full refurbishment typically covers stripping back to the structure and rebuilding everything — new wiring, plumbing, plastering, flooring, kitchen, bathrooms, windows and decoration. We manage every trade in sequence under a single contract, so you deal with one team throughout rather than coordinating multiple contractors." },
      { q: "Do I need to move out during a refurbishment?", a: "For a full strip-out refurbishment, moving out is usually the most practical option as the property becomes a building site. For partial refurbishments — a single room or floor — it's often possible to remain in the property. We discuss this honestly with you at the planning stage." },
      { q: "How much value can a refurbishment add to a property in Kent?", a: "A well-executed refurbishment — particularly one that updates the kitchen, bathrooms and adds living space — can significantly increase a property's market value and rental yield. The uplift depends on the property type, location and the extent of work. We've completed projects in Canterbury and across Kent where the added value has substantially exceeded the investment." },
      { q: "Can you handle listed building renovations in Canterbury?", a: "Yes. We have extensive experience working on listed and heritage properties across Canterbury and Kent. This includes working with conservation officers, using appropriate materials such as lime mortar and traditional joinery techniques, and obtaining the necessary listed building consent before works commence." },
      { q: "Do you offer project management for larger renovations?", a: "Yes. For larger or more complex projects, we provide full project management — coordinating trades, managing the programme, attending design meetings and keeping you updated throughout. You have a single point of contact from first survey to final snagging." },
      { q: "Can you give me a fixed price for a refurbishment project?", a: "We provide detailed written quotations that are as fixed as possible given the scope. On older properties, some unknowns only become apparent once work begins — things like the condition of timbers, buried pipework or damp behind plaster. We flag potential contingencies clearly upfront so there are no surprises." },
    ],
    metaTitle: "Property Refurbishment in {location} | Superstructure Services",
    metaDescription:
      "House refurbishment and renovation in {location}, Kent. Full project management from minor updates to complete transformations. Free quote available.",
    canonicalSlug: "services/property-refurbishment",
    icon: "",
    heroImage: "/images/services/property-refurbishment.jpg",
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
    faqs: [
      { q: "Do you install new boilers in Canterbury and Kent?", a: "Yes. Our Gas Safe registered engineers install combi boilers, system boilers and conventional boilers. We recommend the right boiler type for your property based on hot water demand, existing system configuration and your long-term heating plans." },
      { q: "What should I do if I have a blocked drain in Canterbury?", a: "For a blocked drain, call us and we'll carry out a CCTV survey or rodding to locate and clear the blockage. Persistent blockages often indicate a structural issue with the drain — roots, collapsed pipe or a build-up of fat and scale — which we can also diagnose and fix." },
      { q: "Are your plumbers Gas Safe registered?", a: "Yes. All gas work — boiler installation, servicing, gas pipe alterations — is carried out by our Gas Safe registered engineers. You can verify any engineer's registration on the official Gas Safe Register website using their licence number, which we provide on request." },
      { q: "Can you install an outdoor tap or garden irrigation system in Kent?", a: "Yes. We install outdoor taps, hose reel connections and full garden irrigation systems including drip and spray setups. All outdoor water supply work is correctly back-flow protected in line with water regulations." },
      { q: "What is a water softener and is it worth installing in Canterbury?", a: "Canterbury's water supply comes from the chalk aquifer and is notably hard, meaning high levels of calcium and magnesium that cause limescale on appliances, pipes and surfaces. A water softener removes these minerals and can extend the life of your boiler, shower and washing machine significantly. We supply and install leading brands." },
      { q: "Can you fix a leak under the floor or inside a wall without major damage?", a: "In many cases yes. We use trace and access techniques — including acoustic detection and thermal imaging — to locate concealed leaks before opening up surfaces. This minimises the area that needs to be opened and reduces the making-good work required." },
    ],
    metaTitle: "Plumber in {location} | Superstructure Services",
    metaDescription:
      "Gas Safe registered plumbers in {location}, Kent. Boilers, bathrooms, drainage & heating by Superstructure Services. Free no-obligation quotes.",
    canonicalSlug: "services/plumber-in-canterbury",
    icon: "",
    heroImage: "/images/Bathrooms-in-Canterbury.jpg",
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
    faqs: [
      { q: "What types of bespoke joinery can you make in Canterbury?", a: "We design and make bespoke staircases, doors, window frames, fitted wardrobes, bookcases, kitchen units, window seats and furniture. All our joinery is made to exact measurements and specification, which is particularly valuable in older properties where standard off-the-shelf sizes don't fit." },
      { q: "Can you repair or restore original timber features in a period Kent property?", a: "Yes. We specialise in restoring original sash windows, panelled doors, cornices and timber floors in period and listed properties. We use traditional joinery techniques and appropriate materials — including hardwood species that match the original — to maintain authenticity." },
      { q: "What is first fix and second fix carpentry?", a: "First fix refers to the structural and concealed carpentry carried out before plastering — stud walls, floor joists, roof timbers and door linings. Second fix is all visible joinery fitted after plastering — skirting boards, architraves, doors, stairs and fitted furniture. We handle both phases." },
      { q: "Can you build bespoke fitted wardrobes in Canterbury?", a: "Yes. Fitted wardrobes are one of our most popular carpentry projects. We design them around your space, style preferences and storage needs, and build them on site using quality materials. The result fits perfectly and adds usable space compared to freestanding alternatives." },
      { q: "Do you carry out structural carpentry such as roof timbers and loft conversions?", a: "Yes. Our carpenters work on structural timber frames, roof structures, dormers, loft conversions and timber-framed extensions. All structural work is carried out to building regulations and we work alongside structural engineers where calculations are required." },
      { q: "Can you restore a green oak or timber-framed structure?", a: "Yes. We have direct experience working on green oak and seasoned timber structures — including entrance frames, porches and outbuildings. This includes sealing joints, treating weathered surfaces, applying specialist coatings such as Sikkens systems, and repairing areas of rot or shrinkage damage." },
    ],
    metaTitle: "Carpenter in {location} | Superstructure Services",
    metaDescription:
      "Expert carpenters in {location}, Kent. Bespoke joinery, structural carpentry & heritage work. First/second fix by Superstructure Services.",
    canonicalSlug: "services/carpenter-in-canterbury",
    icon: "",
    heroImage: "/images/services/carpentry.webp",
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
    faqs: [
      { q: "Do I need planning permission for a garage conversion in Canterbury?", a: "Most garage conversions are permitted development and don't require planning permission, provided the external appearance isn't significantly altered. Exceptions apply to listed buildings, properties in conservation areas, and some detached garages. We confirm the position for your specific property before work starts." },
      { q: "Do garage conversions require building regulations approval in Kent?", a: "Yes. A garage conversion into habitable space always requires building regulations approval, covering insulation, ventilation, structural adequacy, fire safety and electrical work. We manage the building control application and inspections, and you receive a completion certificate at the end." },
      { q: "What can a converted garage be used for?", a: "Almost anything — home office, gym, playroom, additional bedroom, annex, music room or utility space. The intended use influences the specification for insulation, ventilation, plumbing and electrics, and we design accordingly." },
      { q: "How long does a garage conversion take?", a: "A straightforward single garage conversion to a habitable room typically takes 2–4 weeks depending on the level of finish and the trades involved. We'll give you a specific programme once we've surveyed the property." },
      { q: "Can a garage conversion add value to my Kent property?", a: "Yes — adding usable living space consistently adds value, and a well-executed conversion to building regulations is recognised by estate agents and mortgage lenders. The return depends on the property type and location, but converting a garage is typically one of the most cost-effective ways to add square footage." },
      { q: "Can you convert a detached garage into an annex in Canterbury?", a: "Yes. Converting a detached garage to an annex or independent living space is a popular project — particularly for extended family accommodation. This typically requires planning permission and building regulations, and may involve adding a bathroom and kitchenette. We handle the full build." },
    ],
    metaTitle: "Garage Conversion in {location} | Superstructure Services",
    metaDescription:
      "Professional garage conversion in {location}, Kent. Transform your garage into living space. Full build by Superstructure Services. Free quote.",
    canonicalSlug: "services/garage-workshop-conversion",
    icon: "",
    heroImage: "/images/workshop-conversion-canterbury.JPG",
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
    faqs: [
      { q: "How do I know if my roof needs repairing or replacing in Kent?", a: "Key signs include missing or slipped tiles, visible daylight in the loft, damp patches on ceilings, deteriorating flashings around chimneys and skylights, or a roof that is over 30–40 years old. We carry out a thorough inspection — including the structure, tiles, flashings, gutters and felt — and give you an honest assessment of whether repair or replacement is the better option." },
      { q: "What types of roof tiles do you work with in Canterbury?", a: "We work with the full range — clay, concrete, natural slate, synthetic slate, and the traditional Kent Peg tiles used widely on period properties across this area. We match existing materials wherever possible on repairs to conservation and listed buildings." },
      { q: "Do you install flat roofs in Kent?", a: "Yes. We install modern flat roof systems including GRP fibreglass, EPDM single-ply rubber membrane and three-layer felt. These modern systems are significantly more durable and longer-lasting than traditional felt and carry meaningful guarantees." },
      { q: "Can you carry out emergency roof repairs in Canterbury?", a: "Yes. We respond to emergency roof damage — storm damage, fallen tiles, sudden leaks — across Canterbury and Kent. We prioritise making the roof weather-tight quickly to prevent further damage, and then follow up with a full permanent repair once the immediate situation is safe." },
      { q: "Do I need planning permission to re-roof my house in Kent?", a: "Re-roofing using the same materials is generally permitted development. Changing materials significantly, adding a dormer, or any work on a listed building requires consent. We check planning requirements at the survey stage and can advise on whether consent applications are needed." },
      { q: "How long should a new roof last?", a: "A well-installed pitched roof using quality tiles should last 50–100 years with proper maintenance. Modern flat roof membranes typically carry 20–25 year guarantees. The key is correct installation, good detailing around flashings and valleys, and keeping gutters clear. We stand behind our work with workmanship guarantees." },
    ],
    metaTitle: "Roofing in {location} | Superstructure Services",
    metaDescription:
      "Expert roofing in {location}, Kent. New roofs, repairs, flat roofing & listed building specialists. Superstructure Services. Free quote today.",
    canonicalSlug: "services/new-roof-installation-repairs",
    icon: "",
    heroImage: "/images/services/roofing.webp",
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
    faqs: [
      { q: "What does a home office conversion in Canterbury typically involve?", a: "At minimum, a dedicated circuit and data points for reliable connectivity, good lighting, adequate heating and appropriate wall finishes. More comprehensive conversions include structural alterations to create a separate space, acoustic insulation for privacy, custom storage and furniture, and full AV and tech setup." },
      { q: "Can you convert a spare bedroom into a home office in Kent?", a: "Yes. A spare room conversion to a home office is one of our most popular projects. We handle the rewire for dedicated circuits and data, reconfigure the space if needed, install bespoke storage and desking, and finish to a high standard." },
      { q: "Do I need planning permission for a home office conversion?", a: "Converting an existing room within the house doesn't require planning permission. Building a garden office may require it depending on size and proximity to boundaries. We advise on planning requirements for the specific project at the outset." },
      { q: "Can you build a garden office or studio in Canterbury?", a: "Yes. We design and build bespoke garden offices — fully insulated, electrics, data, heating and finished internally to a high standard. A garden office provides complete separation between work and home life and can be built to a specification that makes it usable year-round." },
      { q: "Can you supply and install office furniture and technology?", a: "Yes. Through specialist suppliers, we can provide and install custom-built furniture, ergonomic desking, monitor arms, cable management, bespoke computer builds and full AV systems. Everything is fitted by a technician and demonstrated to you before handover." },
      { q: "How do I get good broadband connectivity in a home office or garden office?", a: "We install structured cabling — Cat6 or Cat6a — from your router to the office, which provides significantly more reliable connectivity than Wi-Fi for video calls and large file transfers. For garden offices, we run a dedicated cable from the house. We also integrate Wi-Fi access points where needed." },
    ],
    metaTitle: "Home Office Conversion in {location} | Superstructure Services",
    metaDescription:
      "Bespoke home office conversion in {location}, Kent. Full design, build, data systems & furniture. Superstructure Services. Get a free quote.",
    canonicalSlug: "services/office-conversion",
    icon: "",
    heroImage: "/images/Home-office-creation-Canterbury-Kent.jpg",
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
    faqs: [
      { q: "What room is best for a home cinema in a Kent property?", a: "A basement, loft room or internal room with no windows is ideal — it gives you the most control over light and ambient noise. However, with the right blackout treatments, acoustic insulation and screen technology, excellent results can be achieved in virtually any room. We assess your space and advise on the best approach." },
      { q: "Do all cables get hidden in a cinema room installation?", a: "Yes. All speaker cables, HDMI runs, power cables and network connections are routed within the building structure before the room is finished — through the walls, ceiling or floor void. The result is a completely clean room with no visible cabling." },
      { q: "What screen and projector options do you install?", a: "We install the full range — 4K and 8K projectors with acoustically transparent or motorised screens, large-format LED displays, and outdoor cinema setups. Equipment is selected to suit your room dimensions, ambient light conditions and viewing preferences." },
      { q: "How important is acoustic treatment in a home cinema?", a: "Acoustic treatment is critical for a truly immersive experience. Without it, parallel walls create echo and standing waves that muddy the sound. We install acoustic panels, bass traps, diffusers and specialist insulation as part of the room design to deliver clear, balanced audio that also doesn't disturb the rest of the house." },
      { q: "Can you build a cinema room in an existing living space without major structural work?", a: "Yes. Many of our cinema installations transform an existing room — adding acoustic wall panels, ceiling treatments, tiered seating platforms, lighting control and AV equipment without significant structural alteration. We tailor the scope to your budget and what the space allows." },
      { q: "Do I need planning permission for a home cinema room in Canterbury?", a: "Converting a room within your existing home doesn't require planning permission. If you're building a new outbuilding to house a cinema, planning may be required depending on size. We advise on this at the design stage." },
    ],
    metaTitle: "Cinema Room Installation in {location} | Superstructure Services",
    metaDescription:
      "Bespoke cinema room installation in {location}, Kent. Full design, AV fitting & sound insulation. Create your dream home cinema. Free quote.",
    canonicalSlug: "services/cinema-room-installation",
    icon: "",
    heroImage: "/images/services/cinema-room-installation.webp",
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
    faqs: [
      { q: "Do I need planning permission for a new driveway in Canterbury?", a: "For a driveway that uses a permeable surface such as block paving with open joints, gravel or resin bond, permitted development rules generally apply. If you want an impermeable surface (such as poured concrete or standard tarmac) on the front of a property, you may need planning permission to ensure runoff is managed. We advise on the right solution for your specific property and drainage requirements." },
      { q: "What driveway surfaces do you install in Kent?", a: "We install block paving, porcelain, sandstone, tarmac, resin bound and bonded, gravel, concrete and decorative aggregates. Each material has different characteristics for durability, maintenance and appearance, and we help you choose the right one for your home and usage." },
      { q: "How long does a new driveway installation take?", a: "A standard residential driveway typically takes 3–7 days depending on the size and material. This includes removal of the existing surface, sub-base preparation, drainage installation if needed, and the finished surface. We minimise disruption and make sure you can access the property throughout where possible." },
      { q: "What is resin bound paving and how does it compare to tarmac?", a: "Resin bound paving is a smooth, permeable surface made by mixing aggregate stones with a UV-stable resin binder. It looks significantly smarter than tarmac, is SUDS-compliant (doesn't require a drainage permit), doesn't loosen like loose gravel, and is durable and low maintenance. It's our most popular premium driveway surface." },
      { q: "Can you install drainage or a soakaway as part of a driveway project?", a: "Yes. Proper drainage is a fundamental part of every driveway we install. We design and build channel drainage, soakaways and linear drainage systems to handle surface water correctly and protect your property and neighbouring land from runoff." },
      { q: "Can you build a dropped kerb in Canterbury?", a: "Yes, though a dropped kerb requires an application to Kent County Council Highways and their approval before any work on the public highway can be carried out. We manage this process and ensure the crossing is built to the required specification with the correct materials and edging." },
    ],
    metaTitle: "Driveways & Paving in {location} | Superstructure Services",
    metaDescription:
      "Expert driveways and paving in {location}, Kent. Block paving, resin, tarmac, porcelain & more. Superstructure Services. Free quote today.",
    canonicalSlug: "services/driveways-and-paving-canterbury",
    icon: "",
    heroImage: "/images/Driveway-paving-in-Canterbury-Kent.jpg",
  },
  {
    slug: "listed-building-restoration",
    name: "Listed Building Restoration",
    shortName: "Listed Building Restoration",
    tagline: "Preserving heritage with expert care and craftsmanship",
    description:
      "Specialist restoration and renovation of listed buildings and heritage properties across Canterbury and Kent. Our experienced team understands the unique requirements of working with historic structures, combining traditional techniques with modern building standards. We work closely with conservation officers to ensure all work meets listed building consent requirements while preserving the character and integrity of your property.",
    features: [
      "Heritage property restoration and conservation",
      "Traditional lime mortar and plasterwork",
      "Period joinery and carpentry using authentic methods",
      "Structural repairs sympathetic to original construction",
      "Listed building consent application support",
    ],
    faqs: [
      { q: "What consent do I need before carrying out work on a listed building in Canterbury?", a: "Any alteration, extension or demolition of a listed building that affects its character requires Listed Building Consent, regardless of whether planning permission is also needed. Carrying out work without consent is a criminal offence. We advise on consent requirements at the outset and can support the application process." },
      { q: "Can you use modern materials in a listed building repair?", a: "In some circumstances, yes — but the guiding principle for listed building work is that materials and methods should be sympathetic to the original construction. For masonry, this typically means lime-based mortars and renders rather than cement, which can cause serious damage to historic stonework. We use appropriate traditional materials and advise on what is acceptable to the local conservation officer." },
      { q: "Why is lime mortar used in old buildings instead of cement?", a: "Lime mortar is softer and more flexible than cement, and historically all pre-20th century masonry was built with it. Repointing a historic building with cement mortar traps moisture, accelerates freeze-thaw damage and can crack the original stone. Lime allows the building to breathe and flex as it was designed to do." },
      { q: "Do you work with Canterbury's conservation officers?", a: "Yes. We have an established working relationship with conservation and planning officers in Canterbury and across Kent. We involve them early in the project, seek pre-application advice where appropriate, and ensure all work is designed and executed in a way they will approve." },
      { q: "Can you restore original sash windows in a listed property?", a: "Yes. Where original windows survive, restoration is almost always preferable to replacement — both from a heritage perspective and a consent perspective. We repair broken sash cords, replace decayed timber sections, draught-proof the frames, and apply appropriate paint systems to extend their life significantly." },
      { q: "How do you approach damp in a historic building?", a: "Damp in old buildings is usually a result of moisture being trapped by inappropriate modern materials — cement render, impermeable paint or injection damp proofing that doesn't work well with lime construction. The correct approach is to remove the problematic materials, allow the building to dry out, and reinstate breathable lime systems. We assess the specific cause before recommending any treatment." },
    ],
    metaTitle: "Listed Building Restoration in {location} | Superstructure Services",
    metaDescription:
      "Expert listed building restoration in {location}, Kent. Heritage property specialists. Traditional methods, modern standards. Superstructure Services.",
    canonicalSlug: "services/listed-building-restoration",
    icon: "",
    heroImage: "/images/services/listed-building-restoration.jpg",
  },
  {
    slug: "groundworks",
    name: "Groundworks",
    shortName: "Groundworks",
    tagline: "Building strong foundations for your project",
    description:
      "Professional groundworks services across Canterbury and Kent. From site preparation to drainage systems, our experienced team handles all aspects of groundwork for residential and commercial projects. We ensure solid foundations and proper drainage to protect your investment for years to come.",
    features: [
      "Site clearance and preparation",
      "Foundation excavation and concrete work",
      "Drainage systems and soakaway installation",
      "Retaining walls and ground stabilisation",
      "Service trenches for utilities",
    ],
    faqs: [
      { q: "What groundworks are typically needed before a house extension in Kent?", a: "Before a ground-floor extension, the site needs to be stripped of topsoil, the foundation trench excavated to the required depth (determined by soil conditions and structural engineer's specification), and concrete strip or pad foundations poured. We also run any drainage, gas and electrical service trenches at this stage before the slab or oversite is laid." },
      { q: "What type of foundations do you use for new builds and extensions in Canterbury?", a: "The foundation type depends on soil conditions, the load bearing requirement and the depth to suitable bearing strata. Common options include traditional strip foundations, trench fill concrete, pad foundations and in challenging ground conditions, mini-pile systems. We work with structural engineers to specify the correct solution for every project." },
      { q: "Can you install a new drainage system or soakaway?", a: "Yes. We design and install foul drainage, surface water drainage and soakaway systems for new builds, extensions and drainage replacement projects. All drainage installations are carried out in compliance with Building Regulations Part H and signed off by building control." },
      { q: "Do you carry out site clearance in Kent?", a: "Yes. We carry out full site clearance — removing existing structures, vegetation, trees (with the appropriate consents), concrete, rubble and contaminated material. All waste is removed from site and disposed of legally with appropriate waste transfer documentation provided." },
      { q: "Can you build a retaining wall in a Canterbury garden?", a: "Yes. Retaining walls are a common requirement on sloped sites in Kent. The design depends on the retained height, soil pressure and surcharge loading. We specify and build from engineering brick, block, concrete or natural stone, with correct drainage behind the wall to prevent hydrostatic pressure build-up." },
      { q: "How deep do foundations need to be for an extension in Kent's clay soil?", a: "Kent has a mix of chalk, clay and alluvial soils depending on location. In shrinkable clay areas, building control typically requires foundations at a minimum depth of 1.0m, and often 1.5–2.0m to get below the seasonal moisture movement zone. We carry out trial pits and work to structural engineer specifications to ensure foundations are correct for your specific site." },
    ],
    metaTitle: "Groundworks in {location} | Superstructure Services",
    metaDescription:
      "Professional groundworks in {location}, Kent. Foundations, drainage, site preparation & excavation. Superstructure Services. Free quote.",
    canonicalSlug: "services/groundworks",
    icon: "",
    heroImage: "/images/groundworks-canterbury.JPG",
  },
  {
    slug: "landscaping-gardens",
    name: "Landscaping & Gardens",
    shortName: "Landscaping & Gardens",
    tagline: "Creating beautiful outdoor spaces you'll love",
    description:
      "Transform your outdoor space with our comprehensive landscaping and garden services in Canterbury and Kent. From complete garden redesigns to regular maintenance, we create beautiful, functional outdoor areas tailored to your lifestyle. Our team combines horticultural expertise with construction skills to deliver stunning results.",
    features: [
      "Garden design and complete landscaping",
      "Patios, decking and outdoor living areas",
      "Lawn installation and turfing",
      "Planting schemes and borders",
      "Garden maintenance and ongoing care",
    ],
    faqs: [
      { q: "Do you offer full garden design and landscaping in Canterbury?", a: "Yes. We provide a complete landscaping service from initial design through to construction and planting. This includes hard landscaping — patios, paths, walls, steps, driveways and drainage — as well as soft landscaping — lawns, borders, planting schemes and trees." },
      { q: "What patio materials do you recommend for Kent gardens?", a: "Porcelain paving has become our most popular choice — it's highly durable, frost-resistant, low maintenance and available in a wide range of finishes including stone and wood effects. We also install natural sandstone, Indian limestone, slate and clay brick pavers depending on the style of the property and garden." },
      { q: "Can you build garden walls and raised beds in Canterbury?", a: "Yes. We build garden walls in brick, stone, block and sleepers, including retaining walls for sloped gardens. Raised beds can be constructed in timber, brick, stone or Corten steel and are designed to integrate naturally with the overall garden scheme." },
      { q: "Can you build decking in a Kent garden?", a: "Yes. We install hardwood and softwood decking, including premium species such as Balau and Cumaru that are naturally durable and require minimal maintenance. We design around levels, steps and balustrade requirements and apply appropriate finishes for long-term protection." },
      { q: "Do you install outdoor lighting and irrigation systems?", a: "Yes. We install low-voltage garden lighting — path lights, uplighters, deck lights and feature lighting — integrated into the landscaping scheme and operated from a control unit in the house. We also install drip and spray irrigation systems with programmable timers." },
      { q: "How long does a garden landscaping project take in Canterbury?", a: "This depends heavily on scope. A patio replacement might take 3–5 days, while a full garden redesign with levels, walls, planting, irrigation and lighting can take several weeks. We provide a detailed programme at the quotation stage so you can plan accordingly." },
    ],
    metaTitle: "Landscaping & Gardens in {location} | Superstructure Services",
    metaDescription:
      "Professional landscaping and garden services in {location}, Kent. Design, patios, planting & maintenance. Superstructure Services. Free quote.",
    canonicalSlug: "services/landscaping-gardens",
    icon: "",
    heroImage: "/images/services/landscaping-gardens.webp",
  },
  {
    slug: "rental-property-maintenance",
    name: "Rental Property Maintenance",
    shortName: "Rental Property Maintenance",
    tagline: "Keeping your rental properties in top condition",
    description:
      "Dedicated property maintenance services for landlords and letting agents across Canterbury and Kent. We understand the unique challenges of maintaining rental properties and offer fast, reliable service to keep your tenants happy and your properties compliant. From emergency repairs to planned maintenance programmes, we're your trusted partner.",
    features: [
      "Rapid response emergency repairs",
      "Planned preventative maintenance programmes",
      "EICR electrical testing for landlords",
      "Gas safety certificates and boiler servicing",
      "End of tenancy repairs and refurbishment",
    ],
    faqs: [
      { q: "What electrical testing is legally required for rental properties in Kent?", a: "Landlords in England must have an EICR (Electrical Installation Condition Report) carried out every five years and provide a copy to tenants before they move in and to the local authority on request. Our NICEIC-approved electricians carry out EICRs across Canterbury and Kent and provide the relevant certificate on the same visit where possible." },
      { q: "How often does a rental property need a gas safety certificate?", a: "A Gas Safety Certificate (CP12) is required annually for every rental property that has gas appliances or a gas supply. It must be carried out by a Gas Safe registered engineer and a copy provided to tenants within 28 days of the check being done. We can set up an annual reminder and carry out the check to keep you compliant." },
      { q: "Can you carry out end-of-tenancy repairs quickly in Canterbury?", a: "Yes. Turnaround time between tenancies is often tight, and we understand the cost of a property sitting empty. We prioritise end-of-tenancy works, provide prompt quotations and schedule trades efficiently to get the property back on the market as quickly as possible." },
      { q: "Do you work with letting agents and property management companies in Kent?", a: "Yes. We work with a number of letting agents and independent landlords across Canterbury and Kent as a preferred maintenance contractor. We provide clear written quotes, tidy professional work and certificates where applicable — making it straightforward for agents to manage their client properties." },
      { q: "What is the Decent Homes Standard and does it apply to my rental property?", a: "The Decent Homes Standard applies to social housing, but its principles broadly reflect best practice for private rental properties too. It covers freedom from category 1 hazards (assessed under HHSRS), reasonable state of repair, modern facilities and effective insulation and heating. We can assess and carry out any remediation works needed." },
      { q: "Can you manage multiple rental properties for a Canterbury landlord?", a: "Yes. We work with portfolio landlords and manage maintenance across multiple properties under a single arrangement. This gives landlords one reliable contractor to call rather than managing multiple trades, and we can provide consolidated invoicing and maintenance records for each property." },
    ],
    metaTitle: "Rental Property Maintenance in {location} | Superstructure Services",
    metaDescription:
      "Landlord property maintenance in {location}, Kent. Emergency repairs, EICR testing, gas safety & refurbishment. Superstructure Services.",
    canonicalSlug: "services/rental-property-maintenance",
    icon: "",
    heroImage: "/images/rental-property-maintenance-hero.JPG",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
