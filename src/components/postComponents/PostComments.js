import React from 'react';
import PostCommentItem from './PostCommentItem';

function PostComments() {
	return (
		<div className="post-comments-container">
			<div className="post-comments-title">View all 65 comments</div>
			<div className="post-comments-list">
				<PostCommentItem />
				<PostCommentItem />
				<PostCommentItem />
				<PostCommentItem />
				<PostCommentItem />
			</div>
		</div>
	);
}

export default PostComments;
