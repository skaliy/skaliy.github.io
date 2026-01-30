"use client"

import { useState } from "react"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { experienceData, JobDetail } from "@/data"

const ExperienceCard = ({ job }: { job: JobDetail }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const shouldShowButton =
    (job.details && job.details.length > 1) ||
    (job.description && job.description.length > 100)

  return (
    <Card hoverable variant="experience">
      <div className="relative">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
          {job.title}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 mb-2">
          {job.company} | {job.period}
        </p>

        {job.details ? (
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {(isExpanded || !shouldShowButton ? job.details : job.details.slice(0, 1)).map(
              (detail: string, idx: number) => (
                <li
                  key={idx}
                  className={`flex items-start transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? "opacity-100 translate-y-0"
                      : idx === 0
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isExpanded ? `${idx * 100}ms` : "0ms",
                  }}
                >
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: detail }} />
                </li>
              )
            )}
          </ul>
        ) : job.description ? (
          <p
            className={`text-gray-700 dark:text-gray-300 ${
              isExpanded ? "" : "line-clamp-2"
            }`}
          >
            {job.description}
          </p>
        ) : null}

        {job.link && (
          <div className="mt-3">
            <a
              href={job.link}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800
                dark:text-blue-400 dark:hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg px-3 py-2 sm:px-2 sm:py-1
                transition-colors min-h-[44px] sm:min-h-auto underline underline-offset-2 decoration-1 hover:decoration-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {shouldShowButton && (
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300
                flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                focus-visible:ring-offset-2 rounded-lg px-3 py-2 sm:px-2 sm:py-1 transition-colors
                min-h-[44px] sm:min-h-auto"
              aria-expanded={isExpanded}
              aria-controls={`job-details-${job.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {isExpanded ? (
                <>
                  Show less <ChevronUp className="ml-1 w-4 h-4" />
                </>
              ) : (
                <>
                  Show more <ChevronDown className="ml-1 w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </Card>
  )
}

export const ExperienceSection = () => {
  return (
    <section id="experience-section" className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader variant="experience">Experience</SectionHeader>
      <div className="space-y-4 sm:space-y-6">
        {experienceData.map((job, index) => (
          <ExperienceCard key={index} job={job} />
        ))}
      </div>
    </section>
  )
}
