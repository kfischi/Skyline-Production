import styles from './Portfolio.module.css';
import ProjectCard from '@/components/ui/ProjectCard';
import { getAllProjects } from '@/lib/data';

export const metadata = {
  title: 'הביצוע | Skyline Productions',
  description: 'קונספטים שהפכו למציאות.',
};

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>קונספטים שהפכו למציאות</h1>
        <p>
          אנו לא רק מנהלים אירועים, אנו יוצרים חוויות.
          <br />
          צפו בכמה מהקונספטים שהפקנו.
        </p>
      </header>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            slug={`/portfolio/${project.slug}`}
            videoLoopUrl={project.heroVideo}
          />
        ))}
      </div>
    </div>
  );
}
