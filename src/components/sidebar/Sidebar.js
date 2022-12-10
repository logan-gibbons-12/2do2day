import React from 'react';
import { Link } from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonIcon from '@mui/icons-material/Person';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import './Sidebar.css';

const Sidebar = ({ sidebar, closeSidebar }) => {
	return (
		<div className={sidebar ? 'Sidebar Sidebar--open' : 'Sidebar'}>
			<div className="close" onClick={closeSidebar}>
				<CloseRoundedIcon sx={{ fontSize: 60, color: 'maroon' }} />
			</div>

			<div className="items">
				<Link to="/">
					<li className="home">
						{' '}
						<HomeRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> Home{' '}
					</li>
				</Link>
				<Link to="/Profile">
					<li className="profile">
						{' '}
						<PersonIcon sx={{ fontSize: 40, mr: '5px' }} /> Profile{' '}
					</li>
				</Link>
				<Link to="/Groups">
					<li className="groups">
						{' '}
						<GroupsRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> Groups{' '}
					</li>
				</Link>
				<Link to="/Messages">
					<li className="messages">
						{' '}
						<ForumRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> Messages{' '}
					</li>
				</Link>
				<Link to="/Settings">
					<li className="settings">
						{' '}
						<SettingsRoundedIcon
							sx={{ fontSize: 40, mr: '5px' }}
						/> Settings{' '}
					</li>
				</Link>
				<Link to="/About">
					<li className="about">
						{' '}
						<InfoRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> About{' '}
					</li>
				</Link>
			</div>

			<div className="copyright">
				<p>© 2022</p>
			</div>
		</div>
	);
};

export default Sidebar;
