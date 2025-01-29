import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vinícius Lisboa - Desenvolvedor Web FullStack",
  description: "Portfolio pessoal de Vinícius Lisboa, desenvolvedor web fullstack especializado em Ruby on Rails.",
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

