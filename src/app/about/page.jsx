import styles from './About.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'דנה - הפודקאסט | Skyline Productions',
  description: 'דנה בר מייזליס - מארגנת אירועים מובילה בישראל. 9+ שנים של ניסיון, 200+ אירועים, 100% שביעות רצון.',
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      {/* HERO SECTION - תמונה מלאה */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img 
            src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764538259/%D7%93%D7%A0%D7%94_%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99_%D7%94%D7%A4%D7%A7%D7%95%D7%AA_%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D_kxjwin.png"
            alt="דנה בר מייזליס"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>דנה בר מייזליס</h1>
          <p className={styles.heroSubtitle}>מארגנת אירועים בטופ המדינה</p>
          <p className={styles.heroDescription}>
            כשאתה רוצה שום דבר חוץ מעיצוב שעושה statement
          </p>
        </div>
      </section>

      {/* ABOUT SECTION - מי היא דנה */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutContent}>
            <h2>הסיפור שלי</h2>
            <p className={styles.paragraph}>
              אני דנה, ומשנת 2015 אני עושה משהו פשוט - אני הופכת חזונות למציאות.
            </p>
            <p className={styles.paragraph}>
              לא עבדתי עם כל אחד. לא עבדתי בכל מקום. בחרתי בקפידה את הפרויקטים שלי, את הצוות שלי, את ההשקפה שלי.
            </p>
            <p className={styles.paragraph}>
              התוצאה? 200+ אירועים שהפכו לסטורים. 100% של הלקוחות שלי שוב לקחו עמי. 15+ אנשים שעובדים לצד לצד כדי שכל פרט יהיה מושלם.
            </p>
            <p className={`${styles.paragraph} ${styles.highlight}`}>
              זה לא רק עבודה. זה מיסיון.
            </p>
          </div>

          {/* STATS */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>9+</div>
              <div className={styles.statLabel}>שנות ניסיון</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>אירועים שהפקתי</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>שביעות רצון לקוחות</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>מומחים בצוות</div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className={styles.philosophySection}>
        <h2>במה אני מאמינה</h2>
        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyCard}>
            <div className={styles.philosophyIcon}>✨</div>
            <h3>פרטים עושים הבדל</h3>
            <p>כל צבע, כל זווית, כל שניה נחשבת. זה לא אני שמחליטה מה חשוב - אתה. ואני מוודאת שהכל מושלם.</p>
          </div>
          <div className={styles.philosophyCard}>
            <div className={styles.philosophyIcon}>🤝</div>
            <h3>שותפות, לא עבודה</h3>
            <p>אני לא מפיקה שמקבלת brief וממלאה הזמנה. אני שותפה שלך בתהליך. קולך משנה הכל.</p>
          </div>
          <div className={styles.philosophyCard}>
            <div className={styles.philosophyIcon}>💎</div>
            <h3>איכות אבסולוטית</h3>
            <p>אני עובדת רק עם הטובים ביותר. אם לא טוב מספיק, זה לא מוכן. זה לא על צניעות - זה על התחשבות בזמן שלך.</p>
          </div>
          <div className={styles.philosophyCard}>
            <div className={styles.philosophyIcon}>🎯</div>
            <h3>אחריות מלאה</h3>
            <p>מהקונספט הראשון עד לרגע האחרון של האירוע - אני כאן. אתה מנוח. אני דואגת.</p>
          </div>
        </div>
      </section>

      {/* PODCASTS SECTION */}
      <section className={styles.podcastSection}>
        <h2>הפודקאסט שלי</h2>
        <p className={styles.podcastIntro}>
          משתף את הידע שצברתי בשנים. טיפים, סיפורים מהשטח, וחוכמה שרק שנים של ניסיון יכולים ללמד.
        </p>
        <div className={styles.podcastsGrid}>
          <a href="https://www.youtube.com/@SkylineProductions" target="_blank" rel="noopener noreferrer" className={styles.podcastCard}>
            <div className={styles.podcastIcon}>🎥</div>
            <h3>YouTube</h3>
            <p>סדרה של ווידאו על כל מה שצריך לדעת על אירועים</p>
            <span className={styles.podcastLink}>עבור ל-YouTube →</span>
          </a>
          <a href="https://www.instagram.com/skyline.productions" target="_blank" rel="noopener noreferrer" className={styles.podcastCard}>
            <div className={styles.podcastIcon}>📱</div>
            <h3>Instagram</h3>
            <p>תיעוד יומיומי מהשטח + טיפים ויומנים</p>
            <span className={styles.podcastLink}>עבור ל-Instagram →</span>
          </a>
        </div>
      </section>

      {/* WORK SECTION - FEATURED EVENTS */}
      <section className={styles.workSection}>
        <h2>האירועים שעזבו רושם</h2>
        <div className={styles.eventsGrid}>
          <div className={styles.eventCard}>
            <div className={styles.eventImage}>🎉</div>
            <h3>Marry Land Festival 2024</h3>
            <p>500+ אורחים, 50+ ספקים, פסטיבל חתונות ראשון מסוגו בישראל</p>
            <div className={styles.eventStats}>
              <span>500+ אורחים</span>
              <span>תל אביב</span>
              <span>מאי 2024</span>
            </div>
          </div>
          <div className={styles.eventCard}>
            <div className={styles.eventImage}>🌿</div>
            <h3>Jungle Wedding</h3>
            <p>חתונה בקונספט ג'ונגל אורבני ייחודי. כל פרט, כל גוון, מושלם.</p>
            <div className={styles.eventStats}>
              <span>180 אורחים</span>
              <span>הרצליה</span>
              <span>יוני 2024</span>
            </div>
          </div>
          <div className={styles.eventCard}>
            <div className={styles.eventImage}>⚫</div>
            <h3>All Black Metal Wedding</h3>
            <p>חתונה דרמטית בשחור מוחלט. אלטרנטיבי, בעז, וביוטיפול.</p>
            <div className={styles.eventStats}>
              <span>150 אורחים</span>
              <span>תל אביב</span>
              <span>אוקטובר 2024</span>
            </div>
          </div>
        </div>
        <div className={styles.ctaWrapper}>
          <Link href="/portfolio" className={styles.ctaButton}>
            צפו בכל הפרויקטים
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialsSection}>
        <h2>מה הלקוחות אומרים</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "דנה עשתה לנו משהו שלא חשבנו שיהיה אפשרי. חתונה בטוטאל fantasy mode שהייתה 100% ביצוע מושלם."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>YD</div>
              <div>
                <p className={styles.authorName}>יעל ודניאל</p>
                <p className={styles.authorRole}>Jungle Wedding 2024</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "הפסטיבל היה הדבר הכי מטורף שעברנו. דנה הייתה החתן, המרוץ, והנצחון בבת אחת."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>ML</div>
              <div>
                <p className={styles.authorName}>מארגני Marry Land</p>
                <p className={styles.authorRole}>Festival 2024</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              "כשהציעו לנו את הקונספט All Black Metal - חשבנו שהם מטורפים. בסופו של דבר, זה היה המטורף ביותר."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>RS</div>
              <div>
                <p className={styles.authorName}>רועי ושירה</p>
                <p className={styles.authorRole}>Metal Wedding 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCtaSection}>
        <h2>אתה חלום פראי שצריך להיות מציאות?</h2>
        <p>בואו נדבר. בואו נתכננן. בואו נעשה משהו שלא ראיתה בעיניים.</p>
        <a href="mailto:info@skylineproductions.com" className={styles.finalCtaButton}>
          תיאום פגישה
        </a>
      </section>
    </div>
  );
}
