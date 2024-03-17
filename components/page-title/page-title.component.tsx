import React from 'react';
import styles from "./page-title.module.scss";
import { PageTitleProps } from '@/types/types';
import MovingComponent from '../moving-component/moving-component.component';


const PageTitle: React.FC<PageTitleProps> = ({ title, date }) => {
  return (
    <MovingComponent initial={{ opacity: 0 }}>
      <div className={styles.homeTitle}>
        <h2>{title}</h2>
        <span>{date.toLocaleString()}</span>
      </div>
    </MovingComponent>

  )
}

export default PageTitle;
