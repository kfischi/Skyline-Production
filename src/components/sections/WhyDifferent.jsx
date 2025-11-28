import styles from './WhyDifferent.module.css';

export default function WhyDifferent() {
  const features = [
    {
      icon: '🎯',
      title: 'קונספט ייחודי',
      description: 'לא עוד אירועים גנריים. אנחנו יוצרים חוויה שמותאמת 100% לחזון שלכם.'
    },
    {
      icon: '⚙️',
      title: 'ניהול מלא',
      description: 'מהרגע שאתם חותמים איתנו ועד שהאורחים האחרונים יוצאים - אנחנו כאן.'
    },
    {
      icon: '💎',
      title: 'רשת ספקים מובחרת',
      description: 'שנים של עבודה עם הטובים ביותר. אנחנו יודעים על מי אפשר לסמוך.'
    },
    {
      icon: '🧘',
      title: 'שקט נפשי',
      description: 'אתם נהנים. אנחנו דואגים. זה פשוט.'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>למה Skyline שונה?</h2>
          <p className={styles.subtitle}>
            רוב המפיקים מציעים שירות. אנחנו מציעים שותפות.
          </p>
        </header>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
