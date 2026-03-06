import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { playfair } from "@/lib/fonts";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import MobileCTABar from "@/components/MobileCTABar";
import BackToTop from "@/components/BackToTop";
import { DOMAIN, COMPANY } from "@/lib/services";

const GA_ID = "G-LF7J492JPG";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
    images: [
      {
        url: `${DOMAIN}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Superstructure Services — Builders in Canterbury, Kent",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: `Builders in Canterbury | ${COMPANY}`,
    description: "Your trusted builders in Canterbury, Kent. Kitchen fitting, roofing, electrical, plumbing, solar panels, heat pumps and more.",
    images: [`${DOMAIN}/images/og-image.jpg`],
  },
  verification: {
    google: "iQUDyTpyuUB1hAUaQXhKt7BMAkn8wxU-Wv5VGVGNiXE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="font-sans antialiased pt-[96px] lg:pt-[110px] bg-white text-gray-900">
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <GoogleReviews />
        <Footer />
        <MobileCTABar />
        <BackToTop />
      </body>
    </html>
  );
}
