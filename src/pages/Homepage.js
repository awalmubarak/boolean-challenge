import React from 'react';
import Header from '../components/Header';

function Homepage() {
	return (
		<div className="homepage-main">
			<Header />
			<div className="homepage-main-content">
				<div className="columns homepage-content">
					<div className="column is-two-thirds">Hello from home</div>
					<aside className="column homepage-sidebar">Hello</aside>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
