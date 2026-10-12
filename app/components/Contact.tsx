"use client"

import { useTranslation } from 'react-i18next'
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="relative overflow-hidden pt-24 md:pt-32 pb-80 md:pb-[26rem]">
      {/* Gravura de ondas: gerada por scripts/engrave.py */}
      <div className="absolute inset-x-0 bottom-0 h-56 md:h-72 [mask-image:linear-gradient(to_bottom,transparent,black_50%)]" aria-hidden>
        <Image src="/images/engraved/sea.png" alt="" fill className="object-cover object-bottom" />
        {/* o mar escurece até virar o verde do footer */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-forest/0 to-forest" />
      </div>

      <div className="relative container mx-auto max-w-6xl px-6 text-center">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted mb-8">§ 05 — {t('contact')}</div>
        <h2 className="font-serif text-5xl md:text-7xl font-medium mb-12 leading-[1.05] tracking-tight">
          {t('wanna_create')}<br />
          {t('something')} <span className="italic text-forest">{t('awesome')}</span><br />
          {t('together')}
        </h2>

        <a
          href="mailto:viniciuslisboa1001@gmail.com"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-lg font-medium text-paper transition-colors hover:bg-forest"
        >
          {t('lets_talk')}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>

        <p className="mt-8 text-sm text-ink-soft">
          {t('dont_like_buttons')} {t('reach_out_at')}{' '}
          <a
            href="mailto:viniciuslisboa1001@gmail.com"
            className="text-ink underline decoration-forest/50 underline-offset-4 hover:decoration-forest transition-colors"
          >
            viniciuslisboa1001@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
