import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Forces build to finish
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores linting rules
  },
};

export default nextConfig;