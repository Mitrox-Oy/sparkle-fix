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
      {/* Filters + Before & After box */}
      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-8 items-stretch">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value === "dealerships" ? "dealership" : (f.value as "all" | "private"))}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f.value || (f.value === "dealerships" && filter === "dealership")
                  ? "bg-[#f1d37b] text-black"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}

          {/* Before & After projects box */}
          {beforeAfterProjects.length > 0 && (
            <Link
              href="/before-after"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left hover:bg-white/10 transition-all"
            >
              <div className="flex -space-x-2">
                {beforeAfterProjects[0].beforeImages.slice(0, 1).concat(beforeAfterProjects[0].afterImages.slice(0, 1)).map((src, idx) => (
                  <div
                    key={`preview-${idx}`}
                    className="relative w-10 h-10 rounded-lg overflow-hidden border border-black/40 bg-black/40"
                  >
                    <img src={src} alt="Before & After preview" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">{t.beforeAfter.label}</span>
                <span className="text-xs text-gray-400">{t.beforeAfter.helper}</span>
              </div>
            </Link>
          )}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5"
          >
            <img
              src={image.src || publicUrl("placeholder.svg")}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-6 h-6 text-white" />
              </div>
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
