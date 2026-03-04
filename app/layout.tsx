import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import GoogleReviews from "@/components/GoogleReviews";
import MobileCTABar from "@/components/MobileCTABar";
import BackToTop from "@/components/BackToTop";
import { DOMAIN, COMPANY, PHONE, EMAIL } from "@/lib/services";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: `Builders in Canterbury | House Renovation & Maintenance | ${COMPANY}`,
    template: `%s | ${COMPANY}`,
  },
  description:
    "Your trusted builders in Canterbury, Kent. From renovations to extensions, our experienced team delivers quality craftsmanship across Canterbury and the surrounding areas.",
  metadataBase: new URL(DOMAIN),
  alternates: { canonical: DOMAIN },
  openGraph: {
    siteName: COMPANY,
    locale: "en_GB",
    type: "website",
  },
  keywords: ["builders Canterbury", "building contractors Kent", "kitchen installation Canterbury", "bathroom fitting Canterbury", "solar panels Canterbury", "electricians Canterbury", "roofing Canterbury", "property refurbishment Kent", "Superstructure Services"],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  twitter: {
    card: "summary_large_image",
    title: `Builders in Canterbury | ${COMPANY}`,
    description: "Your trusted builders in Canterbury, Kent. Kitchen fitting, roofing, electrical, plumbing, solar panels, heat pumps and more.",
  },
  verification: {},
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${DOMAIN}/#organization`,
  name: COMPANY,
  url: DOMAIN,
  telephone: PHONE,
  email: EMAIL,
  description: "Professional building contractors based in Canterbury, Kent. Specialists in kitchen installation, bathroom fitting, roofing, solar panels, air source heat pumps, electrical work, plumbing and full property refurbishment.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "67 Canterbury Innovation Centre",
    addressLocality: "Canterbury",
    addressRegion: "Kent",
    postalCode: "CT2 7FG",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.2802,
    longitude: 1.078,
  },
  areaServed: [
    { "@type": "City", name: "Canterbury" },
    { "@type": "AdministrativeArea", name: "Kent" },
  ],
  sameAs: ["https://www.instagram.com/superstructureservices"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Building & Trade Services",
    itemListElement: [
      "Kitchen Installation", "Flooring & Underfloor Heating", "Facilities Management",
      "Electrical", "Air Source Heat Pumps", "Solar Panels", "Air Conditioning",
      "New Bathrooms", "Property Refurbishment", "Plumbing & Drainage",
      "Carpentry", "Garage Conversions", "Roofing", "Home Office", "Cinema Rooms", "Driveways & Paving"
    ].map((name, i) => ({ "@type": "Offer", position: i + 1, itemOffered: { "@type": "Service", name } }))
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="overflow-x-hidden">
      <body className="font-sans antialiased pt-[96px] lg:pt-[110px] bg-white text-gray-900 overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <LoadingScreen />
        <Header />
        <main className="pb-16 lg:pb-0">{children}</main>
        <GoogleReviews />
        <Footer />
        <MobileCTABar />
        <BackToTop />
      </body>
    </html>
  );
}
