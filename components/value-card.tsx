import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ValueCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export function ValueCard({ icon, title, description, className }: ValueCardProps) {
  return (
    <div
      className={cn(
        "group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#f1d37b]/30 transition-all duration-300",
        className,
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f1d37b]/20 to-[#e3c46a]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
