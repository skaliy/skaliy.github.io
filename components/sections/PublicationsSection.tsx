"use client"

import { useState } from "react"
import { Github, Award } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ShowMoreButton } from "@/components/ui/ShowMoreButton"
import { publicationsData } from "@/data"

const INITIAL_COUNT = 4
const SELF = "S. Kaliyugarasan"

// Highlight my own name in the author list
const Authors = ({ authors }: { authors: string }) => {
  const [before, after] = authors.split(SELF)
  if (after === undefined) return <>{authors}</>
  return (
    <>
      {before}
      <span className="font-semibold text-nord1 dark:text-nord6">{SELF}</span>
      {after}
    </>
  )
}

export const PublicationsSection = () => {
  const [showAll, setShowAll] = useState(false)

  const displayedPublications = showAll ? publicationsData : publicationsData.slice(0, INITIAL_COUNT)
  const hiddenCount = publicationsData.length - INITIAL_COUNT

  return (
    <section id="publications-section" className="mb-16 sm:mb-20 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader description="Selected peer-reviewed publications">Publications</SectionHeader>
      <Card>
        <ol id="publications-list" className="divide-y divide-nord4 dark:divide-nord2 -my-4 sm:-my-6">
          {displayedPublications.map((pub) => (
            <li key={pub.title} className="flex gap-4 sm:gap-6 py-4 sm:py-6">
              <span className="w-12 flex-shrink-0 pt-0.5 text-sm font-medium tabular-nums text-nord3 dark:text-nord4">
                {pub.year}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold leading-snug text-nord1 dark:text-nord6">
                  {pub.title}
                </h3>
                <p className="mt-1 text-sm text-nord2 dark:text-nord4">
                  <Authors authors={pub.authors} />
                </p>
                <p className="text-sm italic text-nord3 dark:text-nord4">{pub.venue}</p>

                {pub.note && (
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-nord2 dark:text-nord5">
                    <Award className="w-4 h-4 text-accent dark:text-nord8" aria-hidden="true" />
                    {pub.note}
                  </p>
                )}

                {pub.link && (
                  <div>
                    <a
                      href={pub.link}
                      className="inline-flex items-center gap-1.5 text-sm text-accent dark:text-nord8 underline underline-offset-2 hover:no-underline min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8 rounded-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                      {pub.linkText ?? "Link"}
                      <span className="sr-only"> for {pub.title} (opens in new tab)</span>
                    </a>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Card>

      {hiddenCount > 0 && (
        <div className="flex justify-center mt-6">
          <ShowMoreButton
            expanded={showAll}
            onToggle={() => setShowAll(!showAll)}
            controls="publications-list"
            moreLabel={`Show all ${publicationsData.length} publications`}
          />
        </div>
      )}
    </section>
  )
}
