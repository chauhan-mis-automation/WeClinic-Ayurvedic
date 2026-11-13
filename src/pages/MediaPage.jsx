import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import MediaMentions from '../components/MediaMentions'
import { Awards } from '../components/HomeSections'

export default function MediaPage() {
  const { t } = useLang()
  useEffect(() => { document.title = 'Media Mentions & Awards | WeClinic Ayurveda' }, [])
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs"><Link to="/">{t({ en: 'Home', hi: 'होम' })}</Link> / {t({ en: 'Media', hi: 'मीडिया' })}</nav>
          <h1 className="h1">{t({ en: 'Media Mentions & Awards', hi: 'मीडिया और सम्मान' })}</h1>
        </div>
      </section>
      <MediaMentions />
      <Awards />
    </div>
  )
}
