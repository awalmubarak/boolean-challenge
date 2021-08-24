import React from 'react';

function PostHeader({ name, profilePic }) {
	return (
		<header className="post-header-container">
			<img
				src={profilePic}
				alt={name}
				className="storyitem-image"
				style={{ width: '32px', height: '32px' }}
			/>

			<div className="post-header-details">
				<div className="post-header-username">{name}</div>

				<span className="icon">
					<ion-icon name="ellipsis-horizontal"></ion-icon>
				</span>
			</div>
		</header>
	);
}

export default PostHeader;
