const exec_query = require("../helpers/exec_query.js");
const User = require("../models/user_model.JS");
module.exports = (req, res) => {
  console.log(req.body.user_type_id);
  let new_user = new User(
    req.body.username,
    req.body.pass,
    req.body.user_type_id
  );
  new_user.create(exec_query);
  res.status(201).send("OK");
};

