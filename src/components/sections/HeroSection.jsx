"use client";
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

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
      
      {/* כותרת בתחתית */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          הפקת אירועי קונספט
          <br />
          <span className={styles.heroSubtitle}>בניהול מלא</span>
        </h1>
        
        {/* חץ למטה */}
        <button 
          className={styles.scrollButton}
          onClick={scrollToContent}
          aria-label="גלול למטה"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
