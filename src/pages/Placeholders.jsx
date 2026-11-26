// Abhi ke liye simple pages — content aane par har page alag file mein banega.
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { ALL_CONDITIONS } from '../data/departments'
import LeadForm from '../components/LeadForm'
import Reveal from '../components/Reveal'
import DepartmentsExplorer from '../components/DepartmentsExplorer'
import { CtaBand } from './Home'
import DiseasePage from './DiseasePage'
import { DISEASE_LOADERS } from '../data/diseases'

function PageHero({ title, sub, crumbs = [] }) {
  const { t } = useLang()
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">{t({ en: 'Home', hi: 'होम' })}</Link>
          {crumbs.map((c) => <span key={c}> / {c}</span>)}
        </nav>
        <h1 className="h1">{title}</h1>
        {sub && <p className="lead">{sub}</p>}
      </div>
    </section>
  )
}

export function DiseasesPage() {
  const { t } = useLang()
  const title = t({ en: 'Ayurvedic Departments & Diseases We Treat', hi: 'आयुर्वेदिक विभाग और रोग जिनका हम उपचार करते हैं' })
  return (
    <>
      <PageHero title={title} crumbs={[t({ en: 'Diseases', hi: 'रोग' })]} />
      <DepartmentsExplorer />
      <CtaBand />
    </>
  )
}

export function DiseaseDetail() {
  const { slug } = useParams()
  const { t } = useLang()
  const c = ALL_CONDITIONS.find((x) => x.slug === slug)
  const [loaded, setLoaded] = useState({ slug: null, data: null })

  useEffect(() => {
    const load = DISEASE_LOADERS[slug]
    if (!load) return
    let alive = true
    load().then((m) => { if (alive) setLoaded({ slug, data: m.default }) })
    return () => { alive = false }
  }, [slug])

  if (DISEASE_LOADERS[slug]) {
    if (loaded.slug !== slug) return <div className="page-loading"><span className="spinner" /></div>
    return <DiseasePage key={slug} d={loaded.data} />
  }
  if (!c) return <NotFound />
  return (
    <>
      <PageHero
        title={`${t(c.name)} — ${t({ en: 'Ayurvedic Treatment', hi: 'आयुर्वेदिक उपचार' })}`}
        sub={t(c.desc)}
        crumbs={[t({ en: 'Diseases', hi: 'रोग' }), t(c.dept.name), t(c.name)]}
      />
      <section className="section">
        <div className="container split">
          <Reveal className="soon-card">
            <span className="soon-emoji">{c.icon}</span>
            <h2 className="h3">{t({ en: 'Detailed page coming soon', hi: 'पूरा पेज जल्द आ रहा है' })}</h2>
            <p className="body">{t({ en: 'Talk to our doctor for a free, private consultation about your condition.', hi: 'अपनी समस्या के बारे में फ्री और गोपनीय परामर्श के लिए हमारे डॉक्टर से बात करें।' })}</p>
            <Link to="/diseases" className="link-arrow">← {t({ en: 'All conditions', hi: 'सभी रोग' })}</Link>
          </Reveal>
          <Reveal className="hero-form-wrap" variant="right"><LeadForm source={`disease-${slug}`} /></Reveal>
        </div>
      </section>
    </>
  )
}

export function ComingSoon({ title }) {
  const { t } = useLang()
  return (
    <>
      <PageHero title={t(title)} crumbs={[t(title)]} />
      <section className="section">
        <div className="container split">
          <Reveal className="soon-card">
            <span className="soon-emoji"></span>
            <h2 className="h3">{t({ en: 'This page is being prepared', hi: 'यह पेज तैयार हो रहा है' })}</h2>
            <p className="body">{t({ en: 'Meanwhile, book a free consultation and our expert will call you back.', hi: 'तब तक फ्री परामर्श बुक करें, हमारे विशेषज्ञ आपको कॉल करेंगे।' })}</p>
            <Link to="/" className="link-arrow">← {t({ en: 'Back to Home', hi: 'होम पर जाएं' })}</Link>
          </Reveal>
          <Reveal className="hero-form-wrap" variant="right"><LeadForm source={`page-${title.en}`} /></Reveal>
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  return <ComingSoon title={{ en: 'Page not found', hi: 'पेज नहीं मिला' }} />
}
