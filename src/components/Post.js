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
			<div className="post-details-container">
				<div className="post-details-icons">
					<div className="post-details-left-icons">
						<span className="icon is-medium">
							<ion-icon name="heart-outline"></ion-icon>
						</span>

						<span className="icon is-medium">
							<ion-icon name="chatbubble-outline"></ion-icon>
						</span>

						<span className="icon is-medium">
							<ion-icon name="send-outline"></ion-icon>
						</span>
					</div>
					<div>
						<span className="icon is-medium">
							<ion-icon name="bookmark-outline"></ion-icon>
						</span>
					</div>
				</div>
			</div>
			<div className="post-comment-container"></div>
		</div>
	);
}

export default Post;
