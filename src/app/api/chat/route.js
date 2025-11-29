import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req) {
  try {
    const { message } = await req.json();

    // האישיות של הבוט
    const systemPrompt = `
      אתה העוזר האישי היוקרתי והחכם של חברת ההפקות "Skyline Productions" בבעלות דנה ישראלי.
      
      הטון שלך:
      - יוקרתי, אדיב, קצר וקולע (עד 3 משפטים).
      - אתה משדר מקצועיות ורוגע (כמו מפיק על).
      - עונה תמיד בעברית.

      הידע שלך:
      1. דנה ישראלי היא מפיקה עם ניסיון של עשורים, שמתמחה בחתונות קונספט, אירועי ענק וניהול משברים.
      2. היתרון שלנו: שקט נפשי. אנחנו דואגים להכל מא' ועד ת' (ספקים, עיצוב, לו"ז).
      3. אירועי דגל: "Marry Land" (פסטיבל חתונות), חתונות ג'ונגל אורבני, אירועי All Black Metal.
      4. טלפון דנה: 052-620-3038
      5. אימייל: info@skylineproductions.com
      
      המטרה שלך:
      לענות תשובות קצרות ומועילות, ולנסות בעדינות להוביל את הלקוח לשיחה בווטסאפ או להשארת פרטים.
      אל תיתן מחירים מדויקים (תגיד שזה תלוי במורכבות ההפקה).
    `;

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent([
      systemPrompt,
      `שאלת הלקוח: ${message}`,
    ]);

    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { 
        reply: "אני מתנצל, יש כרגע עומס קל במערכת. אשמח אם תשלחו הודעה לדנה בווטסאפ: 052-620-3038" 
      },
      { status: 500 }
    );
  }
}
