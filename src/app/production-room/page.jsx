"use client";
import { useRef } from 'react';
import styles from './ProductionRoom.module.css';

export const metadata = {
  title: 'חדר ההפקה | Skyline Productions',
  description: 'טיפים וסיפורים מאחורי הקלעים.',
};

const videos = [
  {
    id: 1,
    title: 'השילוש הקדוש',
    description: 'שלושת העקרונות שעושים את ההבדל באירוע מושלם',
    url: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1764107423/%D7%94%D7%A9%D7%99%D7%9C%D7%95%D7%A9_%D7%94%D7%A7%D7%93%D7%95%D7%A9_qjyznh.mp4'
  },
  {
    id: 2,
    title: 'אותי כמתנה',
    description: 'למה המתנה הכי טובה שתתנו לעצמכם היא מפיק טוב',
    url: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1764107423/%D7%90%D7%95%D7%AA%D7%99_%D7%9B%D7%9E%D7%AA%D7%A0%D7%94_j1tbry.mp4'
  },
  {
    id: 3,
    title: '5 סימנים מחשידים',
    description: 'איך לזהות ספק לא אמין עוד לפני שחותמים',
    url: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1764107422/5_%D7%A1%D7%99%D7%9E%D7%A0%D7%99%D7%9D_%D7%9E%D7%97%D7%A9%D7%99%D7%93%D7%99%D7%9D_fheu5s.mp4'
  },
  {
    id: 4,
    title: 'בלי הפתעות',
    description: 'איך להימנע מהפתעות לא נעימות ביום האירוע',
    url: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1764275620/%D7%91%D7%9C%D7%99_%D7%94%D7%A4%D7%AA%D7%A2%D7%95%D7%AA_rax5ij.mp4'
  },
  {
    id: 5,
    title: 'יום בחיי מפיקה',
    description: 'מה באמת קורה מאחורי הקלעים של אירוע',
    url: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1764275620/%D7%99%D7%95%D7%9D_%D7%91%D7%97%D7%99%D7%99_%D7%9E%D7%A4%D7%99%D7%A7%D7%94_tftfri.mp4'
  }
];

export default function ProductionRoomPage() {
  const videoRefs = useRef({});

  const toggleFullscreen = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen().catch(() => {
          console.log('Fullscreen not available');
        });
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  };

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.breadcrumb}>חדר ההפקה</div>
        <h1>מתוך חדר ההפקה</h1>
        <p>הידע שצברנו, הסיפורים מהשטח והטיפים הסודיים שלנו</p>
      </header>

      {/* רשת הסרטונים */}
      <div className={styles.videosGrid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <video 
                ref={(el) => { if (el) videoRefs.current[video.id] = el; }}
                controls
                controlsList="nodownload"
                className={styles.video}
                preload="metadata"
                playsInline
              >
                <source src={video.url} type="video/mp4" />
                הדפדפן שלך לא תומך בוידאו.
              </video>
              <button 
                className={styles.fullscreenBtn}
                onClick={() => toggleFullscreen(video.id)}
                aria-label="מצב מלא"
                title="מצב מלא"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              </button>
            </div>
            <div className={styles.videoInfo}>
              <h3 className={styles.videoTitle}>{video.title}</h3>
              <p className={styles.videoDescription}>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
