const User = require("../models/user_model.JS");
module.exports = async (req, res) => {
  let new_user = new User(
    req.body.name,
    req.body.pass,
    req.body.user_type_name
  );
  let response = null;
  try {
    response = await new_user.create();
    delete new_user.pass;
    delete new_user.user_type_id;
    res.status(201);
  } catch (err) {
    response = { message: err, data: [] };
    res.status(400);
  }

  res.send(response);
};

