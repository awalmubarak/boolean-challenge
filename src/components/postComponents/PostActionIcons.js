import React from 'react';

function PostActionIcons() {
	return (
		<div>
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
	);
}

export default PostActionIcons;
