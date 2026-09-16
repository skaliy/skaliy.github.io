"use client"

import { useState } from "react"
import { MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { talksData } from "@/data"

export const TalksSection = () => {
  const [showAll, setShowAll] = useState(false)

  const sortedTalks = [...talksData].sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year
    }
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
      return a.date.localeCompare(b.date)
    }
    return dateB.getTime() - dateA.getTime()
  })

  const displayedTalks = showAll ? sortedTalks : sortedTalks.slice(0, 4)
  const hiddenCount = sortedTalks.length - 4

  return (
    <section id="talks-and-travels-section" className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader>Talks and travels</SectionHeader>
      <div className="space-y-6">
        <div id="talks-list" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedTalks.map((talk, index) => (
            <Card key={index} className="flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-nord1 dark:text-nord6 mb-2 line-clamp-2">
                  {talk.title}
                </h3>
                <p className="text-sm text-nord2 dark:text-nord4 flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-nord3 dark:text-nord4" />
                  <span>
                    {talk.locationLink && talk.locationLinkLabel ? (
                      <>
                        <a
                          href={talk.locationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent dark:text-nord8 underline underline-offset-2"
                        >
                          {talk.locationLinkLabel}
                        </a>
                        {talk.location ? `, ${talk.location}` : ""}
                      </>
                    ) : (
                      talk.location
                    )}
                  </span>
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-nord4 dark:border-nord2">
                <p className="text-sm text-nord3 dark:text-nord4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-nord3 dark:text-nord4" />
                  {talk.date}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {sortedTalks.length > 4 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-accent dark:text-nord8 hover:underline inline-flex items-center min-h-11 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
              aria-expanded={showAll}
              aria-controls="talks-list"
            >
              {showAll ? (
                <>
                  Show less <ChevronUp className="ml-1 w-4 h-4" />
                </>
              ) : (
                <>
                  Show {hiddenCount} more talks <ChevronDown className="ml-1 w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
