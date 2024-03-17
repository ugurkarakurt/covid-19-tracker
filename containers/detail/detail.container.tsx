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
import { numberWithDot } from '@/utils/pseudo.utils';
const LeafletMap = dynamic(() => import("@/components/leaflet-map/leaflet-map.component"), { ssr: false });

const DetailContainer: React.FC<{ country: string }> = ({ country }) => {

  const dispatch = useDispatch();
  const countryCovidData = useSelector((state: RootState) => state.countryCovidData);
  const lastUpdated = countryCovidData.updated ? new Date(countryCovidData.updated) : "-";

  useEffect(() => {
    dispatch({ type: 'FETCH_COUNTRY_COVID_DATA', payload: country });
  }, []);

  if (countryCovidData.message) {
    return <Country404 />
  }

  return (
    <>
      {countryCovidData.cases > 0 ? (
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
                priority
                width={100}
                height={100}
                alt='site_logo'
              />
            </div>
            <ul className={styles.countryInformation}>
              <li>Population : {numberWithDot(countryCovidData.population)}</li>
              <li>Cases : {numberWithDot(countryCovidData.cases)}</li>
              <li>Active : {numberWithDot(countryCovidData.active)}</li>
              <li>Recovered : {numberWithDot(countryCovidData.recovered)}</li>
              <li>Deaths : {numberWithDot(countryCovidData.deaths)}</li>
              <li>Tests : {numberWithDot(countryCovidData.tests)}</li>
            </ul>
          </div>
        </div>
      ) : (
        <CountryDetailLoading />
      )}
    </>
  );
};

export default DetailContainer;
