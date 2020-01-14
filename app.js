// using the global variables here
require('dotenv').config({ path: './config/config.env' });
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// mongoDB connection here
const mongoDB = require('./config/db');



// init the express app here
const app = express();

// using the body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enabling the cors here
app.use(cors());


// routes here
app.use('/api/locations', require('./routes/location'));



// port here
const PORT = process.env.PORT || 1200;



// listening to the server here
app.listen(PORT, () => console.log(`Connected to the ${process.env.NODE_env} and PORT = ${PORT}`));

// connnection here
mongoDB();