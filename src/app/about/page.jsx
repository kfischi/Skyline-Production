import styles from './About.module.css';
import { getAboutData } from '@/lib/data';

export const metadata = {
  title: 'אודות דנה | Skyline Productions',
  description: 'למד עוד על דנה, המפיקה שהופכת חזונות למציאות.',
};

const heroImageUrl = 'https://res.cloudinary.com/daez7e9nj/image/upload/v1764531796/%D7%A7%D7%90%D7%91%D7%A8_ite9ej.jpg';

export default function AboutPage() {
  const about = getAboutData();

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <img 
            src={heroImageUrl}
            alt="דנה"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroText}>
            <h1>{about.hero.title}</h1>
            <p className={styles.heroSubtitle}>{about.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.contentContainer}>
        {/* כמו ה-intro */}
        <section className={styles.introSection}>
          <p className={styles.introText}>
            {about.hero.description}
          </p>
        </section>

        {/* הסיפור */}
        <section className={styles.storySection}>
          <div className={styles.sectionHeader}>
            <h2>{about.story.title}</h2>
          </div>
          <div className={styles.timeline}>
            {about.story.content.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <span className={styles.year}>{item.year}</span>
                </div>
                <div className={styles.timelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* הערכים */}
        <section className={styles.valuesSection}>
          <div className={styles.sectionHeader}>
            <h2>{about.values.title}</h2>
          </div>
          <div className={styles.valuesGrid}>
            {about.values.items.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* סטטיסטיקות */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{about.stats.years}</div>
              <div className={styles.statLabel}>שנים ניסיון</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{about.stats.events}</div>
              <div className={styles.statLabel}>אירועים מסודרים</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{about.stats.clients}</div>
              <div className={styles.statLabel}>שביעות רצון</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{about.stats.team}</div>
              <div className={styles.statLabel}>חברי צוות</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <h2>בואו נדבר על האירוע שלכם</h2>
          <p>דנה מחכה לשמוע על החזון שלכם</p>
          <a href="mailto:info@skylineproductions.com" className={styles.ctaButton}>
            תאמו פגישה עם דנה
          </a>
        </section>
      </div>
    </div>
  );
}
