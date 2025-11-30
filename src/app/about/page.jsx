import styles from './About.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'דנה בר מייזליס | Skyline Events',
  description: 'להפוך את ה"וואו" שבראש שלכם – למציאות. 9 שנים, 200+ אירועים, 100% שביעות רצון.',
};

export default function AboutPage() {
  const podcasts = [
    {
      id: 1,
      title: 'מחיר לא סופי',
      duration: '18 דקות',
      description: 'למה התקציב שלך לא יהיה מספיק ולמה זה בסדר',
      url: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528916/%D7%9E%D7%97%D7%99%D7%A8_%D7%9C%D7%90_%D7%A1%D7%95%D7%A4%D7%99_te573k.mp4'
    },
    {
      id: 2,
      title: 'ניקיון דבר ראשון',
      duration: '14 דקות',
      description: 'איך בוחרים אולם שלא יהיה חרא',
      url: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528915/%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F_%D7%93%D7%91%D7%A8_%D7%A8%D7%90%D7%A9%D7%95%D7%9F_erd6zo.mp4'
    },
    {
      id: 3,
      title: 'בקרת איכות',
      duration: '12 דקות',
      description: 'איך אני בודקת שכל סרבר לא עושה קלקול',
      url: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528915/%D7%91%D7%A7%D7%A8%D7%AA_%D7%90%D7%99%D7%9B%D7%95%D7%AA_glxlod.mp4'
    },
    {
      id: 4,
      title: 'לנהל את המנהל',
      duration: '16 דקות',
      description: 'איך להגיד לצוות שהם מחמאים זה לא מספיק',
      url: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528914/%D7%9C%D7%A0%D7%94%D7%9C_%D7%90%D7%AA_%D7%94%D7%9E%D7%A0%D7%94%D7%9C_jo3sxf.mp4'
    },
    {
      id: 5,
      title: 'חתונה מאטל',
      duration: '22 דקות',
      description: 'שיא: איך עשינו חתונה שחורה ממש',
      url: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528914/%D7%97%D7%AA%D7%95%D7%A0%D7%94_%D7%9E%D7%90%D7%98%D7%9C_xqtjnr.mp4'
    },
    {
      id: 6,
      title: 'חוזה מותנה טעימות',
      duration: '11 דקות',
      description: 'מה הטעים בחוזה וכמה זה עולה להתאכזב',
      url: 'https://res.cloudinary.com/daez7e9nj/video/upload/v1764528914/%D7%97%D7%95%D7%96%D7%94_%D7%9E%D7%95%D7%AA%D7%A0%D7%94_%D7%98%D7%A2%D7%99%D7%9E%D7%95%D7%AA_jjzy0r.mp4'
    }
  ];

  return (
    <div className={styles.container}>
      {/* HERO */}
      <section className={styles.heroSection}>
        <img 
          src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764538259/%D7%93%D7%A0%D7%94_%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99_%D7%94%D7%A4%D7%A7%D7%95%D7%AA_%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D_kxjwin.png"
          alt="דנה"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
      </section>

      {/* ABOUT */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <h1>דנה | Skyline Events</h1>
          
          <p className={styles.tagline}>
            להפוך את ה"וואו" שבראש שלכם – למציאות.
          </p>

          <div className={styles.story}>
            <p>
              נעים להכיר. על הנייר? אני "מפיקת אירועים". בפועל? אני הגשר בין הדמיון לקרקע. לכולנו יש את התמונה הזו בראש – הרגע המושלם, האווירה, הצבעים. אבל הדרך לשם רצופה באקסלים, לוגיסטיקה, ספקים ולחץ.
            </p>
            
            <p>
              כאן אני נכנסת. אני המקום שבו הרגש פוגש את התכנון המדויק. אחרי 9 שנים וקרוב ל-200 אירועים, אני מביאה איתי ארגז כלים שהוא שילוב נדיר בין לב ענק לראש שקט. ב-Skyline אין מקום למזל, ואין "בערך". יש רק דבר אחד: אירוע שהוא בול אתם.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>9+</div>
              <div className={styles.statLabel}>שנות ניסיון</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>אירועים</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>מרוצים</div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContainer}>
          <h2>המצפן שלי</h2>
          <p className={styles.philosophySubtitle}>(או: למה אתם יכולים להיות רגועים)</p>
          
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <h3>רואים את מה ששקוף לאחרים</h3>
              <p>
                כולם מסתכלים על העיצוב של הנר? מצוין. אני מסתכלת על כיוון הרוח מהמזגן, כדי לוודא שהוא לא יכבה ברגע השיא. המומחיות שלי היא לחשוב על הפרטים הקטנים והבלתי צפויים, ולמנוע תקלות עוד לפני שהן נוצרו.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <h3>נבחרת מנצחת בלבד</h3>
              <p>
                אני לא מהמרת על האירוע שלכם. אני עובדת אך ורק עם אנשי המקצוע הכי חזקים בתעשייה. אנשים שבאים לתת את הנשמה, לא להעביר כרטיס. כשאתם איתי, אתם עטופים בטובים ביותר.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <h3>אתם האורחים, לא המנהלים</h3>
              <p>
                ביום האירוע התפקיד שלכם הוא אחד ויחיד: להתרגש, לחבק ולעוף באוויר. תשאירו לי את התיאומים, הריצות וה"כיבוי שריפות" מאחורי הקלעים. אני כאן כדי שאתם תוכלו פשוט לנשום וליהנות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PODCASTS */}
      <section className={styles.podcastSection}>
        <div className={styles.podcastContainer}>
          <div className={styles.podcastHeader}>
            <h2>הפודקאסט שלי</h2>
            <p>
              אנשים שואלים אותי הרבה על איך אני עושה מה שאני עושה. הפודקאסטים האלה הם התשובה.
            </p>
          </div>

          <div className={styles.podcastGrid}>
            {podcasts.map((podcast) => (
              <div key={podcast.id} className={styles.podcastCard}>
                <div className={styles.podcastVideoContainer}>
                  <video
                    src={podcast.url}
                    className={styles.podcastVideo}
                    controls
                    controlsList="nodownload"
                  />
                </div>
                <div className={styles.podcastInfo}>
                  <h3>{podcast.title}</h3>
                  <p className={styles.podcastDesc}>{podcast.description}</p>
                  <span className={styles.duration}>{podcast.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PODCAST LINKS */}
      <section className={styles.podcastLinksSection}>
        <div className={styles.podcastLinksContainer}>
          <h3>רוצים עוד?</h3>
          <p>כל הפרקים זמינים ב-YouTube ו-Instagram</p>
          
          <div className={styles.linksGrid}>
            <a 
              href="https://www.youtube.com/@SkylineProductions" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.linkCard}
              title="YouTube - כל הפרקים"
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className={styles.linkText}>YouTube</span>
            </a>
            <a 
              href="https://www.instagram.com/skyline.productions" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.linkCard}
              title="Instagram - תיעוד יומיומי"
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className={styles.linkText}>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS COLLAGE */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContainer}>
          <h2>מה הם אומרים</h2>
          <p className={styles.testimonialsSubtitle}>תודות ממי שבא לאחרונה לטיול עם Skyline</p>

          <div className={styles.collageGrid}>
            <div className={styles.collageItem}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527697/Screenshot_20210929-112335_WhatsApp_cltzr5.jpg"
                alt="תודה 1"
              />
            </div>
            <div className={styles.collageItem}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527684/Screenshot_20210927-145807_WhatsAppBusiness_kbi3xk.jpg"
                alt="תודה 2"
              />
            </div>
            <div className={styles.collageItem}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527628/Screenshot_20210902-190734_Samsung_Internet_gmvuxw.jpg"
                alt="תודה 3"
              />
            </div>
            <div className={styles.collageItem}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527599/Screenshot_20210423-072737_WhatsAppBusiness_orj9s1.jpg"
                alt="תודה 4"
              />
            </div>
            <div className={styles.collageItem}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527697/Screenshot_20210929-112335_WhatsApp_cltzr5.jpg"
                alt="תודה 5"
              />
            </div>
            <div className={styles.collageItem}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527684/Screenshot_20210927-145807_WhatsAppBusiness_kbi3xk.jpg"
                alt="תודה 6"
              />
            </div>
            <div className={styles.collageItem}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527628/Screenshot_20210902-190734_Samsung_Internet_gmvuxw.jpg"
                alt="תודה 7"
              />
            </div>
            <div className={styles.collageItem}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527599/Screenshot_20210423-072737_WhatsAppBusiness_orj9s1.jpg"
                alt="תודה 8"
              />
            </div>
            <div className={styles.collageItem}>
              <img 
                src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764527697/Screenshot_20210929-112335_WhatsApp_cltzr5.jpg"
                alt="תודה 9"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalSection}>
        <div className={styles.finalContainer}>
          <h2>זה הסיפור שלי.</h2>
          <p>עכשיו בואו ניצור את הסיפור שלכם. דברו איתי.</p>
          <a href="mailto:info@skylineproductions.com" className={styles.finalCta}>
            תיאום פגישה
          </a>
        </div>
      </section>
    </div>
  );
}
