import React from 'react';
import styles from "./navbar.module.scss";
import Link from 'next/link';

function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <ul>
        <li>
          <Link href={"world-map"}>World Map</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar