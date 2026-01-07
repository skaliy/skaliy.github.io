import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { educationData, EducationDetail } from "@/data"

const EducationCard = ({ education }: { education: EducationDetail }) => {
  return (
    <Card hoverable variant="education">
      <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
        {education.degree}
      </h3>
      <p className="text-emerald-600 dark:text-emerald-400 mb-3">
        {education.school} | {education.period}
      </p>
      {education.thesis && (
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-medium">Thesis:</span> {education.thesis}
        </p>
      )}
    </Card>
  )
}

export const EducationSection = () => {
  return (
    <section id="education-section" className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader variant="education">Education</SectionHeader>
      <div className="space-y-4 sm:space-y-6">
        {educationData.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </section>
  )
}
