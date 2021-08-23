import React from 'react';

function Post() {
	return (
		<div className="post-main-container">
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
			<div className="post-image-container">
				<img
					src="https://flynn.boolean.careers/exercises/img/boolgram/landscape1.jpg"
					alt="post"
					className="post-image"
				/>
			</div>
			<div className="post-details-container"></div>
			<div className="post-comment-container"></div>
		</div>
	);
}

export default Post;
