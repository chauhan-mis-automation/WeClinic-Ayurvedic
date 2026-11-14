import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { MANAGEMENT as M } from '../data/pages'
import Reveal from '../components/Reveal'
import SmartImg from '../components/SmartImg'
import { useAppointment } from '../components/AppointmentContext'

export default function Management() {
  const { t } = useLang()
  const { openAppointment } = useAppointment()
  useEffect(() => { document.title = 'Our Management Team | Jeewan Jyoti Ayurvedic Sansthan' }, [])

  return (
    <div>
      <section className="page-hero">
        <div className="container center-text">
          <nav className="crumbs"><Link to="/">{t({ en: 'Home', hi: 'होम' })}</Link> / <Link to="/about">{t({ en: 'About', hi: 'हमारे बारे में' })}</Link> / {t(M.eyebrow)}</nav>
          <Reveal><span className="pill"><span className="dot" />{t(M.eyebrow)}</span></Reveal>
          <Reveal as="h1" className="h1" delay={80}>{t(M.title)}</Reveal>
          <Reveal as="p" className="lead" delay={140}>{t(M.intro)}</Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 50 }}>
        <div className="container">
          <Reveal className="wide-photo"><SmartImg src={M.teamImage} alt="Jeewan Jyoti leadership team" emoji="👥" /></Reveal>
          <p className="caption center-text">{t(M.teamCaption)}</p>

          <Reveal className="section-head center" style={{ marginTop: 70 }}>
            <h2 className="h2">{t(M.foundersTitle)}</h2>
          </Reveal>

          <div className="founders">
            {M.founders.map((f, i) => (
              <Reveal key={f.initials} className={`founder ${i % 2 ? 'rev' : ''}`}>
                <div className="founder-side">
                  <div className="founder-photo"><SmartImg src={f.photo} alt={t(f.name)} text={f.initials} /></div>
                  <h3>{t(f.name)}</h3>
                  <p className="founder-role">{t(f.role)}</p>
                  <span className="founder-degree">{f.degree}</span>
                  {f.linkedin && <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="link-arrow">{t(M.linkedin)} ↗</a>}
                </div>
                <div className="founder-body">
                  {f.paras.map((p) => <p className="body" key={p.en.slice(0, 30)}>{t(p)}</p>)}
                  <blockquote className="founder-quote">{t(f.quote)}</blockquote>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <Reveal className="cta-band">
          <div className="cta-band-copy">
            <h3>{t({ en: 'Consult Our Expert Doctors Today', hi: 'आज ही हमारे विशेषज्ञ डॉक्टरों से परामर्श लें' })}</h3>
            <p>{t({ en: '8 Lakh+ patients cared for across India — online consultation & medicine delivery at your doorstep.', hi: 'पूरे भारत में 8 लाख+ मरीज़ों की देखभाल — ऑनलाइन परामर्श और घर तक दवा।' })}</p>
          </div>
          <button className="btn btn-white btn-lg" onClick={openAppointment}>{t({ en: 'Book an Appointment', hi: 'अपॉइंटमेंट बुक करें' })} →</button>
        </Reveal>
      </div>
    </div>
  )
}
