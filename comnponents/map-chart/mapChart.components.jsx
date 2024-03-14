import React, { useState } from "react";
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from 'react-tooltip';

import styles from "./mapChart.module.scss";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MapChart() {
  return (
    <div>
      <Tooltip id="country_name" place="top-end" />
      <ComposableMap className={styles.mapContainer}>
        <ZoomableGroup center={[0, 0]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo, i) => {
                return (
                  <Geography
                    data-tooltip-id="country_name"
                    data-tooltip-content={geo.properties.name}
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#EEE",
                        stroke: "#fff",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        stroke: "#fff",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        stroke: "#fff",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                    }}
                  >
                  </Geography>
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}