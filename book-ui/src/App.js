import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Search from './pages/Search';
import Genre from './pages/Genre';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/genre" element={<Genre />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

