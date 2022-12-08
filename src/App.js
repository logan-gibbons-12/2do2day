import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import Backdrop from './components/sidebar/Backdrop';

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
		</div>
	);
};

export default App;
