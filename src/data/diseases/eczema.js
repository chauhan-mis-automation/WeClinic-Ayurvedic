// ===== Eczema — weclinic.in se, Ayurveda ke hisaab se badla gaya =====
// Homeopathic remedies, "Homeopathy vs Allopathy" aur doctor list hata di gayi hai.
const b = (en, hi) => ({ en, hi })

export default {
  slug: 'eczema',
  name: b('Eczema', 'एक्ज़िमा'),
  seoTitle: b('Eczema Ayurvedic Treatment | WeClinic Ayurveda', 'एक्ज़िमा का आयुर्वेदिक उपचार | वीक्लिनिक आयुर्वेद'),
  closing: { title: b('Start Your Journey to Clearer, Calmer Skin Today', 'आज ही साफ़ और शांत त्वचा की ओर पहला कदम उठाएं') },

  hero: {
    eyebrow: b("India's Trusted Clinic for Eczema & Skin Care", 'एक्ज़िमा और त्वचा देखभाल के लिए भरोसेमंद क्लिनिक'),
    title1: b('Eczema Ayurvedic Treatment for ', 'एक्ज़िमा का आयुर्वेदिक उपचार — '),
    title2: b('Lasting Skin Comfort', 'त्वचा को लंबी राहत के लिए'),
    text: b('Trusted Ayurvedic care for eczema — personalised treatment for atopic dermatitis, contact dermatitis, dyshidrotic eczema & more, starting at just ₹1599.', 'एक्ज़िमा के लिए भरोसेमंद आयुर्वेदिक देखभाल — एटोपिक डर्मेटाइटिस, कॉन्टैक्ट डर्मेटाइटिस, डिसहाइड्रोटिक एक्ज़िमा और अन्य के लिए व्यक्तिगत उपचार, सिर्फ़ ₹1599 से शुरू।'),
  },
  form: {
    symptoms: [b('Itchy Skin', 'खुजली वाली त्वचा'), b('Red/Inflamed Patches', 'लाल/सूजे चकत्ते'), b('Dry/Scaly Skin', 'सूखी/पपड़ीदार त्वचा'), b('Oozing/Blisters', 'रिसाव/छाले'), b('Other', 'अन्य')],
  },

  types: {
    eyebrow: b('What we treat', 'हम क्या ठीक करने में मदद करते हैं'),
    title: b('Types of Eczema & Skin Conditions We Treat', 'एक्ज़िमा के प्रकार जिनका हम उपचार करते हैं'),
    sub: b('From everyday dry, itchy patches to chronic, allergy-linked flare-ups, our doctors design a treatment plan for every stage.', 'रोज़ के सूखे, खुजली वाले चकत्तों से लेकर पुराने, एलर्जी से जुड़े उभार तक — हर स्टेज के लिए हमारे डॉक्टर प्लान बनाते हैं।'),
    items: [
      { icon: '🧴', name: b('Atopic Dermatitis', 'एटोपिक डर्मेटाइटिस'), desc: b('The most common, chronic form of eczema', 'एक्ज़िमा का सबसे आम, पुराना रूप') },
      { icon: '🧼', name: b('Contact Dermatitis', 'कॉन्टैक्ट डर्मेटाइटिस'), desc: b('Reaction to an irritant or allergen', 'किसी जलन वाली चीज़ या एलर्जन से प्रतिक्रिया') },
      { icon: '✋', name: b('Dyshidrotic Eczema', 'डिसहाइड्रोटिक एक्ज़िमा'), desc: b('Itchy blisters on hands & feet', 'हाथ-पैर पर खुजली वाले छाले') },
      { icon: '🪙', name: b('Nummular Eczema', 'न्यूमुलर एक्ज़िमा'), desc: b('Coin-shaped, itchy skin patches', 'सिक्के जैसे गोल, खुजली वाले चकत्ते') },
      { icon: '💆', name: b('Seborrheic Dermatitis', 'सेबोरिक डर्मेटाइटिस'), desc: b('Scaly patches on scalp, face & chest', 'सिर, चेहरे और छाती पर पपड़ीदार चकत्ते') },
      { icon: '👶', name: b('Childhood Eczema', 'बच्चों का एक्ज़िमा'), desc: b('Gentle, age-appropriate care for kids', 'बच्चों के लिए उम्र के अनुसार सौम्य देखभाल') },
    ],
  },

  reviewer: null,

  takeaways: [
    { k: b('What it is', 'यह क्या है'), v: b('Eczema (atopic dermatitis) is a chronic inflammatory skin condition that makes the skin dry, intensely itchy, red and prone to flare-ups.', 'एक्ज़िमा (एटोपिक डर्मेटाइटिस) एक पुरानी सूजन वाली त्वचा की समस्या है जिसमें त्वचा सूखी, बहुत खुजली वाली, लाल और बार-बार उभरने वाली हो जाती है।') },
    { k: b('Who it affects', 'किसे होता है'), v: b('Eczema most often begins in babies and young children, though it can appear or persist in adults, and frequently occurs alongside asthma and allergic rhinitis (the "atopic triad").', 'ज़्यादातर शिशुओं और छोटे बच्चों में शुरू होता है, पर वयस्कों में भी हो या रह सकता है, और अक्सर अस्थमा व एलर्जिक राइनाइटिस के साथ होता है ("एटोपिक ट्रायड")।') },
    { k: b('Main causes', 'मुख्य कारण'), v: b('Genetics, an overactive immune response and a weakened skin barrier, with flare-ups triggered by soaps, detergents, dust mites, sweat, wool, dry weather and stress.', 'जेनेटिक्स, अति-सक्रिय इम्यून प्रतिक्रिया और कमज़ोर त्वचा अवरोध; साबुन, डिटर्जेंट, धूल के कण, पसीना, ऊन, सूखा मौसम और तनाव से उभार।') },
    { k: b('Not contagious', 'छूत की बीमारी नहीं'), v: b('Eczema cannot be caught from or passed to another person by touch, as it is an immune and barrier problem rather than an infection.', 'एक्ज़िमा छूने से नहीं फैलता — यह इम्यून और त्वचा अवरोध की समस्या है, संक्रमण नहीं।') },
    { k: b('Our approach', 'हमारा तरीका'), v: b('A personalised Ayurvedic plan that looks at the whole allergic tendency, with medicine, diet and skincare guidance to reduce itching, dryness and recurrence.', 'पूरी एलर्जिक प्रवृत्ति को देखते हुए व्यक्तिगत आयुर्वेदिक प्लान — दवा, डाइट और स्किनकेयर सलाह के साथ, ताकि खुजली, सूखापन और बार-बार होना कम हो।') },
    { k: b('Treatment timeframe', 'उपचार की अवधि'), v: b('Early flare-ups are reviewed within a few weeks; chronic or long-standing eczema usually needs a longer, doctor-guided course.', 'शुरुआती उभार की समीक्षा कुछ हफ्तों में होती है; पुराने एक्ज़िमा में आमतौर पर लंबा, डॉक्टर की देखरेख वाला कोर्स चाहिए।') },
    { k: b('Safety', 'सावधानी'), v: b('Eczema that becomes very painful, weeping yellow crusts, blistered or feverish may be infected and needs prompt medical review.', 'अगर एक्ज़िमा बहुत दर्द करे, पीली पपड़ी से रिसे, छाले हों या बुखार हो, तो संक्रमण हो सकता है — तुरंत डॉक्टर को दिखाएं।') },
  ],

  blocks: [
    {
      type: 'text', id: 'what-is', title: b('What Is Eczema?', 'एक्ज़िमा क्या है?'),
      paras: [
        b('Eczema is a chronic, inflammatory skin condition that causes the skin to become dry, intensely itchy, red, inflamed and sometimes cracked, oozing or crusted. Also known as dermatitis, it is not a single disease but a group of related conditions; atopic dermatitis is the most common form and is a long-term condition that tends to flare up periodically before settling down again, often alongside a personal or family history of allergies, asthma or hay fever.', 'एक्ज़िमा एक पुरानी सूजन वाली त्वचा समस्या है जिसमें त्वचा सूखी, बहुत खुजली वाली, लाल, सूजी और कभी-कभी फटी, रिसती या पपड़ीदार हो जाती है। इसे डर्मेटाइटिस भी कहते हैं; यह एक बीमारी नहीं बल्कि मिलती-जुलती समस्याओं का समूह है। एटोपिक डर्मेटाइटिस सबसे आम रूप है, जो समय-समय पर उभरता और शांत होता है, अक्सर एलर्जी, अस्थमा या हे फीवर के इतिहास के साथ।'),
        b("Understanding which type of eczema you're dealing with is the first step towards effective, individualised treatment. The most common types we see at WeClinic™ are:", 'आपका एक्ज़िमा किस प्रकार का है, यह समझना सही उपचार का पहला कदम है। वीक्लिनिक™ में सबसे आम प्रकार:'),
      ],
    },
    {
      type: 'cards', icon: 'check',
      items: [
        { b: b('Atopic Dermatitis', 'एटोपिक डर्मेटाइटिस'), t: b('the classic, chronic form often linked with allergies.', 'पुराना, क्लासिक रूप जो अक्सर एलर्जी से जुड़ा होता है।') },
        { b: b('Contact Dermatitis', 'कॉन्टैक्ट डर्मेटाइटिस'), t: b('a reaction to a direct skin irritant or allergen.', 'त्वचा पर सीधे किसी चीज़ या एलर्जन से प्रतिक्रिया।') },
        { b: b('Dyshidrotic Eczema', 'डिसहाइड्रोटिक एक्ज़िमा'), t: b('small, intensely itchy blisters on hands & feet.', 'हाथ-पैर पर छोटे, बहुत खुजली वाले छाले।') },
        { b: b('Nummular Eczema', 'न्यूमुलर एक्ज़िमा'), t: b('coin-shaped, itchy patches on the arms & legs.', 'हाथ-पैरों पर सिक्के जैसे खुजली वाले चकत्ते।') },
        { b: b('Seborrheic Dermatitis', 'सेबोरिक डर्मेटाइटिस'), t: b('scaly, flaky patches on oily areas of skin.', 'तैलीय हिस्सों पर पपड़ीदार चकत्ते।') },
        { b: b('Childhood Eczema', 'बच्चों का एक्ज़िमा'), t: b('atopic dermatitis appearing in infancy or early years.', 'शिशु या शुरुआती उम्र में होने वाला एटोपिक डर्मेटाइटिस।') },
      ],
    },
    {
      type: 'table', id: 'quick-facts', title: b('Quick Facts', 'मुख्य तथ्य'),
      rows: [
        [b('Also known as', 'अन्य नाम'), b('Atopic dermatitis, dermatitis, atopic eczema', 'एटोपिक डर्मेटाइटिस, डर्मेटाइटिस, एटोपिक एक्ज़िमा')],
        [b('Commonly affects', 'किसे ज़्यादा होता है'), b('Babies and young children most often, but also adults; frequently linked with asthma and allergic rhinitis', 'ज़्यादातर शिशु और छोटे बच्चे, पर वयस्क भी; अक्सर अस्थमा और एलर्जिक राइनाइटिस के साथ')],
        [b('Main symptoms', 'मुख्य लक्षण'), b('Intense itching, dryness, redness, scaly patches, oozing or crusting, and thickened, leathery skin from scratching', 'तेज़ खुजली, सूखापन, लालिमा, पपड़ीदार चकत्ते, रिसाव या पपड़ी, और खुजलाने से मोटी त्वचा')],
        [b('Common causes', 'आम कारण'), b('Genetics, immune overactivity and a weakened skin barrier, with flare-ups from irritants, allergens, sweat, wool, dry weather and stress', 'जेनेटिक्स, इम्यून अति-सक्रियता और कमज़ोर त्वचा अवरोध; जलन वाली चीज़ें, एलर्जन, पसीना, ऊन, सूखा मौसम और तनाव से उभार')],
        [b('Diagnosis', 'जांच'), b('Clinical skin examination and allergy history; patch testing or IgE blood tests in selected cases', 'त्वचा की जांच और एलर्जी इतिहास; कुछ मामलों में पैच टेस्ट या IgE ब्लड टेस्ट')],
        [b('Our approach', 'हमारा तरीका'), b('Personalised Ayurvedic medicine with diet, skincare and trigger-avoidance guidance', 'डाइट, स्किनकेयर और ट्रिगर से बचाव की सलाह के साथ व्यक्तिगत आयुर्वेदिक दवा')],
        [b('Typical treatment duration', 'आम उपचार अवधि'), b('A few weeks for early flare-ups; several months for chronic, long-standing eczema', 'शुरुआती उभार में कुछ हफ्ते; पुराने एक्ज़िमा में कई महीने')],
        [b('When to seek urgent care', 'तुरंत डॉक्टर कब दिखाएं'), b('Signs of skin infection - spreading redness, warmth, yellow crusts, pus, blisters or fever', 'संक्रमण के संकेत — फैलती लालिमा, गर्माहट, पीली पपड़ी, पस, छाले या बुखार')],
      ],
    },
    {
      type: 'cards', id: 'symptoms', icon: 'check', title: b('Common Eczema Symptoms We Treat', 'एक्ज़िमा के आम लक्षण'),
      intro: b('Eczema symptoms vary from person to person and by type. Our doctors regularly treat patients with the following presentations -', 'लक्षण हर व्यक्ति और प्रकार में अलग होते हैं। हमारे डॉक्टर इन लक्षणों वाले मरीज़ों का नियमित उपचार करते हैं -'),
      items: [
        { b: b('Intense itching', 'तेज़ खुजली'), t: b('often the most troubling symptom, worse at night.', 'अक्सर सबसे परेशान करने वाला लक्षण, रात में ज़्यादा।') },
        { b: b('Dry, scaly skin', 'सूखी, पपड़ीदार त्वचा'), t: b('rough patches that can crack and flake.', 'खुरदुरे चकत्ते जो फट और झड़ सकते हैं।') },
        { b: b('Red or inflamed patches', 'लाल या सूजे चकत्ते'), t: b('on the face, hands, elbows or behind the knees.', 'चेहरे, हाथों, कोहनी या घुटनों के पीछे।') },
        { b: b('Oozing or crusting', 'रिसाव या पपड़ी'), t: b('in more severe or infected flare-ups.', 'गंभीर या संक्रमित उभार में।') },
        { b: b('Thickened, leathery skin', 'मोटी, सख्त त्वचा'), t: b('from repeated scratching over time.', 'बार-बार खुजलाने से।') },
        { b: b('Small, fluid-filled blisters', 'छोटे पानी भरे छाले'), t: b('especially on the palms and soles.', 'खासकर हथेलियों और तलवों पर।') },
      ],
    },
    { type: 'cta', title: b('Struggling with itchy, dry or inflamed skin?', 'खुजली, सूखी या सूजी त्वचा से परेशान हैं?'), button: b('Call Now - Free Consultation', 'अभी कॉल करें - फ्री परामर्श') },
    {
      type: 'cards', id: 'causes', icon: 'warn', title: b('What Causes Eczema?', 'एक्ज़िमा क्यों होता है?'),
      intro: b('Eczema is most commonly caused by a combination of an inherited tendency, an overactive immune response and a weakened skin barrier that lets moisture escape and irritants and allergens enter. On top of this underlying cause, specific triggers set off individual flare-ups. Common causes and triggers include -', 'एक्ज़िमा आमतौर पर वंशानुगत प्रवृत्ति, अति-सक्रिय इम्यून प्रतिक्रिया और कमज़ोर त्वचा अवरोध से होता है, जिससे नमी निकल जाती है और जलन वाली चीज़ें अंदर जाती हैं। इसके ऊपर कुछ ट्रिगर उभार करते हैं -'),
      items: [
        { t: b('Genetics & family history of eczema, asthma or allergies.', 'एक्ज़िमा, अस्थमा या एलर्जी का पारिवारिक इतिहास।') },
        { t: b('Immune system dysfunction causing excess inflammation.', 'इम्यून सिस्टम की गड़बड़ी से ज़्यादा सूजन।') },
        { t: b('A weakened skin barrier that lets moisture escape and irritants in.', 'कमज़ोर त्वचा अवरोध, जिससे नमी निकलती और जलन वाली चीज़ें अंदर जाती हैं।') },
        { t: b('Environmental allergens - dust mites, pollen, pet dander.', 'धूल के कण, पराग, पालतू जानवरों के बाल।') },
        { t: b('Irritants - harsh soaps, detergents, synthetic fabrics, fragrances.', 'कड़े साबुन, डिटर्जेंट, सिंथेटिक कपड़े, खुशबू।') },
        { t: b('Weather changes - cold, dry air or excessive heat & sweating.', 'मौसम — ठंडी सूखी हवा या ज़्यादा गर्मी और पसीना।') },
        { t: b('Stress & emotional triggers.', 'तनाव और भावनात्मक ट्रिगर।') },
        { t: b('Certain foods, particularly in sensitive children.', 'कुछ खाने की चीज़ें, खासकर संवेदनशील बच्चों में।') },
      ],
    },
    {
      type: 'list', id: 'risk', title: b('Who Is Most at Risk?', 'किसे ज़्यादा खतरा है?'),
      intro: b('While eczema can affect anyone, certain factors make some people more susceptible than others -', 'एक्ज़िमा किसी को भी हो सकता है, पर कुछ कारणों से खतरा ज़्यादा होता है -'),
      items: [
        { b: b('Family history', 'पारिवारिक इतिहास'), t: b('children with one or both parents who have eczema, asthma or hay fever are at higher risk.', 'जिन बच्चों के माता-पिता को एक्ज़िमा, अस्थमा या हे फीवर हो, उनमें खतरा ज़्यादा।') },
        { b: b('Age', 'उम्र'), t: b('atopic dermatitis most often begins in infancy or early childhood.', 'एटोपिक डर्मेटाइटिस ज़्यादातर शिशु या बचपन में शुरू होता है।') },
        { b: b('Existing allergic conditions', 'पहले से एलर्जी'), t: b('people with asthma or allergic rhinitis are more prone to eczema.', 'अस्थमा या एलर्जिक राइनाइटिस वालों में ज़्यादा संभावना।') },
        { b: b('Environment', 'वातावरण'), t: b('urban living, pollution and low-humidity climates can increase risk.', 'शहरी जीवन, प्रदूषण और सूखी जलवायु से खतरा बढ़ता है।') },
      ],
    },
    {
      type: 'list', id: 'tests', title: b('Common Diagnostic Tests', 'आम जांचें'),
      intro: b('To confirm the type and possible triggers of eczema, doctors typically recommend -', 'एक्ज़िमा का प्रकार और ट्रिगर जानने के लिए डॉक्टर आमतौर पर बताते हैं -'),
      items: [
        { b: b('Physical examination & medical history', 'जांच और मेडिकल हिस्ट्री'), t: b('most eczema is diagnosed by examining the skin and reviewing family/allergy history.', 'ज़्यादातर एक्ज़िमा त्वचा देखकर और पारिवारिक/एलर्जी इतिहास से पहचाना जाता है।') },
        { b: b('Patch testing', 'पैच टेस्ट'), t: b('to identify contact allergens that may be triggering flare-ups.', 'उभार करने वाले संपर्क एलर्जन पहचानने के लिए।') },
        { b: b('Allergen-specific IgE blood test', 'IgE ब्लड टेस्ट'), t: b('to check for underlying food or environmental allergies.', 'खाने या वातावरण की एलर्जी जांचने के लिए।') },
        { b: b('Skin biopsy', 'स्किन बायोप्सी'), t: b('occasionally used to rule out other skin conditions in unclear cases.', 'अस्पष्ट मामलों में दूसरी समस्याएं अलग करने के लिए।') },
      ],
      note: b('Note: These tests are usually recommended in more advanced, unclear or recurrent cases and are not required for every patient.', 'ध्यान दें: ये जांचें आमतौर पर गंभीर, अस्पष्ट या बार-बार होने वाले मामलों में ही ज़रूरी होती हैं।'),
    },
    {
      type: 'cards', id: 'prevention', icon: 'check', title: b('Prevention & Trigger-Avoidance Tips', 'बचाव और ट्रिगर से बचने के टिप्स'),
      items: [
        { t: b('Moisturise skin daily with a fragrance-free emollient.', 'रोज़ बिना खुशबू वाले मॉइस्चराइज़र से त्वचा नम रखें।') },
        { t: b('Take short, lukewarm showers instead of long, hot baths.', 'लंबे गर्म स्नान के बजाय छोटा, गुनगुना स्नान करें।') },
        { t: b('Use mild, fragrance-free soaps & laundry detergents.', 'हल्के, बिना खुशबू वाले साबुन और डिटर्जेंट इस्तेमाल करें।') },
        { t: b('Identify and avoid your personal triggers.', 'अपने ट्रिगर पहचानें और उनसे बचें।') },
        { t: b('Keep nails trimmed to reduce damage from scratching.', 'खुजलाने से नुकसान कम करने के लिए नाखून छोटे रखें।') },
        { t: b('Manage stress through relaxation techniques.', 'आराम की तकनीकों से तनाव कम करें।') },
        { t: b('Use a humidifier in dry or winter weather.', 'सूखे या सर्दी के मौसम में ह्यूमिडिफ़ायर इस्तेमाल करें।') },
        { t: b('Wear soft, breathable cotton clothing.', 'मुलायम, हवादार सूती कपड़े पहनें।') },
      ],
    },
    {
      type: 'text', id: 'children', title: b('Eczema in Babies & Children', 'शिशुओं और बच्चों में एक्ज़िमा'),
      paras: [
        b('Eczema in babies and children is very common and usually appears as dry, red, itchy patches on the cheeks, scalp, and the creases of the elbows and knees. In infants it often starts on the face and outer limbs, while in older children it tends to settle into the skin folds. Most childhood eczema is atopic dermatitis, and many children improve markedly as they grow, though some carry the tendency into adult life.', 'बच्चों में एक्ज़िमा बहुत आम है और आमतौर पर गालों, सिर, और कोहनी-घुटनों की सिलवटों में सूखे, लाल, खुजली वाले चकत्तों के रूप में दिखता है। शिशुओं में यह अक्सर चेहरे और हाथ-पैरों के बाहरी हिस्से से शुरू होता है, जबकि बड़े बच्चों में सिलवटों में रहता है। ज़्यादातर बच्चे बड़े होने के साथ काफ़ी बेहतर हो जाते हैं, पर कुछ में यह प्रवृत्ति बड़ी उम्र तक रहती है।'),
        b("Because a child's skin is delicate and constant scratching can break the skin and lead to infection, gentle daily moisturising, soft cotton clothing, short lukewarm baths and keeping nails trimmed are important everyday measures. Our doctors prescribe age-appropriate, individualised care only after a proper consultation, aimed at reducing itching and flare-ups gently so a child is more comfortable day and night.", 'बच्चों की त्वचा नाज़ुक होती है और लगातार खुजलाने से त्वचा फटकर संक्रमण हो सकता है, इसलिए रोज़ हल्का मॉइस्चराइज़र, सूती कपड़े, छोटा गुनगुना स्नान और छोटे नाखून ज़रूरी हैं। हमारे डॉक्टर सही परामर्श के बाद ही उम्र के अनुसार व्यक्तिगत उपचार देते हैं, ताकि खुजली और उभार धीरे-धीरे कम हों और बच्चा दिन-रात आराम से रहे।'),
      ],
    },
    {
      type: 'text', id: 'atopic-triad', title: b('The Atopic Triad - Eczema, Asthma & Allergic Rhinitis', 'एटोपिक ट्रायड — एक्ज़िमा, अस्थमा और एलर्जिक राइनाइटिस'),
      paras: [
        b('Eczema, asthma and allergic rhinitis (hay fever) together form what doctors call the "atopic triad" - three allergic conditions that share the same underlying tendency and often occur in the same person or family. A child who has eczema early in life has a higher chance of later developing asthma or nasal allergies, a pattern sometimes described as the "atopic march." This is why our doctors look at the whole allergic tendency rather than treating eczema as an isolated skin issue.', 'एक्ज़िमा, अस्थमा और एलर्जिक राइनाइटिस मिलकर "एटोपिक ट्रायड" कहलाते हैं — तीन एलर्जिक स्थितियां जिनकी जड़ एक जैसी होती है और जो अक्सर एक ही व्यक्ति या परिवार में होती हैं। जिस बच्चे को जल्दी एक्ज़िमा होता है, उसमें आगे अस्थमा या नाक की एलर्जी की संभावना ज़्यादा होती है ("एटोपिक मार्च")। इसलिए हमारे डॉक्टर एक्ज़िमा को सिर्फ़ त्वचा की समस्या न मानकर पूरी एलर्जिक प्रवृत्ति को देखते हैं।'),
      ],
    },
    {
      type: 'cards', id: 'complications', icon: 'warn', title: b('Possible Complications of Untreated Eczema', 'बिना उपचार के एक्ज़िमा की जटिलताएं'),
      intro: b('Untreated or poorly managed eczema can lead to complications beyond itching and dryness, mainly because repeated scratching damages the protective skin barrier. Possible complications include -', 'बिना उपचार का एक्ज़िमा खुजली और सूखेपन से आगे जटिलताएं कर सकता है, क्योंकि बार-बार खुजलाने से त्वचा का सुरक्षा अवरोध टूटता है -'),
      items: [
        { t: b('Bacterial skin infection from scratching, with weeping, yellow crusts or pus.', 'खुजलाने से बैक्टीरियल संक्रमण — रिसाव, पीली पपड़ी या पस।') },
        { t: b('Viral infections such as eczema herpeticum, which needs urgent medical care.', 'एक्ज़िमा हर्पेटिकम जैसे वायरल संक्रमण, जिनमें तुरंत चिकित्सा चाहिए।') },
        { t: b('Thickened, leathery skin (lichenification) from long-term scratching.', 'लंबे समय तक खुजलाने से मोटी, सख्त त्वचा।') },
        { t: b('Skin discolouration or scarring in affected areas.', 'प्रभावित जगहों पर रंग बदलना या निशान।') },
        { t: b('Disturbed sleep from night-time itching, affecting mood and concentration.', 'रात की खुजली से नींद खराब, मूड और ध्यान पर असर।') },
        { t: b('Lowered confidence and social discomfort, especially in visible eczema.', 'दिखने वाले एक्ज़िमा में आत्मविश्वास कम होना।') },
      ],
    },
    {
      type: 'twocol', id: 'diet', title: b('Eczema Diet: What to Eat and Avoid', 'एक्ज़िमा डाइट: क्या खाएं, क्या न खाएं'),
      intro: b('There is no single eczema diet that suits everyone, but for people whose flare-ups are food-linked, adjusting the diet can help reduce inflammation and itching.', 'एक्ज़िमा के लिए सबके लिए एक जैसी डाइट नहीं है, पर जिनके उभार खाने से जुड़े हैं, उनमें डाइट बदलने से सूजन और खुजली कम हो सकती है।'),
      cols: [
        { title: b('Commonly supportive', 'आमतौर पर फ़ायदेमंद'), tone: 'good', items: [b('Omega-3-rich foods like flaxseed, walnuts and oily fish', 'अलसी, अखरोट और तैलीय मछली जैसे ओमेगा-3 स्रोत'), b('Plenty of water to keep the skin hydrated', 'त्वचा को नम रखने के लिए भरपूर पानी'), b('Colourful fruits and vegetables rich in antioxidants', 'एंटीऑक्सीडेंट से भरपूर रंगीन फल-सब्ज़ियां'), b('Probiotic foods such as curd', 'दही जैसे प्रोबायोटिक खाद्य')] },
        { title: b('Common triggers in sensitive people', 'संवेदनशील लोगों में आम ट्रिगर'), tone: 'bad', items: [b("Cow's milk", 'गाय का दूध'), b('Eggs', 'अंडे'), b('Peanuts and tree nuts', 'मूंगफली और मेवे'), b('Wheat and soy', 'गेहूं और सोया')] },
      ],
      note: b('Reactions differ from person to person, so our doctors evaluate your specific history before advising any restriction rather than removing foods unnecessarily.', 'हर व्यक्ति की प्रतिक्रिया अलग होती है, इसलिए हमारे डॉक्टर बेवजह चीज़ें बंद करने के बजाय आपका इतिहास देखकर ही कोई परहेज़ बताते हैं।'),
    },
    {
      type: 'list', id: 'urgent', title: b('When to See a Doctor Urgently', 'तुरंत डॉक्टर कब दिखाएं'),
      intro: b('You should seek prompt medical care if eczema shows signs of a skin infection or is no longer under control. Warning signs include -', 'अगर एक्ज़िमा में संक्रमण के संकेत हों या काबू में न रहे, तो तुरंत डॉक्टर को दिखाएं। चेतावनी के संकेत -'),
      items: [
        { b: b('Signs of infection', 'संक्रमण के संकेत'), t: b('spreading redness, warmth, swelling, yellow crusts, pus or a bad smell.', 'फैलती लालिमा, गर्माहट, सूजन, पीली पपड़ी, पस या बदबू।') },
        { b: b('Fever with a worsening rash', 'बुखार के साथ बढ़ते चकत्ते'), t: b('which may indicate an infected flare-up.', 'जो संक्रमित उभार का संकेत हो सकता है।') },
        { b: b('Painful, clustered blisters', 'दर्द वाले गुच्छेदार छाले'), t: b('that can signal a viral infection such as eczema herpeticum.', 'जो एक्ज़िमा हर्पेटिकम जैसे वायरल संक्रमण का संकेत हो सकते हैं।') },
        { b: b('Rapid spread', 'तेज़ी से फैलना'), t: b('eczema that spreads quickly or stops responding to your usual routine.', 'एक्ज़िमा जो तेज़ी से फैले या सामान्य देखभाल से न सुधरे।') },
      ],
      note: b('Our care supports long-term management of the eczema tendency, but an active skin infection is a genuine medical emergency that should be evaluated by a doctor without delay.', 'हमारी देखभाल एक्ज़िमा के लंबे प्रबंधन में मदद करती है, पर सक्रिय त्वचा संक्रमण एक असली मेडिकल इमरजेंसी है — बिना देर किए डॉक्टर को दिखाएं।'),
    },
    {
      type: 'text', id: 'approach', title: b('How Our Ayurvedic Care Helps with Eczema', 'हमारी आयुर्वेदिक देखभाल एक्ज़िमा में कैसे मदद करती है'),
      paras: [
        b('Our doctors don\'t treat eczema as an isolated "skin problem". They take a detailed case history: which areas are affected, what makes the itching better or worse (heat, cold, scratching, stress), the nature of the eruption (dry, oozing, blistered), allergies in you or your family, digestion, diet and sleep. Based on this, a personalised plan of medicine, diet and skincare is prescribed for your specific case.', 'हमारे डॉक्टर एक्ज़िमा को सिर्फ़ "त्वचा की समस्या" नहीं मानते। वे विस्तृत केस हिस्ट्री लेते हैं: कौन से हिस्से प्रभावित हैं, खुजली किससे बढ़ती-घटती है (गर्मी, ठंड, खुजलाना, तनाव), चकत्ते कैसे हैं (सूखे, रिसते, छाले वाले), आपकी या परिवार की एलर्जी, पाचन, खान-पान और नींद। इसके आधार पर आपके लिए दवा, डाइट और स्किनकेयर का व्यक्तिगत प्लान बनता है।'),
      ],
      note: b('Important: Please do not self-medicate, especially for children. WeClinic™ doctors prescribe the right medicine and dosage only after a detailed personal case-history consultation, so book your free consultation before starting any treatment.', 'ज़रूरी: खुद से दवा न लें, खासकर बच्चों के लिए। वीक्लिनिक™ के डॉक्टर विस्तृत केस-हिस्ट्री के बाद ही सही दवा और खुराक बताते हैं — उपचार शुरू करने से पहले फ्री परामर्श बुक करें।'),
    },
    { type: 'cta', title: b('Get a personalised eczema treatment plan from WeClinic™\'s experienced doctors.', 'वीक्लिनिक™ के अनुभवी डॉक्टरों से अपना व्यक्तिगत एक्ज़िमा प्लान पाएं।'), button: b('Book Your Free Consultation', 'फ्री परामर्श बुक करें'), action: 'form' },
  ],

  faqs: [
    { q: b('Can eczema be cured permanently?', 'क्या एक्ज़िमा हमेशा के लिए ठीक हो सकता है?'), a: b('Eczema is a chronic tendency. Many patients get significant, long-term relief in itching, dryness and flare-ups when they follow the complete course, skincare and trigger-avoidance plan, though results vary from person to person.', 'एक्ज़िमा एक पुरानी प्रवृत्ति है। पूरा कोर्स, स्किनकेयर और ट्रिगर से बचाव मानने पर कई मरीज़ों को खुजली, सूखेपन और उभार में लंबी राहत मिलती है, हालांकि परिणाम हर व्यक्ति में अलग होते हैं।') },
    { q: b('What is the difference between eczema and psoriasis?', 'एक्ज़िमा और सोरायसिस में क्या फ़र्क है?'), a: b('Eczema is usually intensely itchy, dry or oozing skin, often in skin folds and linked with allergies. Psoriasis forms thick, well-defined plaques with silvery scales, commonly on elbows, knees and scalp.', 'एक्ज़िमा में आमतौर पर तेज़ खुजली, सूखी या रिसती त्वचा होती है, अक्सर सिलवटों में और एलर्जी से जुड़ी। सोरायसिस में चांदी जैसी पपड़ी वाले मोटे चकत्ते होते हैं, अक्सर कोहनी, घुटने और सिर पर।') },
    { q: b('Is eczema contagious?', 'क्या एक्ज़िमा छूत से फैलता है?'), a: b('No. Eczema cannot spread by touch. However, infected eczema can carry bacteria, so keep broken skin clean and covered.', 'नहीं, एक्ज़िमा छूने से नहीं फैलता। पर संक्रमित एक्ज़िमा में बैक्टीरिया हो सकते हैं, इसलिए फटी त्वचा को साफ़ और ढककर रखें।') },
    { q: b('Can food allergies trigger eczema?', 'क्या फूड एलर्जी से एक्ज़िमा बढ़ता है?'), a: b('In some people, especially young children, foods like milk, eggs, nuts, wheat or soy can trigger flares. Restrictions should be based on your history, not guesswork.', 'कुछ लोगों में, खासकर छोटे बच्चों में, दूध, अंडे, मेवे, गेहूं या सोया से उभार हो सकता है। परहेज़ अंदाज़े से नहीं, आपके इतिहास के आधार पर होना चाहिए।') },
    { q: b('Is eczema hereditary?', 'क्या एक्ज़िमा वंशानुगत है?'), a: b('There is a strong family link — children of parents with eczema, asthma or hay fever are at higher risk.', 'परिवार से गहरा संबंध है — जिन माता-पिता को एक्ज़िमा, अस्थमा या हे फीवर हो, उनके बच्चों में खतरा ज़्यादा होता है।') },
    { q: b('Is the treatment safe for children?', 'क्या उपचार बच्चों के लिए सुरक्षित है?'), a: b('Our doctors give age-appropriate care only after a proper consultation. Never give a child any medicine without a doctor\'s advice.', 'हमारे डॉक्टर सही परामर्श के बाद ही उम्र के अनुसार उपचार देते हैं। डॉक्टर की सलाह के बिना बच्चे को कोई दवा न दें।') },
    { q: b('What causes eczema flare-ups?', 'एक्ज़िमा का उभार किससे होता है?'), a: b('Common triggers are harsh soaps, detergents, dust mites, sweat, wool, dry weather, stress and, in some people, certain foods.', 'आम ट्रिगर: कड़े साबुन, डिटर्जेंट, धूल के कण, पसीना, ऊन, सूखा मौसम, तनाव और कुछ लोगों में कुछ खाने की चीज़ें।') },
    { q: b('Does eczema in children go away with age?', 'क्या बच्चों का एक्ज़िमा उम्र के साथ चला जाता है?'), a: b('Many children improve markedly as they grow, though some carry the tendency into adult life.', 'कई बच्चे बड़े होने के साथ काफ़ी बेहतर हो जाते हैं, पर कुछ में यह प्रवृत्ति बड़ी उम्र तक रहती है।') },
    { q: b('Can adults develop eczema for the first time?', 'क्या वयस्कों को पहली बार एक्ज़िमा हो सकता है?'), a: b('Yes. Adult-onset eczema is common, often linked to contact irritants at work or home, stress or a change in climate.', 'हां। वयस्कों में पहली बार एक्ज़िमा होना आम है, अक्सर काम या घर पर किसी चीज़ के संपर्क, तनाव या मौसम बदलने से।') },
    { q: b('How should I moisturise and bathe to manage eczema?', 'एक्ज़िमा में नहाने और मॉइस्चराइज़ करने का सही तरीका क्या है?'), a: b('Take short, lukewarm baths with a mild, fragrance-free cleanser, pat dry gently and apply a fragrance-free moisturiser within a few minutes while the skin is still slightly damp.', 'हल्के, बिना खुशबू वाले क्लींज़र से छोटा गुनगुना स्नान करें, हल्के से थपथपाकर सुखाएं, और त्वचा हल्की नम रहते ही कुछ मिनटों में बिना खुशबू वाला मॉइस्चराइज़र लगाएं।') },
  ],

  related: ['psoriasis', 'skin-allergy', 'acne-pimples', 'fungal-infection'],
}
