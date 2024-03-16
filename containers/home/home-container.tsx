"use client"
import React from 'react';
import styles from "./home-container.module.scss";
import Image from 'next/image';
import EarthImage from "@/public/earth_white.svg";
import Counter from '@/comnponents/counter/counter.component';

function HomeContainer() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeTitle}>
        <h2>Global Stats</h2>
        <span>Last Updated: 05.5.1203</span>
      </div>
      <Image
        className={styles.earthImage}
        src={EarthImage}
        unoptimized
        priority
        alt='site_logo'
      />
      <div className={styles.stats}>
        <ul className={styles.statsItems}>
          <li className={styles.statsItem}>
            <span className={styles.statsName}>Cases</span>
            <Counter from={0} to={100} />
          </li>
          <li className={styles.statsItem}>
            <span className={styles.statsName}>Deaths</span>
            <Counter from={0} to={100} />
          </li>
          <li className={styles.statsItem}>
            <span className={styles.statsName}>Recovered</span>
            <Counter from={0} to={100} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeContainer;
