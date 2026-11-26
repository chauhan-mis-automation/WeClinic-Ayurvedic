// ===== Piles (Bawaseer) — weclinic.in/hi/piles-homeopathy se (Hindi), English anuvaad ke saath =====
// Homeopathic dawaiyan, "bina operation jad se ilaj" aur homeopathy ke nateeje hata diye gaye hain.
const b = (en, hi) => ({ en, hi })

export default {
  slug: 'piles',
  name: b('Piles', 'बवासीर'),
  seoTitle: b('Piles (Haemorrhoids) Ayurvedic Treatment | Jeewan Jyoti Ayurvedic Sansthan', 'बवासीर (पाइल्स) का आयुर्वेदिक उपचार | जीवन ज्योति आयुर्वेदिक संस्थान'),
  closing: { title: b('Start Your Piles Care Today', 'बवासीर से राहत के लिए आज ही शुरुआत करें') },

  hero: {
    eyebrow: b('Confidential care for piles, fissure & fistula', 'बवासीर, फिशर और भगंदर की गोपनीय देखभाल'),
    title1: b('Piles (Haemorrhoids) Ayurvedic Treatment — ', 'बवासीर (पाइल्स) का आयुर्वेदिक उपचार — '),
    title2: b('Private & Personalised', 'गोपनीय और व्यक्तिगत'),
    text: b('Trusted Ayurvedic care for bleeding and non-bleeding piles, with diet guidance and discreet home delivery, starting at just ₹1599.', 'खूनी और बादी बवासीर के लिए भरोसेमंद आयुर्वेदिक देखभाल — डाइट सलाह और गोपनीय होम डिलीवरी के साथ, सिर्फ़ ₹1599 से शुरू।'),
    rating: { value: '4.7', count: '97,532' },
  },
  form: {
    symptoms: [b('Warts / Lumps', 'मस्से हैं'), b('Bleeding', 'खून आता है'), b('Pus', 'पस आता है'), b('Cut / Burning', 'कट लगा है'), b('Constipation', 'कब्ज़')],
  },

  types: {
    eyebrow: b('What we treat', 'हम क्या ठीक करने में मदद करते हैं'),
    title: b('Piles, Fissure, Fistula & Related Problems', 'बवासीर, फिशर, भगंदर और जुड़ी समस्याएं'),
    sub: b('From bleeding piles to chronic constipation, our doctors design a confidential plan for every stage.', 'खूनी बवासीर से लेकर पुरानी कब्ज़ तक — हर स्टेज के लिए हमारे डॉक्टर गोपनीय प्लान बनाते हैं।'),
    items: [
      { icon: '', name: b('Bleeding Piles', 'खूनी बवासीर'), desc: b('Painless bright red bleeding with stools', 'मल के साथ बिना दर्द चमकीला लाल खून') },
      { icon: '', name: b('Non-Bleeding Piles', 'बादी बवासीर'), desc: b('Pain, itching & swollen lumps', 'दर्द, खुजली और सूजे मस्से') },
      { icon: '', name: b('Fissure', 'फिशर'), desc: b('Sharp pain during & after stools', 'शौच के समय व बाद तेज़ दर्द') },
      { icon: '', name: b('Fistula', 'भगंदर'), desc: b('Pus or discharge from an opening', 'छेद से मवाद या पानी रिसना') },
      { icon: '', name: b('Chronic Constipation', 'पुरानी कब्ज़'), desc: b('The most common root trigger', 'सबसे आम मूल कारण') },
      { icon: '', name: b('Piles in Pregnancy', 'गर्भावस्था में बवासीर'), desc: b('Gentle care under doctor guidance', 'डॉक्टर की देखरेख में सौम्य देखभाल') },
    ],
  },

  reviewer: null,

  takeaways: [
    { k: b('What it is', 'यह क्या है'), v: b('In piles (haemorrhoids) the veins of the anus and lower rectum swell into lumps, causing bleeding during stools, pain, itching and lumps coming out.', 'बवासीर में मलद्वार और मलाशय के निचले हिस्से की नसें फूलकर मस्से बना लेती हैं, जिससे शौच के समय खून, दर्द, खुजली और मस्से बाहर आने जैसी समस्याएं होती हैं।') },
    { k: b('Two types', 'दो प्रकार'), v: b('Bleeding piles, with painless bleeding, and non-bleeding (dry) piles, where pain, itching and lumps are the main problems.', 'खूनी बवासीर जिसमें बिना दर्द खून आता है, और बादी बवासीर जिसमें दर्द, खुजली व मस्से प्रमुख हैं।') },
    { k: b('Main causes', 'मुख्य कारण'), v: b('Chronic constipation, straining, low fibre and water, prolonged sitting, pregnancy and obesity.', 'पुरानी कब्ज़, शौच में ज़ोर लगाना, रेशे व पानी की कमी, लंबे समय बैठना, गर्भावस्था, मोटापा।') },
    { k: b('Our approach', 'हमारा तरीका'), v: b('A confidential, personalised Ayurvedic plan with medicine, diet and habit guidance that also targets constipation.', 'गोपनीय, व्यक्तिगत आयुर्वेदिक प्लान — दवा, डाइट और आदतों की सलाह, जो कब्ज़ पर भी काम करता है।') },
    { k: b('Honest limits', 'सच्ची सीमाएं'), v: b('Grade 4 piles (always outside) often need a surgical procedure; our doctors will tell you clearly when that is the better option.', 'ग्रेड 4 बवासीर (हमेशा बाहर रहने वाले मस्से) में अक्सर सर्जरी बेहतर होती है; हमारे डॉक्टर यह साफ़ बताएंगे।') },
    { k: b('Safety', 'सावधानी'), v: b('Blood in stools is not always piles — dark blood, blood mixed with stool, weight loss or changed bowel habits need a check for other causes, especially after 45.', 'शौच में खून हमेशा बवासीर नहीं होता — गहरा खून, मल में मिला खून, वज़न घटना या मल की आदत बदलना हो तो दूसरे कारणों की जांच ज़रूरी है, खासकर 45 के बाद।') },
  ],

  blocks: [
    {
      type: 'text', id: 'what-is', title: b('What Are Piles?', 'बवासीर (पाइल्स) क्या है?'),
      paras: [
        b('The anus and lower rectum contain a network of blood vessels that normally help control stools. When chronic constipation, repeated straining or pressure on the abdomen keeps these veins under strain, they swell into clusters or lumps (piles / haemorrhoids).', 'मलद्वार और मलाशय के निचले हिस्से में रक्त वाहिकाओं का एक जाल होता है जो सामान्य रूप से मल को रोकने में मदद करता है। जब पुरानी कब्ज़, बार-बार ज़ोर लगाने या पेट पर दबाव से इन नसों पर लगातार दबाव पड़ता है, तो ये फूलकर गुच्छे या मस्से बना लेती हैं। यही बवासीर है।'),
        b('Internal piles sit inside the anus — they are usually painless but cause bright red bleeding with stools. External piles lie under the skin outside the anus and cause more pain, swelling and itching; if a clot forms (thrombosed pile) the pain can be severe. Around 4 in 10 adults in India face piles at some point, but many delay treatment out of embarrassment and the problem grows. At Jeewan Jyoti, every consultation is completely confidential.', 'भीतरी बवासीर मलद्वार के अंदर होती है — इसमें प्रायः दर्द नहीं होता पर शौच के साथ चमकीला लाल खून आता है। बाहरी बवासीर मलद्वार के बाहर त्वचा के नीचे होती है — इसमें दर्द, सूजन और खुजली ज़्यादा होती है, और थक्का जमने पर असहनीय दर्द हो सकता है। भारत में लगभग हर 10 में से 4 वयस्क कभी न कभी इससे गुज़रते हैं, पर शर्म के कारण इलाज में देरी करते हैं और समस्या बढ़ जाती है। जीवन ज्योति में हर परामर्श पूरी तरह गोपनीय है।'),
      ],
    },
    { type: 'cta', title: b('Troubled by piles, lumps or bleeding during stools?', 'क्या आप बवासीर, मस्सों या शौच में खून से परेशान हैं?'), button: b('Call Now - Free Consultation', 'अभी कॉल करें - मुफ़्त परामर्श') },
    {
      type: 'grid', id: 'grades', title: b('Types and Grades of Piles', 'बवासीर के प्रकार और ग्रेड'),
      head: [b('Grade', 'ग्रेड'), b('Condition', 'स्थिति'), b('Symptoms', 'लक्षण'), b('Usual approach', 'आम तरीका')],
      rows: [
        [b('Grade 1', 'ग्रेड 1'), b('Lumps stay inside', 'मस्से अंदर ही रहते हैं'), b('Bleeding only', 'केवल खून आना'), b('Medicine, diet & habits', 'दवा, डाइट और आदतें')],
        [b('Grade 2', 'ग्रेड 2'), b('Come out during stools, go back on their own', 'शौच के समय बाहर आते हैं, अपने आप अंदर चले जाते हैं'), b('Bleeding, mild discomfort', 'खून, हल्की तकलीफ़'), b('Medicine, diet & habits', 'दवा, डाइट और आदतें')],
        [b('Grade 3', 'ग्रेड 3'), b('Come out, need pushing back with a finger', 'बाहर आते हैं, उंगली से अंदर करना पड़ता है'), b('Bleeding, pain, itching, wetness', 'खून, दर्द, खुजली, गीलापन'), b('Longer course with close follow-up', 'करीबी फॉलो-अप के साथ लंबा कोर्स')],
        [b('Grade 4', 'ग्रेड 4'), b('Always outside, do not go back', 'हमेशा बाहर रहते हैं, अंदर नहीं जाते'), b('Constant pain, discharge, clots', 'लगातार दर्द, रिसाव, थक्का'), b('Symptom relief; surgery is often better', 'लक्षणों में राहत; अक्सर सर्जरी बेहतर')],
      ],
      after: b('Bleeding vs non-bleeding piles: in bleeding piles, bright red blood drips or streams after stools, usually without pain, and over time can cause anaemia. In non-bleeding piles there is little or no blood, but more pain, burning, itching and swelling, often linked with constipation and gas.', 'खूनी बनाम बादी बवासीर: खूनी बवासीर में शौच के बाद बूंद-बूंद या धार में चमकीला लाल खून आता है, प्रायः बिना दर्द, और लंबे समय में खून की कमी कर सकता है। बादी बवासीर में खून नहीं या बहुत कम आता है, पर दर्द, जलन, खुजली और सूजन ज़्यादा होती है, जो अक्सर कब्ज़ और गैस से जुड़ी होती है।'),
    },
    {
      type: 'grid', id: 'difference', title: b('Piles vs Fissure vs Fistula', 'बवासीर, फिशर और भगंदर में फर्क'),
      head: [b('Aspect', 'पहलू'), b('Piles', 'बवासीर'), b('Fissure', 'फिशर'), b('Fistula', 'भगंदर')],
      rows: [
        [b('What happens', 'क्या होता है'), b('Veins swell into lumps', 'नसों का फूलकर मस्सा बनना'), b('A tear in the anal skin', 'मलद्वार की त्वचा में दरार'), b('A tunnel from inside the anus to the skin', 'मलद्वार के अंदर से त्वचा तक सुरंग')],
        [b('Pain', 'दर्द'), b('Usually mild (none in internal)', 'प्रायः कम (भीतरी में नहीं)'), b('Very sharp, during and for hours after stools', 'बहुत तेज़, शौच के समय व बाद घंटों'), b('Moderate, worse with swelling', 'मध्यम, सूजन में ज़्यादा')],
        [b('Blood', 'खून'), b('More, drops or stream', 'ज़्यादा, बूंदों या धार में'), b('Little, streak on stool', 'कम, मल पर लकीर'), b('Little, with pus', 'कम, मवाद के साथ')],
        [b('Key sign', 'खास लक्षण'), b('Lump coming out', 'मस्सा बाहर आना'), b('Blade-like pricking after stools', 'शौच के बाद ब्लेड जैसी चुभन'), b('Pus/fluid from an outside opening', 'बाहर छेद से मवाद-पानी रिसना')],
      ],
    },
    {
      type: 'cards', id: 'symptoms', icon: 'check', title: b('Symptoms of Piles', 'बवासीर के लक्षण'),
      items: [
        { t: b('Bright red blood during or after stools, in drops or a stream.', 'शौच के समय या बाद में चमकीला लाल खून, बूंदों या धार में।') },
        { t: b('A soft lump or swelling felt at the anus.', 'मलद्वार पर मुलायम गांठ या मस्सा महसूस होना।') },
        { t: b('Lumps coming out during stools, sometimes needing to be pushed back.', 'शौच के समय मस्से का बाहर आना, कभी-कभी उंगली से अंदर करना पड़ना।') },
        { t: b('Itching, burning and wetness around the anus.', 'मलद्वार में खुजली, जलन और गीलापन।') },
        { t: b('A feeling of incomplete emptying after stools.', 'शौच के बाद भी पेट पूरी तरह साफ़ न होने का एहसास।') },
        { t: b('Difficulty sitting, especially with swelling or a clot.', 'बैठने में तकलीफ़, खासकर सूजन या थक्के के समय।') },
        { t: b('Mucus or slight discharge staining clothes.', 'कपड़ों पर म्यूकस या हल्का स्राव लगना।') },
        { t: b('Weakness, dizziness and paleness from long-term blood loss (anaemia).', 'लंबे समय तक खून जाने से कमज़ोरी, चक्कर और पीलापन (एनीमिया)।') },
      ],
    },
    {
      type: 'list', id: 'causes', title: b('Causes of Piles', 'बवासीर के कारण'),
      items: [
        { b: b('Chronic constipation', 'पुरानी कब्ज़'), t: b('the biggest cause — hard stools and straining put direct pressure on the veins.', 'सबसे बड़ा कारण — सख्त मल और ज़ोर लगाना नसों पर सीधा दबाव डालते हैं।') },
        { b: b('Low fibre & water', 'रेशे व पानी की कमी'), t: b('refined flour, junk food and few vegetables or fruits.', 'मैदा, जंक फूड और कम सब्ज़ी-फल वाला आहार।') },
        { b: b('Prolonged sitting', 'लंबे समय तक बैठना'), t: b('office work, driving, and sitting long on the toilet with a phone.', 'ऑफिस, ड्राइविंग, और शौचालय में मोबाइल के साथ देर तक बैठना।') },
        { b: b('Pregnancy & childbirth', 'गर्भावस्था व प्रसव'), t: b('pressure from the uterus and hormonal changes.', 'गर्भाशय का दबाव और हार्मोन बदलाव।') },
        { b: b('Obesity & heavy lifting', 'मोटापा और भारी वज़न'), t: b('increased pressure on the lower abdomen.', 'पेट के निचले हिस्से पर ज़्यादा दबाव।') },
        { b: b('Frequent diarrhoea', 'बार-बार दस्त'), t: b('repeated irritation of the anal area.', 'मलद्वार में बार-बार जलन।') },
        { b: b('Spicy food, alcohol & smoking', 'तीखा भोजन, शराब और धूम्रपान'), t: b('can worsen symptoms.', 'लक्षण बढ़ा सकते हैं।') },
        { b: b('Genetics & age', 'आनुवंशिकता और उम्र'), t: b('vein walls weaken with age, especially between 45 and 65.', 'उम्र के साथ, खासकर 45-65 वर्ष में, नसों की दीवार कमज़ोर होती है।') },
      ],
    },
    {
      type: 'list', id: 'tests', title: b('Tests for Piles', 'बवासीर की जांच'),
      items: [
        { b: b('Doctor\'s examination (DRE) & proctoscopy', 'डॉक्टर द्वारा जांच (DRE) व प्रॉक्टोस्कोपी'), t: b('to see the grade and position of the piles.', 'मस्सों का ग्रेड और स्थिति देखने के लिए।') },
        { b: b('CBC', 'CBC'), t: b('to check for anaemia after long-term bleeding.', 'लंबे समय से खून जाने पर एनीमिया की जांच।') },
        { b: b('Colonoscopy', 'कोलोनोस्कोपी'), t: b('needed above 45, or with weight loss, changed bowel habits or dark blood, to rule out bowel cancer.', '45 से ऊपर, वज़न घटने, मल की आदत बदलने या गहरे रंग के खून में आंत के कैंसर को खारिज करने के लिए ज़रूरी।') },
        { b: b('MRI fistulogram', 'MRI फिस्टुलोग्राम'), t: b('to map the track of a fistula.', 'भगंदर की सुरंग का रास्ता जानने के लिए।') },
      ],
      note: b('Warning: blood in stools is not always piles. With dark blood, blood mixed with stool, weight loss or a lasting change in bowel habits, always get checked for bowel cancer.', 'चेतावनी: शौच में खून हमेशा बवासीर नहीं होता। गहरा खून, मल में मिला खून, वज़न घटना या मल की आदत में लगातार बदलाव हो तो आंत के कैंसर की जांच ज़रूर कराएं।'),
    },
    {
      type: 'cards', id: 'diet', icon: 'check', title: b('Diet, Do\'s & Don\'ts and Habits', 'बवासीर में आहार, परहेज़ और आदतें'),
      items: [
        { t: b('Drink 3-4 litres of water daily; warm water on an empty stomach in the morning.', 'रोज़ 3-4 लीटर पानी पिएं, सुबह खाली पेट गुनगुना पानी।') },
        { t: b('Eat fibre: greens, papaya, guava, pear, oats, dalia, whole pulses, isabgol.', 'रेशेदार आहार: हरी सब्ज़ियां, पपीता, अमरूद, नाशपाती, ओट्स, दलिया, छिलके वाली दालें, ईसबगोल।') },
        { t: b("Don't hold back the urge; keep a regular toilet time.", 'शौच की इच्छा को न रोकें, नियमित समय बनाएं।') },
        { t: b("Don't take your phone to the toilet; don't sit over 5 minutes or strain.", 'शौचालय में मोबाइल न ले जाएं, 5 मिनट से ज़्यादा न बैठें, ज़ोर न लगाएं।') },
        { t: b('An Indian-style posture, or a footstool under your feet, helps.', 'भारतीय शैली या पैर के नीचे स्टूल रखकर बैठना बेहतर है।') },
        { t: b('Clean with water; don\'t rub with harsh toilet paper.', 'शौच के बाद पानी से सफ़ाई करें, कठोर टॉयलेट पेपर से न रगड़ें।') },
        { t: b('A warm sitz bath for 10-15 minutes twice a day eases pain and swelling.', 'गुनगुने पानी में 10-15 मिनट सिट्ज़ बाथ दिन में 2 बार — दर्द व सूजन में आराम।') },
        { t: b('Avoid chilli, fried food, maida, alcohol and smoking; walk daily.', 'मिर्च-मसाला, तला-भुना, मैदा, शराब, धूम्रपान छोड़ें; रोज़ टहलें।') },
      ],
    },
    {
      type: 'text', id: 'approach', title: b('How Our Ayurvedic Care Helps with Piles', 'हमारी आयुर्वेदिक देखभाल बवासीर में कैसे मदद करती है'),
      paras: [
        b('Our doctors see piles not just as a local problem but as linked to digestion and the constipation tendency. They take a detailed, confidential case history — how much and how you bleed, pain, whether lumps come out, your constipation or diarrhoea pattern, gas, appetite, sitting work and pregnancy — and build a personalised plan of medicine, diet and habits.', 'हमारे डॉक्टर बवासीर को सिर्फ़ मलद्वार की समस्या नहीं, बल्कि पाचन और कब्ज़ की प्रवृत्ति से जुड़ा मानते हैं। वे विस्तृत, गोपनीय केस-हिस्ट्री लेते हैं — खून कितना और कैसे आता है, दर्द, मस्से बाहर आते हैं या नहीं, कब्ज़ या दस्त का पैटर्न, गैस, भूख, बैठने का काम, गर्भावस्था — और दवा, डाइट व आदतों का व्यक्तिगत प्लान बनाते हैं।'),
        b('Grade 4 piles, complex fistula or a large abscess may need a surgeon — our doctors will tell you honestly, and can continue diet and constipation care afterwards to help prevent recurrence.', 'ग्रेड 4 बवासीर, जटिल भगंदर या बड़ी पस वाली गांठ में सर्जन की ज़रूरत हो सकती है — हमारे डॉक्टर ईमानदारी से बताएंगे, और बाद में दोबारा न हो इसके लिए डाइट व कब्ज़ की देखभाल जारी रख सकते हैं।'),
      ],
      note: b('Important: Please do not self-medicate. Jeewan Jyoti doctors decide medicine only after reviewing your symptoms and grade.', 'ज़रूरी: खुद से कोई दवा न लें। जीवन ज्योति के डॉक्टर आपके लक्षणों और ग्रेड के आधार पर ही दवा तय करते हैं।'),
    },
    {
      type: 'cards', id: 'benefits', icon: 'check', title: b('What You Get at Jeewan Jyoti', 'जीवन ज्योति में आपको क्या मिलता है'),
      items: [
        { t: b('Care for piles, fissure and fistula', 'बवासीर, फिशर व भगंदर तीनों की देखभाल') },
        { t: b('No time off work needed for consultation', 'परामर्श के लिए छुट्टी की ज़रूरत नहीं') },
        { t: b('Experience with 8 Lakh+ patients', '8 लाख+ मरीज़ों का अनुभव') },
        { t: b('100% confidential, plain-packed home delivery', '100% गोपनीय, सादी पैकिंग में घर पर दवा') },
        { t: b('Diet chart and follow-up included', 'डाइट चार्ट व फॉलो-अप साथ में') },
      ],
    },
    { type: 'cta', title: b('Get a free, confidential piles consultation with Jeewan Jyoti doctors today.', 'जीवन ज्योति के डॉक्टरों से आज ही बवासीर पर मुफ़्त और गोपनीय परामर्श लें।'), button: b('Book Free Consultation', 'फ्री परामर्श बुक करें'), action: 'form' },
  ],

  faqs: [
    { q: b('Can piles be treated without surgery?', 'क्या बवासीर बिना ऑपरेशन ठीक हो सकती है?'), a: b('Many grade 1-3 piles are managed with medicine, diet and habit changes. Grade 4 piles that stay outside often need surgery — our doctors will tell you clearly.', 'ग्रेड 1-3 की कई बवासीर दवा, डाइट और आदतों में बदलाव से संभाली जाती हैं। हमेशा बाहर रहने वाली ग्रेड 4 बवासीर में अक्सर सर्जरी की ज़रूरत होती है — हमारे डॉक्टर साफ़ बताएंगे।') },
    { q: b('Can piles come back?', 'क्या बवासीर दोबारा हो सकती है?'), a: b('Yes, if constipation continues. Even after surgery piles can return, which is why diet, water and toilet habits must be kept up long-term.', 'हां, अगर कब्ज़ बनी रहे। सर्जरी के बाद भी बवासीर लौट सकती है, इसलिए डाइट, पानी और शौच की आदतें लंबे समय तक बनाए रखना ज़रूरी है।') },
    { q: b('Is blood in stools always piles?', 'शौच में खून आ रहा है, क्या यह हमेशा बवासीर है?'), a: b('No. Bright red blood dripping after stools is usually piles or fissure. Dark or black blood, blood mixed with stool, weight loss, ongoing abdominal pain or changed bowel habits need tests for other causes, including bowel cancer, especially after 45.', 'नहीं। शौच के बाद टपकने वाला चमकीला लाल खून प्रायः बवासीर या फिशर का होता है। गहरा या काला खून, मल में मिला खून, वज़न घटना, लगातार पेट दर्द या मल की आदत बदलना हो तो आंत के कैंसर सहित दूसरे कारणों की जांच ज़रूरी है, खासकर 45 के बाद।') },
    { q: b('Is treatment safe during pregnancy?', 'क्या गर्भावस्था में बवासीर का उपचार सुरक्षित है?'), a: b('Piles are very common in pregnancy and often improve after delivery. Never start any medicine during pregnancy without your doctor\'s advice.', 'गर्भावस्था में बवासीर बहुत आम है और प्रसव के बाद अक्सर सुधरती है। गर्भावस्था में डॉक्टर की सलाह के बिना कोई दवा शुरू न करें।') },
    { q: b('What should I eat and avoid in piles?', 'बवासीर में क्या खाएं और क्या नहीं?'), a: b('Eat greens, papaya, guava, pear, oats, dalia, whole pulses, curd, isabgol and plenty of water. Avoid chilli, fried food, maida, fast food, gas-forming foods, excess tea-coffee, alcohol and smoking. Keeping stools soft matters most.', 'खाएं: हरी सब्ज़ियां, पपीता, अमरूद, नाशपाती, ओट्स, दलिया, छिलके वाली दालें, दही, ईसबगोल और खूब पानी। न खाएं: मिर्च-मसाला, तला-भुना, मैदा, फास्ट फूड, गैस बढ़ाने वाली चीज़ें, ज़्यादा चाय-कॉफी, शराब और धूम्रपान। सबसे ज़रूरी है मल को नरम रखना।') },
    { q: b('What is the process and cost at Jeewan Jyoti?', 'जीवन ज्योति में उपचार की प्रक्रिया और खर्च क्या है?'), a: b('Call us and a doctor takes your history confidentially. Medicine is couriered across India in plain packing with no mention of the condition. Treatment starts at ₹1599 for 30 days of medicine; the total depends on grade and duration.', 'हमें कॉल करें, डॉक्टर पूरी गोपनीयता से केस-हिस्ट्री लेंगे। दवा पूरे भारत में सादी पैकिंग में भेजी जाती है, जिस पर बीमारी का कोई उल्लेख नहीं होता। उपचार ₹1599 में 30 दिन की दवा से शुरू होता है; कुल खर्च ग्रेड और अवधि पर निर्भर है।') },
    { q: b('Can fistula be treated without surgery?', 'क्या भगंदर (फिस्टुला) बिना ऑपरेशन ठीक हो सकता है?'), a: b('Fistula is more complex than piles because a tunnel forms. Simple fistulas may be managed with medicine and care, but complex, branched or high fistulas often need surgery. Our doctors will assess and tell you honestly.', 'भगंदर बवासीर से जटिल है क्योंकि इसमें सुरंग बन जाती है। सरल भगंदर में दवा और देखभाल से मदद मिल सकती है, पर जटिल, कई शाखाओं वाले या ऊंचे भगंदर में अक्सर सर्जरी की ज़रूरत होती है। हमारे डॉक्टर जांचकर ईमानदारी से बताएंगे।') },
  ],

  related: ['fissure', 'fistula', 'constipation', 'anal-abscess'],
}
