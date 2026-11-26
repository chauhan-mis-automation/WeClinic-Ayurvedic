// Piles - Fistula - Fissure ads landing page (Facebook/Google ads ke liye)
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { SITE } from '../config'
import { LP } from '../data/landing-piles'
import { DISEASE_LOADERS } from '../data/diseases'
import Reveal from '../components/Reveal'
import SmartImg from '../components/SmartImg'
import LeadForm from '../components/LeadForm'
import VideoGallery from '../components/VideoGallery'
import { LP_STORY_VIDEOS, LP_INFO_VIDEOS } from '../data/videos'
import MediaMentions from '../components/MediaMentions'
import { PhoneIcon } from '../components/CallBar'

function CallButton({ big }) {
  const { t } = useLang()
  return (
    <a className={`call-pill ${big ? 'big' : ''}`} href={`tel:${SITE.phone}`}>
      <span className="call-pill-icon ring"><PhoneIcon /></span>{t({ en: 'Call now', hi: 'अभी कॉल करें' })}
    </a>
  )
}

function Online() {
  const { t } = useLang()
  return <p className="lp-online"><span className="online-dot" /> {t(LP.treat.online)}</p>
}

export default function PilesLanding() {
  const { t, setLang } = useLang()
  useEffect(() => { document.title = 'Piles, Fistula & Fissure Ayurvedic Treatment | Jeewan Jyoti Ayurvedic Sansthan' }, [])
  // Ads landing page Hindi mein khule (URL mein ?lang=en ho to English)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('lang')
    setLang(q === 'en' ? 'en' : 'hi')
  }, [setLang])
  const H = LP.hero, O = LP.offer

  return (
    <div className="lp">
      {/* 1. Yellow hero */}
      <section className="lp-hero">
        <div className="container lp-hero-grid">
          <div className="lp-hero-copy">
            <Reveal as="h1" className="lp-title">{t(H.title)}</Reveal>
            <Reveal as="p" className="lp-sub" delay={80}>{t(H.sub)}</Reveal>
            <Reveal delay={140}><CallButton big /></Reveal>
            <Reveal className="lp-badges" delay={200}>
              <span>{t({ en: '100% confidential', hi: '100% गोपनीय' })}</span>
              <span>{t({ en: 'Free home delivery', hi: 'फ्री होम डिलीवरी' })}</span>
              <span>{t({ en: 'Free diet chart', hi: 'फ्री डाइट चार्ट' })}</span>
            </Reveal>
          </div>
          <Reveal className="hero-form-wrap" id="hero-form" variant="right">
            <LeadForm source="landing-piles" showBadge={false} title={H.formTitle} sub={H.privacy} symptoms={H.symptoms} submitLabel={H.submit} concernPrefix="Piles/Fistula/Fissure" />
          </Reveal>
        </div>
      </section>

      {/* 2. Offer */}
      <section className="section">
        <div className="container welcome-grid">
          <Reveal className="welcome-media" variant="left">
            <div className="photo-frame"><SmartImg src={O.image} alt="Jeewan Jyoti clinic" emoji="" /></div>
          </Reveal>
          <div>
            <Reveal className="eyebrow-bar">{t(O.kicker)}</Reveal>
            <Reveal as="h2" className="h2">{t(O.title1)}<span className="text-grad">{O.price}</span></Reveal>
            <Reveal className="lp-rating">
              <b>{O.rating}</b><span className="stars">★★★★★</span><span>{O.ratings} {t({ en: 'Ratings', hi: 'रेटिंग' })}</span>
            </Reveal>
            <p className="lp-recommend">{t(O.recommend)}</p>
            <ul className="lp-points">
              {O.points.map((p, i) => <Reveal as="li" key={p.en} delay={i * 40}><span className="tick">✓</span>{t(p)}</Reveal>)}
            </ul>
            <Online />
            <CallButton />
          </div>
        </div>
      </section>

      {/* 3. What we treat */}
      <section className="section lp-treat">
        <div className="container">
          <Reveal className="section-head center"><h2 className="h2">{t(LP.treat.title)}</h2></Reveal>
          <div className="lp-treat-grid lp-treat-v2">
            {LP.treat.items.map((it, i) => {
              const inner = (
                <>
                  <div className="lp-treat-img"><SmartImg src={it.img} alt={t(it.name)} emoji={it.icon} /></div>
                  <h3><span className="lp-check" aria-hidden="true">✓</span>{t(it.name)}</h3>
                  <p>{t(it.text)}</p>
                </>
              )
              return (
                <Reveal key={it.img} delay={(i % 2) * 80}>
                  {it.slug && DISEASE_LOADERS[it.slug]
                    ? <Link to={`/disease/${it.slug}`} className="lp-treat-card">{inner}</Link>
                    : <div className="lp-treat-card">{inner}</div>}
                </Reveal>
              )
            })}
            <Reveal className="lp-treat-card lp-online-card" delay={80}>
              <div className="lp-online-doc">
                <SmartImg src="/images/call-doctor.png" alt="" emoji="" />
                <span className="online-dot" />
              </div>
              <h3>{t({ en: 'Doctors are online', hi: 'डॉक्टर ऑनलाइन हैं' })}</h3>
              <CallButton />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Videos — patient stories */}
      <VideoGallery data={LP_STORY_VIDEOS} className="vg-tint" />

      {/* 4. Plan */}
      <section className="section dz-plan">
        <div className="container welcome-grid">
          <Reveal className="photo-frame plan-photo" variant="left"><SmartImg src={LP.plan.image} alt="Jeewan Jyoti doctors team" emoji="" /></Reveal>
          <div>
            <Reveal className="eyebrow-bar">{t(LP.plan.title)}</Reveal>
            <Reveal as="h2" className="h2">{t(LP.plan.sub)}</Reveal>
            <ol className="plan-steps">
              {LP.plan.steps.map((s, i) => (
                <Reveal as="li" key={s.en} delay={i * 70}><span className="plan-num">{i + 1}</span><span><b>Step {i + 1}:</b> {t(s)}</span></Reveal>
              ))}
            </ol>
            <Online />
            <CallButton />
          </div>
        </div>
      </section>

      {/* 5. Why choose */}
      <section className="section dz-why">
        <div className="container">
          <Reveal className="section-head center"><h2 className="h2">{t(LP.why.title)}</h2></Reveal>
          <div className="type-grid four">
            {LP.why.items.map((c, i) => (
              <Reveal key={c.icon} className="type-card" delay={i * 80}>
                <span className="type-icon">{c.icon}</span><h3>{t(c.name)}</h3><p>{t(c.text)}</p>
              </Reveal>
            ))}
          </div>
          <div className="center-row"><CallButton big /></div>
        </div>
      </section>

      {/* Videos — treatment info */}
      <VideoGallery data={LP_INFO_VIDEOS} />

      {/* 6. Media */}
      <MediaMentions />

      {/* 7. Treatment kits */}
      <section className="section lp-kits">
        <div className="container">
          {LP.kits.items.map((k, i) => (
            <Reveal key={k.title.en} className={`lp-kit ${i % 2 ? 'rev' : ''}`}>
              <div className="lp-kit-img"><SmartImg src={LP.kits.image} alt={t(k.title)} emoji="" /></div>
              <div>
                <h2 className="h3">{t(k.title)}</h2>
                <p className="body">{t(LP.kits.text).replace('{name}', t(k.name))}</p>
                <a href="#hero-form" className="btn btn-primary">{t({ en: 'Book Free Consultation', hi: 'फ्री परामर्श बुक करें' })} →</a>
              </div>
            </Reveal>
          ))}
          <div className="dz-note">{t(LP.kits.note)}</div>
        </div>
      </section>
    </div>
  )
}
