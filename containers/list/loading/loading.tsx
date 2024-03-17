import React from "react";
import Skeleton from "@/components/skeleton/skeleton.component";
import styles from "./loading.module.scss";
import Image from "next/image";
import WorldMapImage from "@/public/world_map.svg";


function MapLoading() {

  return (
    <div className={styles.mapLoading}>
      <Image
        className={styles.logo}
        src={"/world_map.svg"}
        priority
        width={960}
        height={720}
        alt='site_logo'
      />
      <div className={styles.mapSkeleton}>
        <Skeleton />
      </div>
    </div>
  );
}

export default MapLoading;
