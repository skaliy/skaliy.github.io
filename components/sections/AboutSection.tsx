import { profile } from "@/data"

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
    </section>
  )
}
