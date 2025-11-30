"use client";
import { useState } from 'react';
import styles from './About.module.css';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Integrate with real newsletter service (Mailchimp/ConvertKit/etc)
    setTimeout(() => {
      setSubmitMessage('תודה! נרשמתם בהצלחה 🎉');
      setEmail('');
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="האימייל שלכם"
        required
        className={styles.newsletterInput}
      />
      <button 
        type="submit" 
        disabled={isSubmitting}
        className={styles.newsletterButton}
      >
        {isSubmitting ? 'רושמים...' : 'הצטרפו עכשיו'}
      </button>
      {submitMessage && (
        <p className={styles.submitMessage}>{submitMessage}</p>
      )}
      <p className={styles.privacyNote}>
        לא נשלח ספאם. ניתן להסיר את עצמכם בכל עת.
      </p>
    </form>
  );
}
