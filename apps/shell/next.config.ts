import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@drinks/ui", "@drinks/types"],
  async rewrites() {
    return [
      {
        source: "/catalog/:path*",
        destination: "http://localhost:3001/catalog/:path*",
      },
      {
        source: "/inventory/:path*",
        destination: "http://localhost:3002/inventory/:path*",
      },
      {
        source: "/sales/:path*",
        destination: "http://localhost:3003/sales/:path*",
      },
      {
        source: "/teste/:path*",
        destination: "http://localhost:3004/teste/:path*",
      },
    ];
  },
};

export default nextConfig;
