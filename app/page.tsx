"use client"

import { useEffect, useState, useCallback } from "react"
import dynamic from "next/dynamic"
import { Sidebar } from "@/components/layout/Sidebar"
import { MobileHeader } from "@/components/layout/MobileHeader"
import { navItems } from "@/components/layout/nav"
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
    <div className="h-8 bg-nord4 dark:bg-nord2 rounded-md w-1/4 mb-8" />
    <div className="rounded-md border border-nord4 dark:border-nord2 p-6 space-y-4">
      <div className="h-4 bg-nord4 dark:bg-nord2 rounded-md w-3/4" />
      <div className="h-4 bg-nord4 dark:bg-nord2 rounded-md w-1/2" />
    </div>
  </div>
)

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("Background")

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
            setActiveSection(
              (prev) =>
                navItems.find((n) => n.id === entry.target.id)?.name ?? prev
            )
          }
        })
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      observer.disconnect()
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <div className="min-h-screen bg-nord5 dark:bg-nord0 transition-colors duration-300 flex flex-col">
      {/* Mobile Header */}
      <MobileHeader
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      {/* Desktop: Centered container with sidebar + content */}
      <div className="md:flex md:max-w-[1800px] md:mx-auto md:w-full flex-grow">
        {/* Desktop Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
        />

        {/* Main Content */}
        <main
          id="main-content"
          className="p-4 sm:p-6 md:p-12 max-w-5xl pt-20 sm:pt-24 md:pt-12 md:flex-1"
          role="main"
        >
          <BackgroundSection />
          <ExperienceSection />
          <EducationSection />
          <PublicationsSection />
          <TeachingSection />
          <TalksSection />
          <ContactSection />

          <footer className="border-t border-nord4 dark:border-nord2 py-8 text-sm text-nord3 dark:text-nord4 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Satheshkumar Kaliyugarasan</span>
            <span>Bergen, Norway</span>
          </footer>
        </main>
      </div>
    </div>
  )
}
