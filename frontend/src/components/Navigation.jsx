import { useState } from "react";

import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Profile', path: '/profile', icon: <FaUser /> },
    { name: 'Settings', path: '/settings', icon: <FaCog /> },
    { name: 'Login', path: '/login', icon: <FaSignInAlt /> },
    { name: 'Register', path: '/register', icon: <FaUserPlus /> },
  ];

  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-800 shadow-lg rounded-lg mb-6">
      <div className="text-2xl font-bold text-white">Skill Exchange</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`flex items-center gap-2 px-4 py-2 rounded hover:bg-indigo-600 transition-all ${
              location.pathname === link.path ? 'bg-indigo-600' : ''
            }`}
          >
            {link.icon} {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-black text-2xl p-2 rounded hover:bg-indigo-600 transition">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute right-4 top-16 bg-indigo-800 rounded-lg shadow-lg p-4 space-y-2 z-10">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded hover:bg-indigo-600 transition ${
                location.pathname === link.path ? 'bg-indigo-600' : ''
              }`}
            >
              {link.icon} {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navigation;


// import React from "react";
// import { NavLink } from "react-router-dom";


// function Navigation() {
//   return (
//     <nav className="navbar">
//       <h2 className="logo">Skill Exchange</h2>
//       <ul className="nav-links">
//         <li>
//           <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
//             Profile
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
//             Settings
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/register" className={({ isActive }) => (isActive ? "active" : "")}>
//             Register
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;




