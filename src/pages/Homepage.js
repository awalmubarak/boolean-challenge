import React from 'react';
import Header from '../components/Header';
import Stories from '../components/Stories';

function Homepage() {
	return (
		<div className="homepage-main">
			<Header />
			<div className="homepage-main-content">
				<div className="columns homepage-content-container">
					<div className="column is-two-thirds homepage-content">
						<Stories />
					</div>
					<aside className="column homepage-sidebar">Hello</aside>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
