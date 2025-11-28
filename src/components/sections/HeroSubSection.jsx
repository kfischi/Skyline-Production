import styles from './HeroSubSection.module.css';

export default function HeroSubSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.description}>
          אנחנו לא רק מפיקים אירועים. אנחנו הופכים חזון למציאות.
        </p>
        <a href="mailto:info@skylineproductions.com" className={styles.ctaButton}>
          בואו נדבר
        </a>
      </div>
    </section>
  );
}
