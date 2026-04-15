import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/catalog",
  transpilePackages: ["@drinks/ui", "@drinks/types"]
};

export default nextConfig;
