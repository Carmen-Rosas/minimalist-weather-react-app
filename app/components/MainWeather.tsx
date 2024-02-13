import { Weather } from "../interfaces/Weather";

interface WeatherProps {
  weather: Weather | null; 
  hidden: boolean;
  setHidden: (hidden: boolean) => void; 
}

export function MainWeather({ weather, hidden, setHidden }: WeatherProps) {

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
    case "Dust":
    case "Haze":
    case "Sand":
    case "Ash":
    case "Smoke":
      weatherImage = "/img/dust.png";
      break;
    case "Drizzle":
      weatherImage = "/img/drizzle.png";
      break;
    case "Fog":
    case "Mist":
      weatherImage = "/img/fog.png";
      break;
    case "Thunderstorm":
      weatherImage = "/img/thunder.png";	
      break;
    case "Squall":
      weatherImage = "/img/squall.png";
      break;
    case "Tornado":
      weatherImage = "/img/tornado.png";
      break;
  }

  function handleClick() {
		setHidden(!hidden)
	}

  return (
    <div className={`allWeather ${hidden ? "hidden" : ""}`}>
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
      <button onClick={handleClick} hidden = {hidden}>Back</button>
      </div>
    </div>
  )
}