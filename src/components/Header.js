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
				<div className="column header-actions">
					<div className="header-actions-item">
						<span className="icon">
							<ion-icon name="home-sharp"></ion-icon>
						</span>
					</div>

					<div className="header-actions-item">
						<span className="icon is-medium">
							<ion-icon name="heart-outline"></ion-icon>
						</span>
					</div>

					<div className="header-actions-item">
						<img
							src="/profile-pic.jpeg"
							className="header-user-profile"
							alt="user profile pic"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
