import { getUtmString } from './utm'

const API = import.meta.env.VITE_SHEET_API

/**
 * Lead ko Google Sheet (Apps Script) mein bhejta hai.
 * text/plain zaroori hai — isse CORS preflight nahi hota.
 * VITE_SHEET_API na ho to demo mode (fake success).
 */
export async function submitLead(data) {
  const payload = {
    ...data,
    utm: getUtmString(),
    source: data.source || window.location.pathname,
  }
  if (!API) {
    console.info('[Demo mode] Lead:', payload)
    await new Promise((r) => setTimeout(r, 700))
    return { ok: true, id: 'DEMO-' + Math.floor(1000 + Math.random() * 9000), demo: true }
  }
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  })
  const json = await res.json()
  if (!json.ok) throw new Error(json.error || 'Submit failed')
  return json
}
