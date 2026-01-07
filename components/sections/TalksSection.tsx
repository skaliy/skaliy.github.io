"use client"

import { useState } from "react"
import { MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { talksData, Talk } from "@/data"

export const TalksSection = () => {
  const [showAll, setShowAll] = useState(false)

  // Sort talks by date (newest first)
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
      <SectionHeader variant="talks">Talks and travels</SectionHeader>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedTalks.map((talk, index) => (
            <Card key={index} hoverable variant="talk" className="flex flex-col h-full">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                    {talk.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-1 flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                    <span>
                      {talk.locationLink && talk.locationLinkLabel ? (
                        <>
                          <a
                            href={talk.locationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 underline underline-offset-2 decoration-1 hover:decoration-2"
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
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-amber-600 dark:text-amber-400 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                    {talk.date}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {sortedTalks.length > 4 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 text-white bg-amber-600 hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-800
                flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500
                focus-visible:ring-offset-2 rounded-full transition-colors shadow-md font-medium"
            >
              {showAll ? (
                <>
                  Show less <ChevronUp className="ml-2 w-5 h-5" />
                </>
              ) : (
                <>
                  Show {hiddenCount} more talks <ChevronDown className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
