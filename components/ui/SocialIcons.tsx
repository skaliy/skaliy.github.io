import { Github, Linkedin, Mail } from "lucide-react"
import { profile } from "@/data"

interface SocialIconsProps {
  size?: "small" | "large"
}

const socialLinks = [
  { icon: Github, href: profile.github, label: "GitHub profile (opens in new tab)", external: true },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn profile (opens in new tab)", external: true },
  { icon: Mail, href: `mailto:${profile.email}`, label: `Email ${profile.email}`, external: false },
]

export const SocialIcons = ({ size = "small" }: SocialIconsProps) => {
  return (
    <div className="flex justify-center gap-2 sm:gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.href}
          href={social.href}
          aria-label={social.label}
          title={social.label}
          {...(social.external && { target: "_blank", rel: "noopener noreferrer" })}
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
