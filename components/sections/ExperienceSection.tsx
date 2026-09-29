import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { experienceData, JobDetail } from "@/data"

const linkClass =
  "inline-flex items-center gap-1.5 text-sm text-accent dark:text-nord8 underline underline-offset-2 hover:no-underline min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8 rounded-sm"

const TimelineItem = ({ job }: { job: JobDetail }) => {
  const isCurrent = job.period.includes("Present")

  return (
    <li className="group relative pl-8 pb-8 last:pb-0">
      {/* Timeline rail and marker */}
      <span
        aria-hidden="true"
        className="absolute left-[5px] top-3 bottom-0 w-px bg-nord4 dark:bg-nord2 group-last:hidden"
      />
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 ${
          isCurrent
            ? "border-accent bg-accent dark:border-nord8 dark:bg-nord8"
            : "border-nord3 bg-nord6 dark:border-nord4 dark:bg-nord1"
        }`}
      />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4">
        <h3 className="text-lg font-semibold text-nord1 dark:text-nord6">{job.title}</h3>
        <p className="text-sm tabular-nums whitespace-nowrap text-nord3 dark:text-nord4">
          {isCurrent ? (
            <span className="font-medium text-accent dark:text-nord8">{job.period}</span>
          ) : (
            job.period
          )}
        </p>
      </div>
      <p className="text-sm text-nord3 dark:text-nord4">{job.company}</p>

      {job.description && (
        <p className="mt-2 text-nord2 dark:text-nord4 text-sm sm:text-base leading-relaxed">
          {job.description}
        </p>
      )}

      {job.details && (
        <ul className="mt-2 space-y-1.5 text-nord2 dark:text-nord4 text-sm sm:text-base leading-relaxed">
          {job.details.map((detail) => (
            <li key={detail} className="flex items-start">
              <span className="mr-3 mt-2.5 h-1 w-1 rounded-full bg-nord3 dark:bg-nord4 flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {(job.detailsLink || job.link) && (
        <div className="flex flex-wrap gap-x-6">
          {job.detailsLink && (
            <a href={job.detailsLink.url} className={linkClass} target="_blank" rel="noopener noreferrer">
              {job.detailsLink.text}
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
          {job.link && (
            <a href={job.link} className={linkClass} target="_blank" rel="noopener noreferrer">
              {job.link.replace(/^https?:\/\/|\/$/g, "")}
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </li>
  )
}

export const ExperienceSection = () => {
  const mainRoles = experienceData.filter((job) => !job.early)
  const earlyRoles = experienceData.filter((job) => job.early)

  return (
    <section id="experience-section" className="mb-16 sm:mb-20 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader>Experience</SectionHeader>
      <Card>
        <ol>
          {mainRoles.map((job, index) => (
            <TimelineItem key={`${job.company}-${job.title}-${index}`} job={job} />
          ))}
        </ol>

        {earlyRoles.length > 0 && (
          <div className="mt-8 pt-6 border-t border-nord4 dark:border-nord2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-nord3 dark:text-nord4 mb-3">
              Earlier roles
            </h3>
            <ul className="divide-y divide-nord4/70 dark:divide-nord2/70">
              {earlyRoles.map((job, index) => (
                <li
                  key={`${job.company}-${index}`}
                  className="py-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4 text-sm"
                >
                  <span className="text-nord2 dark:text-nord4">
                    <span className="font-medium text-nord1 dark:text-nord6">{job.title}</span>
                    {", "}
                    {job.company}
                  </span>
                  <span className="tabular-nums whitespace-nowrap text-nord3 dark:text-nord4">{job.period}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </section>
  )
}
