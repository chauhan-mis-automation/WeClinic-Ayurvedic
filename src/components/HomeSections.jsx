// Home page ke neeche wale sections: Not sure banner, Built Around You, Awards, Visit Us, FAQ
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { SITE } from '../config'
import { NOT_SURE, BUILT, AWARDS, VISIT, FAQ } from '../data/home'
import { UI } from '../data/ui'
import Reveal from './Reveal'
import { PhoneIcon } from './CallBar'
import { useAppointment } from './AppointmentContext'

// Photo na mile to sundar placeholder
function Photo({ src, alt, emoji, className = '' }) {
  const [ok, setOk] = useState(true)
  if (ok) return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setOk(false)} />
  return <div className={`photo-fallback ${className}`} aria-hidden="true"><span>{emoji}</span></div>
}

export function NotSureBand() {
  const { t } = useLang()
  return (
    <div className="container">
      <Reveal className="notsure">
        <div className="notsure-copy">
          <h3>{t(NOT_SURE.title)}</h3>
          <p>{t(NOT_SURE.text)}</p>
        </div>
        <div className="notsure-actions">
          <Link to="/diseases" className="btn btn-outline-light">{t(NOT_SURE.dept)} <span className="arrow">→</span></Link>
          <a href={`tel:${SITE.phone}`} className="btn btn-primary"><span className="ring"><PhoneIcon size={18} /></span> {t(NOT_SURE.call)} {SITE.phoneDisplay}</a>
        </div>
      </Reveal>
    </div>
  )
}

export function BuiltAroundYou() {
  const { t } = useLang()
  return (
    <section className="section built">
      <div className="container">
        <Reveal className="section-head center">
          <span className="pill"><span className="dot" />{t(BUILT.pill)}</span>
          <h2 className="h2">{t(BUILT.title1)}<span className="text-grad">{t(BUILT.title2)}</span></h2>
          <p className="lead">{t(BUILT.sub)}</p>
        </Reveal>
        <div className="built-grid">
          {BUILT.cards.map((c, i) => (
            <Reveal key={c.img} className="built-card" delay={i * 120}>
              <div className="built-media">
                <Photo src={c.img} alt={t(c.title)} emoji={c.emoji} />
                <span className="built-badge">{c.badgeIcon} {t(c.badge)}</span>
              </div>
              <div className="built-body">
                <h3>{t(c.title)}</h3>
                <p>{t(c.text)}</p>
                <ul>
                  {c.points.map((p) => <li key={p.en}><span className="tick">✓</span>{t(p)}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Awards() {
  const { t } = useLang()
  return (
    <section className="section awards">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow eyebrow-orange">{t(AWARDS.eyebrow)}</span>
          <h2 className="h2">{t(AWARDS.title)}</h2>
          <p className="lead">{t(AWARDS.sub)}</p>
        </Reveal>
        <div className="awards-grid">
          {AWARDS.items.map((a, i) => (
            <Reveal key={a.img} className="award-card" delay={(i % 4) * 100}>
              <div className="award-media">
                <Photo src={a.img} alt={t(a.title)} emoji="🏆" />
                <span className="award-ribbon">🏆</span>
              </div>
              <div className="award-body">
                <h3>{t(a.title)}</h3>
                <p>{t(a.text)}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {AWARDS.closingTitle && (
          <Reveal className="awards-closing">
            <h3>🏆 {t(AWARDS.closingTitle)}</h3>
            <p>{t(AWARDS.closingText)}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export function VisitUs() {
  const { t } = useLang()
  const { openAppointment } = useAppointment()
  const q = encodeURIComponent(VISIT.mapQuery)
  return (
    <section className="section visit">
      <div className="container visit-grid">
        <Reveal className="visit-copy" variant="left">
          <h2 className="h2">{t(VISIT.title)}</h2>
          <ul className="visit-list">
            <li><span className="vi">📍</span>{t(VISIT.address)}</li>
            <li><span className="vi">🕘</span>{t(VISIT.hours)}</li>
            <li><span className="vi">📞</span><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></li>
          </ul>
          <div className="visit-actions">
            <a href={`tel:${SITE.phone}`} className="btn btn-primary btn-lg"><span className="ring"><PhoneIcon size={18} /></span> {t(UI.callNow)}</a>
            <button className="btn btn-ghost btn-lg" onClick={openAppointment}>{t(VISIT.book)}</button>
          </div>
        </Reveal>
        <Reveal className="visit-map" variant="right">
          <iframe
            title="Jeewan Jyoti map"
            src={`https://maps.google.com/maps?q=${q}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  )
}

export function Faq() {
  const { t } = useLang()
  const [open, setOpen] = useState(0)
  return (
    <section className="section faq">
      <div className="container faq-wrap">
        <Reveal className="section-head center">
          <span className="eyebrow eyebrow-orange">{t(FAQ.eyebrow)}</span>
          <h2 className="h2">{t(FAQ.title)}</h2>
          <p className="lead">{t(FAQ.sub)}</p>
        </Reveal>
        <div className="faq-list">
          {FAQ.items.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q.en} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span>{t(f.q)}</span>
                  <span className="faq-icon" aria-hidden="true">+</span>
                </button>
                <div className="faq-a"><div><p>{t(f.a)}</p></div></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
