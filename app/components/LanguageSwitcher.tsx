import { useTranslation } from 'react-i18next'
import i18next from '../../i18n'
import { useHydrated } from '@/lib/useHydrated'

const languages = ['en', 'pt']

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const hydrated = useHydrated()
  const current = hydrated ? i18n.language?.slice(0, 2) : undefined

  const changeLanguage = (lng: string) => {
    try {
      i18next.changeLanguage(lng)
    } catch (error) {
      console.error('Error changing language:', error)
    }
  }

  return (
    <div className="inline-flex items-center gap-1 font-mono text-xs">
      {languages.map((lng, i) => (
        <span key={lng} className="inline-flex items-center gap-1">
          {i > 0 && <span className="text-ink/30">/</span>}
          <button
            onClick={() => changeLanguage(lng)}
            aria-pressed={current === lng}
            className={`uppercase transition-colors ${
              current === lng ? "text-ink underline underline-offset-4" : "text-ink-muted hover:text-ink"
            }`}
          >
            {lng}
          </button>
        </span>
      ))}
    </div>
  )
}
