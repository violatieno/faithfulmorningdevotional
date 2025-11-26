import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 💡 REMOVE: output: "export",
  
  images: {
    unoptimized: true,
  },
  typescript: {
    // You can keep this commented out unless you specifically need it
    // ignoreBuildErrors: true, 
  },
};

export default nextConfig;