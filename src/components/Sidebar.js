import React from 'react';
import CurrentUser from './sidebarComponents/CurrentUser';

function Sidebar() {
	return (
		<div>
			<div className="sidebar-currentuser">
				<CurrentUser />
			</div>
		</div>
	);
}

export default Sidebar;
