// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>📖 Book App</h2>
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/search">🔍 Search by Title</Link></li>
        <li><Link to="/genre">🎬 Search by Genre</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
