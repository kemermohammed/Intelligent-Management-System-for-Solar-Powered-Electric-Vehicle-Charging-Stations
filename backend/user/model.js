// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate:validator.isEmail
  },
  password: {
    type: String,
    required: true    
  }
});
userSchema.pre('save', async function forPass(){
  this.password = await bcrypt.hash(this.password,10)
})


module.exports = mongoose.model('User', userSchema);
