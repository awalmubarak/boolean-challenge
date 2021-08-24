import React from 'react';
import SuggestionItem from './SuggestionItem';

function FollowSuggestions() {
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
				<SuggestionItem />
				<SuggestionItem />
				<SuggestionItem />
				<SuggestionItem />
			</div>
		</div>
	);
}

export default FollowSuggestions;
