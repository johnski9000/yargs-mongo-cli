const mongoose = require("mongoose");

require("dotenv").config();

const connection = async () => {
  try {
      // mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (err) {
    console.log(error);
    process.exit(1)
  }
};

module.exports = connection
