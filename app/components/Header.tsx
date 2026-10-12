"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from 'react-i18next'
import { Menu, X } from "lucide-react"
import LanguageSwitcher from './LanguageSwitcher'
import Link from "next/link"

export default function Header() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/#experience", label: t('experience') },
    { href: "/#projects", label: t('projects') },
    { href: "/blog", label: t('blog') },
    { href: "/#about", label: t('about') },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isMenuOpen ? "bg-paper border-ink/15" : isScrolled ? "bg-paper/90 backdrop-blur-md border-ink/15" : "bg-transparent border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-6xl px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-serif text-xl font-medium tracking-tight">
          Vinicius <span className="italic">Lisboa</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-ink-soft hover:text-ink transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            href="/#contact"
            className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-forest"
          >
            {t('get_in_touch')}
          </Link>
        </nav>

        <button
          className="md:hidden p-2 -mr-2 rounded-full hover:bg-ink/5"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-ink/15"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-2xl"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-2">
                <LanguageSwitcher />
                <Link
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper"
                >
                  {t('get_in_touch')}
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
