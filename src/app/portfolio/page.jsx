import styles from './Portfolio.module.css';
import ProjectCard from '@/components/ui/ProjectCard';

const projects = [
  {
    title: 'קונספט: ג\'ונגל אורבני',
    slug: '/portfolio/jungle-wedding',
    videoLoopUrl: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1763211981/%D7%95%D7%99%D7%93%D7%90_%D7%A4%D7%AA%D7%99%D7%97%D7%94_wm08bo.mp4',
  },
  {
    title: 'פסטיבל: Marry Land',
    slug: '/portfolio/marry-land-festival',
    videoLoopUrl: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425660/VID-20250916-WA0007_q8j5hk.mp4',
  },
  {
    title: 'קונספט: All Black Metal',
    slug: '/portfolio/metal-wedding',
    videoLoopUrl: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1715425663/VID-20250916-WA0002_rdm3vh.mp4',
  },
];

export const metadata = {
  title: 'הביצוע | Skyline Productions',
  description: 'קונספטים שהפכו למציאות.',
};

export default function PortfolioPage() {
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
            key={project.slug}
            title={project.title}
            slug={project.slug}
            videoLoopUrl={project.videoLoopUrl}
          />
        ))}
      </div>
    </div>
  );
}
