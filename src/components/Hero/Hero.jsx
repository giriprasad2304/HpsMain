import styles from './Hero.module.css';
import { PHONE, PHONE_TEL } from '../../data/fishData';

export default function Hero() {
  const scrollToCatalog = () => {
    document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero} aria-label="Hero section">
      {/* Animated ocean backdrop */}
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.wave1} />
        <div className={styles.wave2} />
        <div className={styles.wave3} />
        <div className={styles.bubbles}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={styles.bubble} style={{ '--i': i }} />
          ))}
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.badge} aria-label="Category label">
          <span className={styles.badgeDot} aria-hidden="true" />
          Fresh Seafood Catalog
        </div>

        <h1 className={styles.heading}>
          Fresh Seafood,
          <br />
          <span className={styles.headingAccent}>Quality You Can Trust</span>
        </h1>

        <p className={styles.subheading}>
          Explore our fresh fish and seafood collection at HpsSeaFoods.
          <br className={styles.breakDesktop} />
          Premium quality, sourced fresh from the sea.
        </p>

        <div className={styles.actions}>
          <button
            className={`btn btn-accent btn-lg ${styles.primaryCta}`}
            onClick={scrollToCatalog}
            aria-label="Browse our fish catalog"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18"/>
            </svg>
            View Fish Catalog
          </button>

          <a
            href={PHONE_TEL}
            className={`btn btn-ghost btn-lg ${styles.secondaryCta}`}
            aria-label={`Call HpsSeaFoods at ${PHONE}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.18 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013.09 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            Call to Order — {PHONE}
          </a>
        </div>

        {/* Stats row */}
        <div className={styles.stats} aria-label="Quick stats">
          {[
            { value: '30+', label: 'Varieties' },
            { value: 'Daily', label: 'Fresh Catch' },
            { value: 'Direct', label: 'from Sea' },
          ].map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className={styles.bottomWave} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--clr-bg)" />
        </svg>
      </div>
    </section>
  );
}
