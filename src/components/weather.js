import React from 'react';
import moment from 'moment';
import IconType from './iconType';
import { convertKelvinToCelsius } from '../common';
import '../styles.css';

const Weather = ({weatherData}) => (

<div className="container">
  <div className="header">{moment(weatherData.dt_txt).format('dddd')} {moment(weatherData.dt_txt).format('LL')}</div>
  <div className="icon"><IconType iconType = {weatherData.weather[0].main}/><p className="iconText">{weatherData.weather[0].main}</p></div>
  <div className="weather">
    <p>Min. temperature: {convertKelvinToCelsius(weatherData.main.temp_min)} &deg;C</p>
    <p>Max. temperature: {convertKelvinToCelsius(weatherData.main.temp_max)} &deg;C</p>
    <p>Feels like: {convertKelvinToCelsius(weatherData.main.feels_like)} &deg;C</p>
    <p>Humidity: {weatherData.main.humidity} %</p>
  </div>
  <div className="footer"><span className="more">{moment(weatherData.dt_txt).format("hh:mm:ss a")}</span></div>
</div>

   
)

export default Weather;