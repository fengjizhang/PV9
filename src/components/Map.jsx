import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline } from 'react-leaflet'


const MyMap = ({coords, currentLocation}) => {

  const position = currentLocation;

  console.log(currentLocation);
  const one = parseFloat(currentLocation[0].toFixed(3));
  const two = parseFloat(currentLocation[1].toFixed(3));
  // const position1 = [one, two];
  console.log('test1112', one, two);

  const limeOptions = { color: 'lime' }

  return (
    <div id="map">
        <MapContainer center={[one, two]} zoom={10} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polyline pathOptions={limeOptions} positions={coords} />
          <Marker position={[one, two]}>
            <Popup>
              Current Location of ISS <br />
            </Popup>
          </Marker>
        </MapContainer>
    </div>


  );

}

export default MyMap;