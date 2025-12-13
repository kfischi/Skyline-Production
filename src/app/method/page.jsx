import Image from 'next/image';
import styles from './Method.module.css';

// סרטונים לשלבים
const videoUrlPlanning = "https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425663/VID-20250916-WA0002_rdm3vh.mp4";
const videoUrlExecution = "https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425656/5_סימנים_שהאולם_kbqjzv.mp4";

export const metadata = {
  title: 'השיטה | Skyline Productions',
  description: 'החזון שלכם. התכנון שלנו. השקט הנפשי שלכם.',
};

export default function MethodPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section - תמונה מסך מלא */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image
            src="https://res.cloudinary.com/daez7e9nj/image/upload/v1765618482/דף_השיטה_zxblbt.png"
            alt="השיטה של Skyline Productions"
            fill
            priority
            quality={100}
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay}></div>
        
        {/* כותרת על התמונה */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>השיטה</h1>
          <p className={styles.heroSubtitle}>החזון שלכם. התכנון שלנו. השקט הנפשי שלכם.</p>
        </div>
      </section>

      {/* תוכן ראשי */}
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <p className={styles.intro}>
            רוב מפיקי האירועים יראו לכם גלריה יפה. אנחנו מאמינים שאירוע מושלם מתחיל בתכנון אסטרטגי וניהול מדויק מאחורי הקלעים.
          </p>
        </header>

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
              <div className={styles.placeholderBox}>
                <p>סרטון / תמונה לשלב 01</p>
              </div>
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
