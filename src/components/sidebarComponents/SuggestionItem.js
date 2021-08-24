import React from 'react';

function SuggestionItem() {
	return (
		<div className="suggestionitem-main">
			<img
				src="/profile-pic.jpeg"
				alt="suggested"
				className="suggestionitem-image"
			/>

			<div className="suggestionitem-details">
				<div className="post-details-username">nfc44u</div>
				<div className="currentuser-info-name">suggested for you</div>
			</div>

			<button className="post-comment-button">Follow</button>
		</div>
	);
}

export default SuggestionItem;
