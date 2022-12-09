import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import Backdrop from './components/sidebar/Backdrop';
import About from './pages/About';
import Profile from './pages/Profile';
import Groups from './pages/Groups';
import Messages from './pages/Messages';
import Settings from './pages/Settings';

const App = () => {
	const [sidebar, setSidebar] = useState(false);

	const toggleSidebar = () => {
		setSidebar((prevSate) => !prevSate);
	};

  let Location

	switch (window.location.pathname) {
    default:
      Location = App
      break;
		case '/':
      Location = App
			break;
		case '/Profile':
      Location = Profile
			break;
		case '/About':
      Location = About
			break;
		case '/Groups':
      Location = Groups
			break;
		case '/Messages':
      Location = Messages
			break;
		case '/Settings':
      Location = Settings
			break;
	}

	return (
		<div className="App">
			<Header openSidebar={toggleSidebar} />
			<Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />
			<Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <Location />
		</div>
	);
};

export default App;
