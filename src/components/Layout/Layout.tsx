import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './Layout.module.scss';

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__main}>
        <div className={styles.layout__container}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
