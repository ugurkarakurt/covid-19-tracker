"use client"
import React, { useEffect } from 'react';
import styles from "./list-container.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import MapChart from '@/components/map-chart/mapChart.components';
import { setcountryCovidData } from '@/redux/reducers/countryCovidDataSlice';
import { RootState } from '@/redux/store';
import MapLoading from './loading/loading';
import { CountryData } from '@/types/types';
import PageTitle from '@/components/page-title/page-title.component';

const ListContainer: React.FC = () => {
  const dispatch = useDispatch();
  const countryCovidData = useSelector((state: RootState) => state.countryCovidData);
  const countriesCovidData: { [country: string]: CountryData } = useSelector((state: RootState) => state.countriesCovidData);
  const lastUpdated = Object.keys(countriesCovidData).length ? new Date(countriesCovidData["USA"].updated) : "-";

  useEffect(() => {
    dispatch({ type: 'FETCH_COUNTRIES_COVID_DATA' });
    dispatch(setcountryCovidData({
      ...countryCovidData,
      cases: 0,
      message: ""
    }));
  }, []);

  return (
    <div className={styles.listContainer}>
      {!countriesCovidData["USA"] ? (
        <MapLoading />
      ) : (
        <>
          <PageTitle title={"COVID-19 World Map"} date={lastUpdated.toLocaleString()} />
          <MapChart />
        </>
      )}
    </div>
  )
}

export default ListContainer;
