import React from 'react';

function PostLikes({ likes }) {
	let likesCount = likes.length;
	let recentLike = likes[0];
	return (
		<div className="post-likes-container">
			<img
				src={recentLike.profile_picture}
				alt={recentLike.username}
				className="post-likes-recent-image"
			/>
			<span className="post-details-username">{recentLike.username}</span>
			{likesCount > 1 && (
				<span className="post-details-text">
					&nbsp;and {likesCount} other{likesCount > 1 ? 's' : ''}
				</span>
			)}

			<span className="post-details-text">&nbsp;liked this</span>
		</div>
	);
}

export default PostLikes;
