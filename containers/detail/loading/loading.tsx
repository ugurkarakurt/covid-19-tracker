import React from "react";
import Skeleton from "@/components/skeleton/skeleton.component";
import styles from "./loading.module.scss";

const CountryDetailLoading: React.FC = () => {
  return (
    <div className={styles.countryDetailLoadingContainer}>
      <div className={styles.titleContainer}>
        <Skeleton />
        <Skeleton />
      </div>
      <div className={styles.mapContainer}>
        <Skeleton />
      </div>
      <div className={styles.countryInformationContainer}>
        <div className={styles.countryFlag}>
          <Skeleton />
        </div>
        <ul className={styles.countryInformation}>
          <li><Skeleton /></li>
          <li><Skeleton /></li>
          <li><Skeleton /></li>
          <li><Skeleton /></li>
          <li><Skeleton /></li>
          <li><Skeleton /></li>
        </ul>
      </div>
    </div>
  );
}

export default CountryDetailLoading;
