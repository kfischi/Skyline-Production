import styles from './VenuesGallery.module.css';

export default function VenuesGallery() {
  const items = [
    { type: 'image', url: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1764107920/8_smgwcg.jpg' },
    { type: 'image', url: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1764107921/9_dpnxn3.jpg' },
    { type: 'video', url: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1764275688/5_zrxaar.mp4' },
    { type: 'video', url: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1764275618/2_gihwo7.mp4' },
    { type: 'video', url: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1764275615/1_mbxwui.mp4' },
    { type: 'image', url: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1764107914/3_b1urvf.jpg' },
    { type: 'image', url: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1764107913/2_yz2q0c.jpg' },
    { type: 'image', url: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1764107922/10_ph5eez.jpg' },
    { type: 'video', url: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1764275819/6_zbhucd.mp4' }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>הלוקיישנים שלנו</h2>
          <p className={styles.subtitle}>
            טעימה מהמקומות והאירועים המיוחדים שהפקנו
          </p>
        </header>

        <div className={styles.gallery}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              {item.type === 'image' ? (
                <img 
                  src={item.url} 
                  alt={`לוקיישן ${index + 1}`}
                  className={styles.media}
                  loading="lazy"
                />
              ) : (
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className={styles.media}
                >
                  <source src={item.url} type="video/mp4" />
                </video>
              )}
              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
