import { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
}

export const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border border-nord4 bg-nord6 text-nord2 dark:border-nord3 dark:bg-nord1 dark:text-nord5">
      {children}
    </span>
  )
}
