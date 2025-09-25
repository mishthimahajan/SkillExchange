import React from 'react';


function Home() {
  return (
    <div
      className=" relative min-h-screen flex items-center justify-center text-center text-black px-4"
      
    >
       <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 mx-auto"
      />
      <div className="bg-black-50 bg-opacity-80 p-8 rounded-lg max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to Skill Exchange</h1>
        <p className="mb-6 text-lg">
          Learn new skills, share your expertise, and connect with a community of passionate learners.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-black px-6 py-3 rounded-lg font-semibold transition">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Home;

