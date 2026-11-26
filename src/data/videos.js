// Videos — files public/videos/ mein hain (MP4 + poster JPG).
// Nayi video jodni ho: file public/videos/ mein daalo aur yahan ek line jodo.
// vertical: true = reel/short (9:16) video.

const b = (en, hi) => ({ en, hi })

export const V = {
  patientStories: { tag: b('Patient experience', 'मरीज़ों का अनुभव'), desc: b('Patients from Ghaziabad, Kanpur and other cities share, in their own words, what their problem was and how their treatment went.', 'गाज़ियाबाद, कानपुर और दूसरे शहरों के मरीज़ अपने शब्दों में बताते हैं कि उन्हें क्या परेशानी थी और इलाज का अनुभव कैसा रहा।'), src: '/videos/patient-stories.mp4', poster: '/videos/patient-stories.jpg', title: b('Patients share their experience', 'मरीज़ों ने बताया अपना अनुभव'), duration: '1:12' },
  carePilesReviews: { tag: b('Patient reviews', 'मरीज़ों की राय'), desc: b('Patients from Kolkata, Lucknow and more talk about using Care Piles capsule & cream, and what the course includes.', 'कोलकाता, लखनऊ और दूसरे शहरों के मरीज़ केयर पाइल्स कैप्सूल और क्रीम के अपने अनुभव बताते हैं, साथ में जानें कोर्स में क्या मिलता है।'), src: '/videos/care-piles-reviews.mp4', poster: '/videos/care-piles-reviews.jpg', title: b('Care Piles — patient reviews', 'केयर पाइल्स — मरीज़ों की राय'), duration: '5:10' },
  constipationTalk: { tag: b('Doctor advice', 'डॉक्टर की सलाह'), desc: b('A conversation with our doctor about constipation and its Ayurvedic treatment.', 'हमारे डॉक्टर से कब्ज और उसके आयुर्वेदिक उपचार पर बातचीत।'), src: '/videos/constipation-doctor-talk.mp4', poster: '/videos/constipation-doctor-talk.jpg', title: b('Doctor on constipation & its care', 'कब्ज और उसकी देखभाल पर डॉक्टर की बात'), duration: '0:52' },
  pilesKillerInterview: { tag: b('Doctor interview', 'डॉक्टर से बातचीत'), desc: b('A conversation with our doctor about Piles Killer syrup & cream.', 'पाइल्स किलर सिरप और क्रीम के बारे में हमारे डॉक्टर से बातचीत।'), src: '/videos/piles-killer-interview.mp4', poster: '/videos/piles-killer-interview.jpg', title: b('Piles Killer Syrup & Cream — doctor interview', 'पाइल्स किलर सिरप और क्रीम — डॉक्टर से बातचीत'), duration: '2:28' },
  pilesKillerExplainer: { tag: b('Know more', 'जानकारी'), desc: b('Piles can affect both men and women. Learn about care at home and the habits that keep bowel movements regular.', 'बवासीर पुरुष और महिला दोनों को हो सकती है। जानें घर बैठे देखभाल और पेट साफ़ रखने की सही आदतें।'), src: '/videos/piles-killer-explainer.mp4', poster: '/videos/piles-killer-explainer.jpg', title: b('Piles treatment at home', 'घर बैठे बवासीर का उपचार'), duration: '0:50' },
  pilesNews: { tag: b('Discussion', 'चर्चा'), desc: b('A doctor discusses the common symptoms of piles, fissure and fistula, and when to seek treatment.', 'डॉक्टर के साथ बवासीर, फिशर और फिस्टुला के आम लक्षणों और सही समय पर इलाज की चर्चा।'), src: '/videos/piles-news.mp4', poster: '/videos/piles-news.jpg', title: b('Piles, fissure & fistula — doctor discussion', 'बवासीर, फिशर, फिस्टुला — डॉक्टर से चर्चा'), duration: '2:24', square: true },
  freeSalah: { tag: b('Free consultation', 'फ्री सलाह'), desc: b('Talk to our team for free — call +91 97117 66755.', 'हमारी टीम से मुफ़्त सलाह लें — कॉल करें +91 97117 66755'), src: '/videos/jj-free-salah.mp4', poster: '/videos/jj-free-salah.jpg', title: b('Free consultation — call today', 'फ्री सलाह — आज ही कॉल करें'), duration: '0:34', vertical: true },
  pilesReel: { tag: b('Reel', 'रील'), desc: b('Pain or a swelling? Know more about piles, fissure and fistula.', 'दर्द या फुंसी जैसी परेशानी? जानें बवासीर, फिशर और फिस्टुला के बारे में।'), src: '/videos/piles-reel.mp4', poster: '/videos/piles-reel.jpg', title: b('Piles, fissure, fistula — what to do?', 'बवासीर, फिशर, फिस्टुला — क्या करें?'), duration: '0:33', vertical: true },
}

// ---------- Website (Home page) ----------
export const HOME_VIDEOS = {
  eyebrow: b('Videos', 'वीडियो'),
  title: b('Watch & learn from our doctors and patients', 'हमारे डॉक्टरों और मरीज़ों से जानें'),
  sub: b('Short videos where our doctors explain common problems and patients share their experience. Tap any video to play.', 'छोटे वीडियो जिनमें हमारे डॉक्टर आम बीमारियों के बारे में समझाते हैं और मरीज़ अपना अनुभव बताते हैं। देखने के लिए किसी भी वीडियो पर टैप करें।'),
  items: [V.constipationTalk, V.patientStories, V.pilesKillerInterview, V.carePilesReviews, V.freeSalah, V.pilesReel],
}

// ---------- Landing page (Piles) ----------
export const LP_STORY_VIDEOS = {
  eyebrow: b('Patient stories', 'मरीज़ों के अनुभव'),
  title: b('Hear it from our patients', 'सुनिए हमारे मरीज़ों से'),
  sub: b('Real people, in their own words — what they went through and how they felt after treatment.', 'असली लोग, उनके अपने शब्दों में — उन्हें क्या परेशानी थी और इलाज के बाद कैसा महसूस हुआ।'),
  items: [V.patientStories, V.carePilesReviews],
}

export const LP_INFO_VIDEOS = {
  eyebrow: b('Know more', 'और जानें'),
  title: b('Piles treatment explained in videos', 'वीडियो में जानें बवासीर का उपचार'),
  sub: b('Symptoms, home care and treatment options — explained simply by our doctors.', 'लक्षण, घर पर देखभाल और उपचार के विकल्प — हमारे डॉक्टरों से आसान भाषा में।'),
  items: [V.freeSalah, V.pilesReel, V.pilesKillerExplainer, V.pilesKillerInterview, V.pilesNews],
}
