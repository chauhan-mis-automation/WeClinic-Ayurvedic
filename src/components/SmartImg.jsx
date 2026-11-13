import { useState } from 'react'

// Photo dikhata hai; file na mile to sundar placeholder (emoji / initials)
export default function SmartImg({ src, alt = '', emoji = '🌿', text, className = '', ...rest }) {
  const [ok, setOk] = useState(true)
  if (ok && src) return <img src={src} alt={alt} loading="lazy" className={className} onError={() => setOk(false)} {...rest} />
  return (
    <div className={`photo-fallback ${className}`} aria-hidden="true">
      {text ? <b className="pf-text">{text}</b> : <span>{emoji}</span>}
    </div>
  )
}
