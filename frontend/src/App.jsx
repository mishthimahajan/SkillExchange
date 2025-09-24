// import React, { useState } from 'react';
// import './App.css';


// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const skills = ["Web Development", "Graphic Design", "Digital Marketing", "Photography"];

//   return (
    
//     <div className="w-full h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white p-6 relative overflow-hidden">
      
//       {/* Decorative Shapes */}
//       <div className="absolute top-24 right-10 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400"></div>
//       <div className="absolute bottom-10 right-5 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400"></div>
//       <div className="absolute left-5 top-1/3 w-16 h-16 rounded-full bg-green-400 opacity-60"></div>
//       <div className="absolute left-2 top-20 w-12 h-12 rounded-full bg-blue-500 opacity-60"></div>

//       {/* Navigation */}
//       <nav className="flex justify-between items-center mb-8">
//         <div className="text-2xl font-bold">Skill Exchange</div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-4">
//           <button className="text-black px-4 py-2 rounded-lg hover:bg-indigo-600 transition">Home</button>
//           <button className="text-black px-4 py-2 rounded-lg hover:bg-indigo-600 transition">Profile</button>
//           <button className="text-black px-4 py-2 rounded-lg hover:bg-indigo-600 transition">Settings</button>
//           <button className="text-black px-4 py-2 rounded-lg hover:bg-indigo-600 transition">Logout</button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md bg-white text-indigo-900 hover:bg-indigo-100">
//             ☰
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-indigo-700 rounded-lg p-4 space-y-2 absolute top-20 right-5 w-40 shadow-lg">
//           <button className="text-black w-full text-left px-4 py-2 hover:bg-indigo-600 rounded">Home</button>
//           <button className="text-black w-full text-left px-4 py-2 hover:bg-indigo-600 rounded">Profile</button>
//           <button className="text-black w-full text-left px-4 py-2 hover:bg-indigo-600 rounded">Settings</button>
//           <button className="text-black w-full text-left px-4 py-2 hover:bg-indigo-600 rounded">Logout</button>
//         </div>
//       )}

//       {/* Welcome Section */}
//       <section className="text-center mb-8">
//         <h1 className="text-4xl font-bold mb-2">Welcome, User!</h1>
//         <p className="text-lg">Explore skills, connect with peers, and start learning today.</p>
//       </section>

//       {/* Login/Register */}
//       <section className="flex justify-center gap-4 mb-8">
//         <button className="text-black px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition font-semibold">Login</button>
//         <button className="text-black px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition font-semibold">Register</button>
//       </section>

//       {/* Available Skills */}
//       <section>
//         <h2 className="text-xl font-semibold mb-4 text-center">Available Skills</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
//           {skills.map((skill, index) => (
//             <div key={index} className="bg-indigo-700 rounded-lg p-4 text-center hover:bg-indigo-600 transition cursor-pointer">
//               {skill}
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import Home from './Home';
// import Profile from './Profile';
// import Settings from './Settings';
// import Login from './Login';
// import Register from './Register';

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const skills = ["Web Development", "Graphic Design", "Digital Marketing", "Photography"];

//   return (
//     <Router>
//       <div className="w-full h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white p-6 relative overflow-hidden">
        
//         {/* Decorative Shapes */}
//         <div className="absolute top-24 right-10 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400"></div>
//         <div className="absolute bottom-10 right-5 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400"></div>
//         <div className="absolute left-5 top-1/3 w-16 h-16 rounded-full bg-green-400 opacity-60"></div>
//         <div className="absolute left-2 top-20 w-12 h-12 rounded-full bg-blue-500 opacity-60"></div>

//         {/* Navigation */}
//         <nav className="flex justify-between items-center mb-8">
//           <div className="text-2xl font-bold">Skill Exchange</div>

//           <div className="hidden md:flex space-x-4">
//             <Link to="/" className="text-black px-4 py-2 rounded-lg hover:bg-indigo-600 transition">Home</Link>
//             <Link to="/profile" className="text-black px-4 py-2 rounded-lg hover:bg-indigo-600 transition">Profile</Link>
//             <Link to="/settings" className="text-black px-4 py-2 rounded-lg hover:bg-indigo-600 transition">Settings</Link>
//             <Link to="/login" className="text-black px-4 py-2 rounded-lg hover:bg-indigo-600 transition">Login</Link>
//             <Link to="/register" className="text-black px-4 py-2 rounded-lg hover:bg-indigo-600 transition">Register</Link>
//           </div>

//           <div className="md:hidden">
//             <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md bg-white text-indigo-900 hover:bg-indigo-100">
//               ☰
//             </button>
//           </div>
//         </nav>

//         {menuOpen && (
//           <div className="md:hidden bg-indigo-700 rounded-lg p-4 space-y-2 absolute top-20 right-5 w-40 shadow-lg">
//             <Link to="/" className="text-black w-full text-left px-4 py-2 hover:bg-indigo-600 rounded">Home</Link>
//             <Link to="/profile" className="text-black w-full text-left px-4 py-2 hover:bg-indigo-600 rounded">Profile</Link>
//             <Link to="/settings" className="text-black w-full text-left px-4 py-2 hover:bg-indigo-600 rounded">Settings</Link>
//             <Link to="/login" className="text-black w-full text-left px-4 py-2 hover:bg-indigo-600 rounded">Login</Link>
//             <Link to="/register" className="text-black w-full text-left px-4 py-2 hover:bg-indigo-600 rounded">Register</Link>
//           </div>
//         )}

//         {/* Define Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/settings" element={<Settings />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter,Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Navbar from "./components/Navigation";

// function App() {
//   return (

//     <Routes>
     
//         <Navbar/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/settings" element={<Settings />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
     
//     </Routes>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from "./components/Navigation";

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// import Layout from "./Layout";

// function App() {
//   return (
//     <>
//       <Layout/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </>
//   );
// }

// export default App;








