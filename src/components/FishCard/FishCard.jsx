import { useState } from 'react';
import styles from './FishCard.module.css';
import { PHONE, PHONE_TEL } from '../../data/fishData';

export default function FishCard({ fish }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const categoryIcon = fish.category === 'prawns' ? '🦐' : fish.category === 'squid' ? '🦑' : '🐟';

  return (
    <article className={styles.card} role="listitem" aria-label={`${fish.englishName} – ${fish.teluguName}`}>
      {/* Image */}
      <div className={styles.imageWrapper}>
        {!imgLoaded && !imgError && (
          <div className={styles.imgSkeleton} aria-hidden="true">
            <span className={styles.skeletonIcon}>{categoryIcon}</span>
          </div>
        )}
        {!imgError ? (
          <img
            src={fish.image}
            alt={`${fish.englishName} (${fish.teluguName}) – Fresh seafood from HpsSeaFoods`}
            className={`${styles.image} ${imgLoaded ? styles.imageLoaded : ''}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className={styles.imgFallback} aria-label={`Image not available for ${fish.englishName}`}>
            <span>{categoryIcon}</span>
            <span className={styles.fallbackText}>{fish.englishName}</span>
          </div>
        )}

        {/* Category badge */}
        <span className={styles.categoryBadge} aria-label={`Category: ${fish.category}`}>
          {categoryIcon}
        </span>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* English name */}
        <h3 className={styles.englishName}>{fish.englishName}</h3>

        {/* Telugu name */}
        <p className={`${styles.teluguName} telugu`} lang="te" aria-label={`Telugu name: ${fish.teluguName}`}>
          {fish.teluguName}
        </p>

        {/* Local name */}
        {fish.localName && (
          <p className={styles.localName} aria-label={`Local name: ${fish.localName}`}>
            Also: {fish.localName}
          </p>
        )}

        {/* Description */}
        {fish.description && (
          <p className={styles.description}>{fish.description}</p>
        )}

        {/* CTA */}
        <a
          href={PHONE_TEL}
          className={`btn btn-primary btn-sm ${styles.orderBtn}`}
          aria-label={`Call HpsSeaFoods to order ${fish.englishName} at ${PHONE}`}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.18 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013.09 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
          </svg>
          Call to Order
        </a>
      </div>
    </article>
  );
}
