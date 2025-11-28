import styles from './ProductionRoom.module.css';
import PostCard from '@/components/ui/PostCard';
import { getAllPosts } from '@/lib/data';

export const metadata = {
  title: 'חדר ההפקה | Skyline Productions',
  description: 'טיפים וסיפורים מאחורי הקלעים.',
};

export default function ProductionRoomPage() {
  const posts = getAllPosts();

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
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
