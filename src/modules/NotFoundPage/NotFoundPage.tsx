import React from 'react';
import { Link } from 'react-router';
import pageNotFoundImg from '../../assets/images/page-not-found.webp';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => (
  <section className={styles.notFoundPage}>
    <h1 className={styles.notFoundPage__title}>Page not found</h1>
    <p className={styles.notFoundPage__text}>
      Go to{' '}
      <Link className={styles.notFoundPage__link} to="/">
        Home
      </Link>
      .
    </p>
    <img
      className={styles.notFoundPage__image}
      src={pageNotFoundImg}
      alt="Page not found"
    />
  </section>
);
