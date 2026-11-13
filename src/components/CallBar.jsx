import { useState } from 'react'
import { SITE } from '../config'
import { UI } from '../data/ui'
import { useLang } from '../i18n/LanguageContext'

export const PhoneIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
  </svg>
)

// Sticky bottom bar. Doctor photo: public/images/call-doctor.png
export default function CallBar() {
  const { t } = useLang()
  const [imgOk, setImgOk] = useState(true)
  return (
    <div className="call-bar">
      <div className="call-bar-doc">
        {imgOk
          ? <img src="/images/call-doctor.png" alt="" onError={() => setImgOk(false)} />
          : <div className="doc-fallback" aria-hidden="true">👩‍⚕️</div>}
      </div>
      <div className="call-bar-center">
        <a className="call-pill" href={`tel:${SITE.phone}`}>
          <span className="call-pill-icon"><PhoneIcon /></span>
          {t(UI.callNow)}
        </a>
        <p className="call-bar-text"><span className="online-dot" /> {t(UI.doctorsOnline)}</p>
      </div>
    </div>
  )
}
