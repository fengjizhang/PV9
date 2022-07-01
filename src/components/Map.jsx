import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'
import { FaRocket } from "react-icons/fa";


const MyMap = ({ coords }) => {

  const position = coords;

  console.log(coords);
  // const one = parseFloat(currentLocation[0].toFixed(3));
  // const two = parseFloat(currentLocation[1].toFixed(3));
  // const position1 = [one, two];
  // console.log('test1112', one, two);
  const redOptions = { color: 'red' }
  const limeOptions = { color: 'lime' }

  return (
    <div id="map">
        <MapContainer center={coords[7]} zoom={10} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polyline pathOptions={limeOptions} positions={coords} />
          <CircleMarker center={coords[7]} pathOptions={redOptions} radius={5}>
            <Popup>Current location of the ISS</Popup>
          </CircleMarker>
        </MapContainer>
    </div>


  );

}

export default MyMap;