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

const MiniForecast = ({ weatherData, location }) => {
  console.log(weatherData.daily)
  return (
    <div className='text-medium font-medium text-gray-900'>
      <h2 className='text-xl text-gray-700 font-bold'>{location.cityname}&nbsp; Forecast Next 7-days
      {console.log(weatherData.daily[0].weather[0].main)}</h2>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 inline-block min-w-full sm:px-3 lg:px-5'>
            <div className='overflow-hidden'>
              <table className='min-w-full'>
                <thead className='bg-white border-b'>
                  <tr>
                    <th
                      scope='col'
                      className='text-medium font-medium text-gray-900 px-3 py-4 text-left'
                    >
                      Day
                    </th>
                    <th
                      scope='col'
                      className='text-medium font-medium text-gray-900 px-3 py-4 text-left'
                    >
                      Weather
                    </th>
                    <th
                      scope='col'
                      className='text-medium font-medium text-gray-900 px-3 py-4 text-left'
                    >
                      High
                    </th>{' '}
                    <th
                      scope='col'
                      className='text-medium font-medium text-gray-900 px-3 py-4 text-left'
                    >
                      Low
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {weatherData.daily.map((d) => {
                    return (
                      // <p>{d.dt} {d.weather[0].main} H.Temp.:{d.temp.max} L.Temp.:{d.temp.max} </p>

                      <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
                        <td
                          scope='col'
                          className='text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap'
                        >
                          {new Date(d.dt* 1000).toLocaleDateString("en", { weekday: 'long', month: 'long', day: 'numeric'})}
                        </td>
                        <td
                          scope='col'
                          className='text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap'
                        >
                          {d.weather[0].main}&nbsp;<i className={`wi wi-owm-${d.weather[0].id}`}></i>
                        </td>
                        <td
                          scope='col'
                          className='text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap'
                        >
                          {d.temp.max.toFixed(0)}
                        </td>
                        <td
                          scope='col'
                          className='text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap'
                        >
                          {d.temp.min.toFixed(0)}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>{' '}
    </div>
  )
}

export default MiniForecast
