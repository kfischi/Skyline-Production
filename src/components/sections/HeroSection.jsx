"use client";
import { useState, useRef, useEffect } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [showSoundHint, setShowSoundHint] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // ✅ מגדירים muted דרך JS בלבד — לא כ-HTML attribute
    // כך iOS Safari יאפשר לנו לשנות אותו אחר כך
    video.muted = true;

    video.play().catch(error => {
      console.log('Autoplay prevented:', error);
    });

    const timer = setTimeout(() => {
      setShowSoundHint(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const toggleMute = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      // ✅ iOS Safari fix: pause → set muted=false → play
      // video.load() גורם לריסטרט — לא עושים אותו
      video.pause();
      video.muted = false;
      try {
        await video.play();
        setIsMuted(false);
      } catch (err) {
        // אם הדפדפן חסם — נשאר מושתק
        video.muted = true;
        console.log('Unmute failed:', err);
      }
    } else {
      video.muted = true;
      setIsMuted(true);
    }

    setShowSoundHint(false);
  };

  return (
    <section className={styles.hero}>

      {/* ✅ אין muted כ-attribute — נשלט רק דרך JS בלבד */}
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className={styles.heroVideo}
      >
        <source
          src="https://res.cloudinary.com/daez7e9nj/video/upload/v1764800418/%D7%97%D7%93%D7%A9_bjjfxo.mp4"
          type="video/mp4"
        />
        הדפדפן שלך לא תומך בתג video
      </video>

      <div className={styles.heroOverlay}></div>

      {/* הודעת סאונד */}
      {showSoundHint && isMuted && (
        <div className={styles.soundHint}>
          לחץ 🔊 לסאונד
        </div>
      )}

      {/* ✅ כפתור סאונד — מחוץ ל-heroContent, absolute על ה-section */}
      <button
        className={styles.soundButton}
        onClick={toggleMute}
        aria-label={isMuted ? "הפעל קול" : "השתק"}
      >
        {isMuted ? (
          /* אייקון מושתק */
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        ) : (
          /* אייקון עם קול */
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )}
      </button>

      {/* כותרת + חץ גלילה בתחתית */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          הפקת אירועי קונספט
          <br />
          <span className={styles.heroSubtitle}>בניהול מלא</span>
        </h1>

        <button
          className={styles.scrollButton}
          onClick={scrollToContent}
          aria-label="גלול למטה"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>

    </section>
  );
}
