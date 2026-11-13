import { createContext, useContext, useEffect, useState } from 'react'
import LeadForm from './LeadForm'
import { useLang } from '../i18n/LanguageContext'
import { FORM } from '../data/ui'

const Ctx = createContext(null)

export function AppointmentProvider({ children }) {
  const [open, setOpen] = useState(false)
  const { t } = useLang()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <Ctx.Provider value={{ openAppointment: () => setOpen(true) }}>
      {children}
      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal" role="dialog" aria-modal="true" aria-label={t(FORM.title)} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <LeadForm source="appointment-popup" />
          </div>
        </div>
      )}
    </Ctx.Provider>
  )
}

export const useAppointment = () => useContext(Ctx)
