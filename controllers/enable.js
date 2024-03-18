const User = require("../models/user_model.js");
module.exports = async (req, res) => {
  if (req.session.user_type_name === "profesor") {
    let response = null;
    try {
      response = await User.set_user_is_active(req.params.id, 1);
      res.status(response.httpStatus);
    } catch (err) {
      response = err;
      res.status(err.httpStatus);
    }
  } else {
    response = {
      httpStatus: 403,
      message: "Forbiden",
      data: null,
    };
    res.status(response.httpStatus);
  }
  res.send(response);
};
