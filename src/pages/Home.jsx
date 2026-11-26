import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { SITE } from '../config'
import { HERO, TRUST, WELCOME, WHY, CTA_BAND } from '../data/home'
import { UI } from '../data/ui'
import LeadForm from '../components/LeadForm'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import DepartmentsExplorer from '../components/DepartmentsExplorer'
import { PhoneIcon } from '../components/CallBar'
import VideoGallery from '../components/VideoGallery'
import { HOME_VIDEOS } from '../data/videos'
import { NotSureBand, BuiltAroundYou, Awards, VisitUs, Faq } from '../components/HomeSections'

function Hero() {
  const { t } = useLang()
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
        <span className="leaf l1"></span><span className="leaf l2"></span><span className="leaf l3"></span>
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal><span className="pill"><span className="dot pulse" />{t(HERO.pill)}</span></Reveal>
          <Reveal as="h1" className="hero-title" delay={80}>
            <span className="t1">{t(HERO.h1a)}</span>
            <span className="t2 text-grad">{t(HERO.h1b)}</span>
          </Reveal>
          <Reveal as="p" className="hero-text" delay={160}>{t(HERO.text)}</Reveal>
          <Reveal className="hero-ctas" delay={240}>
            <a href="#hero-form" className="btn btn-primary btn-lg btn-glow">{t(HERO.cta)} <span className="arrow">→</span></a>
            <a href={`tel:${SITE.phone}`} className="talk">
              <span className="talk-icon ring"><PhoneIcon size={20} /></span>
              <span><small>{t(HERO.talk)}</small><b>{SITE.phoneDisplay}</b></span>
            </a>
          </Reveal>
          <Reveal className="hero-stats" delay={320}>
            {HERO.stats.map((s) => (
              <div key={s.value} className="hero-stat"><b>{s.value}</b><span>{t(s.label)}</span></div>
            ))}
          </Reveal>
        </div>
        <Reveal className="hero-form-wrap" id="hero-form" variant="right" delay={150}>
          <LeadForm source="home-hero" />
        </Reveal>
      </div>
    </section>
  )
}

function TrustStrip() {
  const { t } = useLang()
  return (
    <div className="trust">
      <div className="container trust-row">
        {TRUST.map((x, i) => {
          const inner = <><span className="trust-ic">{x.icon}</span>{t(x.label)}</>
          return (
            <Reveal key={x.icon} delay={i * 80} className="trust-item">
              {x.to ? <Link to={x.to} className="trust-link">{inner}</Link> : inner}
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}

function ClinicPhoto() {
  const [ok, setOk] = useState(true)
  if (ok) return <img src="/images/clinic.webp" alt="Jeewan Jyoti clinic" onError={() => setOk(false)} loading="lazy" />
  return null
}

function Welcome() {
  const { t } = useLang()
  return (
    <section className="section welcome">
      <div className="container welcome-grid">
        <Reveal className="welcome-media" variant="left">
          <div className="photo-frame"><ClinicPhoto /></div>
          <div className="float-card fc1"><b>8 Lakh+</b><span>{t(HERO.stats[0].label)}</span></div>
          <div className="float-card fc2"><span className="online-dot" /> {t({ en: 'Doctors online now', hi: 'डॉक्टर अभी ऑनलाइन' })}</div>
        </Reveal>
        <div className="welcome-copy">
          <Reveal className="eyebrow-bar">{t(WELCOME.eyebrow)}</Reveal>
          <Reveal as="h2" className="h2" delay={80}>{t(WELCOME.title)}</Reveal>
          <Reveal as="p" className="body" delay={140}>{t(WELCOME.p1)}</Reveal>
          <Reveal as="p" className="body" delay={180}>{t(WELCOME.p2)}</Reveal>
          <ul className="check-list">
            {WELCOME.points.map((p, i) => (
              <Reveal as="li" key={p.en} delay={i * 50}><span className="tick">✓</span>{t(p)}</Reveal>
            ))}
          </ul>
          <Reveal><Link to="/diseases" className="link-arrow">{t(WELCOME.linkText)} →</Link></Reveal>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const { t, lang } = useLang()
  return (
    <section className="why">
      <div className="why-pattern" aria-hidden="true" />
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">{t(WHY.eyebrow)}</span>
          <h2 className="h2 light">{t(WHY.title)}</h2>
          <p className="lead light">{t(WHY.sub)}</p>
        </Reveal>
        <div className="why-grid">
          {WHY.stats.map((s, i) => (
            <Reveal key={s.label.en} className="why-stat" delay={i * 100}>
              <b><CountUp to={s.num} suffix={lang === 'hi' && s.suffixHi ? s.suffixHi : s.suffix} /></b>
              <span>{t(s.label)}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBand() {
  const { t } = useLang()
  return (
    <section className="container">
      <Reveal className="cta-band">
        <div className="cta-band-copy">
          <h3>{t(CTA_BAND.title)}</h3>
          <p>{t(CTA_BAND.text)}</p>
        </div>
        <a className="call-pill big" href={`tel:${SITE.phone}`}>
          <span className="call-pill-icon ring"><PhoneIcon /></span>{t(UI.callNow)}
        </a>
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Welcome />
      <WhyUs />
      <VideoGallery data={HOME_VIDEOS} />
      <DepartmentsExplorer />
      <NotSureBand />
      <BuiltAroundYou />
      <Awards />
      <VisitUs />
      <Faq />
    </>
  )
}
