import React from 'react';
import StoryItem from './StoryItem';

function Stories({ isLoading, stories }) {
	return (
		<div className="stories-main">
			{isLoading && (
				<div className="stories-loader">
					<img src="/loading-buffering.gif" alt="stories loading" />
				</div>
			)}

			<div className="stories-list">
				{isLoading &&
					Array(7)
						.fill(1)
						.map((item, i) => {
							return <StoryItem isLoading key={i} />;
						})}

				{stories?.map((story) => {
					return <StoryItem story={story} key={story.profile_name} />;
				})}
			</div>
		</div>
	);
}

export default Stories;
