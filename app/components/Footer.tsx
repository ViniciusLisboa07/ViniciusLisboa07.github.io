"use client"

import { useTranslation } from 'react-i18next'
import { Github, Linkedin, MessageCircle } from "lucide-react"

export default function Footer() {
  const { t } = useTranslation()

  const links = [
    { href: "https://www.linkedin.com/in/lisboavini", label: t('linkedin'), icon: Linkedin },
    { href: "https://wa.me/5541988073637", label: t('whatsapp'), icon: MessageCircle },
    { href: "https://github.com/ViniciusLisboa07", label: t('github'), icon: Github },
  ]

  return (
    <footer className="relative overflow-hidden bg-forest waves-paper text-paper">
      <div className="relative container mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-12 md:pb-16">
        <figure className="max-w-xl mb-16 md:mb-24">
          <blockquote className="font-serif text-3xl md:text-5xl leading-tight tracking-tight">
            <span className="italic">“{t('plato_quote')}”</span>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-paper/60">
            <span className="h-px w-12 bg-paper/30" />
            {t('plato_source')}
          </figcaption>
        </figure>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-paper/75 transition-colors hover:text-paper"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-6 border-t border-paper/20 pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-paper/50">
          <p>
            &copy; {new Date().getFullYear()} Vinícius Lisboa. {t('all_rights_reserved')}
          </p>
        </div>
      </div>

      {/* Assinatura gigante, cortada pela borda inferior */}
      <p
        aria-hidden
        className="relative select-none whitespace-nowrap px-[2vw] font-serif text-[14vw] font-medium leading-[0.78] tracking-tight text-paper/90 -mb-[0.08em]"
      >
        Vinicius <span className="italic">Lisboa</span>
      </p>
    </footer>
  )
}
