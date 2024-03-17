import React from 'react';
import styles from "./page-title.module.scss";
import { PageTitleProps } from '@/types/types';


const PageTitle: React.FC<PageTitleProps> = ({ title, date }) => {
  return (
    <div className={styles.homeTitle}>
      <h2>{title}</h2>
      <span>{date.toLocaleString()}</span>
    </div>
  )
}

export default PageTitle;
