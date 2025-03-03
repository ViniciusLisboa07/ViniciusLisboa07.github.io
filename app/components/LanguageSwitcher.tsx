import { useTranslation } from 'react-i18next'
import i18next from '../../i18n'

export default function LanguageSwitcher() {
  const { t } = useTranslation()

  const changeLanguage = (lng: string) => {
    try {
      i18next.changeLanguage(lng)
      console.log(`Language changed to ${lng}`)
    } catch (error) {
      console.error('Error changing language:', error)
    }
  }

  return (
    <div className="flex space-x-2">
      <button 
        className="px-2 py-1 rounded hover:bg-gray-700 transition-colors"
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button 
        className="px-2 py-1 rounded hover:bg-gray-700 transition-colors"
        onClick={() => changeLanguage('pt')}
      >
        PT
      </button>
    </div>
  )
}
