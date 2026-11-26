// ====== Site-wide settings (yahan badlo, poori site mein update ho jayega) ======
export const SITE = {
  brand: { en: 'Jeewan Jyoti Ayurvedic Sansthan', hi: 'जीवन ज्योति आयुर्वेदिक संस्थान' },
  brandShort: { en: 'Jeewan Jyoti', hi: 'जीवन ज्योति' },
  tagline: { en: 'Healthy life, our commitment', hi: 'स्वस्थ जीवन, हमारा संकल्प' },
  brandTM: { en: 'Jeewan Jyoti Ayurvedic Sansthan', hi: 'जीवन ज्योति आयुर्वेदिक संस्थान' },
  phone: '+919711766755',          // Call button ka number
  phoneDisplay: '+91 97117 66755',
  email: 'jeevanjyotiayurvedicsansthan@gmail.com',
  cities: { en: 'Serving patients across India', hi: 'पूरे भारत में सेवा' },
  hours: { en: 'Tue–Sun 10 AM – 9 PM (Mon closed)', hi: 'मंगल–रवि सुबह 10 – रात 9 (सोमवार बंद)' },
  // Social links — sahi URL yahan daalo (khali ho to icon nahi dikhega)
  social: {
    facebook: '',
    instagram: '',
    youtube: '',
    linkedin: '',
  },
  googleRating: '4.6',
  googleReviews: '6,133',
}

// Landing page subdomains — is naam ke subdomain par khulte hi seedha landing page dikhega.
// Jaise: piles.divyajeewan.com  →  Piles/Fistula/Fissure landing page
// Naya naam chahiye to bas yahan badlo (aur Vercel + GoDaddy mein wahi naam jodo).
export const LANDING_SUBDOMAINS = ['piles']
