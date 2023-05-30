import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'

function App() {
const [weatherInfo, seTweatherInfo] = useState(null)

const success = (pos)=> {
const lat = pos.coords.latitude
const lon = pos.coords.longitude
const API_KEY= '251b26de6c22623a67f79d05049721cf'

const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

axios.get(URL)
  .then(({data}) => seTweatherInfo(data))
  .catch((err) => console.log(err))

}

useEffect (()=>{

navigator.geolocation.getCurrentPosition(success)

},[])

  return (
    <main className='bg-[url("/images/bg-image.jpg")] bg-cover bg-bottom min-h-screen  text-white flex justify-center items-center font-principal-font p-2'>
      
          {
        weatherInfo ? <Weather weatherInfo={weatherInfo}/>: <h2>Loading...</h2>
      }
      
    </main>
  )
}

export default App
