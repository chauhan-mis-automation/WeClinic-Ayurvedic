import { useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import Reveal from './Reveal'

// Ek video card: pehle sirf poster dikhta hai, click par hi video load hoti hai
// (page tez rehta hai, data bhi bachta hai).
function VideoCard({ v }) {
  const { t } = useLang()
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)
  const shape = v.vertical ? 'vg-vertical' : v.square ? 'vg-square' : ''
  const poster = v.poster || (v.youtube ? `https://i.ytimg.com/vi/${v.youtube}/hqdefault.jpg` : '')

  const pauseOthers = () => {
    document.querySelectorAll('video.vg-video').forEach((el) => { if (el !== ref.current) el.pause() })
  }

  return (
    <figure className={`vg-card ${shape}`}>
      <div className="vg-frame">
        {playing && v.youtube ? (
          <iframe
            className="vg-video"
            src={`https://www.youtube-nocookie.com/embed/${v.youtube}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
            title={t(v.title)}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : playing ? (
          <video
            ref={ref}
            className="vg-video"
            src={v.src}
            poster={poster}
            controls
            autoPlay
            playsInline
            controlsList="nodownload"
            onPlay={pauseOthers}
          />
        ) : (
          <button type="button" className="vg-poster" onClick={() => setPlaying(true)} aria-label={`${t({ en: 'Play video', hi: 'वीडियो चलाएं' })}: ${t(v.title)}`}>
            <img src={poster} alt="" loading="lazy" />
            <span className="vg-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="30" height="30"><path d="M8 5v14l11-7z" fill="currentColor" /></svg></span>
            {v.tag && <span className="vg-tag">{t(v.tag)}</span>}
            {v.duration && <span className="vg-dur">▶ {v.duration}</span>}
          </button>
        )}
      </div>
      <figcaption>
        <b className="vg-title">{t(v.title)}</b>
        {v.desc && <span className="vg-desc">{t(v.desc)}</span>}
      </figcaption>
    </figure>
  )
}

export default function VideoGallery({ data, className = '' }) {
  const { t } = useLang()
  const wide = data.items.filter((v) => !v.vertical)
  const tall = data.items.filter((v) => v.vertical)

  return (
    <section className={`section vg ${className}`}>
      <div className="container">
        <Reveal className="section-head center">
          {data.eyebrow && <span className="eyebrow">{t(data.eyebrow)}</span>}
          <h2 className="h2">{t(data.title)}</h2>
          {data.sub && <p className="body vg-sub">{t(data.sub)}</p>}
        </Reveal>
        {tall.length > 0 && (
          <div className="vg-tall">
            {tall.map((v, i) => <Reveal key={v.src || v.youtube} delay={i * 80}><VideoCard v={v} /></Reveal>)}
          </div>
        )}
        {wide.length > 0 && (
          <div className="vg-grid">
            {wide.map((v, i) => <Reveal key={v.src || v.youtube} delay={(i % 2) * 80}><VideoCard v={v} /></Reveal>)}
          </div>
        )}
      </div>
    </section>
  )
}
