// import { useState } from 'react';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         console.log("Logged in successfully", data);
//         localStorage.setItem('token', data.token);
//       } else {
//         console.error(data.error);
//       }
//     } catch (error) {
//       console.error('Something went wrong:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
      
//       {/* Image Section */}
//       <div className="md:w-1/2 w-full h-64 md:h-auto">
//         <img
//           src="https://media.istockphoto.com/id/1023100470/vector/businessmen-handshake-with-elements-and-icons-of-finance-and-corporate-life-tools.jpg?s=612x612&w=0&k=20&c=QQCXSnQt21cgu6Uq4nP412Uo07Hea9G4BApk25vc4oU="
//           alt="Login visual"
//           className="md:min-w-1/2 w-full h-20 md:h-auto mb-6 md:mb-0"
//         />
//       </div>

//       {/* Login Form Section */}
//       <div className="md:w-1/3 w-full p-6 bg-white text-indigo-900 rounded-r-lg shadow-md">
//         <h2 className="text-3xl mb-6 text-center font-bold">Login</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <input 
//             type="email" 
//             placeholder="Email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             className="p-3 rounded border border-black"
//             required
//           />
//           <input 
//             type="password" 
//             placeholder="Password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             className="p-3 rounded border border-black"
//             required
//           />
//           <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-black p-3 rounded font-semibold transition">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import { useState } from 'react';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         console.log("Logged in successfully", data);
//         localStorage.setItem('token', data.token);
//       } else {
//         console.error(data.error);
//       }
//     } catch (error) {
//       console.error('Something went wrong:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
      
//       {/* Image Section */}
//       <div className="md:w-1/2 w-full flex justify-center items-center p-4">
//         <img
//           src="https://media.istockphoto.com/id/1023100470/vector/businessmen-handshake-with-elements-and-icons-of-finance-and-corporate-life-tools.jpg?s=612x612&w=0&k=20&c=QQCXSnQt21cgu6Uq4nP412Uo07Hea9G4BApk25vc4oU="
//           alt="Login visual"
//           className="max-w-full max-h-80 rounded-lg shadow-md"
//         />
//       </div>

//       {/* Login Form Section */}
//       <div className="md:w-1/3 w-full p-6 bg-white text-indigo-900 rounded-lg shadow-md">
//         <h2 className="text-3xl mb-6 text-center font-bold">Login</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <input 
//             type="email" 
//             placeholder="Email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             className="p-3 rounded border border-black"
//             required
//           />
//           <input 
//             type="password" 
//             placeholder="Password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             className="p-3 rounded border border-black"
//             required
//           />
//           <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded font-semibold transition">
//             Login
//           </button>
//         </form>
//       </div>
      
//     </div>
//   );
// }

// export default Login;





// import { useState } from 'react';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:3000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         console.log("Logged in successfully", data);
//         localStorage.setItem('token', data.token);
//       } else {
//         console.error(data.error);
//       }
//     } catch (error) {
//       console.error('Something went wrong:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white">
      
//       {/* Image Section */}
//       <div className="md:w-1/2 w-full flex justify-center items-center p-6">
//         <img
//           src="https://media.istockphoto.com/id/1023100470/vector/businessmen-handshake-with-elements-and-icons-of-finance-and-corporate-life-tools.jpg?s=612x612&w=0&k=20&c=QQCXSnQt21cgu6Uq4nP412Uo07Hea9G4BApk25vc4oU="
//           alt="Login visual"
//           className="max-w-full max-h-80 rounded-lg shadow-2xl border-4 border-white"
//         />
//       </div>

//       {/* Login Form Section */}
//       <div className="md:w-1/3 w-full p-8 bg-white text-indigo-900 rounded-xl shadow-2xl hover:shadow-indigo-500 transition-shadow duration-300">
//         <h2 className="text-3xl mb-6 text-center  font-bold border-b-2 border-indigo-600 pb-2">Login</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//           <input 
//             type="email" 
//             placeholder="Email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             className="p-3 rounded border border-black focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             required
//           />
//           <input 
//             type="password" 
//             placeholder="Password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             className="p-3 rounded border border-black focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             required
//           />
//           <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-blue p-3 rounded font-semibold transition duration-200">
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don't have an account? <a href="/register" className="text-indigo-600 hover:underline">Register here</a>
//         </p>
//       </div>
      
//     </div>
//   );
// }

// export default Login;

// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import {useAuth } from "../store/Auth";
// function Login() {
//   const navigate = useNavigate();
//   const [formData,setFormData] = useState({
//     email:"",
//     password:"",
//   });


//   const handleChange = (e)=>{
//     const {name,value} = e.target;
//     setFormData((prev)=>({...prev,[name]:value}))
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:3000/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body:JSON.stringify(formData)
//   //      body: JSON.stringify({
//   //   username: formData.username,
//   //   password: formData.password,
//   // }),
  
// });
// console.log(res);

      
//       // Get raw text first to avoid JSON parse errors
//       const text = await res.text();

//       let data;
//       try {
//         data = JSON.parse(text);
//       } catch {
//         console.error('Server did not return JSON:', text);
//         return;
//       }

//       if (res.ok) {
//         // save token if needed
//         // localStorage.setItem("token", data.token);
//         // navigate to main page
//         storeTokenInLS(data.token);
//         navigate("/profile"); // <-- change this to wherever you want
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const storeTokenInLS = useAuth()

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white">
      
//       {/* Image Section */}
//       <div className="md:w-1/2 w-full flex justify-center items-center p-6">
//         <img
//           src="https://media.istockphoto.com/id/1023100470/vector/businessmen-handshake-with-elements-and-icons-of-finance-and-corporate-life-tools.jpg?s=612x612&w=0&k=20&c=QQCXSnQt21cgu6Uq4nP412Uo07Hea9G4BApk25vc4oU="
//           alt="Login visual"
//           className="max-w-full max-h-80 rounded-lg shadow-2xl border-4 border-white"
//         />
//       </div>

//       {/* Login Form Section */}
//       <div className="md:w-1/3 w-full p-8 bg-white text-indigo-900 rounded-xl shadow-2xl hover:shadow-indigo-500 transition-shadow duration-300">
//         <h2 className="text-3xl mb-6 text-center font-bold border-b-2 border-indigo-600 pb-2">Login</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//           <input 
//             type="email" 
//             placeholder="Email" 
//             name='email'
//             value={formData.email} 
//             onChange={handleChange} 
//             className="p-3 rounded border border-black focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             required
//           />
//           <input 
//             type="password" 
//             placeholder="Password" 
//             name='password'
//             value={formData.password} 
//             onChange={handleChange} 
//             className="p-3 rounded border border-black focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             required
//           />
//           <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-blue p-3 rounded font-semibold transition duration-200">
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don't have an account? <a href="/register" className="text-indigo-600 hover:underline">Register here</a>
//         </p>
//       </div>
      
//     </div>
//   );
// }

// export default Login;


import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useAuth } from "../store/Auth";
function Login() {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    email:"",
    password:"",
  });
const {storeTokenInLS} = useAuth();
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData((prev)=>({...prev,[name]:value}))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://skillexchange-2cap.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(formData)
  //      body: JSON.stringify({
  //   username: formData.username,
  //   password: formData.password,
  // }),
});
console.log(res);
      // Get raw text first to avoid JSON parse errors
      const text = await res.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        console.error('Server did not return JSON:', text);
        return;
      }

      if (res.ok) {
        // save token if needed
        // localStorage.setItem("token", data.token);
        // navigate to main page
        storeTokenInLS(data.token);
        navigate("/profile"); // <-- change this to wherever you want
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-500 text-white">
      
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-6">
        <img
          src="https://media.istockphoto.com/id/1023100470/vector/businessmen-handshake-with-elements-and-icons-of-finance-and-corporate-life-tools.jpg?s=612x612&w=0&k=20&c=QQCXSnQt21cgu6Uq4nP412Uo07Hea9G4BApk25vc4oU="
          alt="Login visual"
          className="max-w-full max-h-80 rounded-lg shadow-2xl border-4 border-white"
        />
      </div>

      {/* Login Form Section */}
      <div className="md:w-1/3 w-full p-8 bg-white text-indigo-900 rounded-xl shadow-2xl hover:shadow-blue-900 transition-shadow duration-300">
        <h2 className="text-3xl mb-6 text-center font-bold border-b-2 border-indigo-600 pb-2">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input 
            type="email" 
            placeholder="Email" 
            name='email'
            value={formData.email} 
            onChange={handleChange} 
            className="p-3 rounded border border-black focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            name='password'
            value={formData.password} 
            onChange={handleChange} 
            className="p-3 rounded border border-black focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-blue p-3 rounded font-semibold transition duration-200">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <a href="/register" className="text-indigo-600 hover:underline">Register here</a>
        </p>
      </div>
      
    </div>
  );
}

export default Login;
