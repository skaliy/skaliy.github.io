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
          className="
            text-nord3 dark:text-nord4 hover:text-accent dark:hover:text-nord8 transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-nord8
            rounded-lg min-h-11 min-w-11 flex items-center justify-center
          "
        >
          <social.icon className={size === "large" ? "w-6 h-6" : "w-5 h-5"} />
        </a>
      ))}
    </div>
  )
}
