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

    // ✅ תיקון מפתח: מגדירים muted דרך JS בלבד — לא כ-HTML attribute
    // ב-iOS Safari, muted כ-attribute נעול ולא ניתן לשנות אותו דרך JS
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

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      // ✅ תיקון iOS: כדי להפעיל קול אחרי autoplay מושתק,
      // צריך לשמור currentTime, לעשות load() מחדש, ולהגדיר muted=false
      const currentTime = video.currentTime;
      video.muted = false;
      
      // iOS Safari דורש זאת — בלי load() הקול לא יפעל
      video.load();
      video.currentTime = currentTime;
      video.muted = false;
      
      video.play().catch(err => {
        console.log('Play failed:', err);
      });
      
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }

    setShowSoundHint(false);
  };

  return (
    <section className={styles.hero}>
      {/* ✅ הסרנו את muted כ-attribute — נשלט רק דרך JS */}
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className={styles.heroVideo}
      >
        <source
          src="https://res.cloudinary.com/daez7e9nj/video/upload/v1764800418/חדש_bjjfxo.mp4"
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

      {/* כפתור קול */}
      <button
        className={styles.soundButton}
        onClick={toggleMute}
        aria-label={isMuted ? "הפעל קול" : "השתק"}
      >
        {isMuted ? (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )}
      </button>

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
