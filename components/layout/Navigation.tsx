"use client"

import { useEffect, useState, useCallback } from "react"
import { Sidebar } from "./Sidebar"
import { MobileHeader } from "./MobileHeader"
import { navItems } from "./nav"

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState(navItems[0].name)

  const handleSectionClick = useCallback((section: string) => {
    setActiveSection(section)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(
              (prev) => navItems.find((n) => n.id === entry.target.id)?.name ?? prev
            )
          }
        })
      },
      { rootMargin: "-20% 0px -80% 0px" }
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    // Short final sections never reach the observer band, so mark the
    // last item active once the page is scrolled to the bottom
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) setActiveSection(navItems[navItems.length - 1].name)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <MobileHeader activeSection={activeSection} onSectionClick={handleSectionClick} />
      <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
    </>
  )
}
