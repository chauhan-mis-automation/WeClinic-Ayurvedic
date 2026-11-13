import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

// Logo (SVG). Asli logo file aaye to yahan <img> laga denge.
export default function Logo({ light = false, onClick }) {
  const { lang } = useLang()
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} onClick={onClick} aria-label="WeClinic Ayurveda home">
      <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
        <path d="M10 42c0-15 11-26 24-28-2 13-9 26-24 28z" fill="#22c55e" />
        <path d="M54 42c0-15-11-26-24-28 2 13 9 26 24 28z" fill="#f97316" />
        <circle cx="32" cy="47" r="6.5" fill="#facc15" />
      </svg>
      <span className="logo-text">
        <b>WeClinic</b>
        <small>{lang === 'hi' ? 'आयुर्वेद' : 'Ayurveda'}</small>
      </span>
    </Link>
  )
}
