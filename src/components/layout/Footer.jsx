import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.column}>
          <Link href="/" className={styles.logo}>
            Skyline Productions
          </Link>
          <p className={styles.tagline}>
            הופכים חזון למציאות. מא' ועד ת'.
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>ניווט</h4>
          <ul className={styles.linksList}>
            <li><Link href="/">עמוד הבית</Link></li>
            <li><Link href="/method">השיטה</Link></li>
            <li><Link href="/portfolio">הביצוע</Link></li>
            <li><Link href="/production-room">חדר ההפקה</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>יצירת קשר</h4>
          <p>מוכנים להתחיל?</p>
          <a href="mailto:info@skylineproductions.com" className={styles.ctaButton}>
            לתאום פגישה
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Skyline Productions. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}
