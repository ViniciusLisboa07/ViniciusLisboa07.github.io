"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          VL
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-gray-300 transition-colors">
              {t('about')}
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300 transition-colors">
              {t('projects')}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              {t('projects')}
            </a>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
