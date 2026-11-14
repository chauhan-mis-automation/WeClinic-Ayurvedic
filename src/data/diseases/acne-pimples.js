// ===== Acne & Pimples — disease page content =====
// Content weclinic.in se liya gaya, Ayurveda ke hisaab se badla gaya.
// Homeopathic medicines ke naam, homeopathy research aur "Homeopathy vs Allopathy"
// hata diye gaye hain (wo Ayurvedic nahi hain). Client se Ayurvedic content mile to yahan jod do.
const b = (en, hi) => ({ en, hi })

export default {
  slug: 'acne-pimples',
  name: b('Acne', 'मुंहासे'),
  seoTitle: b('Acne & Pimples Ayurvedic Treatment | Jeewan Jyoti Ayurvedic Sansthan', 'मुंहासों का आयुर्वेदिक उपचार | जीवन ज्योति आयुर्वेदिक संस्थान'),

  closing: { title: b('Start Your Journey to Clearer Skin Today', 'आज ही साफ़ त्वचा की ओर पहला कदम उठाएं') },

  // ---------- Hero ----------
  hero: {
    eyebrow: b("India's Trusted Clinic for Acne & Pimple Care", 'मुंहासों की देखभाल के लिए भरोसेमंद क्लिनिक'),
    title1: b('Pimples & Acne Ayurvedic Treatment for ', 'मुंहासों और पिंपल्स का आयुर्वेदिक उपचार — '),
    title2: b('Clearer, Healthier Skin', 'साफ़ और स्वस्थ त्वचा के लिए'),
    text: b(
      'Trusted Ayurvedic care for acne — personalised treatment for whiteheads, blackheads, cystic acne, hormonal breakouts & more, starting at just ₹1599.',
      'मुंहासों के लिए भरोसेमंद आयुर्वेदिक देखभाल — व्हाइटहेड्स, ब्लैकहेड्स, सिस्टिक एक्ने, हार्मोनल ब्रेकआउट और अन्य के लिए व्यक्तिगत उपचार, सिर्फ़ ₹1599 से शुरू।'
    ),
    rating: { value: '4.9', count: '1,24,795' },
    stats: [
      { value: '98%', label: b('Patient Satisfaction', 'मरीज़ संतुष्ट') },
      { value: '8 Lakh+', label: b('Patients Treated', 'मरीज़ों का उपचार') },
    ],
    points: [
      b('Free home delivery of medicines, pan-India', 'पूरे भारत में दवा की फ्री होम डिलीवरी'),
      b('100% confidential consultation & delivery', '100% गोपनीय परामर्श और डिलीवरी'),
      b('Online & in-clinic consultation available', 'ऑनलाइन और क्लिनिक परामर्श उपलब्ध'),
      b('Free personalised diet chart included', 'फ्री व्यक्तिगत डाइट चार्ट शामिल'),
    ],
    online: b('Our specialists are online – Call Now', 'हमारे विशेषज्ञ ऑनलाइन हैं – अभी कॉल करें'),
  },

  // ---------- Form ----------
  form: {
    title: b('Book Your Free Consultation', 'अपना फ्री परामर्श बुक करें'),
    sub: b('Our acne specialists will call you back within minutes', 'हमारे विशेषज्ञ कुछ ही मिनटों में आपको कॉल करेंगे'),
    symptoms: [
      b('Whiteheads/Blackheads', 'व्हाइटहेड्स/ब्लैकहेड्स'),
      b('Painful Cystic Acne', 'दर्द वाले सिस्टिक मुंहासे'),
      b('Acne Scars', 'मुंहासों के निशान'),
      b('Hormonal Breakouts', 'हार्मोनल मुंहासे'),
      b('Other', 'अन्य'),
    ],
  },

  // ---------- Types ----------
  types: {
    eyebrow: b('What we treat', 'हम क्या ठीक करने में मदद करते हैं'),
    title: b('Types of Acne & Pimple Conditions We Treat', 'मुंहासों के प्रकार जिनका हम उपचार करते हैं'),
    sub: b(
      'From occasional whiteheads and blackheads to chronic, hormone-driven cystic acne, our doctors design a treatment plan for every stage.',
      'कभी-कभार के व्हाइटहेड्स-ब्लैकहेड्स से लेकर पुराने, हार्मोन से जुड़े सिस्टिक मुंहासों तक — हर स्टेज के लिए हमारे डॉक्टर प्लान बनाते हैं।'
    ),
    items: [
      { icon: '⚪', name: b('Whiteheads & Blackheads', 'व्हाइटहेड्स और ब्लैकहेड्स'), desc: b('Clogged, congested pores', 'बंद, भरे हुए रोमछिद्र') },
      { icon: '🔴', name: b('Papules & Pustules', 'पैप्यूल्स और पस्ट्यूल्स'), desc: b('Inflamed, red or pus-filled bumps', 'सूजे, लाल या पस वाले दाने') },
      { icon: '🟣', name: b('Cystic / Nodular Acne', 'सिस्टिक / नोड्यूलर एक्ने'), desc: b('Deep, painful lesions under the skin', 'त्वचा के अंदर गहरे, दर्द वाले दाने') },
      { icon: '🌸', name: b('Hormonal Acne', 'हार्मोनल एक्ने'), desc: b('Jawline & chin breakouts tied to hormones', 'जबड़े और ठुड्डी पर हार्मोन से जुड़े मुंहासे') },
      { icon: '🧑', name: b('Teenage Acne', 'किशोरावस्था के मुंहासे'), desc: b('Puberty-related oily skin & breakouts', 'किशोरावस्था में तैलीय त्वचा और मुंहासे') },
      { icon: '👩', name: b('Adult Acne', 'वयस्कों के मुंहासे'), desc: b('Persistent or late-onset breakouts', 'लगातार या बड़ी उम्र में शुरू हुए मुंहासे') },
    ],
  },

  // Doctor review — client ke Ayurvedic (BAMS) doctor ka naam aane par bharo. null = box nahi dikhega.
  reviewer: null,
  // reviewer: { name: 'Dr. ____, BAMS', role: b('Ayurvedic Physician – Skin Care', 'आयुर्वेदिक चिकित्सक – त्वचा'), date: '2026-09-06', photo: '/images/doctors/____.jpg' },

  takeaways: [
    { k: b('What it is', 'यह क्या है'), v: b('Acne is a common inflammatory skin condition that occurs when hair follicles become clogged with excess oil and dead skin cells, producing whiteheads, blackheads, pimples and, in severe cases, painful cysts.', 'मुंहासे एक आम सूजन वाली त्वचा समस्या है, जो रोमछिद्रों में अतिरिक्त तेल और मृत कोशिकाएं भरने से होती है — इससे व्हाइटहेड्स, ब्लैकहेड्स, पिंपल्स और गंभीर मामलों में दर्द वाले सिस्ट बनते हैं।') },
    { k: b('Who it affects', 'किसे होता है'), v: b('Acne is most common in teenagers during puberty but also affects many adults, particularly women over 25, in whom breakouts along the jawline and chin are often hormonal.', 'यह किशोरों में सबसे आम है, पर कई वयस्कों को भी होता है — खासकर 25 से ऊपर की महिलाओं में, जिनमें जबड़े-ठुड्डी के मुंहासे अक्सर हार्मोनल होते हैं।') },
    { k: b('Main causes', 'मुख्य कारण'), v: b('Excess sebum, clogged pores, acne-causing bacteria and hormonal changes during puberty, the menstrual cycle, pregnancy or PCOS.', 'अतिरिक्त तेल, बंद रोमछिद्र, मुंहासे पैदा करने वाले बैक्टीरिया, और किशोरावस्था, पीरियड्स, गर्भावस्था या PCOS के दौरान हार्मोनल बदलाव।') },
    { k: b('Grades', 'ग्रेड'), v: b('Mild (mostly whiteheads and blackheads), moderate (many papules and pustules) or severe (widespread inflamed nodules and cysts that scar).', 'हल्का (ज़्यादातर व्हाइटहेड्स-ब्लैकहेड्स), मध्यम (कई लाल/पस वाले दाने) या गंभीर (फैले हुए गहरे सिस्ट जो निशान छोड़ते हैं)।') },
    { k: b('Our approach', 'हमारा तरीका'), v: b('A personalised Ayurvedic plan with medicine, diet and skincare guidance, chosen after a detailed case history.', 'विस्तृत केस हिस्ट्री के बाद दवा, डाइट और स्किनकेयर सलाह के साथ व्यक्तिगत आयुर्वेदिक प्लान।') },
    { k: b('Treatment timeframe', 'उपचार की अवधि'), v: b('Mild acne courses typically run 2–3 months; moderate-to-severe or hormonal acne 4–6 months, with follow-up calls throughout.', 'हल्के मुंहासों का कोर्स आमतौर पर 2–3 महीने; मध्यम-गंभीर या हार्मोनल मुंहासों का 4–6 महीने, लगातार फॉलो-अप के साथ।') },
    { k: b('Safety point', 'सावधानी'), v: b('Picking or popping pimples pushes inflammation deeper and is a leading cause of permanent scarring, so lesions should be left alone and treated rather than squeezed.', 'मुंहासे फोड़ने से सूजन और गहरी होती है और यह स्थायी निशानों का बड़ा कारण है — इन्हें दबाने के बजाय उपचार करें।') },
  ],

  // ---------- Content blocks (upar se neeche isi order mein dikhte hain) ----------
  blocks: [
    {
      type: 'text', id: 'what-is', title: b('What Is Acne?', 'मुंहासे क्या हैं?'),
      paras: [
        b('Acne (acne vulgaris) is a common skin condition that develops when hair follicles become clogged with oil (sebum) and dead skin cells, creating an environment where acne-causing bacteria can thrive and trigger inflammation. It most often appears on the face, forehead, chest, upper back and shoulders, and while it\'s most common during the teenage years, it can affect people well into adulthood.',
          'मुंहासे (एक्ने वल्गैरिस) तब होते हैं जब रोमछिद्र तेल (सीबम) और मृत कोशिकाओं से बंद हो जाते हैं, जिससे बैक्टीरिया बढ़ते हैं और सूजन होती है। ये ज़्यादातर चेहरे, माथे, छाती, ऊपरी पीठ और कंधों पर होते हैं। किशोरावस्था में सबसे आम हैं, पर बड़ी उम्र तक भी रह सकते हैं।'),
        b('Understanding which type of acne lesion you\'re dealing with is the first step towards effective, individualised treatment. The most common presentations we see at Jeewan Jyoti are:',
          'आपके मुंहासे किस प्रकार के हैं, यह समझना सही और व्यक्तिगत उपचार का पहला कदम है। जीवन ज्योति में सबसे ज़्यादा दिखने वाले प्रकार:'),
      ],
    },
    {
      type: 'cards', icon: 'check',
      items: [
        { b: b('Whiteheads', 'व्हाइटहेड्स'), t: b('closed, clogged pores that stay just beneath the skin.', 'बंद रोमछिद्र जो त्वचा के ठीक नीचे रहते हैं।') },
        { b: b('Blackheads', 'ब्लैकहेड्स'), t: b('open, clogged pores that darken on contact with air.', 'खुले रोमछिद्र जो हवा के संपर्क से काले हो जाते हैं।') },
        { b: b('Papules', 'पैप्यूल्स'), t: b('small, tender, inflamed red bumps.', 'छोटे, दर्द वाले लाल दाने।') },
        { b: b('Pustules', 'पस्ट्यूल्स'), t: b('pus-filled pimples with a red, inflamed base.', 'लाल सूजे आधार वाले पस भरे दाने।') },
        { b: b('Nodules', 'नोड्यूल्स'), t: b('large, hard, painful lumps deep under the skin.', 'त्वचा के अंदर बड़ी, सख्त, दर्द वाली गांठें।') },
        { b: b('Cystic Acne', 'सिस्टिक एक्ने'), t: b('the most severe form, with deep, pus-filled lesions prone to scarring.', 'सबसे गंभीर रूप — गहरे, पस भरे दाने जिनसे निशान पड़ सकते हैं।') },
      ],
    },
    {
      type: 'table', id: 'quick-facts', title: b('Quick Facts', 'मुख्य तथ्य'),
      rows: [
        [b('Also known as', 'अन्य नाम'), b('Acne vulgaris, pimples, breakouts, zits', 'एक्ने वल्गैरिस, पिंपल्स, मुंहासे, कील')],
        [b('Commonly affects', 'किसे ज़्यादा होता है'), b('Teenagers during puberty and adults up to their 40s, especially women with hormonal acne', 'किशोर और 40 की उम्र तक के वयस्क, खासकर हार्मोनल मुंहासों वाली महिलाएं')],
        [b('Main symptoms', 'मुख्य लक्षण'), b('Whiteheads, blackheads, papules, pustules, nodules, cysts, oily skin and post-acne marks or scars', 'व्हाइटहेड्स, ब्लैकहेड्स, लाल दाने, पस वाले दाने, गांठें, सिस्ट, तैलीय त्वचा और दाग-निशान')],
        [b('Common causes', 'आम कारण'), b('Excess sebum, clogged pores, acne-causing bacteria and hormonal changes (puberty, periods, pregnancy, PCOS)', 'अतिरिक्त तेल, बंद रोमछिद्र, बैक्टीरिया और हार्मोनल बदलाव (किशोरावस्था, पीरियड्स, गर्भावस्था, PCOS)')],
        [b('Grades', 'ग्रेड'), b('Mild (whiteheads/blackheads), moderate (papules/pustules), severe (nodulocystic acne that scars)', 'हल्का, मध्यम, गंभीर (गहरे सिस्ट जो निशान छोड़ते हैं)')],
        [b('Diagnosis', 'जांच'), b('Clinical skin examination; hormonal blood tests in women with cystic or PCOS-related acne', 'त्वचा की जांच; सिस्टिक या PCOS से जुड़े मुंहासों वाली महिलाओं में हार्मोन टेस्ट')],
        [b('Our approach', 'हमारा तरीका'), b('Personalised Ayurvedic medicine with diet, skincare and lifestyle guidance', 'डाइट, स्किनकेयर और जीवनशैली सलाह के साथ व्यक्तिगत आयुर्वेदिक दवा')],
        [b('Typical treatment duration', 'आम उपचार अवधि'), b('2–3 months for mild acne; 4–6 months for moderate-to-severe or hormonal acne', 'हल्के मुंहासों में 2–3 महीने; मध्यम-गंभीर या हार्मोनल में 4–6 महीने')],
        [b('When to seek urgent care', 'तुरंत डॉक्टर कब दिखाएं'), b('Rapidly worsening, deep painful cysts or widespread scarring warrant prompt professional evaluation', 'तेज़ी से बिगड़ते, गहरे दर्द वाले सिस्ट या फैलते निशान — तुरंत जांच कराएं')],
      ],
    },
    {
      type: 'cards', id: 'symptoms', icon: 'check', title: b('Common Acne Symptoms We Treat', 'मुंहासों के आम लक्षण'),
      intro: b('Acne symptoms vary from person to person and by type. Our doctors regularly treat patients with the following presentations -', 'लक्षण हर व्यक्ति और प्रकार में अलग होते हैं। हमारे डॉक्टर इन लक्षणों वाले मरीज़ों का नियमित उपचार करते हैं -'),
      items: [
        { b: b('Oily, shiny skin', 'तैलीय, चमकती त्वचा'), t: b('caused by excess sebum production.', 'ज़्यादा तेल बनने से।') },
        { b: b('Facial breakouts', 'चेहरे पर मुंहासे'), t: b('across the forehead, nose, chin & cheeks (T-zone).', 'माथा, नाक, ठुड्डी और गालों पर (T-ज़ोन)।') },
        { b: b('Chest & back acne', 'छाती और पीठ के मुंहासे'), t: b('especially in hot, humid weather.', 'खासकर गर्म, उमस भरे मौसम में।') },
        { b: b('Hormonal jawline acne', 'जबड़े के हार्मोनल मुंहासे'), t: b('breakouts along the jaw & chin, often cyclical.', 'जबड़े और ठुड्डी पर, अक्सर पीरियड्स के साथ।') },
        { b: b('Painful cystic lesions', 'दर्द वाले सिस्ट'), t: b("deep, tender bumps that don't come to a head.", 'गहरे, दर्द वाले दाने जो ऊपर नहीं आते।') },
        { b: b('Post-acne marks & scarring', 'दाग और निशान'), t: b('dark spots or pitted scars after healing.', 'ठीक होने के बाद काले धब्बे या गड्ढे वाले निशान।') },
      ],
    },
    { type: 'cta', title: b('Struggling with stubborn breakouts or acne scars?', 'ज़िद्दी मुंहासों या निशानों से परेशान हैं?'), button: b('Call Now - Free Consultation', 'अभी कॉल करें - फ्री परामर्श') },
    {
      type: 'cards', id: 'causes', icon: 'warn', title: b('What Causes Acne?', 'मुंहासे क्यों होते हैं?'),
      intro: b('Acne develops due to a combination of oil-gland, bacterial and hormonal factors. Common causes and triggers include -', 'मुंहासे तेल ग्रंथियों, बैक्टीरिया और हार्मोन के मिले-जुले कारणों से होते हैं। आम कारण -'),
      items: [
        { t: b('Excess sebum (oil) production clogging pores.', 'ज़्यादा तेल बनकर रोमछिद्र बंद होना।') },
        { t: b('Build-up of dead skin cells within hair follicles.', 'रोमछिद्रों में मृत कोशिकाओं का जमा होना।') },
        { t: b('Acne-causing bacteria multiplying in clogged pores.', 'बंद रोमछिद्रों में बैक्टीरिया का बढ़ना।') },
        { t: b('Hormonal changes during puberty, periods, pregnancy or PCOS.', 'किशोरावस्था, पीरियड्स, गर्भावस्था या PCOS में हार्मोनल बदलाव।') },
        { t: b('Family history & genetics.', 'पारिवारिक इतिहास और जेनेटिक्स।') },
        { t: b('Certain medications, including steroids.', 'कुछ दवाएं, जैसे स्टेरॉयड।') },
        { t: b('High-glycemic diet & dairy, in sensitive individuals.', 'संवेदनशील लोगों में ज़्यादा मीठा/मैदा और डेयरी।') },
        { t: b('Stress, lack of sleep & heavy, comedogenic cosmetics.', 'तनाव, कम नींद और भारी, रोमछिद्र बंद करने वाले कॉस्मेटिक्स।') },
      ],
    },
    {
      type: 'list', id: 'risk', title: b('Who Is Most at Risk?', 'किसे ज़्यादा खतरा है?'),
      intro: b('While acne can affect anyone, certain factors make some people more susceptible than others -', 'मुंहासे किसी को भी हो सकते हैं, पर कुछ कारणों से कुछ लोगों में खतरा ज़्यादा होता है -'),
      items: [
        { b: b('Age', 'उम्र'), t: b('most common in teenagers and young adults during puberty, though it can persist or begin in adulthood.', 'किशोरों और युवाओं में सबसे आम, पर बड़ी उम्र में भी रह या शुरू हो सकता है।') },
        { b: b('Gender', 'लिंग'), t: b('hormonal (adult) acne is more common in women, often linked to the menstrual cycle or PCOS.', 'वयस्क हार्मोनल मुंहासे महिलाओं में ज़्यादा, अक्सर पीरियड्स या PCOS से जुड़े।') },
        { b: b('Family history', 'पारिवारिक इतिहास'), t: b('a parent with a history of severe acne raises your own risk.', 'माता-पिता को गंभीर मुंहासे रहे हों तो खतरा बढ़ता है।') },
        { b: b('Skin type', 'त्वचा का प्रकार'), t: b('naturally oily skin is more prone to clogged pores and breakouts.', 'तैलीय त्वचा में रोमछिद्र बंद होने और मुंहासों की संभावना ज़्यादा।') },
      ],
    },
    {
      type: 'list', id: 'grades', title: b('Acne Grades: Mild, Moderate & Severe', 'मुंहासों के ग्रेड: हल्के, मध्यम और गंभीर'),
      intro: b('Acne is graded by how many lesions are present and how deep and inflamed they are, and knowing the grade helps our doctors judge how intensive treatment needs to be. The widely used grading is -', 'ग्रेड इस पर तय होता है कि कितने दाने हैं और वे कितने गहरे व सूजे हैं — इससे डॉक्टर तय करते हैं कि उपचार कितना गहन हो। आम ग्रेडिंग -'),
      items: [
        { b: b('Mild (Grade 1)', 'हल्का (ग्रेड 1)'), t: b('mostly whiteheads and blackheads with a few small papules, usually without much inflammation.', 'ज़्यादातर व्हाइटहेड्स-ब्लैकहेड्स और कुछ छोटे दाने, ज़्यादा सूजन नहीं।') },
        { b: b('Moderate (Grade 2)', 'मध्यम (ग्रेड 2)'), t: b('a greater number of papules and pustules (inflamed, pus-filled pimples) concentrated on the face.', 'चेहरे पर ज़्यादा लाल और पस वाले दाने।') },
        { b: b('Moderately severe (Grade 3)', 'मध्यम-गंभीर (ग्रेड 3)'), t: b('many papules and pustules with some inflamed nodules, often spreading to the chest and back.', 'कई दाने और कुछ सूजी गांठें, अक्सर छाती और पीठ तक।') },
        { b: b('Severe (Grade 4)', 'गंभीर (ग्रेड 4)'), t: b('widespread painful nodules and cysts with a high risk of scarring.', 'फैली हुई दर्द वाली गांठें और सिस्ट, निशान पड़ने का ज़्यादा खतरा।') },
      ],
      after: b('Mild stages often respond to consistent care and skincare, while moderate-to-severe and cystic acne need a more structured, individualised plan and closer follow-up.', 'हल्के मुंहासे नियमित देखभाल और स्किनकेयर से संभल जाते हैं, जबकि मध्यम-गंभीर और सिस्टिक मुंहासों में ज़्यादा व्यवस्थित, व्यक्तिगत प्लान और करीबी फॉलो-अप चाहिए।'),
    },
    {
      type: 'cards', id: 'complications', icon: 'warn', title: b('Possible Complications of Untreated Acne', 'बिना उपचार के मुंहासों की जटिलताएं'),
      intro: b('Untreated or repeatedly aggravated acne can lead to lasting skin and emotional effects that are far harder to reverse than the breakouts themselves. The main complications include -', 'बिना उपचार या बार-बार छेड़े गए मुंहासे त्वचा और मन पर ऐसे असर छोड़ सकते हैं जो मुंहासों से कहीं ज़्यादा मुश्किल से ठीक होते हैं -'),
      items: [
        { b: b('Permanent scarring', 'स्थायी निशान'), t: b('deep or picked lesions can leave pitted (atrophic) or raised scars.', 'गहरे या फोड़े गए दाने गड्ढे या उभरे निशान छोड़ सकते हैं।') },
        { b: b('Post-inflammatory hyperpigmentation', 'काले धब्बे (PIH)'), t: b('flat brown or dark marks left after a pimple heals, more common in Indian and darker skin tones.', 'दाना ठीक होने के बाद भूरे/काले धब्बे, भारतीय त्वचा में ज़्यादा आम।') },
        { b: b('Persistent redness', 'लगातार लालिमा'), t: b('lingering pink or red discoloration where inflamed lesions once were.', 'जहां दाने थे वहां गुलाबी या लाल रंग रह जाना।') },
        { b: b('Secondary infection', 'दूसरा संक्रमण'), t: b('squeezing or scratching can introduce bacteria and worsen inflammation.', 'दबाने या खुजलाने से बैक्टीरिया जाते हैं और सूजन बढ़ती है।') },
        { b: b('Emotional impact', 'मानसिक असर'), t: b('visible acne can affect self-esteem, confidence and social comfort.', 'दिखने वाले मुंहासे आत्मविश्वास पर असर डाल सकते हैं।') },
      ],
      note: b('Controlling active breakouts early is the single most effective way to prevent scarring and pigmentation. Deep, pitted scars that have already formed usually respond better to dermatological procedures alongside our treatment.', 'सक्रिय मुंहासों को जल्दी नियंत्रित करना निशान और पिगमेंटेशन रोकने का सबसे असरदार तरीका है। बन चुके गहरे निशानों के लिए हमारे उपचार के साथ त्वचा विशेषज्ञ की प्रक्रियाएं बेहतर काम करती हैं।'),
    },
    {
      type: 'list', id: 'tests', title: b('Common Diagnostic Tests', 'आम जांचें'),
      intro: b('To confirm the type and possible drivers of acne, doctors typically recommend -', 'मुंहासों का प्रकार और कारण जानने के लिए डॉक्टर आमतौर पर ये जांचें बताते हैं -'),
      items: [
        { b: b('Clinical skin examination', 'त्वचा की जांच'), t: b('most acne is diagnosed simply by examining the skin and its pattern.', 'ज़्यादातर मुंहासे त्वचा देखकर ही पहचाने जाते हैं।') },
        { b: b('Hormonal blood tests', 'हार्मोन ब्लड टेस्ट'), t: b('recommended for women with hormonal or cystic acne to check for conditions like PCOS.', 'हार्मोनल या सिस्टिक मुंहासों वाली महिलाओं में PCOS आदि जांचने के लिए।') },
        { b: b('Skin swab/culture', 'स्किन स्वैब/कल्चर'), t: b('occasionally used to rule out other infections in unusual or resistant cases.', 'असामान्य या ज़िद्दी मामलों में दूसरे संक्रमण जांचने के लिए।') },
      ],
      note: b('Note: These tests are usually recommended in more advanced, hormonal or treatment-resistant cases and are not required for every patient.', 'ध्यान दें: ये जांचें आमतौर पर गंभीर, हार्मोनल या ज़िद्दी मामलों में ही ज़रूरी होती हैं, हर मरीज़ के लिए नहीं।'),
    },
    {
      type: 'cards', id: 'prevention', icon: 'check', title: b('Prevention & Skincare Tips', 'बचाव और स्किनकेयर टिप्स'),
      items: [
        { t: b('Wash your face gently, twice a day, with a mild, oil-free cleanser.', 'दिन में दो बार हल्के, ऑयल-फ्री क्लींज़र से चेहरा धोएं।') },
        { t: b('Avoid harsh scrubbing - it can irritate skin and worsen breakouts.', 'ज़ोर से रगड़ें नहीं — इससे जलन और मुंहासे बढ़ते हैं।') },
        { t: b('Choose non-comedogenic, oil-free skincare & makeup.', 'नॉन-कॉमेडोजेनिक, ऑयल-फ्री स्किनकेयर और मेकअप चुनें।') },
        { t: b('Avoid touching or picking at pimples to prevent scarring.', 'निशान से बचने के लिए दानों को न छुएं, न फोड़ें।') },
        { t: b('Wash pillowcases & face towels regularly.', 'तकिये के कवर और तौलिये नियमित धोएं।') },
        { t: b('Use a broad-spectrum sunscreen daily.', 'रोज़ ब्रॉड-स्पेक्ट्रम सनस्क्रीन लगाएं।') },
        { t: b('Keep hair oil & styling products away from your face and hairline.', 'बालों का तेल और स्टाइलिंग प्रोडक्ट चेहरे व हेयरलाइन से दूर रखें।') },
        { t: b('Manage stress and prioritise adequate sleep.', 'तनाव कम रखें और पूरी नींद लें।') },
      ],
    },
    {
      type: 'text', id: 'approach', title: b('How Our Ayurvedic Care Helps with Acne', 'हमारी आयुर्वेदिक देखभाल मुंहासों में कैसे मदद करती है'),
      paras: [
        b('Our doctors don\'t treat acne as an isolated "skin problem". They look at the whole picture — where breakouts appear, whether they are cyclical or hormonal, the nature of the lesions (oily, painful, pus-filled, scarring), your digestion, diet, sleep, stress and skin type. Based on this, a personalised plan of medicine, diet and skincare is prescribed for your specific case.',
          'हमारे डॉक्टर मुंहासों को सिर्फ़ "त्वचा की समस्या" नहीं मानते। वे पूरी तस्वीर देखते हैं — मुंहासे कहां होते हैं, क्या पीरियड्स/हार्मोन से जुड़े हैं, दाने कैसे हैं (तैलीय, दर्द वाले, पस वाले, निशान छोड़ने वाले), आपका पाचन, खान-पान, नींद, तनाव और त्वचा का प्रकार। इसके आधार पर आपके लिए दवा, डाइट और स्किनकेयर का व्यक्तिगत प्लान बनता है।'),
        b('If your acne is severe or scarring quickly, our doctors will tell you plainly when a dermatologist\'s treatment is needed alongside our care.',
          'अगर मुंहासे गंभीर हैं या तेज़ी से निशान छोड़ रहे हैं, तो हमारे डॉक्टर साफ़ बताएंगे कि कब हमारे उपचार के साथ त्वचा विशेषज्ञ का इलाज भी ज़रूरी है।'),
      ],
      note: b('Important: Please do not self-medicate. Jeewan Jyoti doctors prescribe the right medicine and dosage only after a detailed personal case-history consultation, so book your free consultation before starting any treatment.', 'ज़रूरी: खुद से दवा न लें। जीवन ज्योति के डॉक्टर विस्तृत केस-हिस्ट्री के बाद ही सही दवा और खुराक बताते हैं — कोई भी उपचार शुरू करने से पहले फ्री परामर्श बुक करें।'),
    },
    {
      type: 'cards', id: 'benefits', icon: 'check', title: b('What You Get with Jeewan Jyoti Acne Care', 'जीवन ज्योति एक्ने केयर में आपको क्या मिलता है'),
      items: [
        { t: b('A personalised plan built around your skin and triggers', 'आपकी त्वचा और कारणों के अनुसार व्यक्तिगत प्लान') },
        { t: b('Diet chart and skincare do-and-don\'t list included', 'डाइट चार्ट और स्किनकेयर क्या करें/क्या न करें सूची शामिल') },
        { t: b('Regular follow-up calls to track progress', 'प्रगति देखने के लिए नियमित फॉलो-अप कॉल') },
        { t: b('Suitable for teenagers & adults, under doctor guidance', 'डॉक्टर की देखरेख में किशोरों और वयस्कों के लिए') },
      ],
    },
    { type: 'cta', title: b('Get a personalised acne treatment plan from Jeewan Jyoti\'s experienced doctors.', 'जीवन ज्योति के अनुभवी डॉक्टरों से अपना व्यक्तिगत एक्ने प्लान पाएं।'), button: b('Book Your Free Consultation', 'फ्री परामर्श बुक करें'), action: 'form' },
    {
      type: 'steps', id: 'course', title: b('How Jeewan Jyoti Treats Acne - The Course, Week by Week', 'जीवन ज्योति में मुंहासों का उपचार — हफ्ते-दर-हफ्ते'),
      intro: b('Acne is a tendency, not an infection, so the aim of our course is to change how often and how hard your skin breaks out - and then to keep it that way after the medicine stops. The plan below is what every acne patient at Jeewan Jyoti goes through; the medicine inside it changes with the person.', 'मुंहासे एक प्रवृत्ति हैं, संक्रमण नहीं — इसलिए हमारे कोर्स का लक्ष्य है कि मुंहासे कम और हल्के निकलें, और दवा बंद होने के बाद भी ऐसा ही रहे। नीचे का प्लान हर मरीज़ के लिए है; दवा हर व्यक्ति के अनुसार बदलती है।'),
      steps: [
        { title: b('Free case-taking call (20-30 min)', 'फ्री केस-हिस्ट्री कॉल (20-30 मिनट)'), text: b('The doctor maps your acne: where it sits (jawline and chin, forehead, cheeks, back), lesion type (blackheads, pustules, deep cysts), whether it flares before periods, your cycle regularity, PCOS or thyroid history, medicines and supplements, skincare in use, diet, sleep and stress. Photos help and are kept confidential.', 'डॉक्टर आपके मुंहासों को समझते हैं: कहां हैं (जबड़ा-ठुड्डी, माथा, गाल, पीठ), किस तरह के दाने हैं, पीरियड्स से पहले बढ़ते हैं या नहीं, चक्र की नियमितता, PCOS या थायराइड, दवाएं-सप्लीमेंट, स्किनकेयर, डाइट, नींद और तनाव। फोटो मददगार हैं और गोपनीय रहती हैं।') },
        { title: b('Grade & cause check', 'ग्रेड और कारण की जांच'), text: b('Grade 1-4 is assigned. Women with jawline acne, irregular cycles or hair growth are advised on hormonal tests (and our PCOS care programme if relevant); anyone on steroids, protein supplements or isotretinoin is told how that changes the plan.', 'ग्रेड 1-4 तय होता है। जबड़े के मुंहासे, अनियमित पीरियड्स या अनचाहे बाल वाली महिलाओं को हार्मोन टेस्ट (और ज़रूरत हो तो PCOS केयर प्रोग्राम) की सलाह दी जाती है; स्टेरॉयड, प्रोटीन सप्लीमेंट या आइसोट्रेटिनॉइन लेने वालों को बताया जाता है कि प्लान कैसे बदलेगा।') },
        { title: b('Individualised prescription', 'व्यक्तिगत दवा'), text: b('Medicine matched to your presentation, dispatched with a written schedule, a skincare do-and-don\'t list and a diet chart that targets the high-glycaemic and dairy triggers relevant to you rather than banning everything.', 'आपके लक्षणों के अनुसार दवा, लिखित शेड्यूल, स्किनकेयर सूची और ऐसा डाइट चार्ट जो सब कुछ बंद करने के बजाय आपके असली ट्रिगर (मीठा, डेयरी आदि) पर ध्यान देता है।') },
        { title: b('Weeks 1-4: control phase', 'हफ्ता 1-4: नियंत्रण चरण'), text: b('Goal: fewer new lesions, less pain in existing cysts, less oiliness. Follow-up call at week two and week four.', 'लक्ष्य: नए दाने कम, सिस्ट में दर्द कम, तैलीयपन कम। दूसरे और चौथे हफ्ते फॉलो-अप कॉल।') },
        { title: b('Weeks 5-12: clearance phase', 'हफ्ता 5-12: सफ़ाई चरण'), text: b('Goal: existing lesions heal without new ones replacing them, post-acne marks begin to fade. The plan is adjusted on follow-up calls; hormonal acne is tracked across at least two cycles.', 'लक्ष्य: पुराने दाने ठीक हों और नए न आएं, दाग हल्के होने लगें। फॉलो-अप पर प्लान बदला जाता है; हार्मोनल मुंहासों को कम से कम दो चक्र तक देखा जाता है।') },
        { title: b('Maintenance & discharge', 'मेंटेनेंस और कोर्स पूरा'), text: b('Once you have gone six to eight weeks with only occasional minor breakouts, the medicine is tapered. You keep the skincare and diet plan; most patients do not need ongoing medicine.', 'छह से आठ हफ्ते तक सिर्फ़ कभी-कभार छोटे दाने आएं, तो दवा धीरे-धीरे कम की जाती है। स्किनकेयर और डाइट प्लान जारी रहता है; ज़्यादातर मरीज़ों को लगातार दवा की ज़रूरत नहीं होती।') },
      ],
      note: b('Cost and inclusions: courses start at ₹1599 per month. Mild acne typically needs 2-3 months, moderate-to-severe or hormonal acne 4-6 months. Consultation, follow-ups, diet chart and delivery are included.', 'खर्च और क्या शामिल है: कोर्स ₹1599 प्रति माह से शुरू। हल्के मुंहासों में आमतौर पर 2-3 महीने, मध्यम-गंभीर या हार्मोनल में 4-6 महीने। परामर्श, फॉलो-अप, डाइट चार्ट और डिलीवरी शामिल।'),
    },
    {
      type: 'list', id: 'location', title: b('What the Location of Your Acne Tells Us', 'मुंहासों की जगह क्या बताती है'),
      intro: b('Where acne sits is not a diagnosis, but it is a useful clue to the driver, and it changes which questions the doctor asks first.', 'मुंहासों की जगह से निदान नहीं होता, पर कारण का अच्छा संकेत मिलता है — और डॉक्टर पहले कौन से सवाल पूछेंगे, यह बदल जाता है।'),
      items: [
        { b: b('Jawline, chin and lower cheeks', 'जबड़ा, ठुड्डी और निचले गाल'), t: b('the classic hormonal pattern in women, often deep, tender and cyclical, flaring 7-10 days before a period. Cycle history and PCOS screening matter most here.', 'महिलाओं में हार्मोनल पैटर्न — अक्सर गहरे, दर्द वाले, पीरियड से 7-10 दिन पहले बढ़ने वाले। यहां पीरियड्स का इतिहास और PCOS जांच सबसे ज़रूरी।') },
        { b: b('Forehead and hairline', 'माथा और हेयरलाइन'), t: b('often linked to oily scalp, hair oils and heavy styling products, or to the T-zone oiliness of teenage acne. Keeping oil off the hairline is half the fix.', 'अक्सर तैलीय स्कैल्प, बालों के तेल और स्टाइलिंग प्रोडक्ट से जुड़े। हेयरलाइन से तेल दूर रखना आधा समाधान है।') },
        { b: b('Cheeks', 'गाल'), t: b('commonly friction and contact acne - phone screens, pillowcases, masks - or cystic acne in oily skins.', 'अक्सर रगड़ और संपर्क से — फोन स्क्रीन, तकिया, मास्क — या तैलीय त्वचा में सिस्टिक मुंहासे।') },
        { b: b('Back, chest and shoulders (bacne)', 'पीठ, छाती और कंधे'), t: b('sweat, gym wear and whey protein supplements are the usual aggravators. Showering promptly after sweating matters more here than anywhere else.', 'पसीना, जिम के कपड़े और व्हे प्रोटीन आम कारण। पसीने के बाद तुरंत नहाना यहां सबसे ज़रूरी।') },
        { b: b('Everywhere, sudden onset in an adult', 'वयस्क में अचानक हर जगह'), t: b('think medication (steroids, some contraceptives, anticonvulsants), a new supplement, or a hormonal shift - this is a doctor conversation, not a skincare one.', 'दवाएं (स्टेरॉयड, कुछ गर्भनिरोधक, दौरे की दवा), नया सप्लीमेंट या हार्मोनल बदलाव — यह डॉक्टर से बात करने का मामला है, सिर्फ़ स्किनकेयर का नहीं।') },
      ],
      after: b('Send us a photo and your cycle history - the pattern tells us where to start.', 'हमें फोटो और पीरियड्स की जानकारी भेजें — पैटर्न से पता चलता है कि शुरुआत कहां से करें।'),
    },
    { type: 'cta', title: b('Not sure what\'s driving your breakouts?', 'पता नहीं मुंहासे किस वजह से हैं?'), button: b('Call Now - Free Consultation', 'अभी कॉल करें - फ्री परामर्श') },
    {
      type: 'text', id: 'scars', title: b('Acne Marks, Dark Spots and Scars - What Treatment Can and Cannot Do', 'दाग, काले धब्बे और निशान — उपचार क्या कर सकता है और क्या नहीं'),
      paras: [
        b('The honest answer has two halves. Flat brown or red marks (post-inflammatory hyperpigmentation) are not scars; they fade over two to six months once new breakouts stop, and Indian skin makes them more likely and slower. Treatment helps here by stopping the supply of new marks.', 'सच्चा जवाब दो हिस्सों में है। सपाट भूरे या लाल धब्बे (PIH) निशान नहीं हैं; नए मुंहासे रुकने पर ये 2 से 6 महीने में हल्के हो जाते हैं — भारतीय त्वचा में ये ज़्यादा होते हैं और धीरे जाते हैं। उपचार नए धब्बे बनना रोककर मदद करता है।'),
        b('True pitted or ice-pick scars are structural loss of collagen, and no internal medicine fills them in; those need dermatological procedures such as microneedling, subcision or laser once active acne is controlled. Our doctors will tell you which of the two you have.', 'असली गड्ढे वाले निशान कोलेजन की कमी से बनते हैं, और कोई भी खाने वाली दवा इन्हें नहीं भरती; सक्रिय मुंहासे नियंत्रित होने के बाद इनके लिए माइक्रोनीडलिंग, सबसीज़न या लेज़र जैसी त्वचा प्रक्रियाएं चाहिए। हमारे डॉक्टर बताएंगे कि आपके निशान किस तरह के हैं।'),
      ],
    },
    {
      type: 'text', id: 'expectations', title: b('Setting Expectations', 'उम्मीदें क्या रखें'),
      paras: [
        b('Acne care takes time. Mild, non-hormonal acne is reviewed at four to eight weeks; hormonal acne needs at least two full cycles before you should judge it; and severe nodulocystic acne in a teenager may need a dermatologist\'s treatment alongside our care, which we will say plainly rather than let scarring progress.', 'मुंहासों की देखभाल में समय लगता है। हल्के, गैर-हार्मोनल मुंहासों की समीक्षा 4 से 8 हफ्ते में होती है; हार्मोनल मुंहासों को आंकने से पहले कम से कम दो पूरे चक्र चाहिए; और किशोरों के गंभीर सिस्टिक मुंहासों में हमारे उपचार के साथ त्वचा विशेषज्ञ का इलाज भी ज़रूरी हो सकता है — हम यह साफ़ बताएंगे, निशान बढ़ने नहीं देंगे।'),
        b('Many patients choose our care when acne keeps returning after creams or antibiotics stop, or when they prefer not to take long antibiotic courses or hormonal pills. Results vary from person to person.', 'कई मरीज़ हमारे पास तब आते हैं जब क्रीम या एंटीबायोटिक बंद करते ही मुंहासे लौट आते हैं, या जब वे लंबे एंटीबायोटिक कोर्स या हार्मोनल गोलियां नहीं लेना चाहते। परिणाम हर व्यक्ति में अलग होते हैं।'),
      ],
    },
  ],

  faqs: [
    { q: b('Can acne be cured permanently?', 'क्या मुंहासे हमेशा के लिए ठीक हो सकते हैं?'), a: b('Acne is a tendency influenced by hormones and lifestyle. Many patients see a long-term reduction in breakouts when they follow the complete course, diet and skincare plan, though results vary from person to person.', 'मुंहासे हार्मोन और जीवनशैली से प्रभावित एक प्रवृत्ति हैं। पूरा कोर्स, डाइट और स्किनकेयर प्लान मानने पर कई मरीज़ों में लंबे समय तक मुंहासे कम रहते हैं, पर परिणाम हर व्यक्ति में अलग होते हैं।') },
    { q: b('Does treatment help with acne scars?', 'क्या उपचार से मुंहासों के निशान जाते हैं?'), a: b('Flat dark marks usually fade over 2–6 months once new breakouts stop. Deep pitted scars need dermatological procedures such as microneedling or laser after active acne is controlled.', 'सपाट काले धब्बे नए मुंहासे रुकने पर 2–6 महीने में हल्के हो जाते हैं। गहरे गड्ढे वाले निशानों के लिए सक्रिय मुंहासे रुकने के बाद माइक्रोनीडलिंग या लेज़र जैसी प्रक्रियाएं चाहिए।') },
    { q: b('Is acne caused by diet?', 'क्या मुंहासे खान-पान से होते हैं?'), a: b('Diet is not the main cause, but high-glycaemic foods and dairy can aggravate acne in sensitive people. Your diet chart targets your own triggers rather than banning everything.', 'खान-पान मुख्य कारण नहीं है, पर ज़्यादा मीठा/मैदा और डेयरी संवेदनशील लोगों में मुंहासे बढ़ा सकते हैं। आपका डाइट चार्ट सब कुछ बंद करने के बजाय आपके असली ट्रिगर पर ध्यान देता है।') },
    { q: b('Is hormonal acne different from teenage acne?', 'क्या हार्मोनल मुंहासे किशोरावस्था के मुंहासों से अलग हैं?'), a: b('Yes. Teenage acne is usually T-zone and oil-driven; hormonal acne in adult women sits on the jawline and chin, is deeper and often flares before periods. It may need hormonal tests such as a PCOS check.', 'हां। किशोरों के मुंहासे आमतौर पर T-ज़ोन और तेल से जुड़े होते हैं; वयस्क महिलाओं के हार्मोनल मुंहासे जबड़े-ठुड्डी पर, गहरे और पीरियड से पहले बढ़ने वाले होते हैं। इनमें PCOS जैसी जांच की ज़रूरत हो सकती है।') },
    { q: b('How long does treatment take to show results?', 'उपचार का असर कितने समय में दिखता है?'), a: b('Progress is reviewed at week 2 and week 4. Mild acne courses typically run 2–3 months; moderate-to-severe or hormonal acne 4–6 months.', 'दूसरे और चौथे हफ्ते प्रगति देखी जाती है। हल्के मुंहासों का कोर्स आमतौर पर 2–3 महीने, मध्यम-गंभीर या हार्मोनल का 4–6 महीने।') },
    { q: b('Is the treatment safe for teenagers?', 'क्या उपचार किशोरों के लिए सुरक्षित है?'), a: b('Yes, when prescribed by our doctors after a proper consultation. Tell the doctor about any other medicines or supplements being taken.', 'हां, जब हमारे डॉक्टर सही परामर्श के बाद दवा दें। कोई अन्य दवा या सप्लीमेंट ले रहे हों तो डॉक्टर को ज़रूर बताएं।') },
    { q: b('Does stress cause acne?', 'क्या तनाव से मुंहासे होते हैं?'), a: b('Stress does not cause acne by itself, but it can worsen breakouts through hormonal changes and poor sleep.', 'तनाव अकेले मुंहासे नहीं करता, पर हार्मोनल बदलाव और खराब नींद से मुंहासे बढ़ा सकता है।') },
    { q: b('Why does popping pimples make acne worse?', 'दाने फोड़ने से मुंहासे क्यों बढ़ते हैं?'), a: b('Squeezing pushes inflammation and bacteria deeper into the skin, increasing redness, infection and the risk of permanent scars.', 'दबाने से सूजन और बैक्टीरिया त्वचा में गहरे जाते हैं, जिससे लालिमा, संक्रमण और स्थायी निशान का खतरा बढ़ता है।') },
    { q: b('Why do adults over 25 still get acne?', '25 के बाद भी मुंहासे क्यों होते हैं?'), a: b('Common reasons are hormonal changes (especially in women), stress, certain medicines or supplements, and heavy cosmetics.', 'आम कारण हैं हार्मोनल बदलाव (खासकर महिलाओं में), तनाव, कुछ दवाएं या सप्लीमेंट, और भारी कॉस्मेटिक्स।') },
    { q: b('How do I treat acne on my back and chest?', 'पीठ और छाती के मुंहासों का क्या करें?'), a: b('Shower promptly after sweating, wear breathable clothing, review protein supplements, and consult our doctor for a personalised plan.', 'पसीने के बाद तुरंत नहाएं, हवादार कपड़े पहनें, प्रोटीन सप्लीमेंट पर ध्यान दें, और व्यक्तिगत प्लान के लिए हमारे डॉक्टर से मिलें।') },
    { q: b('How much does acne treatment cost at Jeewan Jyoti?', 'जीवन ज्योति में मुंहासों के उपचार का खर्च कितना है?'), a: b('Courses start at ₹1599 per month, including consultation, follow-ups, diet chart and delivery. The first consultation is free.', 'कोर्स ₹1599 प्रति माह से शुरू, जिसमें परामर्श, फॉलो-अप, डाइट चार्ट और डिलीवरी शामिल है। पहला परामर्श फ्री है।') },
  ],

  related: ['psoriasis', 'eczema', 'skin-allergy', 'melasma'],
}
