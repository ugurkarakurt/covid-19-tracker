"use client"
import React, { useEffect } from 'react';
import styles from "./list-container.module.scss";
import { useDispatch } from 'react-redux';
import MapChart from '@/components/map-chart/mapChart.components';

function ListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_COUNTRIES_COVID_DATA' });
  }, []);

  return (
    <div className={styles.listContainer}>
      <MapChart />
    </div>
  )
}

export default ListContainer;
