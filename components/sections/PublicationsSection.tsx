"use client"

import { useState } from "react"
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { publicationsData, Publication } from "@/data"

export const PublicationsSection = () => {
  const [showAll, setShowAll] = useState(false)

  const displayedPublications = showAll ? publicationsData : publicationsData.slice(0, 4)
  const hiddenCount = publicationsData.length - 4

  return (
    <section id="publications-section" className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader variant="publications">Publications</SectionHeader>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          {displayedPublications.map((pub, index) => (
            <Card key={index} hoverable variant="publication">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2">
                {pub.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">{pub.authors}</p>
              <p className="text-purple-600 dark:text-purple-400 mb-3">{pub.publication}</p>

              {pub.tags && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {pub.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      color={idx % 3 === 0 ? "green" : idx % 3 === 1 ? "blue" : "purple"}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {pub.link && (
                <a
                  href={pub.link}
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700
                    dark:text-purple-400 dark:hover:text-purple-300 focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-purple-500 focus-visible:ring-offset-2 rounded-lg px-3 py-2 sm:px-2 sm:py-1
                    transition-colors min-h-[44px] sm:min-h-auto underline underline-offset-2 decoration-1 hover:decoration-2"
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
              className="px-8 py-3 text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800
                flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500
                focus-visible:ring-offset-2 rounded-full transition-colors shadow-md font-medium"
            >
              {showAll ? (
                <>
                  Show less <ChevronUp className="ml-2 w-5 h-5" />
                </>
              ) : (
                <>
                  Show {hiddenCount} more publications <ChevronDown className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
