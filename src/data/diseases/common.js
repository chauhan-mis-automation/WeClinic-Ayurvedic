// Har disease page par same rehne wale sections (plan steps, why choose).
// {name} ki jagah disease ka naam apne aap aa jata hai.
export const PLAN = {
  eyebrow: { en: "WeClinic's Complete {name} Treatment Plan", hi: 'वीक्लिनिक का संपूर्ण {name} उपचार प्लान' },
  title: { en: 'How our plan works', hi: 'हमारा प्लान कैसे काम करता है' },
  steps: [
    { en: 'Call our specialists on the number above.', hi: 'ऊपर दिए नंबर पर हमारे विशेषज्ञों को कॉल करें।' },
    { en: 'Our doctors take your complete case history and your address for home delivery of medicine.', hi: 'हमारे डॉक्टर आपकी पूरी केस हिस्ट्री और दवा की होम डिलीवरी के लिए पता लेते हैं।' },
    { en: 'Medicine is selected based on your specific case and couriered to you.', hi: 'आपके केस के अनुसार दवा चुनी जाती है और कूरियर से भेजी जाती है।' },
    { en: 'Once delivered, our team contacts you and explains the dosage.', hi: 'दवा पहुंचने पर हमारी टीम आपसे संपर्क करके खुराक समझाती है।' },
    { en: 'Our team calls you periodically throughout your treatment to track progress.', hi: 'उपचार के दौरान हमारी टीम समय-समय पर कॉल करके प्रगति देखती है।' },
    { en: 'You can also book an appointment with our doctors for any concerns during treatment.', hi: 'उपचार के दौरान किसी भी चिंता के लिए आप डॉक्टर से अपॉइंटमेंट भी ले सकते हैं।' },
  ],
  step: { en: 'Step', hi: 'स्टेप' },
  online: { en: 'Our specialists are online... Call now...', hi: 'हमारे विशेषज्ञ ऑनलाइन हैं... अभी कॉल करें...' },
  image: '/images/clinic.webp', // clinic building photo
}

export const WHY_CHOOSE = {
  eyebrow: { en: 'Why WeClinic', hi: 'वीक्लिनिक क्यों' },
  title: { en: 'Why Choose WeClinic™ for {name} Care?', hi: '{name} के लिए वीक्लिनिक™ क्यों चुनें?' },
  cards: [
    { icon: '🛡️', title: { en: 'Completely Confidential', hi: 'पूरी तरह गोपनीय' }, text: { en: 'All the information you share with us stays completely private.', hi: 'आपकी दी हुई हर जानकारी पूरी तरह गोपनीय रहती है।' } },
    { icon: '🛵', title: { en: 'Home Delivery', hi: 'होम डिलीवरी' }, text: { en: 'Your medicines are couriered to your doorstep in discreet, unmarked packaging.', hi: 'दवा बिना नाम वाले, गोपनीय पैकेट में आपके घर तक पहुंचती है।' } },
    { icon: '🩺', title: { en: 'Personalised Treatment', hi: 'व्यक्तिगत उपचार' }, text: { en: 'Your plan is built around your history, lifestyle and triggers — not a one-size-fits-all pack.', hi: 'आपका प्लान आपकी हिस्ट्री, जीवनशैली और कारणों के अनुसार बनता है — सबके लिए एक जैसा पैक नहीं।' } },
    { icon: '💬', title: { en: 'Online & Clinic Consultation', hi: 'ऑनलाइन और क्लिनिक परामर्श' }, text: { en: 'Consult our doctors online from anywhere, or visit our clinic in Kanpur in person.', hi: 'कहीं से भी ऑनलाइन परामर्श लें, या कानपुर क्लिनिक में आकर मिलें।' } },
  ],
  online: { en: 'Our specialists are online – Call Now', hi: 'हमारे विशेषज्ञ ऑनलाइन हैं – अभी कॉल करें' },
}

export const DP = {
  toc: { en: 'On this page', hi: 'इस पेज पर' },
  reviewed: { en: 'Medically reviewed', hi: 'चिकित्सकीय समीक्षा' },
  lastReviewed: { en: 'Last reviewed', hi: 'अंतिम समीक्षा' },
  takeaways: { en: 'Key Takeaways', hi: 'मुख्य बातें' },
  faqTitle: { en: 'Frequently Asked Questions', hi: 'अक्सर पूछे जाने वाले सवाल' },
  related: { en: 'Related treatments', hi: 'संबंधित उपचार' },
  ratings: { en: 'Ratings', hi: 'रेटिंग' },
  formNote: { en: 'Your information is 100% confidential. No spam, ever.', hi: 'आपकी जानकारी 100% गोपनीय है। कोई स्पैम नहीं।' },
  howLong: { en: 'How long have you had this problem?', hi: 'आपको यह समस्या कब से है?' },
  bookFree: { en: 'Book Free Consultation', hi: 'फ्री परामर्श बुक करें' },
}

// Hero ke default points/rating — har disease file mein dobara likhne ki zaroorat nahi
export const HERO_DEFAULTS = {
  rating: { value: '4.95', count: '1,24,795' },
  stats: [
    { value: '98%', label: { en: 'Patient Satisfaction', hi: 'मरीज़ संतुष्ट' } },
    { value: '8 Lakh+', label: { en: 'Patients Treated', hi: 'मरीज़ों का उपचार' } },
  ],
  points: [
    { en: 'Free home delivery of medicines, pan-India', hi: 'पूरे भारत में दवा की फ्री होम डिलीवरी' },
    { en: '100% confidential consultation & delivery', hi: '100% गोपनीय परामर्श और डिलीवरी' },
    { en: 'Online & in-clinic consultation available', hi: 'ऑनलाइन और क्लिनिक परामर्श उपलब्ध' },
    { en: 'Free personalised diet chart included', hi: 'फ्री व्यक्तिगत डाइट चार्ट शामिल' },
  ],
  online: { en: 'Our specialists are online – Call Now', hi: 'हमारे विशेषज्ञ ऑनलाइन हैं – अभी कॉल करें' },
  formTitle: { en: 'Book Your Free Consultation', hi: 'अपना फ्री परामर्श बुक करें' },
  formSub: { en: 'Our {name} specialists will call you back within minutes', hi: 'हमारे {name} विशेषज्ञ कुछ ही मिनटों में आपको कॉल करेंगे' },
}

// Page ke end mein closing banner
export const CLOSING = {
  title: { en: 'Start Your Journey to Better Health Today', hi: 'आज ही बेहतर सेहत की ओर पहला कदम उठाएं' },
  text: { en: "Book a free consultation with WeClinic™'s experienced doctors and get a treatment plan made for your specific case.", hi: 'वीक्लिनिक™ के अनुभवी डॉक्टरों से फ्री परामर्श लें और अपने केस के लिए बना उपचार प्लान पाएं।' },
  call: { en: 'Call Now - Book Free Consultation', hi: 'अभी कॉल करें - फ्री परामर्श' },
  visit: { en: 'Prefer to visit in person? Book a Clinic Appointment', hi: 'क्लिनिक आना चाहते हैं? अपॉइंटमेंट बुक करें' },
}
