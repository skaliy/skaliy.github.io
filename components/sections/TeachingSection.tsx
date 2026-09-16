import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"

export const TeachingSection = () => {
  return (
    <section id="teaching-section" className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader>Teaching</SectionHeader>
      <Card>
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-nord1 dark:text-nord6 mb-2">Courses</h3>
            <p className="text-nord2 dark:text-nord4">
              DAT158: Machine learning engineering and advanced algorithms (Fall 2021)
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-nord1 dark:text-nord6 mb-2">Supervision</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-medium text-nord1 dark:text-nord6">
                  MSc Projects (co-supervision)
                </h4>
                <p className="text-nord2 dark:text-nord4">
                  2020-2022: A workflow-integrated brain tumor segmentation system based on fastai and MONAI
                </p>
              </div>
              <div>
                <h4 className="text-base font-medium text-nord1 dark:text-nord6">
                  BSc Projects (co-supervision)
                </h4>
                <ul className="space-y-2 text-nord2 dark:text-nord4 pl-4">
                  <li className="flex items-start">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-nord3 dark:bg-nord4 flex-shrink-0" />
                    <span>2024: Large language models and fish health</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-nord3 dark:bg-nord4 flex-shrink-0" />
                    <span>2025: Deep learning for quality control of fish fillets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}
