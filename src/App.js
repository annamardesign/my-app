import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import './App.css';
import Search from "./components/search";
import { API_URL, API_KEY } from "./common";
        

function App() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      const fetchData = async () => {
        await fetch(`${API_URL}/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
        });
      }
      if(lat && long) {
      fetchData();
      }
  
  }, [lat,long])

  const handleCoordinates = (coordinates) => {
     const [latitude, longitude] = coordinates.split(" ");
     const fetchData = async () => {
      await fetch(`${API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
      });
    }
    fetchData();
  };

  return (
    <React.Fragment>
      <Search  className="search" getCoordinates = {handleCoordinates}/>
      {data && <p>{data.city.name}</p>}
      {data && data.list.map((hourly, index) => <Weather key ={index} weatherData={hourly}/>)
      }
    </React.Fragment>
  );
}

export default App;
