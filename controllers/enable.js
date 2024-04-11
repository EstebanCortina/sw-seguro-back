const User = require("../models/user_model.js");
module.exports = async (req, res) => {
  let response = null;
  try {
    response = await User.set_user_is_active(req.params.id, 1);
    res.status(response.httpStatus);
  } catch (err) {
    response = err;
    res.status(err.httpStatus);
  }

  res.send(response);
};
