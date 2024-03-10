const User = require("../models/user_model.js");
module.exports = async (req, res) => {
  let response = await User.index("alumno");
  res.status(response.httpStatus).send(response);
};

