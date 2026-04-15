import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/inventory",
  transpilePackages: ["@drinks/ui", "@drinks/types"]
};

export default nextConfig;
