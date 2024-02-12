import { Weather } from "../interfaces/Weather";

interface WeatherProps {
  weather: Weather | null; 
}

export function MainWeather({ weather }: WeatherProps) {
  return (
    <div>
      <h1>{weather?.main.temp}</h1>
    </div>
  )
}