interface MainWeather {
    temp: number
    feels_like: number
    humidity: number
}

interface WeatherWeather {
    id: number
    main: string
    description: string
}

interface WindWeather {
    speed: number
}

export interface Weather {
    main: MainWeather
    weather: WeatherWeather[]
    wind: WindWeather
}