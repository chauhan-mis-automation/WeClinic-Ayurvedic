import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { REVIEWS, REVIEW_STATS as S, VIDEOS, YOUTUBE_CHANNEL } from '../data/reviews'
import Reveal from '../components/Reveal'
import LeadForm from '../components/LeadForm'

const Stars = ({ n = 5 }) => <span className="stars">{'★'.repeat(n)}<span className="stars-off">{'★'.repeat(5 - n)}</span></span>

export default function Reviews() {
  const { t } = useLang()
  const [filter, setFilter] = useState('All')
  const [q, setQ] = useState('')
  useEffect(() => { document.title = 'Patient Reviews — 4.6★ | Jeewan Jyoti Ayurvedic Sansthan' }, [])

  const list = useMemo(() => REVIEWS.filter((r) =>
    (filter === 'All' || r.platform === filter) &&
    (!q || (r.text + ' ' + r.tag).toLowerCase().includes(q.toLowerCase()))
  ), [filter, q])

  return (
    <div>
      <section className="page-hero">
        <div className="container rv-hero">
          <div>
            <nav className="crumbs"><Link to="/">{t({ en: 'Home', hi: 'होम' })}</Link> / {t({ en: 'Reviews', hi: 'समीक्षाएं' })}</nav>
            <span className="pill"><span className="dot pulse" />{S.total}+ {t({ en: 'Patient Ratings', hi: 'मरीज़ रेटिंग' })} · {S.avg}★</span>
            <h1 className="h1" style={{ marginTop: 14 }}>{t({ en: 'What Patients Say About ', hi: 'मरीज़ जीवन ज्योति के बारे में ' })}<span className="text-grad">Jeewan Jyoti</span>{t({ en: '', hi: ' क्या कहते हैं' })}</h1>
            <p className="lead" style={{ marginLeft: 0 }}>{t({ en: 'Genuine reviews from Google & JustDial. We show critical reviews too, so you get the full picture.', hi: 'गूगल और जस्टडायल से असली रिव्यू। हम आलोचनात्मक रिव्यू भी दिखाते हैं, ताकि आपको पूरी तस्वीर मिले।' })}</p>
          </div>
          <Reveal className="rv-score" variant="right">
            <b>{S.avg}</b><Stars />
            <span>{S.total} {t({ en: 'ratings across Google & JustDial', hi: 'रेटिंग, गूगल और जस्टडायल पर' })}</span>
            <div className="rv-bars">
              {S.split.map(([s, p]) => (
                <div key={s} className="rv-bar"><span>{s}★</span><i><em style={{ width: `${p}%` }} /></i><small>{p}%</small></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 50 }}>
        <div className="container">
          <div className="rv-platforms">
            {[['Google', 'G', S.google], ['JustDial', 'JD', S.justdial]].map(([n, ic, p]) => (
              <a key={n} href={p.url} target="_blank" rel="noopener noreferrer" className="rv-platform">
                <span className="rv-ic">{ic}</span>
                <div><b>{n} {t({ en: 'Reviews', hi: 'रिव्यू' })}</b><span><Stars /> {p.avg} / 5 · {p.count}</span></div>
                <span className="link-arrow">{t({ en: 'View', hi: 'देखें' })} ↗</span>
              </a>
            ))}
          </div>

          <div className="rv-tools">
            <div className="rv-tabs">
              {['All', 'Google', 'JustDial'].map((f) => (
                <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>{f === 'All' ? t({ en: 'All', hi: 'सभी' }) : f}</button>
              ))}
            </div>
            <input className="rv-search" placeholder={t({ en: 'Search e.g. sciatica, migraine, delivery', hi: 'खोजें जैसे साइटिका, माइग्रेन, डिलीवरी' })} value={q} onChange={(e) => setQ(e.target.value)} />
          </div>

          <div className="rv-grid">
            {list.map((r, i) => (
              <Reveal key={r.name + i} className="rv-card" delay={(i % 3) * 60}>
                <div className="rv-head">
                  <span className="rv-avatar">{r.name[0]}</span>
                  <div><b>{r.name}</b><small>{r.ago} · {r.platform}</small></div>
                </div>
                <Stars n={r.stars} />
                <p>{r.text}</p>
                {r.tag && <span className="rv-tag">{r.tag}</span>}
              </Reveal>
            ))}
            {!list.length && <p className="body">{t({ en: 'No reviews match your search.', hi: 'आपकी खोज से कोई रिव्यू नहीं मिला।' })}</p>}
          </div>

          <Reveal className="rv-videos">
            <h2 className="h2">{t({ en: 'Patient Video Stories', hi: 'मरीज़ों की वीडियो कहानियां' })}</h2>
            <p className="body">{t({ en: `${VIDEOS.length} patients describe their own treatment journey on our YouTube channel.`, hi: `${VIDEOS.length} मरीज़ हमारे YouTube चैनल पर अपनी उपचार यात्रा बताते हैं।` })}</p>
            <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">▶ {t({ en: 'Watch on YouTube', hi: 'YouTube पर देखें' })}</a>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <Reveal className="soon-card">
            <h2 className="h3">{t({ en: 'Start your own recovery story', hi: 'अपनी सेहत की कहानी शुरू करें' })}</h2>
            <p className="body">{t({ en: 'Get a free consultation — our expert calls you back within 30 minutes.', hi: 'फ्री परामर्श लें — हमारे विशेषज्ञ 30 मिनट में कॉल करेंगे।' })}</p>
          </Reveal>
          <Reveal className="hero-form-wrap" variant="right"><LeadForm source="reviews-page" /></Reveal>
        </div>
      </section>
    </div>
  )
}
