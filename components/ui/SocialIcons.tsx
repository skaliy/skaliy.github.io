"use client"

import { Github, Linkedin, Mail } from "lucide-react"

interface SocialIconsProps {
  size?: "small" | "large"
}

const socialLinks = [
  { icon: Github, href: "https://github.com/skaliy", label: "GitHub" },
  { icon: Linkedin, href: "https://no.linkedin.com/in/satheshkumar-kaliyugarasan-75269711b", label: "LinkedIn" },
  { icon: Mail, href: "mailto:skaliyugarasan@hotmail.com", label: "Email" },
]

export const SocialIcons = ({ size = "small" }: SocialIconsProps) => {
  return (
    <div className="flex justify-center space-x-4 sm:space-x-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          aria-label={`Visit ${social.label} profile (opens in new tab)`}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
            rounded-full p-2 sm:p-1 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto
            flex items-center justify-center
            dark:text-gray-300 dark:hover:text-blue-300 dark:focus-visible:ring-blue-400
          `}
        >
          <social.icon className={size === "large" ? "w-6 h-6" : "w-5 h-5"} />
        </a>
      ))}
    </div>
  )
}
