import React from 'react';
import Skeleton from 'react-loading-skeleton';

function StoryItem({ isLoading, story = {} }) {
	const { profile_picture, profile_name } = story;
	return (
		<div className="storyitem-main">
			{isLoading ? (
				<Skeleton circle={true} height={56} width={56} />
			) : (
				<>
					<div>
						<img
							src={profile_picture}
							alt={profile_name}
							className="storyitem-image"
						/>
					</div>
					<div className="storyitem-name">{profile_name}</div>
				</>
			)}
		</div>
	);
}

export default StoryItem;
