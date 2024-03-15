import React from 'react';
import styles from "./navbar.module.scss";
import Link from 'next/link';

function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <ul>
        <li>
          <Link href={"list"}>World Map</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar