"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ExternalLinkIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  WrenchIcon,
  BookOpenIcon,
  MapPinIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PhoneIcon,
  LocateIcon as LocationIcon,
  Moon,
  Sun,
  Search,
  Calendar,
  Filter
} from "lucide-react"

// ===== Type definitions for better type safety =====
interface SocialLink {
  icon: React.ElementType
  href: string
  label: string
}

interface JobDetail {
  title: string
  company: string
  period: string
  details?: string[]
  description?: string
  technologies?: string[]
  link?: string
}

interface EducationDetail {
  degree: string
  school: string
  period: string
  thesis?: string
}

interface Publication {
  title: string
  authors: string
  publication: string
  link?: string
  linkText?: string
  tags?: string[]
}

interface Talk {
  title: string
  location: string
  date: string
  year: number
  category?: string
}

// ===== Theme Context for Dark Mode =====
import { createContext, useContext } from "react"

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
})

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for user preference in localStorage or system preference
    const savedTheme = localStorage.getItem("theme")
    
    // Only enable dark mode if explicitly saved as dark
    if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      // Ensure light mode by default
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => {
      const newMode = !prev
      if (newMode) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
      return newMode
    })
  }, [])

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

const useTheme = () => useContext(ThemeContext)

// ===== Reusable Components =====
const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useTheme()
  
  return (
    <div className="flex items-center gap-3 mb-8 group">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 transition-colors">{children}</h2>
      <div className={`h-px flex-1 ${isDarkMode 
        ? "bg-gradient-to-r from-blue-500/50 to-transparent" 
        : "bg-gradient-to-r from-blue-500/50 to-transparent"
      } transition-all group-hover:from-blue-500/80`}></div>
    </div>
  )
}

const SocialIcons = ({ size = "small" }: { size?: "small" | "large" }) => {
  const socialLinks: SocialLink[] = [
    { icon: GithubIcon, href: "#", label: "GitHub" },
    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  ]
  
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          aria-label={social.label}
          className={`text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1
            dark:text-gray-300 dark:hover:text-blue-300 dark:focus:ring-blue-400`}
        >
          <social.icon className={size === "large" ? "w-6 h-6" : "w-5 h-5"} />
        </a>
      ))}
    </div>
  )
}

const Card = ({ 
  children, 
  className = "",
  hoverable = false
}: { 
  children: React.ReactNode 
  className?: string
  hoverable?: boolean
}) => {
  const hoverClass = hoverable ? "hover:shadow-md transform hover:-translate-y-1 transition-all duration-300" : ""
  
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 
      dark:border-gray-700 ${hoverClass} transition-colors ${className}`}>
      {children}
    </div>
  )
}

const Badge = ({ children, color = "blue" }: { children: React.ReactNode; color?: string }) => {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
  }
  
  return (
    <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${colorMap[color]} transition-colors`}>
      {children}
    </span>
  )
}

// ===== Component-Specific Code =====
const ExperienceCard = ({ job }: { job: JobDetail }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Check if we have enough content to warrant showing the "Show More" button
  const shouldShowButton = (job.details && job.details.length > 1) || 
    (job.description && job.description.length > 150)
  
  return (
    <Card hoverable>
      <div className="relative">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white transition-colors">{job.title}</h3>
        <p className="text-blue-600 dark:text-blue-400 mb-2 transition-colors">
          {job.company} | {job.period}
        </p>
        
        {job.details ? (
          <ul className={`space-y-3 text-gray-700 dark:text-gray-300 transition-all duration-300 ${
            isExpanded ? "opacity-100" : "opacity-100"
          }`}>
            {(isExpanded || !shouldShowButton ? job.details : job.details.slice(0, 1)).map((detail: string, idx: number) => (
              <li 
                key={idx} 
                className={`flex items-start transition-all duration-300 ease-in-out ${
                  isExpanded ? "opacity-100 translate-y-0" : idx === 0 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`} 
                style={{ 
                  transitionDelay: isExpanded ? `${idx * 100}ms` : "0ms"
                }}
              >
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0 transition-colors"></span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        ) : job.description ? (
          <p className={`text-gray-700 dark:text-gray-300 transition-colors ${isExpanded ? "" : "line-clamp-2"}`}>
            {job.description}
          </p>
        ) : null}
        
        {job.link && (
          <div className="mt-3">
            <a
              href={job.link}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 
                dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none focus:ring-2 
                focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:underline">Website</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </div>
        )}
        
        {shouldShowButton && (
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 
                flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                rounded-lg px-2 py-1 transition-colors"
              aria-expanded={isExpanded}
              aria-controls={`job-details-${job.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {isExpanded ? (
                <>
                  Show less <ChevronUpIcon className="ml-1 w-4 h-4" />
                </>
              ) : (
                <>
                  Show more <ChevronDownIcon className="ml-1 w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </Card>
  )
}

const TalksSection = ({ talks }: { talks: Talk[] }) => {
  const [showAll, setShowAll] = useState(false)
  
  // Sort talks by date (newest first)
  const sortedTalks = [...talks].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  
  // Display only 4 most recent talks instead of 5
  const displayedTalks = showAll ? sortedTalks : sortedTalks.slice(0, 4)

  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedTalks.map((talk, index) => (
          <Card key={index} hoverable className="flex flex-col h-full">
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">{talk.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-1 flex items-start">
                  <LocationIcon className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span>{talk.location}</span>
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                <p className="text-blue-600 dark:text-blue-400 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  {talk.date}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Change the condition to check for more than 4 talks */}
      {sortedTalks.length > 4 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800
              flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 
              focus:ring-offset-2 rounded-lg transition-colors shadow-md"
          >
            {showAll ? (
              <>
                Show less <ChevronUpIcon className="ml-2 w-5 h-5" />
              </>
            ) : (
              <>
                Show more talks <ChevronDownIcon className="ml-2 w-5 h-5" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}

const PublicationsSection = ({ publications }: { publications: Publication[] }) => {
  const [showAll, setShowAll] = useState(false)
  
  // Display only 4 publications initially
  const displayedPublications = showAll ? publications : publications.slice(0, 4)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {displayedPublications.map((pub, index) => (
          <Card key={index} hoverable>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2">{pub.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1">{pub.authors}</p>
            <p className="text-blue-600 dark:text-blue-400 mb-3">{pub.publication}</p>
            
            {pub.tags && (
              <div className="flex flex-wrap gap-2 mb-3">
                {pub.tags.map((tag, idx) => (
                  <Badge key={idx} color={idx % 3 === 0 ? "green" : idx % 3 === 1 ? "blue" : "purple"}>
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            
            {pub.link && (
              <a
                href={pub.link}
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 
                  dark:text-green-400 dark:hover:text-green-300 focus:outline-none focus:ring-2 
                  focus:ring-green-500 focus:ring-offset-2 rounded-lg px-2 py-1 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hover:underline">{pub.linkText}</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            )}
          </Card>
        ))}
      </div>
      
      {publications.length > 4 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800
              flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 
              focus:ring-offset-2 rounded-lg transition-colors shadow-md"
          >
            {showAll ? (
              <>
                Show less <ChevronUpIcon className="ml-2 w-5 h-5" />
              </>
            ) : (
              <>
                Show more publications <ChevronDownIcon className="ml-2 w-5 h-5" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}

const EducationCard = ({ education }: { education: EducationDetail }) => {
  return (
    <Card hoverable>
      <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">{education.degree}</h3>
      <p className="text-blue-600 dark:text-blue-400 mb-3">
        {education.school} | {education.period}
      </p>
      {education.thesis && (
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-medium">Thesis:</span> {education.thesis}
        </p>
      )}
    </Card>
  )
}

const ContactSection = () => {
  return (
    <Card>
      <div className="flex flex-col gap-6">
        <div className="flex items-center group">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-5 shadow-sm transition-colors">
            <MailIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
            <a
              href="mailto:skaliyugarasan@hotmail.com"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
            >
              skaliyugarasan@hotmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center group">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-5 shadow-sm transition-colors">
            <PhoneIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
            <a
              href="tel:+4793614229"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
            >
              +47 936 14 229
            </a>
          </div>
        </div>
        
        <div className="flex items-center group">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-5 shadow-sm transition-colors">
            <LocationIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
            <span className="text-gray-800 dark:text-gray-200 text-lg">Bergen, Norway</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

// ===== Main Component =====
const PortfolioPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("Background")
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})
  const { isDarkMode, toggleTheme } = useTheme()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { name: "Background", icon: BookOpenIcon },
    { name: "Experience", icon: BriefcaseIcon },
    { name: "Education", icon: GraduationCapIcon },
    { name: "Skills", icon: WrenchIcon },
    { name: "Publications", icon: BookOpenIcon },
    { name: "Teaching", icon: GraduationCapIcon },
    { name: "Talks and travels", icon: MapPinIcon },
    { name: "Contact", icon: MailIcon },
  ]

  // Sample data
  const experienceData: JobDetail[] = [
    {
      title: "Data scientist",
      company: "Lerøy Seafood, Norway",
      period: "Present",
      technologies: ["Databricks", "MLOps", "Python", "LLMs", "Microsoft Copilot"],
      details: [
        "Built MLOps infrastructure in Databricks, automating model deployment and launching two production-grade salmon price prediction models",
        "Supported Microsoft Copilot adoption through training development and hands-on GenAI workshops",
        "Developed two custom LLM solutions: a shipping document analyzer and HR chatbot",
      ],
    },
    {
      title: "Partner",
      company: "AkademiX",
      period: "July 2023 - Present",
      technologies: ["AI Consulting", "Knowledge Sharing", "Workshops"],
      description:
        "Co-founded a consulting company focused on artificial intelligence solutions and knowledge sharing.",
      link: "https://akademix.no/",
    },
    {
      title: "Assistant professor II",
      company: "Western Norway University of Applied Sciences",
      period: "2021",
      technologies: ["Teaching", "Curriculum Development", "Machine Learning"],
      description:
        "Held a 20% position during PhD studies for teaching ML course for third year BSc students.",
    },
    {
      title: "Data scientist",
      company: "Bouvet ASA, Bergen",
      period: "2019",
      description:
        "Worked part-time during my masters.",
    },
    {
      title: "Researcher",
      company: "University of Bergen, Department of Biomedicine",
      period: "2019-2020",
      technologies: ["Medical Imaging", "Algorithm Development", "Research"],
    },
    {
      title: "Teaching assistant",
      company: "Western Norway University of Applied Sciences",
      period: "2015 - 2018",
      description:
        "Assisted in teaching various software engineering courses. Conducted lab sessions and graded assignments.",
    },
    {
      title: "Summer Intern",
      company: "Capgemini",
      period: "2018",
    },
    {
      title: "Summer Intern",
      company: "Nordea Liv",
      period: "2017",
    },
    {
      title: "Internship",
      company: "Vizrt, Bergen, Norway",
      period: "2016",
    },
    // More jobs...
  ]

  const educationData: EducationDetail[] = [
    {
      degree: "PhD in Computer Science",
      school: "Western Norway University of Applied Sciences",
      period: "2020-2023",
      thesis: "Deep learning in medical image analysis: efficient use of data and radiological expertise",
    },
    {
      degree: "MSc in Software Engineering",
      school: "University of Bergen",
      period: "2019",
      thesis: "Deep transfer learning in medical imaging",
    },
    {
      degree: "BSc in Information Technology",
      school: "Western Norway University of Applied Sciences",
      period: "2017",
    },
  ]

  const skillsData = {
    "Primary programming Language": ["Python"],
    "Languages": ["Norwegian (Bokmål)", "Tamil", "English"],
    "ML/AI tools": [
      "PyTorch", 
      "TensorFlow", 
      "fastai", 
      "sci kit-learn", 
      "XGBoost", 
      "Azure OpenAI", 
      "Databricks", 
      "MLflow", 
      "Pandas", 
      "NumPy",
      "PySpark", 
      "LangChain", 
      "Streamlit", 
      "Gradio"
    ],
  }

  const publicationsData: Publication[] = [
    {
      title: "fastMONAI: a low-code deep learning library for medical image analysis",
      authors: "S. Kaliyugarasan, A.S Lundervold",
      publication: "Software Impacts, 2023",
      link: "https://github.com/MMIV-ML/fastMONAI",
      linkText: "Source code",
    },
    {
      title: "Multi-Center CNN-based spine segmentation from T2w MRI using small amounts of data",
      authors: "S. Kaliyugarasan, A.S Lundervold and others",
      publication: "20th IEEE International Symposium on Biomedical Imaging (ISBI), 2023",
      link: "https://github.com/MMIV-ML/fastMONAI/tree/master/research/spine",
      linkText: "Source code",
    },
    {
      title: "LAB-Net: Lidar and aerial image-based building segmentation using U-Nets",
      authors: "S. Kaliyugarasan, A.S Lundervold",
      publication: "Nordic Machine Intelligence, second place 2022 NORA MapAI competition",
      link: "https://github.com/HVL-ML/LAB-Net",
      linkText: "Source code",
    },
    {
      title: "Fully automatic whole-volume tumor segmentation in cervical cancer",
      authors: "E. Hodneland, S. Kaliyugarasan et al.",
      publication: "Cancers, 2022",
    },
    {
      title: "Pulmonary Nodule Classification in Lung Cancer from 3D Thoracic CT Scans Using fastai and MONAI",
      authors: "S. Kaliyugarasan, A. Lundervold, A.S Lundervold",
      publication: "IJIMAI, 2021",
    },
    {
      title: "2D and 3D U-Nets for skull stripping in a large and heterogeneous set of head MRI using fastai",
      authors: "S. Kaliyugarasan, M. Kocinski, A. Lundervold, A.S Lundervold",
      publication: "NIK2020, no.1, 2020",
    },
    // More publications...
  ]

  // Convert talks data to have a year property for filtering
  const talksData: Talk[] = [
    {
      title: "Lerøy og kunstig intelligens",
      location: "Inspirasjonsdag for realfagselever, Western Norway University of Applied Sciences, Bergen, Norway",
      date: "November 4, 2024",
      year: 2024,
      category: "AI"
    },
    {
      title: "Hvordan jobber vi med kunstig intelligens?",
      location: "Springbrett, Grieghallen, Bergen, Norway",
      date: "September 24, 2024",
      year: 2024,
      category: "AI"
    },
    {
      title: "Lerøy og kunstig intelligens",
      location: "Lerøy motivasjonssamling, Scandic Flesland, Bergen, Norway",
      date: "September 7, 2024",
      year: 2023,
      category: "AI"
    },
    {
      title: "Kunstig intelligens i hverdagen",
      location: "Tekna, VilVite, Bergen, Norway",
      date: "April 29, 2024",
      year: 2024,
      category: "AI"
    },
    {
      title: "Workshop i Executive MBA-programmet innen strategisk ledelse",
      location: "NHH, Gardermoen, Norway",
      date: "April 10, 2024",
      year: 2024,
      category: "AI"
    },
    {
      title: "Kunstig intelligens og framtidens radiografer",
      location: "RAD230, Western Norway University of Applied Sciences, Bergen, Norway",
      date: "May 8, 2023",
      year: 2023,
      category: "Medical Imaging"
    },
    {
      title: "Multi-Center CNN-based spine segmentation from T2w MRI using small amounts of data",
      location: "ISBI, Cartagena de Indias, Colombia",
      date: "April 18-21, 2023",
      year: 2023,
      category: "Medical Imaging"
    },
    {
      title: "Kunstig intelligens i medisinsk bildebehandling",
      location: "Bouvet deler, Litteraturhuset i Bergen, Norway",
      date: "January 19, 2023",
      year: 2023,
      category: "Medical Imaging"
    },
    {
      title: "Fully automatic whole-volume tumor segmentation in cervical cancer",
      location: "RSNA, McCormick Place, Chicago, IL, USA",
      date: "December 27 - December 1, 2022",
      year: 2022,
      category: "Medical Imaging"
    },
    {
      title: "RAD230 lecture and lab: \"Hva er dyplæring?\"",
      location: "Western Norway University of Applied Sciences, Bergen, Norway",
      date: "May 13, 2022",
      year: 2022,
      category: "Medical Imaging"
    },
    {
      title: "DAT255 guest lecture: \"How to use fastai for medical image analysis\"",
      location: "Western Norway University of Applied Sciences, Bergen, Norway", 
      date: "March 2, 2022",
      year: 2022,
      category: "Medical Imaging"
    },
    {
      title: "Praktisk dyp læring i medisinsk bildeanalyse",
      location: "CurieLecture, Eitri Medical Incubator, Bergen, Norway",
      date: "February 2, 2022",
      year: 2022,
      category: "Medical Imaging"
    },
    {
      title: "How old is your brain? A Large Scale MRI and Deep Learning Investigation",
      location: "NordicAIMeet, Oslo Kongressenter, Norway",
      date: "November 1-2, 2021",
      year: 2021,
      category: "Medical Imaging"
    },
    {
      title: "Practical deep learning in medical image analysis",
      location: "Seminar, Engineering Computing, Western Norway University of Applied Sciences, Bergen, Norway",
      date: "May 21, 2021",
      year: 2021,
      category: "Medical Imaging"
    },
    {
      title: "Medisinsk bildebehandling og maskinlæring: Kunstig intelligens ved MMIV, Radiologisk avdeling, Haukeland universitetssykehus",
      location: "Tekna, Streaming",
      date: "October 12, 2020",
      year: 2020,
      category: "Medical Imaging"
    },
    {
      title: "Artificial intelligence in image diagnostics: design methodologies for efficient use of data and radiologist's expertise\"",
      location: "Seminar, Bergen gynekologisk kreft, Scandic Voss, Norway",
      date: "March 5-6, 2020",
      year: 2020,
      category: "Medical Imaging"
    },
    {
      title: "Artificial intelligence in image diagnostics: design methodologies for efficient use of data",
      location: "Bergen Data Science Meetup, Bouvet ASA, Bergen, Norway",
      date: "November 19, 2019",
      year: 2019,
      category: "Medical Imaging"
    },
    {
      title: "Maskinlæring og kunstig intelligens: MMIV@HUS: Kunstig intelligens ved radiologisk avdeling",
      location: "TekPRAT, Førde Sentralsjukehus, Norway",
      date: "September 23, 2019",
      year: 2019,
      category: "Medical Imaging"
    },
    {
      title: "Artificial intelligence in image diagnostics – transfer learning and active learning for efficient use of data and radiologist's expertise",
      location: "Seminar, MMIV, Haraldsplass Diakonale Sykehus, Bergen, Norway",
      date: "September 20, 2019",
      year: 2019,
      category: "Medical Imaging"
    },
    {
      title: "Deep Learning in medical image analysis",
      location: "NordBioMedNet Summer School, Seili, Finland",
      date: "August 11-16, 2019",
      year: 2019,
      category: "Medical Imaging"
    },
    {
      title: "Mohn Medical Imaging and Visualization Center",
      location: "Christiekonferansen, Universitetsaulaen i Bergen, Norway",
      date: "April 29, 2019",
      year: 2019,
      category: "Medical Imaging"
    },
    {
      title: "Deep transfer learning: a case study",
      location: "Bergen AI & Machine Learning Symposium, Solstrand Hotel, Bergen, Norway",
      date: "March 25-26, 2019",
      year: 2019,
      category: "Medical Imaging"
    },
    {
      title: "Exhibition",
      location: "EHiN, Oslo Spektrum, Norway",
      date: "November 14, 2018",
      year: 2018,
      category: "Medical Imaging"
    },
    {
      title: "Transfer learning for medical images: a case study",
      location: "GTC, Munich, Germany",
      date: "October 9-11, 2018",
      year: 2018,
      category: "Medical Imaging"
    }
  ]

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Intersection Observer for section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id.split('-')[0] || "Background")
          }
        })
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      },
    )

    // Observe all sections
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      Object.values(sectionsRef.current).forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50/50'} transition-colors duration-300 flex flex-col`}>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/skaliy.png"
              alt="Profile"
              className="rounded-full w-10 h-10 object-cover ring-2 ring-blue-500/20"
            />
            <h1 className="text-xl font-bold">Satheshkumar K.</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="text-white p-2 hover:bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu with animation */}
      <div 
        className={`md:hidden fixed inset-0 bg-gray-900 text-white z-40 pt-16 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="p-4 flex-grow">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}-section`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
              onClick={() => {
                toggleMobileMenu()
                setActiveSection(item.name)
              }}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <SocialIcons />
        </div>
      </div>

      {/* Left Sidebar (Desktop) */}
      <div className="fixed left-0 top-0 w-72 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 hidden md:flex md:flex-col">
        <div className="mb-12">
          <div className="relative w-40 h-40 mx-auto mb-6">
            <img
              src="/skaliy.png"
              alt="Profile"
              className="rounded-full w-full h-full object-cover ring-4 ring-blue-500/20 transition-all"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
            Satheshkumar Kaliyugarasan
          </h1>
          <p className="text-blue-400 text-center font-medium">Software engineer & data scientist</p>
        </div>

        <nav className="space-y-1 flex-grow">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}-section`}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50 ${
                activeSection === item.name
                  ? "text-white bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setActiveSection(item.name)}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 flex flex-col items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
          <SocialIcons />
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-72 p-4 md:p-12 max-w-5xl mx-auto pt-24 md:pt-12 flex-grow">
        <section 
          ref={(el) => {
            sectionsRef.current["Background"] = el;
          }} 
          id="background-section" 
          className="mb-16 scroll-mt-24"
        >
          <SectionHeader>Background</SectionHeader>
          <Card>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              PhD from Western Norway University of Applied Sciences. My research activities primarily revolved around
              machine learning and medical image analysis, with a particular focus on design methodologies in deep
              learning for efficient use of data. Currently, I am employed as a data scientist at Lerøy Seafood, a
              global leader in the seafood industry. My primary responsibilities include MLOps and LLMOps infrastructure, along with integrating machine learning models and large language models into operational workflows.
              These efforts aim to enhance business efficiency and support data-driven decision-making across the organization.
            </p>
            
          </Card>
        </section>

        <section 
          ref={(el) => {
            sectionsRef.current["Experience"] = el;
          }} 
          id="experience-section" 
          className="mb-16 scroll-mt-24"
        >
          <SectionHeader>Experience</SectionHeader>
          <div className="space-y-6">
            {experienceData.map((job, index) => (
              <ExperienceCard key={index} job={job} />
            ))}
          </div>
        </section>

        <section 
          ref={(el) => {
            sectionsRef.current["Education"] = el;
          }} 
          id="education-section" 
          className="mb-16 scroll-mt-24"
        >
          <SectionHeader>Education</SectionHeader>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <EducationCard key={index} education={edu} />
            ))}
          </div>
        </section>

        <section 
          ref={(el) => {
            sectionsRef.current["Publications"] = el;
          }} 
          id="publications-section" 
          className="mb-16 scroll-mt-24"
        >
          <SectionHeader>Publications</SectionHeader>
          <PublicationsSection publications={publicationsData} />
        </section>

        <section 
          ref={(el) => {
            sectionsRef.current["Teaching"] = el;
          }} 
          id="teaching-section" 
          className="mb-16 scroll-mt-24"
        >
          <SectionHeader>Teaching</SectionHeader>
          <Card>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Teaching Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Courses</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  DAT158: Machine learning engineering and advanced algorithms (Fall 2021)
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Supervision</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-base font-medium text-gray-800 dark:text-white">MSc Projects (co-supervision)</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      2020-2022: A workflow-integrated brain tumor segmentation system based on fastai and MONAI
                    </p>
                  </div>
                  <div>
                    <h5 className="text-base font-medium text-gray-800 dark:text-white">BSc Projects (co-supervision)</h5>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-4">
                      <li className="flex items-start">
                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0"></span>
                        <span>2024: Large language models and fish health</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0"></span>
                        <span>2025: Deep learning for quality control of fish fillets</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section 
          ref={(el) => {
            sectionsRef.current["Talks and travels"] = el;
          }} 
          id="talks-and-travels-section" 
          className="mb-16 scroll-mt-24"
        >
          <SectionHeader>Talks and travels</SectionHeader>
          <TalksSection talks={talksData} />
        </section>

        <section 
          ref={(el) => {
            sectionsRef.current["Contact"] = el;
          }} 
          id="contact-section" 
          className="mb-16 scroll-mt-24"
        >
          <SectionHeader>Contact information</SectionHeader>
          <ContactSection />
        </section>
      </div>
    </div>
  )
}

// Wrap the entire app with the ThemeProvider
const App = () => (
  <ThemeProvider>
    <PortfolioPage />
  </ThemeProvider>
)

export default App