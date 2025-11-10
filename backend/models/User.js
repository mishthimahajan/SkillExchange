const mongoose = require('mongoose');
require("dotenv").config();
const DB_URL = process.env.MONGO_URI;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  password: {
    type: String,
    required: true
  },
  skills: [String], 
  profileImage: String, 
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);


// const mongoose = require('mongoose');

// // Connect to MongoDB (only if not already connected in main index.js)
// mongoose.connect("mongodb://127.0.0.1:27017/SkillExchange", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const userSchema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//     trim: true
//   },
//   phone: {
//     type: String,
//     default: ""
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   skills: {
//     type: [String],
//     default: []
//   },
//   bio: {
//     type: String,
//     default: ""
//   },
//   profileImage: {
//     type: String,
//     default: ""  // ✅ this ensures no error when image is missing
//   }
// }, { timestamps: true });

// // Export model
// module.exports = mongoose.model('User', userSchema);
