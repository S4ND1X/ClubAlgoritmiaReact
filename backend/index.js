const express = require("express");

const connectDB = require("./config/db");

//Create server

const app = express();

//Connect to DB
connectDB();

//App port
const PORT = process.env.PORT || 4000;

//Import routes
app.use("/api/workshops", require("./routes/workshops"));

//Run App
app.listen(PORT, () => {
  console.log("====================================");
  console.log(`arranco en ${PORT}`);
  console.log("====================================");
});
