// src/lib/chatFlow.js

export const chatFlow = {
  start: {
    id: 'start',
    message: 'היי! אני עוזר לתכנן אירועים עם דנה מ-Skyline.\nבואו נתחיל - איזה אירוע מתכננים?',
    buttons: [
      { text: 'חתונה 💍', value: 'wedding', next: 'hasDate' },
      { text: 'אירוע חברה 🎉', value: 'corporate', next: 'hasDate' },
      { text: 'מסיבה פרטית 🎊', value: 'party', next: 'hasDate' },
      { text: 'אחר 📋', value: 'other', next: 'hasDate' }
    ]
  },

  hasDate: {
    id: 'hasDate',
    message: 'נהדר. יש לכם כבר תאריך?',
    buttons: [
      { text: 'כן, יש תאריך 📅', value: 'yes', next: 'dateRange' },
      { text: 'לא, אנחנו גמישים 🤷', value: 'flexible', next: 'guestCount' },
      { text: 'עדיין לא החלטנו ⏳', value: 'undecided', next: 'guestCount' }
    ]
  },

  dateRange: {
    id: 'dateRange',
    message: 'באיזה חודש בערך?',
    buttons: [
      { text: 'ינואר-מרץ ❄️', value: 'q1', next: 'guestCount' },
      { text: 'אפריל-יוני 🌸', value: 'q2', next: 'guestCount' },
      { text: 'יולי-ספטמבר ☀️', value: 'q3', next: 'guestCount' },
      { text: 'אוקטובר-דצמבר 🍂', value: 'q4', next: 'guestCount' }
    ]
  },

  guestCount: {
    id: 'guestCount',
    message: 'כמה אורחים בערך?',
    buttons: [
      { text: 'עד 100 👥', value: '0-100', next: 'style' },
      { text: '100-200 👥👥', value: '100-200', next: 'style' },
      { text: '200-300 👥👥👥', value: '200-300', next: 'style' },
      { text: 'מעל 300 👥👥👥👥', value: '300+', next: 'style' },
      { text: 'עדיין לא יודעים 🤔', value: 'unknown', next: 'style' }
    ]
  },

  style: {
    id: 'style',
    message: 'איך אתם רואים את האירוע?',
    buttons: [
      { text: 'יוקרתי ואלגנטי ✨', value: 'luxury', next: 'budget' },
      { text: 'טבעי ובוהמי 🌿', value: 'natural', next: 'budget' },
      { text: 'ייחודי וקונספטואלי 🎨', value: 'unique', next: 'budget' },
      { text: 'מינימליסטי ומודרני ⚫', value: 'minimal', next: 'budget' },
      { text: 'צבעוני ושמח 🌈', value: 'colorful', next: 'budget' },
      { text: 'עדיין לא בטוחים 💭', value: 'unsure', next: 'budget' }
    ]
  },

  budget: {
    id: 'budget',
    message: 'יש לכם מושג על תקציב?',
    buttons: [
      { text: 'עד 200K 💰', value: '0-200k', next: 'priority' },
      { text: '200K-400K 💰💰', value: '200k-400k', next: 'priority' },
      { text: '400K-600K 💰💰💰', value: '400k-600k', next: 'priority' },
      { text: 'מעל 600K 💰💰💰💰', value: '600k+', next: 'priority' },
      { text: 'נדבר על זה בהמשך 🤝', value: 'later', next: 'priority' }
    ]
  },

  priority: {
    id: 'priority',
    message: 'מה הכי חשוב לכם?',
    buttons: [
      { text: 'שקט נפשי - נדאג לכל דבר 😌', value: 'peace', next: 'concern' },
      { text: 'ניהול מקצועי 📊', value: 'management', next: 'concern' },
      { text: 'קונספט ייחודי 🎨', value: 'concept', next: 'concern' },
      { text: 'ספקים אמינים 🤝', value: 'vendors', next: 'concern' },
      { text: 'תכנון מדויק 📝', value: 'planning', next: 'concern' }
    ]
  },

  concern: {
    id: 'concern',
    message: 'מה הכי מדאיג אתכם?\n(אפשר לבחור כמה תשובות)',
    type: 'multiSelect',
    buttons: [
      { text: 'אין זמן לנהל הכל ⏰', value: 'time' },
      { text: 'פחד שמשהו ישתבש 😰', value: 'fear' },
      { text: 'לא יודעים מאיפה להתחיל 🤷', value: 'start' },
      { text: 'רוצים משהו שונה 🌟', value: 'different' },
      { text: 'קשה למצוא ספקים טובים 🔍', value: 'vendors' }
    ],
    next: 'venue'
  },

  venue: {
    id: 'venue',
    message: 'יש לכם כבר מקום לאירוע?',
    buttons: [
      { text: 'כן, יש מקום ✅', value: 'yes', next: 'freeText' },
      { text: 'לא, צריכים עזרה 🏛️', value: 'no', next: 'freeText' },
      { text: 'רוצים משהו שונה 🌳', value: 'different', next: 'freeText' }
    ],
    conditional: (data) => data.type === 'wedding' || data.type === 'party'
  },

  freeText: {
    id: 'freeText',
    message: 'יופי! יש עוד משהו שחשוב לכם לציין?\n(אפשר גם לדלג)',
    type: 'text',
    placeholder: 'כתבו כאן...',
    skipButton: true,
    next: 'name'
  },

  name: {
    id: 'name',
    message: 'מה השם שלכם? 😊',
    type: 'text',
    placeholder: 'שם מלא',
    next: 'contactMethod'
  },

  contactMethod: {
    id: 'contactMethod',
    message: 'מצוין! דנה תחזור אליכם בהקדם.\nאיך נוח לכם?',
    buttons: [
      { text: 'שיחת טלפון 📞', value: 'phone', next: 'contactDetails' },
      { text: 'ווטסאפ 💬', value: 'whatsapp', next: 'contactDetails' },
      { text: 'אימייל 📧', value: 'email', next: 'contactDetailsEmail' }
    ]
  },

  contactDetails: {
    id: 'contactDetails',
    message: 'מה מספר הטלפון שלכם?',
    type: 'phone',
    placeholder: '05X-XXXXXXX',
    next: 'final'
  },

  contactDetailsEmail: {
    id: 'contactDetailsEmail',
    message: 'מה האימייל שלכם?',
    type: 'email',
    placeholder: 'email@example.com',
    next: 'final'
  },

  final: {
    id: 'final',
    message: 'תודה רבה! קיבלנו את הפרטים 📨\n\nתודה ששיתפתם אותי. אני לוקחת ברצינות את העבודה שלי וחשוב לי לקבל פניות אמיתיות.\n\nדנה תחזור אליכם בהקדם.\n\nבינתיים אפשר:\n• לראות פרויקטים שעשינו 🎬\n• ללחוץ על כפתור הווטסאפ למטה 💬\n• לקרוא על השיטה שלנו 📖\n\nנשמח לארגן לכם אירוע מושלם!',
    type: 'final'
  }
};

// תרגום ערכים לעברית
export const translations = {
  type: {
    wedding: 'חתונה',
    corporate: 'אירוע חברה',
    party: 'מסיבה פרטית',
    other: 'אחר'
  },
  hasDate: {
    yes: 'יש תאריך',
    flexible: 'גמישים',
    undecided: 'עדיין לא החלטנו'
  },
  dateRange: {
    q1: 'ינואר-מרץ',
    q2: 'אפריל-יוני',
    q3: 'יולי-ספטמבר',
    q4: 'אוקטובר-דצמבר'
  },
  guestCount: {
    '0-100': 'עד 100 אורחים',
    '100-200': '100-200 אורחים',
    '200-300': '200-300 אורחים',
    '300+': 'מעל 300 אורחים',
    unknown: 'לא יודעים'
  },
  style: {
    luxury: 'יוקרתי ואלגנטי',
    natural: 'טבעי ובוהמי',
    unique: 'ייחודי וקונספטואלי',
    minimal: 'מינימליסטי ומודרני',
    colorful: 'צבעוני ושמח',
    unsure: 'לא בטוחים'
  },
  budget: {
    '0-200k': 'עד 200K',
    '200k-400k': '200K-400K',
    '400k-600k': '400K-600K',
    '600k+': 'מעל 600K',
    later: 'נדבר בהמשך'
  },
  priority: {
    peace: 'שקט נפשי',
    management: 'ניהול מקצועי',
    concept: 'קונספט ייחודי',
    vendors: 'ספקים אמינים',
    planning: 'תכנון מדויק'
  },
  concern: {
    time: 'אין זמן לנהל',
    fear: 'פחד שמשהו ישתבש',
    start: 'לא יודעים מאיפה להתחיל',
    different: 'רוצים משהו שונה',
    vendors: 'קשה למצוא ספקים'
  },
  venue: {
    yes: 'יש מקום',
    no: 'צריכים עזרה',
    different: 'רוצים משהו שונה'
  },
  contactMethod: {
    phone: 'שיחת טלפון',
    whatsapp: 'ווטסאפ',
    email: 'אימייל'
  }
};
