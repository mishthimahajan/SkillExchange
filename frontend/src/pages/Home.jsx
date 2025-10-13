// import React from 'react';


// function Home() {
//   return (
//     <div
//       className=" relative min-h-screen flex items-center justify-center text-center text-black px-4"
      
//     >
//        <img
//         src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80"
//         alt="background"
//         className="absolute inset-0 w-full h-full object-cover opacity-25 mx-auto"
//       />
//       <div className="bg-black-50 bg-opacity-90 p-8 rounded-lg max-w-xl">
//         <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Skill Exchange</h1>
//         <p className="mb-6 text-lg text-black">
//           Learn new skills, share your expertise, and connect with a community of passionate learners.
//         </p>
//         <button className="bg-indigo-600 hover:bg-indigo-600 text-black-900  px-6 py-3 rounded-lg font-semibold transition">
//           Explore Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React from 'react';

// function Home() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200 overflow-hidden">
//       {/* Animated Background Circles */}
//       <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
//         <div className="absolute w-96 h-96 bg-purple-300 rounded-full opacity-30 animate-pulse top-10 left-10"></div>
//         <div className="absolute w-72 h-72 bg-indigo-300 rounded-full opacity-20 animate-ping bottom-20 right-20"></div>
//       </div>

//       {/* Background Image */}
//       <img
//         src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80"
//         alt="workspace background"
//         className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
//       />

//       {/* Main Content */}
//       <div className="relative z-10 bg-white bg-opacity-80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl max-w-3xl text-center transition-all duration-500 hover:scale-105">
//         <h1 className="text-6xl font-extrabold text-indigo-700 mb-6 tracking-tight drop-shadow-lg">
//           Skill <span className="text-purple-600">Exchange</span>
//         </h1>
//         <p className="text-xl text-gray-800 mb-8 leading-relaxed font-medium">
//           🚀 Learn new skills, share your expertise, and connect with a vibrant community of passionate learners.
//         </p>
//         <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 text-white px-10 py-4 rounded-full font-bold shadow-lg transition-transform transform hover:scale-110">
//           Explore Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook

function Home() {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200 overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full opacity-30 animate-pulse top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-indigo-300 rounded-full opacity-20 animate-ping bottom-20 right-20"></div>
      </div>

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80"
        alt="workspace background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 bg-white bg-opacity-80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl max-w-3xl text-center transition-all duration-500 hover:scale-105">
        <h1 className="text-6xl font-extrabold text-indigo-700 mb-6 tracking-tight drop-shadow-lg">
          Skill <span className="text-purple-600">Exchange</span>
        </h1>
        <p className="text-xl text-gray-800 mb-8 leading-relaxed font-medium">
          🚀 Learn new skills, share your expertise, and connect with a vibrant community of passionate learners.
        </p>

        {/* ✅ Button now navigates to /explore */}
        <button
          onClick={() => navigate("/explore")} // 👈 navigate to Explore page
          className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 text-white px-10 py-4 rounded-full font-bold shadow-lg transition-transform transform hover:scale-110"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Home;


