const User = require("../models/user_model.js");
module.exports = async (req, res) => {
  let response = null;
  try {
    let user = new User(null, req.body.email, req.body.pass);
    response = await user.sign_in();
    req.session.signIn = true;
    req.session.user_id = response["data"].id;
    req.session.email = response["data"].email;
    req.session.user_type_name = response["data"].user_type_name;
    res.status(response.httpStatus);
  } catch (err) {
    response = err;
    res.status(response.httpStatus);
  }

  res.send(response);
};
