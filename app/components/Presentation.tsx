"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useTranslation } from 'react-i18next'
import { Button } from "@/components/ui/button"

export default function Presentation() {
  const { t } = useTranslation()

  return (
    <section id="presentation" className="h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-5xl font-bold mb-4">
            {t('hello')} <span className="bg-yellow-300 px-2 py-0.5 font-bold">Vinicius Lisboa</span>
          </h1>
          <h2 className="text-4xl md:text-4xl font-black mb-12">
            {t('i_am')}
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
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md font-medium text-lg py-6 px-8" onClick={() => window.location.href = '#projects'}>
              {t('see_my_work')}
            </Button>
            <Button
              className="border-gray-300 text-gray-700 rounded-md font-medium text-lg py-6 px-8"
              variant="outline"
              onClick={() => window.location.href = '#about'}
            >
              {t('learn_more')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

