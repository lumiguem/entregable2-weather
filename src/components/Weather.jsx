import { useState } from "react"
import { kelvinToCelcius, kelvinToFahrenheit } from "../utils/temp"


const weatherImages = {
    "01d": "/images/weather/clearsky_d.png",
    "01n": "/images/weather/clearsky_n.png",
    "02d": "/images/weather/fewclouds_d.png",
    "02n": "/images/weather/fewclouds_n.png",
    "03d": "/images/weather/scatteredclouds.png",
    "03n": "/images/weather/scatteredclouds.png",
    "04d": "/images/weather/broken.png",
    "04n": "/images/weather/broken.png",
    "09d": "/images/weather/showerrain_d.png",
    "09n": "/images/weather/showerrain_n.png",
    "10d": "/images/weather/rain.png",
    "10n": "/images/weather/rain.png",
    "11d": "/images/weather/thunderstorm.png",
    "11n": "/images/weather/thunderstorm.png",
    "13d": "/images/weather/snow.png",
    "13n": "/images/weather/snow.png",
    "50d": "/images/weather/mist.png",
    "50n": "/images/weather/mist.png",

}

const Weather = ({ weatherInfo }) => {
    console.log(weatherInfo)
    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp = () => {
        setIsCelsius (!isCelsius)
    }

    return (

        <section className="text-center grid gap-6">
            <section className="flex justify-center gap-4">
            
            </section>
            <h2 className="font-bold text-2xl ">{weatherInfo?.name}, {weatherInfo?.sys.country}</h2>

            <section className="grid gap-4 sm:grid-cols-[1fr_auto]">

                <article className="bg-black/50 p-4 rounded-3xl grid grid-cols-2 items-center">

                    <h3 className="col-span-2 capitalize">{weatherInfo?.weather[0].description}</h3>
                    <span className="text-4xl">{isCelsius ?  kelvinToCelcius(weatherInfo?.main.temp): kelvinToFahrenheit(weatherInfo?.main.temp)}</span>
                    <div className="flex justify-center">
                        <img src={weatherImages[weatherInfo?.weather[0].icon]} alt="" />
                    </div>

                </article>
                <section className="bg-white/60 text-black p-2 rounded-3xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center">

                    <article className="flex gap-2 sm:items-center">
                        <div>
                            <img src="/images/wind.png" alt="" />
                        </div>
                            <span>{weatherInfo?.wind.speed} m/s</span>
                    </article>
                    <article className="flex gap-2 sm:items-center">
                        <div>
                            <img src="/images/humidity.png" alt="" />
                        </div>
                            <span>{weatherInfo?.main.humidity} %</span>
                    </article>
                    <article className="flex gap-2 sm:items-center">
                        <div>
                            <img src="/images/pressure.png" alt="" />
                        </div>
                            <span>{weatherInfo?.main.pressure} hPa</span>
                    </article>

                </section>

            </section>

            <div className="flex justify-center items-center">
            <button className="bg-gray-300/70 hover:bg-gray-400 font-bold text-black rounded-xl w-20 shadow " onClick={handleChangeTemp}> °F / °C </button>
            </div>

        </section>

    )
}

export default Weather