export interface Area {
  slug: string;
  name: string;
  county: string;
  description: string;
  secondParagraph: string;
  mapEmbed: string;
  nearbyAreas: string[];
  population?: string;
  type: "city" | "town" | "village";
}

export const AREAS: Area[] = [
  {
    slug: "canterbury",
    name: "Canterbury",
    county: "Kent",
    description:
      "Canterbury is a historic cathedral city in Kent, home to the world-famous Canterbury Cathedral and a vibrant mix of period and modern properties. Our team is based here and has deep knowledge of the local architecture, planning requirements and building regulations.",
    secondParagraph: "Being Canterbury-based ourselves, we know this city inside out — from conservation area restrictions around the city walls to the planning policies governing listed properties. Whether you're updating a Victorian terrace in Wincheap, refurbishing a townhouse in St Dunstan's, or fitting a new kitchen in a modern development, we're your local team.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40096.44!2d1.0780!3d51.2802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decb6c3bfffffd%3A0x78e8a1d97b7a1d6e!2sCanterbury!5e0!3m2!1sen!2suk!4v1700000000000",
    nearbyAreas: ["Harbledown", "Blean", "Sturry", "Bridge", "Chartham"],
    type: "city",
  },
  {
    slug: "harbledown",
    name: "Harbledown",
    county: "Kent",
    description:
      "Harbledown is a picturesque village on the western outskirts of Canterbury, known for its historic Norman church and beautiful period cottages. We regularly work on property renovations and improvements throughout this sought-after village.",
    secondParagraph: "Many properties in Harbledown are older builds requiring thoughtful renovation. Our team specialises in upgrading heating systems, kitchens, bathrooms and energy efficiency measures while preserving the charm of these traditional Kent homes.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.0480!3d51.2802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decb7a7d5a1234%3A0x12345abcd6789ef0!2sHarbledown%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000001",
    nearbyAreas: ["Canterbury", "Blean", "Chartham"],
    type: "village",
  },
  {
    slug: "blean",
    name: "Blean",
    county: "Kent",
    description:
      "Blean is a charming village to the north-west of Canterbury, nestled alongside the ancient Blean Woods. With a mix of period properties and modern homes, our building team provides expert services to homeowners throughout the Blean area.",
    secondParagraph: "We work on a wide variety of projects in Blean — from full property refurbishments and garage conversions to solar panel installations and underfloor heating. With easy access from the A290, our team can typically be with you quickly, making Blean one of our most regularly served villages.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.0430!3d51.3002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decb7000000001%3A0x12345abcd6789ef1!2sBlean%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000002",
    nearbyAreas: ["Canterbury", "Harbledown", "Whitstable"],
    type: "village",
  },
  {
    slug: "sturry",
    name: "Sturry",
    county: "Kent",
    description:
      "Sturry is a growing village to the north-east of Canterbury, with a mix of established period properties and newer residential developments. Our team provides comprehensive building services throughout Sturry and the surrounding area.",
    secondParagraph: "Sturry has seen considerable residential growth in recent years, bringing demand for kitchen installations, bathroom fitting, electrical upgrades and landscaping across both new and older properties. Our team delivers consistent, high-quality results whether it's a small repair or a major refurbishment.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.1180!3d51.2952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decb8000000001%3A0x12345abcd6789ef2!2sSturry%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000003",
    nearbyAreas: ["Canterbury", "Fordwich", "Wickhambreaux"],
    type: "village",
  },
  {
    slug: "bridge",
    name: "Bridge",
    county: "Kent",
    description:
      "Bridge is a charming village just south of Canterbury along the A2, featuring beautiful period homes and a strong community feel. We have carried out numerous renovation and building projects for homeowners in Bridge and the surrounding villages.",
    secondParagraph: "Bridge's mix of flint cottages, farmhouses and modern family homes means no two jobs are the same here. We're experienced in everything from damp-proofing and roof repairs on older properties to full kitchen and bathroom renovations on newer builds.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.1280!3d51.2402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decba000000001%3A0x12345abcd6789ef3!2sBridge%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000004",
    nearbyAreas: ["Canterbury", "Barham", "Bekesbourne", "Adisham"],
    type: "village",
  },
  {
    slug: "barham",
    name: "Barham",
    county: "Kent",
    description:
      "Barham is a quiet village in the Elham Valley south of Canterbury, popular for its countryside setting and traditional Kent properties. Our skilled builders and tradespeople are experienced in working on both historic and modern properties in Barham.",
    secondParagraph: "The Elham Valley is dotted with beautiful period properties that require sensitive, skilled building work. In Barham we frequently undertake roofing repairs, period window restoration, bathroom refurbishments and whole-house renovations. We understand the importance of maintaining the character of these homes while bringing them up to modern standards of comfort.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.1580!3d51.2002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decbc000000001%3A0x12345abcd6789ef4!2sBarham%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000005",
    nearbyAreas: ["Bridge", "Bekesbourne", "Waltham"],
    type: "village",
  },
  {
    slug: "bekesbourne",
    name: "Bekesbourne",
    county: "Kent",
    description:
      "Bekesbourne is a peaceful village lying between Canterbury and Sandwich, known for its rural character and attractive properties. We provide high-quality building services to homeowners throughout Bekesbourne and the surrounding Kent countryside.",
    secondParagraph: "Rural villages like Bekesbourne often have properties extended and modified over generations, requiring a builder who can work sensitively across different eras of construction. We're experienced in matching materials, navigating planning constraints and delivering work that feels at home in the local landscape.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.1680!3d51.2552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decbd000000001%3A0x12345abcd6789ef5!2sBekesbourne%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000006",
    nearbyAreas: ["Bridge", "Littlebourne", "Wingham"],
    type: "village",
  },
  {
    slug: "wickhambreaux",
    name: "Wickhambreaux",
    county: "Kent",
    description:
      "Wickhambreaux is a beautiful and historic village east of Canterbury, centred around a picturesque village green and medieval church. Our team is experienced in sympathetic restoration and renovation work for the unique period properties found in Wickhambreaux.",
    secondParagraph: "Working in conservation villages like Wickhambreaux demands care, craftsmanship and an understanding of heritage building techniques. Our director Paul has over 30 years of experience across listed and historic buildings — you can trust us to handle your Wickhambreaux property with the respect it deserves.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.1780!3d51.2852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decbe000000001%3A0x12345abcd6789ef6!2sWickhambreaux%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000007",
    nearbyAreas: ["Sturry", "Littlebourne", "Ickham"],
    type: "village",
  },
  {
    slug: "wingham",
    name: "Wingham",
    county: "Kent",
    description:
      "Wingham is one of the most attractive villages in East Kent, with a long main street lined with historic buildings. We regularly carry out building and renovation work in Wingham, with particular expertise in period property improvements and listed building work.",
    secondParagraph: "Wingham's high street is one of the finest in rural Kent, and many of its properties carry listed status or sit within the conservation area. Our experience with listed building consent, traditional materials and period-appropriate finishes makes us a trusted choice for homeowners who want quality work done without compromising their home's character.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.2180!3d51.2702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decbf000000001%3A0x12345abcd6789ef7!2sWingham%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000008",
    nearbyAreas: ["Bekesbourne", "Wickhambreaux", "Sandwich"],
    type: "village",
  },
  {
    slug: "fordwich",
    name: "Fordwich",
    county: "Kent",
    description:
      "Fordwich is England's smallest town, located just outside Canterbury on the River Stour. With its unique historic character and range of period properties, we are proud to provide sensitive and high-quality building services throughout Fordwich.",
    secondParagraph: "Every building project in Fordwich comes with its own story — whether it's a medieval timber-framed house requiring structural repairs or a riverside cottage in need of a modern kitchen and bathroom. We approach each project here with the care it demands, bringing both traditional craft skills and up-to-date building knowledge to achieve outstanding results.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.1080!3d51.3052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decb9000000001%3A0x12345abcd6789ef8!2sFordwich%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000009",
    nearbyAreas: ["Sturry", "Canterbury", "Blean"],
    type: "town",
  },
  {
    slug: "chartham",
    name: "Chartham",
    county: "Kent",
    description:
      "Chartham is a thriving village to the south-west of Canterbury in the Stour Valley, with excellent transport links and a range of property types. Our team covers all building services throughout Chartham, from kitchen installations to full property refurbishments.",
    secondParagraph: "Chartham is one of our most active areas for home improvement projects. Its popularity with commuters and families means there's always demand for quality building work — we've carried out kitchen renovations, loft and garage conversions, full refurbishments and driveways throughout the village.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.0080!3d51.2402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decb5000000001%3A0x12345abcd6789ef9!2sChartham%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000010",
    nearbyAreas: ["Canterbury", "Harbledown", "Wye"],
    type: "village",
  },
  {
    slug: "adisham",
    name: "Adisham",
    county: "Kent",
    description:
      "Adisham is a quiet, leafy village south of Canterbury, known for its historic church and attractive rural properties. We provide expert building services to homeowners in Adisham and the surrounding East Kent villages.",
    secondParagraph: "Adisham's rural setting and traditional properties make it a rewarding place to work. We regularly help homeowners here improve both the comfort and value of their homes — from installing air source heat pumps and solar panels to full bathroom suites, carpentry and driveways.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.1980!3d51.2202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decbb000000001%3A0x12345abcd6789efa!2sAdisham%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000011",
    nearbyAreas: ["Barham", "Bridge", "Bekesbourne"],
    type: "village",
  },
  {
    slug: "littlebourne",
    name: "Littlebourne",
    county: "Kent",
    description:
      "Littlebourne is a well-regarded village east of Canterbury, popular with families and professionals who appreciate its rural setting with easy access to the city. Our building team regularly works in Littlebourne, covering all trades from plumbing to full renovations.",
    secondParagraph: "Homeowners in Littlebourne often come to us for mid-to-large renovation projects — converting an outbuilding into a home office, fitting a new kitchen, or refurbishing a bathroom. We manage the full project from start to finish, coordinating all trades so you have just one point of contact throughout.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.1480!3d51.2702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decbdb00000001%3A0x12345abcd6789efb!2sLittlebourne%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000012",
    nearbyAreas: ["Wickhambreaux", "Bekesbourne", "Ickham"],
    type: "village",
  },
  {
    slug: "ickham",
    name: "Ickham",
    county: "Kent",
    description:
      "Ickham is a peaceful village in the heart of the East Kent countryside, not far from Canterbury. With many beautiful period farmhouses and cottages in the area, our team has extensive experience carrying out sympathetic renovation and building works in Ickham.",
    secondParagraph: "The older farmhouses and rural cottages around Ickham often need specialist attention — from structural repairs and replacement roofing to new windows, full interior refurbishments and energy efficiency upgrades. Our director's 30+ years of experience across all building types means we know how to work on these properties properly.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.1680!3d51.2802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decbdc00000001%3A0x12345abcd6789efc!2sIckham%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000013",
    nearbyAreas: ["Littlebourne", "Wickhambreaux", "Wingham"],
    type: "village",
  },
  {
    slug: "petham",
    name: "Petham",
    county: "Kent",
    description:
      "Petham is a charming village nestled in a valley south of Canterbury, surrounded by rolling Kent countryside. We serve homeowners throughout Petham, delivering high-quality building and renovation services to both traditional and modern properties.",
    secondParagraph: "Petham's countryside setting attracts homeowners who value space and quality of life. We help those homeowners make the most of their properties — whether that means a new extension, a cinema room conversion, a fully tiled bathroom, or a heat pump installation. Whatever your vision for your Petham home, we have the skills to deliver it.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.0780!3d51.2102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decb3000000001%3A0x12345abcd6789efd!2sPetham%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000014",
    nearbyAreas: ["Chartham", "Waltham", "Bridge"],
    type: "village",
  },
  {
    slug: "waltham",
    name: "Waltham",
    county: "Kent",
    description:
      "Waltham is a quiet rural village in the Elham Valley, between Canterbury and Folkestone. Known for its beautiful countryside and traditional Kent properties, our team provides expert building services throughout Waltham and the surrounding Elham Valley villages.",
    secondParagraph: "The Elham Valley has a distinct rural identity and its properties often require the kind of skilled, all-trades builder that larger firms can't provide. We work closely with Waltham homeowners on renovations that suit the character of the area — from energy-efficient upgrades and new bathrooms to carpentry, driveways and full refurbishments.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d1.1280!3d51.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decb2000000001%3A0x12345abcd6789efe!2sWaltham%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000015",
    nearbyAreas: ["Barham", "Petham", "Folkestone"],
    type: "village",
  },
  {
    slug: "whitstable",
    name: "Whitstable",
    county: "Kent",
    description:
      "Whitstable is a vibrant coastal town north of Canterbury, famous for its oysters, colourful beach huts and artistic community. With a mix of Victorian terraces, period cottages and modern developments, our team is well-versed in all types of building work throughout Whitstable.",
    secondParagraph: "Whitstable's coastal environment comes with its own building challenges — salt air, older Victorian stock, and properties that need robust, weather-resistant finishes. We're experienced in tackling all of this, from re-roofing and damp treatment to full kitchen and bathroom renovations, making us a reliable choice for Whitstable homeowners.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20024.44!2d1.0280!3d51.3602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decaa000000001%3A0x12345abcd6789eff!2sWhitstable!5e0!3m2!1sen!2suk!4v1700000000016",
    nearbyAreas: ["Blean", "Canterbury", "Faversham"],
    type: "town",
  },
  {
    slug: "faversham",
    name: "Faversham",
    county: "Kent",
    description:
      "Faversham is one of Kent's most historic market towns, with a wealth of medieval and Georgian architecture. We regularly work on properties throughout Faversham, with specialist expertise in listed building work, period property renovation and modern home improvements.",
    secondParagraph: "Faversham's rich architectural heritage demands builders who understand conservation principles and traditional craft. We have the knowledge and experience to work on Faversham's listed properties sympathetically, while also delivering fully modern kitchens, bathrooms and energy systems that make historic homes a pleasure to live in today.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20024.44!2d0.8880!3d51.3152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dec8a000000001%3A0x12345abcd6789f00!2sFaversham!5e0!3m2!1sen!2suk!4v1700000000017",
    nearbyAreas: ["Whitstable", "Canterbury", "Sittingbourne"],
    type: "town",
  },
  {
    slug: "wye",
    name: "Wye",
    county: "Kent",
    description:
      "Wye is a charming village on the River Great Stour, between Canterbury and Ashford, best known for its historic college buildings and stunning North Downs backdrop. We provide expert building and renovation services for properties throughout Wye and the surrounding area.",
    secondParagraph: "Wye attracts buyers who want North Downs beauty with good transport links to both Canterbury and Ashford. We work on everything from cottage renovations and barn conversions to solar panel installations and full property refurbishments — always taking care to respect the quality and character of buildings in this special village.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d0.9380!3d51.1852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decb0000000001%3A0x12345abcd6789f01!2sWye%2C%20Kent!5e0!3m2!1sen!2suk!4v1700000000018",
    nearbyAreas: ["Chartham", "Waltham", "Ashford"],
    type: "village",
  },
  {
    slug: "sandwich",
    name: "Sandwich",
    county: "Kent",
    description:
      "Sandwich is one of the original Cinque Ports, a beautifully preserved medieval town in East Kent with an extraordinary collection of historic buildings. Our team has significant experience working on period and listed properties in Sandwich, as well as modern homes in the surrounding area.",
    secondParagraph: "Few towns in England have as much historic building stock as Sandwich. Working here requires deep respect for heritage, a thorough understanding of listed building regulations, and the skill to work with traditional materials. Our team brings all of that — plus the full range of modern building trades — to every project we undertake in Sandwich.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20024.44!2d1.3380!3d51.2752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decd0000000001%3A0x12345abcd6789f02!2sSandwich!5e0!3m2!1sen!2suk!4v1700000000019",
    nearbyAreas: ["Wingham", "Deal", "Canterbury"],
    type: "town",
  },
  {
    slug: "folkestone",
    name: "Folkestone",
    county: "Kent",
    description:
      "Folkestone is a dynamic coastal town in Kent with a growing arts scene and significant regeneration activity. From Victorian terraces on the Leas to modern apartments and the Creative Quarter, our team covers all building services throughout Folkestone.",
    secondParagraph: "Folkestone's regeneration has driven strong demand for high-quality building work across the town. Whether you're renovating a Victorian property on the Leas, fitting out a modern apartment, or upgrading a family home with solar panels and a new kitchen, our Canterbury-based team provides the expertise and reliability Folkestone homeowners trust.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20024.44!2d1.1780!3d51.0802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decf0000000001%3A0x12345abcd6789f03!2sFolkestone!5e0!3m2!1sen!2suk!4v1700000000020",
    nearbyAreas: ["Waltham", "Canterbury", "Hythe"],
    type: "town",
  },
  {
    slug: "chilham",
    name: "Chilham",
    county: "Kent",
    description:
      "Chilham is widely regarded as one of the most beautiful villages in England, with its perfectly preserved medieval square and castle. We are proud to serve homeowners in Chilham with sensitive, high-quality building work that respects the unique historic character of this exceptional village.",
    secondParagraph: "Chilham is a privilege to work in. The properties here are extraordinary — many dating back centuries — and they deserve builders who approach their work with genuine respect and skill. Our director Paul's three decades of experience with historic and listed buildings makes Superstructure Services the natural choice for Chilham homeowners seeking the very best.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10024.44!2d0.9780!3d51.2302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decb1000000001%3A0x12345abcd6789f04!2sChilham%2C%20Canterbury!5e0!3m2!1sen!2suk!4v1700000000021",
    nearbyAreas: ["Chartham", "Wye", "Canterbury"],
    type: "village",
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return AREAS.map((a) => a.slug);
}
