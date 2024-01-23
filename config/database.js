const mongoose = require('mongoose');

// Connection to mongodb.
const url = 'mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-api';

const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set('strictQuery', false);
    console.log("Connected to MongoDB using Mongoose");
  } catch (err) {
    console.log("Error while connecting to db");
    console.log(err);
  }
};

module.exports = connectUsingMongoose;
