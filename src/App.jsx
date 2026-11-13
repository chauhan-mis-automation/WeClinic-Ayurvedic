import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { AppointmentProvider } from './components/AppointmentContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import { DiseasesPage, DiseaseDetail, ComingSoon, NotFound } from './pages/Placeholders'
import About from './pages/About'
import Management from './pages/Management'
import Contact from './pages/Contact'
import MediaPage from './pages/MediaPage'
import PilesLanding from './pages/PilesLanding'
import Reviews from './pages/Reviews'
import PolicyPage from './pages/PolicyPage'

// Jo pages abhi bane nahi — content aane par inki jagah asli page aayega
const SOON = [
  ['/blog', 'Blog', 'ब्लॉग'],
  ['/doctors', 'Our Doctors', 'हमारे डॉक्टर'],
  ['/careers', 'Careers', 'करियर'],
  ['/book-appointment', 'Book Appointment', 'अपॉइंटमेंट बुक करें'],
  ['/medical-store', 'Medical Store', 'मेडिकल स्टोर'],
]

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppointmentProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="diseases" element={<DiseasesPage />} />
              <Route path="disease/:slug" element={<DiseaseDetail />} />
              <Route path="about" element={<About />} />
              <Route path="management" element={<Management />} />
              <Route path="contact" element={<Contact />} />
              <Route path="media" element={<MediaPage />} />
              <Route path="piles-fistula-fissure" element={<PilesLanding />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="terms" element={<PolicyPage key="terms" name="terms" />} />
              <Route path="privacy-policy" element={<PolicyPage key="privacy" name="privacy" />} />
              <Route path="refund-policy" element={<PolicyPage key="refund" name="refund" />} />
              {SOON.map(([path, en, hi]) => (
                <Route key={path} path={path.slice(1)} element={<ComingSoon key={path} title={{ en, hi }} />} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AppointmentProvider>
      </BrowserRouter>
    </LanguageProvider>
  )
}
