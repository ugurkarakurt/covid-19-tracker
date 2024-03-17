"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./detail-container.module.scss";
import Image from 'next/image';
import { RootState } from '@/redux/store';
import Country404 from './not-found';
import CountryDetailLoading from './loading/loading';
import dynamic from "next/dynamic";
import PageTitle from '@/components/page-title/page-title.component';
const LeafletMap = dynamic(() => import("@/components/leaflet-map/leaflet-map.component"), { ssr: false });

const DetailContainer: React.FC<{ country: string }> = ({ country }) => {

  const dispatch = useDispatch();
  const countryCovidData = useSelector((state: RootState) => state.countryCovidData);
  const lastUpdated = countryCovidData.updated ? new Date(countryCovidData.updated) : "-";
  console.log(countryCovidData);

  useEffect(() => {
    dispatch({ type: 'FETCH_COUNTRY_COVID_DATA', payload: country });
  }, []);

  if (countryCovidData.message) {
    return <Country404 />
  }

  return (
    <>
      {!countryCovidData ? (
        <CountryDetailLoading />
      ) : (
        <div className={styles.detialContainer}>
          <PageTitle title={`${countryCovidData.country} / ${countryCovidData.continent}`} date={lastUpdated.toLocaleString()} />
          <div className={styles.mapContainer}>
            <LeafletMap coord={[countryCovidData.countryInfo.lat, countryCovidData.countryInfo.long]} country={countryCovidData.country} />
          </div>
          <div className={styles.countryInformationContainer}>
            <div className={styles.countryFlag}>
              <Image
                className={styles.logo}
                src={countryCovidData.countryInfo.flag}
                unoptimized
                width={100}
                height={100}
                alt='site_logo'
              />
            </div>
            <ul className={styles.countryInformation}>
              <li>Population : {countryCovidData.population}</li>
              <li>Cases : {countryCovidData.cases}</li>
              <li>Active : {countryCovidData.active}</li>
              <li>Recovered : {countryCovidData.recovered}</li>
              <li>Deaths : {countryCovidData.deaths}</li>
              <li>Tests : {countryCovidData.tests}</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailContainer;
