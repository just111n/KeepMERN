require("dotenv").config();

const noteRouter = require("./api/note/router");

const connectDB = require("./db");
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/note", noteRouter);

connectDB();

//start listening on the designed port
app.listen(PORT, () => console.log(`Keep MERN app listening on port ${PORT}!`));

// The unhandledRejection listener
//The unhandledRejection event is emitted whenever a promise rejection is not handled.
//NodeJS warns the console about UnhandledPromiseRejectionWarning and immediately terminates the process.
//The NodeJS process global has an unhandledRejection event.
process.on("unhandledRejection", (error) => {
  console.error("unhandledRejection", error);
});
