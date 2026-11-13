import { useEffect, useRef, useState } from 'react'

/**
 * Scroll reveal — "shown" state React ke andar rehta hai,
 * isliye re-render par class gayab nahi hoti (pichhla bug fix).
 */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, variant = 'up', style, children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || shown) return
    if (!('IntersectionObserver' in window)) { setShown(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [shown])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${shown ? 'is-in' : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
