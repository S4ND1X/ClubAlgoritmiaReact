const mongoose = require("mongoose");

const WorkshopSchema = mongoose.Schema({
  _id: String,
  level: String,

  name: String,

  instructor: String,
  date: Date,

  description: String,
  link: String,
  image: String,
});

module.exports = mongoose.model("Workshops", WorkshopSchema);
