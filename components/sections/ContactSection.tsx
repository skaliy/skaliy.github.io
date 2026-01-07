import { Mail, Phone, MapPin } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { SectionHeader } from "@/components/ui/SectionHeader"

export const ContactSection = () => {
  return (
    <section id="contact-section" className="mb-12 sm:mb-16 scroll-mt-20 sm:scroll-mt-24">
      <SectionHeader variant="contact">Contact information</SectionHeader>
      <Card variant="contact">
        <div className="flex flex-col gap-6">
          <div className="flex items-center group">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-5 shadow-sm transition-colors">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <a
                href="mailto:skaliyugarasan@hotmail.com"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg underline underline-offset-2 decoration-1 hover:decoration-2"
              >
                skaliyugarasan@hotmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center group">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-5 shadow-sm transition-colors">
              <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
              <a
                href="tel:+4793614229"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg underline underline-offset-2 decoration-1 hover:decoration-2"
              >
                +47 936 14 229
              </a>
            </div>
          </div>

          <div className="flex items-center group">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-5 shadow-sm transition-colors">
              <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
              <span className="text-gray-800 dark:text-gray-200 text-lg">
                Bergen, Norway
              </span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}
