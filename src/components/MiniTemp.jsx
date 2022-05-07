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

const MiniTemp = ({ weatherData, location }) => (
  <div>
     {weatherData.main.temp.toFixed(0)} 
  </div>
)

export default MiniTemp
