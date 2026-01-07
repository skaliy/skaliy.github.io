export interface JobDetail {
  title: string
  company: string
  period: string
  details?: string[]
  description?: string
  technologies?: string[]
  link?: string
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
  publication: string
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

export interface SocialLink {
  icon: React.ElementType
  href: string
  label: string
}
