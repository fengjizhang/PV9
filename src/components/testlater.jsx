import React, {useState, useEffect} from 'react';
import MyMap from './Map.jsx';

const axios = require('axios').default;

const Location1 = () => {

  const time = new Date().getTime();

  const timeStamps = [time - 1800000, time - 1800000 + 300000, time - 1800000 + 600000, time - 1800000 + 90000, time - 1800000 + 12000,
  time - 1800000 + 15000, time - 1800000 + 18000, time - 1800000 + 21000, time - 1800000 + 24000];

  console.log('tests', timeStamps);
  const [data, setData] = useState({});
    //${timeStamps[0]},${timeStamps[1]},${timeStamps[2]},${timeStamps[3]},${timeStamps[4]},${timeStamps[5]},${timeStamps[6]},${timeStamps[7]},${timeStamps[8]}

  useEffect(() => {

    axios.get(`https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=${timeStamps[0]},${timeStamps[1]},${timeStamps[2]},${timeStamps[3]},${timeStamps[4]},${timeStamps[5]}&units=miles`)
    .then((response) => {
      setData(response.data);
    })
    .catch((err)=> {
      console.log(err);
    })
  }, []);

  console.log('data!', data);
  return (
    <p>Time:</p>

  );
}

export default Location1;