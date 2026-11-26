import { useLang } from '../i18n/LanguageContext'
import { MEDIA, MEDIA_HEAD } from '../data/media'
import Reveal from './Reveal'

export default function MediaMentions({ limit }) {
  const { t } = useLang()
  const items = limit ? MEDIA.slice(0, limit) : MEDIA
  return (
    <section className="section media">
      <div className="container">
        <Reveal className="section-head center">
          <span className="pill"><span className="dot" />{t(MEDIA_HEAD.eyebrow)}</span>
          <h2 className="h2">{t(MEDIA_HEAD.title)}</h2>
          <p className="lead">{t(MEDIA_HEAD.sub)}</p>
        </Reveal>
        <div className="media-grid">
          {items.map((m, i) => (
            <Reveal key={m.name} className="media-card" delay={(i % 4) * 70}>
              <span className="media-icon" aria-hidden="true"></span>
              <h3>{m.name}</h3>
              <p>{t(m.text)}</p>
              <a href={m.url} target="_blank" rel="noopener noreferrer" className="link-arrow">{t(MEDIA_HEAD.read)} ↗</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
