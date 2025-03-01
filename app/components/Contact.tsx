"use client"

import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          {t('work_together')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <p>
            {t('send_email')}
            <a href="mailto:viniciuslisboa1001@gmail.com" className="text-gray-400 hover:text-white underline">
              {t('email')}
            </a>
          </p>
          <p>
            {t('find_me_on')}
            <a
              href="https://www.linkedin.com/in/vin%C3%ADcius-lisboa-6347971a9/"
              className="text-gray-400 hover:text-white underline"
            >
              {t('linkedin')}
            </a>
          </p>
          <p>
            {t('send_message')}
            <a href="https://wa.me/5541988073637" className="text-gray-400 hover:text-white underline">
              {t('whatsapp')}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

