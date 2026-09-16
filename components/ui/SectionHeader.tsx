import { ReactNode } from "react"

interface SectionHeaderProps {
  children: ReactNode
}

export const SectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-nord1 dark:text-nord6 pb-3 border-b border-nord4 dark:border-nord2">
        {children}
      </h2>
    </div>
  )
}
