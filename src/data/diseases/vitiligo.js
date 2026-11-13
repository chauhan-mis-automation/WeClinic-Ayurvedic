// ===== Vitiligo / Leucoderma — weclinic.in se, Ayurveda ke hisaab se badla gaya =====
// Homeopathic remedies, "Homeopathy vs Allopathy" aur doctor list hata di gayi hai.
const b = (en, hi) => ({ en, hi })

export default {
  slug: 'vitiligo',
  name: b('Vitiligo', 'सफ़ेद दाग'),
  seoTitle: b('Vitiligo (Leucoderma) Ayurvedic Treatment | WeClinic Ayurveda', 'सफ़ेद दाग (ल्यूकोडर्मा) का आयुर्वेदिक उपचार | वीक्लिनिक आयुर्वेद'),
  closing: { title: b('Start Your Journey to Healthier, More Even Skin Today', 'आज ही स्वस्थ, एक समान त्वचा की ओर पहला कदम उठाएं') },

  hero: {
    eyebrow: b("India's Trusted Clinic for Vitiligo & Leucoderma Care", 'सफ़ेद दाग (ल्यूकोडर्मा) की देखभाल के लिए भरोसेमंद क्लिनिक'),
    title1: b('Vitiligo (Leucoderma) Ayurvedic Treatment for ', 'सफ़ेद दाग (विटिलिगो) का आयुर्वेदिक उपचार — '),
    title2: b('Skin Repigmentation Support', 'त्वचा के रंग की वापसी में सहायता'),
    text: b("Trusted Ayurvedic care for vitiligo & leucoderma — individualised care aimed at slowing patch progression and supporting your skin's own repigmentation process, starting at just ₹1599.", 'सफ़ेद दाग के लिए भरोसेमंद आयुर्वेदिक देखभाल — दागों का फैलना धीमा करने और त्वचा के अपने रंग लौटने की प्रक्रिया में मदद के लिए व्यक्तिगत उपचार, सिर्फ़ ₹1599 से शुरू।'),
  },
  form: {
    symptoms: [b('White Patches', 'सफ़ेद दाग'), b('Spreading Patches', 'फैलते दाग'), b('Patches on Face/Hands', 'चेहरे/हाथों पर दाग'), b('Family History of Vitiligo', 'परिवार में सफ़ेद दाग'), b('Other', 'अन्य')],
  },

  types: {
    eyebrow: b('What we treat', 'हम क्या ठीक करने में मदद करते हैं'),
    title: b('Types of Vitiligo & Leucoderma We Treat', 'सफ़ेद दाग के प्रकार जिनका हम उपचार करते हैं'),
    sub: b('From a single isolated patch to widespread, symmetrical white patches, our doctors design a treatment plan for every presentation.', 'एक अकेले दाग से लेकर पूरे शरीर पर दोनों तरफ़ फैले दागों तक — हर स्थिति के लिए हमारे डॉक्टर प्लान बनाते हैं।'),
    items: [
      { icon: '◐', name: b('Segmental Vitiligo', 'सेगमेंटल विटिलिगो'), desc: b('Patches on one side or segment of the body', 'शरीर के एक तरफ़ या एक हिस्से में दाग') },
      { icon: '⚖️', name: b('Non-Segmental (Generalized) Vitiligo', 'नॉन-सेगमेंटल (सामान्य) विटिलिगो'), desc: b('Symmetrical patches on both sides of the body', 'शरीर के दोनों तरफ़ एक जैसे दाग') },
      { icon: '⚪', name: b('Focal Vitiligo', 'फोकल विटिलिगो'), desc: b('One or a few isolated white patches', 'एक या कुछ अलग-अलग सफ़ेद दाग') },
      { icon: '👧', name: b('Vitiligo in Children', 'बच्चों में सफ़ेद दाग'), desc: b('Early-onset patches needing gentle care', 'कम उम्र में शुरू हुए दाग, सौम्य देखभाल') },
      { icon: '✋', name: b('Facial / Hand Vitiligo', 'चेहरे / हाथ के दाग'), desc: b('Visible patches on the face & hands', 'चेहरे और हाथों पर दिखने वाले दाग') },
    ],
  },

  reviewer: null,

  takeaways: [
    { k: b('What it is', 'यह क्या है'), v: b('Vitiligo (also called leucoderma) is a chronic autoimmune skin condition in which patches of skin lose their natural colour because pigment-producing cells (melanocytes) are destroyed.', 'सफ़ेद दाग (विटिलिगो/ल्यूकोडर्मा) एक पुरानी ऑटोइम्यून त्वचा समस्या है जिसमें रंग बनाने वाली कोशिकाएं (मेलानोसाइट्स) नष्ट होने से त्वचा के हिस्से अपना प्राकृतिक रंग खो देते हैं।') },
    { k: b('Who it affects', 'किसे होता है'), v: b('Vitiligo can begin at any age and in any gender, though around half of all cases start before age 20, and it often runs in families with a history of autoimmune conditions.', 'किसी भी उम्र और लिंग में हो सकता है, पर लगभग आधे मामले 20 साल से पहले शुरू होते हैं, और अक्सर ऑटोइम्यून बीमारियों वाले परिवारों में चलता है।') },
    { k: b('Not contagious', 'छूत की बीमारी नहीं'), v: b('Vitiligo cannot spread from person to person through touch or contact - it is an internal autoimmune process, not an infection.', 'सफ़ेद दाग छूने या संपर्क से नहीं फैलते — यह शरीर के अंदर की ऑटोइम्यून प्रक्रिया है, संक्रमण नहीं।') },
    { k: b('Main causes', 'मुख्य कारण'), v: b('The immune system attacking melanocytes, with genetics, autoimmune thyroid disease, oxidative stress and skin trauma (Koebner phenomenon) as common contributing factors.', 'इम्यून सिस्टम का मेलानोसाइट्स पर हमला; जेनेटिक्स, ऑटोइम्यून थायराइड, ऑक्सीडेटिव स्ट्रेस और त्वचा पर चोट (कोबनर फिनॉमिनन) सहायक कारण।') },
    { k: b('What our care aims to do', 'हमारी देखभाल का लक्ष्य'), v: b("Our individualised treatment aims to slow the spread of white patches and support the skin's natural repigmentation process, rather than promising a guaranteed cure.", 'हमारा व्यक्तिगत उपचार गारंटी वाले इलाज का वादा नहीं करता — इसका लक्ष्य दागों का फैलना धीमा करना और त्वचा के रंग लौटने की प्राकृतिक प्रक्रिया में मदद करना है।') },
    { k: b('Typical timeframe', 'आम अवधि'), v: b('Because melanocyte regeneration is slow, stabilisation of patches may take a few months, while visible repigmentation, where it occurs, generally takes considerably longer and varies by individual.', 'मेलानोसाइट्स धीरे बनते हैं, इसलिए दागों के स्थिर होने में कुछ महीने लग सकते हैं; जहां रंग लौटता है, वहां आमतौर पर इससे काफ़ी ज़्यादा समय लगता है और हर व्यक्ति में अलग होता है।') },
    { k: b('Safety point', 'सावधानी'), v: b('Vitiligo patches lack protective melanin and sunburn more easily, so daily sun protection is an essential part of care alongside any treatment.', 'दागों में सुरक्षा देने वाला मेलानिन नहीं होता और वे जल्दी झुलसते हैं, इसलिए किसी भी उपचार के साथ रोज़ धूप से बचाव ज़रूरी है।') },
  ],

  blocks: [
    {
      type: 'text', id: 'what-is', title: b('What Is Vitiligo?', 'सफ़ेद दाग (विटिलिगो) क्या है?'),
      paras: [
        b('Vitiligo is a chronic autoimmune skin condition in which the body\'s own immune system attacks and destroys melanocytes, the cells responsible for producing skin pigment, resulting in smooth, flat white patches on the skin. It is also commonly known in India as leucoderma - the two names describe the same condition, with "leucoderma" being the older, more general term still widely used in everyday language, while "vitiligo" is the precise medical term. It is not an infection, and it is not contagious.', 'विटिलिगो एक पुरानी ऑटोइम्यून त्वचा समस्या है जिसमें शरीर का अपना इम्यून सिस्टम त्वचा का रंग बनाने वाली कोशिकाओं (मेलानोसाइट्स) को नष्ट कर देता है, जिससे त्वचा पर चिकने, सपाट सफ़ेद दाग बनते हैं। भारत में इसे ल्यूकोडर्मा या सफ़ेद दाग भी कहते हैं — दोनों नाम एक ही बीमारी के हैं। यह संक्रमण नहीं है और छूने से नहीं फैलता।'),
        b('Vitiligo can appear differently from person to person, both in where it affects the body and how it progresses, and treatment is tailored to the specific type our doctors identify in your case. The main types our doctors evaluate are:', 'सफ़ेद दाग हर व्यक्ति में अलग दिखते हैं — कहां होते हैं और कैसे बढ़ते हैं — और उपचार आपके प्रकार के अनुसार तय होता है। मुख्य प्रकार:'),
      ],
    },
    {
      type: 'cards', icon: 'check',
      items: [
        { b: b('Segmental Vitiligo', 'सेगमेंटल'), t: b('affects one area or one side of the body, often starts young and tends to stabilise after a year or two.', 'शरीर के एक हिस्से या एक तरफ़, अक्सर कम उम्र में शुरू, और एक-दो साल में स्थिर हो जाता है।') },
        { b: b('Non-Segmental (Generalized) Vitiligo', 'नॉन-सेगमेंटल (सामान्य)'), t: b('the most common type, with patches appearing in a roughly symmetrical pattern on both sides of the body.', 'सबसे आम प्रकार, शरीर के दोनों तरफ़ लगभग एक जैसे दाग।') },
        { b: b('Focal Vitiligo', 'फोकल'), t: b('one or only a few isolated patches, without a clear symmetrical or segmental pattern.', 'एक या कुछ अलग-अलग दाग, कोई साफ़ पैटर्न नहीं।') },
        { b: b('Universal Vitiligo', 'यूनिवर्सल'), t: b("a rare, extensive form affecting nearly all of the skin's surface.", 'दुर्लभ रूप जो लगभग पूरी त्वचा पर होता है।') },
        { b: b('Acrofacial Vitiligo', 'एक्रोफेशियल'), t: b('patches concentrated on the face, hands, and around body openings like the eyes, nose and ears.', 'चेहरे, हाथों और आंख, नाक, कान के आसपास दाग।') },
        { b: b('Mucosal Vitiligo', 'म्यूकोसल'), t: b('affects the mucous membranes, such as the lips and the inside of the mouth or nose.', 'होंठ और मुंह या नाक के अंदर की झिल्ली पर।') },
      ],
    },
    {
      type: 'table', id: 'quick-facts', title: b('Quick Facts', 'मुख्य तथ्य'),
      rows: [
        [b('Also known as', 'अन्य नाम'), b('Leucoderma, white patch disease, vitiligo vulgaris', 'ल्यूकोडर्मा, सफ़ेद दाग, विटिलिगो वल्गैरिस')],
        [b('Commonly affects', 'किसे ज़्यादा होता है'), b('Any age or gender; roughly half of cases begin before age 20', 'कोई भी उम्र या लिंग; लगभग आधे मामले 20 साल से पहले')],
        [b('Main symptoms', 'मुख्य लक्षण'), b('Flat, milky-white depigmented patches; premature greying of hair; loss of colour inside the mouth or nose', 'सपाट, दूधिया सफ़ेद दाग; बालों का जल्दी सफ़ेद होना; मुंह या नाक के अंदर रंग जाना')],
        [b('Common causes', 'आम कारण'), b('Autoimmune destruction of melanocytes, genetics, autoimmune thyroid disease, oxidative stress, skin trauma (Koebner phenomenon), significant stress', 'मेलानोसाइट्स का ऑटोइम्यून विनाश, जेनेटिक्स, ऑटोइम्यून थायराइड, ऑक्सीडेटिव स्ट्रेस, त्वचा पर चोट, गहरा तनाव')],
        [b('Diagnosis', 'जांच'), b("Physical examination, Wood's lamp test, blood tests for thyroid/autoimmune markers, occasionally a skin biopsy", 'शारीरिक जांच, वुड्स लैंप टेस्ट, थायराइड/ऑटोइम्यून ब्लड टेस्ट, कभी-कभी स्किन बायोप्सी')],
        [b('Our approach', 'हमारा तरीका'), b('Personalised Ayurvedic care aiming to slow patch spread and support natural repigmentation, with sun-protection and diet guidance', 'दागों का फैलना धीमा करने और रंग लौटने में मदद के लिए व्यक्तिगत आयुर्वेदिक देखभाल, धूप से बचाव और डाइट सलाह के साथ')],
        [b('Typical treatment duration', 'आम उपचार अवधि'), b('Several months for stabilisation; visible repigmentation, where it occurs, generally takes considerably longer', 'स्थिर होने में कई महीने; जहां रंग लौटता है, वहां आमतौर पर इससे काफ़ी ज़्यादा समय')],
      ],
    },
    {
      type: 'cards', id: 'symptoms', icon: 'check', title: b('Common Symptoms We Treat', 'आम लक्षण'),
      intro: b('The main symptom of vitiligo is the appearance of flat, milky-white patches on the skin with fairly well-defined borders, most often starting on the hands, face and around body openings. Beyond the patches themselves, our doctors most commonly see patients with the following -', 'मुख्य लक्षण हैं साफ़ किनारों वाले सपाट, दूधिया सफ़ेद दाग, जो ज़्यादातर हाथों, चेहरे और शरीर के खुले हिस्सों के पास शुरू होते हैं। इसके अलावा हमारे डॉक्टर अक्सर ये देखते हैं -'),
      items: [
        { b: b('White / depigmented patches', 'सफ़ेद दाग'), t: b('flat, milky-white patches with fairly well-defined edges.', 'साफ़ किनारों वाले सपाट, दूधिया सफ़ेद दाग।') },
        { b: b('Symmetrical patches', 'दोनों तरफ़ एक जैसे दाग'), t: b('patches appearing on corresponding areas on both sides of the body.', 'शरीर के दोनों तरफ़ एक ही जगह पर दाग।') },
        { b: b('Premature greying', 'बालों का जल्दी सफ़ेद होना'), t: b('early whitening or greying of scalp hair, eyebrows, eyelashes or beard.', 'सिर, भौहें, पलकें या दाढ़ी के बाल जल्दी सफ़ेद होना।') },
        { b: b('Mucosal involvement', 'झिल्ली पर असर'), t: b('loss of colour inside the mouth or nose.', 'मुंह या नाक के अंदर रंग जाना।') },
        { b: b('Sun sensitivity', 'धूप से संवेदनशीलता'), t: b('patches that sunburn more easily than surrounding skin.', 'दाग आसपास की त्वचा से जल्दी झुलसते हैं।') },
        { b: b('Patches at body openings', 'खुले हिस्सों के पास दाग'), t: b('depigmentation around the eyes, nostrils, navel and genitals.', 'आंख, नाक, नाभि और गुप्तांगों के आसपास।') },
      ],
    },
    { type: 'cta', title: b('Noticed white patches spreading on your skin?', 'त्वचा पर सफ़ेद दाग फैलते दिख रहे हैं?'), button: b('Call Now - Free Consultation', 'अभी कॉल करें - फ्री परामर्श') },
    {
      type: 'cards', id: 'causes', icon: 'warn', title: b('What Causes Vitiligo?', 'सफ़ेद दाग क्यों होते हैं?'),
      intro: b("Vitiligo is most commonly caused by the body's own immune system mistakenly attacking and destroying melanocytes, though the exact trigger for this autoimmune reaction is not fully understood. Research points to a combination of the following contributing factors -", 'ज़्यादातर मामलों में शरीर का इम्यून सिस्टम गलती से मेलानोसाइट्स को नष्ट करता है, हालांकि इसका सटीक ट्रिगर पूरी तरह ज्ञात नहीं है। शोध इन कारणों की ओर इशारा करते हैं -'),
      items: [
        { t: b('Autoimmune destruction of melanocytes (pigment cells).', 'रंग बनाने वाली कोशिकाओं का ऑटोइम्यून विनाश।') },
        { t: b('Genetics & family history of vitiligo.', 'जेनेटिक्स और परिवार में सफ़ेद दाग।') },
        { t: b('Association with other autoimmune conditions, especially thyroid disease.', 'दूसरी ऑटोइम्यून बीमारियां, खासकर थायराइड।') },
        { t: b('Oxidative stress within the skin.', 'त्वचा में ऑक्सीडेटिव स्ट्रेस।') },
        { t: b('Sunburn or skin trauma at the site of a future patch (Koebner phenomenon).', 'जहां बाद में दाग बने, वहां पहले धूप से झुलसना या चोट (कोबनर फिनॉमिनन)।') },
        { t: b('Significant emotional stress or major life events.', 'गहरा भावनात्मक तनाव या जीवन की बड़ी घटनाएं।') },
        { t: b('Certain chemical exposures affecting pigment cells.', 'कुछ रसायनों का संपर्क जो रंग कोशिकाओं पर असर डालें।') },
        { t: b('Neurogenic factors, particularly in segmental vitiligo.', 'नसों से जुड़े कारण, खासकर सेगमेंटल विटिलिगो में।') },
      ],
    },
    {
      type: 'list', id: 'risk', title: b('Who Is Most at Risk?', 'किसे ज़्यादा खतरा है?'),
      intro: b('Vitiligo can affect anyone, at any age, but certain factors are associated with a higher likelihood of developing it -', 'सफ़ेद दाग किसी को भी, किसी भी उम्र में हो सकते हैं, पर कुछ कारणों से संभावना बढ़ती है -'),
      items: [
        { b: b('Family history', 'पारिवारिक इतिहास'), t: b('having a close relative with vitiligo increases your risk, though most cases occur without any known family history.', 'करीबी रिश्तेदार को हो तो खतरा बढ़ता है, हालांकि ज़्यादातर मामलों में कोई पारिवारिक इतिहास नहीं होता।') },
        { b: b('Autoimmune disease', 'ऑटोइम्यून बीमारी'), t: b('a personal or family history of autoimmune disease, particularly autoimmune thyroid disorders.', 'खुद को या परिवार में ऑटोइम्यून बीमारी, खासकर थायराइड।') },
        { b: b('Age of onset', 'शुरुआत की उम्र'), t: b('around half of all cases begin before the age of 20.', 'लगभग आधे मामले 20 साल से पहले शुरू होते हैं।') },
        { b: b('Skin trauma or sunburn', 'त्वचा पर चोट या झुलसना'), t: b('injury to the skin can sometimes trigger new patches at that site.', 'चोट की जगह पर कभी-कभी नए दाग बन सकते हैं।') },
      ],
    },
    {
      type: 'list', id: 'tests', title: b('Common Diagnostic Tests', 'आम जांचें'),
      intro: b('Diagnosing vitiligo usually starts with a visual examination and case history, and may include -', 'जांच आमतौर पर देखकर और केस हिस्ट्री से शुरू होती है, और इसमें ये शामिल हो सकते हैं -'),
      items: [
        { b: b('Physical examination', 'शारीरिक जांच'), t: b('assessing the pattern, distribution and borders of the patches.', 'दागों का पैटर्न, फैलाव और किनारे देखना।') },
        { b: b("Wood's lamp examination", 'वुड्स लैंप जांच'), t: b('a UV light test that makes vitiligo patches fluoresce brightly, helping distinguish vitiligo from other causes of white patches.', 'UV लाइट टेस्ट जिसमें दाग चमकते हैं, जिससे दूसरे सफ़ेद धब्बों से फ़र्क पता चलता है।') },
        { b: b('Blood tests', 'ब्लड टेस्ट'), t: b('to check for thyroid dysfunction or other autoimmune markers, given the known association.', 'थायराइड या दूसरे ऑटोइम्यून संकेत जांचने के लिए।') },
        { b: b('Skin biopsy', 'स्किन बायोप्सी'), t: b('occasionally used in unclear cases to confirm the absence of melanocytes.', 'अस्पष्ट मामलों में मेलानोसाइट्स की कमी की पुष्टि के लिए।') },
      ],
      note: b('Note: These tests help confirm the diagnosis and rule out look-alike conditions; not every patient needs every test.', 'ध्यान दें: ये जांचें निदान की पुष्टि और मिलती-जुलती समस्याओं को अलग करने में मदद करती हैं; हर मरीज़ को हर जांच की ज़रूरत नहीं।'),
    },
    {
      type: 'cards', id: 'prevention', icon: 'check', title: b('Care & Trigger-Avoidance Tips', 'देखभाल और ट्रिगर से बचने के टिप्स'),
      items: [
        { t: b('Use sunscreen on patches to prevent sunburn, which can worsen or trigger new patches.', 'दागों पर सनस्क्रीन लगाएं — झुलसने से दाग बढ़ या नए बन सकते हैं।') },
        { t: b('Avoid unnecessary skin trauma, friction or tattoos where possible.', 'त्वचा पर बेवजह चोट, रगड़ या टैटू से बचें।') },
        { t: b('Manage stress through regular routine, sleep and relaxation.', 'नियमित दिनचर्या, नींद और आराम से तनाव कम करें।') },
        { t: b('Avoid harsh chemicals and skin-lightening or bleaching products.', 'कड़े रसायन और गोरापन या ब्लीच वाले प्रोडक्ट से बचें।') },
        { t: b('Get thyroid and general health check-ups if you have a family history of autoimmune disease.', 'परिवार में ऑटोइम्यून बीमारी हो तो थायराइड और सामान्य जांच कराएं।') },
        { t: b('Follow a balanced, nutrient-rich diet as guided by your doctor.', 'डॉक्टर की सलाह से संतुलित, पौष्टिक आहार लें।') },
      ],
    },
    {
      type: 'list', id: 'sun-care', title: b('Sun Protection, Skin Care & Camouflage for Vitiligo', 'धूप से बचाव, स्किनकेयर और कैमोफ्लाज'),
      intro: b('Daily broad-spectrum sunscreen (SPF 30 or higher) on and around depigmented patches is the single most important everyday care step for vitiligo, since these areas have lost the melanin that normally protects skin from UV damage. Alongside sunscreen, our doctors generally advise the following -', 'दागों पर और आसपास रोज़ ब्रॉड-स्पेक्ट्रम सनस्क्रीन (SPF 30 या ज़्यादा) लगाना सबसे ज़रूरी रोज़ाना देखभाल है, क्योंकि इन हिस्सों में UV से बचाने वाला मेलानिन नहीं होता। इसके साथ हमारे डॉक्टर आमतौर पर ये सलाह देते हैं -'),
      items: [
        { b: b('Reapply & cover', 'दोबारा लगाएं और ढकें'), t: b('reapply sunscreen every 2-3 hours when outdoors, and cover patches with clothing, caps or scarves where practical.', 'बाहर हों तो हर 2-3 घंटे में सनस्क्रीन दोबारा लगाएं, और कपड़े, टोपी या स्कार्फ़ से ढकें।') },
        { b: b('Moisturise', 'मॉइस्चराइज़ करें'), t: b('depigmented skin can sometimes feel more sensitive or dry than surrounding areas.', 'दाग वाली त्वचा कभी-कभी ज़्यादा संवेदनशील या सूखी लगती है।') },
        { b: b('Camouflage makeup', 'कैमोफ्लाज मेकअप'), t: b('specially formulated, waterproof camouflage creams can even out the appearance of patches; these do not treat vitiligo but are a safe cosmetic option many patients use alongside treatment.', 'खास वाटरप्रूफ़ कैमोफ्लाज क्रीम दागों को कम दिखा सकती हैं; ये इलाज नहीं हैं, पर उपचार के साथ सुरक्षित कॉस्मेटिक विकल्प हैं।') },
        { b: b('Remove daily', 'रोज़ हटाएं'), t: b('remove camouflage products daily to let the skin breathe, inspect for changes, and apply your prescribed care or sunscreen.', 'त्वचा को सांस लेने देने, बदलाव देखने और बताई गई देखभाल या सनस्क्रीन लगाने के लिए रोज़ हटाएं।') },
        { b: b('Avoid self-tanning on normal skin', 'सामान्य त्वचा पर टैनिंग न करें'), t: b('this can make the contrast between normal and patched skin more visible.', 'इससे सामान्य और दाग वाली त्वचा का फ़र्क ज़्यादा दिखता है।') },
      ],
    },
    {
      type: 'text', id: 'emotional', title: b('Coping With the Emotional & Social Impact of Vitiligo', 'सफ़ेद दाग का मानसिक और सामाजिक असर'),
      paras: [
        b('Vitiligo itself causes no pain and does not affect general physical health, but the visible change in skin appearance can have a real emotional and social impact, and this is taken seriously as part of care - not dismissed as "just cosmetic." In India in particular, visible white patches are still sometimes met with unfair social stigma, misplaced assumptions about contagiousness, or comments that affect a person\'s confidence, relationships or even marriage prospects. It is worth repeating clearly: vitiligo is not contagious, not caused by anything "impure," and not a reflection of a person\'s health or character - it is simply an autoimmune skin condition.', 'सफ़ेद दाग से दर्द नहीं होता और सामान्य शारीरिक सेहत पर असर नहीं पड़ता, पर त्वचा के बदले रूप का मन और समाज पर असली असर हो सकता है — और इसे "सिर्फ़ दिखावट" कहकर टाला नहीं जाता। भारत में आज भी सफ़ेद दागों को लेकर गलत धारणाएं, छूत का डर या ऐसी बातें सुनने को मिलती हैं जो आत्मविश्वास, रिश्तों या शादी तक पर असर डालती हैं। साफ़ कहना ज़रूरी है: सफ़ेद दाग छूत से नहीं फैलते, किसी "अशुद्धता" से नहीं होते, और व्यक्ति की सेहत या चरित्र का संकेत नहीं हैं — यह बस एक ऑटोइम्यून त्वचा समस्या है।'),
        b('Our doctors recognise that supporting a patient through vitiligo means addressing both the skin and the person - encouraging open conversation about how the condition is affecting daily life, involving family members where helpful, and setting realistic, honest expectations about treatment timelines rather than adding pressure with unrealistic promises. Support groups, counselling where needed, and accurate information can meaningfully ease the psychological burden alongside treatment.', 'हमारे डॉक्टर मानते हैं कि सफ़ेद दाग में मरीज़ का साथ देने का मतलब त्वचा और व्यक्ति दोनों का ध्यान रखना है — रोज़मर्रा की ज़िंदगी पर असर के बारे में खुलकर बात करना, ज़रूरत हो तो परिवार को शामिल करना, और झूठे वादों के बजाय सच्ची उम्मीदें रखना। सपोर्ट ग्रुप, ज़रूरत पर काउंसलिंग और सही जानकारी से मन का बोझ काफ़ी हल्का होता है।'),
      ],
    },
    {
      type: 'text', id: 'approach', title: b('How Our Ayurvedic Care Approaches Vitiligo', 'हमारी आयुर्वेदिक देखभाल सफ़ेद दाग में कैसे मदद करती है'),
      paras: [
        b('Vitiligo is a genuinely difficult, chronic autoimmune condition, and it is important to approach it with realistic expectations whichever system of medicine you choose - results vary widely between patients regardless of the approach used.', 'सफ़ेद दाग सच में एक कठिन, पुरानी ऑटोइम्यून बीमारी है, और आप कोई भी चिकित्सा पद्धति चुनें, सच्ची उम्मीदें रखना ज़रूरी है — हर तरीके में परिणाम मरीज़ों के बीच काफ़ी अलग होते हैं।'),
        b('Our doctors take a detailed case history before prescribing anything - the size, shape, location and spread pattern of your patches, when they first appeared, any family or personal history of autoimmune conditions like thyroid disease, your digestion, diet and general health. Based on this complete picture, a personalised plan is made for your specific case, and treatment is reviewed periodically since vitiligo tends to respond slowly.', 'कुछ भी देने से पहले हमारे डॉक्टर विस्तृत केस हिस्ट्री लेते हैं — दागों का आकार, जगह और फैलने का पैटर्न, कब शुरू हुए, परिवार या खुद में थायराइड जैसी ऑटोइम्यून बीमारी, पाचन, खान-पान और सामान्य सेहत। इस पूरी तस्वीर के आधार पर आपके लिए व्यक्तिगत प्लान बनता है, और समय-समय पर समीक्षा होती है क्योंकि सफ़ेद दाग धीरे-धीरे प्रतिक्रिया देते हैं।'),
      ],
      note: b('Important: No system of medicine can guarantee complete repigmentation in every case. Our treatment aims to slow progression and support the skin\'s natural repigmentation process over a sustained course, and outcomes vary depending on the type, duration and extent of your vitiligo. Please do not self-medicate — book your free consultation before starting any treatment.', 'ज़रूरी: कोई भी चिकित्सा पद्धति हर मामले में पूरा रंग लौटने की गारंटी नहीं दे सकती। हमारा उपचार लंबे कोर्स में फैलाव धीमा करने और रंग लौटने की प्राकृतिक प्रक्रिया में मदद का लक्ष्य रखता है; परिणाम दाग के प्रकार, अवधि और फैलाव पर निर्भर करते हैं। खुद से दवा न लें — उपचार शुरू करने से पहले फ्री परामर्श बुक करें।'),
    },
    { type: 'cta', title: b('Get a personalised, doctor-reviewed vitiligo treatment plan from WeClinic™.', 'वीक्लिनिक™ से अपना व्यक्तिगत, डॉक्टर द्वारा जांचा गया प्लान पाएं।'), button: b('Book Your Free Consultation', 'फ्री परामर्श बुक करें'), action: 'form' },
  ],

  faqs: [
    { q: b('Can vitiligo be cured permanently?', 'क्या सफ़ेद दाग हमेशा के लिए ठीक हो सकते हैं?'), a: b('Vitiligo is a challenging, chronic autoimmune condition, and no system of medicine can promise a guaranteed or permanent cure for every patient. Treatment aims to slow the spreading of patches and encourage the skin\'s natural repigmentation over time. Results vary depending on the type, how long you have had it, and how consistently treatment is followed.', 'सफ़ेद दाग एक कठिन, पुरानी ऑटोइम्यून बीमारी है, और कोई भी चिकित्सा पद्धति हर मरीज़ के लिए पक्के इलाज का वादा नहीं कर सकती। उपचार का लक्ष्य दागों का फैलना धीमा करना और समय के साथ रंग लौटने में मदद करना है। परिणाम प्रकार, अवधि और उपचार की नियमितता पर निर्भर करते हैं।') },
    { q: b('Is vitiligo contagious?', 'क्या सफ़ेद दाग छूत से फैलते हैं?'), a: b('No. Vitiligo cannot spread through touch, sharing food or any contact. It is an autoimmune condition, not an infection.', 'नहीं। सफ़ेद दाग छूने, खाना साझा करने या किसी भी संपर्क से नहीं फैलते। यह ऑटोइम्यून बीमारी है, संक्रमण नहीं।') },
    { q: b('Is vitiligo hereditary?', 'क्या सफ़ेद दाग वंशानुगत हैं?'), a: b('Family history raises the risk, but most people with vitiligo have no known affected relative.', 'पारिवारिक इतिहास से खतरा बढ़ता है, पर ज़्यादातर मरीज़ों के परिवार में किसी को नहीं होता।') },
    { q: b('Does stress trigger vitiligo?', 'क्या तनाव से सफ़ेद दाग होते हैं?'), a: b('Significant emotional stress or major life events are recognised as possible triggers for onset or spread in some people.', 'कुछ लोगों में गहरा भावनात्मक तनाव या जीवन की बड़ी घटनाएं दाग शुरू होने या फैलने का संभावित ट्रिगर मानी जाती हैं।') },
    { q: b('How long does treatment take to show results?', 'उपचार का असर कितने समय में दिखता है?'), a: b('Stabilisation of patches may take a few months; visible repigmentation, where it occurs, usually takes considerably longer and varies by person.', 'दागों के स्थिर होने में कुछ महीने लग सकते हैं; जहां रंग लौटता है, वहां आमतौर पर इससे काफ़ी ज़्यादा समय लगता है और यह हर व्यक्ति में अलग होता है।') },
    { q: b('Can vitiligo spread to other parts of the body?', 'क्या सफ़ेद दाग शरीर के दूसरे हिस्सों में फैल सकते हैं?'), a: b('Non-segmental vitiligo can spread over time, while segmental vitiligo usually stays in one area and tends to stabilise after a year or two.', 'नॉन-सेगमेंटल विटिलिगो समय के साथ फैल सकता है, जबकि सेगमेंटल आमतौर पर एक हिस्से में रहता है और एक-दो साल में स्थिर हो जाता है।') },
    { q: b('What is the difference between vitiligo and other white patches?', 'सफ़ेद दाग और दूसरे सफ़ेद धब्बों में क्या फ़र्क है?'), a: b("Fungal infections, post-inflammatory marks and some other conditions can also cause pale patches. A doctor's examination, often with a Wood's lamp, helps tell them apart.", 'फंगल संक्रमण, सूजन के बाद के निशान और कुछ और समस्याओं से भी हल्के धब्बे बनते हैं। डॉक्टर की जांच, अक्सर वुड्स लैंप से, फ़र्क पहचानने में मदद करती है।') },
    { q: b('Are vitiligo patches more sensitive to the sun?', 'क्या दाग धूप से ज़्यादा प्रभावित होते हैं?'), a: b('Yes. Patches lack protective melanin and burn easily, so daily sunscreen and covering up are essential.', 'हां। दागों में सुरक्षा देने वाला मेलानिन नहीं होता और वे जल्दी झुलसते हैं, इसलिए रोज़ सनस्क्रीन और ढककर रखना ज़रूरी है।') },
    { q: b('Is there a difference between vitiligo and leucoderma?', 'विटिलिगो और ल्यूकोडर्मा में क्या फ़र्क है?'), a: b('In everyday use in India they mean the same condition; "vitiligo" is the precise medical term and "leucoderma" the older, more general one.', 'भारत में आम बोलचाल में दोनों का मतलब एक ही है; "विटिलिगो" सटीक मेडिकल शब्द है और "ल्यूकोडर्मा" पुराना, सामान्य शब्द।') },
    { q: b('Can makeup or camouflage products safely cover vitiligo patches?', 'क्या मेकअप या कैमोफ्लाज से दाग ढकना सुरक्षित है?'), a: b('Yes. Specially formulated waterproof camouflage creams are a safe cosmetic option. They do not treat vitiligo, and should be removed daily.', 'हां। खास वाटरप्रूफ़ कैमोफ्लाज क्रीम सुरक्षित कॉस्मेटिक विकल्प हैं। ये इलाज नहीं हैं और इन्हें रोज़ हटाना चाहिए।') },
  ],

  related: ['skin-pigmentation', 'melasma', 'psoriasis'],
}
