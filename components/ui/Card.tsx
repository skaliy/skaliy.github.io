import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`py-1 ${className}`}>
      {children}
    </div>
  )
}
