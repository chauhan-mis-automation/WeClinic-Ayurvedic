// Facebook / Google ads se aaye utm_* params sessionStorage mein save karta hai
const KEY = 'wc_utm'
const PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid']

export function captureUtm() {
  try {
    const q = new URLSearchParams(window.location.search)
    const found = {}
    PARAMS.forEach((p) => { if (q.get(p)) found[p] = q.get(p) })
    if (Object.keys(found).length) {
      found.landing = window.location.pathname
      sessionStorage.setItem(KEY, JSON.stringify(found))
    }
  } catch { /* ignore */ }
}

export function getUtmString() {
  try {
    const o = JSON.parse(sessionStorage.getItem(KEY) || '{}')
    return Object.entries(o).map(([k, v]) => `${k}=${v}`).join('&')
  } catch { return '' }
}
