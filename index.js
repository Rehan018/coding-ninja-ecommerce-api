const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const  connectUsingMongoose  = require('./config/database.js');
const router = require('./routes/productRoutes.js');
const app=express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/products',router);

app.listen(5000,(err)=>{
    if (err) {
        console.log(`Error in running the server: ${err}`);
      }
      console.log(`Server is running on port: ${5000}`);
      connectUsingMongoose();
});