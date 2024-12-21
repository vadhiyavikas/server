const mongoose = require("mongoose");

// const URI =  "mongodb://127.0.0.1:27017/mern_admin";
const URI = process.env.MONGODB_URI;
// mongoose.connect(URI);

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection successfully!!");
  } catch (error) {
    console.error("Database connection fail");
    console.error(error);
  }
};

module.exports = connectDb;
