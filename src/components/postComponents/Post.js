import React from 'react';
import PostActionIcons from './PostActionIcons';
import PostCommentInput from './PostCommentInput';
import PostComments from './PostComments';
import PostHeader from './PostHeader';
import PostLikes from './PostLikes';

function Post({ post }) {
	return (
		<div className="post-main-container">
			<div>
				<PostHeader
					profilePic={post.profile_picture}
					name={post.profile_fullname}
				/>
			</div>
			<div className="post-image-container">
				<img src={post.post_image} alt="post" className="post-image" />
			</div>
			<div className="post-details-container">
				<div>
					<PostActionIcons />
				</div>

				<div>
					{post.likes?.length > 0 && <PostLikes likes={post.likes} />}
				</div>

				<div className="post-owner-container">
					<span className="post-details-username">
						{post.profile_name}
					</span>
					<span className="post-details-text">
						&nbsp;{post.post_text}
					</span>
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
