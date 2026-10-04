import { profile } from "@/data"

export const AboutSection = () => {
  return (
    <section
      id="about-section"
      aria-labelledby="about-heading"
      className="mb-16 sm:mb-20 scroll-mt-20 sm:scroll-mt-24"
    >
      <p className="text-sm font-medium text-nord3 dark:text-nord4 mb-3">
        {profile.tagline} · {profile.location}
      </p>
      <h1
        id="about-heading"
        className="font-serif text-4xl sm:text-5xl xl:text-6xl font-normal leading-[1.08] tracking-tight text-nord0 dark:text-nord6 mb-6 text-balance"
      >
        {profile.name}
      </h1>

      <div className="space-y-4 text-base sm:text-lg leading-relaxed text-nord2 dark:text-nord4 max-w-2xl">
        <p>
          I teach and research AI and software engineering at the Western Norway
          University of Applied Sciences (HVL) in Bergen.
        </p>
        <p>
          At the Mohn Medical Imaging and Visualization Centre (MMIV), I work
          part-time with radiologists on medical image analysis and reporting.
          My research focuses on deep learning and how to make better use of
          limited data and clinical expertise.
        </p>
        <p>
          I also build research software, including fastMONAI, an open-source
          library for medical image analysis.
        </p>
      </div>
    </section>
  )
}
