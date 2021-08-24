import React from 'react';
import SuggestionItem from './SuggestionItem';

function FollowSuggestions() {
	const suggestions = [
		{
			username: 'tess96',
			subText: 'Follows you',
		},
		{
			username: 'nfcn44',
			subText: 'Suggested for you',
		},

		{
			username: 'tess96',
			subText: 'Suggested for you',
		},

		{
			username: 'my_favour',
			subText: 'Followed by xsol6nx',
		},

		{
			username: 'lockz___',
			subText: 'Follows you',
		},
	];
	return (
		<div className="follow-suggestions-main">
			<div className="follow-suggestions-header">
				<span className="follow-suggestions-header-text">
					Suggestions for you
				</span>
				<button className="follow-suggestions-header-button">
					See All
				</button>
			</div>

			<div className="follow-suggestions-list">
				{suggestions.map((sugg) => {
					return <SuggestionItem user={sugg} />;
				})}
			</div>
		</div>
	);
}

export default FollowSuggestions;
