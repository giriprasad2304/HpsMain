import { useState, useMemo } from 'react';
import { fishData, PHONE_TEL, PHONE } from '../../data/fishData';
import FishCard from '../FishCard/FishCard';
import styles from './Catalog.module.css';

const CATEGORIES = [
  { id: 'all',    label: 'All' },
  { id: 'fish',   label: '🐟 Fish' },
  { id: 'prawns', label: '🦐 Prawns' },
  { id: 'squid',  label: '🦑 Squid' },
];

export default function Catalog() {
  const [query, setQuery]       = useState('');
  const [category, setCategory] = useState('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return fishData.filter((fish) => {
      const matchCat = category === 'all' || fish.category === category;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        fish.englishName.toLowerCase().includes(q) ||
        fish.teluguName.toLowerCase().includes(q) ||
        (fish.localName && fish.localName.toLowerCase().includes(q))
      );
    });
  }, [query, category]);

  return (
    <section id="catalog" className={styles.section} aria-labelledby="catalog-heading">
      <div className="container">
        {/* Header */}
        <div className={styles.sectionHeader}>
          <p className="section-label">Our Products</p>
          <h2 id="catalog-heading" className="section-title">Fish Catalog</h2>
          <p className="section-subtitle">
            Browse our complete selection of fresh fish and seafood. Call us to place your order.
          </p>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          {/* Search */}
          <div className={styles.searchWrapper}>
            <svg className={styles.searchIcon} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search by English, Telugu or local name…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search fish catalog"
            />
            {query && (
              <button
                className={styles.clearBtn}
                onClick={() => setQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category filters */}
          <div className={styles.filters} role="group" aria-label="Filter by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${category === cat.id ? styles.filterActive : ''}`}
                onClick={() => setCategory(cat.id)}
                aria-pressed={category === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className={styles.resultsCount} aria-live="polite">
          {filtered.length === fishData.length
            ? `${fishData.length} products`
            : `${filtered.length} of ${fishData.length} products`}
          {query && <span> for &ldquo;<strong>{query}</strong>&rdquo;</span>}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className={styles.grid} role="list" aria-label="Fish catalog">
            {filtered.map((fish) => (
              <FishCard key={fish.id} fish={fish} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyIcon} aria-hidden="true">🔍</div>
            <h3 className={styles.emptyTitle}>No fish found</h3>
            <p className={styles.emptyText}>
              Try searching with a different name, or{' '}
              <a href={PHONE_TEL} className={styles.emptyLink}>
                call us at {PHONE}
              </a>{' '}
              to ask about availability.
            </p>
            <button className="btn btn-primary" onClick={() => { setQuery(''); setCategory('all'); }}>
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
