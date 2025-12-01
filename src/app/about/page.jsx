"use client";
import { useState, useEffect } from "react";
import styles from "./About.module.css";

export default function AboutPage() {
  const [counter, setCounter] = useState({
    years: 0,
    events: 0,
    satisfaction: 0,
  });

  // Animated counter
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => ({
        years: Math.min(prev.years + 1, 10),
        events: Math.min(prev.events + 3, 200),
        satisfaction: Math.min(prev.satisfaction + 2, 100),
      }));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      image: "https://res.cloudinary.com/daez7e9nj/image/upload/v1764527697/Screenshot_20210929-112335_WhatsApp_cltzr5.jpg",
      text: "דנה עשתה לנו קסם! ההפקה הייתה מושלמת מתחילה ועד סוף.",
      author: "משפחת כהן",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/daez7e9nj/image/upload/v1764527684/Screenshot_20210927-145807_WhatsAppBusiness_kbi3xk.jpg",
      text: "הפקה ברמה עולמית! דנה והצוות שלה הפכו את האירוע שלנו לבלתי נשכח.",
      author: "חברת Hi-Tech",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/daez7e9nj/image/upload/v1764527628/Screenshot_20210902-190734_Samsung_Internet_gmvuxw.jpg",
      text: "חלמנו על משהו שונה ודנה הפכה את זה למציאות. האורחים עדיין מדברים!",
      author: "יעל ודניאל",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/daez7e9nj/image/upload/v1764527599/Screenshot_20210423-072737_WhatsAppBusiness_orj9s1.jpg",
      text: "כל פרט היה במקום. זו הייתה החתונה של חלומותינו.",
      author: "רומן וניקי",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/daez7e9nj/image/upload/v1764527693/Screenshot_20210926-134522_WhatsApp_q2p8x9.jpg",
      text: "דנה הייתה אחד העסקה שלנו החשובה ביותר. היא הבינה אותנו מהרגע הראשון.",
      author: "שרה ונתנאל",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/daez7e9nj/image/upload/v1764527687/Screenshot_20210925-190045_WhatsAppBusiness_h8k2p1.jpg",
      text: "אני לא יודע איך היא עשתה את זה, אבל כל דקה הייתה מושלמת.",
      author: "מיכל וגיא",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/daez7e9nj/image/upload/v1764527681/Screenshot_20210923-112233_Samsung_Internet_w5f3m8.jpg",
      text: "ההפקה של דנה הייתה בדיוק מה שחסר לאירוע שלנו.",
      author: "עמית וליאור",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/daez7e9nj/image/upload/v1764527675/Screenshot_20210920-164500_WhatsApp_r9k4b2.jpg",
      text: "אתה מרגיש ש־דנה באמת אכפת לה. זה לא עסק, זה קריאה.",
      author: "אמל ודרן",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/daez7e9nj/image/upload/v1764527669/Screenshot_20210918-093015_WhatsAppBusiness_t7m9x3.jpg",
      text: "הפודקאסט של דנה עזר לנו להבין בדיוק מה אנחנו רוצים.",
      author: "ירדן ותום",
    },
  ];

  const podcasts = [
    { id: 1, title: "השילוש הקדוש", url: "https://res.cloudinary.com/dptyfvwyo/video/upload/v1764107423/%D7%94%D7%A9%D7%99%D7%9C%D7%95%D7%A9_%D7%94%D7%A7%D7%93%D7%95%D7%A9_qjyznh.mp4" },
    { id: 2, title: "אותי כמתנה", url: "https://res.cloudinary.com/dptyfvwyo/video/upload/v1764107423/%D7%90%D7%95%D7%AA%D7%99_%D7%9B%D7%9E%D7%AA%D7%A0%D7%94_j1tbry.mp4" },
    { id: 3, title: "5 סימנים מחשידים", url: "https://res.cloudinary.com/dptyfvwyo/video/upload/v1764107422/5_%D7%A1%D7%99%D7%9E%D7%A0%D7%99%D7%9D_%D7%9E%D7%97%D7%A9%D7%99%D7%93%D7%99%D7%9D_fheu5s.mp4" },
    { id: 4, title: "בלי הפתעות", url: "https://res.cloudinary.com/dptyfvwyo/video/upload/v1764275620/%D7%91%D7%9C%D7%99_%D7%94%D7%A4%D7%AA%D7%A2%D7%95%D7%AA_rax5ij.mp4" },
    { id: 5, title: "יום בחיי מפיקה", url: "https://res.cloudinary.com/dptyfvwyo/video/upload/v1764275620/%D7%99%D7%95%D7%9D_%D7%91%D7%97%D7%99%D7%99_%D7%9E%D7%A4%D7%99%D7%A7%D7%94_tftfri.mp4" },
  ];

  const philosophy = [
    {
      icon: "🔍",
      title: "רואים את מה ששקוף",
      description: "אני לא מסתכלת רק על פרטים, אני רואה את הניואנסים שעושים את ההבדל.",
    },
    {
      icon: "⭐",
      title: "נבחרת מנצחת בלבד",
      description: "אני עובדת רק עם ספקים שעברו את המבחן שלי.",
    },
    {
      icon: "🎉",
      title: "אתם האורחים של חיי",
      description: "כל אירוע הוא משהו שונה, וכל אחד מכם ייחודי.",
    },
  ];

  return (
    <div className={styles.container}>
      {/* HERO WITH NEW IMAGE */}
      <section className={styles.heroSection}>
        <img
          src="https://res.cloudinary.com/daez7e9nj/image/upload/v1764581919/%D7%93%D7%A0%D7%94_%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99_%D7%94%D7%A4%D7%A7%D7%95%D7%AA_%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D_2_rfzi7m.png"
          alt="דנה - Skyline Productions"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
        <h1 className={styles.heroTitle}>דנה</h1>
      </section>

      {/* ABOUT SECTION */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.sectionTitle}>הסיפור שלי</h2>
          
          <div className={styles.storyContent}>
            <p>
              בטייטל אני "מפיקת אירועים". בפועל? אני מחברת בין הדמיון למציאות.
            </p>

            <p>
              לכולנו יש את התמונה הזו בראש כשחושבים על האירוע שלנו – הרגע המושלם, האווירה, הצבעים. אבל הדרך לשם רצופה בטבלאות, לוגיסטיקה, ספקים ולחץ.
            </p>

            <p>
              <strong>כאן אני נכנסת.</strong> אני המקום שבו הרגש פוגש את התכנון המדויק.
            </p>

            <p>
              אחרי יותר מ-<strong>10 שנים</strong> וקרוב ל-<strong>200 אירועים</strong>, אני מביאה איתי ארגז כלים שהוא שילוב נדיר בין לב ענק לראש שקט.
            </p>

            <p>
              <strong>ב-Skyline אין מקום למזל, ואין "בערך". יש רק דבר אחד: אירוע שהוא בול אתם.</strong>
            </p>
          </div>

          {/* ANIMATED COUNTER */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>{counter.years}+</div>
              <div className={styles.statLabel}>שנות ניסיון</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>{counter.events}</div>
              <div className={styles.statLabel}>אירועים מושלמים</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>{counter.satisfaction}%</div>
              <div className={styles.statLabel}>לקוחות שמחים</div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContainer}>
          <h2>במה אני מאמינה</h2>

          <div className={styles.philosophyGrid}>
            {philosophy.map((item) => (
              <div key={item.title} className={styles.philosophyCard}>
                <div className={styles.icon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PODCASTS SECTION */}
      <section className={styles.podcastSection}>
        <div className={styles.podcastContainer}>
          <h2>מחדר ההפקה</h2>

          <div className={styles.podcastGrid}>
            {podcasts.map((podcast) => (
              <div key={podcast.id} className={styles.podcastCard}>
                <div className={styles.videoContainer}>
                  <video
                    src={podcast.url}
                    controls
                    controlsList="nodownload"
                    playsInline
                    className={styles.video}
                  />
                </div>
                <div className={styles.podcastInfo}>
                  <h3>{podcast.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContainer}>
          <h2>מה אומרים לי הלקוחות</h2>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className={styles.testimonialImage}
                />
                <div className={styles.testimonialContent}>
                  <p className={styles.testimonialText}>"{testimonial.text}"</p>
                  <p className={styles.testimonialAuthor}>— {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalSection}>
        <h2>מוכנים להתחיל?</h2>
        <p>בואו נדבר על האירוע שלכם</p>
        <a href="mailto:info@skylineproductions.com" className={styles.ctaButton}>
          צרו קשר
        </a>
      </section>
    </div>
  );
}
