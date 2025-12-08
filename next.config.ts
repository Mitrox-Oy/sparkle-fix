import type { NextConfig } from "next";

// Get basePath from environment variable or default to empty
// For project repos (username/repo-name), set: GITHUB_REPOSITORY_NAME=/repo-name
// For user/organization repos (username.github.io), leave empty
const basePath = process.env.GITHUB_REPOSITORY_NAME || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
