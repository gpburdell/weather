import React from 'react'
import useFetch from '../hooks/useFetch'
import MiniForecast from './MiniForecastSnip'
import { Card, CardGroup } from 'react-bootstrap';

function CustomForecast(location) {
  console.log('inside')
  console.log(location)
  console.log(location.cityname)
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/onecall?lat=${location.lat}&lon=${location.long}&exclude=hourly,minutely&units=imperial&appid=${process.env.REACT_APP_API_KEY}`,
    {}
  )
  console.log(data)

  if (loading) {
    return <h3>Loading...</h3>
  }
  return (

      <MiniForecast weatherData={data} location={location} />

  )
}

export default CustomForecast
