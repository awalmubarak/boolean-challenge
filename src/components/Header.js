import React from 'react';

function Header() {
	return (
		<div className="header-main">
			<div className="columns header-section">
				<div className="column header-logo">
					<img src="/logo.png" alt="logo" className="logo" />
				</div>
				<div className="column header-searchbar">Search</div>
				<div className="column header-actions">Icons</div>
			</div>
		</div>
	);
}

export default Header;
