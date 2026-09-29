import { Navigation } from "@/components/layout/Navigation"
import {
  AboutSection,
  ExperienceSection,
  EducationSection,
  PublicationsSection,
  TeachingSection,
  TalksSection,
  ContactSection,
} from "@/components/sections"
import { profile } from "@/data"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-nord5 dark:bg-nord0 transition-colors duration-300 flex flex-col">
      <div className="md:flex md:max-w-[1600px] md:mx-auto md:w-full flex-grow">
        <Navigation />

        <main
          id="main-content"
          tabIndex={-1}
          className="w-full px-4 sm:px-6 md:px-10 lg:px-16 pt-24 md:pt-16 pb-8 md:flex-1 focus:outline-none"
        >
          <div className="max-w-4xl mx-auto">
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <PublicationsSection />
            <TeachingSection />
            <TalksSection />
            <ContactSection />

            <footer className="border-t border-nord4 dark:border-nord2 py-8 text-sm text-nord3 dark:text-nord4 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
              <span>© {new Date().getFullYear()} {profile.name}</span>
              <a
                href="#main-content"
                className="self-start sm:self-auto hover:text-accent dark:hover:text-nord8 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8 rounded-sm"
              >
                Back to top
              </a>
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}
