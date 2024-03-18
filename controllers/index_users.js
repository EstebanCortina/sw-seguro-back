const User = require("../models/user_model.js");
module.exports = async (req, res) => {
  if (req.session.user_type_name === "profesor") {
    //Index all users except whom matches the user_id
    let response = await User.index(req.session.user_id);
    res.status(response.httpStatus);
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
