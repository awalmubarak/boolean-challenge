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

			<div className="sidebar-copyright">
				© 2021 INSTAGRAM FROM FACEBOOK
			</div>
		</div>
	);
}

export default Sidebar;
