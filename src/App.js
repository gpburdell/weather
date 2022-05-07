import logo from './logo.svg'

import CustomHookWeather from './components/CustomHookWeather'
import CustomHookTempSnip from './components/CustomHookTempSnip'
import CustomHookWeatherSnip from './components/CustomHookWeatherSnip'
import CustomForecast from './components/CustomHookForecastSnip'
import CustomMap from './components/CustomMap'

import Navbaro from './components/Navbar'
import Footer from './components/Footer'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import { Icon } from 'leaflet'
import Accordion from 'react-bootstrap/Accordion'

import 'leaflet/dist/leaflet.css'

const locations = [
  {
    city: 'Washington, DC',
    lat: '38.8678675761367',
    long: '-77.215587976651',
  },
  {
    city: 'Atlanta, GA',
    lat: '33.986682180881715',
    long: '-84.08977728868666',
  },
  {
    city: 'Austin, TX',
    lat: '30.4817302020893',
    long: '-97.79531828874997',
  },
  {
    city: 'Boston, MA',
    lat: '42.349493937072644',
    long: '-71.04894981734101',
  },
  {
    city: 'Cincinnati, OH',
    lat: '39.13315073925589',
    long: '-84.51503086853793',
  },
  {
    city: 'Chicago, IL',
    lat: '41.8823753544975',
    long: '-87.632551307947',
  },
  {
    city: 'Cleveland, OH',
    lat: '41.397225328094834',
    long: '-81.61653145969332',
  },
  {
    city: 'Dallas, TX',
    lat: '32.8963203941712',
    long: '-96.97568150216216',
  },
  {
    city: 'Denver,CO',
    lat: '39.647883465583774',
    long: '-105.08210907128225',
  },
  {
    city: 'Detroit, MI',
    lat: '42.51394785534206',
    long: '-83.2827742539735',
  },
  {
    city: 'Doylestown,PA',
    lat: '40.31804156242138',
    long: '-75.09738925396161',
  },
  {
    city: 'Honolulu, HI',
    lat: '21.30847122656144',
    long: '-157.8636391974316',
  },
  {
    city: 'Houston, TX',
    lat: '29.82926962776082',
    long: '-95.56471467716854',
  },
  {
    city: 'Indianapolis, IN',
    lat: '39.914727539786846',
    long: '-86.07587757162945',
  },
  {
    city: 'Los Angelos,CA',
    lat: '34.14208485445778',
    long: '-118.13354776040661',
  },
  {
    city: 'Milwaukee, WI',
    lat: '43.035551955443424',
    long: '-87.90844416136866',
  },
  {
    city: 'Minneapolis, MN',
    lat: '44.986862233475705',
    long: '-93.40325174602653',
  },
  {
    city: 'New Haven, CT',
    lat: '41.26835545000499',
    long: '-73.13151470895683',
  },
  {
    city: 'New York, NY',
    lat: '40.751812527875416',
    long: '-73.98719579630807',
  },
  {
    city: 'Northbrook, IL',
    lat: '42.14654274670054',
    long: '-87.84978467501615',
  },
  {
    city: 'Philadelphia, PA',
    lat: '39.94900084499753',
    long: '-75.15149234657831',
  },
  {
    city: 'Pittsburgh, PA',
    lat: '45.405166630012204',
    long: '-122.7478091465783',
  },
  {
    city: 'Portland, OR',
    lat: '40.457323402551765',
    long: '-79.99156885966103',
  },
  {
    city: 'Raliegh, NC',
    lat: '35.7353643787042',
    long: '-78.78831781534217',
  },
  {
    city: 'San Antonio, TX',
    lat: '29.410229136542476',
    long: '-98.50071163354436',
  },
  {
    city: 'San Francisco, CA',
    lat: '37.779150475190555',
    long: '-122.43091024998014',
  },
  {
    city: 'Seattle, WA',
    lat: '47.54911720942328',
    long: '-122.31852938465781',
  },
  {
    city: 'South Florida',
    lat: '26.1221164769484',
    long: '-80.14145300293023',
  },
]

function App() {
  return (
    <div>
      <Navbaro />
      <div className='ml-5'>
        <h2 className='text-xl text-gray-700 font-bold mb-1 ml-5'>Map</h2>
        <CustomMap locations={locations} />

        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header className='text-xl text-gray-700 font-bold mb-1'>
              Location List
            </Accordion.Header>
            <Accordion.Body>
              {locations.map((item, key) => {
                return (
                  <CustomHookWeather
                    lat={item.lat}
                    long={item.long}
                    cityname={item.city}
                  />
                )
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <CustomForecast
          lat={'38.8678675761367'}
          long={'-77.215587976651'}
          cityname={'Washington, DC'}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
