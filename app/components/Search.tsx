import { useState } from "react";

interface SearchProps {
	setHidden: (hidden: boolean) => void;
	hidden: boolean;
	setCity: (city: string) => void;
	setCountry: (country: string) => void;
}

export function Search({ setHidden, hidden, setCity, setCountry }: SearchProps) {

	function handleSubmit(event: any) {
		event.preventDefault()
		setHidden(!hidden)
		try {
			setCity(place?.results[0]?.city)
			setCountry(place?.results[0]?.country_code)
		} catch (error) {
			setCity("Madrid")
			setCountry("ES")
		}
	}

	const [place, setPlace] = useState("")

	function handleChange(event: any) {
		const API_KEY = "814c9da1704a433088cebfa6cc361d58"

		fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${event.target.value}&format=json&apiKey=${API_KEY}`)
			.then(response => response.json())
			.then((response) => setPlace(response));
		
		console.log(place)
	}

	return (
		<div className={`search ${hidden ? "" : "hidden"}`}>
			<h1>CURRENT WEATHER</h1>
			<form onSubmit={handleSubmit}>
				<input
					className="input"
					type="text"
					placeholder="City or postal code"
					autoFocus={true}
					disabled={!hidden}
					onChange={handleChange}
				/>

			</form>

		</div>
	)
}