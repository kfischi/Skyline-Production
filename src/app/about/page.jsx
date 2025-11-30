import styles from './About.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'דנה בר מייזליס | Skyline Productions',
  description: 'מארגנת אירועים שמשנים משחק. 9 שנים של ניסיון. מאות אירועים. מאה אחוז שביעות רצון.',
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
      {/* HERO - תמונה בלבד */}
      <section className={styles.heroSection}>
        <img 
          src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764538259/%D7%93%D7%A0%D7%94_%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99_%D7%94%D7%A4%D7%A7%D7%95%D7%AA_%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D_kxjwin.png"
          alt="דנה"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
      </section>

      {/* ABOUT - הסיפור האמיתי */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutText}>
            <h1>דנה</h1>
            <p>
              אני מארגנת אירועים. זה לא ההגדרה הרשמית, בטח. הרשמית היא משהו עם מילים כמו "ניהול פרויקטים" ו"קורדינציה". אבל זה לא זה.
            </p>
            <p>
              אני לוקחת את החלום שלך - הדבר שאתה רואה בעיניים כשאתה סוגר עיניים - ואני הופכת את זה לממש. עם כסף שסופי, עם אנשים שלא מוזלים, עם פרטים שאתה בכלל לא חשבת עליהם.
            </p>
            <p>
              תשע שנים שאני עושה את זה. מאות אירועים. כל אחד שונה. כל אחד חושב שהוא הייחודי שלי (וזה נכון, אבל לא רק שלו).
            </p>
            <p className={styles.emphasis}>
              אני לא עושה אירועים. אני עושה חוויות שמשנות את היום שלך.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>9+</div>
                <div className={styles.statLabel}>שנים</div>
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
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContainer}>
          <h2>איך אני עובדת</h2>
          
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <h3>פרטים קטנים עושים הבדל גדול</h3>
              <p>
                אני לא מדברת על צבע הנר. אני מדברת על העובדה שהוא כבה בשנייה שלוש כי הרוח הוא מעבודת היד של מישהו שלא בדק אם הוא עומד למהירות של מנוע.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <h3>אתה לא משום דבר אחר</h3>
              <p>
                כשאתה עם Skyline, אתה לא במערכת. אתה לא טיקט. אתה האדם שאני משקיעה בו כדי שהיום שלך יהיה ממש שלך.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <h3>איכות פירושה ביטול טוקנים</h3>
              <p>
                אני לא עובדת עם "יזם צעיר" בניהול שלום. אני עובדת עם מומחים. אנשים שיודעים את העבודה שלהם עד הקצה של העיניים.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <h3>כל הרגשות בדרך הבחזקה</h3>
              <p>
                אתה רחוק מהלוגיסטיקה. אתה מהנה. אני ממלאה את כל הריק בהוקיו שלי ובשנות הניסיון שלי.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PODCASTS - NETFLIX STYLE */}
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

      {/* WORK - אירועים בולטים */}
      <section className={styles.workSection}>
        <div className={styles.workContainer}>
          <h2>אירועים שעזבו רושם</h2>

          <div className={styles.eventsList}>
            <div className={styles.eventItem}>
              <h3>Marry Land Festival 2024</h3>
              <p>
                הראשון שלו מסוגו בישראל. 500 אנשים, 50 ספקים, יום שלם שלא היה שיגרה שנייה אחת. כל שנייה הייתה מתוכננת.
              </p>
              <div className={styles.eventMeta}>
                <span>500 אורחים</span>
                <span>תל אביב</span>
                <span>מאי 2024</span>
              </div>
            </div>

            <div className={styles.eventItem}>
              <h3>Jungle Wedding</h3>
              <p>
                החתונה שבה הלקוחות אמרו "אנחנו רוצים משהו מטורף" ואני אמרתי "אני יודעת בדיוק מה". ג'ונגל בתוך העיר. שומים בעצים. אורות בחנוקות.
              </p>
              <div className={styles.eventMeta}>
                <span>180 אורחים</span>
                <span>הרצליה</span>
                <span>יוני 2024</span>
              </div>
            </div>

            <div className={styles.eventItem}>
              <h3>All Black Metal Wedding</h3>
              <p>
                "האם אפשר חתונה בשחור מוחלט ועדיין להיות קלאסי?" כן, אם אתה יודע מה אתה עושה. כל ריהוט, כל אורות, כל גוון - שחור. וזה היה הדבר הכי יפה שראיתי.
              </p>
              <div className={styles.eventMeta}>
                <span>150 אורחים</span>
                <span>תל אביב</span>
                <span>אוקטובר 2024</span>
              </div>
            </div>
          </div>

          <div className={styles.workCta}>
            <Link href="/portfolio">צפה בכל הקונספטים</Link>
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
                "אני חשבתי שחתונה בשחור תהיה דכאונית. דנה הוכיחה לי שזה יכול להיות רוקן. זה היה."
              </p>
              <span>רועי ושירה</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalSection}>
        <div className={styles.finalContainer}>
          <h2>יש לך חלום שאתה לא רוצה לרסק</h2>
          <p>בואו נדבר. זה לא התחייבות. זה בדיקה של זה שנכנסים לאותה תדר.</p>
          <a href="mailto:info@skylineproductions.com" className={styles.finalCta}>
            תיאום פגישה
          </a>
        </div>
      </section>
    </div>
  );
}
