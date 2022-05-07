import React from 'react'
import useFetch from '../hooks/useFetch'
import MiniTemp from './MiniTemp'
import { Card, CardGroup } from 'react-bootstrap';

function CustomHookTempSnip(location) {
  console.log('inside')
  console.log(location)
  console.log(location.cityname)
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/weather/?lat=${location.lat}&lon=${location.long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`,
    {}
  )
  console.log(data)

  if (loading) {
    return <h3>Loading...</h3>
  }
  return (

      <MiniTemp weatherData={data} location={location} />

  )
}

export default CustomHookTempSnip
