// WeClinic™ Media Mentions — weclinic.in se. Links asli news articles ke hain.
const b = (en, hi) => ({ en, hi })

export const MEDIA_HEAD = {
  eyebrow: b('In the news', 'मीडिया में'),
  title: b('WeClinic™ Media Mentions', 'वीक्लिनिक™ मीडिया में'),
  sub: b('Featured by leading business, health and news publications.', 'प्रमुख बिज़नेस, हेल्थ और न्यूज़ प्रकाशनों में चर्चा।'),
  read: b('Read More', 'और पढ़ें'),
}

export const MEDIA = [
  { name: 'ET Edge', url: 'https://etedge-insights.com/trending/weclinic-homoeopathy-targets-%E2%82%B950-crore-revenue-in-fy-25-26-with-ncr-expansion-digital-push/?amp=1', text: b('WeClinic™ targets ₹50 Crore revenue growth in FY 2025-26 with NCR expansion and a strong digital healthcare strategy.', 'वीक्लिनिक™ का FY 2025-26 में NCR विस्तार और डिजिटल हेल्थकेयर रणनीति के साथ ₹50 करोड़ राजस्व का लक्ष्य।') },
  { name: 'SugerMint', url: 'https://sugermint.com/weclinic-homeopathy/', text: b('The inspiring startup journey of WeClinic™ and its mission to modernise healthcare with technology.', 'वीक्लिनिक™ की प्रेरक स्टार्टअप यात्रा और टेक्नोलॉजी से स्वास्थ्य सेवा को आधुनिक बनाने का मिशन।') },
  { name: 'BW People', url: 'https://www.bwpeople.in/article/weclinic-to-expand-workforce-by-100-in-2025-to-strengthen-operations-544678', text: b('WeClinic™ plans 100% workforce expansion in 2025 to strengthen operations and enhance patient care services.', 'वीक्लिनिक™ की 2025 में संचालन और मरीज़ सेवा मज़बूत करने के लिए टीम दोगुनी करने की योजना।') },
  { name: 'BW Healthcare', url: 'https://www.bwhealthcareworld.com/article/the-homeopathy-angle-of-trumps-tariff-decision-what-the-world-forgot-to-notice-553901', text: b('Expert commentary on how international trade decisions may impact healthcare systems.', 'अंतरराष्ट्रीय व्यापार फ़ैसलों का स्वास्थ्य व्यवस्था पर असर — विशेषज्ञ टिप्पणी।') },
  { name: 'Only My Health', url: 'https://www.onlymyhealth.com/debunking-myths-around-homeopathy-12977826119', text: b('Expert discussion debunking common health myths and spreading awareness about safe healthcare choices.', 'स्वास्थ्य से जुड़े आम मिथकों पर विशेषज्ञ चर्चा और सुरक्षित विकल्पों के प्रति जागरूकता।') },
  { name: 'The HealthSite', url: 'https://www.thehealthsite.com/hindi/author/drdeekshakatiyar/', text: b('Health and wellness articles by Dr Deeksha Katiyar covering lifestyle, nutrition, and preventive healthcare.', 'डॉ. दीक्षा कटियार के जीवनशैली, पोषण और बचाव से जुड़े स्वास्थ्य लेख।') },
  { name: 'Freepress Journal', url: 'https://www.freepressjournal.in/tech/5-power-couples-redefining-tech-startups', text: b('Featured among inspiring power couples redefining innovation, entrepreneurship, and startup leadership in India.', 'भारत में इनोवेशन और स्टार्टअप लीडरशिप को नई परिभाषा देने वाले प्रेरक कपल्स में शामिल।') },
  { name: 'Republic World', url: 'https://www.republicworld.com/initiatives/celebrating-doctors-for-their-unwavering-service-and-unending-dedication', text: b('Recognition for doctors and healthcare professionals dedicated to serving patients with commitment and compassion.', 'समर्पण और करुणा से मरीज़ों की सेवा करने वाले डॉक्टरों और स्वास्थ्य कर्मियों का सम्मान।') },
  { name: 'Times Of India', url: 'https://timesofindia.indiatimes.com/life-style/beauty/how-to-keep-your-skin-glowing-this-monsoon/photostory/123139848.cms', text: b('Expert skincare insights on maintaining naturally glowing and healthy skin during the monsoon season.', 'मानसून में त्वचा को स्वस्थ और चमकदार रखने पर विशेषज्ञ सलाह।') },
  { name: 'News9 Live', url: 'https://www.news9live.com/health/health-news/covid-19-case-tally-crosses-1000-mark-in-india-yet-doctors-say-there-is-no-need-to-panic-2858609', text: b('Expert medical perspective on rising COVID-19 cases and public awareness regarding preventive healthcare measures.', 'बढ़ते COVID-19 मामलों पर चिकित्सा दृष्टिकोण और बचाव के उपायों पर जागरूकता।') },
  { name: 'Healthcare Radius', url: 'https://www.healthcareradius.in/clinical/treatment/homeopathy-could-work-faster-heres-whats-been-holding-it-back', text: b('Discussion on the challenges slowing faster adoption of alternative care in modern healthcare.', 'आधुनिक स्वास्थ्य सेवा में वैकल्पिक चिकित्सा को तेज़ी से अपनाने की चुनौतियों पर चर्चा।') },
  { name: 'TV9 Hindi', url: 'https://www.tv9hindi.com/lifestyle/what-is-biotin-and-importance-for-our-body-know-from-expert-3160994.html', text: b('Expert health and lifestyle guidance covering nutrition, uric acid, vitamin deficiency, and seasonal wellness tips.', 'पोषण, यूरिक एसिड, विटामिन की कमी और मौसमी सेहत पर विशेषज्ञ सलाह।') },
]
