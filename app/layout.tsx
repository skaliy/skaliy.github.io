import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SkipLink } from "@/components/layout/SkipLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://skaliy.no";
const title = "Satheshkumar Kaliyugarasan | AI researcher and software engineer";
const description =
  "Associate professor at the Western Norway University of Applied Sciences (HVL) and part-time researcher at MMIV, working on applied AI, deep learning for medical image analysis and software engineering.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#292d2b" },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Satheshkumar Kaliyugarasan",
    "associate professor",
    "AI researcher",
    "software engineer",
    "data scientist",
    "machine learning",
    "medical imaging",
    "deep learning",
    "PhD",
    "AI",
    "Python",
    "PyTorch",
    "fastMONAI",
    "large language models",
    "HVL",
    "MMIV",
  ],
  authors: [{ name: "Satheshkumar Kaliyugarasan" }],
  creator: "Satheshkumar Kaliyugarasan",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Satheshkumar",
    lastName: "Kaliyugarasan",
    title,
    description,
    url: siteUrl,
    siteName: "Satheshkumar Kaliyugarasan",
    images: [
      {
        url: "/skaliy.png",
        width: 442,
        height: 496,
        alt: "Portrait of Satheshkumar Kaliyugarasan",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/skaliy.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Satheshkumar Kaliyugarasan",
  jobTitle: ["Associate professor", "Researcher"],
  description,
  url: siteUrl,
  image: `${siteUrl}/skaliy.png`,
  email: "skaliyugarasan@hotmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bergen",
    addressCountry: "Norway",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Western Norway University of Applied Sciences",
    },
    {
      "@type": "EducationalOrganization",
      name: "University of Bergen",
    },
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "Western Norway University of Applied Sciences (HVL)",
      url: "https://www.hvl.edu/en/",
    },
    {
      "@type": "Organization",
      name: "Mohn Medical Imaging and Visualization Centre (MMIV)",
      url: "https://mmiv.no",
    },
  ],
  sameAs: [
    "https://github.com/skaliy",
    "https://no.linkedin.com/in/satheshkumar-kaliyugarasan-75269711b",
  ],
  knowsAbout: [
    "machine learning",
    "deep learning",
    "medical image analysis",
    "Python",
    "PyTorch",
    "computer vision",
    "large language models",
    "software engineering",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <SkipLink />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
