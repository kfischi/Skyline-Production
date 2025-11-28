import styles from './Method.module.css';

const videoUrlPodcast = "https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425660/VID-20250916-WA0007_q8j5hk.mp4";
const videoUrlPlanning = "https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425663/VID-20250916-WA0002_rdm3vh.mp4";
const videoUrlExecution = "https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425656/5_%D7%A1%D7%99%D7%9E%D7%A0%D7%99%D7%9D_%D7%A9%D7%94%D7%90%D7%95%D7%9C%D7%9D_kbqjzv.mp4";

// הסרטון הישן מעמוד הבית
const oldHeroVideo = "https://res.cloudinary.com/dptyfvwyo/video/upload/v1763892387/%D7%95%D7%99%D7%93%D7%90_%D7%A4%D7%AA%D7%99%D7%97%D7%94_wc9vnu.mp4";

export const metadata = {
  title: 'השיטה | Skyline Productions',
  description: 'החזון שלכם. התכנון שלנו. השקט הנפשי שלכם.',
};

export default function MethodPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section מקוצר */}
      <section className={styles.heroSection}>
        <video autoPlay loop muted playsInline className={styles.heroVideo}>
          <source src={oldHeroVideo} type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>השיטה שלנו</h1>
          <p>החזון שלכם. התכנון שלנו. השקט הנפשי שלכם.</p>
        </div>
      </section>

      {/* תוכן ראשי */}
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <p className={styles.intro}>
            רוב מפיקי האירועים יראו לכם גלריה יפה. אנחנו מאמינים שאירוע מושלם מתחיל בתכנון אסטרטגי וניהול ברזל מאחורי הקלעים.
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
                הצוות שלנו מנהל את כל החוזים, הלוגיסטיקה ובניית הלו"ז המילימטרי.
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
