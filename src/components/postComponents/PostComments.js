import React from 'react';
import PostCommentItem from './PostCommentItem';

function PostComments({ comments }) {
	const commentsCount = comments.length;
	const commentsToShow = commentsCount > 3 ? comments.slice(0, 3) : comments;
	return (
		<div className="post-comments-container">
			{commentsCount > 3 && (
				<div className="post-comments-title">
					View all {commentsCount} comments
				</div>
			)}
			<div className="post-comments-list">
				{commentsToShow.map((comment) => {
					return <PostCommentItem comment={comment} />;
				})}
			</div>
		</div>
	);
}

export default PostComments;
