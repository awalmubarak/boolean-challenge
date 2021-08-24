import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PostsFeed from '../components/PostsFeed';
import Sidebar from '../components/Sidebar';
import Stories from '../components/Stories';

function Homepage() {
	const [posts, setPosts] = useState([]);
	const [stories, setStories] = useState([]);

	return (
		<div className="homepage-main">
			<Header />
			<div className="homepage-main-content">
				<div className="columns homepage-content-container">
					<div className="column is-two-thirds homepage-content">
						<Stories
							isLoading={stories.length === 0}
							stories={stories}
						/>
						<PostsFeed
							isLoading={posts.length === 0}
							posts={posts}
						/>
					</div>
					<aside className="column homepage-sidebar">
						<Sidebar />
					</aside>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
