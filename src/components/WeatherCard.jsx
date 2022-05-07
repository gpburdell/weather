import React from 'react';
import './weather_styles/styles.css';
import './weather_styles/weather-icons.css'
import { Card, CardGroup } from 'react-bootstrap';


import moment from 'moment';
// import { Card } from 'semantic-ui-react'
// import { Button } from 'semantic-ui-react';

const refresh = () => {
  window.location.reload();
}

const Weather = ({weatherData,location}) => (
  
  <Card border="dark" bg='Dark' style={{maxWidth: '22rem' }}>

<Card.Body>
<Card.Title>{location.cityname}&nbsp;&nbsp; 
<i className={`wi wi-owm-${weatherData.weather[0].id}`}></i>&nbsp;&nbsp;{weatherData.weather[0].main}</Card.Title>
    {/* <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p> */}
    <Card.Text>
    <p> Temp: {weatherData.main.temp.toFixed(0)} &deg;F &nbsp;&nbsp;  Humidity: {weatherData.main.humidity.toFixed(1)} %</p>

    <p>Wind Speed: {weatherData.wind.speed} mph  @ {weatherData.wind.deg} &deg; </p>
    </Card.Text>
    </Card.Body>

</Card>

)

export default Weather;