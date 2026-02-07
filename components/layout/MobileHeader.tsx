"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/providers/ThemeProvider"
import { SocialIcons } from "@/components/ui/SocialIcons"
import { navItems } from "./Sidebar"

interface MobileHeaderProps {
  activeSection: string
  onSectionClick: (section: string) => void
}

export const MobileHeader = ({ activeSection, onSectionClick }: MobileHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)
    // Scroll lock when menu opens
    document.body.style.overflow = newState ? "hidden" : ""
  }

  const handleNavClick = (sectionName: string) => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = ""
    onSectionClick(sectionName)
  }

  return (
    <>
      {/* Mobile Header */}
      <header className={`md:hidden fixed top-0 left-0 right-0 backdrop-blur-sm p-3 z-50 border-b ${
        isDarkMode
          ? "bg-gray-900/95 text-white border-gray-700/30"
          : "bg-white/95 text-gray-900 border-gray-200/50"
      }`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <picture>
              <source srcSet="/skaliy.webp" type="image/webp" />
              <img
                src="/skaliy.png"
                alt="Satheshkumar Kaliyugarasan"
                className="rounded-full w-8 h-8 object-cover ring-2 ring-blue-500/20"
                width={32}
                height={32}
              />
            </picture>
            <h1 className="text-lg font-semibold truncate">Satheshkumar K.</h1>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                isDarkMode
                  ? "text-white hover:bg-white/10 focus-visible:ring-white/50"
                  : "text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500"
              }`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`p-3 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 ${
                isDarkMode
                  ? "text-white hover:bg-white/10 focus-visible:ring-white/50"
                  : "text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 ${
          isDarkMode ? "bg-gray-900/98 text-white" : "bg-white/98 text-gray-900"
        } backdrop-blur-md z-40 pt-14 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="p-4 flex-grow overflow-y-auto" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-4 mb-2 rounded-xl transition-all
                focus-visible:outline-none focus-visible:ring-2 text-lg ${
                  isDarkMode
                    ? "text-gray-200 hover:text-white hover:bg-white/10 active:bg-white/20 focus-visible:ring-white/50"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-gray-500"
                }`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => handleNavClick(item.name)}
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              <item.icon className="w-6 h-6 flex-shrink-0" />
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </nav>
        <div
          className={`mt-auto p-6 border-t ${
            isDarkMode ? "border-gray-700/30" : "border-gray-200/50"
          }`}
        >
          <SocialIcons size="large" />
        </div>
      </div>
    </>
  )
}
