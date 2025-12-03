import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  dark?: boolean
  id?: string
  title?: string
  subtitle?: string
  titleClassName?: string
  actions?: ReactNode
}

export function Section({
  children,
  className,
  dark = true,
  id,
  title,
  subtitle,
  titleClassName,
  actions,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", dark ? "bg-black text-white" : "bg-gray-50 text-gray-900", className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle || actions) && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              {title && (
                <h2
                  className={cn(
                    "text-3xl md:text-4xl font-bold mb-4",
                    dark ? "text-white" : "text-gray-900",
                    titleClassName,
                  )}
                >
                  {title}
                </h2>
              )}
              {subtitle && <p className={cn("text-lg", dark ? "text-gray-400" : "text-gray-600")}>{subtitle}</p>}
            </div>
            {actions && <div className="shrink-0">{actions}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
