"use client"

import { useState } from "react"
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { publicationsData } from "@/data"

export const PublicationsSection = () => {
  const [showAll, setShowAll] = useState(false)

  const displayedPublications = showAll ? publicationsData : publicationsData.slice(0, 4)
  const hiddenCount = publicationsData.length - 4

  return (
    <section id="publications-section" className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader>Publications</SectionHeader>
      <div className="space-y-6">
        <div id="publications-list" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {displayedPublications.map((pub, index) => (
            <Card key={index} className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-nord1 dark:text-nord6 mb-2">
                {pub.title}
              </h3>
              <p className="text-sm text-nord2 dark:text-nord4 mb-1">{pub.authors}</p>
              <p className="text-sm text-nord3 dark:text-nord4 italic mb-3">{pub.publication}</p>

              {pub.tags && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {pub.tags.map((tag, idx) => (
                    <Badge key={idx}>{tag}</Badge>
                  ))}
                </div>
              )}

              {pub.link && (
                <a
                  href={pub.link}
                  className="inline-flex items-center gap-2 text-sm text-accent dark:text-nord8 underline underline-offset-2 min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  <span>{pub.linkText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </Card>
          ))}
        </div>

        {publicationsData.length > 4 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-accent dark:text-nord8 hover:underline inline-flex items-center min-h-11 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
              aria-expanded={showAll}
              aria-controls="publications-list"
            >
              {showAll ? (
                <>
                  Show less <ChevronUp className="ml-1 w-4 h-4" />
                </>
              ) : (
                <>
                  Show {hiddenCount} more publications <ChevronDown className="ml-1 w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
