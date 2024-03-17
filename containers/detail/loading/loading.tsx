import React from "react";
import Skeleton from "@/components/skeleton/skeleton.component";
import styles from "./loading.module.scss";


function CountryDetailLoading() {

  return (
    <div className={styles.countryDetailLoadingContainer}>
      <div className={styles.flagLoadingContainer}>
        <Skeleton />
      </div>
      <div className={styles.informationContainer}>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default CountryDetailLoading;
