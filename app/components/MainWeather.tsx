import { Weather } from "../interfaces/Weather";

interface WeatherProps {
  weather: Weather | null; 
}

export function MainWeather({ weather }: WeatherProps) {

  let weatherImage = "";

  switch(weather?.weather[0].main) {
    case "Clouds":
      weatherImage = "/img/clouds.png";
      break;
    case "Clear":
      weatherImage = "/img/clear.png";
      break;
    case "Rain":
      weatherImage = "/img/rain.png";
      break;
    case "Snow":
      weatherImage = "/img/snow.png";
      break;
  }

  return (
    <div className="allWeather">
      <div className="weather">
        <img className="weatherImage" src={weatherImage} alt={weather?.weather[0].main}/>
        <span>({weather?.weather[0].description})</span>
      </div>
      <div className="temp">
        <h1>{weather?.main.temp}ºC</h1>
        <h2>feels like {weather?.main.feels_like}ºC</h2>
        <div className="humidAndWind">
          <span>Humidity: {weather?.main.humidity}%</span>
          <span>Wind speed: {weather?.wind.speed}m/s</span>
        </div>
      </div>
    </div>
  )
}