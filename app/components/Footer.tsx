"use client"

import { useTranslation } from 'react-i18next'
import { Github, Linkedin, MessageCircle } from "lucide-react"

export default function Footer() {
  const { t } = useTranslation()

  const links = [
    { href: "https://www.linkedin.com/in/vin%C3%ADcius-lisboa-6347971a9/", label: t('linkedin'), icon: Linkedin },
    { href: "https://wa.me/5541988073637", label: t('whatsapp'), icon: MessageCircle },
    { href: "https://github.com/ViniciusLisboa07", label: t('github'), icon: Github },
  ]

  return (
    <footer className="bg-ink text-paper">
      <div className="container mx-auto max-w-6xl px-6 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-paper/60">
          &copy; {new Date().getFullYear()} <span className="font-serif">Vinícius <span className="italic">Lisboa</span></span>. {t('all_rights_reserved')}
        </p>

        <div className="flex items-center gap-6">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-paper/70 transition-colors hover:text-paper"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
