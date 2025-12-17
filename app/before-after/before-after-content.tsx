"use client"

import { useState } from "react"
import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { beforeAfterProjects } from "@/lib/before-after-projects"
import { X, ZoomIn } from "lucide-react"
import { publicUrl } from "@/lib/utils"

export function BeforeAfterContent() {
  const { t, locale } = useLocale()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-b from-black via-black to-gray-950">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.beforeAfterPage.title}</h1>
          <p className="text-xl text-gray-400">{t.beforeAfterPage.subtitle}</p>
        </div>
      </Section>

      {/* Before & After Projects */}
      <Section className="bg-gray-950">
        <div className="space-y-10">
          {beforeAfterProjects.map((project) => (
            <div
              key={project.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 flex flex-col gap-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-1">
                    {locale === "fi" ? project.titleFi : project.titleEn}
                  </h2>
                  {(locale === "fi" ? project.descriptionFi : project.descriptionEn) && (
                    <p className="text-sm text-gray-400 max-w-2xl">
                      {locale === "fi" ? project.descriptionFi : project.descriptionEn}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Before */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 text-red-300 text-xs font-medium px-3 py-1">
                    <span>{locale === "fi" ? "Ennen" : "Before"}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.beforeImages.map((src, idx) => (
                      <button
                        key={`before-${project.slug}-${idx}`}
                        type="button"
                        onClick={() => setSelectedImage(src)}
                        className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5"
                      >
                        <img
                          src={src || publicUrl("placeholder.svg")}
                          alt={`Before ${idx + 1}`}
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
                </div>

                {/* After */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-medium px-3 py-1">
                    <span>{locale === "fi" ? "Jälkeen" : "After"}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.afterImages.map((src, idx) => (
                      <button
                        key={`after-${project.slug}-${idx}`}
                        type="button"
                        onClick={() => setSelectedImage(src)}
                        className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5"
                      >
                        <img
                          src={src || publicUrl("placeholder.svg")}
                          alt={`After ${idx + 1}`}
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

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
            src={selectedImage || publicUrl("placeholder.svg")}
            alt="Before & After image"
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

