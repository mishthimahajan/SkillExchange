var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const userModel = require("../models/User");
const isLoggedin = require("../middleware/isloggedin");
const jwt = require("jsonwebtoken");
const Path = require("path")
var router = express.Router();
const axios =  require("axios")


const multer = require("multer")
const storage = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null,"uploads/")
  },
  filename:function(req,file,cb){
    cb(null, Date.now() + Path.extname(file.originalname));

  }
})
const upload = multer({storage})

router.get("/register", (req, res) =>  {
  res.send("Register route working ");
});


router.post("/register", async (req, res) => {  
  try {
    const { fullName, username, email, phone, password } = req.body;

    
    const existingUser = await userModel.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

   
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    
    const newUser = await userModel.create({
      fullName,
      username,
      email: email.toLowerCase(),
      phone,
      password: hashedPassword,
    });

    console.log("User registered:", newUser);
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// router.get('/', (req, res) => {
//   res.json({ message: 'Auth route is working!' });
// });

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await userModel.findOne({ email: email.toLowerCase() });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     res.status(200).json({ message: "Login successful", user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });
// router.get('/', (req, res) => {
//   res.json({ message: 'Routes working!' });
// });

// POST /login route
router.post("/login",async(req,res) => {
  const{email,password} = req.body;
  console.log(req.body);
  
  if(!email || !password) {
   return res.status(401).json({error:"fill the all data "})
  };
  try {
    const userlogin = await userModel.findOne({email:email});
    if(!userlogin){
      res.status(401).json({message:"user not found"})
    }
    if(userlogin) {
      const isMatch = await bcrypt.compare(password,userlogin.password);
      console.log(isMatch);
      if(!isMatch) {
        res.status(401).json({error:"something went wrong"})

      } else {
        const token = jwt.sign({email:userlogin.email,id:userlogin._id,username:userlogin.username}, "Mishthi",{expiresIn:"2h"});
        res.status(201).json({message:"login success",token:token})
      }
    }
  } catch (error) {
    res.status(400).json({error:"invalid details"})
  }
 })
 router.post("/user",isLoggedin,async(req,res)=>{
    const user = req.user;
    const newUser = await userModel.findOne({email:user.email})
    if(!newUser){
      res.json("user not found")
      console.log("user not found");
    }
    else{
      res.json({newUser})
      console.log("user found",newUser);
    }
 })
 router.get("/profile", isLoggedin, async (req, res) => {
   const user = req.user;
  const newUser = await userModel.findOne({ email: user.email });
  if (!newUser) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(newUser);
});
// app.post("/api/register". upload.single("profileImage"),async(req,res) =>{
  
// })

//   const { fullName, phone, skills, bio, profileImage } = req.body;
//   const user = req.user; // from isLoggedin middleware

//   try {
//     const existingUser = await userModel.findOne({ email: user.email });
//     if (!existingUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Update fields only if provided
//     if (fullName) existingUser.fullName = fullName;
//     if (phone) existingUser.phone = phone;
//     if (skills) existingUser.skills = skills; // should be array
//     if (bio) existingUser.bio = bio;
//     if (profileImage) existingUser.profileImage = profileImage;

//     await existingUser.save();
//     res.status(200).json({ message: "Profile updated successfully", user: existingUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });
// GET all users with skills
// router.get("/explore", async (req, res) => {
//   try {
//     const users = await userModel.find({}, "fullName username skills bio email");
//     res.status(200).json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// Get all profiles
// router.get('/explore', async (req, res) => {
//   try {
//     const users = await userModel.find({}, '-password'); // exclude password
//     res.json({ success: true, users });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });
// router.put("/add-skill", isLoggedin, upload.single("profileImage") ,async (req, res) => {
//   try {
//     const { skills } = req.body;
//     const {profileImage}= req.file?req.body.filename:null;

//     console.log("Received skills:", skills);
//     console.log("Logged-in user:", req.user.email);
//     if (!skills || !Array.isArray(skills) || skills.length === 0) {
//       return res.status(400).json({ error: "Skills are required" });
//     }

//     const user = await userModel.findOneAndUpdate(
//       { email: req.user.email },
//       { $addToSet: { skills: { $each: skills } } },
//       {profileImage:profileImage},
//       { new: true }
//     );

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     res.status(200).json({ message: "Skills added successfully", user });
//   } catch (err) {
//     console.error("Error adding skill:", err);
//     res.status(500).json({ error: err.message });
//   }
// });
router.post("/add-skill", isLoggedin, upload.single("profileImage"), async (req, res) => {
  try {
    const userEmail = req.user.email;
    let { skills, skillsToLearn } = req.body;
   

    // Parse skills if they are sent as JSON string
    let skillArray = [];
    let skillsToLearnArray = [];
    try {
      skillArray = JSON.parse(skills);
      skillsToLearnArray = JSON.parse(skillsToLearn);
    } catch {
      skillArray = Array.isArray(skills) ? skills : [skills];
      skillsToLearnArray = Array.isArray(skillsToLearn) ? skillsToLearn : [skillsToLearn];
    }

    // Build update object
     const updateData = {
        $addToSet: {
          skills: { $each: skillArray },
          skillsToLearn: { $each: skillsToLearnArray },
        },
      };

    // ✅ Add image path if file uploaded
    if (req.file) {
      updateData.profileImage = req.file.path;
    }

    const user = await userModel.findOneAndUpdate(
      { email: userEmail },
      updateData,
      { new: true }
    );

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({
      message: "Profile updated successfully",
      user,
    });
  } catch (err) {
    console.error("Error adding skill:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/findallUser", isLoggedin, async(req,res)=>{
  const user = await userModel.findOne({email:req.user.email})
  console.log(user);
  if(!user){
    res.status(401).json({message:"unauthorised user"})
  }
  else{
     const alluser = await userModel.find()
    if(!alluser){
      res.status(400).json({message:"user not found"})
    }
    else{
      res.status(200).json({AllUsers:alluser})
    }
  }
})
// Change password route using POST
router.post("/change-password", isLoggedin, async (req, res) => {
  try {
    const { newPassword } = req.body;
    if (!newPassword) {
      return res.status(400).json({ message: "New password is required" });
    }

    // Find the logged-in user
    const user = await userModel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// router.post("/update-profile", upload.single("image"), async (req, res) => {
//   try {
//     const { fullName, username, email, phone, skills } = req.body;

//     const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

//     // TODO: Save to DB here (if using database)

//     res.json({
//       success: true,
//       message: "Profile updated successfully",
//       imageUrl: imagePath,
//       data: { fullName, username, email, phone, skills },
//     });
//   } catch (error) {
//     console.error("❌ Error updating profile:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// ML ROUTES 
router.get("/recommend/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const users = await userModel.find();
    const targetUser = await userModel.findById(userId);

    if (!targetUser) return res.status(404).json({ error: "User not found" });

    // send data to Python ML service
    const response = await axios.post("http://localhost:5000/recommend", {
      users,
      targetUser,
    });

    res.json({ recommendations: response.data.recommendations });
  } catch (err) {
    console.error("Error in recommend route:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});





module.exports = router;
