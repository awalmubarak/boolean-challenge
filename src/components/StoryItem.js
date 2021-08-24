import React from 'react';
import Skeleton from 'react-loading-skeleton';

function StoryItem({ isLoading }) {
	return (
		<div className="storyitem-main">
			{isLoading ? (
				<Skeleton circle={true} height={56} width={56} />
			) : (
				<>
					<div>
						<img
							src="/profile-pic.jpeg"
							alt="story user pic"
							className="storyitem-image"
						/>
					</div>
					<div className="storyitem-name">
						badgyal.lani skfjhs sjlf skdfjl
					</div>
				</>
			)}
		</div>
	);
}

export default StoryItem;
