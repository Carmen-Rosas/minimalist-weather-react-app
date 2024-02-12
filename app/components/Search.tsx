
export function Search() {
	return (
		<div className="search">
            <h1>CURRENT WEATHER</h1>
			<input className="input" type="text" placeholder="City or postal code" autoFocus={true} />
		</div>
	)
}