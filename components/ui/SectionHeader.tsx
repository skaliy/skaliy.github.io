"use client"

import { ReactNode } from "react"
import { useTheme } from "@/components/providers/ThemeProvider"

type SectionVariant = "default" | "experience" | "education" | "skills" | "publications" | "teaching" | "talks" | "contact"

interface SectionHeaderProps {
  children: ReactNode
  variant?: SectionVariant
}

const gradientColors: Record<SectionVariant, string> = {
  default: "from-blue-500/50 dark:from-blue-400/50",
  experience: "from-blue-500/50 dark:from-blue-400/50",
  education: "from-emerald-500/50 dark:from-emerald-400/50",
  skills: "from-blue-500/50 dark:from-blue-400/50",
  publications: "from-purple-500/50 dark:from-purple-400/50",
  teaching: "from-teal-500/50 dark:from-teal-400/50",
  talks: "from-amber-500/50 dark:from-amber-400/50",
  contact: "from-blue-500/50 dark:from-blue-400/50",
}

const hoverGradientColors: Record<SectionVariant, string> = {
  default: "group-hover:from-blue-500/80 dark:group-hover:from-blue-400/80",
  experience: "group-hover:from-blue-500/80 dark:group-hover:from-blue-400/80",
  education: "group-hover:from-emerald-500/80 dark:group-hover:from-emerald-400/80",
  skills: "group-hover:from-blue-500/80 dark:group-hover:from-blue-400/80",
  publications: "group-hover:from-purple-500/80 dark:group-hover:from-purple-400/80",
  teaching: "group-hover:from-teal-500/80 dark:group-hover:from-teal-400/80",
  talks: "group-hover:from-amber-500/80 dark:group-hover:from-amber-400/80",
  contact: "group-hover:from-blue-500/80 dark:group-hover:from-blue-400/80",
}

export const SectionHeader = ({ children, variant = "default" }: SectionHeaderProps) => {
  const { isDarkMode } = useTheme()

  return (
    <div className="flex items-center gap-3 mb-8 group">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 transition-colors">
        {children}
      </h2>
      <div
        className={`
          h-px flex-1 bg-gradient-to-r ${gradientColors[variant]} to-transparent
          ${hoverGradientColors[variant]} transition-all
        `}
      />
    </div>
  )
}
