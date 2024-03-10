const User = require("../models/user_model.JS");
module.exports = async (req, res) => {
  let response = null;
  try {
    let user = new User(null, req.body.email, req.body.pass);
    response = await user.sign_in();
    res.status(response.httpStatus);
  } catch (err) {
    response = err;
    res.status(response.httpStatus);
  }

  res.send(response);
};
