import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vinícius Lisboa - Desenvolvedor Web FullStack",
  description: "Portfolio pessoal de Vinícius Lisboa, desenvolvedor web fullstack especializado em Ruby on Rails.",
  openGraph: {
    title: "Vinícius Lisboa - Desenvolvedor Web FullStack",
    description: "Portfolio pessoal de Vinícius Lisboa, desenvolvedor web fullstack especializado em Ruby on Rails.",
    url: "https://viniciuslisboa07.github.io",
    siteName: "Vinícius Lisboa Portfolio",
    images: [
      {
        url: "/images/vinicius.jpeg", // Imagem geral do site
        width: 1200,
        height: 630,
        alt: "Vinícius Lisboa - Desenvolvedor Web FullStack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinícius Lisboa - Desenvolvedor Web FullStack",
    description: "Portfolio pessoal de Vinícius Lisboa, desenvolvedor web fullstack especializado em Ruby on Rails.",
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
      <body className={outfit.className}>{children}</body>
    </html>
  )
}

