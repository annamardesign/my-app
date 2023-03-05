import React, { useEffect, useState } from "react";
import Weather from "./weather";
import { mock } from "./common";
import './App.css';
import Search from "./search";
        

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       navigator.geolocation.getCurrentPosition(function(position) {
//         setLat(position.coords.latitude);
//         setLong(position.coords.longitude);
//       });
// console.log('lat', lat);
//       await fetch(`${process.env.API_URL}/forecast?lat=${lat}&lon=${long}&appid=4ca03993201a3577d059b49d77755294`)
//       .then(res => res.json())
//       .then(result => {
//         setData(result)
//         console.log(result);
//       });
//     }
//     fetchData();
//   }, [lat,long])

  const handleCoordinates = (coordinates) => {
     const [latitude, longitude] = coordinates.split(" ");
     const fetchData = async () => {
      await fetch(`${process.env.API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=4ca03993201a3577d059b49d77755294`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  };

  return (
    <div className="App">
      <Search  getCoordinates = {handleCoordinates}/>
      {data ? (
        <Weather weatherData={mock}/>
      ): (
        <div>No data for your location found.</div>
      )}
    </div>
  );
}

export default App;
