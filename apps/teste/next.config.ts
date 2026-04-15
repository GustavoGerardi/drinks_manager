import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/teste",
  transpilePackages: ["@drinks/ui", "@drinks/types"],
};

export default nextConfig;
