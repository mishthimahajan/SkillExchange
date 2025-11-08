import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function Match() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const userId = decoded.id || decoded._id;

      const fetchRecommendations = async () => {
        try {
          const res = await fetch(
            `http://localhost:3000/api/ml/recommend/${userId}`
          );
          const data = await res.json();
          console.log("✅ Recommendations received:", data);
          setRecommendations(data.recommendations || []); // ✅ FIXED HERE
        } catch (err) {
          console.error("❌ Error fetching recommendations:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchRecommendations();
    } catch (err) {
      console.error("Invalid token:", err);
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading recommendations...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-3">Skill Match Recommendations</h2>

      {recommendations.length === 0 ? (
        <p>No recommendations found 😢</p>
      ) : (
        <ul className="space-y-3">
          {recommendations.map((rec, i) => (
            <li
              key={i}
              className="border rounded-lg p-3 shadow-md hover:bg-gray-100 transition"
            >
              <h3 className="font-semibold text-lg">{rec.fullName}</h3>
              <p className="text-sm text-gray-600">{rec.email}</p>
              <p className="text-sm text-gray-500">Username: {rec.username}</p>
              <p className="text-sm mt-1">
                <strong>Skills:</strong> {rec.skills?.join(", ") || "N/A"}
              </p>
              <p className="text-sm">
                <strong>Wants to Learn:</strong>{" "}
                {rec.skillsToLearn?.join(", ") || "N/A"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
