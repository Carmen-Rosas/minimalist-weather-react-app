import { useEffect, useState } from "react";
import { Place } from "../interfaces/Place";

interface FetchPlace {
    place: Place;
}

export function useFetchPlace(input: string): FetchPlace {
    const API_KEY = "814c9da1704a433088cebfa6cc361d58"
    const [place, setPlace] = useState<Place>( { results: [] } );

    useEffect(() => {
        fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&format=json&apiKey=${API_KEY}`)
        .then(response => response.json())
        .then((place: Place) => setPlace(place));
    }, [input])
    
    return {
        place: place
    }
}
