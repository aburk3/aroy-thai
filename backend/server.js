const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const menusRouter = require("./routes/menus");
// const locationsRouter = require('./routes/locations');

app.use("/menus", menusRouter);
// app.use('/locations', locationsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
