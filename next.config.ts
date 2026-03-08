import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    // Restrict to only the sizes actually rendered on screen — reduces transformations per image
    deviceSizes: [640, 1080, 1920],
    imageSizes: [256, 512],
    // webp only — skipping avif halves the number of transformations (avif + webp = 2x per image)
    formats: ["image/webp"],
    // Cache transformed images for 1 year — minimises repeat transformations
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "superstructureservices.co.uk",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },

  async redirects() {
    return [
      // Legacy WordPress URL patterns — preserve SEO juice with 301s
      {
        source: "/new-bathroom-fitter-canterbury",
        destination: "/services/new-bathroom-fitter-canterbury",
        permanent: true,
      },
      {
        source: "/facility-building-management",
        destination: "/services/facility-building-management",
        permanent: true,
      },
      {
        source: "/services/roofing-installation-canterbury",
        destination: "/services/new-roof-installation-repairs",
        permanent: true,
      },
      {
        source: "/services/flooring-underfloor-heating-installation-in-canterbury",
        destination: "/services/underfloor-heating-installation",
        permanent: true,
      },
      // Groundworks — map to driveways/paving (closest match)
      {
        source: "/services/groundworks-contractor",
        destination: "/services/driveways-and-paving-canterbury",
        permanent: true,
      },
    ];
  },

  // Ensure clean trailing slash behaviour
  trailingSlash: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com https://maps.googleapis.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https://images.unsplash.com https://maps.gstatic.com https://maps.googleapis.com https://*.googleapis.com https://*.gstatic.com",
              "frame-src https://www.google.com https://maps.google.com",
              "connect-src 'self' https://maps.googleapis.com https://www.googletagmanager.com https://www.google-analytics.com",
              "font-src 'self' https://fonts.gstatic.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
