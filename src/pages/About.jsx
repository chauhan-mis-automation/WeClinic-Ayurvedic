import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { ABOUT } from '../data/pages'
import Reveal from '../components/Reveal'
import SmartImg from '../components/SmartImg'
import CountUp from '../components/CountUp'
import { useAppointment } from '../components/AppointmentContext'
import { useEffect } from 'react'

function Stat({ v, l }) {
  const { t } = useLang()
  const m = v.match(/^(\d+)(.*)$/)
  return (
    <div className="why-stat">
      <b>{m ? <CountUp to={+m[1]} suffix={m[2]} /> : v}</b>
      <span>{t(l)}</span>
    </div>
  )
}

export default function About() {
  const { t } = useLang()
  const { openAppointment } = useAppointment()
  const A = ABOUT
  useEffect(() => { document.title = 'About Jeewan Jyoti Ayurvedic Sansthan | Clinics in Kanpur & Noida' }, [])

  return (
    <div className="about">
      <section className="page-hero about-hero">
        <div className="container about-hero-grid">
          <div>
            <nav className="crumbs"><Link to="/">{t({ en: 'Home', hi: 'होम' })}</Link> / {t(A.eyebrow)}</nav>
            <Reveal><span className="pill"><span className="dot pulse" />{t(A.eyebrow)}</span></Reveal>
            <Reveal as="h1" className="h1 about-title" delay={80}>{t(A.title1)}<span className="text-grad">{t(A.title2)}</span></Reveal>
            <Reveal as="p" className="lead" delay={140}>{t(A.intro)}</Reveal>
          </div>
          <Reveal className="about-hero-photo" variant="right">
            <div className="photo-frame"><SmartImg src={A.images.hero} alt="Jeewan Jyoti clinic, Panki, Kanpur" emoji="🏥" /></div>
            <p className="caption">{t(A.heroCaption)}</p>
          </Reveal>
        </div>
      </section>

      <section className="why">
        <div className="why-pattern" aria-hidden="true" />
        <div className="container why-grid">
          {A.stats.map((s, i) => <Reveal key={s.v} delay={i * 90}><Stat {...s} /></Reveal>)}
        </div>
      </section>

      <section className="section">
        <div className="container welcome-grid">
          <Reveal className="welcome-media" variant="left">
            <div className="photo-frame"><SmartImg src={A.images.doctors} alt="Jeewan Jyoti doctors" emoji="👩‍⚕️" /></div>
          </Reveal>
          <div>
            <Reveal className="eyebrow-bar">{t(A.who.eyebrow)}</Reveal>
            <Reveal as="h2" className="h2">{t(A.who.title)}</Reveal>
            <Reveal as="p" className="body">{t(A.who.p1)}</Reveal>
            <Reveal as="p" className="body">{t(A.who.p2)}</Reveal>
            <ul className="check-list">
              {A.who.points.map((p, i) => <Reveal as="li" key={p.en} delay={i * 50}><span className="tick">✓</span>{t(p)}</Reveal>)}
            </ul>
            <Reveal as="p" className="body">{t(A.who.p3)}</Reveal>
          </div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container story-wrap">
          <Reveal className="story-card">
            <span className="eyebrow eyebrow-orange">{t(A.story.eyebrow)}</span>
            <h2 className="h2">{t(A.story.title)}</h2>
            <p className="body">{t(A.story.p1)}</p>
            <p className="body">{t(A.story.p2)}</p>
            <Link to="/management" className="link-arrow">{t(A.story.link)} →</Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="pill"><span className="dot" />{t(A.team.eyebrow)}</span>
            <h2 className="h2">{t(A.team.title)}</h2>
            <p className="lead">{t(A.team.p)}</p>
          </Reveal>
          <Reveal className="wide-photo">
            <SmartImg src={A.images.team} alt="Jeewan Jyoti team" emoji="🤝" />
          </Reveal>
          <p className="caption center-text">{t(A.team.caption)}</p>
        </div>
      </section>

      <section className="section about-culture">
        <div className="container welcome-grid">
          <div>
            <Reveal className="eyebrow-bar">{t(A.culture.eyebrow)}</Reveal>
            <Reveal as="h2" className="h2">{t(A.culture.title)}</Reveal>
            <Reveal as="p" className="body">{t(A.culture.p1)}</Reveal>
            <Reveal as="p" className="body">{t(A.culture.p2)}</Reveal>
          </div>
          <Reveal className="welcome-media" variant="right">
            <div className="photo-frame"><SmartImg src={A.images.culture} alt="Life at Jeewan Jyoti" emoji="🎉" /></div>
          </Reveal>
        </div>
      </section>

      <div className="container">
        <Reveal className="cta-band">
          <div className="cta-band-copy">
            <h3>{t(A.cta.title)}</h3>
            <p>{t(A.cta.text)}</p>
          </div>
          <button className="btn btn-white btn-lg" onClick={openAppointment}>{t({ en: 'Book an Appointment', hi: 'अपॉइंटमेंट बुक करें' })} →</button>
        </Reveal>
      </div>
    </div>
  )
}
