import React from 'react';
import Footer from './footer/footer';
import Header from './header/header';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.generalContainer}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;