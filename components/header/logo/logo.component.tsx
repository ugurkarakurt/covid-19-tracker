import React from 'react';
import styles from "./logo.module.scss";
import { Syncopate } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from "@/public/logo.svg";

const syncopate = Syncopate({ subsets: ["latin"], weight: '400' });

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link href={'/'}>
        <Image
          className={styles.logo}
          src={LogoImage}
          unoptimized
          priority
          alt='site_logo'
        />
        <h1 className={syncopate.className}>Covid-19 Tracker</h1>
      </Link>
    </div>
  )
}

export default Logo