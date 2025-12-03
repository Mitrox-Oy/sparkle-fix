import type { Metadata } from "next"
import { GalleryContent } from "./gallery-content"

export const metadata: Metadata = {
  title: "Galleria",
  description:
    "Sparkle Fix Oy:n työnäytteitä. Katso esimerkkejä autopesusta ja viimeistelystä. See examples of our car wash and detailing work.",
}

export default function GalleryPage() {
  return <GalleryContent />
}
