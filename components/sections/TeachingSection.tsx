import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"

export const TeachingSection = () => {
  return (
    <section id="teaching-section" className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader variant="teaching">Teaching</SectionHeader>
      <Card>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          Teaching Experience
        </h3>
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Courses
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              DAT158: Machine learning engineering and advanced algorithms (Fall 2021)
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Supervision
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-base font-medium text-gray-800 dark:text-white">
                  MSc Projects (co-supervision)
                </h5>
                <p className="text-gray-700 dark:text-gray-300">
                  2020-2022: A workflow-integrated brain tumor segmentation system based on fastai and MONAI
                </p>
              </div>
              <div>
                <h5 className="text-base font-medium text-gray-800 dark:text-white">
                  BSc Projects (co-supervision)
                </h5>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-4">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400 flex-shrink-0" />
                    <span>2024: Large language models and fish health</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400 flex-shrink-0" />
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
