// import { useState, useEffect } from 'react';

// function Profile() {
//   const [profile, setProfile] = useState({
//     fullName: '',
//     username: '',
//     email: '',
//     phone: '',
//     bio: ''
//   });

//   // Example: Fetch profile data from backend on component mount
//   useEffect(() => {
//     // Replace with your actual API endpoint
//     fetch('http://localhost:5000/api/profile', {
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         setProfile({
//           fullName: data.fullName || '',
//           username: data.username || '',
//           email: data.email || '',
//           phone: data.phone || '',
//           bio: data.bio || ''
//         });
//       })
//       .catch(err => console.error('Error loading profile:', err));
//   }, []);

//   const handleChange = (e) => {
//     setProfile({
//       ...profile,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Profile updated:', profile);
//     // Replace with your actual API call to save profile data
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 p-4">
//       <div className="bg-white text-indigo-900 rounded-xl shadow-2xl max-w-md w-full p-8 space-y-6">
//         <h2 className="text-3xl font-bold text-center border-b-2 border-indigo-600 pb-2">Your Profile</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={profile.fullName}
//             onChange={handleChange}
//             className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             required
//           />

//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={profile.username}
//             onChange={handleChange}
//             className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={profile.email}
//             onChange={handleChange}
//             className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             required
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={profile.phone}
//             onChange={handleChange}
//             className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//           />

//           <textarea
//             name="bio"
//             placeholder="Tell us about yourself"
//             value={profile.bio}
//             onChange={handleChange}
//             rows="4"
//             className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//           />

//           <button
//             type="submit"
//             className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded font-semibold transition duration-200"
//           >
//             Update Profile
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Profile;

// import { useState, useEffect } from 'react';
// import { FaUser, FaEnvelope, FaPhone, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

// function Profile() {
//   const [profile, setProfile] = useState({
//     fullName: '',
//     username: '',
//     email: '',
//     phone: '',
//     bio: '',
//     skills: [],
//     image: null
//   });

//   const [imagePreview, setImagePreview] = useState(null);

//   const allSkills = ['JavaScript', 'React', 'Node.js', 'CSS', 'Python', 'Machine Learning'];

//   useEffect(() => {
//     // Example fetch from backend
//     fetch('http://localhost:5000/api/profile', {
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         setProfile({
//           fullName: data.fullName || '',
//           username: data.username || '',
//           email: data.email || '',
//           phone: data.phone || '',
//           bio: data.bio || '',
//           skills: data.skills || [],
//           image: null
//         });
//       })
//       .catch(err => console.error('Error loading profile:', err));
//   }, []);

//   const handleChange = (e) => {
//     setProfile({
//       ...profile,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfile({ ...profile, image: file });
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSkillToggle = (skill) => {
//     setProfile((prevState) => {
//       const skills = prevState.skills.includes(skill)
//         ? prevState.skills.filter(s => s !== skill)
//         : [...prevState.skills, skill];
//       return { ...prevState, skills };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Profile updated:', profile);
//     // Connect to backend API here
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center relative">
      
//       {/* Background Image */}
//       <div
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           opacity: 0.1,
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: -1
//         }}
//       ></div>

//       {/* Profile Box */}
//       <div className="bg-white text-indigo-900 rounded-xl shadow-2xl p-6 max-w-md w-full space-y-5 transform hover:scale-105 transition-transform duration-300">
        
//         <h2 className="text-2xl font-bold text-center border-b-2 border-indigo-600 pb-2">Your Profile</h2>

//         <div className="flex flex-col items-center">
//           <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-600 hover:border-indigo-800 transition-all duration-300">
//             <img
//               src={imagePreview || "https://via.placeholder.com/150"}
//               alt="Profile"
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="mt-2 text-sm text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 transition-all duration-200"
//           />
//         </div>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <div className="relative">
//             <FaUser className="absolute top-3 left-3 text-indigo-600" />
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={profile.fullName}
//               onChange={handleChange}
//               className="p-3 pl-10 rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               required
//             />
//           </div>

//           <div className="relative">
//             <FaUser className="absolute top-3 left-3 text-indigo-600" />
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={profile.username}
//               onChange={handleChange}
//               className="p-3 pl-10 rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               required
//             />
//           </div>

//           <div className="relative">
//             <FaEnvelope className="absolute top-3 left-3 text-indigo-600" />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={profile.email}
//               onChange={handleChange}
//               className="p-3 pl-10 rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               required
//             />
//           </div>

//           <div className="relative">
//             <FaPhone className="absolute top-3 left-3 text-indigo-600" />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={profile.phone}
//               onChange={handleChange}
//               className="p-3 pl-10 rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             />
//           </div>

//           <div className="relative">
//             <FaInfoCircle className="absolute top-3 left-3 text-indigo-600" />
//             <textarea
//               name="bio"
//               placeholder="Tell us about yourself"
//               value={profile.bio}
//               onChange={handleChange}
//               rows="3"
//               className="p-3 pl-10 rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             />
//           </div>

//           <div>
//             <p className="font-semibold mb-2 text-indigo-600">Select Your Skills</p>
//             <div className="flex flex-wrap gap-2">
//               {allSkills.map((skill) => (
//                 <button
//                   type="button"
//                   key={skill}
//                   onClick={() => handleSkillToggle(skill)}
//                   className={`flex items-center gap-1 px-3 py-1 rounded-full border ${
//                     profile.skills.includes(skill)
//                       ? 'bg-indigo-600 text-black border-indigo-600'
//                       : 'bg-white text-indigo-900 border-gray-300 hover:bg-indigo-100'
//                   } transition`}
//                 >
//                   <FaCheckCircle />
//                   {skill}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="bg-indigo-600 hover:bg-indigo-700 text-black p-3 rounded-lg font-semibold transition-transform hover:scale-105 duration-200"
//           >
//             Update Profile
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Profile;

// import { useState, useEffect } from 'react';

// import { FaUser, FaEnvelope, FaPhone, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';
// import { useAuth } from "../store/Auth"; // ✅ Import useAuth
// import { useNavigate } from "react-router-dom";

// function Profile() {
//   const [profile, setProfile] = useState({
//     fullName: '',
//     username: '',
//     email: '',
//     phone: '',
//     skills:"" ,
//     image: null
//   });
//   const[skills,setskills] = useState("")

//   const [imagePreview, setImagePreview] = useState(null);
//   const { logoutUser } = useAuth();
//   const navigate = useNavigate();
  

//   const allSkills = ['JavaScript', 'React', 'Node.js', 'CSS', 'Python', 'Machine Learning'];

//   // ✅ Corrected useEffect for fetching user profile
//   // useEffect(() => {
//   //   const fetchProfile = async () => {
//   //     try {
//   //       const token = localStorage.getItem("token");
//   //       if (!token) {
//   //         console.error("No token found in localStorage");
//   //         return;
//   //       }

//   //       // ✅ Make sure this matches your backend route
//   //       const res = await fetch(`http://localhost:3000/profile`, {
//   //         method: "GET",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       });

//   //       if (!res.ok) {
//   //         const errData = await res.json();
//   //         console.error("Backend error:", errData);
//   //         return;
//   //         setProfile({  fullName: '',
//   //         username: '',
//   //         email: '',
//   //         phone: '',
//   //         bio: '',
//   //         skills:"",
//   //         image: null})
//   //       }

//   //       const data = await res.json();
//   //       console.log("Profile data:", data);

//   //       // setProfile({
//   //       //   fullName: data.fullName || "",
//   //       //   username: data.username || "",
//   //       //   email: data.email || "",
//   //       //   phone: data.phone || "",
//   //       //   bio: data.bio || "",
//   //       //   skills: data.skills || [],
//   //       //   image: null,
//   //       // });
//   //     } catch (err) {
//   //       console.error("Error loading profile:", err);
//   //     }
//   //   };

//   //   fetchProfile();
//   // }, []);

//   const handleChange = (e) => {
//     setProfile({
//       ...profile,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfile({ ...profile, image: file });
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSkillToggle = (skill) => {
//     setProfile((prevState) => {
//       const skills = prevState.skills.includes(skill)
//         ? prevState.skills.filter(s => s !== skill)
//         : [...prevState.skills, skill];
//       return { ...prevState, skills };
//     });
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const token = localStorage.getItem("token");

 
//   let skillArray = [];
//   if (Array.isArray(profile.skills)) {
//     skillArray = profile.skills;
//   } else if (typeof profile.skills === "string") {
//     skillArray = profile.skills.split(",").map(s => s.trim()).filter(s => s);
//   }

//   if (skillArray.length === 0) {
//     console.log("No skills selected");
//     return;
//   }

//   const res = await fetch(`http://localhost:3000/add-skill`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token}`,
//     },
//     body: JSON.stringify({ skills: skillArray }),
//   });

//   const res_data = await res.json();
//   console.log(res_data);
// };


  
//   const handleLogout = () => {
//     logoutUser(); // clear token
//     navigate("/login"); // redirect to login page
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center relative">
//       <div
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           opacity: 0.4,
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: -1
//         }}
//       ></div>

//       <div className="bg-white text-indigo-900 rounded-xl shadow-2xl p-6 max-w-md w-full space-y-5 transform hover:scale-105 transition-transform duration-300">
//         <h2 className="text-2xl font-bold text-center border-b-2 border-indigo-600 pb-2">Your Profile</h2>

//         <div className="flex justify-end">
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//           >
//             Logout
//           </button>
//         </div>

//         <div className="flex flex-col items-center">
//           <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-600 hover:border-indigo-800 transition-all duration-300">
//             <img
//               src={imagePreview || "https://via.placeholder.com/150"}
//               alt="Profile"
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="mt-2 text-sm text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 transition-all duration-200"
//           />
//         </div>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <div className="relative">
//             <FaUser className="absolute top-3 left-3 text-indigo-600" />
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={profile.fullName}
//               onChange={handleChange}
//               className="p-3 pl-10 rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               required
//             />
//           </div>

//           <div className="relative">
//             <FaUser className="absolute top-3 left-3 text-indigo-600" />
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={profile.username}
//               onChange={handleChange}
//               className="p-3 pl-10 rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               required
//             />
//           </div>

//           <div className="relative">
//             <FaEnvelope className="absolute top-3 left-3 text-indigo-600" />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={profile.email}
//               onChange={handleChange}
//               className="p-3 pl-10 rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               required
//             />
//           </div>

//           <div className="relative">
//             <FaPhone className="absolute top-3 left-3 text-indigo-600" />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={profile.phone}
//               onChange={handleChange}
//               className="p-3 pl-10 rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             />
//           </div>

//           <div className="relative">
//             <FaInfoCircle className="absolute top-3 left-3 text-indigo-600" />
//             <textarea
//               name="skills"
//               placeholder="Tell us about yourself"
//               value={profile.skills}
//               onChange={handleChange}
//               rows="3"
//               className="p-3 pl-10 rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             />
//           </div>

//           <div>
//             <p className="font-semibold mb-2 text-indigo-600">Select Your Skills</p>
           
//           </div>

//           <button
//             type="submit"
//             className="bg-indigo-600 hover:bg-indigo-700 text-black p-3 rounded-lg font-semibold transition-transform hover:scale-105 duration-200"
//           >
//             Update Profile
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaInfoCircle } from "react-icons/fa";
import { useAuth } from "../store/Auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    skills: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    let skillArray = profile.skills
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s);

    const res = await fetch(`https://skillexchange-2cap.onrender.com/add-skill`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ skills: skillArray }),
    });

    const res_data = await res.json();
    console.log(res_data);
  };


  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-600 px-4">
      <div className="bg-white/95 backdrop-blur-md text-indigo-900 rounded-2xl shadow-2xl p-6 w-full max-w-md space-y-4 transition-all duration-300 transform hover:scale-[1.02]">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold border-b-2 border-indigo-500 pb-1">
            Your Profile
          </h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        <div className="flex flex-col items-center mt-2">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
            <img
              src={imagePreview || "https://via.placeholder.com/150"}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <label className="mt-2 text-sm font-semibold text-indigo-700 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            Choose Profile Picture
          </label>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-indigo-600" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={profile.fullName}
              onChange={handleChange}
              className="p-2 pl-9 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400 outline-none text-sm"
              required
            />
          </div>

          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-indigo-600" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={profile.username}
              onChange={handleChange}
              className="p-2 pl-9 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400 outline-none text-sm"
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-indigo-600" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={profile.email}
              onChange={handleChange}
              className="p-2 pl-9 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400 outline-none text-sm"
              required
            />
          </div>

          <div className="relative">
            <FaPhone className="absolute top-3 left-3 text-indigo-600" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={profile.phone}
              onChange={handleChange}
              className="p-2 pl-9 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400 outline-none text-sm"
            />
          </div>

          <div className="relative">
            <FaInfoCircle className="absolute top-3 left-3 text-indigo-600" />
            <textarea
              name="skills"
              placeholder="Add your skills (comma separated)"
              value={profile.skills}
              onChange={handleChange}
              rows="2"
              className="p-2 pl-9 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400 outline-none text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-transform hover:scale-105"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;


