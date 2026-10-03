import styles from './Header.module.css';
import { PHONE, PHONE_TEL, FIRM_NAME } from '../../data/fishData';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a
          href="#home"
          className={styles.logo}
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          aria-label="HpsSeaFoods – go to home"
        >
          <span className={styles.logoIcon} aria-hidden="true">🐟</span>
          <span className={styles.logoText}>{FIRM_NAME}</span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Fish Catalog', href: '#catalog' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={styles.navLink}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href={PHONE_TEL} className={`btn btn-accent btn-sm ${styles.ctaBtn}`} aria-label={`Call HpsSeaFoods at ${PHONE}`}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.18 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013.09 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
          </svg>
          Call to Order
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!menuOpen}>
        {[
          { label: 'Home', href: '#home' },
          { label: 'Fish Catalog', href: '#catalog' },
          { label: 'Contact', href: '#contact' },
        ].map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={styles.mobileNavLink}
            onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
            tabIndex={menuOpen ? 0 : -1}
          >
            {label}
          </a>
        ))}
        <a href={PHONE_TEL} className={`btn btn-accent ${styles.mobileCta}`} tabIndex={menuOpen ? 0 : -1}>
          📞 Call to Order — {PHONE}
        </a>
      </div>
    </header>
  );
}
