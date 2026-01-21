"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { beforeAfterProjects } from "@/lib/before-after-projects"
import { publicUrl } from "@/lib/utils"

export function BeforeAfterContent() {
  const { locale, t } = useLocale()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.beforeAfterPage.title}
          </h1>
          <p className="text-xl text-gray-400">{t.beforeAfterPage.subtitle}</p>
        </div>
      </Section>

      {/* Before & After Grid */}
      <Section className="bg-gray-950">
        {beforeAfterProjects.length > 0 ? (
          <div className="space-y-12">
            {beforeAfterProjects.map((project, index) => {
              const title = locale === "fi" ? project.titleFi : project.titleEn

              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                >
                  <h3 className="text-2xl font-semibold text-white p-6 pb-2">{title}</h3>
                  <div className="grid md:grid-cols-2 gap-4 p-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">
                        {t.beforeAfter.label.split(" & ")[0]}
                      </p>
                      {project.beforeImages.map((img, i) => (
                        <img
                          key={i}
                          src={publicUrl(img)}
                          alt={`Before - ${title}`}
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">
                        {t.beforeAfter.label.split(" & ")[1]}
                      </p>
                      {project.afterImages.map((img, i) => (
                        <img
                          key={i}
                          src={publicUrl(img)}
                          alt={`After - ${title}`}
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              {locale === "fi" ? "Tulossa pian..." : "Coming soon..."}
            </p>
          </div>
        )}
      </Section>
    </div>
  )
}
