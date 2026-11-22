import type { NextConfig } from "next";

// basePath is empty in local dev, and set to "/<repo>" for GitHub Pages project sites.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static HTML export → deployable on GitHub Pages (no server/runtime needed).
  output: "export",
  images: {
    // next/image optimizer needs a server; disable for static export.
    unoptimized: true,
  },
  basePath: basePath || undefined,
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
