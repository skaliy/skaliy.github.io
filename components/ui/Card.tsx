import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`bg-nord6 dark:bg-nord1 border border-nord4 dark:border-nord2 rounded-lg p-4 sm:p-6 md:p-8 ${className}`}>
      {children}
    </div>
  )
}
