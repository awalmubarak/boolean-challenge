import React from 'react';
import CurrentUser from './sidebarComponents/CurrentUser';
import FollowSuggestions from './sidebarComponents/FollowSuggestions';

function Sidebar() {
	return (
		<div>
			<div className="sidebar-currentuser">
				<CurrentUser />
			</div>
			<div className="sidebar-suggestions">
				<FollowSuggestions />
			</div>
		</div>
	);
}

export default Sidebar;
