import React from 'react';

function PostHeader() {
	return (
		<header className="post-header-container">
			<img
				src="/profile-pic.jpeg"
				alt="story user pic"
				className="storyitem-image"
				style={{ width: '32px', height: '32px' }}
			/>

			<div className="post-header-details">
				<div className="post-header-username">aminabuddafly</div>

				<span className="icon">
					<ion-icon name="ellipsis-horizontal"></ion-icon>
				</span>
			</div>
		</header>
	);
}

export default PostHeader;
