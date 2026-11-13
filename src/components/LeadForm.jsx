import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { FORM } from '../data/ui'
import { submitLead } from '../lib/sheetApi'

export default function LeadForm({
  source = 'home-hero', showBadge = true, defaultConcern = '',
  symptoms = FORM.symptoms, title = FORM.title, sub = null, submitLabel = FORM.submit, concernPrefix = '',
}) {
  const { t, lang } = useLang()
  const [f, setF] = useState({ name: '', phone: '', since: '', symptoms: defaultConcern ? [defaultConcern] : [], hp_check: '' })
  const [status, setStatus] = useState({ state: 'idle', msg: '', id: '' })

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const toggleSym = (s) =>
    setF({ ...f, symptoms: f.symptoms.includes(s) ? f.symptoms.filter((x) => x !== s) : [...f.symptoms, s] })

  async function onSubmit(e) {
    e.preventDefault()
    const phone = f.phone.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '')
    if (f.name.trim().length < 2) return setStatus({ state: 'error', msg: t(FORM.errName) })
    if (!/^[6-9]\d{9}$/.test(phone)) return setStatus({ state: 'error', msg: t(FORM.errPhone) })
    setStatus({ state: 'sending', msg: '' })
    try {
      const res = await submitLead({
        name: f.name.trim(),
        phone,
        concern: [concernPrefix, ...f.symptoms].filter(Boolean).join(', '),
        message: f.since ? `Problem since: ${f.since}` : '',
        lang,
        source,
        hp_check: f.hp_check,
      })
      setStatus({ state: 'done', msg: '', id: res.id })
    } catch {
      setStatus({ state: 'error', msg: t(FORM.errServer) })
    }
  }

  if (status.state === 'done') {
    return (
      <div className="lead-form lead-done">
        <div className="done-icon">✓</div>
        <h3>{t(FORM.okTitle)}</h3>
        <p>{t(FORM.okText)} <b>{status.id}</b></p>
        <button className="btn btn-ghost" onClick={() => { setF({ name: '', phone: '', since: '', symptoms: [], hp_check: '' }); setStatus({ state: 'idle' }) }}>
          {t(FORM.again)}
        </button>
      </div>
    )
  }

  return (
    <form className="lead-form" onSubmit={onSubmit} noValidate>
      {showBadge && <div className="form-badge"><span>★</span> {t(FORM.badge)}</div>}
      <h3 className="form-title">{t(title)}</h3>
      {sub ? <p className="form-sub">{t(sub)}</p> : <p className="form-sub">{t(FORM.sub1)} <b>{t(FORM.sub2)}</b>{t(FORM.sub3)}</p>}

      <label className="field">
        <span className="sr-only">{t(FORM.name)}</span>
        <input type="text" placeholder={t(FORM.name)} value={f.name} onChange={set('name')} autoComplete="name" />
      </label>
      <label className="field field-phone">
        <span className="cc">🇮🇳 +91</span>
        <span className="sr-only">{t(FORM.phone)}</span>
        <input type="tel" inputMode="numeric" maxLength={14} placeholder={t(FORM.phone)} value={f.phone} onChange={set('phone')} autoComplete="tel" />
      </label>
      <label className="field">
        <span className="sr-only">{t(FORM.since)}</span>
        <select value={f.since} onChange={set('since')} className={f.since ? '' : 'placeholder'}>
          <option value="">{t(FORM.since)}</option>
          {FORM.sinceOptions.map((o) => <option key={o.en} value={o.en}>{t(o)}</option>)}
        </select>
      </label>

      <p className="sym-label">{t(FORM.symptomsLabel)}</p>
      <div className="sym-grid">
        {symptoms.map((s) => (
          <label key={s.en} className={`chk ${f.symptoms.includes(s.en) ? 'on' : ''}`}>
            <input type="checkbox" checked={f.symptoms.includes(s.en)} onChange={() => toggleSym(s.en)} />
            <span className="box" aria-hidden="true" />
            {t(s)}
          </label>
        ))}
      </div>

      {/* honeypot — bots bharenge, insaan nahi dekhenge */}
      <input className="hp" type="text" tabIndex={-1} autoComplete="new-password" value={f.hp_check} onChange={set('hp_check')} name="wc_hp_check" aria-hidden="true" />

      {status.state === 'error' && <p className="form-error" role="alert">{status.msg}</p>}

      <button className="btn btn-primary btn-block btn-lg" disabled={status.state === 'sending'}>
        {status.state === 'sending' ? t(FORM.sending) : <>{t(submitLabel)} <span className="arrow">→</span></>}
      </button>
      <div className="form-foot">
        <span>🛡️ {t(FORM.private)}</span>
        <span>⭐ {t(FORM.noSpam)}</span>
      </div>
    </form>
  )
}