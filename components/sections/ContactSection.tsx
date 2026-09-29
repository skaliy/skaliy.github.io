import { Mail, Phone, MapPin, Languages, Linkedin, Github, type LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { profile } from "@/data"

interface ContactItem {
  icon: LucideIcon
  label: string
  value: string
  href?: string
  external?: boolean
}

const items: ContactItem[] = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: Linkedin, label: "LinkedIn", value: "Satheshkumar Kaliyugarasan", href: profile.linkedin, external: true },
  { icon: Github, label: "GitHub", value: "github.com/skaliy", href: profile.github, external: true },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Languages, label: "Languages", value: profile.languages },
]

export const ContactSection = () => {
  return (
    <section id="contact-section" className="mb-16 sm:mb-20 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader>Contact</SectionHeader>
      <Card>
        <p className="text-nord2 dark:text-nord4 leading-relaxed max-w-2xl">
          I am always happy to hear about research collaborations, student projects, speaking
          invitations and applied AI work. Email is the best way to reach me.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mt-6">
          {items.map((item) => (
            <li key={item.label} className="flex items-start gap-3 min-w-0">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-nord5 dark:bg-nord2 text-nord3 dark:text-nord4">
                <item.icon className="w-4 h-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-nord3 dark:text-nord4">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="break-words text-accent dark:text-nord8 underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8 rounded-sm"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-nord1 dark:text-nord5">{item.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  )
}
