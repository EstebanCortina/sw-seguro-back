const User = require("../models/user_model.JS");
module.exports = async (req, res) => {
  let response = null;
  try {
    let new_user = new User(
      req.body.name,
      req.body.email,
      req.body.pass,
      req.body.user_type_name
    );

    response = await new_user.create();
    delete new_user.pass;
    delete new_user.user_type_id;
    res.status(response.httpStatus);
  } catch (err) {
    response = err;
    res.status(response.httpStatus);
  }

  res.send(response);
};

