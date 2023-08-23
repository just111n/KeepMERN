const mongoose = require("mongoose");
const localDB = `mongodb://localhost:27017/${process.env.DBNAME}`;
const remoteDB = `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.ekr2imi.mongodb.net/${process.env.DBNAME}`;

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
