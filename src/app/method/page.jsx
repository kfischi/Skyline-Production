import styles from './Method.module.css';

const videoUrlPodcast = "https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425660/VID-20250916-WA0007_q8j5hk.mp4";
const videoUrlPlanning = "https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425663/VID-20250916-WA0002_rdm3vh.mp4";
const videoUrlExecution = "https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425656/5_%D7%A1%D7%99%D7%9E%D7%A0%D7%99%D7%9D_%D7%A9%D7%94%D7%90%D7%95%D7%9C%D7%9D_kbqjzv.mp4";

// Hero Image
const heroImage = "https://res.cloudinary.com/dptyfvwyo/image/upload/f_auto,q_auto:best,w_1920/v1734191108/WhatsApp_Image_2024-12-14_at_19.44.30_mvaqjw.jpg";

export const metadata = {
  title: 'השיטה | Skyline Productions',
  description: 'החזון שלכם. התכנון שלנו. השקט הנפשי שלכם.',
};

export default function MethodPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img 
          src={heroImage} 
          alt="השיטה של Skyline Productions" 
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroBreadcrumb}>
          <h1>השיטה</h1>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className={styles.contentWrapper}>
        
        {/* הקדמה */}
        <header className={styles.header}>
          <p className={styles.intro}>
            רוב מפיקי האירועים יראו לכם גלריה יפה. אנחנו מאמינים שאירוע מושלם מתחיל בתכנון אסטרטגי וניהול מדויק מאחורי הקלעים.
          </p>
        </header>

        {/* סקציה חדשה 1: מי זאת דנה */}
        <section className={styles.whoIsDana}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>01</span>
            <h2 className={styles.sectionTitle}>הוויקיפדיה המהלכת של עולם האירועים</h2>
          </div>
          
          <div className={styles.danaQuote}>
            <p className={styles.quoteText}>"אני דנה ישראלי, ואני כנראה הדבר הכי טוב שקרה לכם."</p>
            <p className={styles.quoteSubtext}>לא זה לא יהירות - זה ביטחון שמגיע מניסיון.</p>
          </div>

          <div className={styles.whyWikipedia}>
            <h3 className={styles.subsectionTitle}>למה "ויקיפדיה מהלכת"?</h3>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>✅</div>
                <h4 className={styles.cardTitle}>עבדתי בכל תפקיד בעולם האירועים</h4>
                <p className={styles.cardText}>
                  מדי ג'יי ועד מנהלת אולם, מצלמת ועד קייטרינג - אין תפקיד שלא עשיתי
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>✅</div>
                <h4 className={styles.cardTitle}>נסעתי חצי שנה רק ללמוד ולהכיר ספקים</h4>
                <p className={styles.cardText}>
                  לפני שפתחתי את Skyline, השקעתי 6 חודשים בלימוד השטח - DJ'ים, צלמים, קייטרינגים, קטן וגדול
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>✅</div>
                <h4 className={styles.cardTitle}>אני יודעת להתאים את החליפה לחתן וגם את השמלה לכלה</h4>
                <p className={styles.cardText}>
                  לא משנה מה תביאו לי - אני יודעת להתאים את האירוע בדיוק לכם
                </p>
              </div>
            </div>
          </div>

          <div className={styles.whatItMeans}>
            <h3 className={styles.subsectionTitle}>מה זה אומר בשבילכם?</h3>
            <ul className={styles.benefitsList}>
              <li>🎯 אני לא רק מפיקה - אני <strong>השותפה</strong> שלכם</li>
              <li>🎯 יש לי תשובה לכל שאלה (ואני מתכוונת <strong>לכל</strong> שאלה)</li>
              <li>🎯 אני מכירה כל "שיטרוק" בעולם האירועים</li>
              <li>🎯 <strong>אתם רק נהנים - אני דואגת לכל השאר</strong></li>
            </ul>
          </div>
        </section>

        {/* סקציה חדשה 2: Timeline */}
        <section className={styles.timelineSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>02</span>
            <h2 className={styles.sectionTitle}>מהרעיון ועד הרחבה - מה קורה בדרך?</h2>
          </div>

          <div className={styles.timeline}>
            {/* שלב 1 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <span className={styles.timelineIcon}>📅</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>חודש 1-2: החזון</h3>
                <p className={styles.timelineSubtitle}>פגישת קונספט - איפה הכל מתחיל</p>
                <ul className={styles.timelineList}>
                  <li>פגישת היכרות אישית (בבית/קפה/זום)</li>
                  <li>בניית mood board וסטייל ייחודי</li>
                  <li>הגדרת תקציב ריאלי</li>
                  <li>רשימת must-have שלכם</li>
                  <li><strong>אתם מספרים לי את החלום - אני הופכת אותו לתוכנית</strong></li>
                </ul>
              </div>
            </div>

            {/* שלב 2 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <span className={styles.timelineIcon}>🎯</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>חודש 2-4: הבחירות</h3>
                <p className={styles.timelineSubtitle}>ליקוט הנבחרת - רק הטובים ביותר</p>
                <ul className={styles.timelineList}>
                  <li>ליקוט 3-5 ספקים מתאימים לכל קטגוריה</li>
                  <li>ליווי אישי לכל הפגישות והדגימות</li>
                  <li>מו"מ על מחירים (קבוצת רכישה = הנחות!)</li>
                  <li>סגירת כל החוזים והתיאומים</li>
                  <li><strong>אני המגשרת - אתם מחליטים</strong></li>
                </ul>
              </div>
            </div>

            {/* שלב 3 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <span className={styles.timelineIcon}>🎨</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>חודש 4-6: העיצוב</h3>
                <p className={styles.timelineSubtitle}>בניית החוויה - מהקונספט למציאות</p>
                <ul className={styles.timelineList}>
                  <li>עיצוב מלא של המקום - פרחים, תאורה, ריהוט</li>
                  <li>סגירת תפריט סופי (כולל דגימות)</li>
                  <li>עיצוב הזמנות וגרפיקה</li>
                  <li>בניית רפרטואר מוזיקלי מותאם</li>
                  <li><strong>כל פרט קטן - בשליטה</strong></li>
                </ul>
              </div>
            </div>

            {/* שלב 4 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <span className={styles.timelineIcon}>⚙️</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>שבועיים אחרונים: ההכנות</h3>
                <p className={styles.timelineSubtitle}>הספרינט האחרון - מושלם עד הפרט האחרון</p>
                <ul className={styles.timelineList}>
                  <li>ריהרסל עם DJ/להקה</li>
                  <li>Run sheet מפורט לדקה (כן, לדקה!)</li>
                  <li>בריפינג מלא לכל הספקים</li>
                  <li>הכנת תרחישי חירום (תמיד יש!)</li>
                  <li><strong>אני בשליטה על כל נקודת חיבור</strong></li>
                </ul>
              </div>
            </div>

            {/* שלב 5 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <span className={styles.timelineIcon}>🎉</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>יום האירוע: רק תהנו</h3>
                <p className={styles.timelineSubtitle}>D-Day - זה הזמן שלכם לזרוח</p>
                <ul className={styles.timelineList}>
                  <li>הגעה 6 שעות לפני (כן, 6!)</li>
                  <li>פיקוח מלא על Setup</li>
                  <li>ניהול כל הספקים בזמן אמת</li>
                  <li>פתרון כל בעיה תוך דקות</li>
                  <li><strong>אתם רק צריכים להגיע ולהיות מאושרים</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.timelineQuote}>
            <p className={styles.quoteText}>"משאירים את הצ'ייסת - כמו שאומרים אצלנו מעבירים לקרוז קונטרול"</p>
            <p className={styles.quoteAuthor}>— דנה ישראלי</p>
          </div>
        </section>

        {/* 3 השלבים - קיים */}
        <div className={styles.stepsContainer}>
          <section className={styles.step}>
            <div className={styles.stepText}>
              <span className={styles.stepNumber}>01</span>
              <h2 className={styles.stepTitle}>פגישת קונספט (The Vision)</h2>
              <p className={styles.stepDescription}>
                אנחנו לא מתחילים ב"ספקים". אנחנו מתחילים בכם.
                השלב הראשון הוא פגישת אפיון פסיכולוגית. אנחנו צוללים ל-DNA שלכם, ל-Vibe שאתם רוצים לשדר ולסיפור שאתם רוצים לספר.
              </p>
            </div>
            <div className={styles.stepVisual}>
              <video autoPlay loop muted playsInline className={styles.stepVideo}>
                <source src={videoUrlPodcast} type="video/mp4" />
              </video>
            </div>
          </section>

          <section className={`${styles.step} ${styles.reverse}`}>
            <div className={styles.stepText}>
              <span className={styles.stepNumber}>02</span>
              <h2 className={styles.stepTitle}>ליקוט וניהול (The Curation)</h2>
              <p className={styles.stepDescription}>
                אחרי שפיצחנו את הקונספט, אנחנו מרכיבים את הנבחרת.
                הצוות שלנו מנהל את כל החוזים, הלוגיסטיקה ובניית הלו"ז לפרטי פרטים.
              </p>
            </div>
            <div className={styles.stepVisual}>
              <video autoPlay loop muted playsInline className={styles.stepVideo}>
                <source src={videoUrlPlanning} type="video/mp4" />
              </video>
            </div>
          </section>

          <section className={styles.step}>
            <div className={styles.stepText}>
              <span className={styles.stepNumber}>03</span>
              <h2 className={styles.stepTitle}>ביצוע (The Execution)</h2>
              <p className={styles.stepDescription}>
                ביום האירוע, התפקיד היחיד שלכם הוא ליהנות.
                הצוות של Skyline נועל נעלי עבודה ומתייצב בשטח.
              </p>
            </div>
            <div className={styles.stepVisual}>
              <video autoPlay loop muted playsInline className={styles.stepVideo}>
                <source src={videoUrlExecution} type="video/mp4" />
              </video>
            </div>
          </section>
        </div>

        {/* סקציה חדשה 3: למה זה חוסך כסף */}
        <section className={styles.savingsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>03</span>
            <h2 className={styles.sectionTitle}>למה השקעה במפיקה זה לא בזבוז - אלא חיסכון?</h2>
          </div>

          <div className={styles.comparisonGrid}>
            {/* ללא מפיקה */}
            <div className={`${styles.comparisonCard} ${styles.without}`}>
              <h3 className={styles.comparisonTitle}>❌ ללא מפיקה מקצועית</h3>
              <ul className={styles.comparisonList}>
                <li>
                  <strong>תשלום מחיר מלא לספקים</strong>
                  <span>כל ספק מוכר לכם במחיר מלא → +15-20%</span>
                </li>
                <li>
                  <strong>40+ שעות של הזמן שלכם</strong>
                  <span>ריצות, פגישות, מו"מ, תיאומים → שווה ~20,000₪</span>
                </li>
                <li>
                  <strong>טעויות והחלפות</strong>
                  <span>ספק לא מתאים? צריך להחליף ברגע אחרון → +10,000₪</span>
                </li>
                <li>
                  <strong>חוסר תיאום = עלויות נוספות</strong>
                  <span>פער תקשורת בין ספקים → +5,000₪</span>
                </li>
              </ul>
              <div className={styles.totalCost}>
                <strong>💰 סה"כ: +45,000-50,000₪ יותר</strong>
              </div>
            </div>

            {/* עם Skyline */}
            <div className={`${styles.comparisonCard} ${styles.with}`}>
              <h3 className={styles.comparisonTitle}>✅ עם Skyline Productions</h3>
              <ul className={styles.comparisonList}>
                <li>
                  <strong>הנחות ספקים</strong>
                  <span>אני "קבוצת רכישה" - הספקים נותנים לי מחירים מיוחדים → חיסכון של 20-30 אלף ₪</span>
                </li>
                <li>
                  <strong>זמן שלכם חופשי</strong>
                  <span>40 שעות שלכם חוזרות אליכם → אין מחיר</span>
                </li>
                <li>
                  <strong>0 טעויות = 0 עלויות נוספות</strong>
                  <span>אני מכירה את כל הספקים - אין הפתעות → חיסכון טעויות</span>
                </li>
                <li>
                  <strong>תיאום מושלם מראש</strong>
                  <span>כולם מדברים איתי - לא ביניהם → 0 פערי תקשורת</span>
                </li>
              </ul>
              <div className={styles.totalSavings}>
                <strong>💚 תוצאה: חיסכון + איכות + שקט נפשי</strong>
              </div>
            </div>
          </div>

          <div className={styles.mathBox}>
            <h3 className={styles.mathTitle}>🧮 החישוב הפשוט:</h3>
            <div className={styles.mathContent}>
              <div className={styles.mathLine}>עלות שירות הפקה מלאה: <strong>X</strong></div>
              <div className={styles.mathLine}>חיסכון בהנחות: <strong className={styles.green}>-20,000₪</strong></div>
              <div className={styles.mathLine}>חיסכון בזמן (40 שעות): <strong className={styles.green}>-20,000₪</strong></div>
              <div className={styles.mathLine}>מניעת טעויות: <strong className={styles.green}>-10,000₪</strong></div>
              <div className={styles.mathDivider}></div>
              <div className={styles.mathResult}>= למעשה אתם משלמים <strong>0</strong></div>
              <div className={styles.mathBonus}>ומקבלים <strong>שקט נפשי מוחלט</strong> 🎁</div>
            </div>
          </div>

          <div className={styles.savingsQuote}>
            <p className={styles.quoteText}>"אתם זוגות צריכים להסתכל על זה כעוצה שחוסכת כסף"</p>
            <p className={styles.quoteAuthor}>— דנה ישראלי</p>
          </div>
        </section>

        {/* סקציה חדשה 4: מה כלול בשירות */}
        <section className={styles.servicesSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>04</span>
            <h2 className={styles.sectionTitle}>מה בדיוק כלול בשירות הפקה מלאה?</h2>
          </div>

          <div className={styles.servicesGrid}>
            {/* תכנון */}
            <div className={styles.serviceCategory}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>📋</span>
                תכנון ואסטרטגיה
              </h3>
              <ul className={styles.serviceList}>
                <li>✅ פגישות קונספט ללא הגבלה (כן, ללא הגבלה!)</li>
                <li>✅ בניית mood board מותאם אישית</li>
                <li>✅ ניהול תקציב מלא + מעקב שוטף</li>
                <li>✅ Timeline מפורט לכל שלב</li>
                <li>✅ יעוץ סטייל ועיצוב מקצועי</li>
              </ul>
            </div>

            {/* ספקים */}
            <div className={styles.serviceCategory}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>🤝</span>
                ניהול ספקים
              </h3>
              <ul className={styles.serviceList}>
                <li>✅ ליקוט 3-5 אופציות איכותיות לכל קטגוריה</li>
                <li>✅ ליווי אישי לכל הפגישות והדגימות</li>
                <li>✅ משא ומתן על מחירים (הכוח שלי = החיסכון שלכם)</li>
                <li>✅ ניהול וסגירת כל החוזים</li>
                <li>✅ תיאום ישיר עם כל הספקים</li>
                <li>✅ מעקב אחר תשלומים ולו"זים</li>
              </ul>
            </div>

            {/* עיצוב */}
            <div className={styles.serviceCategory}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>🎨</span>
                עיצוב ויצירה
              </h3>
              <ul className={styles.serviceList}>
                <li>✅ עיצוב מלא של המקום - פרחים, תאורה, ריהוט</li>
                <li>✅ בחירת פלטת צבעים וסטייל</li>
                <li>✅ תכנון תאורה ואפקטים מיוחדים</li>
                <li>✅ תפריט מותאם + ליווי לדגימות</li>
                <li>✅ עיצוב הזמנות וכל הגרפיקה</li>
                <li>✅ יעוץ לבחירת שמלה/חליפה (כן, גם זה!)</li>
              </ul>
            </div>

            {/* לוגיסטיקה */}
            <div className={styles.serviceCategory}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>⚙️</span>
                לוגיסטיקה וניהול
              </h3>
              <ul className={styles.serviceList}>
                <li>✅ Run sheet מפורט לדקה (כולל timing מדויק)</li>
                <li>✅ תיאום הגעות וזמנים של כל הספקים</li>
                <li>✅ ניהול מלא של Setup ביום האירוע</li>
                <li>✅ פיקוח על Breakdown והחזרת ציוד</li>
                <li>✅ תרחישי חירום מוכנים (Plan B, C, D)</li>
                <li>✅ רשימת צ'קים לכל שלב</li>
              </ul>
            </div>

            {/* יום האירוע */}
            <div className={styles.serviceCategory}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>🎉</span>
                יום האירוע - Full Service
              </h3>
              <ul className={styles.serviceList}>
                <li>✅ נוכחות 6+ שעות (מהתחלה ועד סוף)</li>
                <li>✅ ניהול כל הספקים בשטח</li>
                <li>✅ פתרון בעיות בזמן אמת</li>
                <li>✅ תיאום מלא עם המקום</li>
                <li>✅ ליווי עד הרגע האחרון</li>
                <li>✅ <strong>אתם רק נהנים - זה הכל!</strong></li>
              </ul>
            </div>

            {/* Crisis */}
            <div className={styles.serviceCategory}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>🆘</span>
                Crisis Management
              </h3>
              <ul className={styles.serviceList}>
                <li>✅ זמינות 24/7 לשאלות ודאגות</li>
                <li>✅ פתרונות לתרחישים בלתי צפויים</li>
                <li>✅ קשרים לספקים חלופיים</li>
                <li>✅ ניסיון בקורונה, מלחמות, מזג אויר</li>
                <li>✅ <strong>תמיד יש פלאן B!</strong></li>
              </ul>
            </div>
          </div>

          <div className={styles.servicesQuote}>
            <p className={styles.quoteText}>"אני יודעת להקדים את התרופה למכה"</p>
            <p className={styles.quoteAuthor}>— דנה ישראלי</p>
          </div>
        </section>

        {/* סקציה חדשה 5: סיפורים מהשטח */}
        <section className={styles.storiesSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>05</span>
            <h2 className={styles.sectionTitle}>כשהדברים משתבשים - אני פה בשבילכם</h2>
            <p className={styles.sectionSubtitle}>סיפורים אמיתיים מהשטח</p>
          </div>

          <div className={styles.storiesGrid}>
            {/* סיפור 1 */}
            <div className={styles.storyCard}>
              <div className={styles.storyIcon}>🍽️</div>
              <h3 className={styles.storyTitle}>פדיחת השף - בלי ציוד בישול</h3>
              <div className={styles.storyContent}>
                <div className={styles.storyProblem}>
                  <strong>מה קרה:</strong>
                  <p>שף הגיע ביום האירוע ללא ציוד בישול (קולר). 200 אורחים מחכים לארוחה.</p>
                </div>
                <div className={styles.storySolution}>
                  <strong>מה עשיתי:</strong>
                  <p>תוך 30 דקות הזמנתי ציוד חלופי, תיאמתי עם המקום, והשף הצליח להתחיל.</p>
                </div>
                <div className={styles.storyResult}>
                  <strong>התוצאה:</strong>
                  <p>האוכל יצא בזמן. <strong>האורחים לא הרגישו בכלל.</strong></p>
                </div>
              </div>
            </div>

            {/* סיפור 2 */}
            <div className={styles.storyCard}>
              <div className={styles.storyIcon}>💍</div>
              <h3 className={styles.storyTitle}>הטבעת שנפלה בין הדקים</h3>
              <div className={styles.storyContent}>
                <div className={styles.storyProblem}>
                  <strong>מה קרה:</strong>
                  <p>בזמן הקידושין, טבעת החתן נפלה בין הדקים של הבמה. החתן כמעט התמוטט.</p>
                </div>
                <div className={styles.storySolution}>
                  <strong>מה עשיתי:</strong>
                  <p>רצתי למטה, חיפשתי בין העץ והדקים, מצאתי את הטבעת.</p>
                </div>
                <div className={styles.storyResult}>
                  <strong>התוצאה:</strong>
                  <p>החתונה המשיכה בדיוק כמתוכנן. <strong>סיפור שישאר איתם לנצח.</strong></p>
                </div>
              </div>
            </div>

            {/* סיפור 3 */}
            <div className={styles.storyCard}>
              <div className={styles.storyIcon}>👰</div>
              <h3 className={styles.storyTitle}>הכלה ללא חינומה - שעתיים לפני</h3>
              <div className={styles.storyContent}>
                <div className={styles.storyProblem}>
                  <strong>מה קרה:</strong>
                  <p>כלה שכחה את החינומה (כיסוי ראש) בבית מלון. שעתיים לפני החופה.</p>
                </div>
                <div className={styles.storySolution}>
                  <strong>מה עשיתי:</strong>
                  <p>התקשרתי מיד לחברה מעצבת שמלות, נפגשנו, יצרנו חינומה חדשה תוך שעתיים.</p>
                </div>
                <div className={styles.storyResult}>
                  <strong>התוצאה:</strong>
                  <p><strong>החינומה הייתה יפה אפילו יותר מהמקורית.</strong> הכלה בכתה מאושר.</p>
                </div>
              </div>
            </div>

            {/* סיפור 4 */}
            <div className={styles.storyCard}>
              <div className={styles.storyIcon}>🚗</div>
              <h3 className={styles.storyTitle}>הזוג ללא הסעה - שתיים בלילה</h3>
              <div className={styles.storyContent}>
                <div className={styles.storyProblem}>
                  <strong>מה קרה:</strong>
                  <p>חתונה נגמרה ב-2:00 בלילה. ההסעה שהזמינו לא הגיעה. הזוג תקוע.</p>
                </div>
                <div className={styles.storySolution}>
                  <strong>מה עשיתי:</strong>
                  <p>פשוט אמרתי "בואו, אני אוסעת אתכם". לקחתי אותם ברכב הפרטי שלי למלון.</p>
                </div>
                <div className={styles.storyResult}>
                  <strong>התוצאה:</strong>
                  <p><strong>"כל הדרך הם הכמרו לי שמה היו עושים בלעדיי"</strong></p>
                </div>
              </div>
            </div>

            {/* סיפור 5 */}
            <div className={styles.storyCard}>
              <div className={styles.storyIcon}>🦠</div>
              <h3 className={styles.storyTitle}>קורונה - 48 שעות להחליף הכל</h3>
              <div className={styles.storyContent}>
                <div className={styles.storyProblem}>
                  <strong>מה קרה:</strong>
                  <p>תקופת קורונה - תוך 48 שעות סגרו אולם. אירוע של 150 איש מבוטל.</p>
                </div>
                <div className={styles.storySolution}>
                  <strong>מה עשיתי:</strong>
                  <p>מצאתי מקום חלופי תוך 48 שעות, תיאמתי מחדש את כל הספקים, שינינו את התפריט.</p>
                </div>
                <div className={styles.storyResult}>
                  <strong>התוצאה:</strong>
                  <p><strong>האירוע קרה - מדהים ובהתאם להגבלות.</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.storiesMessage}>
            <h3>💪 המסר:</h3>
            <p><strong>זה מה שאומרת הפקה מקצועית - תמיד יש פלאן B, C, ו-D.</strong></p>
          </div>

          <div className={styles.storiesQuote}>
            <p className={styles.quoteText}>"את מדמיינת מה היה קורה אם לא הייתי איתם?"</p>
            <p className={styles.quoteAuthor}>— דנה ישראלי</p>
          </div>
        </section>

        {/* CTA - קיים */}
        <section className={styles.ctaSection}>
          <h2>מוכנים להפקה ללא דאגות?</h2>
          <p>אם אתם מחפשים ניהול מלא, ירידה לפרטים ושקט נפשי מוחלט – בואו נדבר.</p>
          <a href="mailto:info@skylineproductions.com" className={styles.ctaButton}>
            לתאום פגישת קונספט
          </a>
        </section>

      </div>
    </div>
  );
}
