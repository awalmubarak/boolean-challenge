import React from 'react';

function PostLikes() {
	return (
		<div className="post-likes-container">
			<img
				src="/profile-pic.jpeg"
				alt="liked"
				className="post-likes-recent-image"
			/>
			<span className="post-details-username">angela.hue</span>
			<span className="post-details-text">&nbsp;and 6 others</span>
			<span className="post-details-text">&nbsp;liked this</span>
		</div>
	);
}

export default PostLikes;
