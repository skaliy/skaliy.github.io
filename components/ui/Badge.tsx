import { ReactNode } from "react"

type BadgeColor = "blue" | "green" | "red" | "yellow" | "purple"

interface BadgeProps {
  children: ReactNode
  color?: BadgeColor
}

const colorStyles: Record<BadgeColor, string> = {
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
  yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
  purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
}

// Subtle patterns for colorblind accessibility
const patternStyles: Record<BadgeColor, string> = {
  blue: "before:content-[''] before:absolute before:inset-0 before:opacity-[0.08] before:bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] before:bg-[length:4px_4px]",
  green: "before:content-[''] before:absolute before:inset-0 before:opacity-[0.08] before:bg-[linear-gradient(45deg,currentColor_25%,transparent_25%,transparent_75%,currentColor_75%)] before:bg-[length:4px_4px]",
  red: "before:content-[''] before:absolute before:inset-0 before:opacity-[0.08] before:bg-[linear-gradient(90deg,currentColor_1px,transparent_1px)] before:bg-[length:4px_4px]",
  yellow: "before:content-[''] before:absolute before:inset-0 before:opacity-[0.08] before:bg-[linear-gradient(0deg,currentColor_1px,transparent_1px)] before:bg-[length:4px_4px]",
  purple: "before:content-[''] before:absolute before:inset-0 before:opacity-[0.08] before:bg-[linear-gradient(45deg,currentColor_1px,transparent_1px),linear-gradient(-45deg,currentColor_1px,transparent_1px)] before:bg-[length:4px_4px]",
}

export const Badge = ({ children, color = "blue" }: BadgeProps) => {
  return (
    <span
      className={`
        relative text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full
        ${colorStyles[color]} ${patternStyles[color]}
        transition-colors overflow-hidden
      `}
    >
      <span className="relative z-10">{children}</span>
    </span>
  )
}
