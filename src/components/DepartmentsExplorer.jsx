import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DEPARTMENTS } from '../data/departments'
import { DEPT_SECTION } from '../data/home'
import { useLang } from '../i18n/LanguageContext'
import { useAppointment } from './AppointmentContext'
import Reveal from './Reveal'

export default function DepartmentsExplorer() {
  const { t } = useLang()
  const { openAppointment } = useAppointment()
  const { hash } = useLocation()
  const [active, setActive] = useState(DEPARTMENTS[0].id)

  useEffect(() => {
    const id = hash.slice(1)
    if (DEPARTMENTS.some((d) => d.id === id)) setActive(id)
  }, [hash])

  const dept = DEPARTMENTS.find((d) => d.id === active)
  const total = DEPARTMENTS.reduce((n, d) => n + d.items.length, 0)

  return (
    <section className="section depts" id="departments">
      {DEPARTMENTS.map((d) => <span key={d.id} id={d.id} className="anchor" />)}
      <div className="container">
        <Reveal className="section-head center">
          <span className="pill"><span className="dot" />{t(DEPT_SECTION.pill).replace('58', total)}</span>
          <h2 className="h2">{t(DEPT_SECTION.title1)}<span className="text-grad">{t(DEPT_SECTION.title2)}</span></h2>
          <p className="lead">{t(DEPT_SECTION.sub)}</p>
        </Reveal>

        <div className="dept-layout">
          <Reveal as="aside" className="dept-tabs" variant="left" role="tablist">
            {DEPARTMENTS.map((d) => (
              <button
                key={d.id}
                role="tab"
                aria-selected={d.id === active}
                className={`dept-tab ${d.id === active ? 'on' : ''}`}
                style={{ '--tint': d.tint }}
                onClick={() => setActive(d.id)}
              >
                <span className="dept-tab-icon">{d.icon}</span>
                <span className="dept-tab-name">{t(d.name)}</span>
                <span className="dept-tab-count">{d.items.length}</span>
              </button>
            ))}
          </Reveal>

          <Reveal className="dept-panel" variant="right" style={{ '--tint': dept.tint }}>
            <div className="dept-panel-head">
              <div className="dept-panel-icon">{dept.icon}</div>
              <div className="dept-panel-text">
                <h3>{t(dept.title)} <span className="count-badge">{dept.items.length} {t(DEPT_SECTION.treatments)}</span></h3>
                <p>{t(dept.desc)}</p>
              </div>
              <button className="btn btn-white" onClick={openAppointment}>{t(DEPT_SECTION.ask)}</button>
            </div>
            <div className="cond-grid" key={dept.id}>
              {dept.items.map((c, i) => (
                <Link to={`/disease/${c.slug}`} className="cond-card" key={c.slug} style={{ animationDelay: `${i * 35}ms` }}>
                  <span className="cond-icon">{c.icon}</span>
                  <span className="cond-text">
                    <b>{t(c.name)}</b>
                    <small>{t(c.desc)}</small>
                  </span>
                  <span className="cond-go">›</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
