import React from "react";
import Skeleton from "@/components/skeleton/skeleton.component";
import styles from "./loading.module.scss";
import Image from "next/image";
import WorldMapImage from "@/public/world_map.svg";


function MapLoading() {

  return (
    <div className={styles.mapLoadingContainer}>
      <div className={styles.titleContainer}>
        <Skeleton />
        <Skeleton />
      </div>
      <Image
        className={styles.logo}
        src={"/world_map.svg"}
        priority
        width={100}
        height={100}
        alt='site_logo'
      />
    </div>
  );
}

export default MapLoading;
