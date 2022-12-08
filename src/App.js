import { useState } from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from './pages/About';
import Layout from './Layout';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import Backdrop from './components/sidebar/Backdrop';

// const App = () => {
// 	const [sidebar, setSidebar] = useState(false);

// 	const toggleSidebar = () => {
// 		setSidebar((prevSate) => !prevSate);
// 	};

// 	return (
// 		<div className="App">
// 			<Header openSidebar={toggleSidebar} />
// 			<Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />
// 			<Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
// 		</div>
// 	);
// };

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// export default App;
