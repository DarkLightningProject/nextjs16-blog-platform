import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents:true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.magnific.com",
        port:"",
      },
      {
        hostname: "giddy-penguin-898.convex.cloud",
        protocol: "https",
        port:"",
      }
    ],
  },
};

export default nextConfig;
