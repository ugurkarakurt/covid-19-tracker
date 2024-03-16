"use client"
import React, { useEffect } from 'react';
import styles from "./home-container.module.scss";
import Image from 'next/image';
import EarthImage from "@/public/earth_white.svg";
import Counter from '@/comnponents/counter/counter.component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { TotalData } from '@/types';

function HomeContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_TOTAL_COVID_DATA' });
  }, []);

  const totalCovidData = useSelector<RootState, TotalData>((state) => state.totalCovidData);
  const lastUpdated = totalCovidData.updated ? new Date(totalCovidData.updated) : "-";

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeTitle}>
        <h2>Global Stats</h2>
        <span>{lastUpdated.toLocaleString()}</span>
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
            <Counter from={0} to={totalCovidData.cases} />
          </li>
          <li className={styles.statsItem}>
            <span className={styles.statsName}>Deaths</span>
            <Counter from={0} to={totalCovidData.deaths} />
          </li>
          <li className={styles.statsItem}>
            <span className={styles.statsName}>Recovered</span>
            <Counter from={0} to={totalCovidData.recovered} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeContainer;
