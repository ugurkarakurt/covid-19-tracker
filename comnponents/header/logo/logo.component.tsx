import React from 'react';
import styles from "./logo.module.scss";
import Link from 'next/link';

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link href={'/'}>Covid-19 <br />Tracker</Link>
    </div>
  )
}

export default Logo