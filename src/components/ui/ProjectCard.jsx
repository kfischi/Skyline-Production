"use client";
import Link from 'next/link';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, slug, videoLoopUrl }) {
  return (
    <Link href={slug} className={styles.card}>
      <div className={styles.visualContainer}>
        <video autoPlay loop muted playsInline className={styles.videoLoop}>
          <source src={videoLoopUrl} type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>
  );
}
