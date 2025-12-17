import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get basePath for static assets (works in both dev and production)
// We rely solely on the environment variable configured in next.config.ts
// so that server and client always agree (avoids hydration mismatches).
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || ""
}

// Helper to get public asset URL with basePath
export function publicUrl(path: string): string {
  const basePath = getBasePath()
  // Remove leading slash from path if present, then combine
  const cleanPath = path.startsWith("/") ? path.slice(1) : path
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`
}
