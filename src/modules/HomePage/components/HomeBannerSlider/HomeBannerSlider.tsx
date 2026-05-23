import React, { useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router';
import styles from './HomeBannerSlider.module.scss';
import categoryPhoneImg from '../../../../assets/images/category-phone.webp';
import tabletsImg from '../../../../assets/images/category-tablets.webp';
import logoIcon from '../../../../assets/icons/icon-logo.png';
import { ChevronIcon } from '../../../../components/iconsSVG';
import { getPublicUrl } from '../../../../utils/publicPath';

type BannerId = 'phones' | 'tablets' | 'accessories';

type Banner = {
  id: BannerId;
  kicker?: string;
  icon?: string;
  text?: string;
  cta: string;
  link: string;
  image: string;
  imageAlt: string;
};

type BannerImageLoadingProps = {
  fetchpriority: 'high' | 'auto';
  loading: 'eager' | 'lazy';
};

const BANNERS: Banner[] = [
  {
    id: 'phones',
    kicker: 'Now available in our store!',
    icon: logoIcon,
    text: 'Be the first!',
    cta: 'ORDER NOW',
    link: '/phones',
    image: categoryPhoneImg,
    imageAlt: 'Apple iPhone product preview',
  },
  {
    id: 'tablets',
    kicker: 'Perfect for work & study',
    text: 'Choose your ideal iPad.',
    cta: 'SHOP TABLETS',
    link: '/tablets',
    image: tabletsImg,
    imageAlt: 'Apple iPad product preview',
  },
  {
    id: 'accessories',
    kicker: 'Designed to move with you',
    text: 'Health. Fitness. Style.',
    cta: 'SHOP WATCHES',
    link: '/accessories',
    image: getPublicUrl('img/accessories/apple-watch-series-6/silver/00.webp'),
    imageAlt: 'Silver Apple Watch product preview',
  },
];

const AUTOPLAY_DELAY = 5000;
const SLIDE_WIDTH_PERCENT = 100;
const SWIPE_THRESHOLD = 50;

export const HomeBannerSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const len = BANNERS.length;

  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current !== null) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current !== null) {
      clearInterval(autoplayRef.current);
    }

    autoplayRef.current = setInterval(() => {
      setCurrent(previousIndex => (previousIndex + 1) % len);
    }, AUTOPLAY_DELAY);
  }, [len]);

  useEffect(() => {
    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [startAutoplay, stopAutoplay]);

  const prev = () => {
    setCurrent(previousIndex => (previousIndex - 1 + len) % len);
  };

  const next = () => {
    setCurrent(previousIndex => (previousIndex + 1) % len);
  };

  const goTo = (i: number) => {
    setCurrent(Math.max(0, Math.min(i, len - 1)));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    stopAutoplay();
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current == null) {
      return;
    }

    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    const delta = touchDeltaX.current;

    touchStartX.current = null;
    touchDeltaX.current = 0;

    if (delta > SWIPE_THRESHOLD) {
      prev();
    } else if (delta < -SWIPE_THRESHOLD) {
      next();
    }

    startAutoplay();
  };

  return (
    <div
      className={styles.homeBannerSlider}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className={styles.homeBannerSlider__wrapper}>
        <button
          type="button"
          className={cn(
            styles.homeBannerSlider__arrow,
            styles.homeBannerSlider__arrowPrev,
          )}
          onClick={prev}
          aria-label="Previous banner"
        >
          <span className={styles.homeBannerSlider__arrowInner}>
            <ChevronIcon direction="right" />
          </span>
        </button>

        <div className={styles.homeBannerSlider__frame}>
          <div
            className={styles.homeBannerSlider__viewport}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-roledescription="carousel"
            aria-label="Main banners"
          >
            <div
              className={styles.homeBannerSlider__track}
              style={{
                transform: `translateX(-${current * SLIDE_WIDTH_PERCENT}%)`,
              }}
            >
              {BANNERS.map((banner, idx) => {
                const isFirstBanner = idx === 0;
                const imageLoadingProps = {
                  fetchpriority: isFirstBanner ? 'high' : 'auto',
                  loading: isFirstBanner ? 'eager' : 'lazy',
                } satisfies BannerImageLoadingProps;

                return (
                  <article
                    className={styles.homeBannerSlider__slide}
                    key={banner.id}
                    aria-hidden={idx !== current}
                  >
                    <div className={styles.homeBannerSlider__banner}>
                      <div className={styles.homeBannerSlider__bannerContent}>
                        <div className={styles.homeBannerSlider__bannerTop}>
                          {banner.kicker && (
                            <p
                              className={styles.homeBannerSlider__bannerKicker}
                            >
                              <span
                                className={
                                  styles.homeBannerSlider__bannerKickerText
                                }
                              >
                                {banner.kicker}
                              </span>
                              {banner.icon && (
                                <img
                                  src={banner.icon}
                                  alt=""
                                  aria-hidden="true"
                                  className={
                                    styles.homeBannerSlider__bannerKickerIcon
                                  }
                                />
                              )}
                            </p>
                          )}

                          {banner.text && (
                            <p className={styles.homeBannerSlider__bannerText}>
                              {banner.text}
                            </p>
                          )}
                        </div>

                        <Link
                          to={banner.link}
                          className={styles.homeBannerSlider__bannerButton}
                        >
                          {banner.cta}
                        </Link>
                      </div>

                      <div className={styles.homeBannerSlider__bannerImageWrap}>
                        {banner.kicker && (
                          <p className={styles.homeBannerSlider__imageKicker}>
                            <span
                              className={
                                styles.homeBannerSlider__imageKickerText
                              }
                            >
                              {banner.kicker}
                            </span>
                          </p>
                        )}

                        <img
                          src={banner.image}
                          alt={banner.imageAlt}
                          className={styles.homeBannerSlider__bannerImage}
                          {...imageLoadingProps}
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <button
          type="button"
          className={cn(
            styles.homeBannerSlider__arrow,
            styles.homeBannerSlider__arrowNext,
          )}
          onClick={next}
          aria-label="Next banner"
        >
          <span className={styles.homeBannerSlider__arrowInner}>
            <ChevronIcon direction="left" />
          </span>
        </button>
      </div>

      <div className={styles.homeBannerSlider__dotsWrap}>
        <div
          className={styles.homeBannerSlider__dots}
          role="group"
          aria-label="Select banner"
        >
          {BANNERS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={cn(styles.homeBannerSlider__dot, {
                [styles['homeBannerSlider__dot--active']]: idx === current,
              })}
              onClick={() => goTo(idx)}
              aria-pressed={idx === current}
              aria-label={`Go to banner ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
