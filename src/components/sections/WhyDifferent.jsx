import styles from './WhyDifferent.module.css';

export default function WhyDifferent() {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'קונספט ייחודי',
      description: 'לא עוד אירועים גנריים. אנחנו יוצרים חוויה שמותאמת 100% לחזון שלכם.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6M1 12h6m6 0h6"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      ),
      title: 'ניהול מלא',
      description: 'מהרגע שאתם חותמים איתנו ועד שהאורחים האחרונים יוצאים - אנחנו כאן.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      title: 'רשת ספקים מובחרת',
      description: 'שנים של עבודה עם הטובים ביותר. אנחנו יודעים על מי אפשר לסמוך.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
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
