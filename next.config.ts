import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⚡ Ignore ESLint errors/warnings during production build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
