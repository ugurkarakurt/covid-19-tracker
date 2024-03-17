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
import MovingComponent from '@/components/moving-component/moving-component.component';

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
          <MovingComponent initial={{ opacity: 0 }}>
            <li className={styles.cases}>
              <span className={styles.statsName}>Cases</span>
              <Counter from={0} to={totalCovidData.cases} />
            </li>
          </MovingComponent>
          <MovingComponent initial={{ opacity: 0 }}>
            <li className={styles.deaths}>
              <span className={styles.statsName}>Deaths</span>
              <Counter from={0} to={totalCovidData.deaths} />
            </li>
          </MovingComponent>
          <MovingComponent initial={{ opacity: 0 }}>
            <li className={styles.recovered}>
              <span className={styles.statsName}>Recovered</span>
              <Counter from={0} to={totalCovidData.recovered} />
            </li>
          </MovingComponent>
        </ul>
      </div>
    </div>
  )
}

export default HomeContainer;
