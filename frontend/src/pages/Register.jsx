
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Response from server:", data);
      console.log(response);
      

  //     if (response.ok) {
  //       alert("✅ Registration successful!");
  //       <Navigate to="/login"/>
  //     } else {
  //       alert("⚠ " + (data.message || "Registration failed"));
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("⚠ Something went wrong. Check backend server.");
  //   }
  // };
 if (response.ok) {
        // Registration successful → redirect to login page
        Navigate("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20201026/pngtree-scene-with-geometrical-forms-the-poster-model-minimal-background-render-image_437743.jpg')",
      }}
    >
      <div className="backdrop-blur-md bg-white/80 p-10 w-full max-w-lg rounded-2xl shadow-2xl border border-white/40">
      <h2 className="text-2xl mb-6 text-center font-bold">Create an Account</h2>
     {/* <div className="relative">
       <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20201026/pngtree-scene-with-geometrical-forms-the-poster-model-minimal-background-render-image_437743.jpg"
        alt="workspace background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      />
     </div> */}
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
          className="p-2 rounded border text-black border-gray-300"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 rounded border text-black border-gray-300"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-2 rounded border text-black border-gray-300"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="p-2 rounded border text-black border-gray-300"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="p-2 rounded border text-black border-gray-300"
          required
        />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded font-semibold transition"
        >
          Register
        </button>
      </form>
    </div>
    </div>
    </>
    
    
    
  );
}

export default Register;

