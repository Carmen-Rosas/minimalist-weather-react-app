interface ResultsPlace {
    city: string;
    country_code: string;
    formatted: string;
    place_id: string;
    lat: string;
    lon: string;
}

export interface Place {
    results: ResultsPlace[];
}