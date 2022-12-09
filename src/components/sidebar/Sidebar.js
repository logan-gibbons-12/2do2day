import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonIcon from '@mui/icons-material/Person';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import './Sidebar.css';

const Sidebar = ({sidebar, closeSidebar}) => {
	return (
		<div className={sidebar? 'Sidebar Sidebar--open' : 'Sidebar'}>
			
            <div className='close' onClick={closeSidebar}>
                <CloseRoundedIcon sx={{ fontSize: 60, color: 'maroon' }} />
            </div>

			<div className="items">
				<a href='/'>
				<li
					className="home"
				>
					{' '}
					<HomeRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> Home{' '}
				</li>
				</a>
				<a href='/Profile'>
				<li
					className="profile"
				>
					{' '}
					<PersonIcon sx={{ fontSize: 40, mr: '5px' }} /> Profile{' '}
				</li>
				</a>
				<a href='/About'>
				<li
					className="about"
				>
					{' '}
					<InfoRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> About{' '}
				</li>
				</a>
				<a href='/Groups'>
				<li className="groups">
					{' '}
					<GroupsRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> Groups{' '}
				</li>
				</a>
				<a href='/Messages'>
				<li
					className="messages"
				>
					{' '}
					<ForumRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> Messages{' '}
				</li>
				</a>
				<a href='/Settings'>
				<li
					className="settings"
				>
					{' '}
					<SettingsRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> Settings{' '}
				</li>
				</a>
			</div>

			<div className="copyright">
				<p>© 2022</p>
			</div>
		</div>
	);
};

export default Sidebar;
