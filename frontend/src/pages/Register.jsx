import { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Registering user:', formData);
    
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white text-black rounded-lg shadow-lg">
      <h2 className="text-2xl mb-6 text-center font-bold">Create an Account</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="p-2 rounded border text-black border-gray-300"
          required
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="p-2 rounded border  text-black border-gray-300"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 rounded border  text-black border-gray-300"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-2 rounded border  text-black border-gray-300"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="p-2 rounded border  text-black border-gray-300"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="p-2 rounded border  text-black border-gray-300"
          required
        />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-black p-3 rounded font-semibold transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;



