import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faSnowflake, faSun, faCloud, faWind } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const Weather = ({weatherData}) => (
    // 
    //     <FontAwesomeIcon icon={faCloudRain} className="icon"/><p>{weatherData.list[0].weather[0].main}</p>
    //     {/* <FontAwesomeIcon icon={faSnowflake} className="icon" />
    //     <FontAwesomeIcon icon={faSun} className="icon" />
    //     <FontAwesomeIcon icon={faCloud} className="icon" />
    //     <FontAwesomeIcon icon={faWind} className="icon"/> */}
       
    //    

<body>
<p>{weatherData.city.name}</p>
<div className="container">
  <div className="header">{moment().format('dddd')} {moment().format('LL')}</div>
  <div className="icon"><FontAwesomeIcon icon={faCloudRain} className="icon"/><p className="icon">{weatherData.list[0].weather[0].main}</p></div>
  <div className="weather">
    <p>Min. temperature: {weatherData.list[0].main.temp_min} &deg;C</p>
    <p>Max. temperature: {weatherData.list[0].main.temp_max} &deg;C</p>
    <p>Feels like: {weatherData.list[0].main.feels_like} &deg;C</p>
    <p>Humidity: {weatherData.list[0].main.humidity} %</p>
    <p>Sunrise: {new Date(weatherData.city.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
    <p>Sunset: {new Date(weatherData.city.sunset * 1000).toLocaleTimeString('en-IN')}</p>
  </div>
  <div className="footer"><span className="more">More details</span></div>
</div>

</body>
   
)

export default Weather;