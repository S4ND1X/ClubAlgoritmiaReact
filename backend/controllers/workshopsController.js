//Import the model of the schema
const workshopsModel = require("../models/workshopsModel");

exports.getWorkshops = async (req, res) => {
  // let filter = {};
  // const level = req.query.level;
  // if (level) {
  //   filter.level = level;
  // }
  //Finding all of workshops
  workshopsModel
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
