// Disease detail page — poora page data file (src/data/diseases/<slug>.js) se banta hai.
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { SITE } from '../config'
import { ALL_CONDITIONS } from '../data/departments'
import { PLAN, WHY_CHOOSE, DP, HERO_DEFAULTS as HD, CLOSING } from '../data/diseases/common'
import { useAppointment } from '../components/AppointmentContext'
import LeadForm from '../components/LeadForm'
import Reveal from '../components/Reveal'
import { PhoneIcon } from '../components/CallBar'

const fill = (str, name) => str.replace('{name}', name)

function OnlinePill({ text }) {
  return (
    <a href={`tel:${SITE.phone}`} className="online-pill">
      <span className="online-dot" /> {text}
    </a>
  )
}

function Hero({ d }) {
  const { t } = useLang()
  const h = { ...HD, ...d.hero }
  return (
    <section className="dz-hero">
      <div className="hero-bg" aria-hidden="true"><span className="blob b1" /><span className="blob b3" /></div>
      <div className="container dz-hero-grid">
        <div className="dz-hero-copy">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">{t({ en: 'Home', hi: 'होम' })}</Link> / <Link to="/diseases">{t({ en: 'Diseases', hi: 'रोग' })}</Link> / <span>{t(d.name)}</span>
          </nav>
          <Reveal><span className="pill">{t(h.eyebrow)}</span></Reveal>
          <Reveal as="h1" className="dz-title" delay={80}>{t(h.title1)}<span className="text-grad">{t(h.title2)}</span></Reveal>
          <Reveal as="p" className="hero-text" delay={140}>{t(h.text)}</Reveal>
          <Reveal className="dz-stats" delay={200}>
            <div className="dz-stat">
              <b>{h.rating.value} <span className="stars">★★★★★</span></b>
              <span>{h.rating.count} {t(DP.ratings)}</span>
            </div>
            {h.stats.map((s) => <div className="dz-stat" key={s.value}><b>{s.value}</b><span>{t(s.label)}</span></div>)}
          </Reveal>
          <ul className="check-list dz-points">
            {h.points.map((p, i) => <Reveal as="li" key={p.en} delay={i * 60}><span className="tick">✓</span>{t(p)}</Reveal>)}
          </ul>
          <Reveal delay={200}><OnlinePill text={t(h.online)} /></Reveal>
        </div>
        <Reveal className="hero-form-wrap" id="hero-form" variant="right" delay={120}>
          <LeadForm
            source={`disease-${d.slug}`}
            showBadge={false}
            title={d.form.title || HD.formTitle}
            sub={d.form.sub || { en: fill(HD.formSub.en, d.name.en.toLowerCase()), hi: fill(HD.formSub.hi, d.name.hi) }}
            symptoms={d.form.symptoms}
            submitLabel={DP.bookFree}
            concernPrefix={d.name.en}
          />
          <p className="dz-form-note">{t(DP.formNote)}</p>
        </Reveal>
      </div>
    </section>
  )
}

function Types({ d }) {
  const { t } = useLang()
  const s = d.types
  return (
    <section className="section dz-types">
      <div className="container">
        <Reveal className="section-head center">
          <span className="pill">{t(s.eyebrow)}</span>
          <h2 className="h2">{t(s.title)}</h2>
          <p className="lead">{t(s.sub)}</p>
        </Reveal>
        <div className="type-grid">
          {s.items.map((it, i) => (
            <Reveal key={it.name.en} className="type-card" delay={i * 70}>
              <span className="type-icon">{it.icon}</span>
              <h3>{t(it.name)}</h3>
              <p>{t(it.desc)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Plan({ d }) {
  const { t } = useLang()
  const [ok, setOk] = useState(true)
  const name = t(d.name)
  return (
    <section className="section dz-plan">
      <div className="container welcome-grid">
        <Reveal className="photo-frame plan-photo" variant="left">
          {ok ? <img src={PLAN.image} alt="" loading="lazy" onError={() => setOk(false)} /> : null}
        </Reveal>
        <div>
          <Reveal className="eyebrow-bar">{fill(t(PLAN.eyebrow), name)}</Reveal>
          <Reveal as="h2" className="h2">{t(PLAN.title)}</Reveal>
          <ol className="plan-steps">
            {PLAN.steps.map((s, i) => (
              <Reveal as="li" key={s.en} delay={i * 70}>
                <span className="plan-num">{i + 1}</span>
                <span><b>{t(PLAN.step)} {i + 1}:</b> {t(s)}</span>
              </Reveal>
            ))}
          </ol>
          <Reveal className="plan-call">
            <p><span className="online-dot" /> {t(PLAN.online)}</p>
            <a className="call-pill big" href={`tel:${SITE.phone}`}><span className="call-pill-icon"><PhoneIcon /></span>{t({ en: 'Call now', hi: 'अभी कॉल करें' })}</a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function WhyChoose({ d }) {
  const { t } = useLang()
  return (
    <section className="section dz-why">
      <div className="container">
        <Reveal className="section-head center">
          <span className="pill">{t(WHY_CHOOSE.eyebrow)}</span>
          <h2 className="h2">{fill(t(WHY_CHOOSE.title), t(d.name))}</h2>
        </Reveal>
        <div className="type-grid four">
          {WHY_CHOOSE.cards.map((c, i) => (
            <Reveal key={c.title.en} className="type-card" delay={i * 80}>
              <span className="type-icon">{c.icon}</span>
              <h3>{t(c.title)}</h3>
              <p>{t(c.text)}</p>
            </Reveal>
          ))}
        </div>
        <div className="center-row"><OnlinePill text={t(WHY_CHOOSE.online)} /></div>
      </div>
    </section>
  )
}

// ---------- Content blocks ----------
function BlockTitle({ title }) {
  const { t } = useLang()
  return title ? <h2 className="dz-h2">{t(title)}</h2> : null
}

function Note({ note }) {
  const { t } = useLang()
  return note ? <div className="dz-note">{t(note)}</div> : null
}

function Block({ blk }) {
  const { t } = useLang()
  const intro = (
    <>
      {blk.subtitle && <h3 className="dz-h3">{t(blk.subtitle)}</h3>}
      {blk.intro && <p className="dz-intro">{t(blk.intro)}</p>}
    </>
  )
  const after = blk.after && <p className="dz-intro">{t(blk.after)}</p>
  switch (blk.type) {
    case 'text':
      return (<>{<BlockTitle title={blk.title} />}{blk.paras.map((p, i) => <p className="dz-p" key={i}>{t(p)}</p>)}<Note note={blk.note} /></>)
    case 'cards':
      return (
        <>
          <BlockTitle title={blk.title} />{intro}
          <div className="dz-cards">
            {blk.items.map((it, i) => (
              <div className="dz-card" key={i}>
                <span className={`dz-ic ${blk.icon === 'warn' ? 'warn' : ''}`}>{blk.icon === 'warn' ? '!' : '✓'}</span>
                <p>{it.b && <b>{t(it.b)}</b>}{it.b && ' - '}{t(it.t)}</p>
              </div>
            ))}
          </div>
          <Note note={blk.note} />
        </>
      )
    case 'list':
      return (
        <>
          <BlockTitle title={blk.title} />{intro}
          <ul className="dz-list">
            {blk.items.map((it, i) => <li key={i}><span className="tick">✓</span><p>{it.b && <><b>{t(it.b)}:</b> </>}{t(it.t)}</p></li>)}
          </ul>
          {after}<Note note={blk.note} />
        </>
      )
    case 'table':
      return (
        <>
          <BlockTitle title={blk.title} />
          <div className="dz-table">
            {blk.rows.map(([k, v], i) => <div className="dz-row" key={i}><div className="dz-k">{t(k)}</div><div className="dz-v">{t(v)}</div></div>)}
          </div>
        </>
      )
    case 'steps':
      return (
        <>
          <BlockTitle title={blk.title} />{intro}
          <div className="dz-steps">
            {blk.steps.map((s, i) => (
              <div className="dz-step" key={s.title.en}>
                <span className="dz-step-num">{i + 1}</span>
                <div><h3>{t(s.title)}</h3><p>{t(s.text)}</p></div>
              </div>
            ))}
          </div>
          <Note note={blk.note} />
        </>
      )
    case 'grid':
      return (
        <>
          <BlockTitle title={blk.title} />{intro}
          <div className="dz-grid-wrap">
            <table className="dz-grid">
              <thead><tr>{blk.head.map((h) => <th key={h.en}>{t(h)}</th>)}</tr></thead>
              <tbody>
                {blk.rows.map((r, ri) => (
                  <tr key={ri}>{r.map((c, i) => <td key={i} data-label={t(blk.head[i])}>{t(c)}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          {after}<Note note={blk.note} />
        </>
      )
    case 'twocol':
      return (
        <>
          <BlockTitle title={blk.title} />{intro}
          <div className="dz-twocol">
            {blk.cols.map((c) => (
              <div className={`dz-col ${c.tone || ''}`} key={c.title.en}>
                <h3>{c.tone === 'bad' ? '✕' : '✓'} {t(c.title)}</h3>
                <ul>{c.items.map((it, i) => <li key={i}>{t(it)}</li>)}</ul>
              </div>
            ))}
          </div>
          {after}<Note note={blk.note} />
        </>
      )
    case 'cta':
      return (
        <div className="dz-cta">
          <h3>{t(blk.title)}</h3>
          {blk.action === 'form'
            ? <a href="#hero-form" className="btn btn-white btn-lg">{t(blk.button)} →</a>
            : <a href={`tel:${SITE.phone}`} className="btn btn-white btn-lg"><span className="ring"><PhoneIcon size={18} /></span> {t(blk.button)}</a>}
        </div>
      )
    default:
      return null
  }
}

function Faqs({ d }) {
  const { t } = useLang()
  const [open, setOpen] = useState(0)
  return (
    <>
      <h2 className="dz-h2">{t(DP.faqTitle)}</h2>
      <div className="faq-list">
        {d.faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                <span>{t(f.q)}</span><span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-a"><div><p>{t(f.a)}</p></div></div>
            </div>
          )
        })}
      </div>
    </>
  )
}

function Toc({ items, active }) {
  const { t } = useLang()
  return (
    <aside className="dz-toc">
      <p className="dz-toc-title">{t(DP.toc)}</p>
      <ul>
        {items.map((it) => (
          <li key={it.id}><a href={`#${it.id}`} className={active === it.id ? 'on' : ''}>{t(it.title)}</a></li>
        ))}
      </ul>
      <a href={`tel:${SITE.phone}`} className="btn btn-primary btn-block dz-toc-call"><PhoneIcon size={16} /> {SITE.phoneDisplay}</a>
    </aside>
  )
}

function Closing({ d }) {
  const { t } = useLang()
  const { openAppointment } = useAppointment()
  const c = d.closing || CLOSING
  return (
    <div className="container">
      <Reveal className="notsure dz-closing">
        <div className="notsure-copy">
          <h3>{t(c.title || CLOSING.title)}</h3>
          <p>{t(c.text || CLOSING.text)}</p>
        </div>
        <div className="notsure-actions">
          <a href={`tel:${SITE.phone}`} className="btn btn-primary"><span className="ring"><PhoneIcon size={18} /></span> {t(CLOSING.call)}</a>
          <button className="btn btn-outline-light" onClick={openAppointment}>{t(CLOSING.visit)}</button>
        </div>
      </Reveal>
    </div>
  )
}

export default function DiseasePage({ d }) {
  const { t } = useLang()
  const tocItems = [
    { id: 'takeaways', title: DP.takeaways },
    ...d.blocks.filter((b) => b.id && b.title).map((b) => ({ id: b.id, title: b.title })),
    ...(d.faqs.length ? [{ id: 'faqs', title: DP.faqTitle }] : []),
  ]
  const [active, setActive] = useState(tocItems[0].id)

  useEffect(() => {
    document.title = t(d.seoTitle)
    const els = tocItems.map((i) => document.getElementById(i.id)).filter(Boolean)
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-30% 0px -60% 0px' })
    els.forEach((el) => io.observe(el))
    return () => { io.disconnect(); document.title = 'Jeewan Jyoti Ayurvedic Sansthan | Trusted Ayurvedic Clinic' }
  }, [d, t]) // eslint-disable-line react-hooks/exhaustive-deps

  const related = (d.related || []).map((s) => ALL_CONDITIONS.find((c) => c.slug === s)).filter(Boolean)

  return (
    <div className="dz">
      <Hero d={d} />
      {d.types && <Types d={d} />}
      <Plan d={d} />
      <WhyChoose d={d} />

      <section className="section dz-body">
        <div className="container dz-layout">
          <Toc items={tocItems} active={active} />
          <article className="dz-article">
            {d.reviewer && (
              <div className="dz-reviewer">
                {d.reviewer.photo && <img src={d.reviewer.photo} alt="" />}
                <div>
                  <small>{t(DP.reviewed)}</small>
                  <b>{d.reviewer.name}</b>
                  <span>{t(d.reviewer.role)} | {t(DP.lastReviewed)}: {d.reviewer.date}</span>
                </div>
              </div>
            )}

            <section id="takeaways" className="dz-sec">
              <div className="dz-takeaways">
                <h2>{t(DP.takeaways)}</h2>
                <ul>
                  {d.takeaways.map((k, i) => <li key={i}><span className="tk">✓</span><p><b>{t(k.k)}:</b> {t(k.v)}</p></li>)}
                </ul>
              </div>
            </section>

            {d.blocks.map((blk, i) => (
              <section key={i} id={blk.id} className={`dz-sec dz-sec-${blk.type} ${blk.title || blk.type === 'cta' ? '' : 'cont'}`}>
                <Block blk={blk} />
              </section>
            ))}

            {d.faqs.length > 0 && <section id="faqs" className="dz-sec"><Faqs d={d} /></section>}

            {related.length > 0 && (
              <div className="dz-related">
                <span>{t(DP.related)}:</span>
                {related.map((r) => <Link key={r.slug} to={`/disease/${r.slug}`}>{r.icon} {t(r.name)}</Link>)}
              </div>
            )}
          </article>
        </div>
      </section>
      <Closing d={d} />
    </div>
  )
}

