import React from 'react';
import SearchBar from './SearchBar';

function Header() {
	return (
		<div className="header-main">
			<div className="columns header-section">
				<div className="column header-logo">
					<img src="/logo.png" alt="logo" className="logo" />
				</div>
				<div className="column header-searchbar">
					<SearchBar />
				</div>
				<div className="column header-actions">Icons</div>
			</div>
		</div>
	);
}

export default Header;
