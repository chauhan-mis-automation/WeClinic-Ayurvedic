// Piles-Fistula-Fissure ads landing page — weclinic.in/piles-fistula-fissure-eng + /hi/piles-homeopathy se.
// "100% सफल इलाज", "बिना ऑपरेशन जड़ से इलाज" jaise daave narm kiye gaye hain.
const b = (en, hi) => ({ en, hi })

export const LP = {
  hero: {
    title: b('Are you suffering from Piles, Fistula or Fissure?', 'क्या आप बवासीर, भगन्दर, फिशर से परेशान हैं?'),
    sub: b('Call today for trusted Ayurvedic care.', 'भरोसेमंद आयुर्वेदिक उपचार के लिए आज ही कॉल करें।'),
    formTitle: b('Free Consultation', 'फ्री परामर्श'),
    symptoms: [b('Anal Warts', 'मस्से हैं'), b('Bleeding', 'खून आता है'), b('Pus', 'पस आता है'), b('Anal Cut', 'कट लगा है')],
    symptomsLabel: b('What are your symptoms?', 'इनमें से आपको क्या-क्या समस्या है?'),
    submit: b('Start Now', 'शुरुआत करें'),
    privacy: b('Your identity will be kept confidential!', 'आपकी पहचान गुप्त रखी जायेगी!'),
  },
  offer: {
    kicker: b('One trusted place for chronic piles, fistula & fissure care', 'बवासीर, भगन्दर, फिशर की पुरानी समस्याओं के लिए भरोसेमंद संस्थान'),
    title1: b('Piles - Fistula - Fissure Ayurvedic treatment at just ', 'बवासीर - भगन्दर - फिशर का आयुर्वेदिक उपचार मात्र '),
    price: '₹1599*',
    rating: '4.7',
    ratings: '97,532',
    recommend: b('98.8% of customers would recommend this to a friend', '98.8% ग्राहक दोस्तों को इसकी सलाह देंगे'),
    points: [
      b('Clinic & online consultation facility', 'क्लीनिक एवं ऑनलाइन परामर्श की सुविधा'),
      b('*30 days of medicine at ₹1599', '*1599 रुपए में 30 दिन की दवा'),
      b('3-5 month course* (T&C apply)', '3-5 महीने का कोर्स* (नियम व शर्तें लागू)'),
      b('Bleeding & non-bleeding piles', 'खूनी एवं बादी बवासीर का उपचार'),
      b('Anal warts', 'मस्सों का उपचार'),
      b('Anal pus', 'पस आने का उपचार'),
      b('Constipation', 'कब्ज का उपचार'),
      b('Free home delivery across India', 'दवाओं की फ्री होम डिलीवरी (पूरे भारत में)'),
      b('Fully confidential delivery', 'दवाओं की पूर्णतः गोपनीय डिलीवरी'),
      b('Free diet chart', 'फ्री डाइट चार्ट'),
      b('75,654+ satisfied patients', '75,654 से ज़्यादा संतुष्ट मरीज़'),
    ],
    image: '/images/clinic.webp',
  },
  treat: {
    title: b('What do we treat?', 'हम किन रोगों का उपचार करते हैं?'),
    items: [
      { img: '/images/piles/treat-piles.webp', icon: '🌿', name: b('Piles (Bleeding & Non-Bleeding)', 'बवासीर (खूनी एवं बादी)'), text: b('Swollen veins in the lower anus and rectum.', 'मलद्वार और मलाशय के निचले हिस्से की फूली हुई नसें।'), slug: 'piles' },
      { img: '/images/piles/treat-fistula.webp', icon: '🩺', name: b('Fistula', 'भगन्दर (फिस्टुला)'), text: b('An abnormal passage from inside the anus to the skin outside. Some cases may need a surgeon.', 'मलद्वार के अंदर से बाहर की त्वचा तक बनी असामान्य सुरंग। कुछ मामलों में सर्जन की ज़रूरत हो सकती है।'), slug: 'fistula' },
      { img: '/images/piles/treat-fissure.webp', icon: '✂️', name: b('Fissure', 'फिशर'), text: b('A small, painful tear in the lining of the anus.', 'मलद्वार की त्वचा में छोटी, दर्द वाली दरार।'), slug: 'fissure' },
      { img: '/images/piles/treat-constipation.webp', icon: '🥗', name: b('Constipation', 'कब्ज'), text: b('Infrequent bowel movements and hard-to-pass stools.', 'पेट ठीक से साफ़ न होना और सख्त मल।'), slug: 'constipation' },
      { img: '/images/piles/treat-colitis.webp', icon: '🔥', name: b('Colitis', 'कोलाइटिस'), text: b('Chronic inflammation of the colon.', 'बड़ी आंत की पुरानी सूजन।'), slug: 'colitis' },
      { img: '/images/piles/treat-warts.webp', icon: '🖐️', name: b('Anal Warts', 'मस्से'), text: b('Warts around and inside the anus.', 'मलद्वार के आसपास और अंदर मस्से।') },
      { img: '/images/piles/treat-cut.webp', icon: '🩹', name: b('Anal Cut', 'कट लगना'), text: b('Cuts or tears causing pain and burning.', 'दर्द और जलन वाले कट या दरार।') },
      { img: '/images/piles/treat-pus.webp', icon: '⚠️', name: b('Anal Pus (Abscess)', 'पस आना'), text: b('A painful collection of pus near the anus — a surgeon may be needed.', 'मलद्वार के पास पस भरी दर्द वाली गांठ — सर्जन की ज़रूरत हो सकती है।'), slug: 'anal-abscess' },
    ],
    online: b('Our specialists are online... Call now...', 'हमारे विशेषज्ञ ऑनलाइन हैं ... अभी कॉल करें...'),
  },
  plan: {
    title: b('Complete care plan for piles, fistula & fissure', 'बवासीर, भगन्दर, फिशर के उपचार का सम्पूर्ण प्लान'),
    sub: b('How does our plan work?', 'हमारा प्लान कैसे काम करता है?'),
    steps: [
      b('Call our specialists on the number above.', 'ऊपर दिए गए नंबर पर हमारे विशेषज्ञों से सम्पर्क करें।'),
      b('Our experts take complete details of your problem and your address for home delivery.', 'हमारे विशेषज्ञ आपकी समस्या की पूरी जानकारी लेंगे एवं होम डिलीवरी के लिए पता लेंगे।'),
      b('Suitable medicines are selected for your case and couriered to you.', 'आपकी समस्या के आधार पर उचित दवाओं का चयन करके आपको कूरियर किया जायेगा।'),
      b('After delivery, our team calls you and explains the medicine and precautions.', 'दवा डिलीवर होने के बाद हमारी टीम आपसे संपर्क करेगी एवं दवा समझायी जाएगी।'),
      b('Our team calls you regularly during treatment to track your progress.', 'उपचार के दौरान हमारी टीम आपको समय-समय पर कॉल करती रहेगी।'),
      b('For any problem during treatment, you can book an appointment with our doctors.', 'उपचार के दौरान किसी भी समस्या के लिए आप हमारे डॉक्टर्स के साथ अपॉइंटमेंट ले सकते हैं।'),
    ],
    image: '/images/piles/doctors-team.webp',
  },
  why: {
    title: b('Why choose Jeewan Jyoti for treatment?', 'उपचार के लिए जीवन ज्योति क्यों चुनें?'),
    items: [
      { icon: '🛡️', name: b('Completely Confidential', 'पूर्ण रूप से गुप्त'), text: b('We never share your personal information with any third party.', 'आपकी निजी जानकारी कभी किसी को नहीं दी जाती।') },
      { icon: '📦', name: b('Home Delivery', 'घर तक डिलीवरी'), text: b('Medicines delivered in a discreet, secure box.', 'दवा सादे, सुरक्षित पैकेट में घर तक।') },
      { icon: '📋', name: b('Complete Care Plan', 'सम्पूर्ण उपचार प्लान'), text: b('Medicine, diet chart and regular follow-up together.', 'दवा, डाइट चार्ट और नियमित फॉलो-अप एक साथ।') },
      { icon: '💬', name: b('Online & Clinic Consultation', 'ऑनलाइन एवं क्लिनिक परामर्श'), text: b('Consult our doctors online or visit our clinic during treatment.', 'उपचार के दौरान ऑनलाइन परामर्श लें या क्लिनिक आएं।') },
    ],
  },
  kits: {
    image: '/images/piles/treatment-kit.webp',
    items: [
      { title: b('Jeewan Jyoti Piles Treatment Kit', 'जीवन ज्योति बवासीर उपचार किट'), name: b('piles', 'बवासीर') },
      { title: b('Jeewan Jyoti Fissure Treatment Kit', 'जीवन ज्योति फिशर उपचार किट'), name: b('fissure', 'फिशर') },
      { title: b('Jeewan Jyoti Fistula Treatment Kit', 'जीवन ज्योति भगन्दर उपचार किट'), name: b('fistula', 'फिस्टुला') },
    ],
    text: b(
      'Care for {name} usually needs a course of about 3 to 4 months; the duration may be shorter or longer depending on severity. Taking the medicines regularly and following the diet chart and routine we give helps you see results sooner.',
      '{name} के उपचार में आमतौर पर लगभग 3 से 4 महीने का कोर्स लगता है; अवधि समस्या की गंभीरता के अनुसार कम या ज़्यादा हो सकती है। दवाओं का नियमित सेवन और बताए गए डाइट चार्ट व दिनचर्या का पालन करने से जल्दी लाभ मिलता है।'
    ),
    note: b('Note: Complex fistula, large abscess or grade-4 piles may need a surgeon — our doctors will tell you honestly.', 'ध्यान दें: जटिल भगन्दर, बड़ी पस वाली गांठ या ग्रेड-4 बवासीर में सर्जन की ज़रूरत हो सकती है — हमारे डॉक्टर ईमानदारी से बताएंगे।'),
  },
}
