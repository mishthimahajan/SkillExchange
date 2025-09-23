import { useState } from 'react';
import { FaBell, FaLock, FaPalette, FaUserCog } from 'react-icons/fa';

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    theme: 'light',
    password: '',
    confirmPassword: ''
  });

  const handleToggle = () => {
    setSettings(prev => ({
      ...prev,
      notifications: !prev.notifications
    }));
  };

  const handleThemeChange = (theme) => {
    setSettings(prev => ({
      ...prev,
      theme
    }));
  };

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (settings.password !== settings.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password updated:", settings.password);
    // Here you can send data to backend API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">

      {/* Background Image */}
      <div
  style={{
    backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/010/853/059/small/blue-gears-machinery-vector.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 15,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  }}
></div>


      <div className=" text-indigo-900 rounded-xl shadow-2xl p-6 max-w-md w-full space-y-6 transform hover:scale-105 transition-transform duration-300">
        
        <h2 className="text-2xl font-bold text-center border-b-2 border-indigo-600 pb-2 mb-4">Settings</h2>

        {/* Notifications */}
        <div className="flex items-center justify-between p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition cursor-pointer" onClick={handleToggle}>
          <div className="flex items-center gap-3">
            <FaBell className="text-indigo-600" />
            <span>Notifications</span>
          </div>
          <div className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${settings.notifications ? 'bg-indigo-600' : 'bg-gray-300'}`} onClick={handleToggle}>
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform ${settings.notifications ? 'translate-x-5' : ''} transition-transform`} />
          </div>
        </div>

        {/* Theme Selection */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <FaPalette className="text-indigo-600" />
            <span>Select Theme</span>
          </div>
          <div className="flex gap-4">
            <button onClick={() => handleThemeChange('light')} className={`px-4 py-2 rounded-lg border ${settings.theme === 'light' ? 'bg-indigo-600 text-black' : 'bg-white text-indigo-900 hover:bg-indigo-100'}`}>
              Light
            </button>
            <button onClick={() => handleThemeChange('dark')} className={`px-4 py-2 rounded-lg border ${settings.theme === 'dark' ? 'bg-indigo-600 text-black' : 'bg-white text-indigo-900 hover:bg-indigo-100'}`}>
              Dark
            </button>
          </div>
        </div>

        {/* Change Password */}
        <form onSubmit={handlePasswordUpdate} className="space-y-4">
          <div className="flex items-center gap-3">
            <FaLock className="text-indigo-600" />
            <span>Change Password</span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={settings.password}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={settings.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-black p-3 rounded-lg font-semibold transition-transform hover:scale-105 duration-200">
            Update Password
          </button>
        </form>

        {/* Account Preferences */}
        <div className="p-4 bg-indigo-50 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <FaUserCog className="text-indigo-600" />
            <span>Account Preferences</span>
          </div>
          <p className="text-sm text-black">Manage your account settings and preferences to enhance your experience.</p>
        </div>

      </div>
    </div>
  );
}

export default Settings;
