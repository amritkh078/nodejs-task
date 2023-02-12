// database connection
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectToDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDb;
