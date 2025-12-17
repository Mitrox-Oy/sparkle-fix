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
  { id: 42, src: publicUrl("IMG-20251214-WA0031.jpg"), alt: "Gallery image 42", category: "private" },
  { id: 10, src: publicUrl("IMG-20240417-WA0040.jpg"), alt: "Gallery image 10", category: "private" },
  { id: 30, src: publicUrl("IMG-20251214-WA0014.jpg"), alt: "Gallery image 30", category: "private" },
  { id: 59, src: publicUrl("IMG-20251214-WA0064.jpg"), alt: "Gallery image 59", category: "private" },
  { id: 11, src: publicUrl("IMG-20240710-WA0033.jpg"), alt: "Gallery image 11", category: "private" },
  { id: 6, src: publicUrl("IMG-20240330-WA0012.jpg"), alt: "Gallery image 6", category: "private" },
  { id: 7, src: publicUrl("IMG-20240330-WA0019.jpg"), alt: "Gallery image 7", category: "private" },
  { id: 8, src: publicUrl("IMG-20240330-WA0020.jpg"), alt: "Gallery image 8", category: "private" },
  { id: 9, src: publicUrl("IMG-20240330-WA0026.jpg"), alt: "Gallery image 9", category: "private" },
  { id: 12, src: publicUrl("IMG-20240710-WA0038.jpg"), alt: "Gallery image 12", category: "private" },
  { id: 13, src: publicUrl("IMG-20240710-WA0039.jpg"), alt: "Gallery image 13", category: "private" },
  { id: 14, src: publicUrl("IMG-20240710-WA0040.jpg"), alt: "Gallery image 14", category: "private" },
  { id: 15, src: publicUrl("IMG-20240816-WA0018.jpg"), alt: "Gallery image 15", category: "private" },
  { id: 16, src: publicUrl("IMG-20240816-WA0020.jpg"), alt: "Gallery image 16", category: "private" },
  { id: 17, src: publicUrl("IMG-20240823-WA0007.jpg"), alt: "Gallery image 17", category: "private" },
  { id: 18, src: publicUrl("IMG-20240823-WA0008.jpg"), alt: "Gallery image 18", category: "private" },
  { id: 19, src: publicUrl("IMG-20240823-WA0010.jpg"), alt: "Gallery image 19", category: "private" },
  { id: 20, src: publicUrl("IMG-20240823-WA0011.jpg"), alt: "Gallery image 20", category: "private" },
  { id: 21, src: publicUrl("IMG-20241006-WA0003.jpg"), alt: "Gallery image 21", category: "private" },
  { id: 22, src: publicUrl("IMG-20241006-WA0004.jpg"), alt: "Gallery image 22", category: "private" },
  { id: 23, src: publicUrl("IMG-20241006-WA0005.jpg"), alt: "Gallery image 23", category: "private" },
  { id: 24, src: publicUrl("IMG-20241006-WA0007.jpg"), alt: "Gallery image 24", category: "private" },
  { id: 25, src: publicUrl("IMG-20251214-WA0009.jpg"), alt: "Gallery image 25", category: "private" },
  { id: 26, src: publicUrl("IMG-20251214-WA0010.jpg"), alt: "Gallery image 26", category: "private" },
  { id: 27, src: publicUrl("IMG-20251214-WA0011.jpg"), alt: "Gallery image 27", category: "private" },
  { id: 28, src: publicUrl("IMG-20251214-WA0012.jpg"), alt: "Gallery image 28", category: "private" },
  { id: 29, src: publicUrl("IMG-20251214-WA0013.jpg"), alt: "Gallery image 29", category: "private" },
  { id: 31, src: publicUrl("IMG-20251214-WA0015.jpg"), alt: "Gallery image 31", category: "private" },
  { id: 33, src: publicUrl("IMG-20251214-WA0021.jpg"), alt: "Gallery image 33", category: "private" },
  { id: 36, src: publicUrl("IMG-20251214-WA0024.jpg"), alt: "Gallery image 36", category: "private" },
  { id: 37, src: publicUrl("IMG-20251214-WA0025.jpg"), alt: "Gallery image 37", category: "private" },
  { id: 38, src: publicUrl("IMG-20251214-WA0026.jpg"), alt: "Gallery image 38", category: "private" },
  { id: 41, src: publicUrl("IMG-20251214-WA0030.jpg"), alt: "Gallery image 41", category: "private" },
  { id: 43, src: publicUrl("IMG-20251214-WA0032.jpg"), alt: "Gallery image 43", category: "private" },
  { id: 44, src: publicUrl("IMG-20251214-WA0034.jpg"), alt: "Gallery image 44", category: "private" },
  { id: 45, src: publicUrl("IMG-20251214-WA0035.jpg"), alt: "Gallery image 45", category: "private" },
  { id: 46, src: publicUrl("IMG-20251214-WA0036.jpg"), alt: "Gallery image 46", category: "private" },
  { id: 47, src: publicUrl("IMG-20251214-WA0037.jpg"), alt: "Gallery image 47", category: "private" },
  { id: 48, src: publicUrl("IMG-20251214-WA0038.jpg"), alt: "Gallery image 48", category: "private" },
  { id: 51, src: publicUrl("IMG-20251214-WA0041.jpg"), alt: "Gallery image 51", category: "private" },
  { id: 52, src: publicUrl("IMG-20251214-WA0042.jpg"), alt: "Gallery image 52", category: "private" },
  { id: 53, src: publicUrl("IMG-20251214-WA0043.jpg"), alt: "Gallery image 53", category: "private" },
  { id: 55, src: publicUrl("IMG-20251214-WA0051.jpg"), alt: "Gallery image 55", category: "private" },
  { id: 56, src: publicUrl("IMG-20251214-WA0052.jpg"), alt: "Gallery image 56", category: "private" },
  { id: 57, src: publicUrl("IMG-20251214-WA0053.jpg"), alt: "Gallery image 57", category: "private" },
  { id: 58, src: publicUrl("IMG-20251214-WA0062.jpg"), alt: "Gallery image 58", category: "private" },
  { id: 63, src: publicUrl("IMG-20251214-WA0068.jpg"), alt: "Gallery image 63", category: "private" },
  { id: 64, src: publicUrl("IMG-20251214-WA0069.jpg"), alt: "Gallery image 64", category: "private" },
  { id: 65, src: publicUrl("IMG-20251214-WA0070.jpg"), alt: "Gallery image 65", category: "private" },
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
