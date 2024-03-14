"use client"
import MapChart from "@/comnponents/map-chart/mapChart.components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MapChart />
    </main>
  );
}
