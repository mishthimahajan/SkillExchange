// const jwt = require("jsonwebtoken");

// function isLoggedin(req,res,next){
//     const token = req.header("Authorization");
//     const userToken = token.replace("Bearer"," ").trim();
//     if(!token){
//        return res.json({message:"invalid token"})
//     }
//     else{
//         decodedToken = jwt.verify(userToken,"Mishthi");
//         req.user = decodedToken
//         console.log("decoded token",decodedToken);  
//     }
//     next()
// }
// module.exports = isLoggedin;

const jwt = require("jsonwebtoken");

function isLoggedin(req, res, next) {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader) return res.status(401).json({ message: "No token provided" });

    const token = authHeader.split(" ")[1]; // safer than replace
    if (!token) return res.status(401).json({ message: "Invalid token" });

    const decodedToken = jwt.verify(token, "Mishthi");
    req.user = decodedToken;
    console.log("decoded token", decodedToken);

    next();
  } catch (err) {
    console.error("Auth middleware error:", err.message);
    return res.status(401).json({ message: "Unauthorized or invalid token" });
  }
}

module.exports = isLoggedin;

