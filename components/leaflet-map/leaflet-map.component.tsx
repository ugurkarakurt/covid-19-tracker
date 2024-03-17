import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import styles from "./leaflet-map.module.scss";
import { LeafletMapProps } from '@/types/types';

const LeafletMap: React.FC<LeafletMapProps> = ({ coord, country }) => {
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [coord]);

  return (
    <MapContainer key={key} center={coord} zoom={5} className={styles.mapContainer}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?style=dark"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coord}>
        <Tooltip permanent>
          {country}
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}

export default LeafletMap;
