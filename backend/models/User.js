
// get mongoose 
const mongoose = require('mongoose');

// get user schema
const UserSchema = require('../schema/User');

// create User Model
const User = mongoose.model('users', new mongoose.Schema(UserSchema));

module.exports = User;


