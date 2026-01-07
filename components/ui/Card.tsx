"use client"

import { ReactNode } from "react"

type CardVariant = "default" | "experience" | "education" | "publication" | "talk" | "contact"

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
  variant?: CardVariant
}

const variantStyles: Record<CardVariant, string> = {
  default: "",
  experience: "border-l-[3px] border-l-blue-500 dark:border-l-blue-400",
  education: "border-l-[3px] border-l-emerald-500 dark:border-l-emerald-400",
  publication: "border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700",
  talk: "border-l-[3px] border-l-amber-500 dark:border-l-amber-400",
  contact: "",
}

export const Card = ({
  children,
  className = "",
  hoverable = false,
  variant = "default",
}: CardProps) => {
  const hoverClass = hoverable
    ? "hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
    : ""

  return (
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8
        shadow-sm border border-gray-100 dark:border-gray-700
        ${variantStyles[variant]} ${hoverClass} transition-colors ${className}
      `}
    >
      {children}
    </div>
  )
}
