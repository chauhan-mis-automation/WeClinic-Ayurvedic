import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { CONTACT as C } from '../data/pages'
import { VISIT } from '../data/home'
import { SITE } from '../config'
import Reveal from '../components/Reveal'
import LeadForm from '../components/LeadForm'

export default function Contact() {
  const { t } = useLang()
  useEffect(() => { document.title = 'Contact WeClinic Ayurveda — Kanpur & Noida Clinics' }, [])
  const q = encodeURIComponent(VISIT.mapQuery)

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs"><Link to="/">{t({ en: 'Home', hi: 'होम' })}</Link> / {t({ en: 'Contact', hi: 'संपर्क' })}</nav>
          <Reveal as="h1" className="h1">{t(C.title)}</Reveal>
          <Reveal as="p" className="lead" delay={100}>{t(C.sub)}</Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 56 }}>
        <div className="container contact-grid">
          <div className="contact-cards">
            <Reveal className="contact-card">
              <span className="vi">📍</span>
              <div><h3>{t(C.addressTitle)}</h3><p>{t(C.address)}</p><small>{t(C.noida)}</small></div>
            </Reveal>
            <Reveal className="contact-card" delay={60}>
              <span className="vi">📞</span>
              <div>
                <h3>{t(C.phonesTitle)}</h3>
                <div className="phone-list">
                  {C.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>)}
                </div>
              </div>
            </Reveal>
            <Reveal className="contact-card" delay={120}>
              <span className="vi">🕘</span>
              <div><h3>{t(C.hoursTitle)}</h3><p>{t(C.hours)}</p></div>
            </Reveal>
            <Reveal className="contact-card" delay={180}>
              <span className="vi">✉️</span>
              <div><h3>{t(C.emailTitle)}</h3><p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p></div>
            </Reveal>
            <Reveal className="contact-card rating-card" delay={240}>
              <span className="vi">⭐</span>
              <div><h3>Google</h3><p><Link to="/reviews">{t(C.reviews)}</Link></p></div>
            </Reveal>
          </div>
          <Reveal className="hero-form-wrap" variant="right">
            <LeadForm source="contact-page" title={C.formTitle} />
          </Reveal>
        </div>
        <div className="container">
          <Reveal className="visit-map contact-map">
            <iframe title="WeClinic map" src={`https://maps.google.com/maps?q=${q}&z=15&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
