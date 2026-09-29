import { ArrowRight, Github, Linkedin } from "lucide-react"
import { profile } from "@/data"

const secondaryLinkClass =
  "inline-flex items-center gap-2 min-h-11 px-4 rounded-md border border-nord4 dark:border-nord2 text-sm font-medium text-nord1 dark:text-nord6 hover:border-accent hover:text-accent dark:hover:border-nord8 dark:hover:text-nord8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"

export const AboutSection = () => {
  return (
    <section
      id="about-section"
      aria-labelledby="about-heading"
      className="mb-16 sm:mb-20 scroll-mt-20 sm:scroll-mt-24"
    >
      <p className="text-sm font-medium text-nord3 dark:text-nord4 mb-3">
        Associate professor at HVL · Researcher at MMIV
      </p>
      <h1
        id="about-heading"
        className="text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-tight text-nord0 dark:text-nord6 mb-6 text-balance"
      >
        {profile.name}
      </h1>

      <div className="space-y-4 text-base sm:text-lg leading-relaxed text-nord2 dark:text-nord4 max-w-3xl">
        <p>
          I work at the intersection of applied AI research and software engineering, turning
          deep learning methods into practical tools for real-world problems.
        </p>
        <p>
          I am an associate professor at the Western Norway University of Applied Sciences
          (HVL), working with AI and software engineering, and a part-time researcher at the
          Mohn Medical Imaging and Visualization Centre (MMIV), where I develop AI solutions for
          medical imaging and reporting in close collaboration with radiologists.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-10">
        <a
          href="#contact-section"
          className="inline-flex items-center gap-2 min-h-11 px-5 rounded-md bg-accent text-white dark:bg-nord8 dark:text-nord0 text-sm font-semibold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
        >
          Get in touch
          <ArrowRight className="w-4 h-4" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={secondaryLinkClass}>
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={secondaryLinkClass}>
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>
    </section>
  )
}
