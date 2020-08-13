//Get all projects
exports.getWorkshops = async (req, res) => {
  try {
    console.log("====================================");
    console.log(req.params);
    console.log("====================================");
  } catch (error) {
    console.log(error);
    res.status(500).send("An error has ocurred");
  }
};
