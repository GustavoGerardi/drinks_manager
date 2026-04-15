import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/sales",
  transpilePackages: ["@drinks/ui", "@drinks/types"]
};

export default nextConfig;
