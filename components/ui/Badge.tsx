import { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
}

export const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-md bg-nord5 text-nord2 dark:bg-nord2 dark:text-nord5">
      {children}
    </span>
  )
}
