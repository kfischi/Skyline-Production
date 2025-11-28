"use client";
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* סרטון Canva */}
      <div className={styles.canvaContainer}>
        <iframe 
          loading="eager"
          className={styles.canvaIframe}
          src="https://www.canva.com/design/DAG57gR7WJg/1lp_4Fm3uZ7ris1U1kYkHA/watch?embed" 
          allowFullScreen
          allow="fullscreen"
          title="Skyline Productions Intro"
        />
      </div>
      
      <div className={styles.heroOverlay}></div>
      
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          הפקת אירועי קונספט
          <br />
          <span className={styles.heroSubtitle}>בניהול מלא</span>
        </h1>
        <p className={styles.heroDescription}>
          אנחנו לא רק מפיקים אירועים. אנחנו הופכים חזון למציאות.
        </p>
        <a href="mailto:info@skylineproductions.com" className={styles.ctaButton}>
          בואו נדבר
        </a>
      </div>
    </section>
  );
}
