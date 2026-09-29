import { ChevronDown, ChevronUp } from "lucide-react"

interface ShowMoreButtonProps {
  expanded: boolean
  onToggle: () => void
  controls: string
  moreLabel: string
  lessLabel?: string
}

export const ShowMoreButton = ({
  expanded,
  onToggle,
  controls,
  moreLabel,
  lessLabel = "Show less",
}: ShowMoreButtonProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      aria-controls={controls}
      className="inline-flex items-center gap-1 min-h-11 px-4 rounded-md border border-nord4 dark:border-nord2 text-sm font-medium
        text-accent dark:text-nord8 hover:bg-nord6 dark:hover:bg-nord1 transition-colors
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
    >
      {expanded ? lessLabel : moreLabel}
      {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
    </button>
  )
}
