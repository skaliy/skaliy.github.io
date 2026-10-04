"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/providers/ThemeProvider"
import { SocialIcons } from "@/components/ui/SocialIcons"
import { profile } from "@/data"
import { navItems } from "./nav"

interface SidebarProps {
  activeSection: string
  onSectionClick: (section: string) => void
}

export const Sidebar = ({ activeSection, onSectionClick }: SidebarProps) => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <aside className="sticky top-0 w-72 h-screen overflow-y-auto bg-nord6 dark:bg-nord1 border-r border-nord4 dark:border-nord2 text-nord1 dark:text-nord6 px-6 py-8 hidden md:flex md:flex-col shrink-0">
      <div className="mb-10">
        <picture>
          <source srcSet="/skaliy.webp" type="image/webp" />
          <img
            src="/skaliy.png"
            alt={`Portrait of ${profile.name}`}
            className="mb-5 rounded-sm w-36 h-40 object-cover"
            width={144}
            height={160}
          />
        </picture>
        <p className="text-lg font-medium tracking-tight">{profile.name}</p>
        <p className="mt-1 text-sm text-nord3 dark:text-nord4">{profile.tagline}</p>
      </div>

      <nav className="flex-grow" aria-label="Main navigation">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.name
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative flex min-h-10 items-center pl-4 pr-3 py-2 rounded-md text-sm transition-colors
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8 ${
                      isActive
                        ? "bg-nord5 dark:bg-nord2/30 text-accent dark:text-nord8 font-semibold"
                        : "text-nord2 dark:text-nord4 hover:bg-nord5/70 dark:hover:bg-nord2/40 hover:text-nord0 dark:hover:text-nord6"
                    }`}
                  onClick={() => onSectionClick(item.name)}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-accent dark:bg-nord8"
                    />
                  )}
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-auto pt-6 flex flex-col items-center gap-3 border-t border-nord4 dark:border-nord2">
        <SocialIcons />
        <button
          type="button"
          onClick={toggleTheme}
          className="flex min-h-10 w-full items-center justify-center gap-2 px-3 py-2 rounded-md text-sm
            text-nord3 dark:text-nord4 hover:text-accent dark:hover:text-nord8 transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          <span>{isDarkMode ? "Light mode" : "Dark mode"}</span>
        </button>
      </div>
    </aside>
  )
}
