const User = require("../models/user_model.JS");
module.exports = async (req, res) => {
  let response = null;
  try {
    let user = new User(req.body.name, req.body.pass);
    response = await user.sign_in();
    delete new_user.pass;
    delete new_user.user_type_id;
    res.status(response.httpStatus);
  } catch (err) {
    response = err;
    res.status(response.httpStatus);
  }

  res.send(response);
};
