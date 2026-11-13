import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { NAV, UI } from '../data/ui'
import { useLang } from '../i18n/LanguageContext'
import { useAppointment } from './AppointmentContext'

function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
      <button className={lang === 'hi' ? 'on' : ''} onClick={() => setLang('hi')}>हिं</button>
    </div>
  )
}

export default function Header() {
  const { t } = useLang()
  const { openAppointment } = useAppointment()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setSubOpen(false) }, [pathname])
  useEffect(() => { document.body.classList.toggle('menu-open', menuOpen) }, [menuOpen])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Logo />

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main">
          <ul>
            {NAV.map((item) =>
              item.children ? (
                <li key={item.label.en} className={`has-sub ${subOpen ? 'sub-open' : ''}`}>
                  <button className="nav-link" onClick={() => setSubOpen((s) => !s)} aria-expanded={subOpen}>
                    {t(item.label)} <span className="caret">▾</span>
                  </button>
                  <ul className="submenu">
                    {item.children.map((c) => (
                      <li key={c.to}><NavLink to={c.to} className="sub-link">{t(c.label)}</NavLink></li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} end className="nav-link">{t(item.label)}</NavLink>
                </li>
              )
            )}
          </ul>
          <div className="nav-mobile-extra">
            <LangToggle />
            <button className="btn btn-primary btn-block" onClick={() => { setMenuOpen(false); openAppointment() }}>{t(UI.appointment)}</button>
          </div>
        </nav>

        <div className="header-actions">
          <LangToggle />
          <button className="btn btn-primary btn-glow hide-sm" onClick={openAppointment}>{t(UI.appointment)}</button>
          <button className={`burger ${menuOpen ? 'x' : ''}`} onClick={() => setMenuOpen((o) => !o)} aria-label={t(UI.menu)} aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
