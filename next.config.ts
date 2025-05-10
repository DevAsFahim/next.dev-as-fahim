import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'upload.wikimedia.org',
      '%20.wikimedia.org'
    ],
  },
};

export default nextConfig;
