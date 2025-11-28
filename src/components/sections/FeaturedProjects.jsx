import Link from 'next/link';
import ProjectCard from '@/components/ui/ProjectCard';
import styles from './FeaturedProjects.module.css';
import { getFeaturedProjects } from '@/lib/data';

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>הקונספטים שלנו</h2>
          <p className={styles.subtitle}>
            מחזון ראשוני ועד הרגע האחרון - כל פרויקט הוא סיפור.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              slug={`/portfolio/${project.slug}`}
              videoLoopUrl={project.heroVideo}
            />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/portfolio" className={styles.ctaButton}>
            צפו בכל הפרויקטים
          </Link>
        </div>
      </div>
    </section>
  );
}
