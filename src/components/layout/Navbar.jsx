"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Skyline Productions
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/method">השיטה</Link></li>
          <li><Link href="/portfolio">הביצוע</Link></li>
          <li><Link href="/production-room">חדר ההפקה</Link></li>
        </ul>
        <a href="mailto:info@skylineproductions.com" className={styles.ctaButton}>
          יצירת קשר
        </a>
      </div>
    </nav>
  );
}
