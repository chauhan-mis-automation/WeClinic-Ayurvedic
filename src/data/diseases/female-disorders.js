// ===== Women's Health (Stri Rog) — weclinic.in/hi/female-disorders se (Hindi), English anuvaad ke saath =====
// Homeopathic dawaiyan, "bina operation / bina hormone goli" jaise daave aur homeopathy ke nateeje hata diye gaye hain.
const b = (en, hi) => ({ en, hi })

export default {
  slug: 'female-disorders',
  name: b("Women's Health", 'स्त्री रोग'),
  seoTitle: b("Women's Health Ayurvedic Treatment — PCOD, Periods, Leucorrhoea | Jeewan Jyoti Ayurvedic Sansthan", 'स्त्री रोगों का आयुर्वेदिक उपचार — PCOD, माहवारी, सफेद पानी | जीवन ज्योति आयुर्वेदिक संस्थान'),
  closing: { title: b("Start Caring for Your Health Today", 'अपनी सेहत की देखभाल आज ही शुरू करें') },

  hero: {
    eyebrow: b("Confidential care for women's health", 'महिलाओं के स्वास्थ्य की गोपनीय देखभाल'),
    title1: b("Women's Health Ayurvedic Treatment — ", 'स्त्री रोगों का आयुर्वेदिक उपचार — '),
    title2: b('PCOD, Periods & More', 'PCOD, माहवारी और अन्य'),
    text: b('Private, personalised Ayurvedic care for PCOD/PCOS, irregular or painful periods, leucorrhoea, fibroids and menopause problems — starting at just ₹1599.', 'PCOD/PCOS, अनियमित या दर्द वाली माहवारी, सफेद पानी, बच्चेदानी की गांठ और मेनोपॉज़ की समस्याओं के लिए गोपनीय, व्यक्तिगत आयुर्वेदिक देखभाल — सिर्फ़ ₹1599 से शुरू।'),
  },
  form: {
    symptoms: [b('PCOD / PCOS', 'PCOD / PCOS'), b('Irregular Periods', 'अनियमित माहवारी'), b('White Discharge', 'सफेद पानी'), b('Fibroid / Cyst', 'गांठ / सिस्ट'), b('Other', 'अन्य')],
  },

  types: {
    eyebrow: b('What we treat', 'हम क्या ठीक करने में मदद करते हैं'),
    title: b("Women's Health Problems We Treat", 'स्त्री रोग जिनका हम उपचार करते हैं'),
    sub: b('From teenage period problems to menopause, our doctors offer private, caring support at every stage of life.', 'किशोरावस्था की माहवारी की समस्याओं से मेनोपॉज़ तक — जीवन के हर चरण में गोपनीय, संवेदनशील सहायता।'),
    items: [
      { icon: '', name: b('PCOD / PCOS', 'PCOD / PCOS'), desc: b('Cysts in the ovaries, irregular cycles', 'अंडाशय में सिस्ट, अनियमित चक्र') },
      { icon: '', name: b('Uterine Fibroids', 'बच्चेदानी में गांठ / रसौली'), desc: b('Lumps in or around the uterus', 'गर्भाशय में या आसपास गांठें') },
      { icon: '', name: b('Irregular Periods', 'मासिक अनियमितता'), desc: b('Early, late or missed periods', 'जल्दी, देर से या रुकी माहवारी') },
      { icon: '', name: b('Leucorrhoea', 'सफ़ेद पानी'), desc: b('Abnormal white discharge', 'असामान्य सफ़ेद स्राव') },
      { icon: '', name: b('Weakness & Back Pain', 'कमज़ोरी एवं कमर दर्द'), desc: b('Fatigue, anaemia and back ache', 'थकान, खून की कमी और कमर दर्द') },
      { icon: '', name: b('Infertility', 'बांझपन'), desc: b('Difficulty conceiving', 'गर्भधारण में कठिनाई') },
      { icon: '', name: b('Hormonal Acne', 'हार्मोनल मुहांसे'), desc: b('Breakouts linked to hormones', 'हार्मोन से जुड़े मुहांसे') },
      { icon: '', name: b('Thyroid', 'थायरॉइड'), desc: b('Thyroid-related cycle problems', 'थायरॉइड से जुड़ी माहवारी की समस्या') },
    ],
  },

  reviewer: null,

  takeaways: [
    { k: b('What they are', 'ये क्या हैं'), v: b('Women\'s health problems such as PCOD/PCOS, irregular or painful periods, leucorrhoea, fibroids, endometriosis, infertility and menopause symptoms are mostly linked to hormonal imbalance.', 'PCOD/PCOS, अनियमित या दर्द वाली माहवारी, सफेद पानी, फाइब्रॉएड, एंडोमेट्रियोसिस, बांझपन और मेनोपॉज़ की समस्याएं मुख्यतः हार्मोन असंतुलन से जुड़ी होती हैं।') },
    { k: b('Most common', 'सबसे आम'), v: b('PCOD/PCOS — affecting about 1 in 5 young women in India.', 'PCOD/PCOS — भारत में हर 5 में से लगभग 1 युवा महिला प्रभावित।') },
    { k: b('Warning signs', 'चेतावनी संकेत'), v: b('Cycles longer than 35 or shorter than 21 days, bleeding over 7 days, facial hair, weight gain, or not conceiving after a year of trying.', '35 दिन से ज़्यादा या 21 दिन से कम का चक्र, 7 दिन से ज़्यादा रक्तस्राव, चेहरे पर बाल, वज़न बढ़ना, या 1 साल तक गर्भ न ठहरना।') },
    { k: b('Our approach', 'हमारा तरीका'), v: b('A confidential, personalised Ayurvedic plan with medicine, diet, exercise and lifestyle guidance, reviewed over your cycles.', 'गोपनीय, व्यक्तिगत आयुर्वेदिक प्लान — दवा, डाइट, व्यायाम और जीवनशैली सलाह के साथ, जिसकी समीक्षा आपके चक्रों के साथ होती है।') },
    { k: b('Honest limits', 'सच्ची सीमाएं'), v: b('Very large fibroids, uncontrolled bleeding, blocked tubes or serious male-factor infertility may need surgery or IVF; our doctors will tell you clearly.', 'बहुत बड़ी गांठ, अनियंत्रित रक्तस्राव, बंद ट्यूब या गंभीर पुरुष कारक में सर्जरी या IVF की ज़रूरत हो सकती है; हमारे डॉक्टर साफ़ बताएंगे।') },
  ],

  blocks: [
    {
      type: 'grid', id: 'conditions', title: b("Major Women's Health Problems", 'महिलाओं के प्रमुख रोग'),
      intro: b('A woman\'s cycle, fertility and overall health are controlled by a delicate balance of oestrogen, progesterone, LH, FSH and thyroid hormones. Stress, weight, sleep, thyroid or insulin resistance can upset this balance and cause different problems -', 'एक महिला के शरीर में एस्ट्रोजन, प्रोजेस्टेरोन, LH, FSH और थायरॉइड हार्मोन का नाज़ुक संतुलन माहवारी, प्रजनन क्षमता और समग्र स्वास्थ्य को नियंत्रित करता है। तनाव, वज़न, नींद, थायरॉइड या इंसुलिन प्रतिरोध इस संतुलन को बिगाड़ते हैं -'),
      head: [b('Problem', 'समस्या'), b('Main symptoms', 'मुख्य लक्षण'), b('Common causes', 'सामान्य कारण')],
      rows: [
        [b('PCOD / PCOS', 'PCOD / PCOS'), b('Irregular or stopped periods, facial hair, acne, weight gain, difficulty conceiving', 'अनियमित या बंद माहवारी, चेहरे पर बाल, मुहांसे, वज़न बढ़ना, गर्भ न ठहरना'), b('Insulin resistance, raised androgens, lifestyle', 'इंसुलिन प्रतिरोध, एंड्रोजन का बढ़ना, जीवनशैली')],
        [b('Irregular periods', 'अनियमित माहवारी'), b('Cycle under 21 or over 35 days, missed for months', 'चक्र 21 दिन से कम या 35 दिन से अधिक, महीनों तक न आना'), b('PCOD, thyroid, stress, weight, prolactin', 'PCOD, थायरॉइड, तनाव, वज़न, प्रोलैक्टिन')],
        [b('Painful periods (Dysmenorrhea)', 'माहवारी में दर्द'), b('Severe abdominal and back cramps, vomiting, dizziness', 'पेट व कमर में असहनीय ऐंठन, उल्टी, चक्कर'), b('Prostaglandins, endometriosis, fibroids', 'प्रोस्टाग्लैंडिन, एंडोमेट्रियोसिस, फाइब्रॉएड')],
        [b('Heavy bleeding (Menorrhagia)', 'भारी रक्तस्राव'), b('Over 7 days, with clots, weakness', '7 दिन से ज़्यादा, थक्कों के साथ, कमज़ोरी'), b('Fibroids, hormones, thyroid, anaemia', 'फाइब्रॉएड, हार्मोन, थायरॉइड, एनीमिया')],
        [b('Leucorrhoea', 'सफेद पानी'), b('White-yellow discharge, itching, odour, back pain', 'सफेद-पीला स्राव, खुजली, दुर्गंध, कमर दर्द'), b('Infection, fungus, hygiene, weakness', 'संक्रमण, फंगस, स्वच्छता, कमज़ोरी')],
        [b('Fibroids', 'बच्चेदानी में गांठ'), b('Heavy bleeding, heaviness, frequent urination', 'भारी रक्तस्राव, पेट में भारीपन, बार-बार पेशाब'), b('Excess oestrogen, heredity', 'एस्ट्रोजन की अधिकता, आनुवंशिकता')],
        [b('Infertility', 'बांझपन'), b('Not conceiving after a year of trying', '1 साल के प्रयास के बाद भी गर्भ न ठहरना'), b('PCOD, blocked tubes, endometriosis, thyroid', 'PCOD, ट्यूब में रुकावट, एंडोमेट्रियोसिस, थायरॉइड')],
        [b('Menopause problems', 'मेनोपॉज़ की समस्याएं'), b('Hot flushes, sweating, irritability, poor sleep, joint pain', 'गर्मी के झोंके, पसीना, चिड़चिड़ापन, नींद न आना, जोड़ों का दर्द'), b('Falling oestrogen at 45-50 years', '45-50 वर्ष में एस्ट्रोजन का घटना')],
      ],
    },
    { type: 'cta', title: b('PCOD, irregular periods or white discharge? Get a confidential consultation.', 'PCOD, अनियमित माहवारी या सफेद पानी? गोपनीय परामर्श लें।'), button: b('Call Now - Free Consultation', 'अभी कॉल करें - मुफ़्त परामर्श') },
    {
      type: 'text', id: 'pcod', title: b('What Are PCOD and PCOS?', 'PCOD और PCOS क्या है?'),
      paras: [
        b('In PCOD (Polycystic Ovarian Disease) and PCOS (Polycystic Ovarian Syndrome), many small cysts form in the ovaries and an egg is not released properly each month. Periods become irregular, raised male hormones (androgens) cause unwanted facial and body hair, acne and hair fall, and weight increases. PCOS is the more serious form, with higher risk of insulin resistance, diabetes and difficulty conceiving.', 'PCOD (पॉलीसिस्टिक ओवेरियन डिज़ीज़) और PCOS (पॉलीसिस्टिक ओवेरियन सिंड्रोम) में अंडाशय में कई छोटी थैलियां (सिस्ट) बन जाती हैं और हर महीने अंडा ठीक से नहीं निकलता। इससे माहवारी अनियमित हो जाती है, पुरुष हार्मोन (एंड्रोजन) बढ़ने से चेहरे व शरीर पर अनचाहे बाल, मुहांसे और बाल झड़ना शुरू होता है, और वज़न बढ़ता है। PCOS इसका ज़्यादा गंभीर रूप है जिसमें इंसुलिन प्रतिरोध, डायबिटीज़ और गर्भधारण में कठिनाई का खतरा ज़्यादा रहता है।'),
        b('Weight loss of just 5-10%, regular exercise and a low-sugar diet can help periods become more regular. Our doctors build a plan that combines medicine with these lifestyle changes.', 'सिर्फ़ 5-10% वज़न घटाने, नियमित व्यायाम और कम चीनी वाली डाइट से माहवारी नियमित होने में मदद मिलती है। हमारे डॉक्टर दवा के साथ इन बदलावों को जोड़कर प्लान बनाते हैं।'),
      ],
    },
    {
      type: 'cards', id: 'periods', icon: 'warn', title: b('Irregular Periods: When to Worry', 'अनियमित माहवारी: कब चिंता करें'),
      intro: b('A normal cycle is 21-35 days with 3-7 days of bleeding. Get checked if you have -', 'सामान्य चक्र 21 से 35 दिन का और रक्तस्राव 3-7 दिन होता है। जांच कराएं अगर -'),
      items: [
        { t: b('No period for more than 3 months in a row.', 'लगातार 3 महीने से ज़्यादा माहवारी न आना।') },
        { t: b('Cycles that vary a lot every time.', 'चक्र हर बार बहुत अलग-अलग होना।') },
        { t: b('Heavy bleeding over 7 days or with clots.', '7 दिन से अधिक या थक्कों के साथ भारी रक्तस्राव।') },
        { t: b('Bleeding between periods or after intercourse.', 'दो चक्रों के बीच या संबंध के बाद रक्तस्राव।') },
        { t: b('Period pain so bad you can\'t work without medicine.', 'माहवारी में इतना दर्द कि दवा के बिना काम न हो सके।') },
        { t: b('Any bleeding after menopause — get checked immediately.', 'मेनोपॉज़ के बाद किसी भी रक्तस्राव की तुरंत जांच कराएं।') },
        { t: b('Severe weakness, dizziness or breathlessness with periods (anaemia).', 'माहवारी के साथ अत्यधिक कमज़ोरी, चक्कर, सांस फूलना (एनीमिया)।') },
      ],
    },
    {
      type: 'text', id: 'leucorrhoea', title: b('Leucorrhoea: When Is It Normal and When a Problem?', 'सफेद पानी (ल्यूकोरिया) कब सामान्य और कब बीमारी?'),
      paras: [
        b('A light, white-clear, odourless discharge is completely normal — it is the vagina\'s self-cleaning process and increases around ovulation, pregnancy or arousal. But thick, yellow-green, curd-like or frothy discharge with odour, itching, burning, painful urination, back pain and weakness signals an infection (bacterial vaginosis, fungal or trichomonas) and needs treatment. Recurring discharge is often linked to low immunity and anaemia too.', 'योनि से हल्का, सफेद-पारदर्शी और बिना गंध का स्राव पूरी तरह सामान्य है — यह योनि की स्वयं-सफ़ाई की प्रक्रिया है और ओव्यूलेशन, गर्भावस्था या उत्तेजना के समय बढ़ जाता है। लेकिन गाढ़ा, पीला-हरा, दही जैसा या झागदार स्राव, दुर्गंध, खुजली, जलन, पेशाब में तकलीफ़, कमर दर्द और कमज़ोरी संक्रमण (बैक्टीरियल वेजिनोसिस, फंगल या ट्राइकोमोनास) का संकेत है और इलाज ज़रूरी है। बार-बार होने वाला सफेद पानी अक्सर कम प्रतिरोधक क्षमता और खून की कमी से भी जुड़ा होता है।'),
      ],
    },
    {
      type: 'list', id: 'urgent', title: b('See a Doctor Immediately If', 'कब तुरंत डॉक्टर से मिलें'),
      items: [
        { b: b('Very heavy bleeding', 'बहुत ज़्यादा रक्तस्राव'), t: b('needing a pad change every 1-2 hours.', 'जिसमें हर 1-2 घंटे में पैड बदलना पड़े।') },
        { b: b('Lower abdominal pain or lump', 'पेट के निचले हिस्से में दर्द या गांठ'), t: b('constant severe pain or a lump you can feel.', 'लगातार तेज़ दर्द या गांठ महसूस होना।') },
        { b: b('Bleeding after menopause', 'मेनोपॉज़ के बाद रक्तस्राव'), t: b('any amount.', 'थोड़ा भी।') },
        { b: b('Pain or bleeding with intercourse', 'संबंध के दौरान दर्द या खून'), t: b('needs examination.', 'जांच ज़रूरी।') },
        { b: b('Breast changes', 'स्तन में बदलाव'), t: b('a lump, change in shape or nipple discharge.', 'गांठ, आकार बदलना या निप्पल से स्राव।') },
        { b: b('Fever with foul-smelling discharge', 'बुखार के साथ दुर्गंधयुक्त स्राव'), t: b('may be a serious infection.', 'गंभीर संक्रमण हो सकता है।') },
      ],
    },
    {
      type: 'list', id: 'tests', title: b("Tests for Women's Health Problems", 'स्त्री रोगों की जांच'),
      items: [
        { b: b('Pelvic ultrasound (TVS)', 'पेल्विक अल्ट्रासाउंड (TVS)'), t: b('the key test for ovarian cysts, fibroids and endometrial thickness.', 'अंडाशय की सिस्ट, गांठ और एंडोमेट्रियम की मोटाई देखने के लिए सबसे ज़रूरी।') },
        { b: b('Hormone profile', 'हार्मोन प्रोफाइल'), t: b('LH, FSH, prolactin, testosterone, AMH (egg reserve).', 'LH, FSH, प्रोलैक्टिन, टेस्टोस्टेरोन, AMH (अंडों का भंडार)।') },
        { b: b('Thyroid (TSH)', 'थायरॉइड (TSH)'), t: b('a very common hidden cause of irregular periods and infertility.', 'अनियमित माहवारी और बांझपन का बहुत आम छिपा कारण।') },
        { b: b('CBC & ferritin', 'CBC व फेरिटिन'), t: b('for anaemia from heavy bleeding.', 'भारी रक्तस्राव से होने वाली खून की कमी के लिए।') },
        { b: b('Blood sugar & insulin', 'ब्लड शुगर व इंसुलिन'), t: b('to check insulin resistance in PCOS.', 'PCOS में इंसुलिन प्रतिरोध जानने के लिए।') },
        { b: b('Pap smear', 'Pap Smear'), t: b('every 3 years after 25, to screen for cervical cancer.', '25 वर्ष के बाद हर 3 साल में, बच्चेदानी के मुंह के कैंसर की जांच।') },
        { b: b('HSG & semen analysis', 'HSG व सीमेन एनालिसिस'), t: b('for infertility — tube check and the husband\'s test.', 'बांझपन में ट्यूब की जांच और पति की जांच।') },
      ],
    },
    {
      type: 'cards', id: 'lifestyle', icon: 'check', title: b('Diet, Lifestyle & Hygiene', 'आहार, जीवनशैली व स्वच्छता'),
      items: [
        { t: b('Exercise 30-45 minutes daily; in PCOD, losing 5-10% weight helps periods regulate.', 'रोज़ 30-45 मिनट व्यायाम; PCOD में 5-10% वज़न घटाने से माहवारी नियमित होने में मदद।') },
        { t: b('Iron-rich food: greens, jaggery, dates, beetroot, pomegranate — with vitamin C.', 'आयरन युक्त आहार: हरी सब्ज़ियां, गुड़, खजूर, चुकंदर, अनार — विटामिन C के साथ।') },
        { t: b('Calcium & vitamin D: milk, curd, sesame, ragi, sunlight.', 'कैल्शियम व विटामिन D: दूध, दही, तिल, रागी, धूप।') },
        { t: b('Cut maida, sugar, cold drinks and junk food (most important in PCOS).', 'मैदा, चीनी, कोल्ड ड्रिंक, जंक फूड कम करें (PCOS में सबसे ज़रूरी)।') },
        { t: b('Sleep 7-8 hours; reduce stress with yoga and pranayama.', '7-8 घंटे नींद, योग-प्राणायाम से तनाव घटाएं।') },
        { t: b('Change pads every 4-6 hours during periods; wear cotton underwear.', 'माहवारी में हर 4-6 घंटे में पैड बदलें, सूती अंडरवियर पहनें।') },
        { t: b('Don\'t use soap or douches inside — water is enough.', 'योनि की सफ़ाई के लिए साबुन या डूश न लगाएं, पानी पर्याप्त है।') },
        { t: b('For period pain: a hot water bottle and gentle stretching.', 'माहवारी के दर्द में गर्म पानी की बोतल से सिकाई, हल्की स्ट्रेचिंग।') },
      ],
    },
    {
      type: 'text', id: 'approach', title: b("How Our Ayurvedic Care Helps Women's Health", 'हमारी आयुर्वेदिक देखभाल स्त्री रोगों में कैसे मदद करती है'),
      paras: [
        b('Our doctors take a detailed, confidential history — dates, duration, flow, clots and pain of your periods, discharge, weight, hair changes, thyroid, stress, sleep and family history — and review any ultrasound or hormone reports. Based on this, a personalised plan of medicine, diet, exercise and lifestyle changes is made, and reviewed across your cycles.', 'हमारे डॉक्टर विस्तृत, गोपनीय केस-हिस्ट्री लेते हैं — माहवारी की तारीख़, अवधि, मात्रा, थक्के और दर्द, स्राव, वज़न, बालों में बदलाव, थायरॉइड, तनाव, नींद और पारिवारिक इतिहास — और अल्ट्रासाउंड या हार्मोन रिपोर्ट (यदि हो) देखते हैं। इस आधार पर दवा, डाइट, व्यायाम और जीवनशैली का व्यक्तिगत प्लान बनता है, जिसकी समीक्षा आपके चक्रों के साथ होती है।'),
        b('If you are on hormonal pills, don\'t stop them suddenly — any change should be made with your doctor\'s advice.', 'अगर आप हार्मोन की गोलियां ले रही हैं, तो उन्हें अचानक बंद न करें — कोई भी बदलाव डॉक्टर की सलाह से ही करें।'),
      ],
      note: b('Important: Please do not self-medicate, especially during pregnancy or while trying to conceive. Our doctors decide medicine only after reviewing your reports and symptoms.', 'ज़रूरी: खुद से दवा न लें, खासकर गर्भावस्था या गर्भधारण की कोशिश के दौरान। हमारे डॉक्टर रिपोर्ट और लक्षण देखकर ही दवा तय करते हैं।'),
    },
    { type: 'cta', title: b("Get a free, confidential women's health consultation today.", 'आज ही मुफ़्त और गोपनीय परामर्श लें।'), button: b('Book Free Consultation', 'फ्री परामर्श बुक करें'), action: 'form' },
  ],

  faqs: [
    { q: b('Can PCOD be managed?', 'क्या PCOD ठीक हो सकता है?'), a: b('PCOD can be managed well. A personalised plan with medicine, weight control, exercise and a low-sugar diet helps many women get more regular periods and fewer symptoms. Results are best when lifestyle changes are followed alongside treatment.', 'PCOD को अच्छी तरह संभाला जा सकता है। दवा, वज़न नियंत्रण, व्यायाम और कम चीनी वाली डाइट के व्यक्तिगत प्लान से कई महिलाओं की माहवारी नियमित होती है और लक्षण कम होते हैं। सबसे अच्छे परिणाम तब आते हैं जब उपचार के साथ जीवनशैली में बदलाव भी हों।') },
    { q: b('Can fibroids be treated without surgery?', 'क्या बच्चेदानी की गांठ बिना ऑपरेशन ठीक हो सकती है?'), a: b('Small and medium fibroids are often managed by controlling heavy bleeding, pain and pressure symptoms and monitoring growth. Very large fibroids, uncontrolled bleeding or pressure on the bladder or bowel may need surgery.', 'छोटी और मध्यम गांठों में अक्सर भारी रक्तस्राव, दर्द और दबाव के लक्षण नियंत्रित करके और बढ़ने पर निगरानी रखकर संभाला जाता है। बहुत बड़ी गांठ, अनियंत्रित रक्तस्राव या मूत्राशय-आंत पर दबाव होने पर सर्जरी की ज़रूरत हो सकती है।') },
    { q: b('How many days\' delay in periods is normal?', 'माहवारी में कितने दिन की देरी सामान्य है?'), a: b('A normal cycle is 21-35 days, and a delay of 5-7 days is normal — it can happen with stress, travel, illness or poor sleep. A cycle consistently longer than 35 days, or no period for 3 months (when not pregnant), needs a check-up.', 'सामान्य चक्र 21 से 35 दिन का होता है और 5-7 दिन की देरी सामान्य है — यह तनाव, यात्रा, बीमारी या नींद की गड़बड़ी से हो सकती है। लगातार 35 दिन से ज़्यादा का चक्र या 3 महीने से माहवारी न आना (गर्भावस्था न होने पर) जांच मांगता है।') },
    { q: b('Can infertility be treated?', 'क्या बांझपन का इलाज संभव है?'), a: b('If the cause is PCOD, irregular ovulation, thyroid or hormonal imbalance, many women conceive naturally with the right care. Fully blocked tubes or serious male-factor problems may need options like IVF. The husband\'s semen test is equally important.', 'अगर कारण PCOD, अनियमित ओव्यूलेशन, थायरॉइड या हार्मोन असंतुलन है, तो सही देखभाल से कई महिलाओं में प्राकृतिक गर्भधारण होता है। दोनों ट्यूब पूरी तरह बंद होने या गंभीर पुरुष कारक में IVF जैसे विकल्प ज़रूरी हो सकते हैं। पति की सीमेन जांच भी उतनी ही ज़रूरी है।') },
    { q: b('Can I take your medicine with contraceptive pills?', 'क्या गर्भनिरोधक गोलियों के साथ आपकी दवा ले सकती हूं?'), a: b('Tell our doctor about every medicine you take. Don\'t stop hormonal pills suddenly — any change should be guided by your doctor.', 'जो भी दवा ले रही हैं, डॉक्टर को ज़रूर बताएं। हार्मोन की गोलियां अचानक बंद न करें — कोई भी बदलाव डॉक्टर की सलाह से करें।') },
    { q: b('Why does white discharge keep coming back?', 'सफेद पानी बार-बार क्यों लौटता है?'), a: b('Antibiotics or antifungals treat the current infection, but underlying factors — low immunity, anaemia, diabetes, stress or imbalance of good vaginal bacteria — can remain. Care that addresses these, along with hygiene, helps reduce recurrence.', 'एंटीबायोटिक या एंटीफंगल उस समय का संक्रमण ठीक करते हैं, पर असली कारण — कम प्रतिरोधक क्षमता, खून की कमी, डायबिटीज़, तनाव या योनि के अच्छे बैक्टीरिया का असंतुलन — बना रह सकता है। इन पर ध्यान देने वाली देखभाल और स्वच्छता से बार-बार होना कम होता है।') },
    { q: b('What is the process and cost at Jeewan Jyoti?', 'जीवन ज्योति में उपचार की प्रक्रिया और खर्च क्या है?'), a: b('Call us — our team takes your history confidentially and reviews any ultrasound or hormone reports. Medicine is couriered across India in plain packing. Treatment starts at ₹1599 for 30 days of medicine.', 'हमें कॉल करें — हमारी टीम पूरी गोपनीयता से केस-हिस्ट्री लेगी और अल्ट्रासाउंड या हार्मोन रिपोर्ट (यदि हो) देखेगी। दवा पूरे भारत में सादी पैकिंग में भेजी जाती है। उपचार ₹1599 में 30 दिन की दवा से शुरू होता है।') },
    { q: b('Can menopause problems be helped?', 'क्या मेनोपॉज़ की समस्याओं में मदद मिलती है?'), a: b('Yes. Hot flushes, night sweats, poor sleep, irritability, joint pain and dryness can be eased with a personalised plan of medicine, diet, exercise and sleep habits. Discuss any hormone therapy decisions with your gynaecologist.', 'हां। गर्मी के झोंके, रात में पसीना, नींद न आना, चिड़चिड़ापन, जोड़ों का दर्द और सूखापन दवा, डाइट, व्यायाम और नींद की आदतों के व्यक्तिगत प्लान से कम हो सकते हैं। हार्मोन थेरेपी से जुड़े फ़ैसले अपनी स्त्री रोग विशेषज्ञ से करें।') },
  ],

  related: ['pcos-pcod', 'irregular-periods', 'leukorrhea', 'uterine-fibroid'],
}
