import type { NextConfig } from "next";

// No images.remotePatterns, on purpose: every image on the site is a local
// file in public/.
const nextConfig: NextConfig = {
  // Service pages moved under /services on 18 November 2026. Keep the old
  // addresses working for anyone who saved or shared them.
  redirects() {
    return [
      { source: "/commercialization", destination: "/services/ip-strategy", permanent: true },
      { source: "/training", destination: "/services/training", permanent: true },
    ];
  },
};

export default nextConfig;
