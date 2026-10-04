import { ReactNode } from "react"

interface SectionHeaderProps {
  children: ReactNode
  description?: ReactNode
}

export const SectionHeader = ({ children, description }: SectionHeaderProps) => {
  return (
    <div className="mb-6 sm:mb-8 pb-3 border-b border-nord4 dark:border-nord2">
      <h2 className="font-serif text-3xl font-normal tracking-tight text-nord1 dark:text-nord6">
        {children}
      </h2>
      {description && (
        <p className="mt-1 text-sm text-nord3 dark:text-nord4">{description}</p>
      )}
    </div>
  )
}
