import React, {useState, useEffect} from 'react';
import MyMap from './Map.jsx';


const axios = require('axios').default;


const Location = () => {

  const [data, setData] = useState({});


  useEffect(() => {

    axios.get('https://api.wheretheiss.at/v1/satellites/25544')
    .then((response) => {
      setData(response.data);
    })
    .catch((err)=> {
      console.log(err);
    })
  }, []);

  const velo = Math.floor(data.velocity);

  const coords=[
    [23.430482117087, -49.014876502625], [17.843279356409, -44.235717006038], [12.019846646628, -39.703223528003],
    [5.7019060618285, -35.093645706499], [3.3118278605779, -33.396177906815], [-31.819489886848, -4.5904228102454],
    [-50.816731720133, 38.553740509102], [-51.769357547526, 55.585757122808]
  ]
  return (
    <div><br></br>
      <h2 className="title">Location of the ISS</h2>
      <p>Altitude: {data.altitude} km</p>
      <p>Latitude: {data.latitude}</p>
      <p>Longitude: {data.longitude}</p>
      <p>Velocity: {velo} mph</p>
      <div className="containerMap">
      <p>Distance travelled for the past 30min</p>
      {data.latitude ? <MyMap coords={coords} /> : null }

      </div>

    </div>

  );
}

export default Location;