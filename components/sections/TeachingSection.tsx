import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"

interface TeachingItem {
  period: string
  text: string
}

const groups: { heading: string; items: TeachingItem[] }[] = [
  {
    heading: "Courses",
    items: [
      { period: "Fall 2021", text: "DAT158: Machine learning engineering and advanced algorithms" },
    ],
  },
  {
    heading: "MSc project co-supervision",
    items: [
      { period: "2020 – 2022", text: "A workflow-integrated brain tumor segmentation system based on fastai and MONAI" },
    ],
  },
  {
    heading: "BSc project co-supervision",
    items: [
      { period: "2025", text: "Deep learning for quality control of fish fillets" },
      { period: "2024", text: "Large language models and fish health" },
    ],
  },
]

export const TeachingSection = () => {
  return (
    <section id="teaching-section" className="mb-16 sm:mb-20 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader>Teaching and supervision</SectionHeader>
      <Card>
        <div className="space-y-6">
          {groups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-nord3 dark:text-nord4 mb-2">
                {group.heading}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item.text}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4 text-nord2 dark:text-nord4"
                  >
                    <span>{item.text}</span>
                    <span className="text-sm tabular-nums whitespace-nowrap text-nord3 dark:text-nord4">
                      {item.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}
