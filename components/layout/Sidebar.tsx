"use client"

import {
  Briefcase,
  GraduationCap,
  Wrench,
  Mail,
  MapPin,
  Moon,
  Sun,
  User,
  FileText,
  Users,
} from "lucide-react"
import { useTheme } from "@/components/providers/ThemeProvider"
import { SocialIcons } from "@/components/ui/SocialIcons"

interface NavItem {
  name: string
  icon: React.ElementType
  href: string
}

const navItems: NavItem[] = [
  { name: "Background", icon: User, href: "#background-section" },
  { name: "Experience", icon: Briefcase, href: "#experience-section" },
  { name: "Education", icon: GraduationCap, href: "#education-section" },
  { name: "Skills", icon: Wrench, href: "#skills-section" },
  { name: "Publications", icon: FileText, href: "#publications-section" },
  { name: "Teaching", icon: Users, href: "#teaching-section" },
  { name: "Talks and travels", icon: MapPin, href: "#talks-and-travels-section" },
  { name: "Contact", icon: Mail, href: "#contact-section" },
]

interface SidebarProps {
  activeSection: string
  onSectionClick: (section: string) => void
}

export const Sidebar = ({ activeSection, onSectionClick }: SidebarProps) => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className="fixed left-0 top-0 w-72 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 hidden md:flex md:flex-col">
      <div className="mb-12">
        <div className="relative w-40 h-40 mx-auto mb-6">
          <picture>
            <source srcSet="/skaliy.webp" type="image/webp" />
            <img
              src="/skaliy.png"
              alt="Satheshkumar Kaliyugarasan - Software engineer and data scientist specializing in deep learning for medical image analysis"
              className="rounded-full w-full h-full object-cover ring-4 ring-blue-500/20 transition-all"
              width={160}
              height={160}
            />
          </picture>
        </div>
        <h1 className="text-2xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
          Satheshkumar Kaliyugarasan
        </h1>
        <p className="text-blue-400 text-center font-medium">
          Software engineer & data scientist
        </p>
      </div>

      <nav className="space-y-1 flex-grow" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                activeSection === item.name
                  ? "text-white bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            onClick={() => onSectionClick(item.name)}
          >
            <item.icon className="w-4 h-4" />
            {item.name}
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-6 flex flex-col items-center gap-4">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm
            text-gray-300 hover:text-white hover:bg-white/10 transition-all
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
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

export { navItems }
