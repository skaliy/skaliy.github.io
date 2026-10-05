import { profile } from "@/data"

export const AboutSection = () => {
  return (
    <section
      id="about-section"
      aria-labelledby="about-heading"
      className="mb-16 sm:mb-20 scroll-mt-20 sm:scroll-mt-24"
    >
      <h1
        id="about-heading"
        className="font-serif text-4xl sm:text-5xl xl:text-6xl font-normal leading-[1.08] tracking-tight text-nord0 dark:text-nord6 mb-6 text-balance"
      >
        {profile.name}
      </h1>

      <div className="space-y-4 text-base sm:text-lg leading-relaxed text-nord2 dark:text-nord4 max-w-2xl">
        <p>
          I am an associate professor at the Western Norway University of Applied
          Sciences (HVL) in Bergen, where I teach and research AI and software
          engineering. Alongside this, I work part-time at the Mohn Medical Imaging
          and Visualization Centre (MMIV), collaborating with radiologists on
          medical image analysis and reporting.
        </p>
      </div>
    </section>
  )
}
