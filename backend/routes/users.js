// get express function
const express = require('express');

// get router 
const router = express.Router();

// get user model
const User = require('../models/User');

// get user dto
const {UserDto} = require('../dto/User');

// get bcryt 
// const bcrypt = require('bcrypt');
const {hashPassword,comparePassword} = require('../helpers/password');

// get jwt 
// const jwt = require('jsonwebtoken');
const {sign, verfiy} = require('../helpers/jwt');

// get all users 
router.get('/',async function(request,response) {
    const users = await User.find();
    return response.json(users);
});

// signup
router.post('/auth/signup', async function(request,response) {
    // store email value
    const {email} = request.body;
    try {
        // check if email exists
        const userExists = await User.findOne({email});
        if (userExists) {
            return response.status(400).json({"message": "Email aleard exists"});
        }
        // create new user
        const user = new User({
            name: request.body.name,
            email: request.body.email,
            password: hashPassword(request.body.password),
            rule: request.body.rule,
            createdAt: request.body.createdAt
        });
        await user.save(); 
        return response.status(201).json(UserDto(user));
    } catch(error) {
        return response.status(400).json({"message": "Faild SignUp"})
    }
    return response.status(200).json('ok')
});

// auth/signin
router.post('/auth/singin', async function(request,response) {

    const {email} = request.body;

    const user = await User.findOne({email});
    // check if user exists by email
    if (!user) {
        return response.status(400).json({"message": "invalid data email"});
    }

    // check if password valid
    const correctPassword = comparePassword(request.body.password,user.password);
    if (!correctPassword) {
        return response.status(400).json({"message": "invalid data password"});
    }

    // create jwt token
    // const token = jwt.sign(UserDto(user),'lkdflselkshdlfjoe');
    const token = sign(UserDto(user));
    return response.status(200).json({"user":UserDto(user),"token":token});
});
module.exports = router;