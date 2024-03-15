"use client"
import React, { useEffect } from 'react';
import styles from "./home-container.module.scss";
import { useDispatch } from 'react-redux';

function HomeContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_TOTAL_COVID_DATA' });
  }, []);


  return (
    <div>home-container</div>
  )
}

export default HomeContainer;
