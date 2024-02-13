import { useState } from "react";
import { CountrySelect } from "./CountrySelect";

interface SearchProps {
	setHidden: (hidden: boolean) => void;
	hidden: boolean;
	value: string;
	setValue: (value: string) => void;
}

export function Search({ setHidden, hidden, value, setValue }: SearchProps) {

	function handleSubmit(event: any) {
		event.preventDefault()
		setHidden(!hidden)
		setValue(place?.results[0]?.city)
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
				<CountrySelect />
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