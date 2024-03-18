import React from 'react';
import Image from 'next/image';
import styles from "./country-information.module.scss";
import { CountryData } from '@/types/types';
import { numberWithDot } from '@/utils/pseudo.utils';

const CountryInformation: React.FC<{ countryCovidData: CountryData }> = ({ countryCovidData }) => {
  return (
    <>
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
    </>
  )
}


export default CountryInformation;
