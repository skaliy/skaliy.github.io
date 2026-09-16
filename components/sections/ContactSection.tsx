import { Mail, Phone, MapPin } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"

export const ContactSection = () => {
  return (
    <section id="contact-section" className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader>Contact information</SectionHeader>
      <Card>
        <ul className="flex flex-col gap-6">
          <li className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-nord3 dark:text-nord4 flex-shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-wide text-nord3 dark:text-nord4">Email</p>
              <a
                href="mailto:skaliyugarasan@hotmail.com"
                className="text-accent dark:text-nord8 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
              >
                skaliyugarasan@hotmail.com
              </a>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-nord3 dark:text-nord4 flex-shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-wide text-nord3 dark:text-nord4">Phone</p>
              <a
                href="tel:+4793614229"
                className="text-accent dark:text-nord8 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8"
              >
                +47 936 14 229
              </a>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-nord3 dark:text-nord4 flex-shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-wide text-nord3 dark:text-nord4">Location</p>
              <span className="text-nord2 dark:text-nord4">Bergen, Norway</span>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-nord3 dark:text-nord4">Languages</p>
              <span className="text-nord2 dark:text-nord4">Norwegian (Bokmål), Tamil, English</span>
            </div>
          </li>
        </ul>
      </Card>
    </section>
  )
}
