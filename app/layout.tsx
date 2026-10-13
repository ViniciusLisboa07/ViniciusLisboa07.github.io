import type { Metadata } from "next"
import { Fraunces, JetBrains_Mono, Outfit } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import SmoothScroll from "./components/SmoothScroll"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif", style: ["normal", "italic"] })
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  metadataBase: new URL("https://viniciuslisboa07.github.io"),
  title: "Vinícius Lisboa — Engenheiro Full Stack · Ruby on Rails",
  description: "Engenheiro full stack com 5 anos construindo produtos SaaS com Ruby on Rails, React e PostgreSQL, com ênfase em backend e performance.",
  openGraph: {
    title: "Vinícius Lisboa — Engenheiro Full Stack · Ruby on Rails",
    description: "Engenheiro full stack com 5 anos construindo produtos SaaS com Ruby on Rails, React e PostgreSQL, com ênfase em backend e performance.",
    url: "https://viniciuslisboa07.github.io",
    siteName: "Vinícius Lisboa Portfolio",
    images: [
      {
        url: "/images/vinicius.jpeg", // Imagem geral do site
        width: 1200,
        height: 630,
        alt: "Vinícius Lisboa — Engenheiro Full Stack · Ruby on Rails",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinícius Lisboa — Engenheiro Full Stack · Ruby on Rails",
    description: "Engenheiro full stack com 5 anos construindo produtos SaaS com Ruby on Rails, React e PostgreSQL, com ênfase em backend e performance.",
    images: ["/images/vinicius.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QY2VMWMXL2"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QY2VMWMXL2');
          `}
        </Script>
      </head>
      <body className={`${outfit.variable} ${fraunces.variable} ${mono.variable} font-sans paper-grain`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}

