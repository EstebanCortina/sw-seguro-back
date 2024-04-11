const User = require("../models/user_model.js");
module.exports = async (req, res) => {
  let response = await User.find_by_id(req.params.id);
  res.status(response.httpStatus).send(response);
};
