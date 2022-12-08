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
				<li
					className="home"
					onClick={() => {
						window.location.pathname = '/';
					}}
				>
					{' '}
					<HomeRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> Home{' '}
				</li>

				<li
					className="profile"
					onClick={() => {
						window.location.pathname = '/Profile';
					}}
				>
					{' '}
					<PersonIcon sx={{ fontSize: 40, mr: '5px' }} /> Profile{' '}
				</li>

				<li
					className="about"
					onClick={() => {
						window.location.pathname = '/About';
					}}
				>
					{' '}
					<InfoRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> About{' '}
				</li>

				<li
					className="groups"
					onClick={() => {
						window.location.pathname = '/Groups';
					}}
				>
					{' '}
					<GroupsRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> Groups{' '}
				</li>

				<li
					className="messages"
					onClick={() => {
						window.location.pathname = '/Messages';
					}}
				>
					{' '}
					<ForumRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> Messages{' '}
				</li>

				<li
					className="settings"
					onClick={() => {
						window.location.pathname = '/Settings';
					}}
				>
					{' '}
					<SettingsRoundedIcon sx={{ fontSize: 40, mr: '5px' }} /> Settings{' '}
				</li>
			</div>

			<div className="copyright">
				<p>© 2022</p>
			</div>
		</div>
	);
};

export default Sidebar;
