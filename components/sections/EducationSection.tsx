import { GraduationCap } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { educationData } from "@/data"

export const EducationSection = () => {
  return (
    <section id="education-section" className="mb-16 sm:mb-20 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader>Education</SectionHeader>
      <Card>
        <ul className="divide-y divide-nord4 dark:divide-nord2 -my-4 sm:-my-6">
          {educationData.map((edu) => (
            <li key={edu.degree} className="flex gap-4 py-4 sm:py-6">
              <GraduationCap
                aria-hidden="true"
                className="hidden sm:block w-5 h-5 mt-1 flex-shrink-0 text-nord3 dark:text-nord4"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4">
                  <h3 className="text-lg font-semibold text-nord1 dark:text-nord6">{edu.degree}</h3>
                  <p className="text-sm tabular-nums whitespace-nowrap text-nord3 dark:text-nord4">{edu.period}</p>
                </div>
                <p className="text-sm text-nord3 dark:text-nord4">{edu.school}</p>
                {edu.thesis && (
                  <p className="mt-2 text-sm sm:text-base text-nord2 dark:text-nord4">
                    <span className="font-medium text-nord1 dark:text-nord5">Thesis: </span>
                    <cite className="not-italic">{edu.thesis}</cite>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  )
}
