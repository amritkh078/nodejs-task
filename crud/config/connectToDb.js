// database connection
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectToDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
      });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectToDb;
