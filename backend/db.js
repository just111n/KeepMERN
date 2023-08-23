const mongoose = require("mongoose");
const dbName = "keepMERN";
const localDB = `mongodb://localhost:27017/${dbName}`;
const password = "Test123";
const remoteDB = `mongodb+srv://admin-justin:${password}@cluster0.ekr2imi.mongodb.net/${dbName}`;

const connectDB = () => {
  try {
    mongoose.connect(remoteDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
