// get bcrypt module
const bcrypt = require('bcrypt');

// hashPassword to make password hashed
const hashPassword = (password) => {
    return bcrypt.hashSync(password,10);
}

// comparepassword to compare text with hashed
const comparePassword = (password,hashedPassword) => {
    return bcrypt.compareSync(password,hashedPassword);
}

module.exports = {
    hashPassword,
    comparePassword
}