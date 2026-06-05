"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { beforeAfterProjects } from "@/lib/before-after-projects"
import { publicUrl } from "@/lib/utils"

export function BeforeAfterContent() {
  const { locale, t } = useLocale()
  const [beforeLabel, afterLabel] = t.beforeAfter.label.split(" & ")

  return (
    <div>
      <PageHeader
        eyebrow={`— ${t.beforeAfter.label}`}
        title={t.beforeAfterPage.title}
        subtitle={t.beforeAfterPage.subtitle}
      />

      <Section>
        {beforeAfterProjects.length > 0 ? (
          <div className="border-t border-white/[0.08]">
            {beforeAfterProjects.map((project, index) => {
              const title = locale === "fi" ? project.titleFi : project.titleEn
              return (
                <div key={index} className="py-12 md:py-16 border-b border-white/[0.08]">
                  <div className="flex items-baseline gap-4 mb-8">
                    <span className="font-mono text-xs tracking-[0.25em] text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl leading-[1.05] tracking-[-0.01em] text-white">
                      {title}
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <p className="eyebrow mb-3">{beforeLabel}</p>
                      {project.beforeImages.map((img, i) => (
                        <img
                          key={i}
                          src={publicUrl(img)}
                          alt={`${beforeLabel} - ${title}`}
                          className="w-full h-72 object-cover mb-3"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="eyebrow mb-3 text-[#f1d37b]">{afterLabel}</p>
                      {project.afterImages.map((img, i) => (
                        <img
                          key={i}
                          src={publicUrl(img)}
                          alt={`${afterLabel} - ${title}`}
                          className="w-full h-72 object-cover mb-3"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="py-16 border-t border-white/[0.08]">
            <p className="font-display text-3xl text-white/50">
              {locale === "fi" ? "Tulossa pian…" : "Coming soon…"}
            </p>
          </div>
        )}
      </Section>
    </div>
  )
}
