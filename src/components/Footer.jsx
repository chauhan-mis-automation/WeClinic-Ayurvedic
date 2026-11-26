import { Link } from 'react-router-dom'
import Logo from './Logo'
import { SITE } from '../config'
import { FOOTER } from '../data/ui'
import { useLang } from '../i18n/LanguageContext'

const svg = (d) => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={d} /></svg>
const SOCIALS = [
  ['facebook', 'Facebook', svg('M14 8h3V4h-3c-2.8 0-4 1.9-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6H14z')],
  ['instagram', 'Instagram', svg('M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 3.5c2.3 0 2.6 0 3.5.1 3.4.2 4.8 1.6 4.9 4.9.1.9.1 1.2.1 3.5s0 2.6-.1 3.5c-.2 3.3-1.6 4.8-4.9 4.9-.9.1-1.2.1-3.5.1s-2.6 0-3.5-.1c-3.3-.2-4.8-1.6-4.9-4.9-.1-.9-.1-1.2-.1-3.5s0-2.6.1-3.5c.2-3.3 1.6-4.8 4.9-4.9.9-.1 1.2-.1 3.5-.1z')],
  ['youtube', 'YouTube', svg('M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z')],
  ['linkedin', 'LinkedIn', svg('M6.5 8.5h-3V20h3V8.5zM5 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM20.5 13.4c0-3-1.6-5.1-4.5-5.1-1.4 0-2.4.8-2.9 1.6V8.5h-3V20h3v-6c0-1.6.6-2.8 2.2-2.8s2 1.3 2 2.9V20h3.2v-6.6z')],
]

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="site-footer">
      <div className="footer-leaf" aria-hidden="true" />
      <div className="container footer-grid">
        <div className="footer-about">
          <Logo light />
          <p>{t(FOOTER.about)}</p>
          <ul className="footer-contact">
            <li>{t(SITE.cities)}</li>
            <li>{t(SITE.hours)}</li>
            <li><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></li>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
        </div>
        {FOOTER.cols.map((col) => (
          <div key={col.title.en} className="footer-col">
            <h4>{t(col.title)}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label.en}><Link to={l.to}>{t(l.label)}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer-connect">
        <div>
          <h4>{t(FOOTER.connect)}</h4>
          <p>{t(FOOTER.connectText)}</p>
        </div>
        <div className="socials">
          {SOCIALS.map(([key, label, icon]) => {
            const url = SITE.social[key]
            if (!url) return null
            return <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>{icon}</a>
          })}
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {t(SITE.brandTM)}. {t(FOOTER.rights)}</p>
        <p className="bottom-links">
          {FOOTER.bottomLinks.map((l, i) => (
            <span key={l.to}>{i > 0 && ' · '}<Link to={l.to}>{t(l.label)}</Link></span>
          ))}
        </p>
        <p className="disclaimer">{t(FOOTER.disclaimer)}</p>
      </div>
    </footer>
  )
}
