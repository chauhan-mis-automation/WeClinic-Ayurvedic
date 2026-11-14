// Header, footer, call bar aur forms ke common text
export const NAV = [
  { to: '/', label: { en: 'Home', hi: 'होम' } },
  { to: '/diseases', label: { en: 'Diseases', hi: 'रोग' } },
  { to: '/reviews', label: { en: 'Reviews', hi: 'समीक्षाएं' } },
  { to: '/blog', label: { en: 'Blog', hi: 'ब्लॉग' } },
  {
    label: { en: 'About', hi: 'हमारे बारे में' },
    children: [
      { to: '/about', label: { en: 'About Us', hi: 'हमारे बारे में' } },
      { to: '/management', label: { en: 'Management Team', hi: 'मैनेजमेंट टीम' } },
      { to: '/doctors', label: { en: 'Our Doctors', hi: 'हमारे डॉक्टर' } },
      { to: '/media', label: { en: 'Media Mentions', hi: 'मीडिया में' } },
      { to: '/careers', label: { en: 'Careers', hi: 'करियर' } },
    ],
  },
  { to: '/contact', label: { en: 'Contact', hi: 'संपर्क' } },
]

export const UI = {
  appointment: { en: 'Make an Appointment', hi: 'अपॉइंटमेंट लें' },
  callNow: { en: 'Call now', hi: 'अभी कॉल करें' },
  doctorsOnline: { en: 'Doctors are online.. call now..', hi: 'डॉक्टर ऑनलाइन हैं ..अभी कॉल करें...' },
  menu: { en: 'Menu', hi: 'मेनू' },
}

export const FORM = {
  badge: { en: 'FREE Consultation — Limited Slots Today', hi: 'फ्री परामर्श — आज सीमित स्लॉट' },
  title: { en: 'Get Your Free Consultation', hi: 'अपना फ्री परामर्श पाएं' },
  sub1: { en: 'Fill the form & our expert will call you back within', hi: 'फॉर्म भरें, हमारे विशेषज्ञ आपको' },
  sub2: { en: '30 minutes', hi: '30 मिनट' },
  sub3: { en: '.', hi: ' में कॉल करेंगे।' },
  name: { en: 'Your Full Name', hi: 'आपका पूरा नाम' },
  phone: { en: 'Your Mobile Number', hi: 'आपका मोबाइल नंबर' },
  since: { en: 'How old is your problem?', hi: 'आपको कितने दिनों से समस्या है?' },
  sinceOptions: [
    { en: 'Less than 1 month', hi: '1 महीने से कम' },
    { en: '1–6 months', hi: '1–6 महीने' },
    { en: '6–12 months', hi: '6–12 महीने' },
    { en: 'More than 1 year', hi: '1 साल से ज़्यादा' },
  ],
  symptomsLabel: { en: 'What are your symptoms?', hi: 'आपके लक्षण क्या हैं?' },
  symptoms: [
    { en: 'Skin Disorders', hi: 'त्वचा रोग' },
    { en: 'Gout Arthritis', hi: 'गठिया / जोड़ों का दर्द' },
    { en: 'Piles Fistula', hi: 'बवासीर भगन्दर' },
    { en: 'Sexual Disorders', hi: 'यौन समस्याएं' },
    { en: 'Other Diseases', hi: 'अन्य रोग' },
  ],
  submit: { en: 'Get Started', hi: 'शुरुआत करें' },
  sending: { en: 'Sending…', hi: 'भेजा जा रहा है…' },
  private: { en: '100% Private', hi: '100% गोपनीय' },
  noSpam: { en: 'No Spam Calls', hi: 'कोई स्पैम कॉल नहीं' },
  okTitle: { en: 'Thank you!', hi: 'धन्यवाद!' },
  okText: { en: 'Our expert will call you shortly. Your reference ID:', hi: 'हमारे विशेषज्ञ जल्द ही आपको कॉल करेंगे। आपकी रेफरेंस आईडी:' },
  again: { en: 'Submit another', hi: 'दोबारा भरें' },
  errName: { en: 'Please enter your correct name.', hi: 'कृपया अपना सही नाम लिखें।' },
  errPhone: { en: 'Please enter a valid 10-digit mobile number.', hi: 'कृपया 10 अंकों का सही मोबाइल नंबर डालें।' },
  errServer: { en: 'Something went wrong. Please call us directly.', hi: 'कुछ गड़बड़ हुई। कृपया हमें सीधे कॉल करें।' },
}

export const FOOTER = {
  about: {
    en: 'Jeewan Jyoti Ayurvedic Sansthan offers personalised Ayurvedic care through in-clinic and online consultation, with medicines delivered across India.',
    hi: 'जीवन ज्योति आयुर्वेदिक संस्थान क्लिनिक तथा ऑनलाइन परामर्श के ज़रिए व्यक्तिगत आयुर्वेदिक देखभाल देता है, और पूरे भारत में दवा पहुंचाता है।',
  },
  cols: [
    {
      title: { en: 'Treatments', hi: 'उपचार' },
      links: [
        { to: '/diseases#joints', label: { en: 'Joint & Arthritis', hi: 'जोड़ और गठिया' } },
        { to: '/disease/female-disorders', label: { en: "Women's Health / PCOD", hi: 'महिला स्वास्थ्य / PCOD' } },
        { to: '/diseases#men', label: { en: "Men's Health", hi: 'पुरुष स्वास्थ्य' } },
        { to: '/piles-fistula-fissure', label: { en: 'Piles, Fissure & Fistula', hi: 'बवासीर, फिशर और भगन्दर' } },
        { to: '/diseases#piles', label: { en: 'Digestive & Liver', hi: 'पाचन और लिवर' } },
        { to: '/diseases#kidney', label: { en: 'Kidney & Urinary', hi: 'किडनी और मूत्र' } },
        { to: '/diseases#brain', label: { en: 'Migraine & Headache', hi: 'माइग्रेन और सिरदर्द' } },
        { to: '/diseases#brain', label: { en: 'Brain & Mental Wellness', hi: 'मस्तिष्क और मानसिक स्वास्थ्य' } },
        { to: '/diseases#skin', label: { en: 'Skin & Hair', hi: 'त्वचा और बाल' } },
        { to: '/diseases#allergy', label: { en: 'Allergy & Respiratory', hi: 'एलर्जी और श्वसन' } },
        { to: '/diseases', label: { en: 'All Conditions We Treat', hi: 'सभी रोग जिनका हम उपचार करते हैं' } },
      ],
    },
    {
      title: { en: 'Company', hi: 'कंपनी' },
      links: [
        { to: '/about', label: { en: 'About Us', hi: 'हमारे बारे में' } },
        { to: '/contact', label: { en: 'Contact Us', hi: 'संपर्क करें' } },
        { to: '/book-appointment', label: { en: 'Book Appointment', hi: 'अपॉइंटमेंट बुक करें' } },
        { to: '/doctors', label: { en: 'Our Doctors', hi: 'हमारे डॉक्टर' } },
        { to: '/management', label: { en: 'Management Team', hi: 'मैनेजमेंट टीम' } },
        { to: '/media', label: { en: 'Media & Awards', hi: 'मीडिया और सम्मान' } },
        { to: '/careers', label: { en: 'Careers', hi: 'करियर' } },
      ],
    },
    {
      title: { en: 'Policy', hi: 'नीतियां' },
      links: [
        { to: '/terms', label: { en: 'Terms of Service', hi: 'सेवा की शर्तें' } },
        { to: '/refund-policy', label: { en: 'Return & Refund Policy', hi: 'रिटर्न और रिफंड नीति' } },
        { to: '/privacy-policy', label: { en: 'Privacy Policy', hi: 'गोपनीयता नीति' } },
      ],
    },
    {
      title: { en: 'Patient Care', hi: 'मरीज़ सेवा' },
      links: [
        { to: '/diseases', label: { en: 'Conditions We Treat', hi: 'जिन रोगों का उपचार करते हैं' } },
        { to: '/medical-store', label: { en: 'Medical Store', hi: 'मेडिकल स्टोर' } },
      ],
    },
  ],
  connect: { en: 'Connect with us', hi: 'हमसे जुड़ें' },
  connectText: { en: 'Follow Jeewan Jyoti for health tips, patient stories & clinic updates.', hi: 'हेल्थ टिप्स, मरीज़ों की कहानियां और क्लिनिक अपडेट के लिए जीवन ज्योति को फॉलो करें।' },
  bottomLinks: [
    { to: '/terms', label: { en: 'Terms', hi: 'शर्तें' } },
    { to: '/privacy-policy', label: { en: 'Privacy', hi: 'गोपनीयता' } },
    { to: '/refund-policy', label: { en: 'Refunds', hi: 'रिफंड' } },
  ],
  rights: { en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।' },
  disclaimer: {
    en: 'Results vary from person to person. Information on this website is not a substitute for medical advice.',
    hi: 'परिणाम हर व्यक्ति में अलग हो सकते हैं। इस वेबसाइट की जानकारी चिकित्सकीय सलाह का विकल्प नहीं है।',
  },
}
