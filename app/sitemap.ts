import { MetadataRoute } from "next";
import { SERVICES, DOMAIN } from "@/lib/services";
import { AREAS } from "@/lib/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: DOMAIN,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${DOMAIN}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/areas-we-serve`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${DOMAIN}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/privacy-policy`,
      lastModified: new Date("2021-07-15"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    // Legacy URL redirects – keep indexed
    {
      url: `${DOMAIN}/new-bathroom-fitter-canterbury`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${DOMAIN}/facility-building-management`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Canterbury service pages (existing URLs preserved)
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${DOMAIN}/services/${s.canonicalSlug.replace("services/", "")}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Area hub pages
  const areaPages: MetadataRoute.Sitemap = AREAS.map((a) => ({
    url: `${DOMAIN}/areas-we-serve/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Service + location combination pages (16 × 22 = 352 pages)
  const serviceLocationPages: MetadataRoute.Sitemap = SERVICES.flatMap((s) =>
    AREAS.map((a) => ({
      url: `${DOMAIN}/${s.slug}/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  return [
    ...staticPages,
    ...servicePages,
    ...areaPages,
    ...serviceLocationPages,
  ];
}
