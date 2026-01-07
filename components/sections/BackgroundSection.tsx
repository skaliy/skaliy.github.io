import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"

export const BackgroundSection = () => {
  return (
    <section id="background-section" className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader>Background</SectionHeader>
      <Card>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          PhD from Western Norway University of Applied Sciences. I work at the intersection of applied AI research and software engineering, building practical tools for real-world challenges. Currently a postdoctoral fellow at MMIV, where I develop AI solutions for medical imaging and reporting in close collaboration with radiologists.
        </p>
      </Card>
    </section>
  )
}
