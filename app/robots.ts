import { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/services";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${DOMAIN}/sitemap.xml`,
    host: DOMAIN,
  };
}
