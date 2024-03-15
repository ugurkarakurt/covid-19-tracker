"use client"
import React, { FC } from "react";
import { RootState } from '../../redux/store';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from 'react-tooltip';
import styles from "./mapChart.module.scss";
import { useSelector } from "react-redux";
import { getColorByCases } from "@/utils/pseudo.utils";


const MapChart: FC = () => {
  const geoUrl = process.env.NEXT_PUBLIC_DATA_URL;
  const totalCovidData = useSelector((state: RootState) => state.data);

  return (
    <div>
      <Tooltip style={{ backgroundColor: "#b72f34", color: "#fff" }} id="country_name" place="top-end" />
      <ComposableMap className={styles.mapContainer} projection="geoEqualEarth">
        <ZoomableGroup center={[0, 0]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo, i) => {
                const countryCode = geo.properties.name;
                const countryCases = totalCovidData[countryCode]?.cases || 0;
                const fill = getColorByCases(countryCases);

                return (
                  <Geography
                    data-tooltip-id="country_name"
                    data-tooltip-content={geo.properties.name}
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: fill,
                        stroke: "#656462",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#b72f34",
                        stroke: "#656462",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#b72f34",
                        stroke: "#656462",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
