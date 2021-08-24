import React from 'react';
import StoryItem from './StoryItem';

function Stories() {
	return (
		<div className="stories-main">
			<div className="stories-loader">
				<img src="/loading-buffering.gif" alt="stories loading" />
			</div>
			<div className="stories-list">
				<StoryItem isLoading />
				<StoryItem isLoading />
				<StoryItem isLoading />
				<StoryItem />
				<StoryItem />
				<StoryItem />
				<StoryItem />
				<StoryItem />
				<StoryItem />
				<StoryItem />
				<StoryItem />
				<StoryItem />
				<StoryItem />
			</div>
		</div>
	);
}

export default Stories;
