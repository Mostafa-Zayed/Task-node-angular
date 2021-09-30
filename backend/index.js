// get express function
const express = require('express');

// get database connection function 
const {connectDb} = require('./config/database.js');

// make connection to database
connectDb();

// get express app
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

// get users routes
const usersRoutes = require('./routes/users');

// register users routes
app.use('/users',usersRoutes);


// app port 5000
app.listen(5000);