import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import GoogleReviews from "@/components/GoogleReviews";
import { DOMAIN, COMPANY } from "@/lib/services";

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
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <GoogleReviews />
        <Footer />
      </body>
    </html>
  );
}
