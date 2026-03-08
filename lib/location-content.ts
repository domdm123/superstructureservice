import { Service } from "./services";
import { Area } from "./areas";

/**
 * Generates location and service-specific content for SEO pages
 * This creates natural, contextual content rather than generic templates
 */

interface LocationContext {
  propertyTypes: string[];
  characteristics: string[];
  localFeatures: string[];
  propertySummary: string;
  externalLink: {
    label: string;
    url: string;
  };
}

// Location-specific context for each area
const LOCATION_CONTEXTS: Record<string, LocationContext> = {
  canterbury: {
    propertyTypes: ["historic city centre properties", "Victorian terraces", "Georgian townhouses", "modern developments"],
    characteristics: ["conservation area requirements", "listed building regulations", "city centre access"],
    localFeatures: ["Canterbury Cathedral quarter", "King's Mile", "St Dunstan's area"],
    propertySummary: "Canterbury has a broad housing mix, from medieval and Georgian buildings in the historic core to Victorian terraces, interwar suburbs and modern estates on the edges of the city. Building work here often needs careful attention to conservation constraints, access, parking, and the detailing expected on older Kent brick and timber properties.",
    externalLink: {
      label: "Canterbury City Council",
      url: "https://www.canterbury.gov.uk/",
    },
  },
  harbledown: {
    propertyTypes: ["village properties", "period cottages", "family homes"],
    characteristics: ["rural setting", "conservation considerations", "village character"],
    localFeatures: ["historic village centre", "proximity to Canterbury"],
    propertySummary: "Harbledown is known for older village housing, period cottages and individual family homes shaped by its long history as a settlement on the edge of Canterbury. Many homes here need sympathetic upgrading, especially where original brickwork, timber details and traditional layouts are still intact.",
    externalLink: {
      label: "Canterbury City Council — Harbledown area",
      url: "https://www.canterbury.gov.uk/",
    },
  },
  blean: {
    propertyTypes: ["village homes", "rural properties", "woodland settings"],
    characteristics: ["countryside location", "traditional Kent architecture"],
    localFeatures: ["Blean Woods", "village community"],
    propertySummary: "Blean combines established village housing with detached family homes and rural properties close to ancient woodland. The local housing stock tends to favour larger plots and mixed-age construction, so renovation work often ranges from updating traditional homes to extending later suburban properties.",
    externalLink: {
      label: "Blean Woods National Nature Reserve",
      url: "https://www.kentwildlifetrust.org.uk/nature-reserves/west-blean-and-thornden-woods",
    },
  },
  sturry: {
    propertyTypes: ["riverside properties", "village homes", "modern estates"],
    characteristics: ["River Stour location", "growing community"],
    localFeatures: ["Sturry village centre", "riverside setting"],
    propertySummary: "Sturry has a mixed property profile, with older village homes near the historic core, riverside housing close to the Stour, and substantial modern residential development. That makes it a location where both refurbishment and contemporary upgrade work are common.",
    externalLink: {
      label: "Canterbury City Council — Sturry",
      url: "https://www.canterbury.gov.uk/",
    },
  },
  bridge: {
    propertyTypes: ["rural cottages", "period properties", "village homes"],
    characteristics: ["Elham Valley location", "traditional architecture"],
    localFeatures: ["village setting", "countryside views"],
    propertySummary: "Bridge has a strong stock of period village housing, flint cottages, older farm-related buildings and later family homes. Because it sits in the Elham Valley, many properties retain traditional Kent forms and materials, which makes careful renovation and repair especially important.",
    externalLink: {
      label: "Bridge Parish Council",
      url: "https://www.bridgevillage.org.uk/parish-council/",
    },
  },
  barham: {
    propertyTypes: ["Elham Valley properties", "period cottages", "rural homes"],
    characteristics: ["quiet village setting", "traditional Kent properties"],
    localFeatures: ["Elham Valley", "countryside location"],
    propertySummary: "Barham is characterised by rural and period housing, including cottages, farmhouses and detached homes spread through the Elham Valley landscape. Homes here often call for traditional repair methods, practical modernisation and upgrades that still respect the village setting.",
    externalLink: {
      label: "Barham Downs from Kent Downs National Landscape",
      url: "https://kentdowns.org.uk/",
    },
  },
  bekesbourne: {
    propertyTypes: ["village properties", "period homes", "rural settings"],
    characteristics: ["Little Stour valley", "conservation area"],
    localFeatures: ["village green", "railway station access"],
    propertySummary: "Bekesbourne's housing stock is largely village-scale and traditional, with period homes, rural settings and a small number of more modern residential properties. Many buildings benefit from careful upgrades that improve comfort without losing the character of the Little Stour valley setting.",
    externalLink: {
      label: "Bekesbourne Parish Council",
      url: "https://www.bekesbournewithpatrixbourneparishcouncil.gov.uk/",
    },
  },
  wickhambreaux: {
    propertyTypes: ["riverside cottages", "period properties", "village homes"],
    characteristics: ["Little Stour riverside", "picturesque village"],
    localFeatures: ["riverside setting", "historic village"],
    propertySummary: "Wickhambreaux is known for its picturesque village character, older houses near the green and a number of period cottages and detached homes around the Little Stour. Building work here often needs to respond to heritage details, drainage considerations and rural access constraints.",
    externalLink: {
      label: "Wickhambreaux Parish Council",
      url: "https://wickhambreaux-pc.gov.uk/",
    },
  },
  wingham: {
    propertyTypes: ["village properties", "period homes", "rural cottages"],
    characteristics: ["historic village", "traditional architecture"],
    localFeatures: ["village square", "local amenities"],
    propertySummary: "Wingham has a particularly attractive historic core with period homes, older cottages and substantial village properties around its main street. This mix means homeowners often want upgrades that improve efficiency and liveability while staying true to traditional architecture.",
    externalLink: {
      label: "Wingham Parish Council",
      url: "https://www.winghamparishcouncil.org.uk/",
    },
  },
  fordwich: {
    propertyTypes: ["historic properties", "riverside homes", "period cottages"],
    characteristics: ["Britain's smallest town", "River Stour location", "conservation area"],
    localFeatures: ["historic town centre", "riverside setting"],
    propertySummary: "Fordwich has a compact but highly distinctive mix of historic riverside buildings, period cottages and small-scale town housing. Because of its age and conservation sensitivity, works here often demand close attention to heritage fabric, drainage and sympathetic material choices.",
    externalLink: {
      label: "Fordwich Town Council",
      url: "https://www.fordwichtowncouncil.gov.uk/",
    },
  },
  chartham: {
    propertyTypes: ["village homes", "period properties", "modern developments"],
    characteristics: ["Great Stour valley", "village community"],
    localFeatures: ["village centre", "railway access"],
    propertySummary: "Chartham includes older village housing, period homes and more recent development around a well-connected commuter settlement. Properties here span traditional Kent brick homes and newer family houses, so projects often range from renovation and repair to extensions and layout upgrades.",
    externalLink: {
      label: "Chartham Parish Council",
      url: "https://chartham-pc.gov.uk/",
    },
  },
  adisham: {
    propertyTypes: ["rural properties", "period cottages", "village homes"],
    characteristics: ["countryside setting", "traditional architecture"],
    localFeatures: ["village location", "rural Kent"],
    propertySummary: "Adisham is a small rural village where housing is largely made up of traditional cottages, older homes and countryside properties. In places like this, improvement works are often about carefully balancing modern performance with the materials and proportions of older Kent village buildings.",
    externalLink: {
      label: "Adisham Parish Council",
      url: "https://adisham-pc.gov.uk/",
    },
  },
  littlebourne: {
    propertyTypes: ["village properties", "period homes", "rural cottages"],
    characteristics: ["Little Stour valley", "village character"],
    localFeatures: ["village setting", "countryside location"],
    propertySummary: "Littlebourne has a mix of period housing, village homes and larger properties in a semi-rural setting east of Canterbury. Its housing stock suits everything from sensitive refurbishment to extensions and internal reconfiguration for modern family living.",
    externalLink: {
      label: "Littlebourne Parish Council",
      url: "https://littlebourneparishcouncil.gov.uk/",
    },
  },
  ickham: {
    propertyTypes: ["rural homes", "period cottages", "village properties"],
    characteristics: ["Little Stour valley", "traditional Kent architecture"],
    localFeatures: ["village centre", "rural setting"],
    propertySummary: "Ickham is characterised by rural homes, period cottages and village properties set within a traditional East Kent landscape. Many homes here benefit from work that improves thermal performance and modern usability while preserving long-standing architectural character.",
    externalLink: {
      label: "Ickham and Well Parish Council",
      url: "https://www.ickhamandwell-pc.gov.uk/",
    },
  },
  petham: {
    propertyTypes: ["rural cottages", "period properties", "countryside homes"],
    characteristics: ["North Downs location", "traditional architecture"],
    localFeatures: ["village setting", "downland views"],
    propertySummary: "Petham has a distinctly rural housing profile shaped by the North Downs landscape, including cottages, older detached homes and countryside properties. Work here often involves practical modernisation, careful repair and upgrades suited to more isolated or individually built homes.",
    externalLink: {
      label: "Kent Downs National Landscape",
      url: "https://kentdowns.org.uk/",
    },
  },
  waltham: {
    propertyTypes: ["village homes", "rural properties", "period cottages"],
    characteristics: ["countryside location", "traditional Kent character"],
    localFeatures: ["village community", "rural setting"],
    propertySummary: "Waltham has a traditional village housing mix with period cottages, detached rural homes and family properties set in open countryside. It is the kind of area where homeowners often need all-trades support for upgrades, repairs and carefully managed renovation work.",
    externalLink: {
      label: "Waltham Parish Council",
      url: "https://waltham-pc.gov.uk/",
    },
  },
  whitstable: {
    propertyTypes: ["coastal properties", "beach houses", "Victorian terraces", "fisherman's cottages"],
    characteristics: ["coastal location", "salt air considerations", "maritime heritage"],
    localFeatures: ["seafront", "harbour area", "Old Town"],
    propertySummary: "Whitstable has a varied coastal housing stock that includes fisherman's cottages, Victorian terraces, seafront homes and later suburban development. Coastal exposure, salt air and moisture all influence what materials and detailing work best here.",
    externalLink: {
      label: "Whitstable Town Council",
      url: "https://www.whitstabletowncouncil.gov.uk/",
    },
  },
  faversham: {
    propertyTypes: ["historic market town properties", "Georgian buildings", "Victorian terraces", "creek-side homes"],
    characteristics: ["conservation areas", "historic town centre", "creek location"],
    localFeatures: ["market square", "creek area", "historic quarter"],
    propertySummary: "Faversham has one of the richest historic housing mixes in Kent, with Georgian buildings, Victorian terraces, older town-centre properties and homes near the creek. That makes it especially important to understand conservation constraints, older construction methods and the demands of upgrading period homes properly.",
    externalLink: {
      label: "Faversham Town Council",
      url: "https://favershamtowncouncil.gov.uk/",
    },
  },
  wye: {
    propertyTypes: ["village properties", "period homes", "rural cottages"],
    characteristics: ["North Downs setting", "conservation area", "village character"],
    localFeatures: ["village centre", "Wye Crown", "downland location"],
    propertySummary: "Wye blends traditional village housing, period homes and rural cottages in a setting shaped by the North Downs and its conservation context. Home improvements here often need to combine sympathetic design with practical upgrades for modern living.",
    externalLink: {
      label: "Wye National Nature Reserve",
      url: "https://www.nationaltrust.org.uk/visit/kent/wye-downs",
    },
  },
  sandwich: {
    propertyTypes: ["historic town properties", "medieval buildings", "period cottages"],
    characteristics: ["ancient Cinque Port", "conservation area", "historic architecture"],
    localFeatures: ["historic town centre", "medieval streets", "town walls"],
    propertySummary: "Sandwich has an exceptional stock of historic properties, including medieval buildings, period town houses and cottages within a highly distinctive conservation setting. Building work here benefits from a strong understanding of heritage materials, detailing and planning sensitivity.",
    externalLink: {
      label: "Sandwich Town Council",
      url: "https://www.sandwichtowncouncil.gov.uk/",
    },
  },
  folkestone: {
    propertyTypes: ["coastal properties", "Victorian terraces", "clifftop homes", "harbour properties"],
    characteristics: ["coastal location", "Creative Quarter", "harbour area"],
    localFeatures: ["seafront", "Leas clifftop", "Old High Street"],
    propertySummary: "Folkestone has a broad range of coastal housing, from Victorian terraces and clifftop homes to regenerated town-centre apartments and harbour-side properties. Exposure to sea air and the town's varied housing stock make tailored specification especially important here.",
    externalLink: {
      label: "Folkestone & Hythe District Council",
      url: "https://www.folkestone-hythe.gov.uk/",
    },
  },
  chilham: {
    propertyTypes: ["historic village properties", "period cottages", "medieval buildings"],
    characteristics: ["conservation village", "historic square", "traditional architecture"],
    localFeatures: ["village square", "castle grounds", "historic centre"],
    propertySummary: "Chilham is one of Kent's best-known historic villages, with a remarkable concentration of period cottages, medieval buildings and heritage-sensitive homes around its famous square. Work here calls for a careful approach to materials, proportions and historic detail.",
    externalLink: {
      label: "Chilham — Kent Downs National Landscape",
      url: "https://kentdowns.org.uk/top-downs/chilham/",
    },
  },
  ashford: {
    propertyTypes: ["modern developments", "period town properties", "suburban homes", "rural village homes"],
    characteristics: ["major transport hub", "growing town", "mixed residential areas"],
    localFeatures: ["town centre", "high speed rail links", "surrounding villages"],
    propertySummary: "Ashford is one of Kent's fastest-growing towns with a broad mix of housing — from modern new-build estates and town-centre apartments to older period homes and village properties in its surrounding parishes. Projects range from contemporary kitchen and bathroom installations in new-builds to full refurbishments of older residential properties.",
    externalLink: {
      label: "Ashford Borough Council",
      url: "https://www.ashford.gov.uk/",
    },
  },
  maidstone: {
    propertyTypes: ["Victorian townhouses", "Edwardian semis", "modern developments", "riverside properties"],
    characteristics: ["county town", "River Medway location", "diverse housing stock"],
    localFeatures: ["town centre", "River Medway", "surrounding villages"],
    propertySummary: "Maidstone is Kent's county town with a wide variety of property types — from Victorian townhouses and Edwardian semis in established residential areas to modern new-builds across the borough. Building work here spans the full range from sympathetic period renovation to contemporary home improvement.",
    externalLink: {
      label: "Maidstone Borough Council",
      url: "https://www.maidstone.gov.uk/",
    },
  },
  deal: {
    propertyTypes: ["Georgian townhouses", "Victorian terraces", "coastal properties", "seafront homes"],
    characteristics: ["coastal location", "maritime heritage", "conservation area"],
    localFeatures: ["seafront", "Deal Castle", "historic town centre"],
    propertySummary: "Deal has a fine collection of Georgian and Victorian architecture, with a historic town centre, seafront properties and terraced housing throughout. Coastal exposure and the town's conservation sensitivity mean building work here benefits from careful material selection and an understanding of heritage construction.",
    externalLink: {
      label: "Dover District Council — Deal area",
      url: "https://www.dover.gov.uk/",
    },
  },
  broadstairs: {
    propertyTypes: ["Victorian villas", "period cottages", "seafront properties", "modern homes"],
    characteristics: ["coastal location", "Dickensian heritage", "Isle of Thanet"],
    localFeatures: ["Viking Bay", "seafront", "historic town centre"],
    propertySummary: "Broadstairs has a charming mix of Victorian villas, period cottages and seafront properties along with more modern residential development on the Isle of Thanet. Coastal exposure and the town's heritage character inform much of the building work carried out here.",
    externalLink: {
      label: "Thanet District Council — Broadstairs",
      url: "https://www.thanet.gov.uk/",
    },
  },
  ramsgate: {
    propertyTypes: ["Regency terraces", "Victorian properties", "harbour-side apartments", "modern homes"],
    characteristics: ["Royal Harbour", "coastal location", "Regency architecture"],
    localFeatures: ["Royal Harbour", "town centre", "seafront"],
    propertySummary: "Ramsgate has a fine collection of Regency and Victorian architecture, a Royal Harbour and a varied mix of residential properties across the town. Regeneration activity and a strong heritage character make quality building work — from period renovation to modern home improvement — particularly valued here.",
    externalLink: {
      label: "Thanet District Council — Ramsgate",
      url: "https://www.thanet.gov.uk/",
    },
  },
};

// Service-specific considerations for different property types
const SERVICE_PROPERTY_CONSIDERATIONS: Record<string, (location: string, context: LocationContext) => string> = {
  "kitchen-installation": (location, context) => {
    if (context.characteristics.includes("conservation area")) {
      return `When installing kitchens in ${location}'s ${context.propertyTypes[0]}, we pay particular attention to preserving original features while incorporating modern functionality. Our experience with conservation area requirements ensures your kitchen renovation respects the character of your property.`;
    }
    if (context.characteristics.includes("coastal location")) {
      return `Coastal properties in ${location} require special consideration for kitchen installations. We use materials and finishes that withstand the salt air and moisture, ensuring your kitchen remains beautiful and functional for years to come.`;
    }
    return `Our kitchen installations in ${location} are tailored to suit ${context.propertyTypes[0]}, combining quality craftsmanship with practical design that works for your lifestyle.`;
  },
  
  "flooring-underfloor-heating": (location, context) => {
    if (context.propertyTypes.includes("period cottages") || context.propertyTypes.includes("period properties")) {
      return `Period properties in ${location} often have solid floors and traditional construction that are ideal for underfloor heating retrofits. We use specialized milling techniques to install heating without raising floor levels, preserving the character of your ${context.propertyTypes[0]}.`;
    }
    if (context.characteristics.includes("coastal location")) {
      return `Underfloor heating is particularly effective in ${location}'s coastal properties, providing even warmth that combats the chill from sea breezes. We install systems suitable for the moisture considerations of coastal homes.`;
    }
    return `Whether you have ${context.propertyTypes[0]} or modern builds in ${location}, our underfloor heating installations provide efficient, comfortable warmth throughout your home.`;
  },

  "facility-building-management": (location, context) => {
    if (location === "canterbury" || location === "whitstable" || location === "faversham") {
      return `Commercial properties and rental portfolios in ${location} require reliable, responsive facilities management. We provide planned maintenance programmes and rapid emergency response for businesses and landlords across ${location}'s ${context.localFeatures[0]}.`;
    }
    return `From ${context.propertyTypes[0]} to commercial premises in ${location}, our facilities management service ensures your buildings are maintained to the highest standards with minimal disruption.`;
  },

  "electrician": (location, context) => {
    if (context.characteristics.includes("conservation area") || context.characteristics.includes("historic")) {
      return `Electrical work in ${location}'s ${context.propertyTypes[0]} requires sensitivity to original features and conservation requirements. Our NICEIC-approved electricians have extensive experience with period property rewiring, ensuring safety while preserving character.`;
    }
    return `From EICR testing for landlords to complete rewires, our NICEIC-approved electricians serve ${context.propertyTypes[0]} throughout ${location} with professional, certified electrical work.`;
  },

  "air-source-heat-pump": (location, context) => {
    if (context.characteristics.includes("rural") || context.characteristics.includes("countryside")) {
      return `Properties in ${location}'s ${context.characteristics[0]} are often ideal candidates for air source heat pumps, particularly those without mains gas. Our MCS-accredited installations help ${location} homeowners reduce energy costs and carbon emissions.`;
    }
    return `As MCS-accredited installers, we help ${location} homeowners transition to renewable heating with air source heat pumps, providing full home energy assessments and access to Government grants.`;
  },

  "solar-panel-installation": (location, context) => {
    if (context.characteristics.includes("conservation area")) {
      return `Solar panel installations in ${location}'s conservation areas require careful planning and sensitive positioning. Our MCS-accredited team works with local planning requirements to deliver efficient solar systems that respect the character of ${context.propertyTypes[0]}.`;
    }
    return `${location} properties benefit from our MCS-accredited solar panel installations, with systems designed to maximize energy generation for your specific roof orientation and local conditions.`;
  },

  "air-conditioning": (location, context) => {
    if (context.characteristics.includes("coastal location")) {
      return `Coastal properties in ${location} benefit greatly from air conditioning during warm weather. Our F-Gas certified engineers install systems designed for ${location}'s maritime climate, with corrosion-resistant components for longevity.`;
    }
    if (location === "canterbury" || location === "faversham") {
      return `Commercial and residential air conditioning in ${location} requires expert installation and maintenance. Our F-Gas certified engineers serve businesses and homes across ${location}, from discreet residential units to commercial climate control systems.`;
    }
    return `Our F-Gas certified air conditioning installations in ${location} provide year-round climate control for ${context.propertyTypes[0]}, with energy-efficient systems and annual maintenance contracts.`;
  },

  "new-bathroom": (location, context) => {
    if (context.propertyTypes.includes("period cottages") || context.propertyTypes.includes("Victorian terraces")) {
      return `Bathroom installations in ${location}'s ${context.propertyTypes[0]} often involve working with traditional construction and limited space. Our experienced team creates beautiful, functional bathrooms that respect the character of your period property while delivering modern comfort.`;
    }
    return `From luxury wet rooms to family bathrooms, our installations in ${location} transform ${context.propertyTypes[0]} with quality fixtures, expert tiling, and meticulous attention to detail.`;
  },

  "property-refurbishment": (location, context) => {
    if (context.characteristics.includes("conservation area") || context.characteristics.includes("historic")) {
      return `Property refurbishment in ${location} often involves ${context.propertyTypes[0]} with conservation considerations. Our team has extensive experience navigating planning requirements while delivering transformative renovations that enhance both character and value.`;
    }
    return `Whether you're renovating ${context.propertyTypes[0]} or undertaking a complete transformation in ${location}, we coordinate every trade to deliver seamless, high-quality refurbishments that add genuine value.`;
  },

  "plumbing-drainage": (location, context) => {
    if (context.characteristics.includes("River") || context.characteristics.includes("riverside") || context.characteristics.includes("creek")) {
      return `Properties in ${location}'s ${context.characteristics[0]} location require particular attention to drainage and water management. Our Gas Safe registered plumbers have extensive experience with ${location}'s local conditions and requirements.`;
    }
    return `From boiler installations to complete bathroom plumbing, our Gas Safe registered team serves ${context.propertyTypes[0]} throughout ${location} with reliable, professional plumbing services.`;
  },

  "carpentry": (location, context) => {
    if (context.characteristics.includes("conservation") || context.characteristics.includes("historic")) {
      return `Carpentry work in ${location}'s ${context.propertyTypes[0]} demands traditional skills and attention to period detail. Our craftsmen specialize in heritage joinery, from sash window restoration to bespoke staircases that match original features.`;
    }
    return `Our skilled carpenters deliver bespoke joinery for ${context.propertyTypes[0]} in ${location}, from custom-built furniture to structural carpentry and first/second fix work.`;
  },

  "garage-workshop-conversion": (location, context) => {
    if (context.characteristics.includes("city centre") || location === "canterbury") {
      return `Garage conversions in ${location} offer valuable additional living space, particularly important in ${context.characteristics[0]} where space is at a premium. We transform garages into home offices, gyms, or extra bedrooms with full insulation, heating, and professional finishes.`;
    }
    return `Maximize your ${location} property's potential with a professional garage conversion. We handle all aspects from structural work to final decoration, creating quality living space that adds value to your home.`;
  },

  "roofing": (location, context) => {
    if (context.characteristics.includes("coastal location")) {
      return `Roofing in ${location}'s coastal environment requires materials and techniques that withstand salt air and strong winds. Our experienced roofers use appropriate specifications for ${location}'s maritime climate, ensuring long-lasting, weather-tight roofs.`;
    }
    if (context.characteristics.includes("conservation") || context.propertyTypes.includes("listed")) {
      return `Roofing work on ${location}'s ${context.propertyTypes[0]} often requires traditional materials like Kent Peg tiles or handmade clay tiles. Our team has extensive experience with conservation specifications and listed building requirements.`;
    }
    return `From slate and tile repairs to complete re-roofing, we serve ${context.propertyTypes[0]} throughout ${location} with expert roofing installations and repairs using quality materials suited to local conditions.`;
  },

  "home-office-conversion": (location, context) => {
    if (location === "canterbury" || location === "whitstable" || location === "faversham") {
      return `With many ${location} residents now working from home, a dedicated office space is essential. We create bespoke home offices in ${context.propertyTypes[0]} with dedicated data cabling, proper lighting, and climate control for productive working.`;
    }
    return `Transform a room in your ${location} home into a professional workspace. Our home office conversions include rewiring, data systems, custom furniture, and all the infrastructure you need for effective home working.`;
  },

  "cinema-room-installation": (location, context) => {
    return `Create the ultimate home entertainment space in your ${location} property. Our cinema room installations transform ${context.propertyTypes[0]} into professional-grade viewing experiences with hidden cabling, acoustic treatment, and premium AV equipment.`;
  },

  "driveways-paving": (location, context) => {
    if (context.characteristics.includes("conservation area")) {
      return `Driveway and paving work in ${location}'s conservation areas requires materials and designs that complement ${context.propertyTypes[0]}. We use appropriate materials from traditional block paving to permeable surfaces that meet planning requirements.`;
    }
    if (context.characteristics.includes("coastal location")) {
      return `Driveways in ${location} need materials that withstand coastal weather conditions. We install durable surfaces from resin-bound to porcelain paving, all designed for ${location}'s maritime climate.`;
    }
    return `Transform your ${location} property's kerb appeal with professional driveway and paving installations. We serve ${context.propertyTypes[0]} with quality materials from block paving to resin surfaces.`;
  },
};

/**
 * Generate location and service-specific intro paragraph
 */
export function generateServiceLocationIntro(service: Service, area: Area): string {
  const context = LOCATION_CONTEXTS[area.slug] || {
    propertyTypes: ["properties"],
    characteristics: ["local area"],
    localFeatures: ["area"],
    propertySummary: `Properties in ${area.name} range from established homes to more modern housing, and our team tailors every project to the age, layout and condition of the building involved.`,
    externalLink: {
      label: `${area.name} local information`,
      url: "https://www.canterbury.gov.uk/",
    },
  };

  const generator = SERVICE_PROPERTY_CONSIDERATIONS[service.slug];
  if (generator) {
    return generator(area.name, context);
  }

  // Fallback for services without specific generators
  return `Our ${service.shortName.toLowerCase()} services in ${area.name} are delivered by experienced professionals who understand the specific requirements of ${context.propertyTypes[0]} in this area.`;
}

/**
 * Generate "Why Choose Us" paragraph specific to location
 */
export function generateWhyChooseUsLocal(area: Area): string {
  const context = LOCATION_CONTEXTS[area.slug] || {
    propertyTypes: ["properties"],
    characteristics: ["local area"],
    localFeatures: ["area"],
    propertySummary: `Properties in ${area.name} range from established homes to more modern housing, and our team tailors every project to the age, layout and condition of the building involved.`,
    externalLink: {
      label: `${area.name} local information`,
      url: "https://www.canterbury.gov.uk/",
    },
  };

  if (context.characteristics.includes("conservation area") || context.characteristics.includes("historic")) {
    return `As a Canterbury-based building contractor, we have extensive experience working in ${area.name}'s ${context.characteristics[0]} with its specific planning and conservation requirements. Whether your property is ${context.propertyTypes[0]}, ${context.propertyTypes[1] || "a modern home"}, or a listed building, our skilled team understands the local regulations and delivers outstanding results that respect your property's character.`;
  }

  if (context.characteristics.includes("coastal location")) {
    return `Based in Canterbury and regularly working in ${area.name}, we understand the specific challenges of ${context.characteristics[0]}. From material selection to installation techniques, we account for salt air, moisture, and coastal weather to ensure lasting, high-quality results for your ${area.name} property.`;
  }

  if (context.characteristics.includes("rural") || context.characteristics.includes("countryside") || context.characteristics.includes("village")) {
    return `Serving ${area.name} from our Canterbury base, we understand the unique character of ${context.characteristics[0]} and the properties found here. From ${context.propertyTypes[0]} to ${context.propertyTypes[1] || "modern homes"}, our team delivers the same premium standard of workmanship that our clients across rural Kent have come to rely on.`;
  }

  return `As a Canterbury-based building contractor, we understand the properties and planning requirements specific to ${area.name} and the surrounding ${area.county} area. Whether your property is ${context.propertyTypes[0]}, ${context.propertyTypes[1] || "a modern build"}, or a period home, our skilled team has the expertise to deliver outstanding results.`;
}

export function getLocationContext(area: Area): LocationContext {
  return LOCATION_CONTEXTS[area.slug] || {
    propertyTypes: ["properties"],
    characteristics: ["local area"],
    localFeatures: ["area"],
    propertySummary: `Properties in ${area.name} range from established homes to more modern housing, and our team tailors every project to the age, layout and condition of the building involved.`,
    externalLink: {
      label: `${area.name} local information`,
      url: "https://www.canterbury.gov.uk/",
    },
  };
}
