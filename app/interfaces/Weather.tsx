interface MainWeather {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
}

interface WeatherWeather {
    id: number
    main: string
    description: string
    icon: string
}

export interface Weather {
    main: MainWeather
    weather: WeatherWeather[]
}