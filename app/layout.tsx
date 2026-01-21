import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sparkle Fix Oy",
  description: "Autopesu ja automeikkaus Espoossa - Car detailing in Espoo, Finland",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "any" }],
    apple: "/favicon.png",
  },
}

// Root layout must render children for nested routes to work
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
