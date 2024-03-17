"use client"
import React, { useEffect } from 'react';
import styles from "./home-container.module.scss";
import Image from 'next/image';
import EarthImage from "@/public/earth_white.svg";
import Counter from '@/components/counter/counter.component';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '@/components/page-title/page-title.component';
import { RootState } from '@/redux/store';
import { TotalData } from '@/types/types';

function HomeContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_TOTAL_COVID_DATA' });
  }, []);

  const totalCovidData = useSelector<RootState, TotalData>((state) => state.totalCovidData);
  const lastUpdated = totalCovidData.updated ? new Date(totalCovidData.updated) : "-";

  return (
    <div className={styles.homeContainer}>
      <PageTitle title={"Global Stats"} date={lastUpdated.toLocaleString()} />
      <Image
        className={styles.logo}
        src={EarthImage}
        unoptimized
        style={{ width: '100%', height: 'auto' }}
        alt='site_logo'
        priority
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
