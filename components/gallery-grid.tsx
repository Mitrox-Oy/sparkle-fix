"use client"

import Link from "next/link"
import { useState } from "react"
import { useLocale } from "@/lib/locale-context"
import { X, ZoomIn } from "lucide-react"
import { publicUrl } from "@/lib/utils"
import { beforeAfterProjects } from "@/lib/before-after-projects"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: "dealership" | "private" | "all"
}

const getGalleryImages = (): GalleryImage[] => [
  { id: 1, src: publicUrl("IMG-20240217-WA0006.jpg"), alt: "Gallery image 1", category: "private" },
  { id: 2, src: publicUrl("IMG-20240417-WA0040.jpg"), alt: "Gallery image 2", category: "private" },
  { id: 3, src: publicUrl("bmw-blue-front.jpg"), alt: "Gallery image 3", category: "private" },
  { id: 4, src: publicUrl("IMG-20251214-WA0018.jpg"), alt: "Gallery image 4", category: "private" },
  { id: 5, src: publicUrl("IMG-20240710-WA0038.jpg"), alt: "Gallery image 5", category: "private" },
  { id: 6, src: publicUrl("IMG-20251214-WA0033.jpg"), alt: "Gallery image 6", category: "private" },
  { id: 7, src: publicUrl("IMG-20241006-WA0005.jpg"), alt: "Gallery image 7", category: "private" },
  { id: 8, src: publicUrl("IMG-20251214-WA0031.jpg"), alt: "Gallery image 8", category: "private" },
  { id: 9, src: publicUrl("IMG-20251214-WA0037.jpg"), alt: "Gallery image 9", category: "private" },
  { id: 10, src: publicUrl("IMG-20251214-WA0038.jpg"), alt: "Gallery image 10", category: "private" },
  { id: 11, src: publicUrl("IMG-20251214-WA0052.jpg"), alt: "Gallery image 11", category: "private" },
  { id: 12, src: publicUrl("IMG-20251214-WA0053.jpg"), alt: "Gallery image 12", category: "private" },
  { id: 13, src: publicUrl("ford-white.png"), alt: "Gallery image 13", category: "private" },
  { id: 14, src: publicUrl("blue-bmw.png"), alt: "Gallery image 14", category: "private" },
  { id: 15, src: publicUrl("mercedez-grey.png"), alt: "Gallery image 15", category: "private" },
  { id: 16, src: publicUrl("toyota-grey.png"), alt: "Gallery image 16", category: "private" },
  { id: 17, src: publicUrl("white-skoda.png"), alt: "Gallery image 17", category: "private" },
]

interface GalleryGridProps {
  showFilters?: boolean
  limit?: number
}

export function GalleryGrid({ showFilters = true, limit }: GalleryGridProps) {
  const { t } = useLocale()
  const [filter, setFilter] = useState<"all" | "dealership" | "private">("all")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filters = [
    { value: "all", label: t.gallery.filters.all },
    { value: "dealerships", label: t.gallery.filters.dealerships },
    { value: "private", label: t.gallery.filters.private },
  ] as const

  const galleryImages = getGalleryImages()
  const filteredImages = galleryImages.filter((img) => filter === "all" || img.category === filter)

  const displayImages = limit ? filteredImages.slice(0, limit) : filteredImages

  return (
    <>
      {/* Filters + Before & After link */}
      {showFilters && (
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 items-center border-b border-white/[0.08] pb-6">
          {filters.map((f) => {
            const active = filter === f.value || (f.value === "dealerships" && filter === "dealership")
            return (
              <button
                key={f.value}
                onClick={() => setFilter(f.value === "dealerships" ? "dealership" : (f.value as "all" | "private"))}
                className={`text-xs uppercase tracking-[0.18em] transition-colors ${
                  active ? "text-[#f1d37b]" : "text-white/50 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            )
          })}

          {beforeAfterProjects.length > 0 && (
            <Link
              href="/before-after"
              className="ml-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors"
            >
              {t.beforeAfter.label} →
            </Link>
          )}
        </div>
      )}

      {/* Grid — dense, hairline gaps, no rounding */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-1.5">
        {displayImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="group relative aspect-square overflow-hidden bg-white/5"
          >
            <img
              src={image.src || publicUrl("placeholder.svg")}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedImage.src || publicUrl("placeholder.svg")}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
