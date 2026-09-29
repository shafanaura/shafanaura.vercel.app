import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.getlayers.ai",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
