"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import dynamic from "next/dynamic"
import { useTheme } from "@/components/providers/ThemeProvider"
import { Sidebar } from "@/components/layout/Sidebar"
import { MobileHeader } from "@/components/layout/MobileHeader"
import { BackgroundSection } from "@/components/sections/BackgroundSection"

// Lazy load below-fold sections for better initial load performance
const ExperienceSection = dynamic(
  () => import("@/components/sections/ExperienceSection").then((mod) => mod.ExperienceSection),
  { loading: () => <SectionSkeleton /> }
)
const EducationSection = dynamic(
  () => import("@/components/sections/EducationSection").then((mod) => mod.EducationSection),
  { loading: () => <SectionSkeleton /> }
)
const SkillsSection = dynamic(
  () => import("@/components/sections/SkillsSection").then((mod) => mod.SkillsSection),
  { loading: () => <SectionSkeleton /> }
)
const PublicationsSection = dynamic(
  () => import("@/components/sections/PublicationsSection").then((mod) => mod.PublicationsSection),
  { loading: () => <SectionSkeleton /> }
)
const TeachingSection = dynamic(
  () => import("@/components/sections/TeachingSection").then((mod) => mod.TeachingSection),
  { loading: () => <SectionSkeleton /> }
)
const TalksSection = dynamic(
  () => import("@/components/sections/TalksSection").then((mod) => mod.TalksSection),
  { loading: () => <SectionSkeleton /> }
)
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then((mod) => mod.ContactSection),
  { loading: () => <SectionSkeleton /> }
)

// Loading skeleton for sections
const SectionSkeleton = () => (
  <div className="mb-12 sm:mb-16 xl:mb-20 animate-pulse">
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8" />
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 space-y-4">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
    </div>
  </div>
)

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("Background")
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})
  const { isDarkMode } = useTheme()

  const handleSectionClick = useCallback((section: string) => {
    setActiveSection(section)
  }, [])

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Intersection Observer for section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            const sectionName = sectionId
              .replace("-section", "")
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
            setActiveSection(
              sectionName === "Talks And Travels" ? "Talks and travels" : sectionName
            )
          }
        })
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    )

    // Get all section elements and observe them
    const sectionIds = [
      "background-section",
      "experience-section",
      "education-section",
      "skills-section",
      "publications-section",
      "teaching-section",
      "talks-and-travels-section",
      "contact-section",
    ]

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        sectionsRef.current[id] = element
        observer.observe(element)
      }
    })

    return () => {
      Object.values(sectionsRef.current).forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "dark bg-gray-900" : "bg-gray-50/50"
      } transition-colors duration-300 flex flex-col`}
    >
      {/* Mobile Header */}
      <MobileHeader
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      {/* Desktop Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      {/* Main Content */}
      <main
        id="main-content"
        className="md:ml-72 p-4 sm:p-6 md:p-12 max-w-5xl xl:max-w-6xl mx-auto pt-20 sm:pt-24 md:pt-12 flex-grow"
        role="main"
      >
        <BackgroundSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <PublicationsSection />
        <TeachingSection />
        <TalksSection />
        <ContactSection />
      </main>
    </div>
  )
}
