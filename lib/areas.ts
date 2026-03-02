export interface Area {
  slug: string;
  name: string;
  county: string;
  description: string;
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
