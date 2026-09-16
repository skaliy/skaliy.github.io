import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { educationData, EducationDetail } from "@/data"

const EducationCard = ({ education }: { education: EducationDetail }) => {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-nord1 dark:text-nord6">{education.degree}</h3>
      <p className="text-sm text-nord3 dark:text-nord4 mb-3">
        {education.school} · {education.period}
      </p>
      {education.thesis && (
        <p className="text-nord2 dark:text-nord4">
          <span className="font-medium">Thesis:</span> {education.thesis}
        </p>
      )}
    </Card>
  )
}

export const EducationSection = () => {
  return (
    <section id="education-section" className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader>Education</SectionHeader>
      <div className="space-y-4 sm:space-y-6">
        {educationData.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </section>
  )
}
