# 🔌 מדריך אינטגרציה עם CRM

## 📋 תוכן עניינים
1. [איך זה עובד עכשיו](#איך-זה-עובד-עכשיו)
2. [אפשרויות CRM](#אפשרויות-crm)
3. [הוראות התקנה](#הוראות-התקנה)
4. [דוגמאות קוד](#דוגמאות-קוד)

---

## 🎯 איך זה עובד עכשיו

### 1. המשתמש ממלא את הצ'אט
```
היי! זאת דנה AI...
↓
שאלות (סוג אירוע, אורחים, תקציב...)
↓
פרטי יצירת קשר
↓
כפתור "שלח לדנה בווטסאפ"
```

### 2. מה קורה מאחורי הקלעים:
```javascript
// ChatBot.jsx
handleTextSubmit() → 
  fetch('/api/chat', { leadData }) →
    // route.js
    sendWhatsAppToDana() → פותח ווטסאפ
    saveLeadData() → שומר ללוג (מוכן ל-CRM!)
```

### 3. מה נשמר:
```javascript
{
  type: 'wedding',
  hasDate: 'yes',
  dateRange: 'april-june',
  guestCount: '100-200',
  style: 'luxury',
  budget: '300k-400k',
  priority: 'peace_of_mind',
  concern: ['time', 'vendors'], // בחירה מרובה!
  venue: 'need_help',
  extra: 'רוצים משהו עם נוף לים',
  contactMethod: 'whatsapp',
  contactDetails: '0521234567',
  // מטא-דאטה
  timestamp: '2025-01-28T15:30:45.123Z',
  source: 'website_chatbot',
  status: 'new',
  assignedTo: 'Dana'
}
```

---

## 🗄️ אפשרויות CRM

### ✅ מומלצות (קל להתקנה):

#### 1. **Google Sheets** 
- ⭐ הכי פשוט להתחיל!
- 💰 חינם
- 📊 קל לצפות ולערוך
- 🔗 [מדריך התקנה](#google-sheets)

#### 2. **Airtable**
- 💎 ממשק יפה וחזק
- 💰 חינם עד 1,200 רשומות
- 📱 אפליקציה למובייל
- 🔗 [מדריך התקנה](#airtable)

#### 3. **MongoDB Atlas**
- 🚀 Database מקצועי
- 💰 חינם עד 512MB
- ☁️ ענן מנוהל
- 🔗 [מדריך התקנה](#mongodb)

### 💼 מתקדמות:

#### 4. **Salesforce**
- 🏢 CRM מלא
- 💰 בתשלום
- 🔗 [מדריך התקנה](#salesforce)

#### 5. **HubSpot**
- 📧 Marketing + CRM
- 💰 יש חינמי מוגבל
- 🔗 [מדריך התקנה](#hubspot)

---

## 📦 הוראות התקנה

### Google Sheets

#### שלב 1: צור Google Sheet
1. עבור ל-[Google Sheets](https://sheets.google.com)
2. צור גיליון חדש: "Skyline Leads"
3. הוסף כותרות בשורה ראשונה:
   ```
   timestamp | type | hasDate | dateRange | guestCount | style | budget | priority | concern | venue | extra | contactMethod | contactDetails | status
   ```

#### שלב 2: צור Service Account
1. עבור ל-[Google Cloud Console](https://console.cloud.google.com)
2. צור פרויקט חדש
3. הפעל את Google Sheets API
4. צור Service Account:
   - IAM & Admin → Service Accounts → Create
   - שמור את האימייל
   - צור Key (JSON)
   - שמור את ה-JSON

#### שלב 3: שתף את הגיליון
1. חזור ל-Google Sheet שלך
2. Share → הדבק את אימייל ה-Service Account
3. תן הרשאות Editor

#### שלב 4: הגדר Environment Variables
```bash
# .env.local
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

#### שלב 5: התקן packages
```bash
npm install google-spreadsheet google-auth-library
```

#### שלב 6: עדכן את route.js
```javascript
// app/api/chat/route.js
import { saveToGoogleSheets } from '@/lib/crm-integrations';

async function saveLeadData(leadData) {
  // ... existing code ...
  
  // הוסף:
  await saveToGoogleSheets(enrichedData);
  
  return { success: true, data: enrichedData };
}
```

---

### Airtable

#### שלב 1: צור Base
1. עבור ל-[Airtable](https://airtable.com)
2. צור Base חדש: "Skyline CRM"
3. צור Table: "Leads"
4. הוסף שדות:
   - Created (Date)
   - Event Type (Single select)
   - Guest Count (Single select)
   - Budget (Single select)
   - Contact Details (Email/Phone)
   - Status (Single select: New, Contacted, Qualified, Won, Lost)
   - Notes (Long text)

#### שלב 2: קבל API Key
1. Account → API
2. העתק את ה-Personal Access Token

#### שלב 3: קבל Base ID
1. עבור ל-[Airtable API Docs](https://airtable.com/api)
2. בחר את ה-Base שלך
3. העתק את ה-Base ID מה-URL

#### שלב 4: הגדר .env.local
```bash
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id
```

#### שלב 5: התקן
```bash
npm install airtable
```

#### שלב 6: עדכן route.js
```javascript
import { saveToAirtable } from '@/lib/crm-integrations';

async function saveLeadData(leadData) {
  await saveToAirtable(enrichedData);
  return { success: true };
}
```

---

### MongoDB

#### שלב 1: צור Cluster
1. עבור ל-[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. צור חשבון חינם
3. Build a Database → Free Tier
4. בחר Provider + Region (קרוב לישראל: Frankfurt)

#### שלב 2: הגדר Access
1. Database Access → Add User
2. שמור Username + Password
3. Network Access → Add IP Address → Allow from Anywhere (0.0.0.0/0)

#### שלב 3: קבל Connection String
1. Cluster → Connect → Connect your application
2. העתק את ה-Connection String
3. החלף `<password>` בסיסמה שלך

#### שלב 4: הגדר .env.local
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
```

#### שלב 5: התקן
```bash
npm install mongodb
```

#### שלב 6: עדכן route.js
```javascript
import { saveToMongoDB } from '@/lib/crm-integrations';

async function saveLeadData(leadData) {
  await saveToMongoDB(enrichedData);
  return { success: true };
}
```

---

## 🚀 שימוש מתקדם

### שילוב מספר מערכות:
```javascript
async function saveLeadData(leadData) {
  const enrichedData = { ...leadData, timestamp: new Date() };
  
  // שמור בכל המקומות במקביל
  await Promise.all([
    saveToGoogleSheets(enrichedData),
    saveToAirtable(enrichedData),
    sendEmailNotification(enrichedData)
  ]);
  
  return { success: true };
}
```

### Webhook לכל מערכת:
```javascript
async function saveLeadData(leadData) {
  // שלח ל-Zapier/Make/n8n
  await sendToWebhook(leadData, process.env.WEBHOOK_URL);
  return { success: true };
}
```

---

## 📊 דוגמה מלאה - Google Sheets

```javascript
// lib/crm-integrations.js
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function saveToGoogleSheets(leadData) {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(
    process.env.GOOGLE_SHEET_ID, 
    serviceAccountAuth
  );
  
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  
  await sheet.addRow({
    timestamp: new Date().toISOString(),
    type: leadData.type,
    guestCount: leadData.guestCount,
    budget: leadData.budget,
    contactDetails: leadData.contactDetails,
    status: 'new'
  });
  
  return { success: true };
}
```

---

## ✅ Checklist

- [ ] בחרת מערכת CRM
- [ ] יצרת חשבון
- [ ] קיבלת API credentials
- [ ] הוספת למשתני .env.local
- [ ] התקנת packages הנדרשים
- [ ] עדכנת את route.js
- [ ] בדקת שהנתונים נשמרים
- [ ] יצרת backup (MongoDB + Google Sheets?)

---

## 🆘 תמיכה

בעיות? בדוק:
1. משתני הסביבה נכונים ב-.env.local
2. הרשאות API נכונות
3. Logs בקונסול (npm run dev)
4. Network בדפדפן (F12 → Network)

---

**מוכן להתחיל! בחר CRM והתקן! 🚀**
