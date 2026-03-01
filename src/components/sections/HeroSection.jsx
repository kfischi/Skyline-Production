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

    // מגדירים muted דרך JS — לא כ-attribute!
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
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const newMutedState = !isMuted;

    // הטריק הקריטי למובייל: יוצרים מחדש את מצב הנגן
    video.muted = newMutedState;

    // iOS דורש load() + play() מחדש אחרי שינוי muted
    if (!newMutedState) {
      const currentTime = video.currentTime;
      video.load();
      video.currentTime = currentTime;
      video.muted = false;
      video.play().catch(err => console.log('Play failed:', err));
    }

    setIsMuted(newMutedState);
    setShowSoundHint(false);
  };

  return (
    <section className={styles.hero}>
      {/* ⚠️ הסרנו את muted כ-attribute — עכשיו נשלט רק דרך JS */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        playsInline        // חיוני ל-iOS
        className={styles.heroVideo}
      >
        <source
          src="https://res.cloudinary.com/daez7e9nj/video/upload/v1764800418/חדש_bjjfxo.mp4"
          type="video/mp4"
        />
        הדפדפן שלך לא תומך בתג video
      </video>
      
      <div className={styles.heroOverlay}></div>
      
      {showSoundHint && isMuted && (
        <div className={styles.soundHint}>
          לחץ 🔊 לסאונד
        </div>
      )}
      
      <button 
        className={styles.soundButton}
        onClick={toggleMute}
        aria-label={isMuted ? "הפעל קול" : "השתק"}
      >
        {isMuted ? (
          /* אייקון מושתק */
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 19L19 20.27 20.27 19 5.27 4 4.27 3zM12 4 9.91 6.09 12 8.18V4z"/>
          </svg>
        ) : (
          /* אייקון עם קול */
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        )}
      </button>

      {/* שאר התוכן של ה-hero */}
    </section>
  );
}
