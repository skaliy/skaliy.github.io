"use client"

import { useState } from "react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ShowMoreButton } from "@/components/ui/ShowMoreButton"
import { talksData, Talk } from "@/data"

const INITIAL_COUNT = 6

// talksData is kept in reverse chronological order
const groupByYear = (talks: Talk[]) =>
  talks.reduce<{ year: number; talks: Talk[] }[]>((groups, talk) => {
    const last = groups[groups.length - 1]
    if (last?.year === talk.year) last.talks.push(talk)
    else groups.push({ year: talk.year, talks: [talk] })
    return groups
  }, [])

export const TalksSection = () => {
  const [showAll, setShowAll] = useState(false)

  const displayedTalks = showAll ? talksData : talksData.slice(0, INITIAL_COUNT)
  const hiddenCount = talksData.length - INITIAL_COUNT

  return (
    <section id="talks-section" className="mb-16 sm:mb-20 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader>Talks</SectionHeader>
      <Card>
        <div id="talks-list" className="space-y-8">
          {groupByYear(displayedTalks).map(({ year, talks }) => (
            <div key={year} className="sm:flex sm:gap-6">
              <h3 className="w-12 flex-shrink-0 mb-2 sm:mb-0 text-sm font-semibold tabular-nums text-accent dark:text-nord8">
                {year}
              </h3>
              <ul className="flex-1 min-w-0 space-y-4">
                {talks.map((talk) => (
                  <li key={`${talk.title}-${talk.date}`}>
                    <p className="font-medium leading-snug text-nord1 dark:text-nord6">{talk.title}</p>
                    <p className="mt-0.5 text-sm text-nord3 dark:text-nord4">
                      {talk.locationLink && talk.locationLinkLabel ? (
                        <>
                          <a
                            href={talk.locationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent dark:text-nord8 underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8 rounded-sm"
                          >
                            {talk.locationLinkLabel}
                          </a>
                          {talk.location ? `, ${talk.location}` : ""}
                        </>
                      ) : (
                        talk.location
                      )}
                      <span aria-hidden="true"> · </span>
                      <span className="sr-only">, </span>
                      <span className="whitespace-nowrap">{talk.date}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {hiddenCount > 0 && (
        <div className="flex justify-center mt-6">
          <ShowMoreButton
            expanded={showAll}
            onToggle={() => setShowAll(!showAll)}
            controls="talks-list"
            moreLabel={`Show all ${talksData.length} talks`}
          />
        </div>
      )}
    </section>
  )
}
