import { Link } from 'react-router-dom'

// Logo file: public/images/logo.webp (badalna ho to wahi file replace karo)
export default function Logo({ light = false, onClick }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} onClick={onClick} aria-label="Jeewan Jyoti Ayurvedic Sansthan — home">
      <img
        className="logo-img"
        src="/images/logo.webp"
        srcSet="/images/logo.webp 1x, /images/logo@2x.webp 2x"
        alt="Jeewan Jyoti Ayurvedic Sansthan"
        width="160" height="84"
      />
    </Link>
  )
}
