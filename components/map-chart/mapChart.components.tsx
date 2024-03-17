import React from "react";
import { RootState } from '../../redux/store';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from 'react-tooltip';
import styles from "./mapChart.module.scss";
import { useSelector } from "react-redux";
import { getColorByCases } from "@/utils/pseudo.utils";
import { CountryData } from "@/types/types";
import Link from "next/link";
import Topology from "@/data/topology.json";

const MapChart: React.FC = () => {
  const geoUrl = Topology;
  const countriesCovidData: { [country: string]: CountryData } = useSelector((state: RootState) => state.countriesCovidData);

  return (
    <div className={styles.mapContainer}>
      <Tooltip style={{ backgroundColor: "#fff", color: "#000", fontWeight: "bold" }} id="country_name" place="top-end" />
      <ComposableMap projection="geoEqualEarth">
        <ZoomableGroup center={[0, 0]} zoom={1} width={100} height={100}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryCode = geo.properties.name;
                const country = countriesCovidData[countryCode]
                const countryCases = country?.cases || 0;
                const fill = getColorByCases(countryCases);

                return (
                  <Link key={geo.rsmKey} href={`detail/${geo.properties.name}`}>
                    <Geography
                      data-tooltip-id="country_name"
                      data-tooltip-content={geo.properties.name}
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          transition: ".2s ease-in-out",
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
                  </Link>
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
