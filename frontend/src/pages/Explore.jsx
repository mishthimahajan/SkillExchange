import React, { useEffect, useState } from "react";

function Explore() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token"); // For protected route
        const res = await fetch("http://localhost:3000/findallUser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await res.json();
        setUsers(data.AllUsers || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching users:", err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-indigo-800 text-xl">
        Loading users...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-100 to-blue-50 p-8">
      <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
        All Users
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col items-center justify-between p-4"
            style={{ aspectRatio: "1 / 1" }} // Makes card square
          >
            <img
              src={user.image || "https://via.placeholder.com/150"}
              alt={user.fullName}
              className="w-24 h-24 rounded-full border-4 border-indigo-600 object-cover mt-2"
            />

            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold text-indigo-800">{user.fullName}</h2>
              <p className="text-gray-700 text-sm"><span className="font-semibold">Username:</span> {user.username}</p>
              <p className="text-gray-700 text-sm"><span className="font-semibold">Email:</span> {user.email}</p>
              <p className="text-gray-700 text-sm"><span className="font-semibold">Contact:</span> {user.phone || "-"}</p>
            </div>

            <div className="mt-4 w-full">
              <span className="font-semibold text-gray-800 text-sm">Skills:</span>
              <div className="flex flex-wrap gap-1 justify-center mt-1">
                {user.skills && user.skills.length > 0 ? (
                  user.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400 text-xs">No skills</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;



