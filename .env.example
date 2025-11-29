# 🤖 הוראות התקנת צ'אטבוט Gemini

## שלב 1: התקן את הספרייה

בטרמינל, הרץ:

```bash
npm install @google/generative-ai
```

## שלב 2: קבל מפתח API

1. גש ל: https://makersuite.google.com/app/apikey
2. לחץ על "Create API Key"
3. העתק את המפתח

## שלב 3: צור קובץ .env.local

בתיקייה הראשית של הפרויקט, צור קובץ בשם `.env.local` והדבק:

```
GEMINI_API_KEY=YOUR_API_KEY_HERE
```

(החלף את `YOUR_API_KEY_HERE` במפתח שלך)

## שלב 4: העלה את הקבצים

העלה את כל הקבצים הבאים:

### קבצים חדשים:
- `/app/api/chat/route.js` - API route
- `/components/layout/ChatBot.jsx` - הקומפוננטה
- `/components/layout/ChatBot.module.css` - CSS
- `/app/layout.jsx` - מעודכן עם ChatBot
- `/package.json` - מעודכן עם הספרייה

## שלב 5: בדיקה

1. הרץ `npm install` (אם צריך)
2. הרץ `npm run dev`
3. פתח את האתר
4. אמור לראות כפתור זהב בפינה שמאלית תחתונה!

## ⚠️ חשוב!

- **אל תעלה את קובץ `.env.local` ל-GitHub!**
- ודא ש-`.env.local` נמצא ב-`.gitignore`

## 🎨 התאמה אישית:

אם רוצה לשנות צבעים/טקסטים:
- פתח את `ChatBot.jsx` ושנה את ההודעה הראשונה
- פתח את `route.js` ושנה את `systemPrompt`

## 📱 רספונסיבי

הצ'אטבוט מותאם אוטומטית למובייל וטאבלט!

---

**מוכן! הצ'אטבוט אמור לעבוד מושלם! 🚀**
