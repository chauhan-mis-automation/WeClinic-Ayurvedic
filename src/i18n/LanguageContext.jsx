import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const LangCtx = createContext(null)
const KEY = 'wc_lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem(KEY) || 'en' } catch { return 'en' }
  })

  useEffect(() => {
    try { localStorage.setItem(KEY, lang) } catch { /* ignore */ }
    document.documentElement.lang = lang
  }, [lang])

  // t({en:'..', hi:'..'}) -> current language text; plain strings pass through
  const t = useCallback((v) => {
    if (v == null) return ''
    if (typeof v === 'string' || typeof v === 'number') return v
    return v[lang] ?? v.en ?? ''
  }, [lang])

  const toggle = () => setLang((l) => (l === 'en' ? 'hi' : 'en'))

  return <LangCtx.Provider value={{ lang, setLang, toggle, t }}>{children}</LangCtx.Provider>
}

export const useLang = () => useContext(LangCtx)
