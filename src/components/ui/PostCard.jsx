"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './PostCard.module.css';

export default function PostCard({ title, slug, excerpt, thumbnailUrl }) {
  return (
    <Link href={slug} className={styles.card}>
      <div className={styles.visualContainer}>
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <span className={styles.cta}>קרא עוד →</span>
      </div>
    </Link>
  );
}
