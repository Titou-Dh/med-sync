// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white">
      <Link to="/dashboard/link1" className="block p-4 hover:bg-gray-700">
        Link 1
      </Link>
      <Link to="/dashboard/link2" className="block p-4 hover:bg-gray-700">
        Link 2
      </Link>
      <Link to="/dashboard/link3" className="block p-4 hover:bg-gray-700">
        Link 3
      </Link>
    </div>
  );
};

export default Sidebar;




