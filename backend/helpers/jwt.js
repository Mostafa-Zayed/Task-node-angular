// get jwt
const jwt = require('jsonwebtoken');

const jwtKey = 'Mlksoehrs.7563423649!@@#$34234';
// sing function 
const sign = (data) => {
    return jwt.sign(data,jwtKey);
}

// verify function 
const verify = (token) => {
    return jwt.verify(token,jwtKey);
}

module.exports = {
    sign,
    verify
}