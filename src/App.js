import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import Backdrop from './components/sidebar/Backdrop';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Groups from './pages/Groups';
import Messages from './pages/messages/Messages';
import Settings from './pages/Settings'; 

const App = () => {
	const [sidebar, setSidebar] = useState(false);

	const toggleSidebar = () => {
		setSidebar((prevSate) => !prevSate);
	};

	return (
		<div className="App">
			<Header openSidebar={toggleSidebar} />
			<Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />
			<Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/groups" element={<Groups />} />
				<Route path="/messages" element={<Messages />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
		</div>
	);
};

export default App;
