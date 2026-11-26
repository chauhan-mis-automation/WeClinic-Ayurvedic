import { useState } from 'react'

// Photo dikhata hai; file na mile to kuch nahi dikhata
export default function SmartImg({ src, alt = '', emoji = '', text, className = '', ...rest }) {
  const [ok, setOk] = useState(true)
  if (ok && src) return <img src={src} alt={alt} loading="lazy" className={className} onError={() => setOk(false)} {...rest} />
  // Photo nahi mili to kuch nahi dikhate (khaali box / emoji nahi)
  return null
}
