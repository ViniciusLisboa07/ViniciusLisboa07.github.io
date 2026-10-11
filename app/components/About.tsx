"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslation } from 'react-i18next'
import { Download } from "lucide-react"
import SectionHeading from "./SectionHeading"

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-24 md:py-32 bg-paper-dark">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading index="01" label={t('about')} title={t('about_me')} />

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 text-lg md:text-xl leading-relaxed text-ink-soft space-y-6"
          >
            <p className="font-serif text-2xl md:text-3xl leading-snug text-ink">
              {t('about_me_description')}
            </p>
            <p>{t('about_me_description_2')}</p>
            <p>{t('about_me_description_3')}</p>
            <motion.a
              href="https://drive.google.com/file/d/1aDUU9n5-bAtFSs8jtni3ShynIjzCv4vq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-medium text-paper transition-colors hover:bg-forest"
            >
              <Download className="h-4 w-4" />
              {t('download_resume')}
            </motion.a>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="border border-ink/40 p-3 bg-paper">
              <div className="border border-ink/20">
                <Image
                  src="/images/vinicius.jpeg"
                  alt="Vinícius Lisboa"
                  width={839}
                  height={839}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
