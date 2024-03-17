import React from 'react';
import styles from "./navbar.module.scss";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {

  const pathname = usePathname()

  return (
    <nav className={styles.navbarContainer}>
      <ul>
        <li>
          {pathname !== "/list" && (<Link href={"/list"}>World Map</Link>)}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar