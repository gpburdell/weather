import React from 'react';

import moment from 'moment';
// import { Card } from 'semantic-ui-react'
// import { Button } from 'semantic-ui-react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import { Icon } from 'leaflet'

import CustomHookTempSnip from './CustomHookTempSnip';
import CustomHookWeatherSnip from './CustomHookWeatherSnip'
import 'leaflet/dist/leaflet.css'

const refresh = () => {
  window.location.reload();
}

const Map = ({locations}) => (

  <MapContainer
  center={[38.694159852662736, -98.1104715314962]}
  zoom={4}
  scrollWheelZoom={false}
>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  />

  {locations.map((item, key) => {
    return (
      <Marker
        position={[item.lat, item.long]}

        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Tooltip direction="right" offset={[0, 0]} opacity={4} >{<CustomHookTempSnip lat={item.lat} long={item.long}cityname={item.city}/>}</Tooltip>
        <Popup>
          {/* {item.city} */}
          <CustomHookWeatherSnip
            lat={item.lat}
            long={item.long}
            cityname={item.city}
          />
        </Popup>
      </Marker>
    )
  })}
</MapContainer>)



export default Map;
