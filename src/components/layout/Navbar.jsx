"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          Skyline Productions
        </Link>

        {/* תפריט רגיל - Desktop */}
        <ul className={styles.navLinks}>
          <li><Link href="/method">השיטה</Link></li>
          <li><Link href="/portfolio">הביצוע</Link></li>
          <li><Link href="/production-room">חדר ההפקה</Link></li>
        </ul>

        <a href="mailto:info@skylineproductions.com" className={styles.ctaButton}>
          יצירת קשר
        </a>

        {/* כפתור המבורגר - Mobile */}
        <button 
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={toggleMobileMenu}
          aria-label="תפריט"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* תפריט נייד */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.show : ''}`}>
        <ul className={styles.mobileNavLinks}>
          <li><Link href="/" onClick={closeMobileMenu}>עמוד הבית</Link></li>
          <li><Link href="/method" onClick={closeMobileMenu}>השיטה</Link></li>
          <li><Link href="/portfolio" onClick={closeMobileMenu}>הביצוע</Link></li>
          <li><Link href="/production-room" onClick={closeMobileMenu}>חדר ההפקה</Link></li>
          <li>
            <a 
              href="mailto:info@skylineproductions.com" 
              className={styles.mobileCtaButton}
              onClick={closeMobileMenu}
            >
              יצירת קשר
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
}
