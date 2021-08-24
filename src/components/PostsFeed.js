import React from 'react';
import Post from './postComponents/Post';
import PostSkeleton from './postComponents/PostSkeleton';

function PostsFeed({ isLoading, posts }) {
	return (
		<div>
			{isLoading ? (
				<PostSkeleton />
			) : (
				posts?.map((post) => {
					return <Post post={post} key={post.date.date} />;
				})
			)}
		</div>
	);
}

export default PostsFeed;
