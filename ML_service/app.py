from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()
    users = data.get("users", [])
    target = data.get("targetUser", {})

    # Example logic — find users who know what the target wants to learn
    target_skills_to_learn = set(target.get("skillsToLearn", []))
    recommendations = []

    for u in users:
        if u["_id"] != target["_id"]:
            if any(skill in target_skills_to_learn for skill in u.get("skills", [])):
                recommendations.append(u)

    return jsonify({"recommendations": recommendations[:5]})  # top 5

if __name__ == "__main__":
    app.run(port=5000, debug=True)
