const User = require("../models/user_model.js");
module.exports = async (req, res) => {
  console.log("index all users");
  console.log(req.session);
  let response = {
      httpStatus: 403,
      message: "Forbiden: no access",
      data: null,
  };

  if (req.session.user_type_name !== "profesor") {
  res.status(403).send(response)
  }

  //Index all users except whom matches the user_id
  response = await User.index(req.session.user_id);
  res.status(response.httpStatus);
  res.send(response);
};
