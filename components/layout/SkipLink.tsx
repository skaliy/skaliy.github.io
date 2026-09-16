"use client"

export const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100]
        focus:flex focus:min-h-11 focus:items-center focus:px-4 focus:rounded-lg focus:bg-accent focus:text-nord6
        focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-nord8"
    >
      Skip to main content
    </a>
  )
}
