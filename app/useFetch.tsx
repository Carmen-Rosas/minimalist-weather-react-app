import { useState, useEffect } from "react";
import { Weather } from "./interfaces/Weather";


interface FetchData {
  weather: Weather | null; 
}

export function useFetch(): FetchData {
    const [data, setData] = useState(null);
    const API_KEY = "233d09b0524bb9203467de305600f28b";

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then((data) => setData(data));
    }, []);
    
    return {
        weather: data
    }

}