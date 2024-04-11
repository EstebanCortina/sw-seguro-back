const User = require("../models/user_model.js");
module.exports = async (req, res) => {
  let response = null;

  //Index all users except whom matches the user_id
  const current_user_id = req.headers["current"];
  response = await User.index(parseInt(current_user_id));
  res.status(response.httpStatus);
  res.send(response);
};
