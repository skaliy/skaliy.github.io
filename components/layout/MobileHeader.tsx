"use client"

import { useEffect, useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/providers/ThemeProvider"
import { SocialIcons } from "@/components/ui/SocialIcons"
import { navItems } from "./nav"

interface MobileHeaderProps {
  activeSection: string
  onSectionClick: (section: string) => void
}

export const MobileHeader = ({ activeSection, onSectionClick }: MobileHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const handleNavClick = (sectionName: string) => {
    setIsMobileMenuOpen(false)
    onSectionClick(sectionName)
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 backdrop-blur-sm p-3 z-50 bg-nord5/95 dark:bg-nord0/95 border-b border-nord4 dark:border-nord2 text-nord1 dark:text-nord6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <picture>
              <source srcSet="/skaliy.webp" type="image/webp" />
              <img
                src="/skaliy.png"
                alt="Satheshkumar Kaliyugarasan"
                className="rounded-full w-8 h-8 object-cover ring-1 ring-nord4 dark:ring-nord2"
                width={32}
                height={32}
              />
            </picture>
            <h1 className="text-lg font-semibold truncate">Satheshkumar K.</h1>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-nord2 dark:text-nord4 hover:text-accent dark:hover:text-nord8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-nord2 dark:text-nord4 hover:text-accent dark:hover:text-nord8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        {...(!isMobileMenuOpen && { inert: true })}
        className={`md:hidden fixed inset-0 bg-nord6 dark:bg-nord1 text-nord1 dark:text-nord6 z-40 pt-14 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="p-4 flex-grow overflow-y-auto" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={activeSection === item.name ? "page" : undefined}
              className={`flex min-h-11 items-center px-4 py-4 mb-2 rounded-lg text-lg transition-colors
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8 ${
                  activeSection === item.name
                    ? "text-accent dark:text-nord8 font-medium"
                    : "text-nord2 dark:text-nord4 hover:text-accent dark:hover:text-nord8"
                }`}
              onClick={() => handleNavClick(item.name)}
            >
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto p-6 border-t border-nord4 dark:border-nord2">
          <SocialIcons size="large" />
        </div>
      </div>
    </>
  )
}
