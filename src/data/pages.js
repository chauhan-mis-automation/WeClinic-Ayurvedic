// About, Management, Contact pages ka text — weclinic.in se, Ayurveda ke hisaab se badla gaya.
// Founders ki degree (BHMS, IIT) asli hain, isliye waise hi rakhi gayi hain.
const b = (en, hi) => ({ en, hi })

export const ABOUT = {
  eyebrow: b('About Us', 'हमारे बारे में'),
  title1: b("India's Trusted ", 'भारत का भरोसेमंद '),
  title2: b('Online & In-Clinic Ayurvedic Care', 'ऑनलाइन और क्लिनिक आयुर्वेदिक केयर'),
  intro: b('WeClinic™ Ayurveda brings quality healthcare to every corner of India — 8 Lakh+ patients cared for, with clinics in Kanpur and Noida.', 'वीक्लिनिक™ आयुर्वेद भारत के हर कोने तक अच्छी स्वास्थ्य सेवा पहुंचाता है — 8 लाख+ मरीज़ों की देखभाल, कानपुर और नोएडा में क्लिनिक।'),
  heroCaption: b('WeClinic™ — clinics in Kanpur and Noida, with teleconsultation headquarters in Kanpur.', 'वीक्लिनिक™ — कानपुर और नोएडा में क्लिनिक, कानपुर में टेली-परामर्श मुख्यालय।'),
  stats: [
    { v: '8 Lakh+', l: b('Patients Treated Pan-India', 'पूरे भारत में मरीज़ों का उपचार') },
    { v: '98%', l: b('Patient Satisfaction', 'मरीज़ संतुष्ट') },
    { v: '20+', l: b('Specialist Doctors', 'विशेषज्ञ डॉक्टर') },
    { v: '200+', l: b('Health Managers', 'हेल्थ मैनेजर') },
  ],
  who: {
    eyebrow: b('Who We Are', 'हम कौन हैं'),
    title: b('Modern Healthcare, Delivered Anywhere in India', 'आधुनिक स्वास्थ्य सेवा, भारत में कहीं भी'),
    p1: b('WeClinic™ is a healthcare company with a physical presence in Kanpur and Noida, providing high-quality in-person consultations and teleconsultation-based treatment. We run modern physical clinics in Kanpur and Noida along with a dedicated teleconsultation centre that serves patients across every state of India.', 'वीक्लिनिक™ एक हेल्थकेयर कंपनी है जिसकी कानपुर और नोएडा में मौजूदगी है, और जो क्लिनिक में अच्छा परामर्श और टेली-परामर्श आधारित उपचार देती है। कानपुर और नोएडा के आधुनिक क्लिनिक के साथ हमारा समर्पित टेली-परामर्श केंद्र भारत के हर राज्य के मरीज़ों की सेवा करता है।'),
    p2: b('Every patient gets more than a prescription — our care model is built around follow-through:', 'हर मरीज़ को सिर्फ़ पर्ची नहीं मिलती — हमारी देखभाल लगातार साथ निभाने पर टिकी है:'),
    points: [
      b('Teleconsultation & video consultation with specialist doctors', 'विशेषज्ञ डॉक्टरों से टेली और वीडियो परामर्श'),
      b('Doorstep delivery of medicines anywhere in India', 'भारत में कहीं भी दवा की होम डिलीवरी'),
      b('Personalised diet charts & exercise videos per diagnosis', 'जांच के अनुसार व्यक्तिगत डाइट चार्ट और व्यायाम वीडियो'),
      b('Dedicated healthcare manager for weekly follow-ups', 'साप्ताहिक फॉलो-अप के लिए समर्पित हेल्थकेयर मैनेजर'),
      b('Tech-enabled, fully paperless clinic operations', 'टेक आधारित, पूरी तरह पेपरलेस क्लिनिक'),
    ],
    p3: b('We care for a wide range of chronic conditions — from PCOD/PCOS, piles, fistula and fissure to arthritis, spondylitis, kidney stones, gout, skin and hair disorders, men\'s health concerns and many more.', 'हम कई पुरानी समस्याओं की देखभाल करते हैं — PCOD/PCOS, बवासीर, भगंदर और फिशर से लेकर गठिया, स्पॉन्डिलाइटिस, पथरी, गाउट, त्वचा और बालों की समस्याएं, पुरुषों की स्वास्थ्य समस्याएं और बहुत कुछ।'),
  },
  story: {
    eyebrow: b('Our Story', 'हमारी कहानी'),
    title: b('Born to Close the Gaps in Healthcare', 'स्वास्थ्य सेवा की कमियां दूर करने के लिए शुरुआत'),
    p1: b('WeClinic™ was started in 2020 by husband-wife entrepreneur duo Alok Katiyar (B.Tech, IIT Roorkee) and Dr. Deeksha Katiyar (BHMS, PG London), after they noticed clear gaps in the market: most doctors served only a small local population, there were no large, organised players, and modern clinics simply didn\'t exist in most towns and cities.', 'वीक्लिनिक™ की शुरुआत 2020 में पति-पत्नी उद्यमी जोड़ी आलोक कटियार (B.Tech, IIT रुड़की) और डॉ. दीक्षा कटियार (BHMS, PG लंदन) ने की, जब उन्होंने देखा कि ज़्यादातर डॉक्टर सिर्फ़ छोटे स्थानीय इलाके की सेवा कर पाते हैं, कोई बड़ा संगठित नाम नहीं है, और ज़्यादातर शहरों-कस्बों में आधुनिक क्लिनिक हैं ही नहीं।'),
    p2: b('To change that — and to provide affordable-yet-excellent healthcare for a billion Indians — WeClinic™ was born. Today it serves thousands of patients every month, having cared for over 8 Lakh patients since inception: from metro and tier-1 cities to the remotest villages and hill regions of Uttarakhand, Himachal Pradesh and Jammu & Kashmir.', 'इसे बदलने के लिए — और करोड़ों भारतीयों को सस्ती पर बेहतरीन स्वास्थ्य सेवा देने के लिए — वीक्लिनिक™ की शुरुआत हुई। आज यह हर महीने हज़ारों मरीज़ों की सेवा करता है और शुरुआत से अब तक 8 लाख से ज़्यादा मरीज़ों की देखभाल कर चुका है: महानगरों से लेकर उत्तराखंड, हिमाचल और जम्मू-कश्मीर के दूर-दराज़ गांवों और पहाड़ों तक।'),
    link: b('Meet our Management Team', 'हमारी मैनेजमेंट टीम से मिलें'),
  },
  team: {
    eyebrow: b('Our People', 'हमारी टीम'),
    title: b('The Team Behind WeClinic™', 'वीक्लिनिक™ के पीछे की टीम'),
    p: b('Doctors, healthcare managers, pharmacists and support staff — one team working round-the-clock so every patient, anywhere in India, gets the same standard of care.', 'डॉक्टर, हेल्थकेयर मैनेजर, फार्मासिस्ट और सपोर्ट स्टाफ़ — एक टीम जो दिन-रात काम करती है ताकि भारत में कहीं भी हर मरीज़ को एक जैसी देखभाल मिले।'),
    caption: b('The WeClinic™ family — doctors and team members at our annual celebration.', 'वीक्लिनिक™ परिवार — सालाना समारोह में डॉक्टर और टीम।'),
  },
  culture: {
    eyebrow: b('Life at WeClinic™', 'वीक्लिनिक™ में काम'),
    title: b('A Culture Built Around the Patient', 'मरीज़ को केंद्र में रखने वाली संस्कृति'),
    p1: b('WeClinic™ provides a dynamic, growth-driven work environment. Our doctors and staff are trained continuously on modern clinical protocols and patient-first communication, and our paperless, tech-enabled operations let the team focus on what matters most — the patient.', 'वीक्लिनिक™ में तेज़ी से आगे बढ़ने वाला माहौल है। हमारे डॉक्टर और स्टाफ़ आधुनिक क्लिनिकल प्रोटोकॉल और मरीज़-पहले संवाद पर लगातार प्रशिक्षित होते हैं, और पेपरलेस, टेक आधारित काम से टीम सबसे ज़रूरी चीज़ — मरीज़ — पर ध्यान दे पाती है।'),
    p2: b('We believe great healthcare starts with a great team. That is why we invest in our people through regular training, team celebrations and a culture of ownership — every member, from doctors to healthcare managers, is empowered to go the extra mile for every patient.', 'हमारा मानना है कि अच्छी स्वास्थ्य सेवा अच्छी टीम से शुरू होती है। इसलिए हम नियमित ट्रेनिंग, टीम समारोह और ज़िम्मेदारी की संस्कृति से अपने लोगों में निवेश करते हैं — डॉक्टरों से लेकर हेल्थकेयर मैनेजरों तक, हर कोई हर मरीज़ के लिए एक कदम आगे बढ़ने को तैयार है।'),
  },
  cta: {
    title: b('Start Your Treatment Today', 'आज ही उपचार शुरू करें'),
    text: b('Consult our expert doctors online — medicines delivered to your doorstep anywhere in India.', 'हमारे विशेषज्ञ डॉक्टरों से ऑनलाइन परामर्श लें — दवा भारत में कहीं भी आपके घर तक।'),
  },
  images: {
    hero: '/images/about/clinic-hero.webp',
    doctors: '/images/about/doctors.webp',
    culture: '/images/about/culture.webp',
    team: '/images/about/team.jpg',
    clinic: '/images/clinic.webp',
  },
}

export const MANAGEMENT = {
  eyebrow: b('Leadership', 'नेतृत्व'),
  title: b('The People Behind WeClinic™', 'वीक्लिनिक™ के पीछे के लोग'),
  intro: b('Founders, doctors and department heads driving WeClinic™ — with 8 Lakh+ patients cared for across India.', 'वीक्लिनिक™ को आगे बढ़ाने वाले संस्थापक, डॉक्टर और विभाग प्रमुख — पूरे भारत में 8 लाख+ मरीज़ों की देखभाल।'),
  teamImage: '/images/about/management-team.jpg',
  teamCaption: b('The WeClinic™ leadership team — doctors, department heads and senior managers.', 'वीक्लिनिक™ लीडरशिप टीम — डॉक्टर, विभाग प्रमुख और वरिष्ठ मैनेजर।'),
  foundersTitle: b('Meet the Founders', 'संस्थापकों से मिलें'),
  founders: [
    {
      name: b('Alok Katiyar', 'आलोक कटियार'),
      role: b('Co-Founder', 'सह-संस्थापक'),
      degree: 'B.Tech, IIT Roorkee',
      photo: '/images/founders/alok-katiyar.jpg',
      initials: 'AK',
      linkedin: 'https://www.linkedin.com/in/katiyuch/',
      paras: [
        b('Mr. Alok Katiyar is an entrepreneur, innovator and co-founder of WeClinic™, a startup committed to transforming Indian healthcare. Born in Kanpur to a pharmacist father, Alok grew up in a family where stability and conventional career paths were the norm — entrepreneurship was a foreign concept.', 'आलोक कटियार एक उद्यमी, इनोवेटर और वीक्लिनिक™ के सह-संस्थापक हैं, जो भारतीय स्वास्थ्य सेवा को बदलने के लिए प्रतिबद्ध स्टार्टअप है। कानपुर में एक फार्मासिस्ट पिता के घर जन्मे आलोक ऐसे परिवार में पले जहां स्थिर नौकरी ही सामान्य रास्ता था — उद्यमिता एक अनजान विचार थी।'),
        b('Inspired by his sister, who excelled at IIT and went on to become a doctor, Alok earned a top rank in the Uttar Pradesh state board exams in 2003 and secured admission to IIT Roorkee. In his second year he built an app for government exam preparation that crossed 5,000 downloads in its first week; by graduation the venture was earning ₹3 lakh per month. He went on to found Mad Guys Labs, a content-platform startup that grew to a 25–30 person team with ₹25 lakh invested by IIT Roorkee.', 'IIT में उत्कृष्ट रहीं और डॉक्टर बनीं अपनी बहन से प्रेरित होकर आलोक ने 2003 में उत्तर प्रदेश बोर्ड परीक्षा में टॉप रैंक पाई और IIT रुड़की में दाखिला लिया। दूसरे साल में उन्होंने सरकारी परीक्षा की तैयारी का ऐप बनाया जिसके पहले हफ्ते में 5,000 डाउनलोड हुए; ग्रेजुएशन तक यह ₹3 लाख प्रति माह कमा रहा था। फिर उन्होंने मैड गाइज़ लैब्स की स्थापना की, जिसमें IIT रुड़की ने ₹25 लाख निवेश किए और टीम 25–30 लोगों की हुई।'),
        b('In 2019, Alok returned to Kanpur with his wife, Dr. Deeksha Katiyar. During a dengue outbreak the couple organised free health camps, which inspired them to start WeClinic™ with an initial investment of just ₹2.5 lakh. When COVID-19 disrupted offline operations in 2020, Alok quickly built a platform for online consultations; with an innovative cash-on-delivery model, the business scaled to over 1,000 patients daily by the end of that year.', '2019 में आलोक अपनी पत्नी डॉ. दीक्षा कटियार के साथ कानपुर लौटे। डेंगू के प्रकोप के दौरान दंपति ने मुफ़्त स्वास्थ्य शिविर लगाए, जिससे सिर्फ़ ₹2.5 लाख के शुरुआती निवेश से वीक्लिनिक™ शुरू करने की प्रेरणा मिली। 2020 में COVID-19 से ऑफ़लाइन काम रुका तो आलोक ने तुरंत ऑनलाइन परामर्श का प्लेटफ़ॉर्म बनाया; कैश-ऑन-डिलीवरी मॉडल के साथ उस साल के अंत तक रोज़ 1,000 से ज़्यादा मरीज़ जुड़ने लगे।'),
        b('Today WeClinic™ blends personal care with modern technology, handling over 2.5 lakh consultations monthly through its Kanpur and Noida clinics and teleconsultation centre. Alok\'s vision is to transform India\'s healthcare landscape with a model that is accessible, affordable and impactful.', 'आज वीक्लिनिक™ व्यक्तिगत देखभाल को आधुनिक टेक्नोलॉजी से जोड़ता है और कानपुर-नोएडा क्लिनिक व टेली-परामर्श केंद्र से हर महीने 2.5 लाख से ज़्यादा परामर्श देता है। आलोक का सपना है भारत की स्वास्थ्य सेवा को सुलभ, सस्ता और असरदार बनाना।'),
      ],
      quote: b('"Entrepreneurship is not just about success — it\'s about persistence, learning from failures, and staying committed to a larger purpose."', '"उद्यमिता सिर्फ़ सफलता नहीं है — यह लगन, असफलताओं से सीखना और बड़े उद्देश्य के प्रति प्रतिबद्ध रहना है।"'),
    },
    {
      name: b('Dr. Deeksha Katiyar', 'डॉ. दीक्षा कटियार'),
      role: b('Co-Founder & Managing Director', 'सह-संस्थापक और प्रबंध निदेशक'),
      degree: 'BHMS, PG (London)',
      photo: '/images/founders/deeksha-katiyar.webp',
      initials: 'DK',
      paras: [
        b('Dr. Deeksha Katiyar is an experienced physician with a background in clinical research, public health and wellness. Her areas of focus include digestive and anorectal conditions (piles, fistula, fissure, gastric complaints) and joint problems (gout, cervical, sciatica and osteoarthritis).', 'डॉ. दीक्षा कटियार एक अनुभवी चिकित्सक हैं, जिनका अनुभव क्लिनिकल रिसर्च, पब्लिक हेल्थ और वेलनेस में है। उनके मुख्य क्षेत्र हैं पाचन और गुदा से जुड़ी समस्याएं (बवासीर, भगंदर, फिशर, गैस्ट्रिक) और जोड़ों की समस्याएं (गाउट, सर्वाइकल, साइटिका और ऑस्टियोआर्थराइटिस)।'),
        b('After completing her post-graduation in London, she saw that a single clinic can only serve a small regional population. To overcome this she conceived a new-generation clinic combining physical and online presence — the idea that became WeClinic™, which she co-founded with her husband Alok Katiyar in 2020.', 'लंदन से पोस्ट-ग्रेजुएशन के बाद उन्होंने देखा कि एक क्लिनिक सिर्फ़ छोटे इलाके की सेवा कर पाता है। इसे बदलने के लिए उन्होंने क्लिनिक और ऑनलाइन दोनों वाली नई पीढ़ी के क्लिनिक की कल्पना की — यही विचार वीक्लिनिक™ बना, जिसे उन्होंने 2020 में पति आलोक कटियार के साथ शुरू किया।'),
        b('At WeClinic™, Dr. Deeksha heads the doctors\' team and consults daily with patients through physical OPD and teleconsultations. She leads internal case discussions, monitors service quality and prescriptions, and contributes to the WeClinic™ YouTube channel.', 'वीक्लिनिक™ में डॉ. दीक्षा डॉक्टरों की टीम का नेतृत्व करती हैं और रोज़ OPD और टेली-परामर्श में मरीज़ देखती हैं। वे केस चर्चाओं का नेतृत्व, सेवा गुणवत्ता और पर्चियों की निगरानी करती हैं, और वीक्लिनिक™ YouTube चैनल में योगदान देती हैं।'),
      ],
      quote: b('"A doctor\'s reach shouldn\'t end at the clinic door — every patient in every corner of India deserves the same standard of care."', '"डॉक्टर की पहुंच क्लिनिक के दरवाज़े पर ख़त्म नहीं होनी चाहिए — भारत के हर कोने के मरीज़ को एक जैसी देखभाल का हक़ है।"'),
    },
  ],
  linkedin: b('Connect on LinkedIn', 'LinkedIn पर जुड़ें'),
}

export const CONTACT = {
  title: b('Get in Touch with WeClinic™', 'वीक्लिनिक™ से संपर्क करें'),
  sub: b('Visit our clinic, call us, or send your query — we usually call back within 30 minutes.', 'क्लिनिक आएं, कॉल करें, या अपना सवाल भेजें — हम आमतौर पर 30 मिनट में कॉल करते हैं।'),
  addressTitle: b('Head Office', 'मुख्य कार्यालय'),
  address: b('3/84 F Block, Panki, Kanpur, UP 208020', '3/84 एफ ब्लॉक, पनकी, कानपुर, उ.प्र. 208020'),
  noida: b('Also in Noida — call +91 79051 36461 for clinic details.', 'नोएडा में भी — क्लिनिक की जानकारी के लिए +91 79051 36461 पर कॉल करें।'),
  phonesTitle: b('Call us', 'कॉल करें'),
  phones: ['+91 79051 36461', '+91 63920 42873', '+91 79059 16362', '+91 93363 25590'],
  hoursTitle: b('Timings', 'समय'),
  hours: b('10 AM to 9 PM (Monday OFF)', 'सुबह 10 से रात 9 बजे (सोमवार बंद)'),
  emailTitle: b('Email', 'ईमेल'),
  reviews: b('4.6★ from 6,133 Google reviews', '6,133 गूगल रिव्यू में 4.6★'),
  formTitle: b('Send us your query', 'अपना सवाल भेजें'),
}
