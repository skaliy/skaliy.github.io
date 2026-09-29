export interface JobDetail {
  title: string
  company: string
  period: string
  details?: string[]
  description?: string
  technologies?: string[]
  link?: string
  detailsLink?: { text: string; url: string };
  /** Shown under "Earlier roles" instead of the main timeline */
  early?: boolean
}

export interface EducationDetail {
  degree: string
  school: string
  period: string
  thesis?: string
}

export interface Publication {
  title: string
  authors: string
  venue: string
  year: number
  note?: string
  link?: string
  linkText?: string
  tags?: string[]
}

export interface Talk {
  title: string
  location: string
  date: string
  year: number
  category?: string
  locationLinkLabel?: string
  locationLink?: string
}
