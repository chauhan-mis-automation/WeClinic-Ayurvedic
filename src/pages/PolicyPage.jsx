import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

const LOADERS = {
  terms: () => import('../data/policies/terms'),
  privacy: () => import('../data/policies/privacy'),
  refund: () => import('../data/policies/refund'),
}

export default function PolicyPage({ name }) {
  const { t } = useLang()
  const [doc, setDoc] = useState(null)
  useEffect(() => { setDoc(null); LOADERS[name]().then((m) => setDoc(m.default)) }, [name])
  useEffect(() => { if (doc) document.title = `${doc.title.en} | Jeewan Jyoti Ayurvedic Sansthan` }, [doc])
  if (!doc) return <div className="page-loading"><span className="spinner" /></div>

  // consecutive li -> ul
  const parts = []
  doc.blocks.forEach((b) => {
    if (b.li) {
      const last = parts[parts.length - 1]
      if (last && last.ul) last.ul.push(b.li)
      else parts.push({ ul: [b.li] })
    } else parts.push(b)
  })

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs"><Link to="/">{t({ en: 'Home', hi: 'होम' })}</Link> / {t(doc.title)}</nav>
          <h1 className="h1">{t(doc.title)}</h1>
          <p className="lead" style={{ margin: '10px 0 0' }}>{t({ en: 'This document is available in English.', hi: 'यह दस्तावेज़ अंग्रेज़ी में उपलब्ध है।' })}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 50 }}>
        <div className="container policy">
          {parts.map((b, i) =>
            b.h ? <h2 key={i}>{b.h}</h2>
              : b.ul ? <ul key={i}>{b.ul.map((x, j) => <li key={j}>{x}</li>)}</ul>
                : <p key={i}>{b.p}</p>
          )}
        </div>
      </section>
    </div>
  )
}
