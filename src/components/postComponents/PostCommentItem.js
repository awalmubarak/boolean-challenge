import React from 'react';

function PostCommentItem({ comment }) {
	return (
		<div className="post-comment-item">
			<span className="post-details-username">{comment.username}</span>
			<span className="post-details-text">&nbsp;{comment.text}</span>
		</div>
	);
}

export default PostCommentItem;
