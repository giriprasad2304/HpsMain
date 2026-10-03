import styles from './Footer.module.css';
import { PHONE, PHONE_TEL, FIRM_NAME } from '../../data/fishData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon} aria-hidden="true">🐟</span>
            <span className={styles.logoText}>{FIRM_NAME}</span>
          </div>
          <p className={styles.tagline}>Fresh Seafood | Quality You Can Trust</p>
          <p className={styles.orders}>
            Orders:{' '}
            <a href={PHONE_TEL} className={styles.phoneLink} aria-label={`Call ${PHONE}`}>
              {PHONE}
            </a>
          </p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation" className={styles.nav}>
          <p className={styles.navTitle}>Quick Links</p>
          {[
            { label: 'Home', href: '#home' },
            { label: 'Fish Catalog', href: '#catalog' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={styles.navLink}
              onClick={(e) => { e.preventDefault(); scrollTo(href); }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <div className={styles.contactCol}>
          <p className={styles.navTitle}>Contact Us</p>
          <a href={PHONE_TEL} className={`btn btn-accent btn-sm ${styles.callBtn}`} aria-label={`Call HpsSeaFoods at ${PHONE}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.18 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013.09 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            Call {PHONE}
          </a>
          <p className={styles.availText}>Available daily for orders &amp; enquiries</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © 2026 {FIRM_NAME}. All rights reserved.
          </p>
          <button
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
