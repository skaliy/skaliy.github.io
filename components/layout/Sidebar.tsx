"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/providers/ThemeProvider"
import { SocialIcons } from "@/components/ui/SocialIcons"
import { navItems } from "./nav"

interface SidebarProps {
  activeSection: string
  onSectionClick: (section: string) => void
}

export const Sidebar = ({ activeSection, onSectionClick }: SidebarProps) => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className="sticky top-0 w-72 h-screen bg-nord6 dark:bg-nord1 border-r border-nord4 dark:border-nord2 text-nord1 dark:text-nord6 p-8 hidden md:flex md:flex-col shrink-0">
      <div className="mb-12">
        <div className="relative w-40 h-40 mx-auto mb-6">
          <picture>
            <source srcSet="/skaliy.webp" type="image/webp" />
            <img
              src="/skaliy.png"
              alt="Satheshkumar Kaliyugarasan - Software engineer and data scientist specializing in deep learning for medical image analysis"
              className="rounded-full w-full h-full object-cover ring-1 ring-nord4 dark:ring-nord2"
              width={160}
              height={160}
            />
          </picture>
        </div>
        <h1 className="text-2xl font-bold mb-2 text-center">
          Satheshkumar Kaliyugarasan
        </h1>
        <p className="text-nord3 dark:text-nord4 text-center">
          Software engineer & data scientist
        </p>
      </div>

      <nav className="space-y-1 flex-grow" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            aria-current={activeSection === item.name ? "page" : undefined}
            className={`flex min-h-11 items-center px-3 py-2 rounded-md text-sm transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8 ${
                activeSection === item.name
                  ? "text-accent dark:text-nord8 font-medium"
                  : "text-nord2 dark:text-nord4 hover:text-accent dark:hover:text-nord8"
              }`}
            onClick={() => onSectionClick(item.name)}
          >
            {item.name}
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-6 flex flex-col items-center gap-4">
        <button
          onClick={toggleTheme}
          className="flex min-h-11 w-full items-center justify-center gap-2 px-3 py-2 rounded-md text-sm
            text-nord2 dark:text-nord4 hover:text-accent dark:hover:text-nord8 transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
        <SocialIcons />
      </div>
    </div>
  )
}
