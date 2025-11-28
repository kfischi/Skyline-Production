"use client";
import { useState } from 'react';
import styles from './AccessibilityWidget.module.css';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  return (
    <>
      {/* כפתור ראשי */}
      <button 
        className={styles.accessibilityButton}
        onClick={toggleWidget}
        aria-label="תפריט נגישות"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
        </svg>
      </button>

      {/* פאנל נגישות */}
      {isOpen && (
        <div className={styles.accessibilityPanel}>
          <div className={styles.panelHeader}>
            <h3>הגדרות נגישות</h3>
            <button 
              className={styles.closeButton}
              onClick={toggleWidget}
              aria-label="סגור"
            >
              ✕
            </button>
          </div>

          <div className={styles.panelContent}>
            {/* גודל טקסט */}
            <div className={styles.control}>
              <label>גודל טקסט</label>
              <div className={styles.buttonGroup}>
                <button onClick={decreaseFontSize} aria-label="הקטן טקסט">
                  A-
                </button>
                <button onClick={resetFontSize} aria-label="אפס גודל טקסט">
                  A
                </button>
                <button onClick={increaseFontSize} aria-label="הגדל טקסט">
                  A+
                </button>
              </div>
            </div>

            {/* ניגודיות */}
            <div className={styles.control}>
              <label>ניגודיות גבוהה</label>
              <button 
                className={`${styles.toggleButton} ${highContrast ? styles.active : ''}`}
                onClick={toggleContrast}
              >
                {highContrast ? 'מופעל' : 'כבוי'}
              </button>
            </div>

            {/* קישור להצהרת נגישות */}
            <div className={styles.link}>
              <a href="/accessibility">הצהרת נגישות</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
