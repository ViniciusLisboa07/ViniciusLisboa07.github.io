"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      <section id="about" className="py-20 bg-gray-100 text-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-xl text-gray-700 space-y-6"
          >
            <h2 className="text-3xl font-black mb-6">{t('about_me')}</h2>

            <p  className="mb-4" >{t('about_me_description')}</p>
            <p  className="mb-4" >{t('about_me_description_2')}</p>
            <p  className="mb-4" >{t('about_me_description_3')}</p>
            <motion.a
              href="https://drive.google.com/file/d/1aDUU9n5-bAtFSs8jtni3ShynIjzCv4vq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors inline-block mt-4"
            >
              {t('download_resume')}
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="bg-white border border-gray-200 rounded-lg shadow-xl p-6 ml-10 w-fit">
              <Image
                src="/images/vinicius.jpeg"
                alt="Vinícius Lisboa"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

