import React from 'react';

function CurrentUser() {
	return (
		<div className="currentuser-main">
			<div className="currentuser-info">
				<img
					src="/profile-pic.jpeg"
					alt="current-user"
					className="currentuser-pic"
				/>

				<div>
					<div className="post-details-username">d.junior</div>
					<div className="currentuser-info-name">Drexla Tracks</div>
				</div>
			</div>

			<button className="post-comment-button">Switch</button>
		</div>
	);
}

export default CurrentUser;
