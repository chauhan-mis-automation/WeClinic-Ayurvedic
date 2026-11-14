// ===== Kidney Stones (Pathri) — weclinic.in/hi/kidney-stone-homeopathy se (Hindi), English anuvaad ke saath =====
// Homeopathic dawaiyan aur homeopathy ke nateeje/daave hata diye gaye hain.
const b = (en, hi) => ({ en, hi })

export default {
  slug: 'kidney-stones',
  name: b('Kidney Stone', 'पथरी'),
  seoTitle: b('Kidney Stone Ayurvedic Treatment | Jeewan Jyoti Ayurvedic Sansthan', 'किडनी स्टोन (पथरी) का आयुर्वेदिक उपचार | जीवन ज्योति आयुर्वेदिक संस्थान'),
  closing: { title: b('Start Your Kidney Stone Care Today', 'पथरी से राहत के लिए आज ही शुरुआत करें') },

  hero: {
    eyebrow: b('Care for kidney stones & recurrence', 'पथरी और बार-बार पथरी बनने की देखभाल'),
    title1: b('Kidney Stone Ayurvedic Treatment — ', 'किडनी स्टोन (पथरी) का आयुर्वेदिक उपचार — '),
    title2: b('Relief & Prevention', 'राहत और बचाव'),
    text: b('Trusted Ayurvedic care for kidney stones, burning urination and recurring stones — with a stone-type diet chart and home delivery, starting at ₹1999.', 'किडनी स्टोन, पेशाब में जलन और बार-बार बनने वाली पथरी के लिए भरोसेमंद आयुर्वेदिक देखभाल — पथरी के प्रकार अनुसार डाइट चार्ट और होम डिलीवरी के साथ, ₹1999 से शुरू।'),
    rating: { value: '4.5', count: '24,311' },
    stats: [
      { value: '97.9%', label: b('Would Recommend', 'सलाह देंगे') },
      { value: '8 Lakh+', label: b('Patients Treated', 'मरीज़ों का उपचार') },
    ],
  },
  form: {
    symptoms: [b('Severe Pain', 'तेज़ दर्द'), b('Burning Urination', 'पेशाब में जलन'), b('Blood in Urine', 'पेशाब में खून'), b('Frequent Urination', 'बार-बार पेशाब'), b('Other', 'अन्य')],
  },

  types: {
    eyebrow: b('What we treat', 'हम क्या ठीक करने में मदद करते हैं'),
    title: b('Kidney & Urinary Problems We Treat', 'किडनी और पेशाब की समस्याएं जिनका हम उपचार करते हैं'),
    sub: b('From a single small stone to recurring stones and urinary infections, our doctors design a plan for every case.', 'एक छोटी पथरी से लेकर बार-बार बनने वाली पथरी और पेशाब के संक्रमण तक — हर केस के लिए हमारे डॉक्टर प्लान बनाते हैं।'),
    items: [
      { icon: '💎', name: b('Kidney Stone', 'किडनी स्टोन'), desc: b('Stones in the kidney or ureter', 'किडनी या मूत्रवाहिनी में पथरी') },
      { icon: '🚻', name: b('Urinary Tract Infection', 'यूरिन इन्फेक्शन'), desc: b('Burning and frequent urination', 'जलन और बार-बार पेशाब') },
      { icon: '🔥', name: b('Cystitis', 'सिस्टाइटिस'), desc: b('Inflammation of the bladder', 'मूत्राशय की सूजन') },
      { icon: '🛏️', name: b('Bed Wetting', 'बिस्तर पर पेशाब'), desc: b('Night-time urination in children & adults', 'बच्चों और बड़ों में रात में पेशाब') },
      { icon: '💧', name: b('Urine Leakage', 'पेशाब का रिसाव'), desc: b('Difficulty holding urine', 'पेशाब रोकने में कठिनाई') },
      { icon: '🩸', name: b('Blood in Urine', 'पेशाब में खून'), desc: b('Pink, red or brown urine', 'गुलाबी, लाल या भूरा पेशाब') },
      { icon: '⏳', name: b('Frequent Urination', 'बार-बार पेशाब'), desc: b('Urgency and repeated trips', 'जल्दी-जल्दी पेशाब जाना') },
      { icon: '🔁', name: b('Recurrent Stones', 'बार-बार पथरी बनना'), desc: b('Prevention of new stones', 'नई पथरी बनने से बचाव') },
    ],
  },

  reviewer: null,

  takeaways: [
    { k: b('What it is', 'यह क्या है'), v: b('A kidney stone forms when minerals in urine such as calcium, oxalate or uric acid become concentrated into solid particles, causing severe back or abdominal pain, burning, blood in urine and vomiting.', 'किडनी स्टोन तब बनता है जब पेशाब में कैल्शियम, ऑक्सलेट या यूरिक एसिड जैसे खनिज गाढ़े होकर ठोस कण बना लेते हैं। इससे कमर व पेट में असहनीय दर्द, जलन, पेशाब में खून और उल्टी होती है।') },
    { k: b('Main symptoms', 'मुख्य लक्षण'), v: b('Wave-like severe pain on one side of the back or abdomen spreading to the thigh and groin, burning or blood in urine, vomiting, frequent urge to urinate.', 'कमर या पेट के एक तरफ़ लहरों में उठने वाला तेज़ दर्द जो जांघ व जननांग तक जाए, पेशाब में जलन-खून, उल्टी, बार-बार पेशाब की इच्छा।') },
    { k: b('Size matters', 'आकार ज़रूरी है'), v: b('About 80% of stones under 4-5 mm pass on their own with enough water; the chance drops as size increases, and stones over 10 mm or causing blockage usually need a procedure.', '4-5 mm से छोटी लगभग 80% पथरी पर्याप्त पानी से अपने आप निकल जाती है; आकार बढ़ने के साथ संभावना घटती है, और 10 mm से बड़ी या रुकावट वाली पथरी में आमतौर पर प्रक्रिया की ज़रूरत होती है।') },
    { k: b('Recurrence', 'दोबारा बनना'), v: b('After one stone there is a 30-50% chance of another within 5 years, so prevention through diet and water is as important as removal.', 'एक बार पथरी होने के बाद 5 साल में दोबारा होने की संभावना 30-50% होती है, इसलिए निकालने जितना ही ज़रूरी है डाइट और पानी से बचाव।') },
    { k: b('Our approach', 'हमारा तरीका'), v: b('A personalised Ayurvedic plan with medicine, a stone-type diet chart and water guidance, with honest advice when a procedure is needed.', 'दवा, पथरी के प्रकार अनुसार डाइट चार्ट और पानी की सलाह के साथ व्यक्तिगत आयुर्वेदिक प्लान — और प्रक्रिया की ज़रूरत हो तो ईमानदार सलाह।') },
    { k: b('Emergency', 'आपातकाल'), v: b('High fever with chills, complete stoppage of urine, uncontrolled vomiting or unbearable pain need immediate hospital care.', 'तेज़ बुखार व कंपकंपी, पेशाब पूरी तरह बंद होना, अनियंत्रित उल्टी या असहनीय दर्द में तुरंत अस्पताल जाएं।') },
  ],

  blocks: [
    {
      type: 'text', id: 'what-is', title: b('What Is a Kidney Stone?', 'किडनी स्टोन (पथरी) क्या है?'),
      paras: [
        b('Our kidneys filter blood and pass waste and extra minerals out in urine. When the body is short of water, or urine has high levels of calcium, oxalate or uric acid, these minerals stick together into small crystals instead of dissolving. Over time the crystals grow into a stone (renal calculus).', 'हमारी किडनी खून को छानकर अपशिष्ट और अतिरिक्त खनिज पेशाब से बाहर निकालती है। जब शरीर में पानी की कमी हो या पेशाब में कैल्शियम, ऑक्सलेट, यूरिक एसिड बहुत बढ़ जाए, तो ये खनिज घुलने के बजाय चिपककर छोटे क्रिस्टल बनाते हैं। ये क्रिस्टल धीरे-धीरे बड़े होकर पथरी बन जाते हैं।'),
        b('A stone can form in the kidney or move into the ureter, where it blocks urine and causes intense pain (renal colic) — one of the most severe pains in medicine. Hot regions of North India are called the "stone belt" because heat, sweating and low water intake make stones very common. Since stones often return, preventing new ones matters as much as removing the current one.', 'पथरी किडनी में बन सकती है या खिसककर मूत्रवाहिनी में फंस सकती है, जहां वह पेशाब का रास्ता रोककर असहनीय दर्द (रीनल कॉलिक) देती है — यह चिकित्सा में सबसे तेज़ दर्दों में गिना जाता है। उत्तर भारत के गर्म इलाकों को "स्टोन बेल्ट" कहते हैं क्योंकि गर्मी, पसीना और कम पानी से यहां पथरी बहुत आम है। पथरी अक्सर लौटती है, इसलिए नई पथरी बनने से रोकना उतना ही ज़रूरी है जितना मौजूदा पथरी निकालना।'),
      ],
    },
    { type: 'cta', title: b('Troubled by stone pain or stones that keep coming back?', 'क्या आप पथरी के दर्द या बार-बार बनने वाली पथरी से परेशान हैं?'), button: b('Call Now - Free Consultation', 'अभी कॉल करें - मुफ़्त परामर्श') },
    {
      type: 'grid', id: 'types-table', title: b('Types of Kidney Stones', 'पथरी के प्रकार'),
      head: [b('Type', 'प्रकार'), b('How common', 'कितनी आम'), b('Cause', 'कारण'), b('Prevention', 'बचाव')],
      rows: [
        [b('Calcium oxalate', 'कैल्शियम ऑक्सलेट'), b('About 70-80%', 'लगभग 70-80%'), b('Oxalate-rich food, low water, low-calcium diet', 'ऑक्सलेट युक्त भोजन, कम पानी, कम कैल्शियम आहार'), b('Water, lemon, limit spinach & similar', 'पानी, नींबू, पालक आदि सीमित')],
        [b('Uric acid', 'यूरिक एसिड'), b('5-10%', '5-10%'), b('Gout, non-veg diet, acidic urine', 'गाउट, मांसाहार, अम्लीय पेशाब'), b('Low purine, less acidic urine', 'प्यूरीन कम, पेशाब कम अम्लीय')],
        [b('Struvite (infection)', 'स्ट्रुवाइट (संक्रमण)'), b('10-15%', '10-15%'), b('Repeated urinary infections, more in women', 'बार-बार पेशाब का संक्रमण, महिलाओं में अधिक'), b('Prompt treatment of infections', 'संक्रमण का तुरंत इलाज')],
        [b('Cystine', 'सिस्टीन'), b('Under 1%', '1% से कम'), b('Genetic disorder', 'आनुवंशिक विकार'), b('More water, lifelong monitoring', 'अधिक पानी, आजीवन निगरानी')],
      ],
    },
    {
      type: 'cards', id: 'symptoms', icon: 'check', title: b('Symptoms of Kidney Stones', 'पथरी के लक्षण'),
      items: [
        { t: b('Sudden, wave-like unbearable pain on one side of the back.', 'कमर या पीठ के एक तरफ़ अचानक, लहरों में उठने वाला असहनीय दर्द।') },
        { t: b('Pain spreading from the back to the lower abdomen, thigh and groin.', 'दर्द का कमर से पेट के निचले हिस्से, जांघ और जननांग तक फैलना।') },
        { t: b('Nausea, vomiting, sweating and restlessness with the pain.', 'दर्द के साथ मतली, उल्टी, पसीना और बेचैनी।') },
        { t: b('Burning and frequent, small amounts of urine.', 'पेशाब में जलन, बार-बार और थोड़ा-थोड़ा पेशाब।') },
        { t: b('Blood in urine (pink, red or brown).', 'पेशाब में खून (गुलाबी, लाल या भूरा)।') },
        { t: b('Cloudy or foul-smelling urine (with infection).', 'धुंधला या बदबूदार पेशाब (संक्रमण के साथ)।') },
        { t: b('Fever and chills — a sign of infection; see a doctor immediately.', 'बुखार व ठंड लगना — संक्रमण का संकेत; तुरंत डॉक्टर से मिलें।') },
        { t: b('Small stones may cause no symptoms and show up by chance on ultrasound.', 'छोटी पथरी में कोई लक्षण न होना, अल्ट्रासाउंड में संयोग से पता चलना।') },
      ],
    },
    {
      type: 'list', id: 'causes', title: b('Why Stones Form', 'पथरी बनने के कारण'),
      items: [
        { b: b('Drinking too little water', 'कम पानी पीना'), t: b('the biggest cause — concentrated urine forms crystals.', 'सबसे बड़ा कारण — गाढ़ा पेशाब क्रिस्टल बनाता है।') },
        { b: b('Hot climate & sweating', 'गर्म जलवायु व पसीना'), t: b('the main reason stones are common in North India.', 'उत्तर भारत में पथरी ज़्यादा होने की मुख्य वजह।') },
        { b: b('Diet', 'आहार'), t: b('excess salt, high protein/non-veg, oxalate-rich food, cold drinks.', 'ज़्यादा नमक, ज़्यादा प्रोटीन-मांसाहार, ऑक्सलेट युक्त भोजन, कोल्ड ड्रिंक।') },
        { b: b('Obesity & diabetes', 'मोटापा व डायबिटीज़'), t: b('make urine more acidic and raise the risk.', 'पेशाब को अम्लीय बनाकर खतरा बढ़ाते हैं।') },
        { b: b('Repeated urinary infections', 'बार-बार पेशाब का संक्रमण'), t: b('especially struvite stones in women.', 'खासकर महिलाओं में स्ट्रुवाइट पथरी।') },
        { b: b('High uric acid / gout', 'बढ़ा यूरिक एसिड / गाउट'), t: b('leads to uric acid stones.', 'यूरिक एसिड पथरी का कारण।') },
        { b: b('Family history', 'पारिवारिक इतिहास'), t: b('doubles the risk.', 'खतरा दोगुना करता है।') },
        { b: b('Medicines & supplements', 'दवाएं व सप्लीमेंट'), t: b('excess calcium or vitamin C tablets, some diuretics.', 'ज़्यादा कैल्शियम या विटामिन C की गोलियां, कुछ डाइयूरेटिक।') },
      ],
    },
    {
      type: 'grid', id: 'size', title: b('Stone Size and Treatment Options', 'पथरी का आकार और उपचार का विकल्प'),
      head: [b('Size', 'आकार'), b('Chance of passing on its own', 'अपने आप निकलने की संभावना'), b('Usual approach', 'आम तरीका')],
      rows: [
        [b('Under 4 mm', '4 mm से छोटी'), b('About 80%', 'लगभग 80%'), b('Plenty of water + doctor-guided medicine and diet', 'भरपूर पानी + डॉक्टर की देखरेख में दवा और डाइट')],
        [b('5-6 mm', '5-6 mm'), b('About 50-60%', 'लगभग 50-60%'), b('Medicine, diet and regular monitoring', 'दवा, डाइट और नियमित निगरानी')],
        [b('7-10 mm', '7-10 mm'), b('About 20-30%', 'लगभग 20-30%'), b('Medical care with monitoring; lithotripsy if it doesn\'t pass', 'निगरानी के साथ उपचार; न निकले तो लिथोट्रिप्सी')],
        [b('Over 10 mm', '10 mm से बड़ी'), b('Very low', 'बहुत कम'), b('ESWL / RIRS / PCNL, plus prevention care', 'ESWL / RIRS / PCNL, साथ में बचाव की देखभाल')],
      ],
      note: b('Emergency: with a stone, high fever and chills, complete stoppage of urine, uncontrolled vomiting or unbearable pain — go to a hospital immediately. This can mean pressure on the kidney or a serious infection.', 'आपातकाल: पथरी के साथ तेज़ बुखार व ठंड लगना, पेशाब पूरी तरह बंद होना, अनियंत्रित उल्टी या असहनीय दर्द — तुरंत अस्पताल जाएं। यह किडनी पर दबाव या गंभीर संक्रमण का संकेत हो सकता है।'),
    },
    {
      type: 'list', id: 'tests', title: b('Tests for Kidney Stones', 'पथरी की जांच'),
      items: [
        { b: b('Ultrasound (KUB)', 'अल्ट्रासाउंड (KUB)'), t: b('the most common and safe test, shows kidney stones and swelling.', 'सबसे आम और सुरक्षित, किडनी की पथरी और सूजन दिखाता है।') },
        { b: b('NCCT KUB (CT scan)', 'NCCT KUB (CT स्कैन)'), t: b('the most accurate, shows small ureteric stones and their exact size and position.', 'सबसे सटीक, मूत्रवाहिनी की छोटी पथरी और उसका सही स्थान-आकार बताता है।') },
        { b: b('X-ray KUB', 'X-Ray KUB'), t: b('shows calcium stones but not uric acid stones.', 'कैल्शियम की पथरी दिखती है, यूरिक एसिड की नहीं।') },
        { b: b('Urine routine & culture', 'यूरिन रूटीन व कल्चर'), t: b('checks for infection, blood and crystals.', 'संक्रमण, खून और क्रिस्टल की जांच।') },
        { b: b('Kidney function, calcium, uric acid', 'किडनी फंक्शन, कैल्शियम, यूरिक एसिड'), t: b('to assess the kidney and the cause of stones.', 'किडनी की स्थिति और पथरी के कारण के लिए।') },
        { b: b('Stone analysis', 'निकली पथरी की जांच'), t: b('knowing the stone type helps plan prevention.', 'पथरी का प्रकार जानकर आगे का बचाव तय करने में बहुत उपयोगी।') },
      ],
    },
    {
      type: 'cards', id: 'diet', icon: 'check', title: b('Diet, Water & Precautions', 'पथरी में आहार, पानी और परहेज़'),
      items: [
        { t: b('Drink 3-4 litres of water daily — urine should stay pale or clear.', 'रोज़ 3-4 लीटर पानी पिएं — पेशाब हमेशा हल्का पीला या पानी जैसा रहे।') },
        { t: b('Take the juice of one or two lemons in water daily — citrate helps prevent stones.', 'रोज़ एक-दो नींबू का रस पानी में लें — साइट्रेट पथरी बनने से रोकता है।') },
        { t: b('Cut salt (under 5 g a day); reduce pickles, papad and processed food.', 'नमक कम करें (दिन में 5 ग्राम से कम), अचार-पापड़-प्रोसेस्ड फूड घटाएं।') },
        { t: b("Keep dietary calcium (milk, curd); don't take calcium tablets without advice.", 'भोजन से कैल्शियम लेते रहें (दूध, दही); बिना सलाह कैल्शियम की गोलियां न लें।') },
        { t: b('Limit oxalate-rich foods: spinach, beetroot, almonds, chocolate, tea.', 'ऑक्सलेट युक्त चीज़ें सीमित करें: पालक, चुकंदर, बादाम, चॉकलेट, चाय।') },
        { t: b('Limit non-veg, eggs and excess protein (especially for uric acid stones).', 'मांसाहार, अंडा और ज़्यादा प्रोटीन सीमित करें (खासकर यूरिक एसिड पथरी में)।') },
        { t: b('Stop cold drinks, especially cola; take coconut water and buttermilk.', 'कोल्ड ड्रिंक, खासकर कोला, बंद करें; नारियल पानी और छाछ लें।') },
        { t: b("Don't hold urine; drink more in summer and control weight.", 'पेशाब रोककर न रखें, गर्मी में और पानी पिएं, वज़न नियंत्रित रखें।') },
      ],
    },
    {
      type: 'text', id: 'approach', title: b('How Our Ayurvedic Care Helps with Kidney Stones', 'हमारी आयुर्वेदिक देखभाल पथरी में कैसे मदद करती है'),
      paras: [
        b('Our doctors look at both the current stone and why stones form in you. They review your ultrasound report, stone size and position, pain pattern, urine symptoms, diet, water intake and any gout or infection history, and build a personalised plan of medicine, a stone-type diet chart and water guidance.', 'हमारे डॉक्टर मौजूदा पथरी और आपके शरीर में पथरी बनने की वजह, दोनों देखते हैं। वे आपकी अल्ट्रासाउंड रिपोर्ट, पथरी का आकार-स्थान, दर्द का पैटर्न, पेशाब के लक्षण, खान-पान, पानी और गाउट या संक्रमण का इतिहास देखकर दवा, पथरी के प्रकार अनुसार डाइट चार्ट और पानी की सलाह का व्यक्तिगत प्लान बनाते हैं।'),
        b('For stones over 10-12 mm, swelling of the kidney (hydronephrosis) or infection, our doctors honestly advise a procedure, and can then continue prevention care so new stones are less likely.', '10-12 mm से बड़ी पथरी, किडनी में सूजन (हाइड्रोनेफ्रोसिस) या संक्रमण होने पर हमारे डॉक्टर ईमानदारी से प्रक्रिया की सलाह देते हैं, और उसके बाद नई पथरी कम बने इसके लिए बचाव की देखभाल जारी रख सकते हैं।'),
      ],
      note: b('Important: Please do not self-medicate. Jeewan Jyoti doctors decide medicine only after reviewing your reports and symptoms.', 'ज़रूरी: खुद से कोई दवा न लें। जीवन ज्योति के डॉक्टर आपकी रिपोर्ट और लक्षण देखकर ही दवा तय करते हैं।'),
    },
    { type: 'cta', title: b('Get a free kidney stone consultation with Jeewan Jyoti doctors today.', 'जीवन ज्योति के डॉक्टरों से आज ही पथरी पर मुफ़्त परामर्श लें।'), button: b('Book Free Consultation', 'फ्री परामर्श बुक करें'), action: 'form' },
  ],

  faqs: [
    { q: b('How long does a stone take to pass?', 'पथरी निकलने में कितना समय लगता है?'), a: b('It depends on size and position. Small stones often pass within a few weeks; drinking 3-4 litres of water and staying active (walking, climbing stairs) helps the stone move down. Your doctor will monitor with ultrasound.', 'यह आकार और स्थान पर निर्भर है। छोटी पथरी अक्सर कुछ हफ्तों में निकल जाती है; रोज़ 3-4 लीटर पानी और सक्रिय रहना (टहलना, सीढ़ी चढ़ना) पथरी के नीचे खिसकने में मदद करता है। डॉक्टर अल्ट्रासाउंड से निगरानी करेंगे।') },
    { q: b('Can stones come back?', 'क्या पथरी दोबारा बन सकती है?'), a: b('Yes — 30-50% of patients form a new stone within 5 years, even after surgery or laser, because the cause remains. That is why diet, water and prevention care continue after the stone passes.', 'हां — ऑपरेशन या लेज़र के बाद भी 30-50% मरीज़ों में 5 साल के भीतर नई पथरी बन जाती है, क्योंकि कारण वैसा ही रहता है। इसलिए पथरी निकलने के बाद भी डाइट, पानी और बचाव की देखभाल जारी रहती है।') },
    { q: b('Should I stop milk, curd and calcium?', 'क्या दूध, दही और कैल्शियम बंद कर देना चाहिए?'), a: b('No — that is a common myth. Calcium from food binds oxalate in the gut and removes it, reducing stone risk. Cutting calcium can actually raise oxalate stone risk. Calcium tablets or high-dose vitamin C without advice can be harmful.', 'नहीं — यह बड़ी गलतफहमी है। भोजन का कैल्शियम आंत में ऑक्सलेट से जुड़कर उसे बाहर निकालता है, जिससे पथरी का खतरा घटता है। कैल्शियम कम करने से उल्टा ऑक्सलेट पथरी का खतरा बढ़ता है। बिना सलाह कैल्शियम की गोलियां या ज़्यादा विटामिन C नुकसानदेह है।') },
    { q: b('Are tomato, spinach and brinjal seeds forbidden?', 'क्या टमाटर, पालक और बैंगन के बीज मना हैं?'), a: b('Seeds have no direct link to stones — it is an old myth. The real issue is oxalate in spinach, beetroot, almonds, chocolate and too much tea; take these in moderation. Tomato is low in oxalate. Water and salt matter most.', 'बीजों का पथरी से कोई सीधा संबंध नहीं — यह पुरानी भ्रांति है। असली समस्या ऑक्सलेट है, जो पालक, चुकंदर, बादाम, चॉकलेट और ज़्यादा चाय में होता है — इन्हें सीमित लें। टमाटर में ऑक्सलेट कम है। सबसे ज़रूरी है पानी और नमक।') },
    { q: b('Is there a home remedy for stone pain?', 'क्या पथरी के दर्द में कोई घरेलू उपाय है?'), a: b('A hot water bottle on the back and more water can ease an attack. But with unbearable pain, vomiting or fever, don\'t waste time on home remedies — see a doctor immediately. Lemon water, coconut water and barley water are useful for prevention.', 'दर्द में गर्म पानी की बोतल से कमर की सिकाई और ज़्यादा पानी राहत देता है। पर असहनीय दर्द, उल्टी या बुखार हो तो घरेलू उपायों में समय न गंवाएं — तुरंत डॉक्टर से मिलें। नींबू पानी, नारियल पानी और जौ का पानी बचाव में उपयोगी माने जाते हैं।') },
    { q: b('What does treatment cost at Jeewan Jyoti?', 'जीवन ज्योति में पथरी के उपचार का खर्च कितना है?'), a: b('Treatment starts at ₹1999, including 30 days of medicine and a diet chart. The total depends on stone size, number and recurrence tendency — the doctor explains it after seeing your ultrasound report on the free consultation call.', 'उपचार ₹1999 से शुरू होता है, जिसमें 30 दिन की दवा और डाइट चार्ट शामिल है। कुल खर्च पथरी के आकार, संख्या और दोबारा बनने की प्रवृत्ति पर निर्भर है — मुफ़्त परामर्श कॉल पर डॉक्टर आपकी अल्ट्रासाउंड रिपोर्ट देखकर बताते हैं।') },
    { q: b('Can a stone damage the kidney?', 'क्या पथरी से किडनी खराब हो सकती है?'), a: b('Yes. If a stone blocks urine for long, the kidney swells (hydronephrosis) and can permanently lose function over months — sometimes without pain (silent stone). Never ignore a stone; monitor it with regular ultrasound.', 'हां। अगर पथरी लंबे समय तक पेशाब का रास्ता रोके रखे तो किडनी में सूजन (हाइड्रोनेफ्रोसिस) आ जाती है और महीनों में किडनी की कार्यक्षमता स्थायी रूप से घट सकती है — कई बार बिना दर्द के भी। पथरी को कभी नज़रअंदाज़ न करें; नियमित अल्ट्रासाउंड से निगरानी रखें।') },
  ],

  related: ['uti', 'frequent-urination', 'gout'],
}
