"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  // בדוק אם הלינק הוא הדף הפעיל
  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const navItems = [
    { label: 'השיטה', href: '/method' },
    { label: 'הביצוע', href: '/portfolio' },
    { label: 'חדר ההפקה', href: '/production-room' }
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* לוגו - שמאל */}
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          Skyline Productions
        </Link>

        {/* תפריט רגיל - מרכז - Desktop */}
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* כפתור יצירת קשר - ימין */}
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
          <li>
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className={isActive('/') ? styles.mobileActive : ''}
            >
              עמוד הבית
            </Link>
          </li>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                onClick={closeMobileMenu}
                className={isActive(item.href) ? styles.mobileActive : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
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
