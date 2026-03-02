import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

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
      // Projects sub-pages
      {
        source: "/projects/:slug",
        destination: "/projects",
        permanent: true,
      },
    ];
  },

  // Ensure clean trailing slash behaviour
  trailingSlash: false,
};

export default nextConfig;
