# WeClinic Ayurveda — React Website

## Chalana (pehli baar)
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
```

## Google Sheet (forms ka data)
1. Google Sheet banao → Extensions → Apps Script → `apps-script/Code.gs` paste karo.
2. `setup` function Run karo (Allow karo; "unverified app" aaye to Advanced → Go to … (unsafe)).
3. Deploy → New deployment → Web app (Execute as **Me**, Access **Anyone**) → URL copy karo.
4. Project folder mein `.env` file banao (`.env.example` copy karke):
   `VITE_SHEET_API=https://script.google.com/macros/s/XXXX/exec`
5. `npm run dev` dobara chalao. (URL na ho to form "demo mode" mein chalta hai — data kahin nahi jaata.)

## Photos kahan daalein
| Photo | Path |
|---|---|
| Clinic building | `public/images/clinic.jpg` |
| Sticky call bar ki doctor photo (transparent PNG best) | `public/images/call-doctor.png` |
| Doctors (aage) | `public/images/doctors/<id>.jpg` |

Photo na ho to site apne aap placeholder dikhati hai.

## Text kahan badlein
- Phone, email, address → `src/config.js`
- Header / footer / form ka text → `src/data/ui.js`
- Home page ka text → `src/data/home.js`
- Departments aur rog → `src/data/departments.js`

Har text `{ en: '...', hi: '...' }` format mein hai.
