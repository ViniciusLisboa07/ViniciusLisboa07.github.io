"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useTranslation } from 'react-i18next'
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import React from "react"

export default function Presentation() {
  const { t } = useTranslation()

  const socials = [
    { href: "https://github.com/ViniciusLisboa07", label: "GitHub", icon: Github },
    { href: "https://www.linkedin.com/in/lisboavini", label: "LinkedIn", icon: Linkedin },
    { href: "mailto:viniciuslisboa1001@gmail.com", label: "E-mail", icon: Mail },
  ]

  return (
    <section id="presentation" className="min-h-screen flex flex-col relative overflow-hidden pt-28 md:pt-36">
      <div className="container mx-auto max-w-6xl px-6 relative pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            <span>{t('hero_eyebrow_role')}</span>
            <span className="hidden sm:block h-px w-12 bg-ink/30" />
            <span className="hidden sm:inline">{t('hero_eyebrow_place')}</span>
          </div>

          <p className="text-xl md:text-2xl text-ink-soft mb-3">{t('hello')}</p>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight leading-[0.95] mb-8">
            Vinicius <span className="italic text-forest">Lisboa</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium mb-6 min-h-[2.5em] md:min-h-[1.5em]">
            {t('i_am')}{' '}
            <TypeAnimation
              sequence={[
                t('developer'), 2000,
                t('fullstack_developer'), 2000,
                t('rails_specialist'), 2000,
              ]}
              key={t('developer') + t('fullstack_developer') + t('rails_specialist')}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="font-serif italic text-navy"
            />
          </h2>

          <p className="text-lg md:text-xl text-ink-soft max-w-2xl mb-10">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="#experience"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-lg font-medium text-paper transition-colors hover:bg-forest"
            >
              {t('see_my_work')}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-ink/40 bg-paper/60 px-8 py-4 text-lg font-medium transition-colors hover:border-ink hover:bg-paper"
            >
              {t('learn_more')}
            </a>

            <div className="flex items-center gap-1 sm:ml-4">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gravura: paisagem gerada por scripts/engrave.py */}
      <div className="relative flex-1 min-h-[280px] md:min-h-[360px] [mask-image:linear-gradient(to_bottom,transparent,black_30%)]">
        <Image
          src="/images/engraved/landscape.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_42%]"
        />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container mx-auto max-w-6xl px-6 pb-6 flex items-end justify-end">
            <a
              href="#about"
              aria-label={t('learn_more')}
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-paper/50 text-paper animate-bounce"
            >
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
