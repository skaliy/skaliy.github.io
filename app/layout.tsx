import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
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

const siteUrl = "https://skaliy.github.io";

export const metadata: Metadata = {
  title: "Satheshkumar Kaliyugarasan | Software Engineer & Data Scientist",
  description:
    "PhD in Computer Science specializing in deep learning for medical image analysis. Postdoctoral fellow at MMIV developing AI solutions for medical imaging and reporting.",
  keywords: [
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
    title: "Satheshkumar Kaliyugarasan | Software Engineer & Data Scientist",
    description:
      "PhD in Computer Science specializing in deep learning for medical image analysis. Postdoctoral fellow at MMIV.",
    url: siteUrl,
    siteName: "Satheshkumar Kaliyugarasan",
    images: [
      {
        url: "/skaliy.png",
        width: 400,
        height: 400,
        alt: "Satheshkumar Kaliyugarasan - Software engineer and data scientist",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Satheshkumar Kaliyugarasan | Software Engineer & Data Scientist",
    description:
      "PhD in Computer Science specializing in deep learning for medical image analysis.",
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
  jobTitle: "Postdoctoral Fellow",
  description:
    "Software engineer and data scientist specializing in deep learning for medical image analysis",
  url: siteUrl,
  image: `${siteUrl}/skaliy.png`,
  email: "skaliyugarasan@hotmail.com",
  telephone: "+47 936 14 229",
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
  worksFor: {
    "@type": "Organization",
    name: "Mohn Medical Imaging and Visualization Centre (MMIV)",
    url: "https://mmiv.no",
  },
  sameAs: [
    "https://github.com/skaliy",
    "https://no.linkedin.com/in/satheshkumar-kaliyugarasan-75269711b",
  ],
  knowsAbout: [
    "Machine Learning",
    "Deep Learning",
    "Medical Image Analysis",
    "Python",
    "PyTorch",
    "Computer Vision",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SkipLink />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
