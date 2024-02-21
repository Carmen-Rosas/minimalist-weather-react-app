import { useState } from "react";
import { useFetchPlace } from "../hooks/useFetchPlace";

interface SearchProps {
	setHidden: (hidden: boolean) => void;
	hidden: boolean;
	setLat: (city: string) => void;
	setLon: (country: string) => void;
}

export function Search({ setHidden, hidden, setLat, setLon }: SearchProps) {

	const [input, setInput] = useState("");
	const place = useFetchPlace(input);

	function handleSubmit(event: any ) {
		event.preventDefault()
		setHidden(!hidden)
		try {
			let coords = event.target.value.split(",")
			setLat(coords[0])
			setLon(coords[1])
		} catch (error) {
			alert("Please enter a valid city or postal code \nShowing current weather in Madrid, Spain")
		}
	}

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setInput(event.target.value)
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
					minLength={3}
					required
					onChange={handleChange}
				/>
				<div>
					{place?.place.results?.map((result) => (
						<div key={result.place_id}>
							<button 
								onClick={handleSubmit} 
								value={[result.lat, result.lon]}
								hidden={!hidden}
								>{result.formatted}</button>
						</div>
					))}
				</div>
			</form>

		</div>
	)
}