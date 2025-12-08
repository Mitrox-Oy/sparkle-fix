"use client"

import { useState } from "react"
import { useLocale } from "@/lib/locale-context"
import { X, ZoomIn } from "lucide-react"
import { publicUrl } from "@/lib/utils"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: "dealership" | "private" | "all"
}

const getGalleryImages = (): GalleryImage[] => [
  { id: 1, src: publicUrl("luxury-car-detailing-before-and-after-polish.jpg"), alt: "Car detailing", category: "private" },
  { id: 2, src: publicUrl("professional-car-wash-interior-cleaning.jpg"), alt: "Interior cleaning", category: "private" },
  { id: 3, src: publicUrl("dealership-cars-being-washed-professional.jpg"), alt: "Dealership service", category: "dealership" },
  { id: 4, src: publicUrl("ceramic-coating-application-on-black-car.jpg"), alt: "Ceramic coating", category: "private" },
  { id: 5, src: publicUrl("car-showroom-clean-vehicles-for-sale.jpg"), alt: "Sales prep", category: "dealership" },
  { id: 6, src: publicUrl("car-paint-correction-polishing-machine.jpg"), alt: "Paint correction", category: "private" },
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
      {/* Filters */}
      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-8">
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
