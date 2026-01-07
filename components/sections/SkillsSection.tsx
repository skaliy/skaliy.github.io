import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { skillsData } from "@/data"

export const SkillsSection = () => {
  return (
    <section id="skills-section" className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader variant="skills">Skills</SectionHeader>
      <Card>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <Badge key={index} color="blue">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}
