import "./globals.css"
import '../i18n'
import { useEffect } from 'react'
import i18next from '../i18n'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // console.log('i18n initialized:', i18next)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
