const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/SkillExchange")
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
