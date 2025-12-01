"use client";
import { useState, useEffect } from 'react';
import styles from './About.module.css';

export default function AboutPage() {
  // Animated Counter
  const [yearsCount, setYearsCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    const yearsInterval = setInterval(() => {
      setYearsCount(prev => prev >= 10 ? 10 : prev + 1);
    }, 100);

    const eventsInterval = setInterval(() => {
      setEventsCount(prev => prev >= 200 ? 200 : prev + 10);
    }, 50);

    const satisfactionInterval = setInterval(() => {
      setSatisfactionCount(prev => prev >= 100 ? 100 : prev + 5);
    }, 50);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(eventsInterval);
      clearInterval(satisfactionInterval);
    };
  }, []);

  // 6 Podcasts - הסרטונים הנכונים!
  const podcasts = [
    {
      id: 1,
      title: 'מחיר לא סופי',
      videoUrl: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528916/מחיר_לא_סופי_te573k.mp4',
    },
    {
      id: 2,
      title: 'ניקיון - דבר ראשון',
      videoUrl: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528915/ניקיון_דבר_ראשון_erd6zo.mp4',
    },
    {
      id: 3,
      title: 'בקרת איכות',
      videoUrl: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528915/בקרת_איכות_glxlod.mp4',
    },
    {
      id: 4,
      title: 'לנהל את המנהל',
      videoUrl: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528914/לנהל_את_המנהל_jo3sxf.mp4',
    },
    {
      id: 5,
      title: 'חתונה מאטל',
      videoUrl: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528914/חתונה_מאטל_xqtjnr.mp4',
    },
    {
      id: 6,
      title: 'חוזה מותנה - טעימות',
      videoUrl: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528914/חוזה_מותנה_טעימות_jjzy0r.mp4',
    },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img 
          src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764581919/דנה_ישראלי_הפקות_אירועים_2_rfzi7m.png"
          alt="דנה ישראלי - Skyline Events"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
      </section>

      {/* Main Content */}
      <div className={styles.contentWrapper}>
        
        {/* Dana's Story */}
        <section className={styles.storySection}>
          <h1 className={styles.mainTitle}>דנה | Skyline Events</h1>
          <p className={styles.subtitle}>להפוך את הדימיון שלכם למציאות</p>
          
          <div className={styles.storyText}>
            <p>
              <strong>נעים להכיר. אני דנה.</strong> בתיאוריה אני "מפיקת אירועים". בפועל? אני מחברת בין הדמיון למציאות.
            </p>
            <p>
              לכולנו יש את התמונה הזו בראש – הרגע המושלם, האווירה, הצבעים. אבל הדרך לשם רצופה בטבלאות, לוגיסטיקה, ספקים ולחץ.
            </p>
            <p>
              <strong>כאן אני נכנסת לתמונה</strong>, במקום שבו הרגש פוגש את התכנון המדויק.
            </p>
            <p>
              אחרי <strong>יותר מ-10 שנים</strong> וקרוב ל-<strong>200 אירועים</strong>, אני מביאה איתי ארגז כלים שהוא שילוב בין רגש לראש שקט. ב-Skyline אין מקום למזל, ואין "בערך". יש רק דבר אחד: <strong>אירוע שהוא בול אתם.</strong>
            </p>
          </div>
        </section>

        {/* Animated Counter */}
        <section className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{yearsCount}+</div>
            <div className={styles.statLabel}>שנות ניסיון</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{eventsCount}+</div>
            <div className={styles.statLabel}>אירועים הופקו</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{satisfactionCount}%</div>
            <div className={styles.statLabel}>שביעות רצון</div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className={styles.philosophySection}>
          <h2 className={styles.sectionTitle}>המצפן שלי (או: למה אתם יכולים להיות רגועים)</h2>
          
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <h3 className={styles.cardTitle}>רואים את מה ששקוף לאחרים</h3>
              <p className={styles.cardText}>
                כולם מסתכלים על העיצוב של הנר? מצוין. אני מסתכלת על כיוון הרוח מהמזגן, כדי לוודא שהוא לא יכבה ברגע השיא. המומחיות שלי היא לחשוב על הפרטים הקטנים והבלתי צפויים, ולמנוע תקלות עוד לפני שהן נוצרו.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <h3 className={styles.cardTitle}>נבחרת מנצחת בלבד</h3>
              <p className={styles.cardText}>
                אני לא מהמרת על האירוע שלכם. אני עובדת אך ורק עם אנשי המקצוע הכי חזקים בתעשייה. אנשים שבאים לתת את הנשמה, לא לסמן V. כשאתם איתי, אתם עטופים בטובים ביותר.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <h3 className={styles.cardTitle}>אתם האורחים, לא המנהלים</h3>
              <p className={styles.cardText}>
                ביום האירוע התפקיד שלכם הוא אחד ויחיד: להתרגש, לחבק ולעוף באוויר. תשאירו לי את התיאומים, הריצות וכיבוי השריפות מאחורי הקלעים. אני כאן כדי שאתם תוכלו פשוט לנשום וליהנות.
              </p>
            </div>
          </div>
        </section>

        {/* Podcasts Section - תצוגת טיקטוק 16:9 */}
        <section className={styles.podcastsSection}>
          <h2 className={styles.sectionTitle}>הפודקאסט שלי</h2>
          <p className={styles.sectionSubtitle}>טיפים, סיפורים ותובנות מהשטח</p>
          
          <div className={styles.podcastsGrid}>
            {podcasts.map((podcast) => (
              <div key={podcast.id} className={styles.podcastCard}>
                <div className={styles.videoWrapper}>
                  <video 
                    controls
                    className={styles.podcastVideo}
                    preload="metadata"
                  >
                    <source src={podcast.videoUrl} type="video/mp4" />
                    הדפדפן שלך לא תומך בוידאו
                  </video>
                </div>
                <h3 className={styles.podcastTitle}>{podcast.title}</h3>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a 
              href="https://www.youtube.com/@SkylineProductions" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>כל הפרקים ביוטיוב</span>
            </a>
            
            <a 
              href="https://www.instagram.com/skyline.productions" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>עקבו באינסטגרם</span>
            </a>
          </div>
        </section>

        {/* Testimonials Collage */}
        <section className={styles.testimonialsSection}>
          <h2 className={styles.sectionTitle}>הנה טעימה מהלקוחות המדהימים שלי לאורך הדרך</h2>
          
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527697/Screenshot_20210929-112335_WhatsApp_cltzr5.jpg" 
                alt="המלצה 1"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527694/Screenshot_20210929-112330_WhatsApp_t5ynmg.jpg" 
                alt="המלצה 2"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527692/Screenshot_20210929-112320_WhatsApp_r03b2m.jpg" 
                alt="המלצה 3"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527689/Screenshot_20210929-112316_WhatsApp_h7nw9u.jpg" 
                alt="המלצה 4"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527686/Screenshot_20210929-112301_WhatsApp_xfc2p9.jpg" 
                alt="המלצה 5"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527684/Screenshot_20210927-145807_WhatsAppBusiness_kbi3xk.jpg" 
                alt="המלצה 6"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527681/Screenshot_20210927-145759_WhatsAppBusiness_cn3kmp.jpg" 
                alt="המלצה 7"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527645/Screenshot_20210927-145637_WhatsAppBusiness_qvdno0.jpg" 
                alt="המלצה 8"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527641/Screenshot_20210927-145435_WhatsAppBusiness_eli3k8.jpg" 
                alt="המלצה 9"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527642/Screenshot_20210927-145628_WhatsAppBusiness_cj9niu.jpg" 
                alt="המלצה 10"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527640/Screenshot_20210927-145619_WhatsAppBusiness_yspto8.jpg" 
                alt="המלצה 11"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764544269/Screenshot_20210927-145427_WhatsAppBusiness_tsjqsr.jpg" 
                alt="המלצה 12"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527628/Screenshot_20210902-172352_WhatsApp_ghkpef.jpg" 
                alt="המלצה 13"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527626/Screenshot_20210902-131503_WhatsApp_nvrky0.jpg" 
                alt="המלצה 14"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527613/Screenshot_20210729-040527_WhatsAppBusiness_cucy9d.jpg" 
                alt="המלצה 15"
                className={styles.testimonialImage}
              />
            </div>
            <div className={styles.testimonialCard}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527599/Screenshot_20210423-072737_WhatsAppBusiness_orj9s1.jpg" 
                alt="המלצה 16"
                className={styles.testimonialImage}
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCTA}>
          <h2 className={styles.ctaTitle}>זה הסיפור שלי.</h2>
          <p className={styles.ctaText}>עכשיו בואו ניצור את הסיפור שלכם. דברו איתי.</p>
          <a href="mailto:info@skylineproductions.com" className={styles.ctaButton}>
            יצירת קשר
          </a>
        </section>

      </div>
    </div>
  );
}
