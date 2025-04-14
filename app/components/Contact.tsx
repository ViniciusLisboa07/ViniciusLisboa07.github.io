"use client"

import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-8"
        >
          {t('work_together')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="text-2xl">
            {t('have_a_project_in_mind')}
          </p>

          <div className="flex justify-center">
            <form className="flex flex-col gap-4 bg-white p-8 border border-gray-200 rounded-lg w-1/2">
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="name" className="text-lg text-gray-700">{t('name')}</label>
                <input type="text" id="name" placeholder={t('name')} className="border border-gray-300 rounded-md p-2" /> 
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="email" className="text-lg text-gray-700">{t('email')}</label>
                <input type="email" id="email" placeholder={t('email')} className="border border-gray-300 rounded-md p-2" />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="message" className="text-lg text-gray-700">{t('message')}</label>
                <textarea id="message" placeholder={t('message')} className="border border-gray-300 rounded-md p-2" />
              </div>
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors inline-block mt-4">{t('send')}</button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

