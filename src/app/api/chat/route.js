import { NextResponse } from 'next/server';
import { translations } from '@/lib/chatFlow';

// שליחת הודעת ווטסאפ לדנה
async function sendWhatsAppToDana(leadData) {
  try {
    const phoneNumber = '972546203038'; // מספר דנה בפורמט בינלאומי
    
    const message = `
🎉 *פנייה חדשה מהאתר!*

📋 *סוג אירוע:* ${leadData.type}

${leadData.hasDate ? `📅 *תאריך:* ${leadData.dateRange || leadData.hasDate}\n` : ''}
👥 *אורחים:* ${leadData.guestCount}

🎨 *סטייל:* ${leadData.style}

💰 *תקציב:* ${leadData.budget}

⭐ *חשוב להם:* ${leadData.priority}

🤔 *דאגה:* ${leadData.concern}

${leadData.venue ? `🏛️ *מקום:* ${leadData.venue}\n` : ''}
${leadData.extra ? `📝 *הערות:*\n${leadData.extra}\n` : ''}
---
📞 *יצירת קשר:* ${leadData.contactMethod}
✉️ *פרטים:* ${leadData.contactDetails}

⏰ ${new Date().toLocaleString('he-IL')}
    `.trim();

    // פתיחת ווטסאפ עם ההודעה המוכנה
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    console.log('📱 WhatsApp URL:', whatsappUrl);
    
    return { success: true, whatsappUrl };
  } catch (error) {
    console.error('WhatsApp error:', error);
    return { success: false };
  }
}

// שמירת נתונים (מוכן ל-CRM עתידי)
async function saveLeadData(leadData) {
  // לוג לקונסול
  console.log('📊 Lead saved:', {
    timestamp: new Date().toISOString(),
    ...leadData
  });
  
  // TODO: כאן תוכל להוסיף בעתיד:
  // - שמירה ל-Google Sheets
  // - שמירה ל-Airtable
  // - שמירה ל-MongoDB
  // - שליחה ל-CRM חיצוני (Salesforce, HubSpot, וכו')
  
  return true;
}

export async function POST(req) {
  try {
    const { leadData } = await req.json();

    // אם זה שליחת פרטים סופית
    if (leadData) {
      // תרגום הנתונים לעברית
      const translatedData = {
        type: translations.type[leadData.type] || leadData.type,
        hasDate: leadData.hasDate ? translations.hasDate[leadData.hasDate] : '',
        dateRange: leadData.dateRange ? translations.dateRange[leadData.dateRange] : '',
        guestCount: translations.guestCount[leadData.guestCount] || leadData.guestCount,
        style: translations.style[leadData.style] || leadData.style,
        budget: translations.budget[leadData.budget] || leadData.budget,
        priority: translations.priority[leadData.priority] || leadData.priority,
        concern: translations.concern[leadData.concern] || leadData.concern,
        venue: leadData.venue ? translations.venue[leadData.venue] : '',
        extra: leadData.extra || '',
        contactMethod: translations.contactMethod[leadData.contactMethod] || leadData.contactMethod,
        contactDetails: leadData.contactDetails || ''
      };

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
