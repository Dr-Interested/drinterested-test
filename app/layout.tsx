import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import { generateOrganizationSchema } from "@/lib/seo-utils"
import SeoSchema from "@/components/seo-schema"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Dr. Interested - Inspiring Future Healthcare Leaders",
    template: "%s | Dr. Interested",
  },
  description:
    'Dr. Interested supports youth in finding their unique "spark" in medicine through programs & opportunities. Earn volunteer hours while building your future!',
  keywords: [
    "healthcare education",
    "medical careers",
    "high school students",
    "healthcare mentorship",
    "medical research",
    "Dr. Interested",
    "healthcare internships",
    "medical technology",
    "high school club",
    "volunteer hours",
    "healthcare volunteer",
    "student-led organization",
    "healthcare leadership",
    "medical podcast",
    "healthcare blog",
    "healthcare community",
    "healthcare workshops",
    "healthcare research",
    "highschool research",
    "doctor interested",
    "doctor interest",
    "dr interested",
    "dr interest",
    "Adil Mukhi",
    "medical students",
    "healthcare advisors",
    "impact report",
    "healthcare impact",
    "policy spark",
    "healthcare policy",
    "healthcare events",
    "medical webinars",
    "premed webinars",
    "healthcare webinars",
  ],
  authors: [{ name: "Dr. Interested Team" }],
  creator: "Dr. Interested",
  publisher: "Dr. Interested",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.drinterested.org",
    title: "Dr. Interested - Inspiring Future Healthcare Leaders",
    description:
      'Dr. Interested supports youth in finding their unique "spark" in medicine through programs & opportunities. Earn volunteer hours while building your future!',
    siteName: "Dr. Interested",
    images: [
      {
        url: "/websitebanner.jpg",
        width: 1920,
        height: 1080,
        alt: "Dr. Interested - Pre-Med Youth Org - Supporting youth in finding their unique 'spark' in medicine!",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Interested - Inspiring Future Healthcare Leaders",
    description:
      'Dr. Interested supports youth in finding their unique "spark" in medicine through programs & opportunities. Earn volunteer hours while building your future!',
    images: {
      url: "/websitebanner.jpg",
      alt: "Dr. Interested - Pre-Med Youth Org - Supporting youth in finding their unique 'spark' in medicine!",
      type: "image/jpeg",
    },
    creator: "@DrInterested",
  },
  alternates: {
    canonical: "https://www.drinterested.org",
    languages: {
      "en-US": "https://www.drinterested.org",
    },
    types: {
      "application/rss+xml": "https://www.drinterested.org/rss.xml",
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
  generator: "Next.js",
  metadataBase: new URL("https://www.drinterested.org"),
  verification: {
    google: "google-site-verification-code",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#405862",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6MYCRFPPGE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6MYCRFPPGE');
          `}
        </Script>
        <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="lazyOnload" />
        <link rel="canonical" href="https://www.drinterested.org" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Dr. Interested RSS Feed"
          href="https://www.drinterested.org/rss.xml"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SeoSchema schema={generateOrganizationSchema()} />
          <Suspense fallback={null}>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <Toaster />
            </div>
          </Suspense>
          <Analytics />
        </ThemeProvider>
        <Script id="accessibility-widget" strategy="afterInteractive">
          {`
            window.addEventListener("load", (event) => {
              setTimeout(() => {
                let aioa_script_tag = document.createElement("script");
                aioa_script_tag.src = "https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=#4ecdc4&token=&position=bottom_right";
                aioa_script_tag.id = "aioa-adawidget";
                document.getElementsByTagName("body")[0].appendChild(aioa_script_tag);
              }, 3000);
            });
          `}
        </Script>
        <Script id="pdf-schema" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MediaObject",
              "name": "Dr Interested 2025 Impact Report",
              "contentUrl": "https://www.drinterested.org/dr-interested-impact-report-2025 (1).pdf",
              "encodingFormat": "application/pdf",
              "description": "Download and view the Dr Interested Annual 2025 Impact Report to learn about our initiatives, programs, and impact in healthcare education."
            }
          `}
        </Script>
      </body>
    </html>
  )
}
