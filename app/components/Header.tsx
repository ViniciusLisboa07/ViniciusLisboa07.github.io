"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ${
        isScrolled ? "bg-white bg-opacity-90 backdrop-blur-md" : "bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl">Vinicius Lisboa</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="hover:underline">
            {t('about')}
          </Link>
          <Link href="#projects" className="hover:underline">
            {t('projects')}
          </Link>
          <Link href="https://dev.to/viniciuslisboa07" target="_blank" className="hover:underline">
            {t('blog')}
          </Link>
          <LanguageSwitcher />
          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md font-medium" onClick={() => window.location.href = '#contact'}>
            {t('get_in_touch')}
          </Button>
        </nav>
        <Button className="md:hidden" variant="ghost">
          Menu
        </Button>
      </div>
    </motion.header>
  )
}
