import styles from './ProductionRoom.module.css';
import PostCard from '@/components/ui/PostCard';

const posts = [
  {
    title: '5 סימנים שהאולם עושה עליכם סיבוב (ולא ידעתם)',
    slug: '/production-room/5-signs',
    excerpt: 'לפני שאתם סוגרים חוזה, דנה חושפת את 5 הדגלים האדומים...',
    thumbnailUrl: 'https://res.cloudinary.com/dptyfvwyo/image/upload/c_fill,w_800,h_450/v1715425656/5_%D7%A1%D7%99%D7%9E%D7%A0%D7%99%D7%9D_%D7%A9%D7%94%D7%90%D7%95%D7%9C%D7%9D_kbqjzv.jpg',
  },
  {
    title: 'סיפור מהשטח: פדיחת הבד של החופה',
    slug: '/production-room/chuppah-story',
    excerpt: 'מה קורה כשהבד שהכלה הזמינה מגיע בצבע הלא נכון?',
    thumbnailUrl: 'https://res.cloudinary.com/dptyfvwyo/image/upload/c_fill,w_800,h_450/v1715425660/VID-20250916-WA0007_q8j5hk.jpg',
  },
];

export const metadata = {
  title: 'חדר ההפקה | Skyline Productions',
  description: 'טיפים וסיפורים מאחורי הקלעים.',
};

export default function ProductionRoomPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>מתוך חדר ההפקה</h1>
        <p>
          הידע שצברנו, הסיפורים מהשטח והטיפים הסודיים שלנו.
        </p>
      </header>

      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
