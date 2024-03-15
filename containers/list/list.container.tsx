"use client"
import React, { useEffect } from 'react';
import styles from "./home-container.module.scss";
import { useDispatch } from 'react-redux';
import MapChart from '@/comnponents/map-chart/mapChart.components';

function ListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_TOTAL_COVID_DATA' });
  }, []);


  return (
    <MapChart />
  )
}

export default ListContainer;
