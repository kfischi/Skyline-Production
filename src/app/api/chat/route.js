import { NextResponse } from 'next/server';
import { translations } from '@/lib/chatFlow';

// שליחת הודעת ווטסאפ לדנה - פורמט קצר ונקי
async function sendWhatsAppToDana(leadData) {
  try {
    const phoneNumber = '972546203038'; // מספר דנה בפורמט בינלאומי
    
    // פונקציית עזר להסתרת שורות ריקות
    const showIfExists = (label, value) => {
      return value ? `${label}: ${value}` : '';
    };

    // פורמט דאגות (יכול להיות מערך)
    const formatConcerns = (concerns) => {
      if (!concerns) return '';
      if (Array.isArray(concerns)) {
        return concerns.join(', ');
      }
      return concerns;
    };

    // בניית הודעה קצרה וממוקדת
    const parts = [
      `🎉 *פנייה חדשה*`,
      '',
      leadData.name ? `👤 ${leadData.name}` : '',
      leadData.contactDetails ? `📱 ${leadData.contactDetails}` : '',
      '',
      leadData.type ? `💍 ${leadData.type}` : '',
      showIfExists('📅', leadData.dateRange || leadData.hasDate),
      showIfExists('👥', leadData.guestCount),
      '',
      showIfExists('💰', leadData.budget),
      showIfExists('🎨', leadData.style),
      showIfExists('🏛️', leadData.venue),
      '',
      leadData.priority ? `⭐ ${leadData.priority}` : '',
      leadData.concern ? `😟 ${formatConcerns(leadData.concern)}` : '',
      '',
      leadData.extra ? `📝 ${leadData.extra}` : '',
      '',
      `⏰ ${new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}`
    ];

    // הסרת שורות ריקות כפולות
    const message = parts
      .filter(line => line !== undefined && line !== null)
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    // פתיחת ווטסאפ עם ההודעה המוכנה
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    console.log('📱 WhatsApp message:', message);
    console.log('📱 WhatsApp URL:', whatsappUrl);
    
    return { success: true, whatsappUrl };
  } catch (error) {
    console.error('WhatsApp error:', error);
    return { success: false };
  }
}

// שמירת נתונים ל-CRM (מוכן להרחבה)
async function saveLeadData(leadData) {
  const enrichedData = {
    timestamp: new Date().toISOString(),
    source: 'website_chatbot',
    ...leadData,
    // מטא-דאטה נוסף
    metadata: {
      userAgent: 'web',
      createdAt: new Date().toISOString(),
      status: 'new',
      assignedTo: 'Dana'
    }
  };

  // 1. לוג לקונסול (לפיתוח)
  console.log('📊 Lead saved:', enrichedData);
  
  // 2. TODO: אינטגרציות CRM (הוסף לפי הצורך)
  
  // אפשרות A: Google Sheets
  // await saveToGoogleSheets(enrichedData);
  
  // אפשרות B: Airtable
  // await saveToAirtable(enrichedData);
  
  // אפשרות C: MongoDB
  // await saveToMongoDB(enrichedData);
  
  // אפשרות D: Salesforce / HubSpot
  // await saveToCRM(enrichedData);
  
  // אפשרות E: Webhook לשירות חיצוני
  // await fetch('https://your-crm.com/api/leads', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(enrichedData)
  // });
  
  return { success: true, data: enrichedData };
}

// פונקציות עזר ל-CRM (דוגמאות להרחבה עתידית)

// async function saveToGoogleSheets(data) {
//   const { GoogleSpreadsheet } = require('google-spreadsheet');
//   const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
//   await doc.useServiceAccountAuth({
//     client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//     private_key: process.env.GOOGLE_PRIVATE_KEY,
//   });
//   await doc.loadInfo();
//   const sheet = doc.sheetsByIndex[0];
//   await sheet.addRow(data);
// }

// async function saveToAirtable(data) {
//   const Airtable = require('airtable');
//   const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
//   await base('Leads').create([{ fields: data }]);
// }

// async function saveToMongoDB(data) {
//   const { MongoClient } = require('mongodb');
//   const client = new MongoClient(process.env.MONGODB_URI);
//   await client.connect();
//   const db = client.db('skyline');
//   await db.collection('leads').insertOne(data);
//   await client.close();
// }

export async function POST(req) {
  try {
    const { leadData } = await req.json();

    // אם זה שליחת פרטים סופית
    if (leadData) {
      console.log('📊 Original leadData:', leadData);
      
      // תרגום הנתונים לעברית
      const translatedData = {
        name: leadData.name || '',
        type: translations.type[leadData.type] || leadData.type || 'לא צוין',
        hasDate: leadData.hasDate ? translations.hasDate[leadData.hasDate] : '',
        dateRange: leadData.dateRange ? translations.dateRange[leadData.dateRange] : '',
        guestCount: translations.guestCount[leadData.guestCount] || leadData.guestCount || '',
        style: translations.style[leadData.style] || leadData.style || '',
        budget: translations.budget[leadData.budget] || leadData.budget || '',
        priority: translations.priority[leadData.priority] || leadData.priority || '',
        // תמיכה בדאגות מרובות
        concern: Array.isArray(leadData.concern) 
          ? leadData.concern.map(c => translations.concern[c] || c).join(', ')
          : (translations.concern[leadData.concern] || leadData.concern || ''),
        venue: leadData.venue ? translations.venue[leadData.venue] : '',
        extra: leadData.extra || '',
        contactMethod: translations.contactMethod[leadData.contactMethod] || leadData.contactMethod || '',
        contactDetails: leadData.contactDetails || ''
      };

      console.log('📊 Translated data:', translatedData);

      // שליחת ווטסאפ לדנה
      const whatsappResult = await sendWhatsAppToDana(translatedData);
      
      // שמירת נתונים ללוג / CRM עתידי
      await saveLeadData({
        ...leadData,
        translated: translatedData
      });

      return NextResponse.json({ 
        success: true,
        message: 'הפרטים נשלחו בהצלחה!',
        whatsappUrl: whatsappResult.whatsappUrl
      });
    }

    return NextResponse.json({ success: false });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { 
        success: false,
        message: "מתנצל, יש בעיה טכנית. אפשר ליצור קשר ישירות בווטסאפ: 052-620-3038" 
      },
      { status: 500 }
    );
  }
}
