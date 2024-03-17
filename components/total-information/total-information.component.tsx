import React from 'react'
import MovingComponent from '../moving-component/moving-component.component';
import Counter from '../counter/counter.component';
import styles from "./total-information.module.scss";
import { TotalData } from '@/types/types';

const TotalInformation: React.FC<{ totalCovidData: TotalData }> = ({ totalCovidData }) => {
  return (
    <>
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
    </>
  )
}

export default TotalInformation;