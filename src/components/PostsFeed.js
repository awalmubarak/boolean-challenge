import React from 'react';
import Post from './postComponents/Post';
import PostSkeleton from './postComponents/PostSkeleton';

function PostsFeed() {
	return (
		<div>
			<PostSkeleton />
			<Post />
			<Post />
		</div>
	);
}

export default PostsFeed;
