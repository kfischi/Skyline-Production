// 🔌 CRM Integrations - דוגמאות להתממשקות
// קובץ זה מכיל דוגמאות מוכנות לחיבור עם מערכות CRM שונות

// ============================================
// 📊 Google Sheets Integration
// ============================================
export async function saveToGoogleSheets(leadData) {
  try {
    const { GoogleSpreadsheet } = require('google-spreadsheet');
    const { JWT } = require('google-auth-library');

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    
    const sheet = doc.sheetsByIndex[0]; // גיליון ראשון
    
    await sheet.addRow({
      timestamp: new Date().toISOString(),
      type: leadData.type,
      hasDate: leadData.hasDate,
      dateRange: leadData.dateRange,
      guestCount: leadData.guestCount,
      style: leadData.style,
      budget: leadData.budget,
      priority: leadData.priority,
      concern: leadData.concern,
      venue: leadData.venue,
      extra: leadData.extra,
      contactMethod: leadData.contactMethod,
      contactDetails: leadData.contactDetails,
      status: 'new'
    });

    console.log('✅ Saved to Google Sheets');
    return { success: true };
  } catch (error) {
    console.error('❌ Google Sheets error:', error);
    return { success: false, error };
  }
}

// ============================================
// 📋 Airtable Integration
// ============================================
export async function saveToAirtable(leadData) {
  try {
    const Airtable = require('airtable');
    
    const base = new Airtable({ 
      apiKey: process.env.AIRTABLE_API_KEY 
    }).base(process.env.AIRTABLE_BASE_ID);

    await base('Leads').create([
      {
        fields: {
          'Created': new Date().toISOString(),
          'Event Type': leadData.type,
          'Date Status': leadData.hasDate,
          'Date Range': leadData.dateRange,
          'Guest Count': leadData.guestCount,
          'Style': leadData.style,
          'Budget': leadData.budget,
          'Priority': leadData.priority,
          'Concerns': leadData.concern,
          'Venue': leadData.venue,
          'Notes': leadData.extra,
          'Contact Method': leadData.contactMethod,
          'Contact Details': leadData.contactDetails,
          'Status': 'New',
          'Assigned To': 'Dana'
        }
      }
    ]);

    console.log('✅ Saved to Airtable');
    return { success: true };
  } catch (error) {
    console.error('❌ Airtable error:', error);
    return { success: false, error };
  }
}

// ============================================
// 🍃 MongoDB Integration
// ============================================
export async function saveToMongoDB(leadData) {
  try {
    const { MongoClient } = require('mongodb');
    
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    
    const db = client.db('skyline_production');
    const collection = db.collection('leads');
    
    const result = await collection.insertOne({
      ...leadData,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'new',
      assignedTo: 'Dana',
      source: 'website_chatbot'
    });

    await client.close();
    
    console.log('✅ Saved to MongoDB:', result.insertedId);
    return { success: true, id: result.insertedId };
  } catch (error) {
    console.error('❌ MongoDB error:', error);
    return { success: false, error };
  }
}

// ============================================
// 🌐 Webhook Integration (Generic)
// ============================================
export async function sendToWebhook(leadData, webhookUrl) {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.WEBHOOK_SECRET}`
      },
      body: JSON.stringify({
        event: 'new_lead',
        timestamp: new Date().toISOString(),
        data: leadData
      })
    });

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.status}`);
    }

    console.log('✅ Sent to webhook');
    return { success: true };
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return { success: false, error };
  }
}

// ============================================
// 💼 Salesforce Integration (דוגמה)
// ============================================
export async function saveToSalesforce(leadData) {
  try {
    const jsforce = require('jsforce');
    
    const conn = new jsforce.Connection({
      loginUrl: process.env.SALESFORCE_LOGIN_URL
    });

    await conn.login(
      process.env.SALESFORCE_USERNAME,
      process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_TOKEN
    );

    const result = await conn.sobject('Lead').create({
      FirstName: '', // מהפרטים
      LastName: '', // מהפרטים
      Company: 'Skyline Inquiry',
      Email: leadData.contactMethod === 'email' ? leadData.contactDetails : '',
      Phone: leadData.contactMethod === 'phone' ? leadData.contactDetails : '',
      LeadSource: 'Website Chatbot',
      Description: `
Event Type: ${leadData.type}
Guests: ${leadData.guestCount}
Budget: ${leadData.budget}
Style: ${leadData.style}
Priority: ${leadData.priority}
Concerns: ${leadData.concern}
Notes: ${leadData.extra}
      `.trim()
    });

    console.log('✅ Saved to Salesforce:', result.id);
    return { success: true, id: result.id };
  } catch (error) {
    console.error('❌ Salesforce error:', error);
    return { success: false, error };
  }
}

// ============================================
// 📧 Email Notification (Optional)
// ============================================
export async function sendEmailNotification(leadData) {
  try {
    // דוגמה עם SendGrid
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: 'info@skylineproductions.com',
      from: 'noreply@skylineproductions.com',
      subject: `🎉 פנייה חדשה - ${leadData.type}`,
      html: `
        <h2>פנייה חדשה מהאתר!</h2>
        <p><strong>סוג אירוע:</strong> ${leadData.type}</p>
        <p><strong>אורחים:</strong> ${leadData.guestCount}</p>
        <p><strong>תקציב:</strong> ${leadData.budget}</p>
        <p><strong>יצירת קשר:</strong> ${leadData.contactDetails}</p>
        <hr>
        <p>${leadData.extra}</p>
      `
    });

    console.log('✅ Email sent');
    return { success: true };
  } catch (error) {
    console.error('❌ Email error:', error);
    return { success: false, error };
  }
}
