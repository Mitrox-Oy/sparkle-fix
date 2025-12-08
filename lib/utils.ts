import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get basePath for static assets (works in both dev and production)
// This reads from the environment variable set during build
export function getBasePath(): string {
  // Use the environment variable set by Next.js config
  // This works at both build time and runtime
  if (typeof window !== "undefined") {
    // Client-side: try to get from Next.js data first
    const nextData = (window as any).__NEXT_DATA__;
    if (nextData?.assetPrefix) return nextData.assetPrefix;
    
    // Fallback: extract from current path (for runtime detection)
    const path = window.location.pathname;
    const match = path.match(/^\/([^/]+)/);
    if (match && match[1] !== "" && !path.startsWith("/_next") && match[1] !== "docs") {
      return `/${match[1]}`;
    }
  }
  // Server-side or build-time: use environment variable
  // NEXT_PUBLIC_ variables are available at build time
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

// Helper to get public asset URL with basePath
export function publicUrl(path: string): string {
  const basePath = getBasePath();
  // Remove leading slash from path if present, then combine
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}
