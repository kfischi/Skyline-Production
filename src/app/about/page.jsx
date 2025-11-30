import styles from './About.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'דנה בר מייזליס | Skyline Events',
  description: 'להפוך את ה"וואו" שבראש שלכם – למציאות. 9 שנים, 200+ אירועים, 100% שביעות רצון.',
};

export default function AboutPage() {
  const podcasts = [
    {
      id: 1,
      title: 'מחיר לא סופי',
      duration: '18 דקות',
      description: 'למה התקציב שלך לא יהיה מספיק ולמה זה בסדר',
      url: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528916/%D7%9E%D7%97%D7%99%D7%A8_%D7%9C%D7%90_%D7%A1%D7%95%D7%A4%D7%99_te573k.mp4'
    },
    {
      id: 2,
      title: 'ניקיון דבר ראשון',
      duration: '14 דקות',
      description: 'איך בוחרים אולם שלא יהיה חרא',
      url: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528915/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F_%D7%93%D7%91%D7%A8_%D7%A8%D7%90%D7%A9%D7%95%D7%9F_erd6zo.mp4'
    },
    {
      id: 3,
      title: 'בקרת איכות',
      duration: '12 דקות',
      description: 'איך אני בודקת שכל סרבר לא עושה קלקול',
      url: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528915/%D7%91%D7%A7%D7%A8%D7%AA_%D7%90%D7%99%D7%9B%D7%95%D7%AA_glxlod.mp4'
    },
    {
      id: 4,
      title: 'לנהל את המנהל',
      duration: '16 דקות',
      description: 'איך להגיד לצוות שהם מחמאים זה לא מספיק',
      url: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528914/%D7%9C%D7%A0%D7%94%D7%9C_%D7%90%D7%AA_%D7%94%D7%9E%D7%A0%D7%94%D7%9C_jo3sxf.mp4'
    },
    {
      id: 5,
      title: 'חתונה מאטל',
      duration: '22 דקות',
      description: 'שיא: איך עשינו חתונה שחורה ממש',
      url: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528914/%D7%97%D7%AA%D7%95%D7%A0%D7%94_%D7%9E%D7%90%D7%98%D7%9C_xqtjnr.mp4'
    },
    {
      id: 6,
      title: 'חוזה מותנה טעימות',
      duration: '11 דקות',
      description: 'מה הטעים בחוזה וכמה זה עולה להתאכזב',
      url: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528914/%D7%97%D7%95%D7%96%D7%94_%D7%9E%D7%95%D7%AA%D7%A0%D7%94_%D7%98%D7%A2%D7%99%D7%9E%D7%95%D7%AA_jjzy0r.mp4'
    }
  ];

  return (
    <div className={styles.container}>
      {/* HERO */}
      <section className={styles.heroSection}>
        <img 
          src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764538259/%D7%93%D7%A0%D7%94_%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99_%D7%94%D7%A4%D7%A7%D7%95%D7%AA_%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D_kxjwin.png"
          alt="דנה"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
      </section>

      {/* ABOUT */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <h1>דנה | Skyline Events</h1>
          
          <p className={styles.tagline}>
            להפוך את ה"וואו" שבראש שלכם – למציאות.
          </p>

          <div className={styles.story}>
            <p>
              נעים להכיר. על הנייר? אני "מפיקת אירועים". בפועל? אני הגשר בין הדמיון לקרקע. לכולנו יש את התמונה הזו בראש – הרגע המושלם, האווירה, הצבעים. אבל הדרך לשם רצופה באקסלים, לוגיסטיקה, ספקים ולחץ.
            </p>
            
            <p>
              כאן אני נכנסת. אני המקום שבו הרגש פוגש את התכנון המדויק. אחרי 9 שנים וקרוב ל-200 אירועים, אני מביאה איתי ארגז כלים שהוא שילוב נדיר בין לב ענק לראש שקט. ב-Skyline אין מקום למזל, ואין "בערך". יש רק דבר אחד: אירוע שהוא בול אתם.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>9+</div>
              <div className={styles.statLabel}>שנות ניסיון</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>אירועים</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>מרוצים</div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContainer}>
          <h2>המצפן שלי</h2>
          <p className={styles.philosophySubtitle}>(או: למה אתם יכולים להיות רגועים)</p>
          
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <h3>רואים את מה ששקוף לאחרים</h3>
              <p>
                כולם מסתכלים על העיצוב של הנר? מצוין. אני מסתכלת על כיוון הרוח מהמזגן, כדי לוודא שהוא לא יכבה ברגע השיא. המומחיות שלי היא לחשוב על הפרטים הקטנים והבלתי צפויים, ולמנוע תקלות עוד לפני שהן נוצרו.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <h3>נבחרת מנצחת בלבד</h3>
              <p>
                אני לא מהמרת על האירוע שלכם. אני עובדת אך ורק עם אנשי המקצוע הכי חזקים בתעשייה. אנשים שבאים לתת את הנשמה, לא להעביר כרטיס. כשאתם איתי, אתם עטופים בטובים ביותר.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <h3>אתם האורחים, לא המנהלים</h3>
              <p>
                ביום האירוע התפקיד שלכם הוא אחד ויחיד: להתרגש, לחבק ולעוף באוויר. תשאירו לי את התיאומים, הריצות וה"כיבוי שריפות" מאחורי הקלעים. אני כאן כדי שאתם תוכלו פשוט לנשום וליהנות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PODCASTS */}
      <section className={styles.podcastSection}>
        <div className={styles.podcastContainer}>
          <div className={styles.podcastHeader}>
            <h2>הפודקאסט שלי</h2>
            <p>
              אנשים שואלים אותי הרבה על איך אני עושה מה שאני עושה. הפודקאסטים האלה הם התשובה.
            </p>
          </div>

          <div className={styles.podcastGrid}>
            {podcasts.map((podcast) => (
              <div key={podcast.id} className={styles.podcastCard}>
                <div className={styles.podcastVideoContainer}>
                  <video
                    src={podcast.url}
                    className={styles.podcastVideo}
                    controls
                    controlsList="nodownload"
                  />
                </div>
                <div className={styles.podcastInfo}>
                  <h3>{podcast.title}</h3>
                  <p className={styles.podcastDesc}>{podcast.description}</p>
                  <span className={styles.duration}>{podcast.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PODCAST LINKS */}
      <section className={styles.podcastLinksSection}>
        <div className={styles.podcastLinksContainer}>
          <h3>רוצים עוד?</h3>
          <p>כל הפרקים זמינים ב-YouTube ו-Instagram</p>
          
          <div className={styles.linksGrid}>
            <a 
              href="https://www.youtube.com/@SkylineProductions" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.linkCard}
            >
              <span className={styles.linkIcon}>▶</span>
              <span className={styles.linkText}>YouTube</span>
            </a>
            <a 
              href="https://www.instagram.com/skyline.productions" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.linkCard}
            >
              <span className={styles.linkIcon}>📱</span>
              <span className={styles.linkText}>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContainer}>
          <h2>מה הם אומרים</h2>

          <div className={styles.testimonialsList}>
            <div className={styles.testimonialCard}>
              <p>
                "דנה היא לא פשוט מארגנת. היא מישהי שמבינה מה אתה בעצם רוצה אפילו לפני שאתה יודע את זה. החתונה היתה חלום."
              </p>
              <span>יעל ודניאל</span>
            </div>

            <div className={styles.testimonialCard}>
              <p>
                "עובדה שדנה יכלה לתאום 50 ספקים ועדיין לא הפסידה שום דבר. זה לא קרה. זה הופעת מופת."
              </p>
              <span>מארגני Marry Land</span>
            </div>

            <div className={styles.testimonialCard}>
              <p>
                "חשבתי שחתונה בשחור תהיה דכאונית. דנה הוכיחה לי שזה יכול להיות רוקן. זה היה."
              </p>
              <span>רועי ושירה</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalSection}>
        <div className={styles.finalContainer}>
          <h2>זה הסיפור שלי.</h2>
          <p>עכשיו בואו ניצור את הסיפור שלכם. דברו איתי.</p>
          <a href="mailto:info@skylineproductions.com" className={styles.finalCta}>
            תיאום פגישה
          </a>
        </div>
      </section>
    </div>
  );
}
