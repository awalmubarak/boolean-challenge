import React, { useState, useEffect } from 'react';

function SearchBar() {
	const [isFocused, setIsFocused] = useState(false);
	let inputRef = null;
	const handleFocusedState = () => {
		setIsFocused(!isFocused);
	};

	useEffect(() => {
		if (inputRef && isFocused) inputRef.focus();
	});

	return (
		<div className="searchbar-main">
			{isFocused ? (
				<input
					className="seachbar-input"
					placeholder="Search"
					onBlur={handleFocusedState}
					ref={(input) => {
						inputRef = input;
					}}
				/>
			) : (
				<div
					className="searchbar-notfocused"
					onClick={handleFocusedState}
				>
					<span className="icon">
						<ion-icon name="search-outline"></ion-icon>
					</span>
					<span>Search</span>
				</div>
			)}
		</div>
	);
}

export default SearchBar;
