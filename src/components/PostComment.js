import React, { useState, useEffect } from 'react';

function PostComment() {
	const [isFocused, setIsFocused] = useState(false);
	let textAreaRef = null;
	const handleFocusedState = () => {
		setIsFocused(!isFocused);
	};
	useEffect(() => {
		if (textAreaRef && isFocused) textAreaRef.focus();
	});
	return (
		<div className="post-comment-container">
			<div className="post-comment-left">
				<ion-icon name="happy-outline"></ion-icon>
			</div>

			<div className="post-comment-middle">
				{isFocused ? (
					<textarea
						className="post-comment-input"
						ref={(inputRef) => {
							textAreaRef = inputRef;
						}}
						onBlur={handleFocusedState}
					></textarea>
				) : (
					<div
						className="post-comment-input-unfocused"
						onClick={handleFocusedState}
					>
						Add a comment...
					</div>
				)}
			</div>

			<div className="post-comment-right">
				<button className="post-comment-button">Post</button>
			</div>
		</div>
	);
}

export default PostComment;
