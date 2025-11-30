import styles from './ProductionRoom.module.css';
import ProductionRoomClient from './ProductionRoomClient';

export const metadata = {
  title: 'חדר ההפקה | Skyline Productions',
  description: 'טיפים וסיפורים מאחורי הקלעים.',
};

export default function ProductionRoomPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.breadcrumb}>חדר ההפקה</div>
        <h1>מתוך חדר ההפקה</h1>
        <p>הידע שצברנו, הסיפורים מהשטח והטיפים הסודיים שלנו</p>
      </header>

      {/* רשת הסרטונים - Client Component */}
      <ProductionRoomClient />
    </div>
  );
}
