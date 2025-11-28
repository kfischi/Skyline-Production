"use client";
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* סרטון Hero */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={styles.heroVideo}
      >
        <source
          src="https://res.cloudinary.com/dptyfvwyo/video/upload/v1764339519/SKYLINE_PRODUCTION_2.2_cdfnv4.mp4"
          type="video/mp4"
        />
        הדפדפן שלך לא תומך בתג video
      </video>
      
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
