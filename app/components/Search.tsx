interface SearchProps {
	setHidden: (hidden: boolean) => void; 
	hidden: boolean;
  }

export function Search({ setHidden, hidden }: SearchProps) {

	function handleClick() {
		setHidden(!hidden)
	}

	return (
		<div className={`search ${hidden ? "" : "hidden"}`}>
            <h1>CURRENT WEATHER</h1>
			<input className="input" type="text" placeholder="City or postal code" autoFocus={true} onClick={handleClick}/>
		</div>
	)
}