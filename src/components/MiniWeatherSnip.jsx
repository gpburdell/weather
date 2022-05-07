import React from 'react'
import './weather_styles/styles.css'
import './weather_styles/weather-icons.css'
import { Card, CardGroup } from 'react-bootstrap'

import moment from 'moment'
// import { Card } from 'semantic-ui-react'
// import { Button } from 'semantic-ui-react';

const refresh = () => {
  window.location.reload()
}

const MiniWeather = ({ weatherData, location }) => (
  <div>
    {location.cityname}&nbsp; {weatherData.main.temp.toFixed(0)} &deg;F&nbsp;
    <i className={`wi wi-owm-${weatherData.weather[0].id}`}></i>&nbsp;&nbsp;
    {weatherData.weather[0].main}
  </div>
)

export default MiniWeather
