"use client"

import { useState } from "react"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { experienceData, JobDetail } from "@/data"

const ExperienceCard = ({ job, index }: { job: JobDetail; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const collapsible =
    (job.details && job.details.length > 2) ||
    (job.description && job.description.length > 200)

  return (
    <Card>
      <h3 className="text-lg font-semibold text-nord1 dark:text-nord6">{job.title}</h3>
      <p className="text-sm text-nord3 dark:text-nord4 mb-2">
        {job.company} · {job.period}
      </p>

      {job.details ? (
        <ul
          id={`job-details-${index}`}
          className="space-y-2 text-nord2 dark:text-nord4 text-sm sm:text-base"
        >
          {(isExpanded || !collapsible ? job.details : job.details.slice(0, 2)).map(
            (detail: string, idx: number) => (
              <li key={idx} className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-nord3 dark:bg-nord4 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            )
          )}
        </ul>
      ) : job.description ? (
        <p
          id={`job-details-${index}`}
          className={`text-nord2 dark:text-nord4 text-sm sm:text-base ${
            isExpanded ? "" : "line-clamp-2"
          }`}
        >
          {job.description}
        </p>
      ) : null}

      {job.detailsLink && (
        <div className="mt-3">
          <a
            href={job.detailsLink.url}
            className="inline-flex items-center gap-2 text-sm text-accent dark:text-nord8 underline underline-offset-2 min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{job.detailsLink.text}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}

      {job.link && (
        <div className="mt-3">
          <a
            href={job.link}
            className="inline-flex items-center gap-2 text-sm text-accent dark:text-nord8 underline underline-offset-2 min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}

      {collapsible && (
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-accent dark:text-nord8 hover:underline inline-flex items-center min-h-11 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
            aria-expanded={isExpanded}
            aria-controls={`job-details-${index}`}
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
    </Card>
  )
}

export const ExperienceSection = () => {
  return (
    <section id="experience-section" className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader>Experience</SectionHeader>
      <div className="space-y-4 sm:space-y-6">
        {experienceData.map((job, index) => (
          <ExperienceCard key={index} job={job} index={index} />
        ))}
      </div>
    </section>
  )
}
