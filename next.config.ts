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
        hostname: "scrupulous-nightingale-155.eu-west-1.convex.cloud",
        protocol: "https",
        port:"",
      }
    ],
  },
};

export default nextConfig;
