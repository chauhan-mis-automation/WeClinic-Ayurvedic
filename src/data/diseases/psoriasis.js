// ===== Psoriasis — weclinic.in se, Ayurveda ke hisaab se badla gaya =====
// Homeopathic remedies, "Homeopathy vs Allopathy" aur doctor list hata di gayi hai.
const b = (en, hi) => ({ en, hi })

export default {
  slug: 'psoriasis',
  name: b('Psoriasis', 'सोरायसिस'),
  seoTitle: b('Psoriasis Ayurvedic Treatment | Jeewan Jyoti Ayurvedic Sansthan', 'सोरायसिस का आयुर्वेदिक उपचार | जीवन ज्योति आयुर्वेदिक संस्थान'),
  closing: { title: b('Start Your Journey to Clearer Skin Today', 'आज ही साफ़ त्वचा की ओर पहला कदम उठाएं') },

  hero: {
    eyebrow: b("India's Trusted Clinic for Psoriasis Care", 'सोरायसिस की देखभाल के लिए भरोसेमंद क्लिनिक'),
    title1: b('Psoriasis Ayurvedic Treatment for ', 'सोरायसिस का आयुर्वेदिक उपचार — '),
    title2: b('Clearer, Healthier Skin', 'साफ़ और स्वस्थ त्वचा के लिए'),
    text: b('Trusted Ayurvedic care for psoriasis — personalised treatment for plaque, scalp, guttate, inverse & nail psoriasis, starting at just ₹1599.', 'सोरायसिस के लिए भरोसेमंद आयुर्वेदिक देखभाल — प्लाक, स्कैल्प, गटेट, इनवर्स और नाखून सोरायसिस के लिए व्यक्तिगत उपचार, सिर्फ़ ₹1599 से शुरू।'),
  },
  form: {
    symptoms: [b('Red/Scaly Patches', 'लाल/पपड़ीदार चकत्ते'), b('Scalp Psoriasis', 'सिर में सोरायसिस'), b('Joint Pain', 'जोड़ों में दर्द'), b('Nail Changes', 'नाखूनों में बदलाव'), b('Other', 'अन्य')],
  },

  types: {
    eyebrow: b('What we treat', 'हम क्या ठीक करने में मदद करते हैं'),
    title: b('Types of Psoriasis We Treat', 'सोरायसिस के प्रकार जिनका हम उपचार करते हैं'),
    sub: b('From mild scalp patches to widespread plaques and psoriatic arthritis, our doctors design a treatment plan for every type and stage.', 'सिर के हल्के चकत्तों से लेकर फैले हुए प्लाक और सोरायटिक आर्थराइटिस तक — हर प्रकार और स्टेज के लिए हमारे डॉक्टर प्लान बनाते हैं।'),
    items: [
      { icon: '🩹', name: b('Plaque Psoriasis', 'प्लाक सोरायसिस'), desc: b('Raised, scaly patches on elbows & knees', 'कोहनी और घुटनों पर उभरे, पपड़ीदार चकत्ते') },
      { icon: '💆', name: b('Scalp Psoriasis', 'स्कैल्प सोरायसिस'), desc: b('Flaking & redness on the scalp', 'सिर में पपड़ी और लालिमा') },
      { icon: '💧', name: b('Guttate Psoriasis', 'गटेट सोरायसिस'), desc: b('Small, drop-shaped spots on the body', 'शरीर पर छोटे, बूंद जैसे धब्बे') },
      { icon: '🔴', name: b('Inverse Psoriasis', 'इनवर्स सोरायसिस'), desc: b('Smooth, red patches in skin folds', 'त्वचा की सिलवटों में चिकने लाल चकत्ते') },
      { icon: '💅', name: b('Nail Psoriasis', 'नाखून सोरायसिस'), desc: b('Pitting & discoloration of nails', 'नाखूनों में गड्ढे और रंग बदलना') },
      { icon: '⚪', name: b('Pustular Psoriasis', 'पस्टुलर सोरायसिस'), desc: b('White, pus-filled blisters on red skin', 'लाल त्वचा पर सफ़ेद, पस भरे छाले') },
      { icon: '🦴', name: b('Psoriatic Arthritis', 'सोरायटिक आर्थराइटिस'), desc: b('Joint pain linked with psoriasis', 'सोरायसिस से जुड़ा जोड़ों का दर्द') },
    ],
  },

  reviewer: null,

  takeaways: [
    { k: b('What it is', 'यह क्या है'), v: b('Psoriasis is a chronic, immune-mediated skin disease in which skin cells multiply far faster than normal, forming raised, silvery-scaled plaques that itch, burn or crack.', 'सोरायसिस एक पुरानी, इम्यून सिस्टम से जुड़ी त्वचा की बीमारी है जिसमें त्वचा की कोशिकाएं सामान्य से बहुत तेज़ बनती हैं, जिससे उभरे, चांदी जैसी पपड़ी वाले चकत्ते बनते हैं जो खुजली, जलन या दरार करते हैं।') },
    { k: b('Not contagious', 'छूत की बीमारी नहीं'), v: b('Psoriasis cannot be caught or spread from person to person by touch, sharing objects or close contact - it is driven by an overactive immune system, not an infection.', 'सोरायसिस छूने, चीज़ें साझा करने या पास रहने से नहीं फैलता — यह इम्यून सिस्टम की अति-सक्रियता से होता है, संक्रमण से नहीं।') },
    { k: b('Who it affects', 'किसे होता है'), v: b('Men and women of all ages, most often first appearing between 15 and 35 years; around one in three cases run in families.', 'हर उम्र के पुरुष और महिलाएं; ज़्यादातर 15 से 35 साल के बीच शुरू होता है, और लगभग हर तीन में से एक मामला परिवार में चलता है।') },
    { k: b('Common triggers', 'आम ट्रिगर'), v: b('Stress, throat infections, cold dry weather, skin injury, smoking, alcohol and certain medicines such as lithium and beta-blockers.', 'तनाव, गले का संक्रमण, ठंडा सूखा मौसम, त्वचा पर चोट, धूम्रपान, शराब और कुछ दवाएं जैसे लिथियम और बीटा-ब्लॉकर।') },
    { k: b('Our approach', 'हमारा तरीका'), v: b('A personalised Ayurvedic plan with medicine, diet and lifestyle guidance, chosen after a detailed case history.', 'विस्तृत केस हिस्ट्री के बाद दवा, डाइट और जीवनशैली सलाह के साथ व्यक्तिगत आयुर्वेदिक प्लान।') },
    { k: b('Treatment timeframe', 'उपचार की अवधि'), v: b('Psoriasis is chronic and tends to flare and settle in cycles, so progress is reviewed on regular follow-ups and completing the full course is advised.', 'सोरायसिस पुरानी बीमारी है जो बार-बार उभरती और शांत होती है, इसलिए नियमित फॉलो-अप पर प्रगति देखी जाती है और पूरा कोर्स करने की सलाह दी जाती है।') },
    { k: b('Safety point', 'सावधानी'), v: b('Up to around a third of people with psoriasis may develop psoriatic arthritis, so new joint pain, stiffness or swelling should always be evaluated by a doctor.', 'सोरायसिस वाले लगभग एक-तिहाई लोगों को सोरायटिक आर्थराइटिस हो सकता है, इसलिए जोड़ों में नया दर्द, अकड़न या सूजन हो तो डॉक्टर को ज़रूर दिखाएं।') },
  ],

  blocks: [
    {
      type: 'text', id: 'what-is', title: b('What Is Psoriasis?', 'सोरायसिस क्या है?'),
      paras: [
        b('Psoriasis is a chronic, immune-mediated skin disease in which the immune system speeds up the skin cell life cycle, causing cells to build up rapidly on the surface instead of shedding normally. This build-up forms raised, red patches covered with silvery-white scales that can itch, burn or crack. It\'s a long-term condition that tends to flare up and settle down in cycles, and while it isn\'t curable in the conventional sense, symptoms can be managed well with the right treatment.', 'सोरायसिस में इम्यून सिस्टम त्वचा की कोशिकाओं का चक्र तेज़ कर देता है, जिससे कोशिकाएं सामान्य रूप से झड़ने के बजाय सतह पर जमा हो जाती हैं। इससे चांदी जैसी सफ़ेद पपड़ी वाले उभरे, लाल चकत्ते बनते हैं जिनमें खुजली, जलन या दरार हो सकती है। यह लंबी बीमारी है जो बार-बार उभरती और शांत होती है; इसे सामान्य अर्थ में "ठीक" नहीं कहा जाता, पर सही उपचार से लक्षण अच्छी तरह संभाले जा सकते हैं।'),
        b('Psoriasis shows up differently depending on where and how it affects the skin. The most common types we see at Jeewan Jyoti are:', 'सोरायसिस इस पर अलग दिखता है कि वह त्वचा पर कहां और कैसे असर करता है। जीवन ज्योति में सबसे आम प्रकार:'),
      ],
    },
    {
      type: 'cards', icon: 'check',
      items: [
        { b: b('Plaque Psoriasis', 'प्लाक सोरायसिस'), t: b('the most common form, raised red patches with silvery-white scales.', 'सबसे आम रूप, चांदी जैसी पपड़ी वाले उभरे लाल चकत्ते।') },
        { b: b('Scalp Psoriasis', 'स्कैल्प सोरायसिस'), t: b('red, scaly patches on and around the scalp, often mistaken for dandruff.', 'सिर पर लाल, पपड़ीदार चकत्ते, जिन्हें अक्सर रूसी समझ लिया जाता है।') },
        { b: b('Guttate Psoriasis', 'गटेट सोरायसिस'), t: b('small, drop-shaped spots, often triggered by a throat infection.', 'छोटे, बूंद जैसे धब्बे, अक्सर गले के संक्रमण के बाद।') },
        { b: b('Inverse Psoriasis', 'इनवर्स सोरायसिस'), t: b('smooth, red patches in skin folds like the armpits or groin.', 'बगल या जांघ के जोड़ जैसी सिलवटों में चिकने लाल चकत्ते।') },
        { b: b('Nail Psoriasis', 'नाखून सोरायसिस'), t: b('pitting, discoloration and thickening of the finger or toenails.', 'हाथ-पैर के नाखूनों में गड्ढे, रंग बदलना और मोटापन।') },
        { b: b('Pustular Psoriasis', 'पस्टुलर सोरायसिस'), t: b('white, pus-filled blisters surrounded by red, inflamed skin.', 'लाल, सूजी त्वचा पर सफ़ेद, पस भरे छाले।') },
      ],
    },
    {
      type: 'table', id: 'quick-facts', title: b('Quick Facts', 'मुख्य तथ्य'),
      rows: [
        [b('Also known as', 'अन्य नाम'), b('Psoriasis vulgaris; plaque psoriasis (most common form)', 'सोरायसिस वल्गैरिस; प्लाक सोरायसिस (सबसे आम रूप)')],
        [b('Commonly affects', 'किसे ज़्यादा होता है'), b('Men and women of all ages, most often first appearing between 15-35 years', 'हर उम्र के पुरुष-महिलाएं, ज़्यादातर 15-35 साल में शुरू')],
        [b('Main symptoms', 'मुख्य लक्षण'), b('Raised red patches with silvery-white scales, itching, burning, dry cracked skin, scalp flaking, nail pitting', 'चांदी जैसी पपड़ी वाले लाल चकत्ते, खुजली, जलन, सूखी फटी त्वचा, सिर में पपड़ी, नाखूनों में गड्ढे')],
        [b('Common causes', 'आम कारण'), b('Overactive immune system plus genetic predisposition, set off by triggers like stress, infection, injury or cold weather', 'अति-सक्रिय इम्यून सिस्टम और जेनेटिक प्रवृत्ति, जो तनाव, संक्रमण, चोट या ठंड से भड़कती है')],
        [b('Diagnosis', 'जांच'), b('Clinical skin, scalp and nail examination; occasionally a skin biopsy; blood tests or joint imaging if psoriatic arthritis is suspected', 'त्वचा, सिर और नाखूनों की जांच; कभी-कभी स्किन बायोप्सी; आर्थराइटिस का शक हो तो ब्लड टेस्ट या जोड़ों की इमेजिंग')],
        [b('Our approach', 'हमारा तरीका'), b('Personalised Ayurvedic medicine with diet, skincare and trigger-management guidance', 'डाइट, स्किनकेयर और ट्रिगर से बचाव की सलाह के साथ व्यक्तिगत आयुर्वेदिक दवा')],
        [b('Typical treatment duration', 'आम उपचार अवधि'), b('Psoriasis is chronic; progress is reviewed regularly and the full course is advised', 'सोरायसिस पुरानी बीमारी है; नियमित समीक्षा होती है और पूरा कोर्स करने की सलाह दी जाती है')],
        [b('When to seek urgent care', 'तुरंत डॉक्टर कब दिखाएं'), b('Widespread redness with fever or chills, extensive pus-filled blisters, or new joint pain and swelling', 'बुखार या कंपकंपी के साथ पूरे शरीर पर लालिमा, बहुत सारे पस भरे छाले, या जोड़ों में नया दर्द और सूजन')],
      ],
    },
    {
      type: 'cards', id: 'symptoms', icon: 'check', title: b('Common Psoriasis Symptoms We Treat', 'सोरायसिस के आम लक्षण'),
      intro: b('Psoriasis symptoms vary depending on the type and how much of the body is affected. Our doctors regularly treat patients with the following presentations -', 'लक्षण प्रकार और शरीर के प्रभावित हिस्से पर निर्भर करते हैं। हमारे डॉक्टर इन लक्षणों वाले मरीज़ों का नियमित उपचार करते हैं -'),
      items: [
        { b: b('Red/scaly patches', 'लाल/पपड़ीदार चकत्ते'), t: b('raised plaques covered with silvery-white scales, commonly on elbows, knees & lower back.', 'चांदी जैसी पपड़ी वाले उभरे चकत्ते, अक्सर कोहनी, घुटने और कमर पर।') },
        { b: b('Itching & burning', 'खुजली और जलन'), t: b('persistent itch that can range from mild to intense, sometimes with a stinging sensation.', 'हल्की से तेज़ लगातार खुजली, कभी-कभी चुभन के साथ।') },
        { b: b('Dry, cracked skin', 'सूखी, फटी त्वचा'), t: b('skin that may crack and occasionally bleed, especially over joints.', 'त्वचा फट सकती है और कभी खून आ सकता है, खासकर जोड़ों पर।') },
        { b: b('Scalp scaling', 'सिर में पपड़ी'), t: b('flaking and redness on the scalp that extends to the hairline.', 'सिर में पपड़ी और लालिमा जो हेयरलाइन तक जाती है।') },
        { b: b('Nail changes', 'नाखूनों में बदलाव'), t: b('pitting, thickening or separation of the nail from the nail bed.', 'नाखूनों में गड्ढे, मोटापन या नाखून का अलग होना।') },
        { b: b('Joint pain', 'जोड़ों में दर्द'), t: b('stiffness & swelling in cases linked with psoriatic arthritis.', 'सोरायटिक आर्थराइटिस में अकड़न और सूजन।') },
        { b: b('Thickened skin', 'मोटी त्वचा'), t: b('patches that feel leathery or raised in long-standing cases.', 'पुराने मामलों में चमड़े जैसे सख्त, उभरे चकत्ते।') },
      ],
    },
    { type: 'cta', title: b('Struggling with red, scaly patches or persistent skin itching?', 'लाल, पपड़ीदार चकत्तों या लगातार खुजली से परेशान हैं?'), button: b('Call Now - Free Consultation', 'अभी कॉल करें - फ्री परामर्श') },
    {
      type: 'cards', id: 'causes', icon: 'warn', title: b('What Causes Psoriasis?', 'सोरायसिस क्यों होता है?'),
      intro: b("The exact cause of psoriasis isn't fully understood, but it's considered an immune-system condition that develops from a mix of genetic and environmental factors. Common causes and triggers include -", 'सोरायसिस का सटीक कारण पूरी तरह ज्ञात नहीं है, पर इसे जेनेटिक और पर्यावरणीय कारणों से होने वाली इम्यून सिस्टम की समस्या माना जाता है। आम कारण और ट्रिगर -'),
      items: [
        { t: b('Overactive immune system response.', 'इम्यून सिस्टम की अति-सक्रियता।') },
        { t: b('Genetics & family history.', 'जेनेटिक्स और पारिवारिक इतिहास।') },
        { t: b('Stress and emotional strain.', 'तनाव और भावनात्मक दबाव।') },
        { t: b('Skin injury such as cuts, burns or sunburn.', 'त्वचा पर चोट जैसे कटना, जलना या धूप से झुलसना।') },
        { t: b('Certain infections, especially strep throat.', 'कुछ संक्रमण, खासकर गले का स्ट्रेप संक्रमण।') },
        { t: b('Cold, dry weather.', 'ठंडा, सूखा मौसम।') },
        { t: b('Smoking & heavy alcohol use.', 'धूम्रपान और ज़्यादा शराब।') },
        { t: b('Certain medications, including lithium and antimalarials.', 'कुछ दवाएं, जैसे लिथियम और मलेरिया की दवाएं।') },
      ],
    },
    {
      type: 'list', id: 'risk', title: b('Who Is Most at Risk?', 'किसे ज़्यादा खतरा है?'),
      intro: b('While psoriasis can affect anyone, certain factors make some people more susceptible than others -', 'सोरायसिस किसी को भी हो सकता है, पर कुछ कारणों से खतरा ज़्यादा होता है -'),
      items: [
        { b: b('Family history', 'पारिवारिक इतिहास'), t: b('having a parent or close relative with psoriasis significantly raises your risk.', 'माता-पिता या करीबी रिश्तेदार को सोरायसिस हो तो खतरा काफ़ी बढ़ जाता है।') },
        { b: b('Age', 'उम्र'), t: b('psoriasis can appear at any age but most commonly develops between 15-35 years.', 'किसी भी उम्र में हो सकता है, पर ज़्यादातर 15-35 साल में शुरू होता है।') },
        { b: b('Lifestyle', 'जीवनशैली'), t: b('smoking, heavy alcohol use and obesity are linked with higher risk and more severe flare-ups.', 'धूम्रपान, ज़्यादा शराब और मोटापे से खतरा और गंभीरता बढ़ती है।') },
        { b: b('Other conditions', 'अन्य स्थितियां'), t: b('a weakened immune system or a history of frequent infections can increase susceptibility.', 'कमज़ोर इम्यूनिटी या बार-बार संक्रमण से खतरा बढ़ सकता है।') },
      ],
    },
    {
      type: 'list', id: 'tests', title: b('Common Diagnostic Tests', 'आम जांचें'),
      intro: b('To confirm psoriasis and rule out other skin conditions, doctors typically recommend -', 'सोरायसिस की पुष्टि और दूसरी त्वचा समस्याओं को अलग करने के लिए डॉक्टर आमतौर पर बताते हैं -'),
      items: [
        { b: b('Physical examination', 'शारीरिक जांच'), t: b('most cases are diagnosed by a doctor examining the skin, scalp and nails.', 'ज़्यादातर मामले त्वचा, सिर और नाखून देखकर पहचाने जाते हैं।') },
        { b: b('Skin biopsy', 'स्किन बायोप्सी'), t: b('a small skin sample may be examined to rule out other conditions in unclear cases.', 'अस्पष्ट मामलों में त्वचा का छोटा नमूना जांचा जा सकता है।') },
        { b: b('Blood tests', 'ब्लड टेस्ट'), t: b('to check inflammatory markers and screen for related conditions like psoriatic arthritis.', 'सूजन के संकेत और सोरायटिक आर्थराइटिस जैसी स्थितियां जांचने के लिए।') },
        { b: b('Joint examination / imaging', 'जोड़ों की जांच / इमेजिंग'), t: b('recommended if joint pain suggests psoriatic arthritis.', 'अगर जोड़ों का दर्द आर्थराइटिस की ओर इशारा करे।') },
      ],
      note: b('Note: These tests are usually recommended in more advanced or unclear cases and are not required for every patient.', 'ध्यान दें: ये जांचें आमतौर पर गंभीर या अस्पष्ट मामलों में ही ज़रूरी होती हैं, हर मरीज़ के लिए नहीं।'),
    },
    {
      type: 'cards', id: 'prevention', icon: 'check', title: b('Prevention & Trigger-Avoidance Tips', 'बचाव और ट्रिगर से बचने के टिप्स'),
      items: [
        { t: b('Keep skin well-moisturised, especially in cold weather.', 'त्वचा को मॉइस्चराइज़ रखें, खासकर ठंड में।') },
        { t: b('Manage stress through relaxation techniques & regular exercise.', 'आराम की तकनीकों और नियमित व्यायाम से तनाव कम करें।') },
        { t: b('Avoid known personal triggers like certain foods or alcohol.', 'अपने ज्ञात ट्रिगर जैसे कुछ खाने की चीज़ें या शराब से बचें।') },
        { t: b('Protect skin from cuts, burns and excessive sun exposure.', 'त्वचा को कटने, जलने और ज़्यादा धूप से बचाएं।') },
        { t: b('Treat infections like strep throat promptly.', 'गले के संक्रमण जैसे संक्रमणों का जल्दी इलाज कराएं।') },
        { t: b('Get early treatment for flare-ups instead of ignoring them.', 'उभार को नज़रअंदाज़ न करें, जल्दी उपचार लें।') },
      ],
    },
    {
      type: 'text', id: 'approach', title: b('How Our Ayurvedic Care Helps with Psoriasis', 'हमारी आयुर्वेदिक देखभाल सोरायसिस में कैसे मदद करती है'),
      paras: [
        b('Our doctors don\'t treat psoriasis as an isolated "skin problem". They take a detailed case history: which areas are affected, what makes the itching or scaling better or worse (heat, cold, stress, scratching), the nature of the eruption (dry, oozing, cracked), your digestion, diet, sleep and stress levels. Based on this, a personalised plan of medicine, diet and skincare is prescribed for your specific case.', 'हमारे डॉक्टर सोरायसिस को सिर्फ़ "त्वचा की समस्या" नहीं मानते। वे विस्तृत केस हिस्ट्री लेते हैं: कौन से हिस्से प्रभावित हैं, खुजली या पपड़ी किससे बढ़ती-घटती है (गर्मी, ठंड, तनाव, खुजलाना), चकत्ते कैसे हैं (सूखे, रिसते, फटे), और आपका पाचन, खान-पान, नींद और तनाव। इसके आधार पर आपके लिए दवा, डाइट और स्किनकेयर का व्यक्तिगत प्लान बनता है।'),
        b('Psoriasis is a long-term condition, so we set honest expectations and review your progress regularly. If you develop joint symptoms or a severe flare, our doctors will tell you plainly when you need additional medical care.', 'सोरायसिस लंबी बीमारी है, इसलिए हम सच्ची उम्मीदें रखते हैं और नियमित रूप से प्रगति देखते हैं। जोड़ों में लक्षण या गंभीर उभार होने पर हमारे डॉक्टर साफ़ बताएंगे कि कब अतिरिक्त चिकित्सा देखभाल ज़रूरी है।'),
      ],
      note: b('Important: Please do not self-medicate. Jeewan Jyoti doctors prescribe the right medicine and dosage only after a detailed personal case-history consultation, so book your free consultation before starting any treatment.', 'ज़रूरी: खुद से दवा न लें। जीवन ज्योति के डॉक्टर विस्तृत केस-हिस्ट्री के बाद ही सही दवा और खुराक बताते हैं — कोई भी उपचार शुरू करने से पहले फ्री परामर्श बुक करें।'),
    },
    { type: 'cta', title: b('Get a personalised psoriasis treatment plan from Jeewan Jyoti\'s experienced doctors.', 'जीवन ज्योति के अनुभवी डॉक्टरों से अपना व्यक्तिगत सोरायसिस प्लान पाएं।'), button: b('Book Your Free Consultation', 'फ्री परामर्श बुक करें'), action: 'form' },
    {
      type: 'list', id: 'complications', title: b('Possible Complications of Untreated Psoriasis', 'बिना उपचार के सोरायसिस की जटिलताएं'),
      intro: b('Untreated or poorly controlled psoriasis can lead to complications beyond the skin, because it is a whole-body inflammatory condition rather than a purely cosmetic one. Being aware of these risks is a reason to seek care early rather than wait -', 'बिना उपचार का सोरायसिस त्वचा से आगे भी जटिलताएं कर सकता है, क्योंकि यह पूरे शरीर की सूजन वाली बीमारी है, सिर्फ़ दिखावट की नहीं। इसलिए जल्दी देखभाल लेना बेहतर है -'),
      items: [
        { b: b('Psoriatic arthritis', 'सोरायटिक आर्थराइटिस'), t: b('up to around a third of people with psoriasis develop joint pain, stiffness and swelling that can cause lasting joint damage if ignored.', 'लगभग एक-तिहाई लोगों में जोड़ों का दर्द, अकड़न और सूजन होती है, जो अनदेखी करने पर जोड़ों को स्थायी नुकसान पहुंचा सकती है।') },
        { b: b('Skin infection & cracking', 'संक्रमण और दरारें'), t: b('deeply fissured or scratched plaques can crack, bleed and become infected.', 'गहरी दरार वाले या खुजलाए चकत्ते फट सकते हैं, खून आ सकता है और संक्रमण हो सकता है।') },
        { b: b('Metabolic & heart risks', 'मेटाबॉलिक और हृदय जोखिम'), t: b('psoriasis is linked with a higher risk of obesity, type 2 diabetes, high cholesterol and cardiovascular problems.', 'सोरायसिस मोटापा, टाइप 2 डायबिटीज़, हाई कोलेस्ट्रॉल और हृदय रोगों के ज़्यादा खतरे से जुड़ा है।') },
        { b: b('Emotional & social impact', 'मानसिक और सामाजिक असर'), t: b('visible patches and constant itching can affect confidence, sleep and mood, and stress can in turn trigger more flare-ups.', 'दिखने वाले चकत्ते और लगातार खुजली आत्मविश्वास, नींद और मूड पर असर डालते हैं, और तनाव से फिर उभार बढ़ते हैं।') },
        { b: b('Widespread or pustular flares', 'फैला हुआ या पस्टुलर उभार'), t: b('rarely, psoriasis can become widespread or turn into erythrodermic or generalised pustular psoriasis, which need urgent medical care.', 'कभी-कभी सोरायसिस पूरे शरीर पर फैल सकता है या गंभीर पस्टुलर रूप ले सकता है, जिसमें तुरंत चिकित्सा देखभाल चाहिए।') },
      ],
      note: b('If you develop widespread redness with fever or chills, extensive pus-filled blisters, or new joint pain and swelling, seek medical evaluation promptly - these can signal severe forms of psoriasis or psoriatic arthritis.', 'बुखार या कंपकंपी के साथ पूरे शरीर पर लालिमा, बहुत सारे पस भरे छाले, या जोड़ों में नया दर्द-सूजन हो तो तुरंत डॉक्टर को दिखाएं — ये गंभीर सोरायसिस या आर्थराइटिस के संकेत हो सकते हैं।'),
    },
    {
      type: 'twocol', id: 'diet', title: b('Psoriasis Diet: What to Eat and What to Avoid', 'सोरायसिस डाइट: क्या खाएं, क्या न खाएं'),
      intro: b('Diet does not cause psoriasis, but an anti-inflammatory pattern of eating can support treatment and may reduce how often flare-ups occur. Our doctors include a free personalised diet chart with every psoriasis treatment plan; the general principles are -', 'खान-पान से सोरायसिस नहीं होता, पर सूजन कम करने वाला भोजन उपचार में मदद कर सकता है और उभार कम कर सकता है। हर सोरायसिस प्लान के साथ फ्री व्यक्तिगत डाइट चार्ट मिलता है; आम सिद्धांत -'),
      cols: [
        { title: b('Foods to Favour', 'ये ज़्यादा खाएं'), tone: 'good', items: [b('Oily fish and omega-3 sources like flaxseed and walnuts', 'तैलीय मछली और अलसी, अखरोट जैसे ओमेगा-3 स्रोत'), b('Fresh fruit, leafy greens and colourful vegetables', 'ताज़े फल, हरी पत्तेदार और रंगीन सब्ज़ियां'), b('Whole grains and fibre-rich foods', 'साबुत अनाज और फाइबर वाले खाद्य'), b('Turmeric, ginger and other anti-inflammatory spices', 'हल्दी, अदरक और सूजन कम करने वाले मसाले'), b('Plenty of water to keep skin hydrated', 'त्वचा को नम रखने के लिए भरपूर पानी')] },
        { title: b('Foods to Limit', 'ये कम करें'), tone: 'bad', items: [b('Alcohol, a well-recognised psoriasis trigger', 'शराब, जो सोरायसिस का जाना-माना ट्रिगर है'), b('Excess sugar and refined carbohydrates', 'ज़्यादा चीनी और मैदा'), b('Fried, processed and heavily packaged foods', 'तली, प्रोसेस्ड और पैकेट वाली चीज़ें'), b('Red and processed meat in large amounts', 'ज़्यादा मात्रा में रेड और प्रोसेस्ड मीट'), b('Any personal trigger foods you notice worsen your skin', 'कोई भी चीज़ जिससे आपकी त्वचा बिगड़ती दिखे')] },
      ],
    },
  ],

  faqs: [
    { q: b('Can psoriasis be cured permanently?', 'क्या सोरायसिस हमेशा के लिए ठीक हो सकता है?'), a: b('Psoriasis is a chronic condition. Many patients see long-term improvement in skin clarity, scaling and itching when they follow the complete course, diet and trigger-avoidance plan, though periodic flare-ups can still occur with triggers like stress or infection.', 'सोरायसिस पुरानी बीमारी है। पूरा कोर्स, डाइट और ट्रिगर से बचाव का प्लान मानने पर कई मरीज़ों में त्वचा, पपड़ी और खुजली में लंबे समय तक सुधार रहता है, हालांकि तनाव या संक्रमण से कभी-कभी उभार आ सकता है।') },
    { q: b('Is psoriasis contagious?', 'क्या सोरायसिस छूत से फैलता है?'), a: b('No. Psoriasis cannot spread from person to person by touch or contact — it is an immune condition, not an infection.', 'नहीं। सोरायसिस छूने या संपर्क से नहीं फैलता — यह इम्यून सिस्टम की समस्या है, संक्रमण नहीं।') },
    { q: b('What is the difference between psoriasis and eczema?', 'सोरायसिस और एक्ज़िमा में क्या फ़र्क है?'), a: b('Psoriasis usually forms thick, well-defined plaques with silvery scales on elbows, knees, scalp and back. Eczema is more often intensely itchy, dry or oozing skin in the skin folds and on the face, and is commonly linked with allergies.', 'सोरायसिस में आमतौर पर कोहनी, घुटने, सिर और पीठ पर चांदी जैसी पपड़ी वाले मोटे, साफ़ किनारों वाले चकत्ते होते हैं। एक्ज़िमा में ज़्यादा तेज़ खुजली, सूखी या रिसती त्वचा होती है, अक्सर सिलवटों और चेहरे पर, और यह एलर्जी से जुड़ा होता है।') },
    { q: b('Is scalp psoriasis treated differently from plaque psoriasis on the body?', 'क्या सिर का सोरायसिस शरीर के सोरायसिस से अलग तरह से ठीक होता है?'), a: b('The underlying condition is the same, but scalp care, hair-wash routine and how products are applied differ. Your doctor will guide you for each affected area.', 'बीमारी एक ही है, पर सिर की देखभाल, बाल धोने का तरीका और प्रोडक्ट लगाने का तरीका अलग होता है। डॉक्टर हर प्रभावित हिस्से के लिए अलग सलाह देंगे।') },
    { q: b('Can diet affect psoriasis?', 'क्या खान-पान से सोरायसिस पर असर पड़ता है?'), a: b('Diet does not cause psoriasis, but alcohol, excess sugar and processed food can worsen flares in many people, while an anti-inflammatory diet can support treatment.', 'खान-पान से सोरायसिस नहीं होता, पर शराब, ज़्यादा चीनी और प्रोसेस्ड खाना कई लोगों में उभार बढ़ा सकता है, जबकि सूजन कम करने वाली डाइट उपचार में मदद करती है।') },
    { q: b('Is psoriasis linked to arthritis?', 'क्या सोरायसिस का आर्थराइटिस से संबंध है?'), a: b('Yes. Up to about a third of people with psoriasis develop psoriatic arthritis, so joint pain, stiffness or swelling should be checked by a doctor early.', 'हां। लगभग एक-तिहाई लोगों को सोरायटिक आर्थराइटिस हो सकता है, इसलिए जोड़ों का दर्द, अकड़न या सूजन जल्दी दिखाएं।') },
    { q: b('Is psoriasis genetic or hereditary?', 'क्या सोरायसिस वंशानुगत है?'), a: b('Genetics play a strong role — around one in three people with psoriasis have a family member with it — but triggers decide when and how it shows up.', 'जेनेटिक्स की बड़ी भूमिका है — लगभग हर तीन में से एक मरीज़ के परिवार में किसी को सोरायसिस होता है — पर कब और कैसे दिखेगा, यह ट्रिगर तय करते हैं।') },
    { q: b('What triggers a psoriasis flare-up?', 'सोरायसिस का उभार किससे होता है?'), a: b('Common triggers include stress, throat infections, cold dry weather, skin injury, smoking, alcohol and certain medicines.', 'आम ट्रिगर: तनाव, गले का संक्रमण, ठंडा सूखा मौसम, त्वचा पर चोट, धूम्रपान, शराब और कुछ दवाएं।') },
    { q: b('Does psoriasis spread from one part of the body to another?', 'क्या सोरायसिस शरीर में एक जगह से दूसरी जगह फैलता है?'), a: b('It does not "spread" like an infection, but new patches can appear in other areas during flares, especially at sites of skin injury.', 'यह संक्रमण की तरह नहीं फैलता, पर उभार के समय दूसरी जगहों पर नए चकत्ते आ सकते हैं, खासकर जहां त्वचा पर चोट लगी हो।') },
    { q: b('How does psoriasis affect mental and emotional health?', 'सोरायसिस का मन पर क्या असर होता है?'), a: b('Visible patches and itching can affect sleep, mood and confidence, and stress can in turn worsen flares. Talking openly with your doctor about this is part of care.', 'दिखने वाले चकत्ते और खुजली नींद, मूड और आत्मविश्वास पर असर डालते हैं, और तनाव से उभार बढ़ते हैं। इस बारे में डॉक्टर से खुलकर बात करना देखभाल का हिस्सा है।') },
  ],

  related: ['eczema', 'skin-allergy', 'dandruff', 'arthritis-rheumatoid'],
}
