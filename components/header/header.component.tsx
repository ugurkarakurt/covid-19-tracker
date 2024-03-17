import React from 'react';
import styles from "./header.module.scss";
import Logo from './logo/logo.component';
import Navbar from './navbar/navbar.component';
import MovingComponent from '../moving-component/moving-component.component';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <MovingComponent initial={{ opacity: 0 }}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
      </MovingComponent>
      <div className={styles.navbarWrapper}>
        <MovingComponent initial={{ opacity: 0 }}>
          <Navbar />
        </MovingComponent>
      </div>
    </header>
  );
};

export default Header;
