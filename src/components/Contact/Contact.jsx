import styles from './Contact.module.css';
import { PHONE, PHONE_TEL, FIRM_NAME } from '../../data/fishData';

export default function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      {/* Top wave */}
      <div className={styles.topWave} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="var(--clr-bg)" />
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.textCol}>
          <p className={styles.label}>Get In Touch</p>
          <h2 id="contact-heading" className={styles.heading}>Order Fresh Seafood</h2>
          <p className={styles.body}>
            For orders and enquiries, contact {FIRM_NAME}. We source fresh fish daily and deliver
            premium quality seafood directly to you.
          </p>

          <div className={styles.features}>
            {[
              { icon: '🎣', text: 'Fresh daily catch' },
              { icon: '✅', text: 'Quality guaranteed' },
              { icon: '📦', text: 'Prompt delivery' },
            ].map(({ icon, text }) => (
              <div key={text} className={styles.feature}>
                <span className={styles.featureIcon} aria-hidden="true">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaCol}>
          <div className={styles.card}>
            <div className={styles.phoneIcon} aria-hidden="true">📞</div>
            <p className={styles.cardLabel}>Call us directly</p>
            <p className={styles.phoneNumber}>{PHONE}</p>
            <p className={styles.cardSubtext}>Available daily for orders &amp; enquiries</p>

            <a
              href={PHONE_TEL}
              className={`btn btn-accent btn-lg ${styles.callBtn}`}
              aria-label={`Call HpsSeaFoods at ${PHONE}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.18 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013.09 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              Call {PHONE}
            </a>

            <div className={styles.decorDots} aria-hidden="true">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
