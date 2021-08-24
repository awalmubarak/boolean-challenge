import React from 'react';
import PostActionIcons from './PostActionIcons';
import PostCommentInput from './PostCommentInput';
import PostComments from './PostComments';
import PostHeader from './PostHeader';
import PostLikes from './PostLikes';

function Post() {
	return (
		<div className="post-main-container">
			<div>
				<PostHeader />
			</div>
			<div className="post-image-container">
				<img
					src="https://flynn.boolean.careers/exercises/img/boolgram/landscape1.jpg"
					alt="post"
					className="post-image"
				/>
			</div>
			<div className="post-details-container">
				<div>
					<PostActionIcons />
				</div>

				<div>
					<PostLikes />
				</div>

				<div className="post-owner-container">
					<span className="post-details-username">angela.hue</span>
					<span className="post-details-text">&nbsp;liked this</span>
				</div>

				<div>
					<PostComments />
				</div>
				<div className="post-details-time">1 HOUR AGO</div>
			</div>
			<div>
				<PostCommentInput />
			</div>
		</div>
	);
}

export default Post;
