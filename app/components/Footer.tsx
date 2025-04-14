"use client"

import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-black py-6 text-center">
      <p className="text-gray-400">&copy; {new Date().getFullYear()} Vinícius Lisboa. {t('all_rights_reserved')}</p>

      <div className="flex justify-center gap-4">
        <a href="https://www.linkedin.com/in/vin%C3%ADcius-lisboa-6347971a9/" className="text-gray-400 hover:text-white underline">
          {t('linkedin')}
        </a>
        <a href="https://wa.me/5541988073637" className="text-gray-400 hover:text-white underline">
          {t('whatsapp')}
        </a>
        <a href="https://github.com/ViniciusLisboa07" className="text-gray-400 hover:text-white underline">
          {t('github')}
        </a>
      </div>
    </footer>
  )
}
