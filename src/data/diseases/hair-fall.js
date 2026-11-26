// ===== Hair Fall — weclinic.in se, Ayurveda ke hisaab se badla gaya =====
// Is page ka hero/form weclinic.in se nahi mila tha, isliye baaki pages jaisa banaya gaya hai.
// Homeopathic remedies, "Homeopathy vs Allopathy" aur doctor list hata di gayi hai.
const b = (en, hi) => ({ en, hi })

export default {
  slug: 'hair-fall',
  name: b('Hair Fall', 'बाल झड़ना'),
  seoTitle: b('Hair Fall & Hair Loss Ayurvedic Treatment | Jeewan Jyoti Ayurvedic Sansthan', 'बाल झड़ने का आयुर्वेदिक उपचार | जीवन ज्योति आयुर्वेदिक संस्थान'),
  closing: { title: b('Start Your Journey to Healthier Hair Today', 'आज ही स्वस्थ बालों की ओर पहला कदम उठाएं') },

  hero: {
    eyebrow: b("India's Trusted Clinic for Hair Fall Care", 'बाल झड़ने की देखभाल के लिए भरोसेमंद क्लिनिक'),
    title1: b('Hair Fall Ayurvedic Treatment for ', 'बाल झड़ने का आयुर्वेदिक उपचार — '),
    title2: b('Stronger, Healthier Hair', 'मज़बूत और स्वस्थ बालों के लिए'),
    text: b('Trusted Ayurvedic care for hair fall — personalised treatment for pattern hair loss, stress or postpartum shedding, dandruff-related and nutritional hair fall, starting at just ₹1599.', 'बाल झड़ने के लिए भरोसेमंद आयुर्वेदिक देखभाल — पैटर्न हेयर लॉस, तनाव या डिलीवरी के बाद झड़ना, रूसी और पोषण की कमी से बाल झड़ने के लिए व्यक्तिगत उपचार, सिर्फ़ ₹1599 से शुरू।'),
  },
  form: {
    symptoms: [b('Excessive Shedding', 'बहुत ज़्यादा बाल झड़ना'), b('Thinning/Bald Patches', 'पतले बाल/गंजे पैच'), b('Receding Hairline', 'पीछे जाती हेयरलाइन'), b('Dandruff', 'रूसी'), b('Other', 'अन्य')],
  },

  types: {
    eyebrow: b('What we treat', 'हम क्या ठीक करने में मदद करते हैं'),
    title: b('Types of Hair Fall We Treat', 'बाल झड़ने के प्रकार जिनका हम उपचार करते हैं'),
    sub: b('From temporary, stress-related shedding to long-standing pattern thinning, our doctors design a treatment plan for every cause.', 'तनाव से अस्थायी झड़ने से लेकर पुराने पैटर्न हेयर लॉस तक — हर कारण के लिए हमारे डॉक्टर प्लान बनाते हैं।'),
    items: [
      { icon: '', name: b('Androgenetic Alopecia', 'एंड्रोजेनेटिक एलोपेसिया'), desc: b('Genetic, hormone-driven pattern baldness', 'जेनेटिक, हार्मोन से जुड़ा पैटर्न गंजापन') },
      { icon: '', name: b('Telogen Effluvium', 'टेलोजन एफ्लुवियम'), desc: b('Temporary shedding after stress or illness', 'तनाव या बीमारी के बाद अस्थायी झड़ना') },
      { icon: '', name: b('Postpartum Hair Loss', 'डिलीवरी के बाद बाल झड़ना'), desc: b('Hormonal shedding after childbirth', 'प्रसव के बाद हार्मोनल झड़ना') },
      { icon: '', name: b('Traction Alopecia', 'ट्रैक्शन एलोपेसिया'), desc: b('Loss from tight hairstyles or pulling', 'टाइट हेयरस्टाइल या खिंचाव से झड़ना') },
      { icon: '', name: b('Dandruff-Related Hair Fall', 'रूसी से बाल झड़ना'), desc: b('Shedding with an itchy, flaky scalp', 'खुजली, पपड़ी वाले सिर के साथ झड़ना') },
      { icon: '', name: b('Nutritional Hair Fall', 'पोषण की कमी से बाल झड़ना'), desc: b('Thinning from low iron, protein or vitamins', 'आयरन, प्रोटीन या विटामिन की कमी से') },
    ],
  },

  reviewer: null,

  takeaways: [
    { k: b('What it is', 'यह क्या है'), v: b('Hair fall is excessive shedding of scalp hair beyond the normal 50-100 strands lost each day, leading to visibly reduced density, a widening parting or bald patches.', 'रोज़ के सामान्य 50-100 बालों से ज़्यादा झड़ना, जिससे बाल कम दिखें, मांग चौड़ी हो या गंजे पैच बनें।') },
    { k: b('Who it affects', 'किसे होता है'), v: b('Both men and women of all ages, with genetic (pattern) hair loss most common in men from their 20s-30s and diffuse thinning common in women during hormonal changes.', 'हर उम्र के पुरुष और महिलाएं; पुरुषों में 20-30 की उम्र से पैटर्न हेयर लॉस आम है, और महिलाओं में हार्मोनल बदलाव के समय पूरे सिर के बाल पतले होना।') },
    { k: b('Main causes', 'मुख्य कारण'), v: b('Genetics, hormonal changes (thyroid, PCOS, pregnancy), iron and protein deficiency, chronic stress and scalp conditions like dandruff.', 'जेनेटिक्स, हार्मोनल बदलाव (थायराइड, PCOS, गर्भावस्था), आयरन और प्रोटीन की कमी, लगातार तनाव और रूसी जैसी सिर की समस्याएं।') },
    { k: b('Our approach', 'हमारा तरीका'), v: b('A personalised Ayurvedic plan that looks for the hormonal, nutritional or stress-related trigger, with medicine, diet and hair-care guidance.', 'हार्मोनल, पोषण या तनाव से जुड़े कारण को ढूंढते हुए व्यक्तिगत आयुर्वेदिक प्लान — दवा, डाइट और बालों की देखभाल की सलाह के साथ।') },
    { k: b('Treatment timeframe', 'उपचार की अवधि'), v: b('The hair growth cycle is naturally slow: reduced shedding is usually judged after about 8-12 weeks, while visible improvement in density takes several months.', 'बालों का चक्र धीमा होता है: झड़ना कम हुआ या नहीं, यह आमतौर पर 8-12 हफ्ते बाद आंका जाता है, जबकि घनापन दिखने में कई महीने लगते हैं।') },
    { k: b('Safety', 'सावधानी'), v: b('Sudden heavy shedding, distinct bald patches or hair fall with fatigue or scalp disease should be medically evaluated, as they may signal an autoimmune, thyroid or nutritional cause.', 'अचानक बहुत ज़्यादा झड़ना, साफ़ गंजे पैच, या थकान या सिर की बीमारी के साथ झड़ना हो तो डॉक्टर को दिखाएं — यह ऑटोइम्यून, थायराइड या पोषण से जुड़ा कारण हो सकता है।') },
  ],

  blocks: [
    {
      type: 'text', id: 'what-is', title: b('What Is Hair Fall?', 'बाल झड़ना क्या है?'),
      paras: [
        b("Hair fall is a symptom in which hair sheds from the scalp faster than it is replaced, resulting in thinning beyond the normal daily loss of 50-100 strands and causing reduced hair density, a widening parting or bald patches over time. It isn't a single condition - it can result from genetics, hormones, nutrition, stress or scalp health, and the underlying cause determines both the pattern of hair loss and the right treatment approach.", 'बाल झड़ना एक लक्षण है जिसमें बाल नए आने से तेज़ झड़ते हैं — रोज़ के सामान्य 50-100 बालों से ज़्यादा — जिससे समय के साथ बाल कम, मांग चौड़ी या गंजे पैच बनते हैं। यह एक बीमारी नहीं है — जेनेटिक्स, हार्मोन, पोषण, तनाव या सिर की सेहत से हो सकता है, और असली कारण ही झड़ने का पैटर्न और सही उपचार तय करता है।'),
        b('Every hair on the scalp moves through a growth cycle: a long growing (anagen) phase, a short transitional (catagen) phase, and a resting and shedding (telogen) phase. Hair fall becomes visible when too many hairs enter the shedding phase at once, or when regrowth slows. The most common presentations we see at Jeewan Jyoti are:', 'हर बाल एक चक्र से गुज़रता है: लंबा बढ़ने का चरण (एनाजेन), छोटा बदलाव का चरण (कैटाजेन), और आराम व झड़ने का चरण (टेलोजन)। जब एक साथ बहुत सारे बाल झड़ने के चरण में जाते हैं या नए बाल धीरे आते हैं, तब झड़ना दिखता है। जीवन ज्योति में सबसे आम प्रकार:'),
      ],
    },
    {
      type: 'cards', icon: 'check',
      items: [
        { b: b('Androgenetic Alopecia', 'एंड्रोजेनेटिक एलोपेसिया'), t: b('genetic, hormone-driven male or female pattern baldness.', 'जेनेटिक, हार्मोन से जुड़ा पुरुष या महिला पैटर्न गंजापन।') },
        { b: b('Telogen Effluvium', 'टेलोजन एफ्लुवियम'), t: b('temporary, diffuse shedding triggered by stress, illness or shock to the body.', 'तनाव, बीमारी या शरीर को झटके से अस्थायी, पूरे सिर से झड़ना।') },
        { b: b('Postpartum Hair Loss', 'डिलीवरी के बाद'), t: b('hormonal shedding that follows childbirth.', 'प्रसव के बाद हार्मोनल झड़ना।') },
        { b: b('Traction Alopecia', 'ट्रैक्शन एलोपेसिया'), t: b('hair loss from tight hairstyles or repeated pulling.', 'टाइट हेयरस्टाइल या बार-बार खिंचाव से।') },
        { b: b('Dandruff-Related Hair Fall', 'रूसी से'), t: b('shedding linked to an itchy, flaky or infected scalp.', 'खुजली, पपड़ी या संक्रमण वाले सिर से जुड़ा झड़ना।') },
        { b: b('Nutritional Deficiency Hair Fall', 'पोषण की कमी से'), t: b('thinning linked to low iron, protein or vitamin levels.', 'आयरन, प्रोटीन या विटामिन की कमी से पतले बाल।') },
      ],
    },
    {
      type: 'table', id: 'quick-facts', title: b('Quick Facts', 'मुख्य तथ्य'),
      rows: [
        [b('Also known as', 'अन्य नाम'), b('Hair loss, hair shedding, thinning hair, baldness, alopecia', 'हेयर लॉस, बाल पतले होना, गंजापन, एलोपेसिया')],
        [b('Commonly affects', 'किसे ज़्यादा होता है'), b('Both men and women of all ages; pattern hair loss is common in men from their 20s-30s and in women around hormonal changes and menopause', 'हर उम्र के पुरुष-महिलाएं; पुरुषों में 20-30 की उम्र से, महिलाओं में हार्मोनल बदलाव और मेनोपॉज़ के आसपास')],
        [b('Main symptoms', 'मुख्य लक्षण'), b('Excessive shedding, widening parting, receding hairline, thinning or bald patches, weak brittle hair, visible scalp', 'ज़्यादा झड़ना, चौड़ी मांग, पीछे जाती हेयरलाइन, पतले या गंजे पैच, कमज़ोर टूटते बाल, सिर की त्वचा दिखना')],
        [b('Common causes', 'आम कारण'), b('Genetics, hormonal changes (thyroid, PCOS, pregnancy), iron and protein deficiency, chronic stress, dandruff and scalp infections', 'जेनेटिक्स, हार्मोनल बदलाव (थायराइड, PCOS, गर्भावस्था), आयरन-प्रोटीन की कमी, तनाव, रूसी और सिर के संक्रमण')],
        [b('Diagnosis', 'जांच'), b('Scalp and hair-pull examination, trichoscopy, blood tests (ferritin, thyroid, vitamin D, B12), pattern-baldness grading', 'सिर और हेयर-पुल जांच, ट्राइकोस्कोपी, ब्लड टेस्ट (फेरिटिन, थायराइड, विटामिन D, B12), गंजेपन की ग्रेडिंग')],
        [b('Our approach', 'हमारा तरीका'), b('Personalised Ayurvedic medicine with diet, scalp-care and lifestyle guidance, aimed at the underlying trigger', 'असली कारण पर ध्यान देते हुए डाइट, सिर की देखभाल और जीवनशैली सलाह के साथ व्यक्तिगत आयुर्वेदिक दवा')],
        [b('Typical treatment duration', 'आम उपचार अवधि'), b('Reduced shedding is usually judged after 8-12 weeks; visible density improvement over several months, depending on the cause', 'झड़ने में कमी आमतौर पर 8-12 हफ्ते बाद आंकी जाती है; घनापन कई महीनों में, कारण पर निर्भर')],
        [b('When to seek urgent care', 'तुरंत डॉक्टर कब दिखाएं'), b('Sudden heavy shedding, distinct bald patches, or hair fall with scalp disease, fatigue or weight change', 'अचानक बहुत झड़ना, साफ़ गंजे पैच, या सिर की बीमारी, थकान या वज़न बदलने के साथ झड़ना')],
      ],
    },
    {
      type: 'cards', id: 'symptoms', icon: 'check', title: b('Common Hair Fall Symptoms We Treat', 'बाल झड़ने के आम लक्षण'),
      intro: b('Hair fall symptoms vary depending on the underlying cause. Our doctors regularly treat patients with the following presentations -', 'लक्षण असली कारण पर निर्भर करते हैं। हमारे डॉक्टर इन लक्षणों वाले मरीज़ों का नियमित उपचार करते हैं -'),
      items: [
        { b: b('Excessive shedding', 'ज़्यादा झड़ना'), t: b('noticeably more hair falling while combing, washing or on the pillow.', 'कंघी, धुलाई या तकिये पर पहले से ज़्यादा बाल।') },
        { b: b('Widening hair part', 'चौड़ी होती मांग'), t: b('a broadening centre parting as density reduces.', 'बाल कम होने से बीच की मांग चौड़ी होना।') },
        { b: b('Receding hairline', 'पीछे जाती हेयरलाइन'), t: b('hairline moving back at the temples or forehead.', 'कनपटी या माथे से हेयरलाइन पीछे जाना।') },
        { b: b('Bald or thinning patches', 'गंजे या पतले पैच'), t: b('visible spots of reduced or absent hair growth.', 'कम या बिना बालों वाली दिखने वाली जगहें।') },
        { b: b('Weak, brittle hair', 'कमज़ोर, टूटते बाल'), t: b('strands that break easily or feel thin and lifeless.', 'आसानी से टूटने वाले, पतले और बेजान बाल।') },
        { b: b('Visible scalp', 'सिर की त्वचा दिखना'), t: b('scalp showing through under bright light due to overall thinning.', 'तेज़ रोशनी में बालों के बीच से सिर दिखना।') },
      ],
    },
    { type: 'cta', title: b('Worried about increasing hair fall or thinning?', 'बढ़ते बाल झड़ने या पतले बालों से परेशान हैं?'), button: b('Call Now - Free Consultation', 'अभी कॉल करें - फ्री परामर्श') },
    {
      type: 'cards', id: 'causes', icon: 'warn', title: b('What Causes Hair Fall?', 'बाल क्यों झड़ते हैं?'),
      intro: b('Hair fall is most commonly caused by genetics and hormonal changes, followed by nutritional deficiencies, stress and scalp conditions. In practice it usually results from a combination of these factors rather than a single cause -', 'बाल झड़ने के सबसे आम कारण जेनेटिक्स और हार्मोनल बदलाव हैं, फिर पोषण की कमी, तनाव और सिर की समस्याएं। ज़्यादातर यह एक नहीं, कई कारणों के मेल से होता है -'),
      items: [
        { t: b('Genetics & family history of baldness.', 'जेनेटिक्स और परिवार में गंजापन।') },
        { t: b('Hormonal changes - pregnancy, thyroid disorders, PCOS or menopause.', 'हार्मोनल बदलाव — गर्भावस्था, थायराइड, PCOS या मेनोपॉज़।') },
        { t: b('Chronic stress & anxiety.', 'लगातार तनाव और चिंता।') },
        { t: b('Nutritional deficiencies - iron, protein, vitamin D or B12.', 'पोषण की कमी — आयरन, प्रोटीन, विटामिन D या B12।') },
        { t: b('Dandruff & scalp infections.', 'रूसी और सिर के संक्रमण।') },
        { t: b('Harsh hair treatments, tight hairstyles & excessive heat styling.', 'कड़े हेयर ट्रीटमेंट, टाइट हेयरस्टाइल और ज़्यादा हीट स्टाइलिंग।') },
        { t: b('Certain medications & underlying illnesses.', 'कुछ दवाएं और अंदरूनी बीमारियां।') },
        { t: b('Natural ageing.', 'बढ़ती उम्र।') },
      ],
    },
    {
      type: 'list', id: 'risk', title: b('Who Is Most at Risk?', 'किसे ज़्यादा खतरा है?'),
      intro: b('While hair fall can affect anyone, certain factors make some people more susceptible than others -', 'बाल किसी के भी झड़ सकते हैं, पर कुछ कारणों से खतरा ज़्यादा होता है -'),
      items: [
        { b: b('Age', 'उम्र'), t: b('the risk of pattern hair loss increases with age, though stress-related shedding can occur much earlier.', 'उम्र के साथ पैटर्न हेयर लॉस का खतरा बढ़ता है, हालांकि तनाव से झड़ना बहुत पहले भी हो सकता है।') },
        { b: b('Gender', 'लिंग'), t: b('androgenetic alopecia is common in men from their 20s-30s onward, while female pattern hair loss often becomes noticeable around or after menopause.', 'पुरुषों में 20-30 की उम्र से पैटर्न गंजापन आम है, महिलाओं में यह अक्सर मेनोपॉज़ के आसपास या बाद दिखता है।') },
        { b: b('Family history', 'पारिवारिक इतिहास'), t: b('a family history of baldness significantly increases the likelihood of pattern hair loss.', 'परिवार में गंजापन हो तो पैटर्न हेयर लॉस की संभावना काफ़ी बढ़ जाती है।') },
        { b: b('Life stage', 'जीवन का चरण'), t: b('pregnancy, postpartum recovery, major illness or surgery can all trigger temporary but significant shedding.', 'गर्भावस्था, डिलीवरी के बाद, बड़ी बीमारी या सर्जरी से अस्थायी पर ज़्यादा झड़ना हो सकता है।') },
      ],
    },
    {
      type: 'list', id: 'tests', title: b('Common Diagnostic Tests for Hair Fall', 'बाल झड़ने की आम जांचें'),
      intro: b('To confirm the type and severity of hair fall, doctors typically recommend -', 'बाल झड़ने का प्रकार और गंभीरता जानने के लिए डॉक्टर आमतौर पर बताते हैं -'),
      items: [
        { b: b('Scalp & hair-pull examination', 'सिर और हेयर-पुल जांच'), t: b('a physical check of hair density, scalp condition and shedding pattern.', 'बालों का घनापन, सिर की हालत और झड़ने का पैटर्न देखना।') },
        { b: b('Trichoscopy (dermoscopy)', 'ट्राइकोस्कोपी'), t: b('a magnified view of the hair follicles and scalp to assess miniaturisation.', 'बालों की जड़ों और सिर को बड़ा करके देखना।') },
        { b: b('Blood tests', 'ब्लड टेस्ट'), t: b('thyroid profile, iron/ferritin, vitamin D and B12 to rule out deficiency or hormonal causes.', 'थायराइड, आयरन/फेरिटिन, विटामिन D और B12 — कमी या हार्मोनल कारण जांचने के लिए।') },
        { b: b('Pattern-baldness grading', 'गंजेपन की ग्रेडिंग'), t: b('severity scales used to classify the stage of male or female pattern hair loss.', 'पुरुष या महिला पैटर्न हेयर लॉस की स्टेज तय करने के पैमाने।') },
      ],
      note: b('Note: These tests are usually recommended in more advanced or unclear cases and are not required for every patient.', 'ध्यान दें: ये जांचें आमतौर पर गंभीर या अस्पष्ट मामलों में ही ज़रूरी होती हैं, हर मरीज़ के लिए नहीं।'),
    },
    {
      type: 'cards', id: 'prevention', icon: 'check', title: b('Hair Fall Prevention & Care Tips', 'बाल झड़ने से बचाव और देखभाल'),
      items: [
        { t: b('Eat a protein and iron-rich, balanced diet.', 'प्रोटीन और आयरन से भरपूर संतुलित आहार लें।') },
        { t: b('Manage stress through exercise, sleep & relaxation.', 'व्यायाम, नींद और आराम से तनाव कम करें।') },
        { t: b('Avoid tight hairstyles & excessive heat or chemical treatments.', 'टाइट हेयरस्टाइल और ज़्यादा हीट या केमिकल ट्रीटमेंट से बचें।') },
        { t: b('Treat dandruff and scalp infections early.', 'रूसी और सिर के संक्रमण का जल्दी इलाज कराएं।') },
        { t: b('Get regular checkups for thyroid & nutritional deficiencies.', 'थायराइड और पोषण की कमी की नियमित जांच कराएं।') },
        { t: b('Be gentle while combing and drying wet hair.', 'गीले बालों को कंघी करते और सुखाते समय नरमी बरतें।') },
      ],
    },
    {
      type: 'twocol', id: 'diet', title: b('Hair Fall Diet: What to Eat and Avoid', 'बाल झड़ने में डाइट: क्या खाएं, क्या न खाएं'),
      intro: b('The best diet for hair fall is protein-rich and iron-rich, because hair is made largely of a protein called keratin and low iron is one of the most common reversible causes of shedding.', 'बाल झड़ने में सबसे अच्छी डाइट प्रोटीन और आयरन से भरपूर होती है, क्योंकि बाल ज़्यादातर केराटिन प्रोटीन से बने होते हैं और आयरन की कमी झड़ने का एक आम, ठीक होने वाला कारण है।'),
      cols: [
        { title: b('Foods That Support Hair Growth', 'बालों के लिए फ़ायदेमंद'), tone: 'good', items: [b('Protein sources - eggs, paneer, dairy, lentils, beans and lean meat', 'प्रोटीन — अंडे, पनीर, दूध-दही, दालें, राजमा-चना और लीन मीट'), b('Iron-rich foods - spinach, green leafy vegetables, dates and jaggery', 'आयरन — पालक, हरी पत्तेदार सब्ज़ियां, खजूर और गुड़'), b('Vitamin D and omega-3 - sunlight, fortified milk, fish and flaxseed', 'विटामिन D और ओमेगा-3 — धूप, फोर्टिफ़ाइड दूध, मछली और अलसी'), b('Vitamin C - citrus fruits and amla, which help absorb iron', 'विटामिन C — खट्टे फल और आंवला, जो आयरन सोखने में मदद करते हैं'), b('Zinc and biotin - nuts, seeds, whole grains and legumes', 'ज़िंक और बायोटिन — मेवे, बीज, साबुत अनाज और दालें')] },
        { title: b('What to Limit or Avoid', 'क्या कम करें'), tone: 'bad', items: [b('Crash diets and skipping meals', 'क्रैश डाइट और खाना छोड़ना'), b('Excess sugar and heavily processed or junk food', 'ज़्यादा चीनी और प्रोसेस्ड या जंक फूड'), b('Very high-dose supplements taken without a confirmed deficiency', 'बिना जांच के ज़्यादा डोज़ वाले सप्लीमेंट'), b('Excess caffeine, smoking and alcohol', 'ज़्यादा कैफ़ीन, धूम्रपान और शराब')] },
      ],
      note: b('Correcting a genuine iron, protein or vitamin deficiency can meaningfully reduce hair fall, but supplements should be based on blood tests and medical advice rather than self-prescribed.', 'आयरन, प्रोटीन या विटामिन की असली कमी दूर करने से बाल झड़ना काफ़ी कम हो सकता है, पर सप्लीमेंट ब्लड टेस्ट और डॉक्टर की सलाह से ही लें, खुद से नहीं।'),
    },
    {
      type: 'list', id: 'see-doctor', title: b('When to See a Doctor for Hair Fall', 'बाल झड़ने में डॉक्टर कब दिखाएं'),
      intro: b('You should see a doctor when the shedding is sudden or heavy, when bald patches or a rapidly widening parting appear, or when hair fall comes with scalp or general health symptoms - because these can point to a treatable underlying cause.', 'अगर झड़ना अचानक या बहुत ज़्यादा हो, गंजे पैच या तेज़ी से चौड़ी होती मांग दिखे, या सिर या सेहत से जुड़े दूसरे लक्षण हों, तो डॉक्टर को दिखाएं — इनके पीछे ठीक होने वाला कारण हो सकता है।'),
      items: [
        { b: b('Sudden or patchy loss', 'अचानक या पैच में झड़ना'), t: b('distinct round bald patches, which may indicate alopecia areata, an autoimmune condition evaluated separately from general hair fall.', 'साफ़ गोल गंजे पैच, जो एलोपेसिया एरीटा (ऑटोइम्यून बीमारी) का संकेत हो सकते हैं।') },
        { b: b('Heavy diffuse shedding', 'पूरे सिर से बहुत झड़ना'), t: b('handfuls of hair coming out over weeks, especially after illness, childbirth or a crash diet.', 'हफ्तों तक मुट्ठी भर बाल झड़ना, खासकर बीमारी, प्रसव या क्रैश डाइट के बाद।') },
        { b: b('Scalp disease', 'सिर की बीमारी'), t: b('persistent itching, redness, flaking, pain or pus, suggesting an infection or inflammatory scalp condition.', 'लगातार खुजली, लालिमा, पपड़ी, दर्द या पस — संक्रमण या सूजन का संकेत।') },
        { b: b('Warning signs of illness', 'बीमारी के संकेत'), t: b('hair fall alongside unexplained fatigue, weight change, irregular periods or cold intolerance, which may signal a thyroid or nutritional disorder.', 'बिना वजह थकान, वज़न बदलना, अनियमित पीरियड्स या ठंड बर्दाश्त न होना — थायराइड या पोषण की समस्या का संकेत।') },
      ],
    },
    {
      type: 'text', id: 'approach', title: b('How Our Ayurvedic Care Helps with Hair Fall', 'हमारी आयुर्वेदिक देखभाल बाल झड़ने में कैसे मदद करती है'),
      paras: [
        b('Our doctors don\'t treat hair fall as an isolated "scalp problem". They take a detailed case history: the pattern and duration of hair fall, associated hormonal or health factors, stress levels, diet, scalp condition, digestion and sleep. Based on this, a personalised plan of medicine, diet and hair care is prescribed for your specific case.', 'हमारे डॉक्टर बाल झड़ने को सिर्फ़ "सिर की समस्या" नहीं मानते। वे विस्तृत केस हिस्ट्री लेते हैं: झड़ने का पैटर्न और अवधि, हार्मोनल या सेहत से जुड़े कारण, तनाव, खान-पान, सिर की हालत, पाचन और नींद। इसके आधार पर आपके लिए दवा, डाइट और बालों की देखभाल का व्यक्तिगत प्लान बनता है।'),
        b('Genetic pattern baldness is progressive by nature, so we set honest expectations and recommend ongoing follow-up to maintain results.', 'जेनेटिक पैटर्न गंजापन समय के साथ बढ़ने वाला होता है, इसलिए हम सच्ची उम्मीदें रखते हैं और परिणाम बनाए रखने के लिए नियमित फॉलो-अप की सलाह देते हैं।'),
      ],
      note: b('Important: Please do not self-medicate. Jeewan Jyoti doctors prescribe the right medicine and dosage only after a detailed personal case-history consultation, so book your free consultation before starting any treatment.', 'ज़रूरी: खुद से दवा न लें। जीवन ज्योति के डॉक्टर विस्तृत केस-हिस्ट्री के बाद ही सही दवा और खुराक बताते हैं — उपचार शुरू करने से पहले फ्री परामर्श बुक करें।'),
    },
    { type: 'cta', title: b('Get a personalised hair fall treatment plan from Jeewan Jyoti\'s experienced doctors.', 'जीवन ज्योति के अनुभवी डॉक्टरों से बाल झड़ने का व्यक्तिगत प्लान पाएं।'), button: b('Book Your Free Consultation', 'फ्री परामर्श बुक करें'), action: 'form' },
  ],

  faqs: [
    { q: b('Can hair regrow naturally with treatment?', 'क्या उपचार से बाल दोबारा आ सकते हैं?'), a: b('When the trigger is hormonal, nutritional or stress-related, many patients see reduced shedding and gradual improvement in density and texture after following the complete course. The extent of regrowth varies from person to person.', 'जब कारण हार्मोनल, पोषण या तनाव से जुड़ा हो, तो पूरा कोर्स करने पर कई मरीज़ों में झड़ना कम होता है और धीरे-धीरे घनापन सुधरता है। कितने बाल दोबारा आएंगे, यह हर व्यक्ति में अलग होता है।') },
    { q: b('How long does treatment take to show results?', 'उपचार का असर कितने समय में दिखता है?'), a: b('Because the hair cycle is slow, reduced shedding is usually judged after 8-12 weeks, and visible thickness takes a few months longer. Completing the full course is important.', 'बालों का चक्र धीमा है, इसलिए झड़ने में कमी आमतौर पर 8-12 हफ्ते बाद आंकी जाती है, और घनापन दिखने में कुछ महीने और लगते हैं। पूरा कोर्स करना ज़रूरी है।') },
    { q: b('Is hair fall treatment permanent?', 'क्या उपचार का असर हमेशा रहता है?'), a: b('Treating the trigger can bring long-lasting improvement, but genetic pattern baldness is progressive, so ongoing care and periodic follow-up are usually recommended.', 'कारण का इलाज होने से लंबा सुधार हो सकता है, पर जेनेटिक गंजापन बढ़ने वाला होता है, इसलिए नियमित देखभाल और फॉलो-अप की सलाह दी जाती है।') },
    { q: b('What is the difference between hair fall and alopecia areata?', 'बाल झड़ने और एलोपेसिया एरीटा में क्या फ़र्क है?'), a: b('General hair fall is gradual, diffuse shedding across the scalp. Alopecia areata is an autoimmune condition causing sudden, well-defined round bald patches, and is evaluated differently.', 'आम बाल झड़ना धीरे-धीरे पूरे सिर से होता है। एलोपेसिया एरीटा एक ऑटोइम्यून बीमारी है जिसमें अचानक साफ़ गोल गंजे पैच बनते हैं, और इसकी जांच अलग होती है।') },
    { q: b('What causes hair fall in men and women?', 'पुरुषों और महिलाओं में बाल झड़ने के कारण क्या हैं?'), a: b('In men, the most common cause is genetic pattern baldness. In women, causes include female pattern hair loss, pregnancy, thyroid disorders or PCOS, iron and nutritional deficiencies, and stress. Both can also lose hair from dandruff, harsh treatments or illness.', 'पुरुषों में सबसे आम कारण जेनेटिक पैटर्न गंजापन है। महिलाओं में महिला पैटर्न हेयर लॉस, गर्भावस्था, थायराइड या PCOS, आयरन और पोषण की कमी, और तनाव। दोनों में रूसी, कड़े ट्रीटमेंट या बीमारी से भी बाल झड़ सकते हैं।') },
    { q: b('Can treatment help with dandruff-related hair fall?', 'क्या रूसी से झड़ते बालों में उपचार मदद करता है?'), a: b('Yes. Our doctors address the scalp condition and guide you on scalp hygiene and hair-care habits that help control dandruff over time.', 'हां। हमारे डॉक्टर सिर की समस्या पर ध्यान देते हैं और सिर की सफ़ाई व बालों की देखभाल की आदतों पर सलाह देते हैं, जिससे समय के साथ रूसी काबू में आती है।') },
    { q: b('Does treatment help with postpartum or stress-related hair fall?', 'क्या डिलीवरी के बाद या तनाव से झड़ते बालों में मदद मिलती है?'), a: b('Yes. This type of hair fall (telogen effluvium) is often temporary, and most patients see shedding reduce gradually as the body recovers, supported by individualised care and diet.', 'हां। इस तरह का झड़ना (टेलोजन एफ्लुवियम) अक्सर अस्थायी होता है, और शरीर के ठीक होने के साथ व्यक्तिगत देखभाल और डाइट से ज़्यादातर मरीज़ों में झड़ना धीरे-धीरे कम होता है।') },
    { q: b('How much hair fall per day is normal?', 'रोज़ कितने बाल झड़ना सामान्य है?'), a: b('Losing about 50 to 100 hairs a day is normal. It becomes a concern when you consistently shed more, see clumps while combing or washing, or your parting or hairline looks visibly thinner over weeks.', 'रोज़ लगभग 50 से 100 बाल झड़ना सामान्य है। चिंता तब है जब लगातार इससे ज़्यादा झड़ें, कंघी या धुलाई में गुच्छे दिखें, या हफ्तों में मांग या हेयरलाइन पतली दिखने लगे।') },
    { q: b('Can nutritional deficiencies and diet cause hair fall?', 'क्या पोषण की कमी से बाल झड़ते हैं?'), a: b('Yes. Low iron (ferritin), protein, vitamin D, B12 and zinc are common, often reversible causes. Crash dieting and skipping meals can also push more hair into the shedding phase.', 'हां। आयरन (फेरिटिन), प्रोटीन, विटामिन D, B12 और ज़िंक की कमी आम और अक्सर ठीक होने वाले कारण हैं। क्रैश डाइट और खाना छोड़ने से भी बाल ज़्यादा झड़ते हैं।') },
    { q: b('Why do I get more hair fall in certain seasons?', 'कुछ मौसमों में बाल ज़्यादा क्यों झड़ते हैं?'), a: b('Many people notice more shedding in certain months, often late monsoon and autumn, as more hairs enter the shedding phase together. It usually settles on its own; persistent heavy shedding is worth evaluating.', 'कई लोगों को कुछ महीनों में, अक्सर मानसून के अंत और शरद में, ज़्यादा झड़ना दिखता है क्योंकि एक साथ ज़्यादा बाल झड़ने के चरण में जाते हैं। यह आमतौर पर अपने आप ठीक हो जाता है; लगातार ज़्यादा झड़ें तो जांच कराएं।') },
  ],

  related: ['dandruff', 'alopecia-areata', 'pcos-pcod', 'skin-allergy'],
}
