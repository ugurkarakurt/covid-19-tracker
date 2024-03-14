import React from 'react';
import styles from "./header.module.scss";
import Logo from './logo/logo.component';
import Navbar from './navbar/navbar.component';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
