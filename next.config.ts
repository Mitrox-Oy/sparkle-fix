import type { NextConfig } from "next";

// Get basePath from environment variable or default to empty
// For project repos (username/repo-name), set: GITHUB_REPOSITORY_NAME=/repo-name
// For user/organization repos (username.github.io), leave empty
const basePath = process.env.GITHUB_REPOSITORY_NAME || "";

const nextConfig: NextConfig = {
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: false, // Netlify Next.js plugin handles image optimization
  },
  // Expose basePath to client-side via environment variable
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
