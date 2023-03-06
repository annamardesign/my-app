import React from 'react';
import moment from 'moment';
import {getWeather} from './common';
import IconType from './iconType';
import './styles.css';

const Weather = ({weatherData}) => (
<body>
<p>{weatherData.city.name}</p>
<div className="container">
  <div className="header">{moment().format('dddd')} {moment().format('LL')}</div>
  <div className="icon"><IconType iconType = {getWeather(weatherData)}/><p className="icon">{getWeather(weatherData)}</p></div>
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