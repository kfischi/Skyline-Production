import styles from './About.module.css';
import NewsletterForm from './NewsletterForm';

// TODO: Import from JSON when ready
// import aboutData from '@/data/about-podcast-data.json';

export default function AboutPage() {
  // Temporary data - replace with import from JSON
  const data = {
    hero: {
      title: "היי, אני דנה ישראלי",
      subtitle: "ובעשור האחרון הפכתי חזונות למציאות",
      description: "מפיקה, אמנית קונספט, ובעיקר - השותפה שלכם ליצירת אירועים בלתי נשכחים",
      heroImage: "https://res.cloudinary.com/daez7e9nj/image/upload/v1764513457/%D7%A4%D7%95%D7%93%D7%A7%D7%90%D7%A1%D7%98_yskgrw.png",
      ctaText: "תראו איך אני עושה את זה",
      ctaVideoUrl: "https://www.youtube.com/embed/FEATURED_VIDEO_ID"
    },
    story: {
      title: "הסיפור שלי",
      paragraphs: [
        "הכל התחיל ב-2015. לא מתוכנית, אלא מאהבה טהורה ליופי, לפרטים, וליכולת להפוך רגע אחד לזיכרון של פעם בחיים. התחלתי קטן - חתונה אחת, אירוע אחד - וגיליתי שזה בדיוק מה שאני אמורה לעשות.",
        "מה שמייחד את Skyline זה לא רק הניסיון או הספקים (למרות ששני אלה קריטיים). זה הגישה. אני לא רק מפיקה אירועים - אני שותפה בתהליך. מהרגע שאתם חותמים איתי ועד שהאורח האחרון עוזב, אני כאן. ממש.",
        "היום, אחרי מאות אירועים, עשרות זוגות מאושרים ואינספור קונספטים שהפכו לוויראליים - אני עדיין מתרגשת מכל פרויקט חדש. כי בסוף, זה לא עבודה. זה אומנות."
      ],
      image: "https://res.cloudinary.com/daez7e9nj/image/upload/v1764513457/%D7%A4%D7%95%D7%93%D7%A7%D7%90%D7%A1%D7%98_yskgrw.png",
      signature: "דנה ישראלי, מייסדת Skyline Productions"
    },
    timeline: [
      { year: "2015", title: "ההתחלה", description: "הכל התחיל מאהבה ליצירה ולפרטים הקטנים", icon: "✨" },
      { year: "2018", title: "הקמת Skyline", description: "הקמתי את Skyline Productions עם חזון ברור", icon: "🚀" },
      { year: "2022", title: "פריצת דרך", description: "פסטיבל Marry Land - האירוע שהכל השתנה", icon: "🎉" },
      { year: "2024", title: "היום", description: "200+ אירועים, רשת ספקים מובילה, ומוניטין בינלאומי", icon: "💎" }
    ],
    stats: [
      { number: "200+", label: "אירועים מוצלחים", icon: "🎊" },
      { number: "9+", label: "שנות ניסיון", icon: "⏰" },
      { number: "100%", label: "שביעות רצון לקוחות", icon: "⭐" },
      { number: "50K+", label: "צופים ביוטיוב", icon: "📺" }
    ],
    values: [
      { icon: "✨", title: "תשומת לב לפרטים", description: "כל פרט קטן חשוב. אני דואגת שהכל יהיה מושלם מהרגע הראשון ועד האחרון." },
      { icon: "🤝", title: "שותפות אמיתית", description: "אני לא רק מפיקה - אני השותפה שלכם בתהליך. הצלחה שלכם היא הצלחה שלי." },
      { icon: "💎", title: "איכות ללא פשרות", description: "אני עובדת רק עם הספקים הטובים ביותר ובודקת הכל פעמיים. בלי קיצורי דרך." },
      { icon: "🎨", title: "יצירתיות", description: "כל אירוע הוא הזדמנות ליצור משהו ייחודי. אני לא עושה copy-paste." }
    ],
    podcasts: [
      {
        id: 1,
        title: "פרק 1: 5 סימנים שהאולם עושה עליכם סיבוב",
        description: "לפני שאתם סוגרים חוזה, תשמעו את 5 הדגלים האדומים",
        videoUrl: "https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425656/5_סימנים_שהאולם_kbqjzv.mp4",
        youtubeId: "YOUTUBE_ID_1",
        thumbnail: "https://res.cloudinary.com/dptyfvwyo/image/upload/c_fill,w_800,h_450/v1715425656/5_סימנים_שהאולם_kbqjzv.jpg",
        duration: "8:45",
        views: "12.5K"
      },
      {
        id: 2,
        title: "פרק 2: פדיחת החופה - סיפור אמיתי",
        description: "מה קורה כשהבד של החופה מגיע בצבע הלא נכון?",
        videoUrl: "https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425660/VID-20250916-WA0007_q8j5hk.mp4",
        youtubeId: "YOUTUBE_ID_2",
        thumbnail: "https://res.cloudinary.com/dptyfvwyo/image/upload/c_fill,w_800,h_450/v1715425660/VID-20250916-WA0007_q8j5hk.jpg",
        duration: "12:20",
        views: "18.3K"
      },
      {
        id: 3,
        title: "פרק 3: All Black Metal - הקונספט שהפך ווירלי",
        description: "איך יצרנו את הקונספט הכי נועז שעשינו אי פעם",
        videoUrl: "https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425663/VID-20250916-WA0002_rdm3vh.mp4",
        youtubeId: "YOUTUBE_ID_3",
        thumbnail: "https://res.cloudinary.com/dptyfvwyo/image/upload/c_fill,w_800,h_450/v1715425663/VID-20250916-WA0002_rdm3vh.jpg",
        duration: "18:15",
        views: "25.7K"
      }
    ],
    testimonials: [
      {
        id: 1,
        clientName: "יעל ודניאל",
        event: "חתונה - ג'ונגל אורבני",
        quote: "דנה הפכה את החלום שלנו למציאות",
        videoUrl: "URL_HERE",
        thumbnail: "URL_HERE",
        duration: "0:45"
      },
      {
        id: 2,
        clientName: "משפחת כהן",
        event: "חתונה",
        quote: "ההפקה הייתה מושלמת מתחילה ועד סוף",
        videoUrl: "URL_HERE",
        thumbnail: "URL_HERE",
        duration: "0:38"
      },
      {
        id: 3,
        clientName: "חברת Hi-Tech",
        event: "אירוע עסקי",
        quote: "הפקה ברמה עולמית",
        videoUrl: "URL_HERE",
        thumbnail: "URL_HERE",
        duration: "0:52"
      }
    ]
  };

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <img
            src={data.hero.heroImage}
            alt="דנה ישראלי"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{data.hero.title}</h1>
          <p className={styles.heroSubtitle}>{data.hero.subtitle}</p>
          <p className={styles.heroDescription}>{data.hero.description}</p>
          
          <a 
            href={data.hero.ctaVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroButton}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
            {data.hero.ctaText}
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {data.stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2 className={styles.sectionTitle}>{data.story.title}</h2>
              {data.story.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.storyParagraph}>
                  {paragraph}
                </p>
              ))}
              <p className={styles.signature}>{data.story.signature}</p>
            </div>
            
            <div className={styles.storyImageWrapper}>
              <img
                src={data.story.image}
                alt="דנה בעבודה"
                className={styles.storyImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>המסע שלי</h2>
          <div className={styles.timeline}>
            {data.timeline.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineIcon}>{item.icon}</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>במה אני מאמינה</h2>
          <div className={styles.valuesGrid}>
            {data.values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className={styles.podcastSection}>
        <div className={styles.container}>
          <div className={styles.podcastHeader}>
            <div>
              <div className={styles.podcastBadge}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                </svg>
                <span>הפודקאסט שלי</span>
              </div>
              <h2 className={styles.sectionTitle}>רוצים לשמוע סיפורים מהשטח?</h2>
              <p className={styles.podcastDescription}>
                הפודקאסט שלי מלא בטיפים, סיפורים אמיתיים ותובנות שלא תמצאו בשום מקום אחר
              </p>
            </div>
          </div>

          <div className={styles.podcastGrid}>
            {data.podcasts.map((podcast) => (
              <div key={podcast.id} className={styles.podcastCard}>
                <div className={styles.podcastThumbnail}>
                  <img src={podcast.thumbnail} alt={podcast.title} />
                  <div className={styles.podcastOverlay}>
                    <div className={styles.playButton}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className={styles.podcastBadges}>
                    <span className={styles.durationBadge}>{podcast.duration}</span>
                    <span className={styles.viewsBadge}>👁️ {podcast.views}</span>
                  </div>
                </div>
                <div className={styles.podcastInfo}>
                  <h3 className={styles.podcastTitle}>{podcast.title}</h3>
                  <p className={styles.podcastDesc}>{podcast.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.podcastCTA}>
            <a 
              href="https://youtube.com/@skylineproductions" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.youtubeCTA}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              צפו בכל הפרקים ביוטיוב
            </a>
            
            <a 
              href="https://instagram.com/skyline.productions" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramCTA}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              עקבו אחרי באינסטגרם
            </a>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>מה אומרים עלי</h2>
          <p className={styles.testimonialsSubtitle}>
            אל תסמכו רק על המילים שלי - שמעו מהלקוחות
          </p>
          
          <div className={styles.testimonialsGrid}>
            {data.testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.testimonialVideo}>
                  <img src={testimonial.thumbnail} alt={testimonial.clientName} />
                  <div className={styles.testimonialOverlay}>
                    <div className={styles.playButton}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <span className={styles.durationBadge}>{testimonial.duration}</span>
                </div>
                <div className={styles.testimonialInfo}>
                  <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                  <p className={styles.testimonialClient}>{testimonial.clientName}</p>
                  <p className={styles.testimonialEvent}>{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterBox}>
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>רוצים עוד תוכן?</h2>
              <p className={styles.newsletterDescription}>
                הצטרפו ל-5,000+ אנשים שמקבלים טיפים, סיפורים ופרקים חדשים ישירות למייל
              </p>
              <ul className={styles.newsletterBenefits}>
                <li>✅ פרק חדש כל שבוע</li>
                <li>✅ טיפים בלעדיים</li>
                <li>✅ מבצעים ומחירים מיוחדים</li>
                <li>✅ גישה מוקדמת לתוכן חדש</li>
              </ul>
            </div>
            
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>מוכנים ליצור משהו מדהים יחד?</h2>
          <p className={styles.ctaDescription}>
            בואו נדבר על האירוע שלכם. פגישת קונספט ראשונה ללא התחייבות.
          </p>
          <div className={styles.ctaButtons}>
            <a href="mailto:info@skylineproductions.com" className={styles.primaryCTA}>
              בואו נדבר
            </a>
            <a href="https://youtube.com/@skylineproductions" target="_blank" rel="noopener noreferrer" className={styles.secondaryCTA}>
              עוד סרטונים ביוטיוב
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'אודות דנה ישראלי | Skyline Productions',
  description: 'הכירו את דנה ישראלי, מפיקת האירועים שהפכה מאות חזונות למציאות. 200+ אירועים, 9+ שנים, 100% שביעות רצון. צפו בפודקאסט ובסיפורים מהשטח.',
  keywords: 'דנה ישראלי, הפקת אירועים, Skyline Productions, מפיקת אירועים, פודקאסט אירועים, חתונות יוקרה',
  openGraph: {
    title: 'אודות דנה ישראלי | Skyline Productions',
    description: 'הכירו את דנה ישראלי, מפיקת האירועים שהפכה מאות חזונות למציאות',
    type: 'website',
    locale: 'he_IL',
  },
};
