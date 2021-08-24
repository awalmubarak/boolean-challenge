import React from 'react';

function SuggestionItem({ user }) {
	return (
		<div className="suggestionitem-main">
			<img
				src="/profile-pic.jpeg"
				alt="suggested"
				className="suggestionitem-image"
			/>

			<div className="suggestionitem-details">
				<div className="post-details-username">{user.username}</div>
				<div className="currentuser-info-name">{user.subText}</div>
			</div>

			<button className="post-comment-button">Follow</button>
		</div>
	);
}

export default SuggestionItem;
