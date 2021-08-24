import React from 'react';
import Skeleton from 'react-loading-skeleton';

function PostSkeleton() {
	return (
		<div className="post-skeleton-main">
			<div className="post-skeleton-header">
				<Skeleton circle={true} width={32} height={32} />
				<div className="post-skeleton-header-details">
					<div>
						<Skeleton count={1} width={130} height={10} />
					</div>
					<Skeleton count={1} width={90} height={10} />
				</div>
			</div>

			<div>
				<Skeleton
					width="100%"
					height={400}
					style={{ borderRadius: 0 }}
				/>
			</div>
		</div>
	);
}

export default PostSkeleton;
