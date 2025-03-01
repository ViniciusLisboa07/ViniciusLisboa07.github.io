"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useTranslation } from 'react-i18next'

export default function Presentation() {
  const { t } = useTranslation()

  return (
    <section id="presentation" className="h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t('hello')} <span className="text-gray-400">Vinicius Lisboa</span>
        </h1>
        <h2 className="text-2xl md:text-4xl mb-8">
          {t('i_am')}{" "}
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
            className="font-bold text-gray-400"
          />
        </h2>
      </motion.div>
    </section>
  )
}

