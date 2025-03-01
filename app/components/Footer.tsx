"use client"

import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-black py-6 text-center">
      <p className="text-gray-400">&copy; {new Date().getFullYear()} Vinícius Lisboa. {t('all_rights_reserved')}</p>
    </footer>
  )
}
