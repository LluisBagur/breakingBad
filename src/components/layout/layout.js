import React, { ReactNode } from 'react';
import Footer from './footer/footer';
import Header from './header/header';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.generalContainer}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;